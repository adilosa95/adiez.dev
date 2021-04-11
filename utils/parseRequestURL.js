

const parseRequestURL = () =>{

    let url = location.hash.slice(1).toLowerCase() || "/"
    return url

}

export default parseRequestURL;