import React from 'react'
import cssModules from '../components/DetailProduct.module.css'
import { Link } from 'react-router-dom';

function productDetail(props) {

    return (
        <div>
            <div className={cssModules.productDetailContainer}>
                <div className={cssModules.productDetailLeft}>
                    <img src={props.img} alt='' />
                </div>
                <div className={cssModules.productDetailRight}>
                    <h2>{props.title}</h2>
                    <p className='one'>Stock : {props.stock}</p>
                    <p className='two'>-{props.spec1} <br />
                        -{props.spec2} <br />
                        -{props.spec3} <br />
                        -{props.spec4} <br />
                        -{props.spec5}</p>
                    <p className='desc'>{props.description}</p>
                    <h6 className={cssModules.h6price}>Rp.{props.price}</h6>
                    <Link to="/profile"><button>Buy</button></Link>
                </div>
            </div>
        </div>
    )
}

export default productDetail;