const init = () =>{
    const { location: { pathname = "/"} } = window
    const URL = pathname === "/" ? "home" : pathname.replace("/" , "")

   load( URL )
}
const load = ( page = "home") =>{

    const {path , template} = PATHS[page] || PATHS['error']
    const container = document.querySelector('#content')
    container.innerHTML = template
    window.history.pushState({},"done",path)
}
init()