import Component from "./component.js";
import Cart from "./cart.js";
import Product from "./product.js";

class Counter extends Component{

    static totalPrice=0;
    static quantity=0;
    static cart=[];

    constructor(uniqueId,data,count){
        super();
        if(count){
            this.count=count;
        }else{
            this.count=0;
        }
        this.data=data;
        this.uniqueId=uniqueId;
    }

    increment(){
        this.count=this.count+1;
        Counter.totalPrice=Counter.totalPrice+parseInt((this.data.price).replace(",",""));
        Counter.quantity=Counter.quantity+1;
       
        this.updateValue();

    }

    decrement(){
        if(this.count>0){
            this.count=this.count-1;
            Counter.totalPrice=Counter.totalPrice-parseInt((this.data.price).replace(",",""));
            Counter.quantity=Counter.quantity-1;
        }
        this.updateValue();
    }

    updateValue(){
        const counterValue=document.getElementById(`counterValue-${this.uniqueId}`);
        counterValue.innerText=`${this.count}`;
        Cart.totalPrice.innerText=`Total Price: ${Counter.totalPrice}`;
        Cart.totalQuantity.innerText=`Quantity: ${Counter.quantity}`;
        Product.quantityValue.innerText=`Quantity: ${this.count}`;
        if(this.count>0){
            console.log(Cart.cartProducts)
            const el=(Counter.cart).find((ele)=>this.data.productName===ele.productName);
            if(el===undefined){
                Counter.cart.push(this.data);
                const productCard=new Product("cartProductContainer",this.data,this.uniqueId);
                productCard.mount(document.querySelector(".cartProducts"));
            }
        }
        if(this.count===0){
            const el=(Counter.cart).find((ele)=>this.data.productName===ele.productName);
            if(el){
                 const productCard=document.getElementById(`cartProductContainer-${this.uniqueId}`);
                 productCard.remove();
                const index=(Counter.cart).findIndex((ele)=>this.data.productName===ele.productName);
                Counter.cart.splice(index,1);
            }
        }
    }

    render(){
        const counterContainer=document.createElement("div");
        const incrementButton=document.createElement("button");
        const decrementButton=document.createElement("button");
        const counterValue=document.createElement("p");

        counterContainer.classList.add("counterContainer");
        counterContainer.id=`counterContainer-${this.uniqueId}`;
        incrementButton.id=`increment-${this.uniqueId}`;
        incrementButton.classList.add("incrementBtn");
        decrementButton.id=`decrement-${this.uniqueId}`;
        decrementButton.classList.add("decrementBtn");
        counterValue.id=`counterValue-${this.uniqueId}`;

        incrementButton.innerText="+";
        decrementButton.innerText="-";
        counterValue.innerText=`${this.count}`;

        counterContainer.appendChild(incrementButton);
        counterContainer.appendChild(counterValue);
        counterContainer.appendChild(decrementButton);

        incrementButton.addEventListener('click',this.increment.bind(this));
        decrementButton.addEventListener('click',this.decrement.bind(this));

        return counterContainer;
    }
}

export default Counter;