var React = require('react');



  
  
  
  class Search extends React.Component {
     constructor(props) {
      super(props);
      this.state = {
        searchTerm: '',
      };
    } 
  
  

  
  
    render() {
     return (
        <div >
          
          <p className="App-intro">
            Food Search
          </p>
          <p><input type="text" 
              className="rounded" 
              placeholder="Search foods..."
              value={this.state.searchTerm}  />
          </p>
        </div>
      );
    }
  }
  
  module.exports  = Search;