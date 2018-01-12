import React, { Component } from 'react';
import './Notes.css';
import axios from 'axios';

class Notes extends Component {

    state = {
        user: this.props.user,
        note: this.props.notes
    }

    delete = (note) => {
        axios.delete({
            url: 'https://my-json-server.typicode.com/typicode/demo/comments',
            data: {
                user: this.state.user,
                note: this.state.note,
            }
        })
            .then((response) => {
                this.setState({"note": ''});
                alert('Deleted note.');
            })

            .catch(() => {
                this.setState({"note": ''});
                alert('Failed to delete.');
            });
    }

    render() {

        return (
            <div>
                <br />
                <div className="z-depth-5 note-box">
                    <div>
                        <button onClick={() => {
                            if (window.confirm("Delete this note?") == true) {
                                this.delete();
                            } else {
                                alert('Did not delete note.');
                            }
                        }} className="btn btn-dark remove-btn">Remove</button>
                    </div>
                    <br />
                    <p className="flow-text">{this.state.note}</p>
                    <br />

                </div>
            </div>
        );
    }
}

export default Notes;