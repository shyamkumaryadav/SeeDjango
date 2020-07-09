import React, { Component } from "react";
import { render } from "react-dom";

class Index extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         data: [],
    //         loaded: false,
    //         placeholder: "Loading"
    //     };
    // }

    // componentDidMount() {
    //     fetch("api/lead")
    //         .then(response => {
    //             if (response.status > 400) {
    //                 return this.setState(() => {
    //                     return { placeholder: "Something went wrong!" };
    //                 });
    //             }
    //             return response.json();
    //         })
    //         .then(data => {
    //             this.setState(() => {
    //                 return {
    //                     data,
    //                     loaded: true
    //                 };
    //             });
    //         });
    // }

    render() {
        return (
            <div>
                <h1 onDoubleClick={() => alert('sasklsk alskla ')}>Shyam on React </h1>
            </div >
            // <ul>
            //     {this.state.data.map(contact => {
            //         return (
            //             <li key={contact.id}>
            //                 {contact.name} - {contact.email}
            //             </li>
            //         );
            //     })}
            // </ul>
        );
    }
}

export default Index;