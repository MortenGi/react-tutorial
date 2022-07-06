import React from "react";
import {PropTypes} from "prop-types";

//Example of a class based component

class Info extends React.Component {
    constructor(props){
        super(props);
        //just to get properties
        //will be read only
    }
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
    title:"default"

}

Info.propTypes = {
    title: PropTypes.string, 
   // <AddItem text="Joe" number="hahahah" /> will give error
  }
export default Info;
