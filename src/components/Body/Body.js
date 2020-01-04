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
                {notaID:4, description: "Este es el cuerpo de mi nota"},
                {notaID:5, description: "Este es el cuerpo de mi nota"},
                {notaID:6, description: "Este es el cuerpo de mi nota"},
                {notaID:7, description: "Este es el cuerpo de mi nota"}
            ]
        }
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-sm-12 col-md-6 col-lg-3 col-xl-3">
                        <NewNote></NewNote>
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-9 col-xl-9">
                        <ListNotes notes={this.state.notas}></ListNotes>
                    </div>
                </div>
            </div>
        )
    }
}

export default Body