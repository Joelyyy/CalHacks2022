import React from "react"
// import "./sidebar.css"
import Calender from "./calender"
import Groceries from "./groceries";
import {Link} from 'react-router-dom';
import Homepage from "./Homepage";

class Sidebar extends React.Component{

  constructor(props){
    super(props)
    this.calenderLink = this.calenderLink.bind(this);
    this.groceryLink = this.groceryLink.bind(this);
    this.billsLink = this.billsLink.bind(this);
    this.notesLink = this.notesLink.bind(this);
  }

  calenderLink() {
      <Calender />
  }

  groceryLink() {
    <Groceries />
}

  billsLink() {
    var a = document.createElement('a');
    var linkText = document.createTextNode('Bills');
    a.appendChild(linkText);
    a.title = 'Bills';
    a.href =
    document.body.appendChild(a);
}

  notesLink() {
    var a = document.createElement('a');
    var linkText = document.createTextNode('Notes');
    a.appendChild(linkText);
    a.title = 'Notes';
    a.href =
    document.body.appendChild(a);
}

  render() {
    return (
      <div className="slide-1691 flex-col-hstart-vstart clip-contents">
        <div className="group-279 flex-col-hcenter">
          <div className="group-516">
            <img
              src="https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/rQ0rdGW58AQl8YLrXuzyJK-5%3A28?alt=media&token=da26a051-4ddd-4489-86f6-3eb23c07535d"
              alt="image not found"
              className="group-15"
            />
          </div>
          <div className="group-871" >
            <p className="txt-276 links">Calender</p>
          </div>
          <div className="group-580">
            <p className="txt-276 links" onClick={this.groceryLink}>Groceries & Chores</p>
          </div>
          <div className="group-756">
            <p className="txt-276 links">Bills</p>
          </div>
          <div className="group-910">
            <p className="txt-276 links">Notes</p>
          </div>
          <div className="group-407">
            <img
              src="https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/rQ0rdGW58AQl8YLrXuzyJK-5%3A16?alt=media&token=ace71b90-c888-4811-bde6-c81a7e09ac62"
              alt="image not found"
              className="polygon-1"
            />
          </div>
        </div>
      </div>
    )
  }
}

export default Sidebar