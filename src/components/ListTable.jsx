import React from 'react';

export const ListTable = ({ groceryList, removeItem, selectItem }) => {
  const updateChecked = (e, id) => {
    const value = e.target.checked;
    selectItem(id, value);
    return value;
  }
  const removeItemHandler = (item) => {
    removeItem(item)
  }
  if(groceryList && groceryList.length !== 0) {
    return (
      <div className="listTable">
        <table>
          <thead>
            <tr>
              <th>Select</th>
              <th>ID</th>
              <th>Name</th>
              <th>Category</th>
              <th>Delivery Method</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {
              groceryList.map(list => 
              <tr key={list.id}>
                <td><input type='checkbox' onChange={(e) => updateChecked(e, list.id)} /></td>
                <td>{list.id}</td>
                <td>{list.name}</td>
                <td>{list.category}</td>
                <td>{list.deliveryMethod}</td>
                <td><button onClick={() => removeItemHandler(list.id)}>Delete</button></td>
              </tr>
              )
            }
          </tbody>
        </table>
      </div>
    )
  }
  return 'No items to display'
};

export default ListTable
