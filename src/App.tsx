import React, {createContext, useState} from 'react';
import './App.css';
import {BrowserRouter, HashRouter, Route, Routes} from "react-router-dom";
import LoginPage from "./ui/page/LoginPage";
import CreateUserStoryPage from "./ui/page/CreateUserStoryPage";
import LoadUserStoryPage from "./ui/page/LoadUserStoryPage";
import UserAddScorePage from "./ui/page/UserAddScorePage";
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
    const [email, setEmail] = useState<string>("");
  return (
    <div className="App">
      <HashRouter>
      <Routes>
              <Route path="/" element={<LoginPage email={email} setEmail={setEmail}/>}/>
              <Route path="/CreateUserStoryPage" element={<CreateUserStoryPage email={email}/>}/>
              <Route path="/LoadUserStoryPage" element={<LoadUserStoryPage/>}/>
              <Route path="/UserAddScorePage/:userStoryId" element={<UserAddScorePage email={email}/>}/>
      </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
