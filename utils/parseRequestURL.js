


const parseRequestURL = () =>{

    let url = location.hash.slice(1).toLowerCase()
    let r = url.split("/")
    return r[1]

}

export default parseRequestURL;