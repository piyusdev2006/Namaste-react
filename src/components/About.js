import react from 'react';
import User from './User';
import UserClass from './UserClass';
import { Component } from 'react';

class About extends Component {
  // if this class component needs to hold state or use lifecycle methods
  constructor(props) {
    super(props);
    // Initialize state or bind methods here

    // console.log("Parent constructor");
  }

  componentDidMount() {
    // console.log("Parent Component Did Mount.");
  }

  render() {
    // console.log("Parent render");
    return (
      <div>
        <h1>This is About Us Page</h1>
        <UserClass
          name={"Piyush Singh (Class component)"}
          location={"Lucknow"}
          github={"piyusdev2006"}
        />
      </div>
    );
  }
}

export default About;
