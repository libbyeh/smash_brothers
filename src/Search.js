import React, { Component } from 'react';
import './styles/main.scss';
 



  class Search extends Component {
      render() {
       return (
          <input onKeyUp={e => this.props.search(e.target.value)} className='search-input' placeholder='search by name' type='text' />
      )
     }
  }




  export default Search;