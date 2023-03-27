
const http=require("http")
const url=require("url")
const data=require("./Apicalling")
const urlclass=require("./url")
const endpoint=require("./endpoint")
const reque=require('./request')
const requestmode = require('request')
const server=http.createServer(async(req,respo)=>{

   
   let da= url.parse(req.url,true)
   let jokesObject={}
 
    if(da.pathname==="/api/jokes") 
    {
        let jokeArray=[]
   
        respo.writeHead(200, { 'Content-Type': 'application/json' });
   
        
       
            for(let i=0; i<da.query.count; i++){
              
            //   await reque().then((data)=>{
            //         jokesObject={
            //             id:data.id,
            //             value:data.value
            //          }
            //          jokeArray.push(JSON.stringify(jokesObject))
            //    }).catch((err)=>{console.log(err)})

             try
             {
                 let data=await reque()
                 jokesObject={
                    id:data.id,
                    value:data.value
                 }
                 jokeArray.push(JSON.stringify(jokesObject))
             }
             catch(err)
             {
                 console.log(err)
             }
                
    
         
        }
      respo.end(JSON.stringify(jokeArray))   
            
       
       
          
      
      
    }

})
server.listen(3060,"127.0.0.1",()=>{
    console.log("3060 is running")
})


