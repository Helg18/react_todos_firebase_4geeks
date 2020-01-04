import React, { Component } from "react";

// components
import NewNote from "../NewNote/NewNote";
import ListNotes from "../ListNotes/ListNotes";


class Body extends Component {
    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-4">
                        <NewNote></NewNote>
                    </div>
                    <div className="col-8">
                        <div className="row">
                            <ListNotes></ListNotes>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Body