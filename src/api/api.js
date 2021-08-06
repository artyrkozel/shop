import axios from "axios";

export const movieApi = {
    getItems() {
        return axios.get('https://store-mernapp.herokuapp.com/api/posts', {headers: {'ContentType': 'application/json'}})
    },
    getCatItem() {
        return axios.get('https://store-mernapp.herokuapp.com/api/cart/carts', {headers: {'Content-Type': 'application/json'}})

    },
    getBlogItems() {
        return axios.get('https://store-mernapp.herokuapp.com/api/article/all', {headers: {'Content-Type': 'application/json'}})
    },
    setItemToCart(cartItem) {
        return axios.post('https://store-mernapp.herokuapp.com/api/cart/add', {...cartItem}, {headers: {'Content-Type': 'application/json'}})
            .then(() => console.log('added to cart'))
            .then(() => axios.get('https://store-mernapp.herokuapp.com/api/posts'))
    },
    deleteCartItem(cartId) {
        return axios.post('https://store-mernapp.herokuapp.com/api/cart/remove', {id: cartId})
            .then(() => console.log('delete'))
    },
    updateCartItemCount(cartId, count){
        return axios.post('https://store-mernapp.herokuapp.com/api/cart/update', {id: cartId, count: count})
            .then(() => console.log('update'))
    }
}
