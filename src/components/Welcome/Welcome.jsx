import axios from "axios"

axios.get('/make-request').then(response =>{
    console.log(response)
}).catch(err => {
    console.log("error in get", err)
})

function Welcome() {
            
    return <button >Button</button>

}


export default Welcome