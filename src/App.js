import SearchBar from "./SearchBar.js";
import { useState } from "react";
import AddItem from "./AddItem.js";
import ItemsDisplay from "./ItemsDisplay.js";
import styles from "./App.module.css"; //naming it .module and importing it like this (styles) amkes it only locally available, in this module
import styled from "styled-components";

const StyledComp = styled.h1`
  //lets define a styled-components
  color: ${(props) => (props.color ? props.color : "red")};
`;
/*

import logo from "./logo.svg";
import {PropTypes} from "prop-types"
import Info from "./Info.js";

*/

function App() {
  const [filters, setFilters] = useState({});
  const [data, setData] = useState({ items: [] });

  const addItemToData = (item) => {
    let items = data["items"];
    item.id = items.length;
    items.push(item);
    setData({ items: items });
  };

  const updateFilters = (answer) => {
    setFilters(answer);
  };

  const applyFilters = (data) => {
    const filtered_data = [];

    if (!filters.name) {
      return data;
    }

    for (const item of data) {
      if (filters.name !== "" && item.name !== filters.name) {
        continue;
      } else if (filters.price !== 0 && item.price > filters.price) {
        continue;
      } else if (filters.type !== "" && item.type !== filters.type) {
        continue;
      } else if (filters.brand !== "" && item.brand !== filters.brand) {
        continue;
      }
      filtered_data.push(item);
    }
    return filtered_data;
  };

  return (
    <div className="container">
      {" "}
      {/* allowed cause we use bootstrap */}
      <h1 className={styles.blue}>Halloooo</h1>
      <div className="row mt-3">
        {" "}
        {/* margin : loopup bootrap documentaion */}
        <StyledComp color="yellow">This is a styled component</StyledComp>
      </div>
      <div className="row mt-3">
        <ItemsDisplay items={applyFilters(data["items"])}></ItemsDisplay>
      </div>
      <div className="row mt-3">
        <SearchBar udpateSearchParams={updateFilters} />
      </div>
      <div className="row mt-3">
        <AddItem addItem={addItemToData} style={{ color: "red" }} />{" "}
        {/*makes an inline style*/}
      </div>
      {/* <AddItem text="Joe" number={2} /> */}
    </div>
  );
}

/*
//working with stats: functionals states
function ButtonState() {
  //make a hook: usestate. hook into react features
  // const [variable, function] to make a state
  // defines the functions for you!!
  // with a hook we do not need to convert the functional component to a class!
  const [title, setTitle] = useState("");
  const [count, setCount] =  useState(0);

  const updateTitleClicked = ()=>{
    setTitle('We now have a title');

  };
  const updateCounterClicked = ()=>{
    setCount(count + 1);
    
  };
  return (
      <div>

      <Data title={title} count={count} />
      <button onClick={updateTitleClicked}>Update Title</button>
      <button onClick={updateCounterClicked}>Update Count</button>
      </div>

  );

}

//passing state down to other components
function Data(props) {
  return(
    <div>
    <p>Title: {props.title}</p>
    <p>Counter: {props.count}</p>

    </div>
  )
}

//example of a functional based component
function AddItem(props) {
  //Read-only
  //function AddItem({text, number=1}) { NOT READ ONLY

  return (
    <form>
      <label for="text-form">Type something: </label>
      <input type="text" value={props.value} id="text-form" />
      <p>{props.number}</p>
    </form>
  );
}

AddItem.defaultProps = {
  number: 1,
  text: "default",
  //same as {text='default, 'number = 1 }
};

AddItem.propTypes = {
  number: PropTypes.number, 
 // <AddItem text="Joe" number="hahahah" /> will give error
}
*/

export default App;
