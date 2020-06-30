import React from "react";
import { Button, Box, Popover, Typography } from "@material-ui/core";
import MenuItemWrapper from "./MenuItemWrapper";

class NotificationMenu extends React.Component {
  state = {
    anchorEl: null
  };

  handleClick = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = (event, value) => {
    this.setState({ anchorEl: null });
  };

  onItemClick = num => {
    console.log("onItemClick!");
    console.log(num);
  };
  render() {
    const { anchorEl } = this.state;
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
          {/* value={12} remove={this.remove} */}
          <MenuItemWrapper onItemClick={this.onItemClick} id={1}>
            <Typography component="div">
              <Box
                textAlign="justify"
                m={0}
                fontWeight="fontWeightBold"
                fontSize="caption.fontSize"
              >
                Patient MR Number : 136587
              </Box>
              <Box textAlign="left" m={0} lineHeight={1} fontSize={11}>
                1 Anomaly Detected
              </Box>
            </Typography>
          </MenuItemWrapper>

          {/* <MenuItem onClick={() => this.onItemClick(1)}>
            <Typography component="div">
              <Box
                textAlign="justify"
                m={0}
                fontWeight="fontWeightBold"
                fontSize="caption.fontSize"
              >
                Patient MR Number : 136587
              </Box>
              <Box textAlign="left" m={0} lineHeight={1} fontSize={11}>
                1 Anomaly Detected
              </Box>
            </Typography>
          </MenuItem> */}
          {/* <MenuItem
            onClick={this.handleClose}
            style={{ backgroundColor: "lightgrey" }}
          >
            <Typography component="div">
              <Box
                textAlign="justify"
                m={0}
                fontWeight="fontWeightBold"
                fontSize="caption.fontSize"
              >
                Patient MR Number : 136587
              </Box>
              <Box textAlign="left" m={0} lineHeight={1} fontSize={11}>
                1 Anomaly Detected
              </Box>
            </Typography>
          </MenuItem> */}
        </Popover>
      </div>
    );
  }
}
export default NotificationMenu;

// {
//   this.state.data.map((row,index)=> (
//    <TableRow style ={ index % 2? { background : "#fdffe0" }:{ background : "white" }}>
//   ...
//   </TableRow>
//   ))}
