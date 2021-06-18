import React from 'react'
import ReactPlayer from 'react-player'
export default function Song() {
    return (
        <>
            <div className="container mb-3">
                <div className="row">
                    <div className="col-lg-3 mt-3 col-md-3 col-6">
                        <ReactPlayer className="preety" controls={true} width='100%' height='100%' url='https://youtu.be/e70PkoJhQYM' />
                    </div>
                    <div className="col-lg-3 mt-3 col-md-3 col-6">
                        <ReactPlayer className="preety" controls={true} width='100%' height='100%' url='https://youtu.be/-Axm4IYHVYk?list=PLK20N7H33wnFVHwQIhYACmgfc9OPZlo_u' />
                    </div>
                    <div className="col-lg-3 mt-3 col-md-3 col-6">
                        <ReactPlayer className="preety" controls={true} width='100%' height='100%' url='https://www.youtube.com/watch?v=MthLgPs7oU4&list=PLK20N7H33wnFVHwQIhYACmgfc9OPZlo_u' />
                    </div>
                    <div className="col-lg-3 mt-3 col-md-3 col-6">
                        <ReactPlayer className="preety" controls={true} width='100%' height='100%' url='https://youtu.be/e70PkoJhQYM' />
                    </div>
                    <div className="col-lg-3 mt-3 col-md-3 col-6 mb-4">
                        <ReactPlayer className="preety" controls={true} width='100%' height='100%' url='https://youtu.be/e70PkoJhQYM' />
                    </div>
                </div>
            </div>
        </>
    )
}
