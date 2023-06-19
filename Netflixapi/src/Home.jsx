import React, { useState, useEffect, useContext } from 'react';
import { Switch, Route, Link } from "react-router-dom";
import Movies from './Movies';
import Logo from './logo.png';
import Trendd from './Trending/Trendd';
import Searchform from './Search/Searchform';
import { Nav, Navbar, NavDropdown } from 'react-bootstrap';
import Populartv from './Tvshows/Popular';
import Topratedtv from './Tvshows/Toprated';
import Populartvdetail from './Tvshows/Populardetails';
import Seasons from './Tvshows/Viewallseason';
import Multisearch from './Search/Multisearch';
import About from './About';
import Error from './Error';
import { IoIosArrowDropup } from "react-icons/io";
import { Themee } from './Theme';
let Home = () => {
  let [theme, setTheme] = useContext(Themee);
  // let [show, setShow] = useState(true);
  var d = new Date();
  var n = d.getFullYear();
  let Top = () => {
    window.scroll({
      top: 0,
      left: 100,
      behavior: 'smooth',
      transition: '0.5s'
    });
  }
  let Theme = () => {
    if (theme) {
      setTheme(false);
    }
    else {
      setTheme(true);
    }
  }
  // let Scroll = () => {
  //   if (window.scrollY >= 160) {
  //     console.log(window.scrollY)
  //     setShow(true);
  //   }
  //   else {
  //     setShow(false);
  //   }

  // }
  // show && window.addEventListener('scroll', Scroll)
  return (
    <>
      <div className="container text-center">
        <p id={theme ? `netflix` : `netflix`} className="mt-3{}}">Welcome ^_^. Millions of Movie || TvShows. Explore Now... </p>
      </div>
      <div className="container">
        <Navbar expand="lg">
          <Navbar.Brand>
            <Link className={theme ? `navbar-brand ml-2 mt-0 text-white` : `navbar-brand ml-2  ml-3 mt-0 text-dark`} exact to="/">Home</Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" className="bg-light" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto text-center">
              <NavDropdown title="TV Shows" id={theme ? `basic-nav-dropdown` : 'basicc-nav-dropdown'}>
                <Link exact to="/populartvshows" className={`ml-3 mt-2 text-dark`}>Popular</Link><br />
                <NavDropdown.Divider />
                <Link exact to="/topratedtvshows" className={`ml-3 mt-2 text-dark`}>Top Rated</Link>
              </NavDropdown>
              <Link exact to="/aboutus" className={theme ? `ml-3 mt-2 text-white` : `ml-3 mt-2 text-dark`}>About us</Link>
              <p className={theme ? `thme ml-3 mt-2 text-white` : `thme ml-3 mt-2 text-dark`} onClick={Theme}>Theme[{theme ? `Black` : `White`}]</p>
            </Nav>
            <Searchform />
          </Navbar.Collapse>
        </Navbar>
      </div>
      <div className="container-fluid">
        <IoIosArrowDropup onClick={Top} id={theme ? `topp` : 'toppp'} ></IoIosArrowDropup>
        {/* {show && (
          <IoIosArrowDropup onClick={Top} id={theme ? `topp` : 'toppp'} ></IoIosArrowDropup>
        )} */}
      </div>
      <Switch>
        <Route exact path="/" component={Movies}></Route>
        <Route exact path="/aboutus" component={About} />
        {/* <Route exact path="/popularmovie" component={Modal} /> */}
        {/* <Route exact path="/search" component={Search} /> */}
        <Route exact path="/:movieName/:movieId" component={Trendd} />
        <Route exact path="/:title/:id/:media/search" component={Multisearch} />
        <Route exact path="/populartvshows" component={Populartv} />
        <Route exact path="/topratedtvshows" component={Topratedtv} />
        <Route exact path="/:showsname/:showsid/TvShows" component={Populartvdetail} />
        <Route exact path="/:seasonsname/:seasonsid/seasons" component={Seasons} />
        <Route component={Error} />
      </Switch>
      <footer className="page-footer font-small">
        <div className="footer-copyright text-center py-3 text-white">© {n} Developed by:
          <img
            src={Logo}
            width="60"
            height="38"
            className="d-inline-block align-top"
            alt="React Bootstrap logo"
          /><a href="#" className="text-warning"> Ashish Thapa</a>
        </div>
      </footer>
    </>
  )
}
export default Home;
