import React from "react";

function Card() {
    return(
        <div className="col-12 col-sm-6 col-md-3">
            <div className="card my-2" style={{ width: "auto" , height: "auto"}}>
            <img src="https://via.placeholder.com/500x325" className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
            </div>
        </div>
    );
}

export default Card;