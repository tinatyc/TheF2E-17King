import React from 'react';
import '../css/style.css';
// import 'materialize-css'; // It installs the JS asset only
// import 'materialize-css/dist/css/materialize.min.css';
class TodoItem extends React.Component{
    render(){
        return(
        	<div className="container">
        	    <div className="row">
        	        <ul className="collection">
        	            <li className="collection-item">
        	                <p className="col s10">
        	                    <label>
        	                        <input type="checkbox" />
        	                        <span>Title</span>
        	                    </label>
        	                </p>
        	                <p className="col s2">
        	                    <i className="material-icons font-yellow">star</i>
        	                    <i className="material-icons">edit</i>
        	                </p>
        	                <div className="commont">
        	                    <p><i className="material-icons">date_range</i>2018-06-05</p>
        	                    <p><i className="material-icons">chat</i>2</p>
        	                    <p><i className="material-icons">insert_drive_file</i>1</p>
        	                    {/*<!-- <i className="material-icons">star_border</i> -->*/}
        	                </div>
        	            </li>
        	            <li className="collection-item">
        	                <p className="col s10">
        	                    <label>
        	                        <input type="checkbox" />
        	                        <span>Title2</span>
        	                    </label>
        	                </p>
        	                <p className="col s2">
        	                    <i className="material-icons font-yellow">star</i>
        	                    <i className="material-icons">edit</i>
        	                </p>
        	                <div className="commont">
        	                    <p><i className="material-icons">date_range</i>2018-06-05</p>
        	                    <p><i className="material-icons">chat</i>2</p>
        	                    <p><i className="material-icons">insert_drive_file</i>1</p>
        	                </div>
        	            </li>
        	            <li className="collection-item">
        	                <p className="col s10">
        	                    <label>
        	                        <input type="checkbox" />
        	                        <span>Title3</span>
        	                    </label>
        	                </p>
        	                <p className="col s2">
        	                    <i className="material-icons">star_border</i>
        	                    <i className="material-icons">edit</i>
        	                </p>
        	                <div className="commont">
        	                    <p><i className="material-icons">date_range</i>2018-06-05</p>
        	                    <p><i className="material-icons">chat</i>2</p>
        	                    <p><i className="material-icons">insert_drive_file</i>1</p>
        	                </div>
        	            </li>
        	        </ul>
        	    </div>
        	    <div className="row">
        	        <blockquote>
        	            3 tasks left
        	        </blockquote>
        	    </div>
        	</div>
        )
    }
}
export default TodoItem ;
