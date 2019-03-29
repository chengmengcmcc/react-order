import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';

const Alert = (props) => (
  <Dialog
    open={props.openAlert}
    onClose={props.closeAlert}
    aria-labelledby="alert-dialog-title"
    aria-describedby="alert-dialog-description"
    fullWidth
  >
    <DialogTitle id="alert-dialog-title">提示</DialogTitle>
    <DialogContent>
      <DialogContentText id="alert-dialog-description">
        {props.alertMsg}
      </DialogContentText>
    </DialogContent>
    <DialogActions>
      <Button onClick={props.closeAlert} color="primary" autoFocus>
        知道了
      </Button>
    </DialogActions>
  </Dialog>
)

export default Alert;