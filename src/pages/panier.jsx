import React from 'react'
import '../App.css'
import Card from '../components/creditCardForm'

export default function Panier() {

    const item_panier = JSON.parse(localStorage.getItem('cart')) ? JSON.parse(localStorage.getItem('cart')) : []
    console.log('item_panier: ', item_panier)
    const getItems = () => {
        item_panier = JSON.parse(localStorage.getItem('cart')) ? JSON.parse(localStorage.getItem('cart')) : []
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
                        <p>{item.price}</p>
                        <p>{item.price * item.price}</p>
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
