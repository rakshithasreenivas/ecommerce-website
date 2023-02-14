class Component{
    mount(el){
        if(el){
            el.appendChild(this.render());
            return;
        }
        document.body.appendChild(this.render());
        return;
    }
}

export default Component;