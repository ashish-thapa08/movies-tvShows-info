import React, { useState, useEffect } from 'react'
import Loading from '../Loading';
import { Link } from "react-router-dom";
import axios from 'axios';
export default function Searchform() {
    let [search, setSearch] = useState("");
    let [filterdata, getFilter] = useState([]);
    let Searchh = () => {
        setSearch("");
    }
    let Input = (e) => {
        let searchh = e.target.value;
        setSearch(searchh);
    }
    let searchData = () => {
        let url = `https://api.themoviedb.org/3/search/multi?api_key=32c2f8b05f0301b51959c90b965a06ba&query=${search} &language=en-US&page=1&include_adult=false`;
        return axios.get(url).then(response => getFilter(response.data.results));
    }
    useEffect(() => {
        searchData();
        console.log(filterdata);
    }, [search])
    return (
        <>
            <form className="form-inline my-2 my-lg-0 ml-auto">
                <input onChange={Input} value={search} className="form-control mr-sm-2 mb-1" type="search" placeholder="Search Movies or Tvshows..." aria-label="Search" />
            </form>
            {search && (
                <>
                    <div className="list-group h-25">
                        <div className='list-group search'>
                            {
                                filterdata.length > 0 ? filterdata.map((curval, index) => {
                                    return (
                                        <>
                                            <Link onClick={Searchh} exact to={{ pathname: `/${curval.title}/${curval.id}/${curval.media_type}/search` }}>
                                                <li className="list-group-item-action list-group-item bg-white text-info d-block mb-1 " key={index}><img alt='movie-tv-image' id="movieposter" src={`https://image.tmdb.org/t/p/original/${curval.poster_path}`} />{curval.title ? `${curval.title} || ` : null} Media Type: {curval.media_type}
                                                </li>
                                            </Link>
                                        </>
                                    )
                                }) : (<>
                                                <p>
                                                No Data Found:(
                                                </p>
                                </>)
                            }
                        </div>
                    </div>
                </>
            )}
        </>
    )
}
