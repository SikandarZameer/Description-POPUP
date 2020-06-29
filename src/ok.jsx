import React, { Component } from "react";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogActions from "@material-ui/core/DialogActions";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import CheckCircleOutlineIcon from "@material-ui/icons/CheckCircleOutline";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";

export default class Demo1 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      open: false
    };
  }
  handleClickOpen = () => {
    this.setState({
      open: true
    });
  };

  handleClose = () => {
    this.setState({
      open: false
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
          aria-labelledby="draggable-dialog-title"
        >
          {/* <div style={{ width: 600, height: 350 }}> */}
          <Grid
            container
            direction="column"
            wrap="no-wrap"
            justify="center"
            alignItems="center"
          >
            <Grid item xs={12}>
              <CheckCircleOutlineIcon
                style={{
                  width: 200,
                  height: 200
                  // fill: "yellow"
                }}
              />
            </Grid>
            {/* <img src={logo} alt="Logo" /> */}
            <Grid item xs={12}>
              <DialogTitle
                style={{ cursor: "move" }}
                id="draggable-dialog-title"
              >
                <Typography>
                  <Box fontSize={32} fontWeight="fontWeightBold" lineHeight={0}>
                    Success!
                  </Box>
                </Typography>{" "}
              </DialogTitle>
            </Grid>

            <Grid item xs={12}>
              <Typography>
                <Box
                  fontSize={16}
                  fontWeight="fontWeightRegular"
                  lineHeight={2}
                >
                  Your response was submitted successfully!
                </Box>
              </Typography>
            </Grid>

            <Grid item xs={12}>
              <DialogActions>
                <div style={{ width: 120 }}>
                  <Button
                    autoFocus
                    fullWidth={true}
                    size="large"
                    variant="contained"
                    onClick={this.handleClose}
                    color="primary"
                  >
                    ok
                  </Button>
                </div>
              </DialogActions>
            </Grid>
          </Grid>
          {/* </div> */}
        </Dialog>
      </div>
    );
  }
}
