import React from 'react';

const ListSelection = ({ groceryList }) => {
  if(groceryList && groceryList.length !== 0) {
    return (
      <div className="listSelection">
        <div className="listTable">
            <table>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Category</th>
                  <th>Delivery Method</th>
                </tr>
              </thead>
              <tbody>
                {
                  groceryList.map((list) => (list.selected) ?
                  (<tr key={list.id}>
                    <td>{list.id}</td>
                    <td>{list.name}</td>
                    <td>{list.category}</td>
                    <td>{list.deliveryMethod}</td>
                  </tr>
                  ): null
                  )
                }
              </tbody>
            </table>
          </div>
      </div>
    )
  }
  return 'no selected items'
};

export default ListSelection;
