import React from 'react'
import Axios from 'axios'

import {
    Card,
    Button,
    Modal
} from 'react-bootstrap'

import {Link} from 'react-router-dom'

class Products extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            toLogin: false,
            products1: [],
            products2: [],
            products3: [],
            products4: [],
            prod1Err: false,
        }
    }

    componentDidMount() {
        let products1 = []
        let products2 = []
        let products3 = []
        let products4 = []
        Axios.get(`http://localhost:2000/products`)
            .then((res) => {
                console.log(res.data[0])
                products1.push(res.data[0])
                products2.push(res.data[1])
                products3.push(res.data[2])
                products4.push(res.data[3])
                this.setState({ 
                    products1: products1, 
                    products2: products2, 
                    products3: products3, 
                    products4: products4 
                })
            })
            .catch((err) => console.log(err))

        // Axios.get(`http://localhost:2000/products/1`)
        //     .then((res) => {
        //         console.log(res.data)
        //         products1.push(res.data)
        //         this.setState({products1: products1})
        //         console.log(products1)
        //         console.log(products1.price)
        //     })
    }

    addToCart1 = () => {

    }

    render() {
        console.log(this)
        return (
            <div style={styles.divutama}>
                <h1 style={{ color: 'white' }}>PRODUCTS</h1>
                <div style={{ display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap' }}>
                    {this.state.products1.map((item, index) => {
                        return (
                            <Card bg='secondary' style={{ width: '18rem', marginBottom: '20px', borderRadius: '30px' }} key={index}>
                                <Card.Img variant="top" src={item.img} />
                                <Card.Body>
                                    <Card.Title>{item.name}</Card.Title>
                                    <Card.Text>{item.description}</Card.Text>

                                    <div style={styles.button}>
                                        <Button variant="primary">💖💖💖</Button>
                                        <Button variant="primary" as={Link} to={`/detail${item.id}`}>Buy 🛒</Button>
                                    </div>
                                </Card.Body>
                            </Card>
                        )
                    })}
                    {this.state.products2.map((item, index) => {
                        return (
                            <Card bg='secondary' style={{ width: '18rem', marginBottom: '20px', borderRadius: '30px' }} key={index}>
                                <Card.Img variant="top" src={item.img} />
                                <Card.Body>
                                    <Card.Title>{item.name}</Card.Title>
                                    <Card.Text>{item.description}</Card.Text>

                                    <div style={styles.button}>
                                        <Button variant="primary">💖💖💖</Button>
                                        <Button variant="primary" as={Link} to={`/detail${item.id}`}>Buy 🛒</Button>
                                    </div>
                                </Card.Body>
                            </Card>
                        )
                    })}
                    {this.state.products3.map((item, index) => {
                        return (
                            <Card bg='secondary' style={{ width: '18rem', marginBottom: '20px', borderRadius: '30px' }} key={index}>
                                <Card.Img variant="top" src={item.img} />
                                <Card.Body>
                                    <Card.Title>{item.name}</Card.Title>
                                    <Card.Text>{item.description}</Card.Text>

                                    <div style={styles.button}>
                                        <Button variant="primary">💖💖💖</Button>
                                        <Button variant="primary" as={Link} to={`/detail${item.id}`}>Buy 🛒</Button>
                                    </div>
                                </Card.Body>
                            </Card>
                        )
                    })}
                    {this.state.products4.map((item, index) => {
                        return (
                            <Card bg='secondary' style={{ width: '18rem', marginBottom: '20px', borderRadius: '30px' }} key={index}>
                                <Card.Img variant="top" src={item.img} />
                                <Card.Body>
                                    <Card.Title>{item.name}</Card.Title>
                                    <Card.Text>{item.description}</Card.Text>

                                    <div style={styles.button}>
                                        <Button variant="primary">💖💖💖</Button>
                                        <Button variant="primary" as={Link} to={`/detail${item.id}`}> Buy 🛒</Button>
                                    </div>
                                </Card.Body>
                            </Card>
                        )
                    })}

                </div>
            </div>
        )
    }
}

const styles = {
    body: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-around',
        height: '350px'
    },
    text: {
        display: 'flex',
        justifyContent: 'start'
    },
    button: {
        display: 'flex',
        justifyContent: 'space-evenly'
    },
    divutama: {
        padding: '20px',
        background: 'url(https://images.unsplash.com/photo-1526655805340-274e69922288?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80)'
    }
}

const mapStateToProps = (state) => {
    return {
        email: state.user.email,
        password: state.user.password,
        id: state.user.id,
        cart: state.user.cart
    }
}

export default Products