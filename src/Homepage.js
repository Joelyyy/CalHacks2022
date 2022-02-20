import React from "react"
import "./Homepage.css"


class Homepage extends React.Component{

  constructor(props){
    super(props)
    this.openNav = this.openNav.bind(this);
    this.closeNav = this.closeNav.bind(this);
  }

  openNav() {
    document.getElementById("mySidenav").style.width = "350px";
    document.getElementById("mySidenav").style.display = "block";
    document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
  }
  
  closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("mySidenav").style.display = "none";
    document.body.style.backgroundColor = "white";
  }

  render() {
    return (
      <div className="slide-1691 flex-col-hstart-vstart clip-contents">
          <div id="mySidenav" class="sidenav w3-animate-left">
            <a href="javascript:void(0)" class="closebtn" onClick={this.closeNav}>&times;</a>
            <a href="#">About</a>
            <a href="#">Services</a>
            <a href="#">Clients</a>
            <a href="#">Contact</a>
          </div>
        <div className="flex-row">
          <div className="group-271">
            <img
              src="https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/FWdBg2dbyRH94U36n0q0zE-2%3A9?alt=media&token=b9893905-c176-4412-96b3-683046332f01"
              alt="image not found"
              className="polygon-1 w3-animate-right"
              onClick= {this.openNav}
            />
          </div>
          <div className="group-165 flex-col">
            <div className="group-488 flex-col-hcenter">
              <div className="group-175 flex-row">
                <p className="txt-5810">Sun</p>
                <p className="txt-5810">Mon</p>
                <p className="txt-5810">Tues</p>
                <p className="txt-5810">Wed</p>
                <p className="txt-199">Thurs</p>
                <p className="txt-5810">Fri</p>
                <p className="txt-8102">Sat</p>
              </div>
              <div className="rectangle-7" />
            </div>
            <div className="group-686 flex-col-hcenter">
              <div className="group-883">
                <p className="txt-996">Whiteboard</p>
              </div>
              <div className="rectangle-9" />
            </div>
          </div>
          <div className="group-576 flex-col-hcenter">
            <div className="group-927">
              <p className="txt-9410">To Do</p>
            </div>
            <div className="group-965">
              <img
                src="https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/FWdBg2dbyRH94U36n0q0zE-5%3A43?alt=media&token=c8f0844f-5fd0-4b9e-b24d-64909f31a74c"
                alt="image not found"
                className="polygon-2"
              />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Homepage



