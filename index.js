import {routes} from './js/routes.js'
import { menu } from './pages/menu.js'

//-------------Menu-----------------
//Cargamos lo primero el menu
const nav = document.querySelector('.navmenu')
nav.innerHTML = menu;

//Función para mostrar o no el menu
function menuhide(path){
    const route = '/links'
    path === route ?    nav.innerHTML = '' : nav.innerHTML = menu;

}
 menuhide(location.pathname)
//
//------------Main-------------------
const contentDiv = document.querySelector('.content')

//Otros selecotres ()
const  contactDiv = document.querySelector('.contact')

//Historial Renderizar segun el cambio del path name
window.onpopstate = () =>{
    contentDiv.innerHTML = routes[location.pathname];

    //menuhide(path)
}

//onclick de items para navegar
const onClickItem = (pathName) =>{

    history.pushState({} ,pathName, location.origin + pathName)
    contentDiv.innerHTML = routes[pathName] 

    menuhide(pathName)

}


//El path cargado = al elemento cargado
contentDiv.innerHTML = routes[location.pathname];

//Onclickers
contactDiv.addEventListener('click' , ()=> {onClickItem('/links') ; return false})

