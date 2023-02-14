import Component from "./component.js";


class Cart extends Component{

    static totalPrice;
    static totalQuantity;
    
    render(){
        const cartContainer=document.createElement("div");
        const cartHeading=document.createElement("h1");
        Cart.totalPrice=document.createElement("h2");
        Cart.totalQuantity=document.createElement("h3");
        const cartProducts=document.createElement("div");
      
        cartContainer.classList.add("cartContainer");
        cartProducts.classList.add("cartProducts");

        cartHeading.innerText="Cart";
        Cart.totalPrice.innerHTML=`Total Price: 0`;
        Cart.totalQuantity.innerText=`Quantity: 0`;
        cartContainer.appendChild(cartHeading);
        cartContainer.appendChild(Cart.totalPrice);
        cartContainer.appendChild(Cart.totalQuantity);

        cartContainer.appendChild(cartProducts);
        
        return cartContainer;

    }
}

export default Cart;