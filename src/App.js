import './App.css';
import React  from 'react'
import Navbar from './component/Navbar';
import News from './component/News';

//import LoadingBar from 'react-top-loading-bar'
// npm install --save react-top-loading-bar

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


const App = ()=> { 

  const pageSize = 18;
  
    return (
      <div>
        <Router>

        <Navbar/>
        {/* <LoadingBar
        color ='#f11946'
        progress={10} */}
        {/* // onLoaderFinished ={()=>setProgress(0)}
        /> */}

        <Routes>
          <Route exact path = "/sports" element={ <News key="sports" pageSize={pageSize} country="in" category="sports"/> } ></Route> 
          <Route exact path = "/general" element={ <News key="general" pageSize={pageSize} country="in" category="general"/> } ></Route>
          <Route exact path= "/" element={ <News key="general" pageSize={pageSize} country="in" category="general" /> } ></Route>
          <Route exact path= "/science" element={ <News key= "science" pageSize={pageSize} country="in" category="science"/> } ></Route>
          <Route exact path= "/business"  element={ <News key = "business" pageSize={pageSize} country="in" category="business"/> } ></Route>
          <Route exact path= "/technology"  element={ <News key="technology" pageSize={pageSize} country="in" category="technology"/> } ></Route>
          <Route  exact path= "/entertainment" element={ <News key="entertainment" pageSize={pageSize} country="in" category="entertainment"/> } ></Route>
          <Route exact  path= "/health" element={ <News key="health" pageSize={pageSize} country="in" category="health"/> } ></Route>
        </Routes>
        </Router>
      </div>
    )
  
}

export default App
