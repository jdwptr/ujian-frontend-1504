import React from 'react'

import DetailBeli1 from '../pages/detailbeli1'
import DetailBeli2 from '../pages/detailbeli2'
import DetailBeli3 from '../pages/detailbeli3'
import DetailBeli4 from '../pages/detailbeli4'

class Detail extends React.Component {
    render () {
        return (
            <div style={styles.container}>
                {/* <h1>INI HOME</h1> */}
                <DetailBeli1/>
                <DetailBeli2/>
                <DetailBeli3/>
                <DetailBeli4/>
            </div>
        )
    }
}

const styles= {
    container: {
        marginTop: '70px',
    }
}

export default Detail