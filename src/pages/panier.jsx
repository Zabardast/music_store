import React, { useState } from 'react'
import '../App.css'
import Card from '../components/creditCardForm'
import { Remove } from '../services/APIcart'

export default function Panier({a_onCartChanged}) {

    const [item_panier, set_item_panier] = useState(JSON.parse(localStorage.getItem('cart')) ? JSON.parse(localStorage.getItem('cart')) : [])

    // console.log('item_panier: ', item_panier)
    const getItems = () => {
        set_item_panier(JSON.parse(localStorage.getItem('cart')) ? JSON.parse(localStorage.getItem('cart')) : [])
    }

    return (
    <div className="main_panier">
        <h3>Recap du panier d'achat</h3>
        <div className="contenu_panier">
            <div className="pan_header">
                <p></p>
                <p>Produit</p>
                <p>Prix</p>
                <p>Quantite</p>
                <p>Total</p>
            </div>
            {item_panier.map((item)=>{
                console.log('item', item)
                return (
                    <div className="panier_item">
                        <img src={item.image.name} className="panier_item_image" width="150px" height="150px" />
                        <p>{item.name}</p>
                        <p>{item.price}</p>
                        <p>{item.quantity}</p>
                        <p>{(item.price * item.audio_format) * item.quantity}</p>
                        <button onClick={() => {Remove(item.id); getItems(); a_onCartChanged()}} >-</button>
                    </div>
                )
            })}
        </div>
        <div className="formulaire_dachat">
            <h3>votre paiement</h3>
            <Card/>
        </div>
    </div>
  )
}
