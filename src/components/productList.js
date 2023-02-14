import Component from "./component.js";
import Product from "./product.js";
const url="https://github.com/rakshithasreenivas/ecommercedata/blob/main/Documents/website/data/products.json"

class ProductList extends Component{
    
    
    render(){
        const productListContainer=document.createElement("div");
        const productListHeading=document.createElement("h1");
    
        productListContainer.classList.add("productListContainer");
        
        productListHeading.innerText="Products";
        productListContainer.appendChild(productListHeading);

        fetch(url)
            .then((response)=>{
                return response.json();
            })
            .then((data)=>{
                data.forEach((element)=>{
                    const productComponent=new Product("productContainer",element);
                    productComponent.mount(productListContainer);
                })

            })
            .catch((err)=>{
                console.log("Error",err);
            })

        return productListContainer;
    }
}

export default ProductList;