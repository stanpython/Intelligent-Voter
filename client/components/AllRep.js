import React, {Fragment} from "react";
import ReactDOM from "react-dom";
import { Link, NavLink } from "react-router-dom";

function AllRep (props) {
    const { rep, homeState } = props;
    const name = `${rep.first_name} ${rep.last_name}`;


    return (
        <div className = "allRep">
          {/* <Link className = "test" to= {`/individual/${route}`}> */}
            <button className = "allOuter" >
                <div className = "allInner">
                <div>
                    <div className = "info"></div>
                    <div className = "info">{`Name: ${name}`}</div>
                    <div className = "info">{`Party: ${rep.party}`}</div>
                </div>
                <div>
                    <div className = "info">{`Next Election: ${rep.next_election}`}</div>
                    <div className = "info">{`State: ${homeState}`}</div>
                    <div className = "info">See Bill Positions + Additonal Info</div>
                </div>
                </div>
            </button>
          {/* </Link> */}
        </div>
    )
}

export default AllRep;