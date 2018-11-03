import React from 'react';
import PropTypes from 'prop-types';
import GuestInputForm from './GuestInputForm';

const Header = (props) => {
  return (
    <header>
    <h1>RSVP</h1>
      <p>A simple React App</p>
      <GuestInputForm
        addInvitee={props.addInvitee}
        handleNameInput={props.handleNameInput}
        pendingGuest={props.pendingGuest}
      />
  </header>
  );
}

Header.propTypes = {
  addInvitee: PropTypes.func.isRequired,
  handleNameInput: PropTypes.func.isRequired,
  pendingGuest: PropTypes.string
}


export default Header;