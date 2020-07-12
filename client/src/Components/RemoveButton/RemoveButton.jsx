import React, { useState } from 'react';
//import { ReactComponent as KebabIcon } from '../../Assets/Icons/Icon-kebab-default.svg';
import './RemoveButton.scss'
//import axios from 'axios';

const urlW = 'http://localhost:8080'

function RemoveButton() {

  // deleteHandler() {
  //   axios
  //     .delete(`${urlW}/inventory/${this.props.deleteItem}`)
  //     .then(res => {
  //       console.log(res);
  //     })
  //     .catch(err => {
  //       console.log(err);
  //     })
  // }

  const [toggled, toggle] = useState(false);
  return (
    <>
      <div className="remove">{toggled && <button className="remove__button">Remove</button>}</div>
        {/* <img src={kebabIcon} alt="Kebab Icon" className="remove__icon" onClick={() => toggle(toggled => !toggled)} /> */}
        {/* <KebabIcon className="remove__icon" onClick={() => toggle(toggled => !toggled)} /> */}
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