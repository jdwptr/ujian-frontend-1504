import React from 'react'
import Axios from 'axios'
import { login } from "../action"
import { Redirect } from 'react-router-dom'

import {
    Table,
    Image,
    Button,
    Form,
    Modal
} from 'react-bootstrap'

import { connect } from 'react-redux'

class CartPage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            products: [],
            products1: [],
            products2: [],
            products3: [],
            products4: [],
            image: '',
            stock: '',
            selectIndex: null,
            newQty: 0,
            total: 0,
            reqPay: false,
            reqPass: false,
            passErr: false,
            payErr: false,
            emptyCart: false,
            toHistory: false,
        }
    }

    componentDidMount () {
            let cart= {}
        Axios.get(`http://localhost:2000/users?email=${localStorage.getItem('email')}`)
            .then((res) => {
            console.log(res.data)
            this.props.login(res.data[0])
            this.setState({cart: res.data[0]})
            })
            .catch((err) => console.log(err))
    }

    renderThead = () => {
        return (
            <thead style={styles.thead}>
                <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>Image</th>
                    <th>Price</th>
                    <th>Stock</th>
                    <th>Total</th>
                    <th>Action</th>
                </tr>
            </thead>
        )
    }

    renderTbody = () => {
        return (
            <tbody style={styles.tbody}>
                {this.props.cart.map((item, index) => {
                    return (
                        <tr>
                            <td>{index + 1}</td>
                            <td>{item.name}</td>
                            <td><Image src={item.image} style={styles.image}></Image></td>
                            <td>{item.price}</td>
                            <td>{item.stock}</td>
                            <td>{item.totalPrice}</td>
                            <td></td>
                        </tr>
                    )
                })}
            </tbody>
        )
    }

    render () {
        return (
            <div style={styles.container}>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <h1>CART</h1>
                    <Button
                        // onClick={this.btnCheckout}
                        style={styles.btn1}>
                        Check Out
                    </Button>
                </div>
                <Table striped bordered hover variant="dark">
                    {this.renderThead()}
                    {this.renderTbody()}
                </Table>

                {/* <h1 style={{textAlign:'right'}}>TOTAL: IDR {this.totalHarga().toLocaleString()}</h1> */}

                {/* <Modal show={reqPass} onHide={() => this.setState({reqPass: false})}>
                    <Modal.Header closeButton>
                        <Modal.Title>PASSWORD CONFIRMATION</Modal.Title>
                    </Modal.Header>

                    <Modal.Body>
                        Please enter your password here 🔻
                        <Form.Control ref='pass' type='password' placeholder="Enter Password Here"/>
                    </Modal.Body>

                    <Modal.Footer>
                        <Button variant="secondary"
                            onClick={() => this.setState({reqPass: false})}>
                            Close
                        </Button>
                        <Button variant="primary"
                            onClick={this.confirmPass}>
                            Confirm
                        </Button>
                    </Modal.Footer>
                </Modal>


                <Modal show={passErr} onHide={() => this.setState({passErr: false})}>
                    <Modal.Header closeButton>
                        <Modal.Title>ERROR WARNING</Modal.Title>
                    </Modal.Header>

                    <Modal.Body>
                        WRONG PASSWORD, ENTER AGAIN !
                    </Modal.Body>

                    <Modal.Footer>
                        <Button variant="secondary"
                            onClick={() => this.setState({passErr: false})}>
                                Close
                        </Button>
                    </Modal.Footer>
                </Modal>

                <Modal show={payErr} onHide={() => this.setState({payErr: false})}>
                    <Modal.Header closeButton>
                        <Modal.Title>PAYMENT WARNING</Modal.Title>
                    </Modal.Header>

                    <Modal.Body>
                        PLEASE INPUT THE RIGHT AMOUNT FOR PAYMENT
                    </Modal.Body>

                    <Modal.Footer>
                        <Button variant="secondary"
                            onClick={() => this.setState({payErr: false})}>
                                Close
                        </Button>
                    </Modal.Footer>
                </Modal>

                <Modal show={reqPay} onHide={() => this.setState({reqPay: false})}>
                    <Modal.Header closeButton>
                        <Modal.Title>PAYMENT</Modal.Title>
                    </Modal.Header>

                    <Modal.Body>
                        Please input your payment amount here 🔻
                        <Form.Control ref='payment' type='number' placeholder="Enter Amount of Payment Here"/>
                    </Modal.Body>

                    <Modal.Footer>
                        <Button variant="secondary"
                            onClick={() => this.setState({reqPay: false})}>
                                Close
                        </Button>
                        <Button variant="primary"
                            onClick={this.confirmPay}>
                                Confirm
                        </Button>
                    </Modal.Footer>
                </Modal>

                <Modal show={emptyCart} onHide={() => this.setState({emptyCart: false})}>
                    <Modal.Header closeButton>
                        <Modal.Title>EMPTY CART</Modal.Title>
                    </Modal.Header>

                    <Modal.Body>
                        🛒Make Sure The Items are in Your Cart 🛒
                    </Modal.Body>

                    <Modal.Footer>
                        <Button variant="secondary"
                            onClick={() => this.setState({emptyCart: false})}>
                                Close
                        </Button>
                    </Modal.Footer>
                </Modal> */}
            </div>
        )
    }
}

const styles = {
    container: {
        marginTop: '70px',
        padding: '0 10px',
    },
    image: {
        width: '100px',
        height: '100px'
    },
    btn: {
        fontSize: '10px',
        textAlign: 'center',
        marginRight: '10px'
    },
    btn1: {
        fontSize: '10px',
        textAlign: 'center'
    },
    tbody: {
        fontSize: '10px',
        textAlign: 'center'
    },
    thead: {
        fontSize: '15px',
        textAlign: 'center'
    },
}

const mapStateToProps = (state) => {
    return {
        email: state.user.email,
        password: state.user.password,
        cart: state.user.cart,
        id: state.user.id
    }
}

export default connect (mapStateToProps, {login}) (CartPage)