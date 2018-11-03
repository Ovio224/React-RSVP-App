import React, { Component } from 'react';

import Header from './Header';
import MainContent from './MainContent';

class App extends Component {

  state = {
    isFiltered: false,
    pendingGuest: "",
    guests: [
      {
        name: 'Ovi',
        isConfirmed: false,
        isEditing: false
      },
      {
        name: 'Nick',
        isConfirmed: true,
        isEditing: false
      },
      {
        name: 'Robocup',
        isConfirmed: false,
        isEditing: false
      }
    ]
  }

  toggleGuestPropertyAt = (property, indexToChange) => {
    this.setState({
      guests: this.state.guests.map((guest, index) => {
        if(index === indexToChange) {
          return {
            ...guest,
            [property]: !guest[property]
          }; // end return
        }
        return guest;
      }) // end map
    }); //end setstate
  }

  handleNameInput = (event) => {
    this.setState({
      pendingGuest: event.target.value
    });
  }

  handleRemoveGuest = (index) => {
    this.setState({
      guests: [
        ...this.state.guests.slice(0, index),
        ...this.state.guests.slice(index + 1)
      ]
    });
  }

  toggleConfirmationAt = index => {
    this.toggleGuestPropertyAt("isConfirmed", index);
  }

  toggleEditingAt = index => {
    this.toggleGuestPropertyAt("isEditing", index);
  }

  setNameAt = (name, indexToChange) => {
    this.setState({
      guests: this.state.guests.map((guest, index) => {
        if(index === indexToChange) {
          return {
            ...guest,
            name
          }; // end return
        }
        return guest;
      }) // end map
    }); //end setstate
  }
  
  toggleFilter = () => {
    this.setState({ isFiltered: !this.state.isFiltered })
  }

  addInvitee = (e) => {
    e.preventDefault();
    this.setState({
        guests: [
          {
            name: this.state.pendingGuest,
            isConfirmed: false,
            isEditing: false
          },
          ...this.state.guests
        ],
        pendingGuest: ''
    });
  }

  getTotalInvited = () => this.state.guests.length;

  getAttendingGuests = () => this.state.guests.reduce((total, guest) => 
      guest.isConfirmed ? total + 1 : total, 0);
  
  // getUnconfirmedGuests = () => {}

  render() {
    const totalInvited = this.getTotalInvited()
    const numberAttending = this.getAttendingGuests();
    const numberUnconfirmed = totalInvited - numberAttending;
    return (
      <div className="App">
      <Header 
        addInvitee={this.addInvitee}
        handleNameInput={this.handleNameInput}
        pendingGuest={this.state.pendingGuest}
      />
      <MainContent
      toggleFilter={this.toggleFilter}
      pendingGuest={this.state.pendingGuest}
      guests={this.state.guests}
      toggleConfirmationAt={this.toggleConfirmationAt}
      toggleEditingAt={this.toggleEditingAt}
      setNameAt={this.setNameAt}
      isFiltered={this.state.isFiltered}
      removeGuest={this.handleRemoveGuest}
      numberAttending={numberAttending}
      numberUnconfirmed={numberUnconfirmed}
      totalInvited={totalInvited}
      />
      </div>
    );
  }
}

export default App;
