import React, {Component, useState} from 'react'; //hooks userState to manage state in function based component

export const Card2 = ({id, firstName, lastName, email, phone, address, ons}) => { //* when calling for object based call as object arguments
    const [setCart, getCart] = useState(id);
    const makeCart = () => {
        getCart(id);
        ons(setCart);
    }
    return ( <div style={{ border:"1px solid black", padding:"20px", margin:"20px"}}>
        <p>Name: {firstName} {lastName}</p>
        <p>Email Id: {email}</p>
        <p>Phone: {phone}</p>
        <p>City: {address.city}</p>
        <button onClick={makeCart}>Arrest</button>
    </div> );
}
 

//class based components
//component life cycle
export class Card3 extends Component {
    //1st runs constructor where data is made -clc- mounting phase
    constructor(props) {
        super(props);
        this.state = {
            name: "Rahul"
        };
        console.log(`1st step is constructor`);
    }

    updateName = () => {
        if(this.state.name === "Rahul") {
            this.setState({name: "Rahul Prasad"}, () => {
                console.log(`this.setState called ${this.state.name}`);
            })
        } else if (this.state.name === "Rahul Prasad") {
            this.setState({name: "Rahul"}, () => {
                console.log(`this.setState called ${this.state.name}`); 
            }) //async method: delay: 30ms
        }
    }

    //2nd is render -clc- mounting phase
    render() {
        console.log(`2nd step is render`);
        return (
            <div>
                <h2>{this.state.name}</h2>
            <button onClick= {this.updateName}>Button</button>
            </div>
        )
    }

    //3rd is componentDidMount -clc- mounting phase
    //used to add the api endpoint
    componentDidMount() {
        console.log(`3rd step is componentDidMount`);
    }
}

//function based components
export const SearchBar = ({onsearch, cartCount}) => { //made as hook 
    const [searchValue, setSearchValue] = useState(""); //remember tu use an array for function based hooks
    const search = () => onsearch(searchValue);
    return ( <div>
        <span>Count<sup>{cartCount}</sup></span>
        <input type="text" value={searchValue} onInput={(e) => setSearchValue(e.target.value)}></input>
        <button onClick={search}>Search</button>
    </div> );
}
 