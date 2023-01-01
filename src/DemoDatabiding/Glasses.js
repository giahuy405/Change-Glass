import React, { Component } from 'react';
import style from './Glasses.module.css'

export default class Glasses extends Component {
    products = [
        {
            "id": 1,
            "price": 30,
            "name": "GUCCI G8850U",
            "url": "./glassesImage/v1.png",
            "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip.1 "
        },
        {
            "id": 2,
            "price": 50,
            "name": "GUCCI G8759H",
            "url": "./glassesImage/v2.png",
            "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip.2 "
        },
        {
            "id": 3,
            "price": 30,
            "name": "DIOR D6700HQ",
            "url": "./glassesImage/v3.png",
            "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip.3 "
        },
        {
            "id": 4,
            "price": 70,
            "name": "DIOR D6005U",
            "url": "./glassesImage/v4.png",
            "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip.4 "
        },
        {
            "id": 5,
            "price": 40,
            "name": "PRADA P8750",
            "url": "./glassesImage/v5.png",
            "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip.5 "
        },
        {
            "id": 6,
            "price": 60,
            "name": "PRADA P9700",
            "url": "./glassesImage/v6.png",
            "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip.6 "
        },
        {
            "id": 7,
            "price": 80,
            "name": "FENDI F8750",
            "url": "./glassesImage/v7.png",
            "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip.7 "
        },
        {
            "id": 8,
            "price": 100,
            "name": "FENDI F8500",
            "url": "./glassesImage/v8.png",
            "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip.8 "
        },
        {
            "id": 9,
            "price": 60,
            "name": "FENDI F4300",
            "url": "./glassesImage/v9.png",
            "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip.9"
        }
    ]
    state = {
        id: 1,
        imgGlass: './glassesImage/v1.png',
        nameGlass: 'GUCCI G8850U',
        priceGlass: 30,
        descGlass: 'Light pink square lenses define these sunglasses, ending with amother of pearl effect tip.'
    }
    renderGlasses = (idGlass) => {
        if (this.state.id === idGlass) return;
        let html = this.products.filter(item => {
            return item.id === idGlass;
        })

        this.setState({
            id: html[0].id,
            imgGlass: html[0].url,
            nameGlass: html[0].name,
            priceGlass: html[0].price,
            descGlass:html[0].desc,
        })
    }
    renderButton() {
        let html = this.products.map(item => {
            return (
                <button key={item.id} onClick={() => this.renderGlasses(item.id)}><img className='img-fluid' alt={item.name} src={item.url} /></button>
            )
        })
        return html;
    }
    render() {
        return (
            <div className='container'>
                <div className='row mt-5'>
                    <div className='col-5 text-center mt-5'>
                        <img alt='abc' style={{ width: 250, boxShadow: '5px 5px 10px gray' }} src='./glassesImage/model.jpg' />
                    </div>
                    <div className='col-2 d-flex align-items-center justify-content-center'>
                        <i style={{ fontSize: 60 }} className="fa-solid fa-arrow-right "></i>
                    </div>
                    <div className='col-5 text-center mt-5'>
                        <div className={style.modelWithGlass}>
                            <img alt='abc' style={{ width: 250, boxShadow: '5px 5px 10px gray' }} src='./glassesImage/model.jpg' />
                            <div >
                                <img className={style.glassForModel} src={this.state.imgGlass} alt='glass for model' />
                                <div className={style.overlay}>
                                    <h6> {this.state.nameGlass}</h6>
                                    <div>
                                        <p>Price: <span>${this.state.priceGlass}</span></p>
                                        <p> {this.state.descGlass}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={style.buttonGroup}>
                    {this.renderButton()}
                </div>

            </div>
        )
    }
}
