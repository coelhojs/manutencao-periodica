import React from "react";

const Card = ({ veiculo }) => {
    return (
        <div className="container card">
            <div className="card__header">
                <figure className="photo">
                    <img
                        className="img-fluid photo__img"
                        src="assets/img/factor.jpg"
                    />
                    <figcaption className="photo__caption">
                        Yamaha Factor 2017
                    </figcaption>
                </figure>
            </div>
            <div className="card__body">
                <h1>card body</h1>
            </div>
            <div className="card__footer">
                <div className="row">
                    <ul className="nav justify-content-center">
                        <li className="nav-item">
                            <a className="nav-link" href="#">
                                Active
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">
                                Active
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">
                                Active
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Card;
