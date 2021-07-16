import React from 'react';
//destructuring expected values
const card = ({name, age, dob}) => { //data is the object created as data.name to destructure later //know as props
    // const {name, age, dob} = data;
    //when used argument data at top

    //internal style
    const styles = {color: "red", textAlign:"center"} 



    //inline style
    return ( <div style={{ border:"1px solid black", padding:"20px", margin:"20px"}}>
        {/* {internal styles} */}
        <p style={styles}>Name: {name}</p>
        <p>Age: {age}</p>
        <p>Dob: {dob}</p>
        </div> );
}
 
export default card;