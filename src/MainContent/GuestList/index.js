import React from 'react';
import PropTypes from 'prop-types';
import Guest from './Guest';
import PendingGuest from './PendingGuest'


const GuestList = (props) => 
<ul>
  <PendingGuest name={props.pendingGuest}/>
  { props.guests
  .filter(guest => !props.isFiltered || guest.isConfirmed)
  .map( (guest,index) => 
    <Guest 
      key={index}
      name={guest.name}
      isConfirmed={guest.isConfirmed}
      isEditing={guest.isEditing}
      handleConfirmation={() => props.toggleConfirmationAt(index)}
      handleEditing={() => props.toggleEditingAt(index)}
      setName={text => props.setNameAt(text, index)}
      removeGuest={() => props.removeGuest(index)}
      />
    )}
</ul>


GuestList.propTypes = {
  guests: PropTypes.array.isRequired,
  toggleConfirmationAt: PropTypes.func.isRequired,
  toggleEditingAt: PropTypes.func.isRequired,
  setNameAt: PropTypes.func.isRequired,
  isFiltered: PropTypes.bool.isRequired,
  removeGuest: PropTypes.func.isRequired,
  pendingGuest: PropTypes.string
}

export default GuestList;