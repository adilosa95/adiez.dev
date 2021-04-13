//import recieveRedirectrecieveRedirect from './js/routers.js'

let routes = {
    '/': 'Hola',
    '/links': 'portfolio',
  };


let contentDiv = document.querySelector('.content')

window.onpopstate = () =>{
    contentDiv.innerHTML = routes[window.location.pathname];
}
//onclick de items para navegar
const onClickItem = (pathName) =>{

    history.pushState({} ,pathName, location.origin + pathName)
    contentDiv.innerHTML = routes[pathName]
}

contentDiv.innerHTML = routes[window.location.pathname];

// //Listen on hash change:
// window.addEventListener('hashchange', recieveRedirectrecieveRedirect);

// // Listen on page load:
// window.addEventListener('load',recieveRedirectrecieveRedirect );

