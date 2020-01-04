import React, {Component} from "react";

class ListNotes extends Component{
    render() {
        return (
            <div className="col-4 mb-4">
                <div className="card">
                    <div className='card-header'>
                        Nota #
                    </div>
                    <div className="card-body">
                        <span>este es el cuerpo de mi nota</span>
                    </div>
                    <div className="card-footer">
                        <button className="btn btn-outline-danger m-1">Eliminar</button>
                        <button className="btn btn-outline-primary m-1">Modificar</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default ListNotes;