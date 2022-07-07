import React from "react";
import { PropTypes } from "prop-types";

//Example of a class based component

class Info extends React.Component {
  constructor(props) {
    super(props);
    //just to get properties
    //will be read only

    //lets enable state for the class based comp
    this.state = {
      count: 0,
      title: "Hello",
    };
  }
  buttonPressed = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };

  render() {
    return (
    <div>
      <p>Count: {this.state.count}</p>
      <button onClick={this.buttonPressed}>Class based component: State update</button>
    </div>
)  
};

  /*
  render() {
    const title = this.props.title; 
    return (
      <div>
        <h1>{title}</h1>
        <p>Manage your stuff</p>
      </div>
    );
  }
}

Info.defaultProps = {
  title: "default",
};

Info.propTypes = {
  title: PropTypes.string,
  // <AddItem text="Joe" number="hahahah" /> will give error
};
*/
export default Info;
