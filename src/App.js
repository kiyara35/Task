import React from 'react';
import {Route,Routes} from 'react-router-dom'
import Home from "./components/Home/Home"
import Service from "./components/Service/Service"

const App = () => {
    return (
        <Routes>
            <Route exact path ='/' element={ <Home/>}/>
            <Route exact path ='/:id/services/' element={ <Service/>}/>
        </Routes>

    );
};

export default App;