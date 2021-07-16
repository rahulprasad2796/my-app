// import logo from './logo.svg';
import './App.css';

import React, { Component } from 'react'; //add to make pureComponent
//components
//import Topbar from "./components/topbar/topbar.js"; //in a single inport one can name anything like topbar
// import Footer from "./components/footer/footer.js";
// import Card from "./components/card/card.js";
import {Card2, SearchBar} from "./components/card/card2.js" //{Card3} can be added also defined in card2/js
//utils
//import {Mock} from "./utils/mockData.js" //for multiple use destructuring and use "as"
//{arr, user as username} also defined in utils
import axios from 'axios';


// function App() {
//   // let arr = [{
//   //   name: "Rahul",
//   //   age: 25,
//   //   dob: "2-7-96"
//   // },{
//   //   name: "Kirti",
//   //   age: 20,
//   //   dob: "8-8-01"
//   // },{
//   //   name: "Babita",
//   //   age: 25,
//   //   dob: "23-8-84"
//   // }]
//   //loaded this data from utils

//   return (
//     <div className="app">
//       {/* {arr.map(v => 
//       <div>
//         <p>Name: {v.name}</p>
//         <p>Age: {v.age}</p>
//         <p>Dob: {v.dob}</p>
//       </div>
//         )} */}


//       <Topbar username = {username}/>

//       {/* {arr.map(({name, age, dob}, index) => { //destructuring on each "v" item to open up like an object
//         return <div key={index}>
//         <p>Name: {name}</p>
//         <p>Age: {age}</p>
//         <p>Dob: {dob}</p>
//         </div>
//       })} */}

//       <div className="cards">
//       {arr.map((v, i) => { //go to the cardjs to see the data object or props
//         return <Card       //the data object gets value base on "v" , a kind of destructuring.
//         key = {i}
//         {...v}
//         // name = {v.name}
//         // age = {v.age}
//         // dob = {v.dob}
//         />
//       })}
//       </div>
//       <Footer/>
//       <Naming first="HappyDent White" second="Dimag ki batti jala de"/>
//       {Mock.map((v, i) => {
//         return <Card2 key={i} {...v} />
//       })}
//       <div>
//         <Card3 />
//       </div>
//     </div>
//   );
// }

// export default App;


// function Naming({first, second}) {
//   return <div>
//     <p>{first}</p>
//     <p>{second}</p>
//   </div>
// }


//look in card2js ffile for the brief of clc
class App extends Component {
  constructor(props) { //step 1 //anything changing will be added here
    super(props);
    this.state = {
      prducts: [],
      loader: true,
      filteredData: [], //to copy the filterd search value and cart
      cart: [],
      newCart: [],
      showChild: true
    }
    console.log("constructor");
  }

  componentDidMount(){ //step 3
    console.log("componentDidMount");

    axios.get("https://60eedf19eb4c0a0017bf468a.mockapi.io/data")
    .then((res) => {
      this.setState({prducts: res.data, loader: false, filteredData: res.data, newCart: res.data})
    })
  }

  shouldComponentUpdate(nextProps, nextState) { //step 4
    console.log("shouldComponentUpdate");

    if(nextState.prducts.length) { //nextState.prducts.length > 20 ? condition to render only on api items greater
      return true
    } else {
      return false
    }
  }

  componentDidUpdate() { //step6
    console.log("componentDidUpdate");
  }


  handleSearch = (val) => {
    console.log(val);
    const filtered = this.state.filteredData.filter((v)=> v.firstName.toLowerCase().includes(val));
    this.setState({prducts: filtered});
  }


  handleCart = (val) => {
    console.log(val);
    const nyaCart = this.state.newCart.filter((v) => v.id === val);
    console.log(nyaCart);
    this.setState({cart: nyaCart});
    console.log(this.state.cart);
  }

  render() { //step 2 //step5
    console.log("render");
    return (
      <div>
        {this.state.loader ? (<h1>
          Loading...
        </h1>) : (<div>
          <SearchBar cartCount= {this.state.cart.length} onsearch = {this.handleSearch}/>

          {this.state.showChild ? <Child /> : ""}

          <button onClick = {() => this.setState({showChild: !this.state.showChild})}>Show/Hide</button>

        {this.state.prducts.map((v, i) => {
          return <Card2 key={i} {...v} ons = {this.handleCart}/>
        })}
        </div>) }
      </div>
    )
  } 
}

class Child extends Component{ //instead if used pure component the setstate doesn't change the value
  constructor(props) {
    super(props);
    this.state = {
      count: 1
    }
  }

  // componentDidMount() {
  //   setInterval(() => {
  //     this.setState({count : 1});
  //   }, 1000)
  //   console.log("count - componentDidMount");
  // }

  render() {
    console.log("count - render"); //multiple render on same data call will stop if used purecomponent
    return <h2>Show Hide Child {this.state.count.length} </h2>
  }

  componentWillUnmount() {
    console.log("count - componentWillUnmount");
  }
}

export default App;