 

  
const receivesAFunction = (callBack) => {
    return callBack()
}

const returnsANamedFunction = () => {
    const name = () => {
        return "cody"
    } 
    return name
}


const returnsAnAnonymousFunction = () => {
    return function() {'Who is this?'}
}