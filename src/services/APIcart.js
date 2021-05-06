import React, { useState } from 'react'

export function Add(item) {
    // console.log("add ", item)
    // let cart = [] //to be optimised?
    
    let cart = JSON.parse(localStorage.getItem('cart'))
    // console.log('getitem: ',cart)
    // console.log('get item', localStorage.getItem('cart'))
    
    //is cart empty?
    if(cart == null) {
        // console.log('no get item')
        cart = []
        cart.push(item)
    }else{
        // console.log('typeof cart', typeof cart)
        //is item already in cart
        if (cart.find(cartItem => cartItem.ID == item.id)) {
            //increment quantity
            //todo
            // console.log('increment items')
        }else{
            //add new item to cart
            cart.push(item)
            // console.log('add items')
        }
        // console.log('pointeur gauche')
    }
    // console.log('go to the stringify')
    // console.log('stringify cart: ', cart)
    let stringCart = JSON.stringify(cart);
    localStorage.setItem("cart", stringCart)

  return 0
}

export function Remove(id) {
    let cart = JSON.parse(localStorage.getItem('cart'))

    if(cart != null) {
        const index = cart.findIndex(item => {return item.id == id});
        //remove
        cart.splice(index,1)
        //write to localstorage
        localStorage.setItem("cart",JSON.stringify(cart))
    }

    console.log('local statr: ', JSON.parse(localStorage.getItem('cart')))
}
// export def function name(params) {
    
// } Add = (item) => {
    
//     let localCart = localStorage.getItem("cart");
    
//     let cartCopy = [...cart];
    
//     let {ID} = item;
  
//     //look for item in cart array
//     let existingItem = cartCopy.find(cartItem => cartItem.ID == ID);
    
//     //if item already exists
//     if (existingItem) {
//         existingItem.quantity += item.quantity //update item
//     } else { //if item doesn't exist, simply add it
//         cartCopy.push(item)
//     }
    
//     //update app state
//     setCart(cartCopy)
    
//     //make cart a string and store in local space
//     let stringCart = JSON.stringify(cartCopy);
//     localStorage.setItem("cart", stringCart)
// }
