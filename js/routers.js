
import parseRequestURL from "../utils/parseRequestURL.js";
import routes from "./routes.js";

const routers = () =>{
 
    let page = routes[parseRequestURL()] ? routes[parseRequestURL()].template : routes['/'].template 

    const content = document.querySelector('.content')
    setTimeout(()=>{
        // uses HTML5 history API to manipulate the location bar
        history.pushState(null, null, window.location.href.split('#')[0]);
    }, 5); // 5

    content.innerHTML = page

}

export default routers;