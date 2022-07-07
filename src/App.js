
import SearchBar from "./SearchBar.js"
import {useState} from "react"
/*
import logo from "./logo.svg";
import {PropTypes} from "prop-types"
import Info from "./Info.js";

*/

function App() {
  const [data, getData] = useState({});

  const updatedData = (answer) => {
    getData(answer);
  };
  return (
    <div className="App">
      <SearchBar callback={updatedData}/>
      <p>{"name" in data ? data["name"]: "Nothing"}</p>
      <p>{"price" in data ? data["price"]: "Nothing"}</p>
      <p>{"type" in data ? data["type"]: "Nothing"}</p>
      <p>{"brand" in data ? data["brand"]: "Nothing"}</p>

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