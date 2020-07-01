import React from "react";
import { Button, Box, Popover, Typography } from "@material-ui/core";
import MenuItemWrapper from "./MenuItemWrapper";

// const POST_API_3 = "https://jsonplaceholder.typicode.com/posts";

class NotificationMenu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      anchorEl: null,
      anomalies: []
    };
  }

  async componentDidMount() {
    await fetch("https://jsonplaceholder.typicode.com/posts")
      .then(res => res.json())
      .then(data => this.setState({ anomalies: data }))
      .catch(error => console.log(error));
  }
  // getDataFromApi = () => {
  //   fetch("https://jsonplaceholder.typicode.com/posts")
  //     .then(res => res.json())
  //     .then(data => this.setState({ anomalies: data }))
  //     .catch(error => console.log(error));
  // };

  handleClick = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = (event, value) => {
    this.setState({ anchorEl: null });
  };

  onItemClick = num => {
    this.setState({ anchorEl: null });
    console.log(num);
  };

  render() {
    const { anchorEl } = this.state;
    const anomalylist = this.state.anomalies.map(anomaly => (
      <MenuItemWrapper onItemClick={this.onItemClick} id={anomaly.id}>
        <Typography component="div">
          <Box
            textAlign="justify"
            m={0}
            fontWeight="fontWeightBold"
            fontSize="caption.fontSize"
          >
            Patient MR Number :{anomaly.id}
          </Box>
          <Box textAlign="left" m={0} lineHeight={1} fontSize={11}>
            1 Anomaly Detected
          </Box>
        </Typography>
      </MenuItemWrapper>
    ));
    // const { classes } = this.props;
    return (
      <div>
        <div style={{ marginLeft: "200px" }}>
          <Button
            variant="contained"
            color="secondary"
            aria-owns={anchorEl ? "simple-menu" : null}
            aria-haspopup="true"
            onClick={this.handleClick}
          >
            Open Menu
          </Button>
        </div>
        <Popover
          id="simple-menu"
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={this.handleClose}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "center"
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "center"
          }}
          PaperProps={{
            style: {
              width: "270px"
            }
          }}
        >
          <Typography variant="h7">
            <Box
              textAlign="left"
              m={2}
              lineHeight={1}
              fontWeight="fontWeightBold"
              fontSize="h6.fontSize"
            >
              Anomaly Notifications
            </Box>
          </Typography>
          {anomalylist}
        </Popover>
      </div>
    );
  }
}
export default NotificationMenu;
