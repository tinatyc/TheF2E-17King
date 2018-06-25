import React from 'react';
// import '../css/style.css';
// import '../css/materialize.css';
import 'materialize-css'; // It installs the JS asset only
import 'materialize-css/dist/css/materialize.min.css';
class Nav extends React.Component{
	render(){
		return(
			<nav className="nav-extended">
			    <div className="nav-content">
			        <ul className="tabs tabs-transparent">
			            <li className="tab tab-active">
			                <a className="active">My tasks</a>
			            </li>
			            <li className="tab">
			                <a>In Progress</a>
			            </li>
			            <li className="tab">
			                <a>Completed</a>
			            </li>
			        </ul>
			    </div>
			</nav>
		);
	}
}
export default Nav;
