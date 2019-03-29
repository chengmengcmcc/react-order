import React from 'react';
import RecordItem from './RecordItem';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
  return {
    products: state.get('products')
  }
}
const RecordList = ({ match, products }) => {
  let typeId = 0;
  switch (match.params.typeId) {
    case 'passed':
      typeId = 1;
      break;
    case 'audited':
      typeId = 0;
      break;
    case 'failed':
      typeId = 2;
      break;
  }
  const data = products.toJS().filter(item => {
    return item.auditing === typeId;
  })
  return (
    <RecordItem data={data} />
  )
}

export default connect(mapStateToProps, null)(RecordList);