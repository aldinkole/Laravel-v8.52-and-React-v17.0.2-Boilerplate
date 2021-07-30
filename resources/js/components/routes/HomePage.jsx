import React from 'react'
import { Link } from 'react-router-dom'

export default function HomePage () {

return (

<div>

    <div className='home-section'>

            <div className='img-container text-center mt-5'>

                {/* Here we are using images from public folder in your laravel app */}
                <img src='images/laravel.png' alt="Laravel" width='350' />
                <img src='images/react.png' alt="React" width='350' />

            </div>

            <div className='info'>

                <h5 className='text-uppercase text-white text-center'>Great! You have succesfully installed Laravel & React.</h5>
                <  hr style={{borderColor:'#616161'}} />

                <h4 className='text-center text-white'><span className='laravel'>Laravel v8.52</span> & <span className='react'> React v17.0.2</span></h4>
                <  hr style={{borderColor:'#616161'}} />

                <p>
                    This is just a boilerplate for Laravel & React. This is created for you,
                    so you don't have to go and do all steps manually. If you want to see how to access React
                    components and other files go and click on button Documentation.
                </p>

                <div className='text-center mt-5'>
                   <Link className='btn btn-danger btn-lg' to='/documentation'>Documentation</Link>
                </div>

            </div>

    </div>


</div>

);
}
