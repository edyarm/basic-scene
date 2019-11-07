import React from 'react';
import './Form.css';

class Form extends React.Component {
    constructor(props){
        super(props);
        this.handleUrlChange = this.handleUrlChange.bind(this);
        this.handleAdd = this.handleAdd.bind(this);
        this.state = {
            url: ""
        }
    }
    handleUrlChange(e){
        this.setState({
            url: e.target.value
        });
    }
    handleAdd(e){
        this.props.addLayer(this.state.url);
        e.preventDefault();
    }
    render(){
        return (
        <div className="Form">
            <p>Ingrese el url de un layer para agregarlo a la escena.</p>
            <input type="text" onChange={this.handleUrlChange}/>
            <button onClick={this.handleAdd}>Agregar capa</button>
        </div>
        );
    }
}

export default Form;
