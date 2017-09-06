var React = require('react');
 var Link = require('react-router-dom').Link;

class Home extends React.Component {

   render(){

    return (
        <div className ='home-container'>
            <h1>Search for Information about Your Local Community</h1>
            <Link className='button' to='/search'>Search...</Link>
        </div>
    )
   }


}

module.exports = Home;