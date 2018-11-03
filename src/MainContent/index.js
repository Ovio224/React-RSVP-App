import React from 'react';
import GuestList from './GuestList';
import Counter from './Counter';
import ConfirmedFilter from './ConfirmedFilter';

const MainContent = (props) => {
  return (
    <div className="main">
    <ConfirmedFilter 
    toggleFilter={props.toggleFilter}
    isFiltered={props.isFiltered}
    />
    <Counter 
    numberAttending={props.numberAttending}
    numberUnconfirmed={props.numberUnconfirmed}
    totalInvited={props.totalInvited}
    />
    
    <GuestList
    pendingGuest={props.pendingGuest}
    guests={props.guests}
    toggleConfirmationAt={props.toggleConfirmationAt}
    toggleEditingAt={props.toggleEditingAt}
    setNameAt={props.setNameAt}
    isFiltered={props.isFiltered}
    removeGuest={props.removeGuest}
    />
  </div>    
  );
}

export default MainContent;