import React, { Component } from "react";
import ReactDOM from "react-dom";
import App from "./components/App"


class Index extends Component {
    
    render() {
        return (
            <div>
	            <img src={ 'static/android.chrome-512x512.png' } />
	            <App />
            </div>
        );
    }
}

export default Index;

const container = document.getElementById("app");
ReactDOM.render(<Index />, container);