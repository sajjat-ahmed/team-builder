import React, { useState, useEffect } from 'react';
import './App.css';
import User from './User/User';
import 'bootstrap/dist/css/bootstrap.css';
// Put any other imports below so that CSS from your
// components takes precedence over default styles.

function App() {
  const [users, setUsers] = useState([]);
  const [team, setTeam] =useState([])

  useEffect(() => {
    fetch('https://randomuser.me/api/?results=50')
      .then(res => res.json())
      .then(data => {
        setUsers(data.results)
      })
  }, [])

  const addMember = (name) => setTeam([...team, name])

  return (
    <div className="App">
      <h1 className="header">Team builder</h1>
      <div className="member">
      <h5>Member added: {team.length}</h5>
      {
          team.map(m => <p>{m}</p>)
        }
      </div>
      {
        users.map(user => <User addMember={addMember} user={user}></User>)
      }
    </div>
  );
}

export default App;
