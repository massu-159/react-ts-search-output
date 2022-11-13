import { useEffect, useRef, useState } from "react";
import { User } from "../interfaces/User";

export const useSearch = (): [
  ref: React.RefObject<HTMLInputElement>,
  users: User[],
  searchQuery: User[],
  handleSearch: () => void
] => {
  
  // states
  const [users, setUsers] = useState<User[]>([]);
  const [searchQuery, setSearchQuery] = useState<User[]>([]);

  const ref = useRef<HTMLInputElement>(null);

  // actions
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        return res.json();
      })
      .then((data) => setUsers(data));
  }, [setUsers]);

  const handleSearch = (): void => {
    setSearchQuery(users.filter((user) => user.name.toLowerCase().includes(ref.current!.value.toLowerCase())));
  };

  return [ref, users, searchQuery, handleSearch];
};
