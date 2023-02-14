import Cart from "./cart.js";
import Component from "./component.js";
const url="https://github.com/rakshithasreenivas/ecommercedata/blob/main/Documents/website/data/header.json";

class Header extends Component{
    
    render(){
        const headerContainer=document.createElement("div");
        const userContainer=document.createElement("div");
        const userIcon=document.createElement("i");
        const userName=document.createElement("h4");

        headerContainer.classList.add("headerContainer");
        userContainer.classList.add("userContainer");
        fetch(url)
            .then((response)=>{
                return response.json();
            })
            .then((data)=>{
                userIcon.className=data.userIcon;
                userName.innerText=data.userName;
                headerContainer.appendChild(userContainer);
                userContainer.appendChild(userIcon);
                userContainer.appendChild(userName);
                
            })
            .catch((err)=>{
                console.log("Error occured:",err);
            })
            
            return headerContainer;
    }
}

export default Header;