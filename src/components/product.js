import Component from "./component.js";
import Counter from "./counter.js";
import generateUniqueId from "./uniqueIdGenerator.js";
let i=1;

class Product extends Component{

    static quantityValue;
    constructor(containerName,data,uniqueId){
        super();
        this.containerName=containerName;
        this.product=data;
        if(uniqueId){
            this.uniqueId=uniqueId;
        }else{
            this.uniqueId=generateUniqueId(i);
        }
        i=i+1;
    }

    render(){
        const {productImage,productName,price,deliveryType}=this.product;
        
        const productContainer=document.createElement("div");
        const image=document.createElement("img");
        const productHeading=document.createElement("h3");
        const pricePara=document.createElement("h3");
        const delivery=document.createElement("p");
        Product.quantityValue=document.createElement("h3");
        const counterComponent=new Counter(this.uniqueId,this.product,this.count);

        productContainer.classList.add("productContainer");
        productContainer.id=`${this.containerName}-${this.uniqueId}`;
        Product.quantityValue.classList.add("quantityValue");

        image.src=productImage;
        productHeading.innerText=productName;
        pricePara.innerText=`${price} INR`;
        Product.quantityValue.innerText=`Quantity: ${Counter.quantity}`;

        delivery.innerText=deliveryType;
        productContainer.appendChild(image);
        productContainer.appendChild(productHeading);
        productContainer.appendChild(pricePara);
        productContainer.appendChild(delivery);
        productContainer.appendChild(Product.quantityValue);
        productContainer.appendChild(counterComponent.render());

        return productContainer;

    }
}

export default Product;