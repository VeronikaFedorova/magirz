import React from "react";
import Navbar from "./components/Navbar/Navbar";
import LoginPage from "./components/LoginLink/LoginLink"
import "./App.css";
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import UserPage from "./pages/UserPage/UserPage"
import StartPage from "./pages/StartPage/StartPage";
import FriendsPage from "./pages/FriendsPage/FriendsPage";
import ListPage from "./pages/ListPage/ListPage";

function App() {
  return (
    <div className="app">
      <Navbar />
      <div className="container">
        <Router>
          <Switch>
            <Route exact path="/" component={StartPage}/>
            <Route path="/login" component={LoginPage} />
            <Route path="/userpage" component={UserPage} />
            <Route path="/friends" component={FriendsPage} />
            <Route path="/list" component={ListPage} />
          </Switch>
        </Router>
      </div>  
    </div>
  );
}

export default App;
