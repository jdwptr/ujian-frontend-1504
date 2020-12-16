import React from 'react'

import Products from '../components/products'

class Home extends React.Component {
    render () {
        return (
            <div style={styles.container}>
                {/* <h1>INI HOME</h1> */}
                <Products/>
            </div>
        )
    }
}

const styles= {
    container: {
        marginTop: '70px',
    }
}

export default Home