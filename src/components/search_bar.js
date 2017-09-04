import React, { Component } from 'react';

class SearchBar extends Component {
  render() {
    // refactored 1.16.1 return <input onChange={this.onInputChange} />;
    // create an input with onChange property and have onChange trigger
    // onInputChange function
    // 1.16.1 refactor below; 1.16.2 took off parens from (event)
    return <input onChange={event => console.log(event.target.value)} />;
  }
  /* refactored as part of 1.16.1
  onInputChange(event) {
    // event object describes what event occurred
    // technical properties like what the text was that changed
    console.log(event.target.value);
  }
  */
}

export default SearchBar;
