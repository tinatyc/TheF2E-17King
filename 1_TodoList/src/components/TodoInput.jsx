import React from 'react';
import '../css/style.css';
// import 'materialize-css'; // It installs the JS asset only
// import 'materialize-css/dist/css/materialize.min.css';
class TodoInput extends React.Component{
    render(){
        return(
            <div className="container sec1">
                <div className="row">
                    <form className="col s12">
                        <div className="cell">
                            <div className="row">
                                <div className="input-field">
                                    <textarea id="icon_prefix2" className="materialize-textarea"></textarea>
                                    <label htmlFor="icon_prefix2">+ Add Task</label>
                                </div> 
                            </div>
                            <div className="row dateTime">
                                {/*<!-- <div className="col s12"> -->*/}
                                <label className="valign-wrapper">
                                    <i className="material-icons">date_range</i> Deadline
                                </label>
                                <input type="date" className="col s6 m4 datepicker"/>
                                <input type="time" className="col s6 m4 timepicker"/>
                                <div className="col s12 m4 file-field input-field">
                                    <div className="btn ppink">
                                        <span>File</span>
                                        <input type="file"/>
                                    </div>
                                    <div className="file-path-wrapper">
                                        <input className="file-path validate" type="text" />
                                    </div>
                                </div>
                                {/*<!-- </div> -->*/}
                            </div>
                            <div className="row comment">
                                {/*<!-- <div className="col s12"> -->*/}
                                <label className="valign-wrapper">
                                    <i className="material-icons">chat</i> Comment
                                </label>
                                <textarea id="comment_prefix2" className="materialize-textarea"></textarea>
                                {/*<!-- </div> -->*/}
                            </div>
                            <div className="row btnArea">
                                <button className="btn waves-effect waves-light lpink" type="button" name="action">close
                                    <i className="material-icons left">close</i>
                                </button>
                                <button className="btn waves-effect waves-light ppink" type="button" name="action">add
                                    <i className="material-icons left">add</i>
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}
export default TodoInput;
