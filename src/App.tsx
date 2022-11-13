import "./App.css";
import { useSearch } from "./hooks/useSearch";
import { User } from "./interfaces/User";

function App() {
  const [ref, users, searchQuery, handleSearch] = useSearch();

  return (
    <div className='App'>
      <div className='main'>
        <h2>Search App</h2>
        <input type='text' ref={ref} onChange={() => handleSearch()} />
        <div className='content'>
          {searchQuery.length !== 0
            ? searchQuery.map((user: User) => (
                <div className='box' key={user.id}>
                  <h3>{user.name}</h3>
                  <hr />
                  <p>{user.email}</p>
                </div>
              ))
            : users.map((user: User) => (
                <div className='box' key={user.id}>
                  <h3>{user.name}</h3>
                  <hr />
                  <p>{user.email}</p>
                </div>
              ))}
        </div>
      </div>
    </div>
  );
}

export default App;
