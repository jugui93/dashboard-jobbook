export default function NavItem(props){
    return (
        
        <li className={`nav-item ${props.style}`}>
				<a className="nav-link" href="/">
					<i className={`fas fa-fw fa-${props.icon}`}></i>
					<span>{props.text}</span></a>
		</li>
        
    )
}