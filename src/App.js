import React from 'react'
import Main from "./Main";
import {BrowserRouter as Router,Routes,Route,} from 'react-router-dom';
import Newrelease from './Pages/Newrelease';
import Login from "./Pages/Login";
import Register from "./Pages/Register";


const App = () => {
    return (
        <Router>
            <Routes>
                <Route exact path="/" element={<Main/>}/>
                <Route exact path="/Newrelease" element={<Newrelease/>}/>
                 <Route exact path="/Login" element={<Login/>}/>
                 <Route exact path="/Register" element={<Register/>}/>
            </Routes>
        </Router>
    )
}

export default App;
