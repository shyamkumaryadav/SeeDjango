import React, { Component } from "react";
import ReactDOM from "react-dom";
import { DatePicker } from 'antd';


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            loaded: false,
            placeholder: "Loading"
        };
    }

    componentDidMount() {
        fetch("api")
            .then(response => {
                if (response.status > 400) {
                    return this.setState(() => {
                        return { placeholder: "Something went wrong!" };
                    });
                }
                return response.json();
            })
            .then(data => {
                this.setState(() => {
                    return {
                        data,
                        loaded: true
                    };
                });
            });
    }

    render() {
        return (
            <ul>
                {this.state.data.map(contact => {
                    return (
                        <div css_class='text-muted' key={contact.id}>
                            {contact.username} - {contact.number}
                        </div>
                    );
                })}
            </ul>
        );
    }
}

export default App;

const container = document.getElementById("app");
ReactDOM.render(<App />, container);