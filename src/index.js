import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './App';
// import {homepage, calender, groceries, billing, notes} from './App'
// import Homepage from "./Homepage"
// import Calender from "./calender"
// import Groceries from "./groceries"
// import Billing from "./billing"
// import Notes from "./Notes"


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

{/* <Router>
<Routes>
  <Route exact path="/welcome" element={<Homepage/>}/>
  <Route exact path="/calender" element={<Calender/>}/>
  <Route exact path="/groceries"element={<Groceries/>}/>
  <Route exact path="/billing" element={<Billing/>}/>
  <Route exact path="/notes" element={<Notes/>}/>
</Routes>
</Router>, */}


