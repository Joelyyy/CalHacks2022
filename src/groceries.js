import React from "react"
import "./groceries.css"


class Groceries extends React.Component{

    constructor(props){
      super(props)  
    }
    render() {
    return (
        <div className="slide-1691 flex-col-hstart-vstart clip-contents">
        <div className="flex-row">
            <div className="group-153">
            <img
                src="https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/MnrCvJE6dcXE7ARJHLLyJ1-15%3A3?alt=media&token=e0d73c38-9bb6-49c7-814e-d9ef4531b6fd"
                alt="image not found"
                className="polygon-3"
            />
            </div>
            <div className="group-158 flex-col-hcenter">
            <div className="group-622">
                <p className="txt-743">Groceries</p>
            </div>
            <div className="rectangle-53" />
            </div>
            <div className="group-5109 flex-col-hcenter">
            <div className="group-323">
                <p className="txt-278">Chores</p>
            </div>
            <div className="rectangle-53" />
            </div>
        </div>
        </div>
    )
    }
}

export default Groceries