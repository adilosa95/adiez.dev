import {routes} from './js/routes.js'
import { menu } from './pages/menu.js'

//-------------Menu-----------------
//Cargamos lo primero el menu
const nav = document.querySelector('.navmenu')
nav.innerHTML = menu;

//Función para mostrar o no el menu
function menuhide(path){
    const route = '/links'
    path === route ?  nav.innerHTML = '' : nav.innerHTML = menu;

}
menuhide(location.pathname)
//
//------------Main-------------------
const contentDiv = document.querySelector('.content')

//Historial Renderizar segun el cambio del path name
window.onpopstate = () =>{
    contentDiv.innerHTML = routes[location.pathname];

}
//onclick de items para navegar
const onClickItem = (pathName) =>{
        history.pushState({} ,pathName, location.origin + pathName)
    contentDiv.innerHTML = routes[pathName] 

}


//El path cargado = al elemento cargado
contentDiv.innerHTML = routes[location.pathname];
//
//
//Otros selecotres ()
const  contactDiv = document.querySelector('.contact')
//Onclickers
contactDiv.addEventListener('click' , ()=> {onClickItem('/links') ; return false})
