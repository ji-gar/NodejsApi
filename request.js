
const req = require('request')
// let p=new Promise((resolve, reject) => {
//     req('https://api.chucknorris.io/jokes/random', (error, response, body) => {
//         if (error) {
//             reject(error)
//         } else {
           
//             resolve(JSON.parse(body))
           
//         }
//     })
// })
// p.then((data) => {
//    module.exports=data
// }).catch((err) => {   
//     console.log(err)
//   })
 async function apiResponse()
{
    return new Promise((resolve, reject) => {
        req('https://api.chucknorris.io/jokes/random', (error, response, body) => {
            if (error) {
                reject(error)
            } else {
               
                resolve(JSON.parse(body))
               
            }
        })
    })
}
module.exports=apiResponse
   
 

