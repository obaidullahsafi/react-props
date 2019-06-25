import React, {Component} from 'react';
import ContactPersoon from './ContactPersoon';

class ContactPersonen extends Component {
    state = {
        personen: [
            {
                id: 1,
                name: "Obaidullah Safi",
                age: 29
            },
            {
                id: 2,
                name: "Dzengiz Tafa",
                age: 38
            },
            {
                id: 3,
                name: "Patrick Moesick",
                age: 57
            }
        ],
        show: true
    };

    render() {

        const personen = this.state.personen.map(persoon => (
            <ContactPersoon persoon={persoon}/>
        ));

        let content = '';
        if (this.state.show){
            content =
                    <div>
                        {/* DIT... */}
                        {personen}

                        <hr/>
                        {/*<div>*/}
                            {/*/!* doet hetzelfde als DIT... *!/*/}
                            {/*{this.state.personen.map(persoon =>(*/}
                                {/*<ContactPersoon persoon= {persoon}/>*/}
                            {/*))}*/}

                            {/*<hr/>*/}

                            {/*/!* en doet hetzelfde als DIT... *!/*/}
                            {/*<ContactPersoon persoon ={this.state.personen[0]}/>*/}
                            {/*<ContactPersoon persoon ={this.state.personen[1]}/>*/}
                            {/*<ContactPersoon persoon ={this.state.personen[2]}/>*/}

                        {/*</div>*/}
                    </div>
        }


        return (
            <div>
                <button onClick={this.hideHandler}> Hide me</button>
                {content}
            </div>
        );
    }

    hideHandler = () => {
        this.setState({
            // true op false & false op true
            show: !this.state.show
        })
    }
}

export default ContactPersonen;
