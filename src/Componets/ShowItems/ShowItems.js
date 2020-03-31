import React, { Fragment } from 'react';
import './ShowItems.css'

const ShowItems = props =>{

  const items = props.items;
  const listItems = items.map(item => {
    return <Fragment key={item.id}>
      <tr>
        <td>{item.name}</td>
        <td>{item.age}</td>
        <td>&times;</td>
      </tr>
    </Fragment>
  })
  return (
    <Fragment>
      {listItems}
    </Fragment>
  );
}

export default ShowItems;