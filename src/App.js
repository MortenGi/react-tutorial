import logo from "./logo.svg";
import "./App.css";
import {PropTypes} from "prop-types"
import Info from "./Info.js";

function App() {
  return (
    <div className="App">
      <Info />
      <Info title ="This title was passed as a prop" />
      <AddItem text="Joe" number={2} />
    </div>
  );
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

}

export default App;
