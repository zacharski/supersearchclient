var React = require('react');
var NavLink = require('react-router-dom').NavLink;

function Nav(props) {

    return (
        <ul className = 'nav'>
            <li>
                <NavLink exact activeClassName='active' to='/'> Home</NavLink>
            </li>
            
            <li>
                <NavLink activeClassName='active' to='/search'> Search</NavLink>
            </li>
            
            <li>
                {!props.user && <NavLink activeClassName='active' to='/login'> Login</NavLink>}
            </li>
            <li>
            {props.user && <NavLink activeClassName='active' to='/logout'> Logout</NavLink>}
        </li>
            <li className="user">{props.user}</li>
          </ul>
    )
}

module.exports = Nav;
