import NavItem from "./NavItem";
import logoJB from "../assets/images/logo-jobbook.jpg";
import React from "react";
import { Route, Switch } from "react-router-dom";
import ContentWraper from "./ContentWraper";
import GenresInDb from "./GenresInDb";
import LastMovieInDb from "./LastMovieInDb";
import ContentRowMovies from "./ContentRowMovies";
import NotFound from "./NotFound";
import SearchMovies from "./SearchMovies";

export default function SideBar(){
    let navItems = [{
        style:'active',
        icon:'tachometer-alt',
        text:'Dashboard - Jobbook',
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
        },{
        style:'',
        icon:'search',
        text:'Search Movies',
        link: 'searchMovies'
        }];
    return(
        <>
            <ul className="navbar-nav bg-gradient-secondary sidebar sidebar-dark accordion" id="accordionSidebar">

                <a className="sidebar-brand d-flex align-items-center justify-content-center" href="/">
                    <div className="sidebar-brand-icon">
                        <svg width="200" height="40" viewBox="0 0 478 108" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M13.97 107.11C11.4033 107.11 8.98333 106.817 6.71 106.23C4.36333 105.717 2.38333 104.873 0.77 103.7L4.73 93.47C6.85667 95.01 9.53333 95.78 12.76 95.78C15.2533 95.78 17.1967 94.9733 18.59 93.36C19.9833 91.82 20.68 89.51 20.68 86.43V26.26H34.43V86.1C34.43 92.5533 32.6333 97.65 29.04 101.39C25.52 105.203 20.4967 107.11 13.97 107.11ZM27.5 16.58C24.9333 16.58 22.8067 15.7733 21.12 14.16C19.5067 12.5467 18.7 10.6033 18.7 8.33C18.7 5.98333 19.5067 4.04 21.12 2.49999C22.8067 0.886663 24.9333 0.0799984 27.5 0.0799984C30.0667 0.0799984 32.1567 0.849997 33.77 2.38999C35.4567 3.85666 36.3 5.72666 36.3 7.99999C36.3 10.42 35.4933 12.4733 33.88 14.16C32.2667 15.7733 30.14 16.58 27.5 16.58ZM78.8614 85.77C72.8481 85.77 67.4947 84.4867 62.8014 81.92C58.1081 79.28 54.4047 75.6867 51.6914 71.14C48.9781 66.5933 47.6214 61.4233 47.6214 55.63C47.6214 49.7633 48.9781 44.5933 51.6914 40.12C54.4047 35.5733 58.1081 32.0167 62.8014 29.45C67.4947 26.8833 72.8481 25.6 78.8614 25.6C84.9481 25.6 90.3381 26.8833 95.0314 29.45C99.7981 32.0167 103.501 35.5367 106.141 40.01C108.855 44.4833 110.211 49.69 110.211 55.63C110.211 61.4233 108.855 66.5933 106.141 71.14C103.501 75.6867 99.7981 79.28 95.0314 81.92C90.3381 84.4867 84.9481 85.77 78.8614 85.77ZM78.8614 74C82.2347 74 85.2414 73.2667 87.8814 71.8C90.5214 70.3333 92.5747 68.2067 94.0414 65.42C95.5814 62.6333 96.3514 59.37 96.3514 55.63C96.3514 51.8167 95.5814 48.5533 94.0414 45.84C92.5747 43.0533 90.5214 40.9267 87.8814 39.46C85.2414 37.9933 82.2714 37.26 78.9714 37.26C75.5981 37.26 72.5914 37.9933 69.9514 39.46C67.3847 40.9267 65.3314 43.0533 63.7914 45.84C62.2514 48.5533 61.4814 51.8167 61.4814 55.63C61.4814 59.37 62.2514 62.6333 63.7914 65.42C65.3314 68.2067 67.3847 70.3333 69.9514 71.8C72.5914 73.2667 75.5614 74 78.8614 74ZM155.92 85.77C150.933 85.77 146.497 84.67 142.61 82.47C138.723 80.27 135.643 76.97 133.37 72.57C131.17 68.0967 130.07 62.45 130.07 55.63C130.07 48.7367 131.207 43.09 133.48 38.69C135.827 34.29 138.943 31.0267 142.83 28.9C146.79 26.7 151.153 25.6 155.92 25.6C161.713 25.6 166.81 26.8467 171.21 29.34C175.683 31.8333 179.203 35.3167 181.77 39.79C184.41 44.2633 185.73 49.5433 185.73 55.63C185.73 61.7167 184.41 66.9967 181.77 71.47C179.203 75.9433 175.683 79.4633 171.21 82.03C166.81 84.5233 161.713 85.77 155.92 85.77ZM123.36 85V3.38H137.11V39.9L136.01 55.52L136.45 71.14V85H123.36ZM154.38 74C157.68 74 160.613 73.2667 163.18 71.8C165.82 70.3333 167.91 68.2067 169.45 65.42C170.99 62.6333 171.76 59.37 171.76 55.63C171.76 51.8167 170.99 48.5533 169.45 45.84C167.91 43.0533 165.82 40.9267 163.18 39.46C160.613 37.9933 157.68 37.26 154.38 37.26C151.08 37.26 148.11 37.9933 145.47 39.46C142.83 40.9267 140.74 43.0533 139.2 45.84C137.66 48.5533 136.89 51.8167 136.89 55.63C136.89 59.37 137.66 62.6333 139.2 65.42C140.74 68.2067 142.83 70.3333 145.47 71.8C148.11 73.2667 151.08 74 154.38 74ZM231.33 85.77C226.343 85.77 221.907 84.67 218.02 82.47C214.133 80.27 211.053 76.97 208.78 72.57C206.58 68.0967 205.48 62.45 205.48 55.63C205.48 48.7367 206.617 43.09 208.89 38.69C211.237 34.29 214.353 31.0267 218.24 28.9C222.2 26.7 226.563 25.6 231.33 25.6C237.123 25.6 242.22 26.8467 246.62 29.34C251.093 31.8333 254.613 35.3167 257.18 39.79C259.82 44.2633 261.14 49.5433 261.14 55.63C261.14 61.7167 259.82 66.9967 257.18 71.47C254.613 75.9433 251.093 79.4633 246.62 82.03C242.22 84.5233 237.123 85.77 231.33 85.77ZM198.77 85V3.38H212.52V39.9L211.42 55.52L211.86 71.14V85H198.77ZM229.79 74C233.09 74 236.023 73.2667 238.59 71.8C241.23 70.3333 243.32 68.2067 244.86 65.42C246.4 62.6333 247.17 59.37 247.17 55.63C247.17 51.8167 246.4 48.5533 244.86 45.84C243.32 43.0533 241.23 40.9267 238.59 39.46C236.023 37.9933 233.09 37.26 229.79 37.26C226.49 37.26 223.52 37.9933 220.88 39.46C218.24 40.9267 216.15 43.0533 214.61 45.84C213.07 48.5533 212.3 51.8167 212.3 55.63C212.3 59.37 213.07 62.6333 214.61 65.42C216.15 68.2067 218.24 70.3333 220.88 71.8C223.52 73.2667 226.49 74 229.79 74ZM300.58 85.77C294.567 85.77 289.213 84.4867 284.52 81.92C279.827 79.28 276.123 75.6867 273.41 71.14C270.697 66.5933 269.34 61.4233 269.34 55.63C269.34 49.7633 270.697 44.5933 273.41 40.12C276.123 35.5733 279.827 32.0167 284.52 29.45C289.213 26.8833 294.567 25.6 300.58 25.6C306.667 25.6 312.057 26.8833 316.75 29.45C321.517 32.0167 325.22 35.5367 327.86 40.01C330.573 44.4833 331.93 49.69 331.93 55.63C331.93 61.4233 330.573 66.5933 327.86 71.14C325.22 75.6867 321.517 79.28 316.75 81.92C312.057 84.4867 306.667 85.77 300.58 85.77ZM300.58 74C303.953 74 306.96 73.2667 309.6 71.8C312.24 70.3333 314.293 68.2067 315.76 65.42C317.3 62.6333 318.07 59.37 318.07 55.63C318.07 51.8167 317.3 48.5533 315.76 45.84C314.293 43.0533 312.24 40.9267 309.6 39.46C306.96 37.9933 303.99 37.26 300.69 37.26C297.317 37.26 294.31 37.9933 291.67 39.46C289.103 40.9267 287.05 43.0533 285.51 45.84C283.97 48.5533 283.2 51.8167 283.2 55.63C283.2 59.37 283.97 62.6333 285.51 65.42C287.05 68.2067 289.103 70.3333 291.67 71.8C294.31 73.2667 297.28 74 300.58 74ZM371.479 85.77C365.465 85.77 360.112 84.4867 355.419 81.92C350.725 79.28 347.022 75.6867 344.309 71.14C341.595 66.5933 340.239 61.4233 340.239 55.63C340.239 49.7633 341.595 44.5933 344.309 40.12C347.022 35.5733 350.725 32.0167 355.419 29.45C360.112 26.8833 365.465 25.6 371.479 25.6C377.565 25.6 382.955 26.8833 387.649 29.45C392.415 32.0167 396.119 35.5367 398.759 40.01C401.472 44.4833 402.829 49.69 402.829 55.63C402.829 61.4233 401.472 66.5933 398.759 71.14C396.119 75.6867 392.415 79.28 387.649 81.92C382.955 84.4867 377.565 85.77 371.479 85.77ZM371.479 74C374.852 74 377.859 73.2667 380.499 71.8C383.139 70.3333 385.192 68.2067 386.659 65.42C388.199 62.6333 388.969 59.37 388.969 55.63C388.969 51.8167 388.199 48.5533 386.659 45.84C385.192 43.0533 383.139 40.9267 380.499 39.46C377.859 37.9933 374.889 37.26 371.589 37.26C368.215 37.26 365.209 37.9933 362.569 39.46C360.002 40.9267 357.949 43.0533 356.409 45.84C354.869 48.5533 354.099 51.8167 354.099 55.63C354.099 59.37 354.869 62.6333 356.409 65.42C357.949 68.2067 360.002 70.3333 362.569 71.8C365.209 73.2667 368.179 74 371.479 74ZM427.197 71.91L427.527 54.64L458.217 26.26H474.717L448.647 52.44L441.387 58.49L427.197 71.91ZM415.977 85V3.38H429.727V85H415.977ZM460.307 85L438.857 58.49L447.547 47.49L477.027 85H460.307Z"
                                fill="#253649" />
                        </svg>
                    </div>
                </a>

                <hr className="sidebar-divider my-0" />
                <NavItem {...navItems[0]} />
                <hr className="sidebar-divider" />
                <div className="sidebar-heading">Actions</div>
                <NavItem {...navItems[1]} />
                <NavItem {...navItems[2]} />
                <NavItem {...navItems[3]} />
                <NavItem {...navItems[4]} />
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
                <Route exact path='/searchMovies'>
                    <SearchMovies />
                </Route>
                <Route path='*'>
                    <NotFound/>
                </Route>
            </Switch>
    </>
    )
}