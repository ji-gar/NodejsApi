
const http=require("http")
const url=require("url")
let data=require("./Apicalling")

const server=http.createServer(async(req,respo)=>{
   let da= url.parse(req.url,true)
    
     
    if(da.pathname==="/api/jokes") 
    {
        
   
        let jokeArray=[]
       
            console.log("Inside path.")
            for(let i=0; i<da.query.count; i++){
            let info= await data()
             let jsonob={
                id:info.id,
                value:info.value
             }
             jokeArray.push(JSON.stringify(jsonob))
            
        }
        respo.writeHead(200, { 'Content-Type': 'application/json' });
          
        respo.end(JSON.stringify(jokeArray))
        
      
       
      
        
    }

})
server.listen(3040,"127.0.0.1",()=>{
    console.log("9000 is running")
    
})