import { TOGGLE_NAV, AMOUNT_CHANGE, CUST_NAME_CHANGE, CUST_PHONE_CHANGE, PROD_NAME_CHANGE,ADD_PRODUCT ,INIT_PRODUCT} from './actionType';

export const toggleNav = () => ({
  type: TOGGLE_NAV
})

export const amountChange = (value) => ({
  type: AMOUNT_CHANGE,
  value
})

export const customerNameChange = (value) => ({
  type: CUST_NAME_CHANGE,
  value
})

export const customerPhoneChange = (value) => ({
  type: CUST_PHONE_CHANGE,
  value
})

export const proNameChange = (value) => ({
  type: PROD_NAME_CHANGE,
  value
})

export const addProduct = (product) => ({
  type: ADD_PRODUCT,
  product
})

export const initProduct = () => ({
  type: INIT_PRODUCT
})


