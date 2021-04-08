
// const init = () =>{
//     const { location: { pathname = "/"} } = window
//     const URL = pathname === "/" ? "home" : pathname.replace("/" , "")

import parseRequestURL from "../utils/parseRequestURL.js";
import routes from "./routes.js";

//    load( URL )
// }
// const load = ( page = "home") =>{

//     const {path , template} = PATHS[page] || PATHS['error']
//     const container = document.querySelector('#content')
//     container.innerHTML = template
//     window.history.pushState({},"done",path)
// }
// init()


const routers = () =>{
 
    const content = document.querySelector('.content')

    let page = routes[parseRequestURL()] ? routes[parseRequestURL()].template : 'Hola'
    
    content.innerHTML = page

}

export default routers;