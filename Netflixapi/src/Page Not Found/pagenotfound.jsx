import React from 'react'
import { Link, useHistory } from "react-router-dom";
export default function Pagenotfound() {
    let history = useHistory();
    return (
        <>
            <div className="text-center">
                <h5 className="mb-4">Sorry, this page isn't available.</h5>
                <h6>The link you followed may be broken, or the page may have been removed. <Link exact to='/'><span className="goback">Go back to Home.</span></Link></h6>
            </div>
        </>
    )
}
