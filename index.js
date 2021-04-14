import {recieveRedirect} from './js/redirect.js'
import {routes} from './js/routes.js'

//Main
const contentDiv = document.querySelector('.content')

const  contactDiv = document.querySelector('.contact')

window.onpopstate = () =>{
    contentDiv.innerHTML = routes[window.location.pathname];
}
//onclick de items para navegar
const onClickItem = (pathName) =>{

    history.pushState({} ,pathName, location.origin + pathName)
    contentDiv.innerHTML = routes[pathName]
}
//
//El path cargado = al elemento cargado
contentDiv.innerHTML = routes[window.location.pathname];

//
//Inicializamos el redirect
recieveRedirect()
//
//Oncliks del menu
contactDiv.addEventListener('click' , ()=> {onClickItem('/links') ; return false})