import React from 'react'
import DetailProduct from './components/pages/DetailProduct'
import Mouse from '../components/assets/mousered.jpg'
import Navigation from '../components/Navigation.jsx'
import cssModules from '../components/DetailProduct.module.css'

function detailProduct() {
    return (
        <div>
            <Navigation />
            <div className={cssModules.detailProductPageContainer}>
                <DetailProduct img={Mouse} title='Mouse' stock='600' spec1='Wireless Mouse' spec2='Konektivitas wireless 2.4 GHz' spec3='Jarak wireless hingga 10 m' spec4='Plug and Play' spec5='Baterai tahan hingga 12 bulan' description='Mouse Wireless Alytech AL - Y5D, hadir dengan desain 3 tombol mouse yang ringan dan mudah dibawa. Mouse ini menggunakan frekuensi radio 2.4GHz (bekerja hingga jarak 10m) dan fitur sensor canggih optik pelacakan dengan penerima USB yang kecil. Mouse ini didukung oleh 1x baterai AA (hingga 12 bulan hidup baterai). mendukung sistem operasi Windows 7,8, 10 keatas, Mac OS X 10.8 atau yang lebih baru dan sistem operasi Chrome OS' price='300.900' />
            </div>
        </div>
    )
}

export default detailProduct;