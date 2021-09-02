import React, { useEffect, useState } from "react";
import queryString from 'query-string'

function Person(props) {
  const [person, setPerson] = useState("");

  useEffect(() => {
    console.log('props.location.search', props.location.search);
    const { username } = queryString.parse(props.location.search);
    console.log('username', username);
    const url = `https://api.github.com/users/${username}`;

    const fetchData = async () => {
        try {
            const response = await fetch(url);
            const json = await response.json();
            console.log('json', json);
            setPerson(json);
        } catch (error) {
            console.log("error", error);
        }
    };

    fetchData();
  }, []);

  return (
    <div className="container">
      <div className="card">
        <img src={person.avatar_url} />
        <h3>{person.name}</h3>
        <span>{person.location}</span>
      </div>
    </div>
  );
}

export default Person;

