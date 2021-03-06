import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class Header extends Component {
    render() {
        return (
            <Router>
                <header>
                    <nav className="navbar navbar-expand-md navbar-light bg-light">
                        <button
                            className="navbar-toggler"
                            type="button"
                            data-toggle="collapse"
                            data-target="#navbarToggler"
                            aria-controls="navbarToggler"
                            aria-expanded="false"
                            aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon" />
                        </button>
                        <a className="navbar-brand">
                            Manutenção periódica
                        </a>

                        <div
                            className="collapse navbar-collapse"
                            id="navbarTogglerDemo03">
                            <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
                                <li className="nav-item">
                                    <Link to="/classificados">
                                        <span className="nav-link">
                                            Classificados
                                        </span>
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/oficinas">
                                        <span className="nav-link">
                                            Oficinas
                                        </span>
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/veiculos">
                                        <span className="nav-link">
                                            Veículos
                                        </span>
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/user">
                                        <span className="nav-link">user</span>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </header>
            </Router>
        );
    }
}

export default Header;
