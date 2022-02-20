import React from 'react'
import Homepage from './Homepage'
import Calender from './calender'
import Groceries from './groceries';
import Billing from './billing';
import Notes from './Notes';
import { Link } from 'react-router-dom';

function App() {
  return (
        <Homepage/>
  )
}

// const Header = () => {
// 	return (
// 		<div>
// 				<p>Header</p>
// 		</div>
// 	)
// };

// const homepage = () => {
// 	return (
// 		<div>
// 				<Header/>
// 				<Link to='/welcome'></Link>
// 		</div>
// 	)
// };

// const calender = () => {
// 	return (
// 		<div>
// 				<Header/>
// 				<Link to='/calender'></Link>
// 		</div>
// 	)
// };

// const groceries = () => {
// 	return (
// 		<div>
// 				<Header/>
// 				<Link to='/groceries'></Link>
// 		</div>
// 	)
// };

// const billing = () => {
// 	return (
// 		<div>
// 				<Header/>
// 				<Link to='/billing'></Link>
// 		</div>
// 	)
// };

// const notes = () => {
// 	return (
// 		<div>
// 				<Header/>
// 				<Link to='/notes'></Link>
// 		</div>
// 	)
// };

// export {homepage, calender, groceries, billing, notes } ;

export default App;


