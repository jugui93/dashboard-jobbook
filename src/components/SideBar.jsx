import NavItem from "./NavItem";
import logoDH from "../assets/images/logo-DH.png";

export default function SideBar(){
    let navItems = [{
        style:'active',
        icon:'tachometer-alt',
        text:'Dashboard - DH movies'
        },{
        style:'',
        icon:'folder',
        text:'Pages'
        },{
        style:'',
        icon:'chart-area',
        text:'Charts'
        },{
        style:'',
        icon:'table',
        text:'Tables'
        }];
    return(
        <ul className="navbar-nav bg-gradient-secondary sidebar sidebar-dark accordion" id="accordionSidebar">

			
			<a className="sidebar-brand d-flex align-items-center justify-content-center" href="/">
				<div className="sidebar-brand-icon">
					<img className="w-100" src={logoDH} alt="Digital House"/>
				</div>
			</a>

		
			<hr className="sidebar-divider my-0"/>

			<NavItem {...navItems[0]}/>
						
			<hr className="sidebar-divider"/>

			<div className="sidebar-heading">Actions</div>

			<NavItem {...navItems[1]}/>

            <NavItem {...navItems[2]}/>

			<NavItem {...navItems[3]}/>

			<hr className="sidebar-divider d-none d-md-block"/>
		</ul>
    )
}