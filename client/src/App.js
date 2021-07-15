import Topbar from "./components/topbar/Topbar"
import Home from "./pages/home/Home"
import Login from "./pages/login/Login"
import Register from "./pages/register/Register"
import Settings from "./pages/settings/Settings"
import Single from "./pages/single/single"
import Write from "./pages/write/Write"
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
function App() {
  let user = true;
  return (
    <Router>
      <Topbar />
      <Switch>
        <Route path="/" exact><Home /></Route>
        <Route path="/write">{user ? <Write /> : <Login />}</Route>
        <Route path="/post/:postId"><Single /></Route>
        <Route path="/settings">{user ? <Settings /> : <Login />}</Route>
        <Route path="/login">{user ? <Home /> : <Login />}</Route>
        <Route path="/register">{user ? <Home /> : <Register />}</Route>
      </Switch>
    </Router>
  );
}

export default App;
