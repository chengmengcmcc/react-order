import { fromJS } from 'immutable';
import { TOGGLE_NAV, AMOUNT_CHANGE, CUST_NAME_CHANGE, CUST_PHONE_CHANGE, PROD_NAME_CHANGE, ADD_PRODUCT, INIT_PRODUCT } from './actionType';

const initialState = fromJS({
  navShow: false,
  productInfo: {},
  products: []
})

export default (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_NAV:
      const show = state.get('navShow')
      return state.set('navShow', !show);
    case AMOUNT_CHANGE:
      const amount = action.value;
      return state.setIn(['productInfo', 'amount'], amount);
    case CUST_NAME_CHANGE:
      const customerName = action.value;
      return state.setIn(['productInfo', 'customerName'], customerName);
    case CUST_PHONE_CHANGE:
      const customerPhone = action.value;
      return state.setIn(['productInfo', 'customerPhone'], customerPhone);
    case PROD_NAME_CHANGE:
      const proName = action.value;
      return state.setIn(['productInfo', 'proName'], proName);
    case ADD_PRODUCT:
      return state.update('products', item => item.push(action.product));
    case INIT_PRODUCT:
      return state.set('productInfo', fromJS({}));
    default:
      return state;
  }
}