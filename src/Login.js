var React = require('react');
var PropTypes = require('prop-types');

class Login extends React.Component {

    constructor(props){
      super(props);
      this.state = {
        username: '',
        password: ''
      } 
      this.handleChange = this.handleChange.bind(this);
      this.handlePasswordChange = this.handlePasswordChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event){
      var value = event.target.value;
      this.setState(function(){
        return {
          username: value
        }
      })
    }

    handlePasswordChange(event){
      var value = event.target.value;
      this.setState(function(){
        return {
          password: value
        }
      })
    }

    handleSubmit(event){
      event.preventDefault();
      this.props.onSubmit(this.state.username, this.state.password);
    }



    render(){
        if (!this.props.username){
        return (<div><h2>login</h2>
        <form className='column' onSubmit={this.handleSubmit}>
        <p>
        
        <input
          id='username'
          className="rounded" 
          placeholder='username'
          type='text'
          
          autoComplete='off'
          value = {this.state.username}
          onChange={this.handleChange}
        /></p>

        <p>
        <input
          id='paswsword'
          className="rounded" 
          type='password'
          placeholder='password'
          autoComplete='off'
          value = {this.state.password}
          onChange={this.handlePasswordChange}
        /></p>


        <button
          className="button" 
          type='submit'
          disabled={!this.state.username}
           >
            Submit
        </button>
      </form>
        
        </div>
    )
  }
  else {
    return (
      <h2>Successfully Logged In</h2>

  )
  }
  }

}

module.exports = Login;