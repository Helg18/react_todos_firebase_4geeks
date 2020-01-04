import React, {Component} from "react";

class NewNote extends Component {
    render() {
        return (
            <div className="card">
                <form>
                    <div className="card-header">
                        Nueva nota
                    </div>
                    <div className="card-body">
                        <div className="row">
                            <div className="col-2">
                                <label htmlFor="note">Nota</label>
                            </div>
                            <div className="col-10">
                                <input type="text" className="form-control" name="note"/>
                            </div>
                        </div>
                    </div>
                    <div className="card-footer">
                        <button className="btn btn-outline-danger m-1">Limpiar</button>
                        <button className="btn btn-outline-success m-1">Guardar</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default NewNote;