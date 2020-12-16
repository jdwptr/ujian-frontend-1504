import React from 'react'
import Axios from 'axios'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

import {
    Image,
    Button,
    Modal
} from 'react-bootstrap'

class DetailBeli4 extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            products1: [],
            products2: [],
            products3: [],
            products4: [],
            total: 0
        }
    }

    componentDidMount() {
        let products4 = []
        Axios.get(`http://localhost:2000/products${this.props.location.search}`)
        .then((res) => {
            products4.push(res.data[3])
            this.setState({ products4: products4 })
            // this.setState({ stok: res.data[0].stock[0]})
            // console.log(res.data[0].stock[0])
        })
        .catch((err) => console.log(err))
    }

    addCart = () => {
        const {total, products4} = this.state

        // console.log(this.props.username)
        if (!this.props.email) return this.setState({ toLogin: true })

        // check user input
        if (total === 0 ) return this.setState({ cartErr: true })

        let cartData4= {
            name: products4.name,
            image: products4.img,
            price: products4.price,
            stock: products4.stock,
            qty: total,
            totalPrice: total * products4.price
        }
        // console.log(cartData)
        let cartTemp= this.props.cart
        cartTemp.push(cartData4)
        // console.log(cartTemp)

        Axios.patch(`http://localhost:2000/users/${this.props.id}`, {
            cart: cartTemp
        })
        .then((res => {
            console.log(res.data)
            this.setState({toCart: true})
        }))
        .catch((err) => console.log(err))
    }

    render() {
        const {total, stock, toCart, toLogin} = this.state
       
        if (toLogin) return <Redirect to='/login' />
        if (toCart) return <Redirect to='/cart' />
        
        return (
            <div style={styles.container}>
                {/* <h1 style={{ marginLeft: '60px' }}>DEETS!</h1> */}
                <div style={{ display: 'flex', height: '65vh', justifyContent: 'space-evenly' }}>
                    {this.state.products4.map((item, index) => {
                        return (
                            <div style={{display:'flex',}}>
                                <div style={styles.divimg}>
                                    <Image src={item.img} style={{ width: '80%', height: '100%', borderRadius: '50px', marginTop:'150px'}}/>
                                </div>
                                <div style={styles.divdesc}>
                                    <h2>{item.name}</h2>
                                    <p style={{ textAlign: 'align-right' }}>{item.description}</p>
                                    <h4>Price: IDR {item.price ? item.price.toLocaleString() : 0}</h4>
                                </div>
                                <div style={{ display: 'flex', flexDirection:'column', justifyContent: 'flex-end', marginTop: '10px' }}>
                                    <h5>Quantity </h5>
                                    <div style={{ marginBottom: '10px', marginRight: '20px', display: 'flex', justifyContent: 'space-between', height: '38px', width: '43.25' }}>
                                        <Button
                                            disabled={total >= item.stock ? true : false}
                                            variant='light'
                                            onClick={() => this.setState({ total: total + 1 })}>➕</Button>
                                        <h3 style={{ backgroundColor: 'white', height: '38px' }}>{total}</h3>
                                        <Button
                                            disabled={total <= 0 ? true : false}
                                            variant='light'
                                            onClick={() => this.setState({ total: total - 1 })}>➖</Button>
                                    </div>
                                    <div style={{ marginBottom: '10px', display:'flex'}}>
                                        <Button variant='success' onClick={this.addCart}>Check Out</Button>
                                    </div>
                                </div>
                            </div>
                        )})}

                        {/* <Modal show={cartErr} onHide={() => this.setState({ cartErr: false })}>
                            <Modal.Header closeButton>
                                <Modal.Title>⚡ WARNING ⚡</Modal.Title>
                            </Modal.Header>

                            <Modal.Body>
                                PLEASE PICK YOUR SIZE AND QUANTITY OF THE SHOES
                            </Modal.Body>

                            <Modal.Footer>
                                <Button variant="primary" onClick={() => this.setState({ cartErr: false })}>
                                    Close
                                </Button>
                            </Modal.Footer>
                        </Modal> */}
                </div>
            </div>
        )
    }
}

const styles = {
        container: {
        marginTop: '70px',
        // padding: '10px 20px',
        // paddingTop: '80px',
        // background: 'url(https://images.unsplash.com/photo-1445498059992-f5a276e1218d?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=751&q=80) no-repeat center',
        // backgroundSize: 'cover',
        backgroundColor: '#cfdbd5',
        height: '88vh'
    },
    divimg: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        // width: '200px',
        // height: '200px',
        paddingBottom: '20px',
    },
    divdesc: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'right',
        flexBasis: '60%',
        color: '#424b54',
        paddingTop: '150px'
    },
    divbtn: {
        display: 'flex',
        flexDirection: 'column'
    }
}

const mapStateToProps = (state) => {
    return {
        id: state.user.id,
        cart: state.user.cart,
        email: state.user.email,
        password: state.user.password
    }
}

// kalau mau pakai data, action nya gausah dibikin null
// kalo di kanan ada ation, dibikin null actionnya
export default connect(mapStateToProps) (DetailBeli4)