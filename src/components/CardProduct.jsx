import React from 'react'
import DummyProduct from './DummyProduct.jsx'
import Mouse from './assets/mousered.jpg'
import Keyboard from './assets/Keyboard.jpg'
import { Link } from 'react-router-dom'

const styles = {
    cardContainer: {
        width: '241px',
        height: '410px',
        backgroundColor: '#212121',
        marginRight: '10px',
    },
    img: {
        width: '241px',
        height: '312px',
        objectFit: 'cover',
    },
    title: {
        color: '#F74D4D',
        fontSize: '18px',
        paddingLeft: '15px',
        margin: '7px 0px',
    },
    p: {
        color: 'white',
        fontSize: '14px',
        paddingLeft: '15px',
        marginBottom: '5px',
    }
}

function CardProduct() {
    return (
        <div style={{ display: 'flex', }}>
            {
                DummyProduct.map((product) => (
                    <div style={styles.cardContainer}>
                        <img style={styles.img} src={product.img} alt='' />
                        <Link to="/detail-product"><h6 style={styles.title}>{product.title}</h6></Link>
                        <p style={styles.p}>Rp.{product.price}</p>
                        <p style={styles.p}>Stock : {product.stock}</p>
                    </div>
                ))
            }
        </div>
    )
}

export default CardProduct;