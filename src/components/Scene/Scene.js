import React from 'react';
import { loadModules } from 'esri-loader';
import './Scene.css';

class Scene extends React.Component {
    constructor(props) {
        super(props);
        this.view = null;
        this.mapRef = React.createRef();
    }
    
    componentDidMount() {
        loadModules(["esri/WebScene",
                     "esri/views/SceneView",
                     "esri/layers/FeatureLayer"],
                    { css: true })
        .then(([WebScene, SceneView, FeatureLayer]) => {
            const webscene = new WebScene({
                portalItem: {
                    id: "d612021eb421459289f2ef90e4c42edb"
                }
            });

            this.view = new SceneView({
                container: this.mapRef.current,
                map: webscene,
                qualityProfile: "high",
                environment: {
                    lighting: {
                        directShadowsEnabled: true,
                        ambientOcclusionEnabled: true
                    },
                    atmosphere: {
                        quality: "high"
                    }
                }
            });
        });
    }

    componentDidUpdate(prevProps){
        if(this.props.urlLayer !== prevProps.urlLayer && this.view){
            loadModules([
                "esri/layers/FeatureLayer"],
               { css: true })
            .then(([FeatureLayer]) => {
                const layer = new FeatureLayer({
                    url: this.props.urlLayer
                });
                this.view.map.add(layer);
            });
        }
    }
    
    componentWillUnmount() {
        if (this.view) {
            this.view.container = null;
        }
    }

    render() {
        return (
            <div className="Scene" ref={this.mapRef} />
        );
    }
}

export default Scene;
