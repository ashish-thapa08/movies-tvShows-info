import React from 'react';
import { Switch, Route, Link } from "react-router-dom";
import Movies from './Movies';
import Logo from './logo.png';
// import Modal from './popularmovie/Movieid';
import Trendd from './Trending/Trendd'
// import Search from './Search/Search';
import { useHistory } from "react-router-dom";
import { Nav, Navbar, NavDropdown } from 'react-bootstrap';
import Populartv from './Tvshows/Popular';
import Topratedtv from './Tvshows/Toprated';
import Populartvdetail from './Tvshows/Populardetails';
import Seasons from './Tvshows/Viewallseason';
import Multisearch from './Search/Multisearch';
import About from './About';
import Error from './Error';
import Loading from './Loading';
import { IoIosArrowDropup } from "react-icons/io";
let Home = () => {
  let [search, setSearch] = React.useState("");
  let [searchMovie, setsearchMovie] = React.useState([]);
  let [check, setCheck] = React.useState(true);
  let [date, setDate] = React.useState("");
  let [loading, setLoading] = React.useState(true);
  //let [show, setShow] = React.useState(false);
  let history = useHistory();
  // let [nav, setNav] = React.useState(true);
  // let Scroll = () => {
  //   if (window.scrollY >= 250) {
  //     setNav(false)
  //   }
  //   else {
  //     setNav(true);
  //   }
  // }
  // window.addEventListener('scroll', Scroll);
  let Datee = () => {
    var d = new Date();
    var n = d.getFullYear();
    setDate(n)
  }
  let Input = (e) => {
    let searchh = e.target.value;
    setSearch(searchh);
  }
  let dataa = async () => {
    if (search === "") {
      setCheck(true);
      return
    }
    else {
      try {
        let url = `https://api.themoviedb.org/3/search/multi?api_key=32c2f8b05f0301b51959c90b965a06ba&query=${search} &language=en-US&page=1&include_adult=false`;
        let searchdata = await fetch(url);
        let searchdataa = await searchdata.json();
        let data = searchdataa.results.map((curval, index) => ({
          id: curval.id,
          title: curval.title,
          poster: curval.poster_path,
          mediaType: curval.media_type,
          index: index
        }))
        setsearchMovie(data);
        setCheck(false);
        setLoading(false);
      }
      catch (err) {
        alert(`Many Traffic!!! Refresh it ^_^`)
        history.push('/');
      }
    }
  }
  let Searchh = () => {
    setSearch("");
  }
  let Top = () => {
    window.scrollTo(0, 0);
  }
  // let Scroll = () => {
  //   if (window.scrollY >= 150) {
  //     setShow(true);
  //   }
  //   else {
  //     setShow(false);
  //   }

  // }
  // window.addEventListener('scroll', Scroll)

  React.useEffect(() => {
    dataa()
  }, [search]);
  React.useEffect(() => {
    Datee();
  }, []);
  return (
    <>
      <div className="container text-center">
        <p id="netflix" className="mt-3{}">Welcome ^_^. Millions of Movie || TvShows. Explore Now... </p>
        {/* <p className="text-center font-italic text-danger">yourPictureinfo.com</p> */}
      </div>
      <div className="container">
        <Navbar expand="lg">
          <Navbar.Brand>
            {/* <img
              src={Logo}
              width="60"
              height="38"
              className="d-inline-block align-top mt-2"
              alt="React Bootstrap logo"
            /> */}
            <Link className="navbar-brand ml-2 text-white" exact to="/">Home</Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" className="bg-light" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto text-center">
              <NavDropdown title="TV Shows" id="basic-nav-dropdown">
                <Link exact to="/populartvshows" className="ml-3 text-dark">Popular</Link><br />
                <NavDropdown.Divider />
                <Link exact to="/topratedtvshows" className="ml-3 text-dark">Top Rated</Link>
              </NavDropdown>
              <Link exact to="/aboutus" className="ml-2 mt-2 text-white">About us</Link>
            </Nav>
            <form className="form-inline my-2 my-lg-0 ml-auto">
              <input onChange={Input} value={search} className="form-control mr-sm-2" type="search" placeholder="Search Movies or Tvshows..." aria-label="Search" />
              {check === false ? (
                <div className="list-group">
                  {
                    searchMovie.length === 0 ? (<p>Data Not Found!!!</p>) :
                      searchMovie.map((curval, index) => {
                        return (
                          loading ? (<Loading />) :
                            <Link onClick={Searchh} exact to={{ pathname: `/${curval.title}/${curval.id}/search`, state: { id: curval.id, media: curval.mediaType } }}><li className="list-group-item search bg-white text-info d-block" key={index}><img id="movieposter" src={`https://image.tmdb.org/t/p/original/${curval.poster}`} />{curval.title ? `${curval.title} || ` : null} Media Type: {curval.mediaType}</li></Link>
                        )
                      })}
                </div>
              ) : null}
            </form>
          </Navbar.Collapse>
        </Navbar>
      </div>
      <div className="container-fluid">
        <IoIosArrowDropup onClick={Top} id="topp" ></IoIosArrowDropup>
      </div>
      <Switch>
        <Route exact path="/" component={Movies} />
        <Route exact path="/aboutus" component={About} />
        {/* <Route exact path="/popularmovie" component={Modal} /> */}
        {/* <Route exact path="/search" component={Search} /> */}
        <Route exact path="/:slug/:slug" component={Trendd} />
        <Route exact path="/:slug/:slug/search" component={Multisearch} />
        <Route exact path="/populartvshows" component={Populartv} />
        <Route exact path="/topratedtvshows" component={Topratedtv} />
        <Route exact path="/:slug/:slug/TvShows" component={Populartvdetail} />
        <Route exact path="/:slug/:slug/:slug/seasons" component={Seasons} />
        <Route component={Error} />
      </Switch>
      <footer className="page-footer font-small">
        <div className="footer-copyright text-center py-3 text-white">© {date} Developed by:
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
