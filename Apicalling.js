const axios = require('axios');
const data=async(baseurl,endPoint)=>{
      try{
        const info= await axios.get(`${baseurl}${endPoint}`)

         return info.data
      }
      catch(err){
          console.log(err)
      }

}
module.exports=data

