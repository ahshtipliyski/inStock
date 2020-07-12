import React, { useState } from 'react';
//import { ReactComponent as KebabIcon } from '../../Assets/Icons/Icon-kebab-default.svg';
import './RemoveButton.scss'


function RemoveButton({deleteHandler, deleteItem}) {

  const [toggled, toggle] = useState(false);
  return (
    <>
      <div className="remove">{toggled && <button onClick={() => deleteHandler(deleteItem)} className="remove__button">Remove</button>}</div>
        <svg
          margin="none"
          width="4"
          height="20"
          xmlns="http://www.w3.org/2000/svg"
          className="remove__icon"
          onClick={() => toggle(toggled => !toggled)} 
          >
          <path
            className="default-icon"
            d="M0 2a2 2 0 114 0 2 2 0 01-4 0zm0 8a2 2 0 114 0 2 2 0 01-4 0zm0 8a2 2 0 114 0 2 2 0 01-4 0z"
            fill={toggled ? "#323232" : "#AFAFAF"}
          />
        </svg>
    </>
  )
}

export default RemoveButton;