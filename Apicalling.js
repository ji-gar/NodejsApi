const axios = require('axios');
const data=async()=>{
      try{
        const info= await axios.get("https://api.chucknorris.io/jokes/random")
         return info.data
      }
      catch(err){
          console.log(err)
      }

}
module.exports=data

