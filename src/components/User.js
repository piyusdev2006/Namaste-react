import React, { useEffect } from "react";
import { useState } from "react";
const User = ({ name, location, github }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        getGithubUserInfo();
    }, []);

    const getGithubUserInfo = async () => {
        const data = await fetch("https://api.github.com/users/" + github);
        const json = await data.json();
        console.log(json);
    };

    return (
        <div className="user-card m-4 p-4 bg-gray-50 rounded-lg">
            <h1>count : {count}</h1>
            <h2>Name: {name} </h2>
            <h3>Location:{location} </h3>
            <h4>Github: {github} </h4>
        </div>
    );
};

export default User;