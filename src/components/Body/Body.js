import React, { Component } from "react";

// components
import NewNote from "../NewNote/NewNote";
import ListNotes from "../ListNotes/ListNotes";


class Body extends Component {
    constructor() {
        super();
        this.state = {
            notas: [
                {notaID:1, description: "Este es el cuerpo de mi nota"},
                {notaID:2, description: "Este es el cuerpo de mi nota"},
                {notaID:3, description: "Este es el cuerpo de mi nota"},
                {notaID:4, description: "Este es el cuerpo de mi nota"}
            ]
        }
    }

    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-4">
                        <NewNote></NewNote>
                    </div>
                    <div className="col-8">
                        <div className="row">
                            <ListNotes notes={this.state.notas}></ListNotes>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Body