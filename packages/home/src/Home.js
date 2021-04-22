import React from 'react'
import { Jumbotron, Button } from 'reactstrap'

const Home = () => {
    return (
        <div>
            <Jumbotron>
                <h1 className="display-3">Hello, Module Federation</h1>
                <hr className="my-2" />
                <p>This component is from another application</p>
                <p className="lead">
                    <Button color="primary">Button</Button>
                </p>

            </Jumbotron>
        </div>
    )
}

export default Home