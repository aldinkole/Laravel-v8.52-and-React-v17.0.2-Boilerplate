import React from 'react'
import { Link } from 'react-router-dom'


export default function DocumentationPage () {

    return (
        <div className='doc-section mt-5'>

            <div className='doc-info'>
            <h4>HOW TO EDIT REACT?</h4>
            <br />
            <h5>
                The main react files are in:
                <code> YourAppFolder/resources/js</code>

            </h5>
            <h5>
                In <code>app.js</code> we are rendering React App to the
                <code> index.blade.php. </code>You can find index.blade.php in
                <code> YourAppFolder/resources/views </code>. <br />
                In our <code> Index.js </code> are main routes that we added with
                <code> react-router-dom </code>. And our routes components are in
                <code> YourAppFolder/resources/js/components/routes.</code>

                <br />
                Everything else is on you. You can start your project.
                <br />
                <br />
                <h2><code> Happy Coding!</code></h2>



            </h5>
            <Link className='text-end' to='/'>Go Back</Link>

            </div>

        </div>
    )
}
