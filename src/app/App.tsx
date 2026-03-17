import React, { useState, useEffect } from 'react';
import { UserService } from '../services/UserService';
import { Button } from '../components/ui/buttons/PrimaryButton';
const App = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    const userService = new UserService();
    userService.getUsers().then(users => setUsers(users));
  }, []);
  return (
    <div>
      <h1>Users</h1>
      <ul>
        {users.map(user => <li key={user.id}>{user.name}</li>)}
      </ul>
      <Button onClick={() => console.log('Button clicked!')}>Click me!</Button>
    </div>
  );
};
export default App;