import React, {Component} from "react";

class ListNotes extends Component{
    getListHtml = arr => {
        if (arr.length <= 0 ) {
            return (
                <div className="col-md-12">
                    <span className="badge badge-pill badge-info mt-3 p-3"><h2>No data to display</h2></span>
                </div>
            );
        }

        return arr.map((nota, i) => {
            return (
                <div className="card ml-3 mb-3" key={i}>
                    <div className='card-header'>
                        Nota #{i+1}
                    </div>
                    <div className="card-body">
                        <span>{nota.description}</span>
                    </div>
                    <div className="card-footer">
                        <button className="btn btn-sm btn-outline-danger m-1">Eliminar</button>
                        <button className="btn btn-sm btn-outline-primary m-1">Modificar</button>
                    </div>
                </div>
            )}
        );

    };

    render() {
        const html = this.getListHtml(this.props.notes);
        return (
            <div className="row ml-1 mr-1">
                {html}
            </div>
        );
    };
}

export default ListNotes;