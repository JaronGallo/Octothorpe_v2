import React, { Component } from 'react';
import './VideoPlayer.css';
import Notes from '../Notes/Notes.js';
import axios from 'axios';

class VideoPlayer extends Component {

    state = {
        textareaVal: '',
    }

    titleCleaner = (title) => {
        var holder = title.replace(/[0-9]/g, '');
        holder = holder.trim();
        var response = holder.charAt(0).toUpperCase() + holder.slice(1);
        return response;
    }

    nameChecker = () => {
        if (!this.props.info.user || this.props.info.user === "" || this.props.info.user === " ") {
            return ("User");
        } else {
            return this.props.info.user;
        }
    }

    post = (body, user) => axios.post('https://my-json-server.typicode.com/typicode/demo/comments', {
        data: {
            body: body,
            postId: user,
            dateAdded: Date.now()
        }
    })
        .then(function (response) {
            alert("Post success!");
            alert("User              :  " + user + "\nNote             :  " + body + "\nDate Added  :  " + Date.now());
        })
        .catch(function (error) {
            alert("Post failed.");
            alert("User              :  " + user + "\nNote             :  " + body + "\nDate Added  :  " + Date.now());
        });

    render() {
        return (
            <div className="">
                <div className="video-holder center">
                    <div className="z-depth-5 video-card">
                        <div className="card-content white">
                            <br />
                            <span className="card-title"><h1>{this.titleCleaner(this.props.info.title)}</h1></span>
                            <br />
                            <div className="video-border">
                                <iframe width="100%" height="100%" src={this.props.info.url} frameBorder="0" gesture="media" allow="encrypted-media" allowFullScreen></iframe>
                            </div>
                            <br />
                            <div className="row">
                                <div className="col-sm-2"></div>
                                <div className="col-sm-8">
                                    {/* <div className="description-holder">
                                        <p>
                                            {this.props.info.description}
                                        </p>
                                    </div> */}
                                </div>
                                <div className="col-sm-2"></div>
                            </div>
                            <br />
                            <br />
                            <h4 className="card-title">Notes from {this.nameChecker()}...</h4>
                            <div className="note-holder">
                                <hr />
                                <br />
                                <form className="col-sm-12">
                                    <div className="row">
                                        <div className="col-sm-2"></div>
                                        <div className="form-group col-sm-8">
                                            <label for="note-box">Add a note.</label>
                                            <textarea
                                                className='form-control' id="note-box" rows="3" placeholder="Write here..." value={this.state.textareaVal} onChange={(event) => {
                                                    this.setState({
                                                        textareaVal: event.target.value
                                                    });
                                                }}>
                                            </textarea>
                                        </div>
                                        <div className="col-sm-2">
                                            <br />
                                            <br />
                                            <button onClick={() => {
                                                this.post(this.state.textareaVal, this.props.info.user);
                                                this.setState({
                                                    "textareaVal": "",
                                                });
                                            }} className="btn-dark btn submit-btn">Submit</button>
                                        </div>
                                    </div>
                                </form>
                                <br />
                                {this.props.info.notes.map((note) => {
                                    return (<Notes notes={note} />);
                                })}
                                <br />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default VideoPlayer;