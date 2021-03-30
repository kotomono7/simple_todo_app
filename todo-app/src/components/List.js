import React from 'react';
import Todo from './Todo';

const List = ({ list, editList, removeList }) => {
  const renderedList = list.map(
    (item) => (
      <Todo 
        title={item.title} 
        complete={item.completed} 
        key={item._id} 
        editList={(updatedValue) => editList(item._id, updatedValue)}
        removeList={(e) => removeList(item._id)}
      />
    )
  );

  return (
    <div className='ui grid center aligned'>
      {renderedList}
    </div>
  );
}

export default List;
