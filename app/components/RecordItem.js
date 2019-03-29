import React from 'react';

const RecordItem = ({ data }) => {
  if (data.length <= 0) {
    return (<div>暂无数据</div>)
  }
  return (
    <ul>
      {
        data.map(item => (
          <li key={item.createdTime}>
            <span>创建时间：{item.createdTime}</span>
            <span>{item.auditing ? item.auditing === 1 ? '已通过':'未通过':'待审核'}</span>
          </li>
        ))
      }
    </ul>
  )
}

export default RecordItem;