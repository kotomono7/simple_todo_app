import React, { useState } from 'react';

const Todo = ({ title, completed, editList, removeList }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [value, setValue] = useState(title);
  const [tempValue, setTempValue] = useState(title);
  const [completedState, setCompletedState] = useState(completed);

  const handleDivDoubleClick = () => {
    setIsEditing(true);
  }

  const handleInputKeyDown = (e) => {
    const key = e.keyCode;

    if (key === 13) { // enter key
      editList({ title: tempValue });
      setValue(tempValue);
      setIsEditing(false);
    } else if (key === 27) { // esc key
      setTempValue(value);
      setIsEditing(false);
    }
  }

  const handleInputOnChange = (e) => {
    setTempValue(e.target.value);
  }

  const handleButtonClick = () => {
    setCompletedState((oldCompleted) => {
      const newCompleted = !oldCompleted;
      editList({ completed: newCompleted });

      return newCompleted;
    });
  }

  return (
    <div className='row'>
      { isEditing ? 
        <div className='column seven wide'>
          <div className='ui input fluid'>
            <input 
              onKeyDown={handleInputKeyDown}
              onChange={handleInputOnChange}
              autoFocus={true}
              value={tempValue}
            />
          </div>
        </div> :
        <>
          <div className='column five wide' onDoubleClick={handleDivDoubleClick}>
            <h2 className={'ui header ' + (completedState ? 'green' : '')}>{value}</h2>
          </div>
          <div className='column one wide'>
            <buttton 
              className={'ui button circular icon ' + (completedState ? 'blue' : 'green')} 
              onClick={handleButtonClick}>
              <i className='check icon white'></i>
            </buttton>
          </div>
          <div className='column one wide'>
            <buttton className='ui button circular icon red' onClick={removeList}>
                <i className='remove icon white'></i>
            </buttton>
          </div>
        </>
      }
    </div>
  );
}

export default Todo;
