import React from 'react';
import Scene from '../Scene/Scene';
import Form from '../Form/Form';
import './App.css';

class App extends React.Component {
  constructor(props){
    super(props);
    this.addLayer = this.addLayer.bind(this);
    this.state = {
      urlLayer: ""
    };
  }
  addLayer(url){
    this.setState({
      urlLayer: url
    });
  }
  render(){
    return (
      <div className="App">
        <Form addLayer={this.addLayer} />
        <Scene urlLayer={this.state.urlLayer}/>
      </div>
    );
  }
}

export default App;
