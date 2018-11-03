import React from 'react';
import PropTypes from 'prop-types';
import GuestName from './GuestName';

const Guest = (props) => {
  return (
    <li>
      <GuestName 
      handleNameEdits={e => props.setName(e.target.value)}
      isEditing={props.isEditing}>
      {props.name}
      </GuestName>
      <label>
        <input type="checkbox" 
        checked={props.isConfirmed}
        onChange={props.handleConfirmation} /> Confirmed
      </label>
      <button onClick={props.handleEditing}>
        {props.isEditing ? "Save" : "Edit"}
      </button>
      <button onClick={props.removeGuest}>remove</button>
    </li>
  )
}

Guest.propTypes = {
  name: PropTypes.string.isRequired,
  isConfirmed: PropTypes.bool.isRequired,
  isEditing: PropTypes.bool.isRequired,
  handleConfirmation: PropTypes.func.isRequired,
  handleEditing: PropTypes.func.isRequired,
  setName: PropTypes.func.isRequired,
  removeGuest: PropTypes.func.isRequired
}

export default Guest;