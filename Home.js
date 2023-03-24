
const http=require("http")
const url=require("url")
const data=require("./Apicalling")
const urlclass=require("./url")
const endpoint=require("./endpoint")
const info=require("./request")
const requestmode = require('request')
const server=http.createServer(async(req,respo)=>{
   
   
   let da= url.parse(req.url,true)
   let jokesObject={}
    if(da.pathname==="/api/jokes") 
    {
        
       
   
        let jokeArray=[]
       
        
            for(let i=0; i<da.query.count; i++){
            let info= await data(urlclass.BASEURL,endpoint.JOKESEND)
              jokesObject={
                id:info.id,
                value:info.value
             }
             jokeArray.push(JSON.stringify(jokesObject))
             requestmode("https://api.chucknorris.io/jokes/random", (error, response, body)=>{
               let info= JSON.parse(body);
               jokesObject={
                id:info['id'],
                value:info['value']
             }
              console.log(jokesObject)
             jokeArray.push(jokesObject)
                
           
           })

        }
       
        respo.writeHead(200, { 'Content-Type': 'application/json' });
          
        respo.end(JSON.stringify(jokeArray))  
      
    }

})
server.listen(3040,"127.0.0.1",()=>{
    console.log("3040 is running")
})


