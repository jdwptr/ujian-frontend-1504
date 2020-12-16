import React from 'react'

import {
    Navbar,
    Nav,
    Button,
    Dropdown
    // Image,
} from 'react-bootstrap'

import { Link } from 'react-router-dom'

import { connect } from 'react-redux'

import { logout } from '../action'

class Navigation extends React.Component {

    btnLogout = () => {
        this.props.logout()
        localStorage.removeItem('email')
    }

    render() {
        return (
            <Navbar bg="light" expand="lg" fixed='top' style={{height: '70px', backgroundColor: 'RGBA(176,176,176,0.4)'}}>
                <Navbar.Brand style={{marginLeft: '20px'}}>
                    TOKO SEPATU
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link as={Link} to='/'>Home</Nav.Link>
                    </Nav>
                    <Nav className="mr-auto">
                        <Nav.Link as={Link} to='/cart' style={{color: 'black', marginRight: '120px', marginLeft: '0px'}}><i className="fas fa-shopping-cart"></i>Cart</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
                <Dropdown style={{marginLeft: '500px'}}>
                        <Dropdown.Toggle variant="success" id="dropdown-basic">
                            {this.props.email ? this.props.email : 'Email'}
                            {/* Userame, jd kalo gagal login ga berubah jd nama kita, tetep Username di dropdownnya */}
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            {/* bikin supaya abis login kolom nya kd logout */}
                            {this.props.email
                            ?
                            <div>
                                <Dropdown.Item onClick={this.btnLogout} as={Link} to="/login">Log out</Dropdown.Item>
                                <Dropdown.Item as={Link} to='/history'>History</Dropdown.Item>
                            </div>
                            :
                            <>
                                <Dropdown.Item as={Link} to="/login">Login</Dropdown.Item>
                                <Dropdown.Item as={Link} to="/register">Register</Dropdown.Item>
                            </>
                            } 
                        </Dropdown.Menu>
                    </Dropdown>
            </Navbar>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        email: state.user.email,
        password: state.user.password
    }
}

export default connect (mapStateToProps, {logout}) (Navigation)