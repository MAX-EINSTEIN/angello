import './App.scss';

import Login from './pages/Login';

function App() {
  let user = false;

  // State: User Not Logged in, Action: Show Login Page
  if (user === false) {
    return <Login></Login>;
  }

  return <div>Home Page</div>;
}

export default App;
