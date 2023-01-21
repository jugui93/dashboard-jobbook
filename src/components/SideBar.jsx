import NavItem from "./NavItem";
import logoDH from "../assets/images/logo-DH.png";
import React from "react";
import { Route, Switch } from "react-router-dom";
import ContentWraper from "./ContentWraper";
import GenresInDb from "./GenresInDb";
import LastMovieInDb from "./LastMovieInDb";
import ContentRowMovies from "./ContentRowMovies";
import Error from "./Error";

export default function SideBar(){
    let navItems = [{
        style:'active',
        icon:'tachometer-alt',
        text:'Dashboard - DH movies',
        link: ''
        },{
        style:'',
        icon:'folder',
        text:'Genres In Db',
        link: 'genresInDb'
        },{
        style:'',
        icon:'chart-area',
        text:'Last Movie in DB',
        link: 'lastMovieInDb'
        },{
        style:'',
        icon:'table',
        text:'Tables',
        link: 'contentRowMovies'
        }];
    return(
        <>
            <ul className="navbar-nav bg-gradient-secondary sidebar sidebar-dark accordion" id="accordionSidebar">

                <a className="sidebar-brand d-flex align-items-center justify-content-center" href="/">
                    <div className="sidebar-brand-icon">
                        <img className="w-100" src={logoDH} alt="Digital House" />
                    </div>
                </a>

                <hr className="sidebar-divider my-0" />
                <NavItem {...navItems[0]} />
                <hr className="sidebar-divider" />
                <div className="sidebar-heading">Actions</div>
                <NavItem {...navItems[1]} />
                <NavItem {...navItems[2]} />
                <NavItem {...navItems[3]} />
                <hr className="sidebar-divider d-none d-md-block" />
            </ul>
            <Switch>
                <Route exact path='/'>
                    <ContentWraper />
                </Route>
                <Route exact path='/genresInDb'>
                    <GenresInDb />
                </Route>
                <Route exact path='/lastMovieInDb'>
                    <LastMovieInDb />
                </Route>
                <Route exact path='/contentRowMovies'>
                    <ContentRowMovies />
                </Route>
                <Route path='*'>
                    <Error/>
                </Route>
            </Switch>
    </>
    )
}