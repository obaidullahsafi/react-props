import React, {Component} from 'react';

class ContactPersoon extends Component {
    render() {
        return (
            <div>
               <h1>{this.props.persoon.id}</h1>
                <h1>{this.props.persoon.name}</h1>
                <h1>{this.props.persoon.age}</h1>
            </div>
        );
    }
}

export default ContactPersoon;