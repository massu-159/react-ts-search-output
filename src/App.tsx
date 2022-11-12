import React, { useEffect, useRef, useState } from 'react';
import './App.css';
import { User } from './interfaces/User';

function App() {
  const [users, setUsers] = useState<User[]>([]);
  const [searchQuery, setSearchQuery] = useState<User[]>([]);
  const ref = useRef<HTMLInputElement>(null);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        return res.json();
      })
      .then((data)=> setUsers(data));
  }, []);


  const handleSearch = () => {
    setSearchQuery(
      users.filter((user) => user.name.toLowerCase().includes(ref.current!.value.toLowerCase()))
    );
  };

  return (
    <div className="App">
      <div className="main">
        <h2>Search App</h2>
        <input type="text" ref={ref} onChange={() => handleSearch()} />
        <div className="content">
          {searchQuery.length !== 0
            ? searchQuery.map((user) => (
              <div className="box" key={user.id}>
                <h3>{user.name}</h3>
                <hr />
                <p>{user.email}</p>
              </div>
            ))
            : users.map((user) => (
              <div className="box" key={user.id}>
                <h3>{user.name}</h3>
                <hr />
                <p>{user.email}</p>
              </div>
            )) 
            }
        </div>
      </div>
    </div>
  );
}

export default App;
