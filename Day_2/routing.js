const server=require("http") 
server.createServer((req,res)=>{
    if(req.url==='/')
        {
            res.write("This is my first page")
        }
        else 
            if(req.url==="/about"){
                res.write("This is about page")
            }
            else 
                if(req.url==="/contact"){
                    res.write("This is contact page")
                }
                else 
                    {
                        res.write("404 page not found")
                    }   
res.end("") 
}).listen(5000,()=>{
console.log('server is started')
})