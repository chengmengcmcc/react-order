import React, { Component, Fragment } from 'react';
import Header from '../components/Header';
import Nav from '../components/Nav';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';
import Dialog from '@material-ui/core/Dialog';
import RadioGroup from '@material-ui/core/RadioGroup';
import Radio from '@material-ui/core/Radio';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Button from '@material-ui/core/Button';
import Alert from '../components/Alert';
import { connect } from 'react-redux';
import { amountChange, customerNameChange, customerPhoneChange, proNameChange, addProduct, initProduct } from '../store/actions';

const styles = (theme) => ({
  wrapper: {
    marginTop: 50,
    minHeight: 'calc(100vh - 50px)',
    overflow: 'hidden'
  },
  formEle: {
    padding: '0 15px',
  },
})
const options = [
  'None',
  'Atria',
  'Callisto',
  'Dione',
  'Ganymede',
  'Hangouts Call',
  'Luna',
  'Oberon',
  'Phobos',
  'Pyxis',
  'Sedna',
  'Titania',
  'Triton',
  'Umbriel',
];
const mapStateToProps = (state, ownProps) => {
  return {
    amount: state.get('productInfo').get('amount') ||'',
    customerName: state.get('productInfo').get('customerName') ||'',
    customerPhone: state.get('productInfo').get('customerPhone') ||'',
    proName: state.get('productInfo').get('proName') ||'',
  }
}
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    amountChange: (e) => {
      dispatch(amountChange(e.target.value))
    },
    customerNameChange: (e) => {
      dispatch(customerNameChange(e.target.value))
    },
    customerPhoneChange: (e) => {
      dispatch(customerPhoneChange(e.target.value))
    },
    proNameChange: (e) => {
      dispatch(proNameChange(e.target.value))
    },
    addProduct: (arr, cb) => {
      for (let key in arr) {
        switch (key) {
          case 'amount':
            if (!arr[key]) {
              cb('请输入金额');
              return;
            }
          case 'customerName':
            if (!arr[key]) {
              cb('请输入客户姓名');
              return;
            }
          case 'customerPhone':
            if (!arr[key]) {
              cb('请输入客户电话');
              return;
            }
          case 'proName':
            if (!arr[key]) {
              cb('请选择产品');
              return;
            }
        }
      }
      const obj = {
        createdTime: new Date().getTime(),
        auditing: 0
      }

      const product = Object.assign(arr, obj);
      dispatch(addProduct(product));
      cb('提交成功');
      dispatch(initProduct());
    }
  }
}
class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dialogShow: false,
      openAlert: false,
      alertMsg: ''
    };
    this.showDialog = this.showDialog.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
    this.handleOk = this.handleOk.bind(this);
    this.handleEntering = this.handleEntering.bind(this);
    this.closeAlert = this.closeAlert.bind(this);
    this.showAlert = this.showAlert.bind(this);
  }
  showDialog() {
    this.setState({
      dialogShow: true
    })
  }
  handleCancel() {
    this.setState({
      dialogShow: false
    })
  }
  handleOk() {
    this.setState({
      dialogShow: false
    })
  }
  handleEntering() {
    this.radioGroupRef.focus();
  }
  closeAlert() {
    this.setState({
      openAlert: false,
      alertMsg: ''
    })
  }
  showAlert(msg) {
    this.setState({
      openAlert: true,
      alertMsg: msg
    })
  }
  render() {
    const { classes, amount, customerName, customerPhone, proName, amountChange, customerNameChange, customerPhoneChange, proNameChange, addProduct } = this.props
    return (
      <Fragment>
        <Header />
        <div className={classes.wrapper}>

          <div className={classes.formEle}>
            <Typography variant="h6" color="textPrimary">
              请输入您的信息
            </Typography>

            <TextField label="销售金额" className={classes.textField} value={amount} margin="dense" onChange={amountChange} fullWidth />
            <TextField label="客户姓名" className={classes.textField} value={customerName} margin="dense" onChange={customerNameChange} fullWidth />
            <TextField label="客户电话" className={classes.textField} value={customerPhone} margin="dense" onChange={customerPhoneChange} fullWidth />
            <Typography variant="h6">
              请选择产品
            </Typography>
            <div style={{ height: 40, textAlign: 'center', lineHeight: 2.4, backgroundColor: "#eee" }} onClick={this.showDialog}>
              {proName ? proName : '选择产品'}
            </div>
            <Dialog disableBackdropClick disableEscapeKeyDown maxWidth="xs" onEntering={this.handleEntering} aria-labelledby="confirmation-dialog-title" open={this.state.dialogShow} fullWidth>
              {/* <DialogTitle id="confirmation-dialog-title">选择产品</DialogTitle> */}
              <DialogContent>
                <RadioGroup
                  ref={ref => {
                    this.radioGroupRef = ref;
                  }}
                  aria-label="Ringtone"
                  name="ringtone"
                  value={proName}
                  onChange={proNameChange}
                >
                  {options.map(option => (
                    <FormControlLabel value={option} key={option} control={<Radio />} label={option} />
                  ))}
                </RadioGroup>
              </DialogContent>
              <DialogActions>
                <Button onClick={this.handleCancel} color="primary">  取消  </Button>
                <Button onClick={this.handleOk} color="primary">确定</Button>
              </DialogActions>
            </Dialog>
            <Typography variant="h6" >
              请上传图片
            </Typography>
            <div style={{ height: 40, textAlign: 'center', lineHeight: 2.4, backgroundColor: "#eee" }} onClick={this.showDialog}>
              上传图片
            </div>
            <div>

            </div>

            <Button variant="contained" style={{ backgroundColor: '#2196f3', color: '#fff', marginTop: 10 }} fullWidth onClick={addProduct.bind(this, { amount, customerName, customerPhone, proName }, this.showAlert)}>提交</Button>
          </div>
          <Alert openAlert={this.state.openAlert} alertMsg={this.state.alertMsg} closeAlert={this.closeAlert} />
        </div>
        <Nav />
      </Fragment>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(Home));