import React from 'react'
import cssModules from '../components/Homepage.module.css'
import CardProduct from '../components/CardProduct.jsx'
import Mouse from '../components/assets/mousered.jpg'
import Keyboard from '../components/assets/Keyboard.jpg'
import Navigation from '../components/Navigation.jsx';

function Homepage() {
    return (
        <div>

            <Navigation />

            <div className={cssModules.homePageContainer}>
                <h5>Product</h5>
                <div className={cssModules.homeCardContainer}>
                    <CardProduct />
                </div>
            </div>
        </div>
    )
}

export default Homepage;