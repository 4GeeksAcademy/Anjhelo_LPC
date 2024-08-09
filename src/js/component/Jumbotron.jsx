import React from "react";

function Jumbotron(){
    return(
        <div className="jumbotron my-3 p-3 bg-secondary-subtle bg-secondary text-white">
            <h1 className="display-4">A Warm Welcome</h1>
            <p className="lead">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas, minus voluptatum. Excepturi accusantium blanditiis harum minima ex neque ut vero magnam officia? Sequi, temporibus vitae.
            </p>
            <hr className="my-4"/>
            <p className="lead">
            <a className="btn btn-primary btn-lg" href="#" role="button">Call to Action!</a>
            </p>
        </div>
    );
}

export default Jumbotron; 