
    import axios from 'axios'
    axios.defaults.baseURL = 'http://localhost:5000/api'
    
    // KINGA'S KOD

export async function getItemFromId(itemId) {
    return await axios.get('/items/'+ itemId)
}

export async function getItemsFromCategory(category) {
    return await axios.get('/items/?category='+ category)
}

export async function getProducts(page) {
    return await axios.get('/items?page='+ page)
}

    // EDITHA' KOD
export async function getProductList() {
    return await axios.get('/items')
}

   //  FABIO'S KOD 

    export async function login(email,password){
        try{
        const response = await axios.post('/auth/',{email,password})
        return response

        }catch(error){
            console.log("LOGIN ERROR STUFF")
        }
            }
    
    export async function getUserInfo(){
         try{
        const response = await axios.get('/me')
        return response
               
        }catch(error){
                    console.log("GetUserInfo ERROR STUFF")
        }
             }

    export async function savetoken(token){
        try{    
        axios.defaults.headers.common['Authorization'] = "Bearer " + token;    
        }catch(error){
            console.log("SaveToken ERROR STUFF")
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



    // export async function itemlist(title,price,category,shortDesc){
    //     try{
    //         const response = await axios.get('/items/?page=1',{
    //           title,price,category,shortDesc
    //         })
    //         return response
    //     }catch(error){

    //     }


    // }




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
