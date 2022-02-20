import React from "react"
import "./groceries.css"
import Sidebar from "./sidebar";


class Groceries extends React.Component{

    constructor(props){
      super(props)  
      this.addLi = this.addLi.bind(this);
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
        addLi()
        {
            var delButton = document.createElement("button")
            delButton.appendChild(document.createTextNode("x"));
            var ItemValue = document.getElementById("ItemInput").value,
            listNode = document.getElementById("list")
            var liNode = document.createElement('Li'),
            txtNode = document.createTextNode(ItemValue);
            liNode.appendChild(txtNode);
            liNode.appendChild(delButton);
            listNode.appendChild(liNode);
            delButton.addEventListener('click', event => listNode.removeChild(listNode.querySelector("Li")));
        }

        addChore()    {
            var delButton = document.createElement("button")
            delButton.appendChild(document.createTextNode("x"));
            var ItemValue = document.getElementById("ChoreInput").value,
            listNode = document.getElementById("listy")
            var liNode = document.createElement('Li'),
            txtNode = document.createTextNode(ItemValue);
            liNode.appendChild(txtNode);
            liNode.appendChild(delButton);
            listNode.appendChild(liNode);
            delButton.addEventListener('click', event => listNode.removeChild(listNode.querySelector("Li")));
        }


    render() {
    return (
        <div className="slide-1691 flex-col-hstart-vstart clip-contents">
        <div className="flex-row">
        <div id="mySidenav" class="sidenav w3-animate-left">
            <a href="javascript:void(0)" class="closebtn" onClick={this.closeNav}>&times;</a>
              <Sidebar />
            </div>
            <div className="group-153">
            <img
                src="https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/MnrCvJE6dcXE7ARJHLLyJ1-15%3A3?alt=media&token=e0d73c38-9bb6-49c7-814e-d9ef4531b6fd"
                alt="image not found"
                className="polygon-3"
                onClick= {this.openNav}
            />
            </div>
            <div className="group-158 flex-col-hcenter">
            <div className="group-622">
                <p className="txt-743">Groceries</p>
            </div>
            <div className="rectangle-53" >
                <input type="text" id="ItemInput" placeholder="Grocery item"/>
                <button onClick={this.addLi}>Add to list</button>
                <ul id="list"></ul>
            </div>
            </div>
            <div className="group-5109 flex-col-hcenter">
            <div className="group-323">
                <p className="txt-278">Chores</p>
            </div>
            <div className="rectangle-53">
            <input type="text" id="ChoreInput" placeholder="Chores"/>
                <button onClick={this.addChore}>Add to list</button>
                <ul id="listy"></ul>
            </div>
            </div>
        </div>
        </div>
    )
    }
}

export default Groceries