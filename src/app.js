import Cart from "./components/cart.js";
import Component from "./components/component.js";
import Header  from "./components/header.js";
import ProductList from "./components/productList.js";

class App extends Component{

    constructor(components){
        super();
        this.components=[...components];
    }

    render(){
        const appContainer=document.createElement("div");
        this.components.forEach((component)=>{
            appContainer.appendChild(component.render());
        });
        appContainer.classList.add("app");
        return appContainer;
    }
    
}
const app=new App([new Header(),new ProductList(),new Cart()]);
export default app;