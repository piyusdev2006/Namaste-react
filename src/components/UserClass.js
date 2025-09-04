import React from "react";
    
class UserClass extends React.Component {
  constructor (props) {
      super(props);
      
    this.state = {
      userInfo: {
        name: "dummy name",
        location: "Default"
        }
      };
      // console.log(this.props.name + "child Constructor");
  }

  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/piyusdev2006");

    const githubData = await data.json();
    
    this.setState({
      userInfo: githubData
    });


    console.log(githubData);
    // console.log(this.props.name + "Child Component Did Mount.");
  }

  componentDidUpdate() {
    console.log("ComponentDidUpdate is Called..");
    
  };


  componentWillUnmount() {
    console.log("ComponentWillUnmount is Called..");
  };

  
  render() {
    // console.log(this.props.name + "Child Render");
    const {name, location, url, avatar_url ,user_view_type, id, login, bio, type} = this.state.userInfo;
    return (
      <div className="user-card">

        <img src={avatar_url} alt="Avatar" />
        <h2>Name: {name}</h2>
        <h3>Location: {location}</h3>
        <h4>Github_Url: {url}</h4>
        <h4>User_view_type: {user_view_type}</h4>
        <h4>Id: {id}</h4>
        <h4>Login: {login}</h4>
        <h4>Bio: {bio}</h4>
        <h4>Type: {type}</h4>
      </div>
    );
  }
};

export default UserClass;