import { Link } from "react-router-dom";
import React from "react";
export default function NavItem(props){
    return (
        
        <li className={`nav-item ${props.style}`}>
				<Link className="nav-link" to={`/${props.link}`}>
					<i className={`fas fa-fw fa-${props.icon}`}></i>
					<span>{props.text}</span>
				</Link>
		</li>
        
    )
}