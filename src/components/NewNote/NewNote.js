import React, {Component} from "react";

class NewNote extends Component {
    render() {
        return (
            <div className="card">
                <div className="card-header">
                    Nueva nota
                </div>
                <div className="card-body">
                    Aqui el formulario de nueva nota
                </div>
                <div className="card-footer">
                    <button className="btn btn-outline-danger m-1">Limpiar</button>
                    <button className="btn btn-outline-success m-1">Guardar</button>
                </div>
            </div>
        )
    }
}

export default NewNote;