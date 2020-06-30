import React, { Component } from "react";
import Dialog from "@material-ui/core/Dialog";
import Paper from "@material-ui/core/Paper";
import Draggable from "react-draggable";
import Button from "@material-ui/core/Button";
import Descriptionbody from "./Components/Descriptionbody";
// import axios from "axios";

// const POST_API = "https://webhook.site/462bc21d-091e-4609-8ff5-172e205f4423";
const POST_API_1 = "https://webhook.site/102097fa-bdd4-4074-8e0f-5508fad7b0d1";
// const POST_API_2 = "https://jsonplaceholder.typicode.com/posts";

function PaperComponent(props) {
  return (
    <Draggable
      handle="#draggable-dialog-title"
      cancel={'[class*="MuiDialogContent-root"]'}
    >
      <Paper {...props} />
    </Draggable>
  );
}

export default class PendRejectDialog extends Component {
  constructor(props) {
    super(props);

    this.state = {
      open: false,
      description: null,
      explanation: {
        accept: null,
        pend: null,
        reject: null
      },
      time: "",
      date: ""
    };
  }

  handleClickOpen = () => {
    this.setState({
      open: true,
      explanation: {
        accept: "",
        pend: "",
        reject: ""
      },
      time: new Date().toLocaleTimeString("en-US", {
        hour12: true,
        hour: "numeric",
        minute: "numeric"
      }),
      date: new Date().toLocaleDateString()
    });
  };

  handleClose = () => {
    this.setState({
      open: false
    });
  };

  handleChange = event => {
    this.setState({
      description: event.target.value
    });
  };
  handleAccept = () => {
    this.handleAcceptPendReject("accept");
  };

  handlePend = () => {
    this.handleAcceptPendReject("pend");
  };

  handleReject = () => {
    this.handleAcceptPendReject("reject");
  };
  handleAcceptPendReject = name => {
    this.setState(
      st => ({
        open: false,
        explanation: {
          ...st.explanation,
          [name]: st.description
        }
      }),
      this.postData
    );
    // this.postData();
  };

  postData = async () => {
    // await axios
    //   .post(POST_API_2, {
    //     time: this.state.time,
    //     date: this.state.date,
    //     description: this.state.description,
    //     explanation: this.state.explanation
    //   })
    //   .then(response =>
    //     response.status === 201
    //       ? console.log(response.data)
    //       : console.log("error")
    //   );

    await fetch(POST_API_1, {
      method: "POST",
      mode: "no-cors",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        time: this.state.time,
        date: this.state.date,
        description: this.state.description,
        explanation: this.state.explanation
      })
    }).then(res => {
      if (res.status !== 200) {
        console.log(res.data);
      } else {
        res.json().then(data => {
          console.log(data);
        });
      }
    });
  };

  render() {
    return (
      <div>
        <Button
          variant="outlined"
          color="primary"
          onClick={this.handleClickOpen}
        >
          Open form dialog
        </Button>
        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          fullWidth="true"
          maxWidth="sm"
          PaperComponent={PaperComponent}
          aria-labelledby="draggable-dialog-title"
        >
          {this.state.open && (
            <Descriptionbody
              time={this.state.time}
              date={this.state.date}
              handleChange={this.handleChange}
              handleAccept={this.handleAccept}
              handlePend={this.handlePend}
              handleReject={this.handleReject}
            />
          )}
        </Dialog>
      </div>
    );
  }
}
