import { MdSearch } from "react-icons/md";
import React, { useState } from "react"
import logo from "../Assets/logo-vantagens-face.png"
import image from "../Assets/image.png"
import ReactModalLogin from 'react-modal-login';

// eslint-disable-next-line import/no-anonymous-default-export
export default function (props) {
    let [authMode, setAuthMode] = useState("signin")

    const changeAuthMode = () => {
        setAuthMode(authMode === "signin" ? "signup" : "signin")
    }

    return (
        <div className="Landing-container">
            <nav class="navbar navbar-expand-lg bg-light">
                <div class="container-fluid">
                    <a class="navbar-brand" href="#">
                        <img src={logo} width="150px" alt="logo"></img>
                    </a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="#">Inicio</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="#">Vantagens</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="#">Empresas Conveniadas</a>
                            </li>
                        </ul>
                        <form class="d-flex" role="search">
                            <div class="input-group mb-3">
                                <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"></input>
                                <button class="btn btn-outline-secondary" type="button" id="button-addon2"><MdSearch /></button>
                            </div>
                        </form>
                        <button class="btn btn-primary" id="loginButton" type="submit" onClick={() => landing.openModal()}>Entrar</button>
                    </div>
                </div>
            </nav>
            <section className="first">
                <div className="text-first-section">
                    <h1>Venha fazer parte do clube</h1>
                    <h5>More than 2 billion people in over countries use socibook to stay in touch with friends & family.</h5>

                    <div className="buttons">
                        <button class="btn btn-primary">Cadastre-se</button>
                        <button class="btn btn-outline-primary" id="saiba-mais">Saiba mais</button>
                    </div>
                </div>
                <img src={image} alt="img" width="45%" height="45%" className="avatars"></img>
            </section>
        </div>
    )
}

class landing extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            showModal: false,
            loading: false,
            error: null
        };

    }

    openModal() {
        this.setState({
            showModal: true,
        });
    }

    closeModal() {
        this.setState({
            showModal: false,
            error: null
        });
    }

    onLoginSuccess(method, response) {
        console.log('logged successfully with ' + method);
    }

    onLoginFail(method, response) {
        console.log('logging failed with ' + method);
        this.setState({
            error: response
        })
    }

    startLoading() {
        this.setState({
            loading: true
        })
    }

    finishLoading() {
        this.setState({
            loading: false
        })
    }

    onTabsChange() {
        this.setState({
            error: null
        });
    }

    render() {

        return (
            <div>

                <button
                    onClick={() => this.openModal()}
                >
                    Open Modal
                </button>

                <ReactModalLogin
                    visible={this.state.showModal}
                    onCloseModal={this.closeModal.bind(this)}
                    loading={this.state.loading}
                    error={this.state.error}
                    tabs={{
                        onChange: this.onTabsChange.bind(this)
                    }}
                    loginError={{
                        label: "Couldn't sign in, please try again."
                    }}
                    registerError={{
                        label: "Couldn't sign up, please try again."
                    }}
                    startLoading={this.startLoading.bind(this)}
                    finishLoading={this.finishLoading.bind(this)}
                    providers={{
                        facebook: {
                            onLoginSuccess: this.onLoginSuccess.bind(this),
                            onLoginFail: this.onLoginFail.bind(this),
                            label: "Continue with Facebook"
                        },
                        google: {
                            onLoginSuccess: this.onLoginSuccess.bind(this),
                            onLoginFail: this.onLoginFail.bind(this),
                            label: "Continue with Google"
                        }
                    }}
                />
            </div>
        )
    }
}