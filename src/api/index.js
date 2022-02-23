
// export async function getProductList(){
// const request = await fetch('http://localhost:5000/api/items/', 
// {
//       method:'GET',
//       headers:{

//       },
//       body:''

//     }
//     )
//     const data = await request.json()
//     // console.log(data.products)
//     return data
//     }


    // export async function getLogin(email,password){
    //     const request = await fetch('http://localhost:5000/api/auth/', 
  
    //  {
    //      method:"POST",
    //      body:JSON.stringify({email,password}),
    //      headers:{
    //          "Content-Type":"application/json"
    //      }
    // }
    //     )

    //         const data = await request.json()
    //         // console.log(data.products)
    //         return data
    //         }

    import axios from 'axios'

    axios.defaults.baseURL = 'http://localhost:5000/api'
    
    export async function login(email,password){
        try{
        const response = await axios.post('/auth/',{email,password})
        return response

        }catch(error){
            console.log("LOGIN ERROR STUFF")
        }
            }
    

     export async function register(email,password,name,city,street,zip){
        try{
         const response = await axios.post('/register/',{
             email,password,name,address:{city,street,zip}
            })
         return response
        
         }catch(error){
                    console.log("REGISTER ERROR STUFF")
        }
             }



    //   export async function register(email,password){
    //             try{
    //             const response = await axios.post('/register/',{email,password})
    //             return response
        
    //             }catch(error){
    //                 console.log("ERROR STUFF")
    //             }
    //                 }
            
    

    // export async function getRegister(email,password){
    //       const request = axios.get('http://localhost:5000/api/auth/', {
    //               email,password
    //             })
    //             return request
    //           }        


import axios from 'axios'

axios.defaults.baseURL = "http://localhost:5000/api"

export async function getItemFromId(itemId) {
    return await axios.get('/items/'+itemId)
}

export async function getItemsFromCategory(category) {
    return await axios.get('/items/?category='+category)
}

