class HelloWorld extends HTMLElement{
    connectedCallback(){
        this.textContent='this is text from the js file';
    }
}
customElements.define('hello-world',HelloWorld)