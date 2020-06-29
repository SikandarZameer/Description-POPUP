import React, { Component } from "react";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Paper from "@material-ui/core/Paper";
import Draggable from "react-draggable";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import axios from "axios";

// const POST_API = "https://webhook.site/462bc21d-091e-4609-8ff5-172e205f4423";
const POST_API_1 = "https://webhook.site/102097fa-bdd4-4074-8e0f-5508fad7b0d1";
const POST_API_2 = "https://jsonplaceholder.typicode.com/posts";
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
          PaperComponent={PaperComponent}
          aria-labelledby="draggable-dialog-title"
        >
          <DialogTitle style={{ cursor: "move" }} id="draggable-dialog-title">
            Patient MR Number: 6543213
          </DialogTitle>
          <DialogContent>
            <DialogContentText>
              Time:
              {this.state.time}
              {"    "}
              Date: {this.state.date}
            </DialogContentText>
            <div style={{ width: "100%" }}>
              <TextField
                style={{ width: "100%", margin: "4px" }}
                label=""
                variant="outlined"
                id="mui-theme-provider-outlined-input"
                fullwidth="true"
                onChange={this.handleChange}
              />
            </div>
          </DialogContent>
          <DialogActions>
            <Button
              autoFocus
              // onClick={() => this.handleAcceptPendReject("accept")}
              onClick={this.handleAccept}
              color="primary"
            >
              Accept
            </Button>
            <Button autoFocus onClick={this.handlePend} color="primary">
              Append
            </Button>
            <Button onClick={this.handleReject} color="primary">
              Reject
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}
