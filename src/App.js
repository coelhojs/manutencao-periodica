import React, { Component } from "react";
import Header from "./components/header";
import CadastroVeiculo from "./components/CadastroVeiculo";
import VeiculosList from "./components/VeiculosList";
import "./App.css";

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            veiculos: [
                {
                    id: "",
                    fabricante: "",
                    modelo: "",
                    fotoURL: "",
                },
            ],
        };
    }

    componentDidMount() {
        fetch(`http://localhost:3666/data`)
            .then(result => result.json())
            .then(veiculos => this.setState({ veiculos }));
    }

    render() {
        return (
            <div className="container">
                <Header />
                <CadastroVeiculo veiculos={this.state.veiculos} />
            </div>
        );
    }
}
export default App;
