var React = require('react');
var PropTypes = require('prop-types');

class Logout extends React.Component {

    constructor(props){
        super(props);
        
      }
  
    componentWillMount(){
        console.log('Mounting');
        if (this.props.username ){
           this.props.logout();
        }
    }

    render(){
        
        return (
            <h2>Successfully Logged Out</h2>

        )
        
    }
}

module.exports = Logout;