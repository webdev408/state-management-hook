import React, { Component } from 'react';

export const Pricingprovider = React.createContext();

class Pricingcontext extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             Hotfood: 'Wings,Pizza,Strips,Potato Wedges',
             
             Prices: '12 wings for $10, 2 pizzas for $5, 3 strips and 3 wedges for $6',
        }
    }
    
    render() {
        return (
            <div className="container">
            <Pricingprovider.Provider value={{...this.state}}>
                {this.props.children}
            </Pricingprovider.Provider>
            </div>
        )
    }
}

export default Pricingcontext;
