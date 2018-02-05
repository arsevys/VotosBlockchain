var express=require("express");
var bodyParser=require("body-parser");
var path=require("path");
var app=express();

var Web3 = require('web3');
const addressContract="0x18e8f769e67bec440c5c93ca85c3fb20e1965b4c";
const abi=require("./abi.json")
var web3 = new Web3();
web3.setProvider(new web3.providers.HttpProvider('http://localhost:8545'));
web3.eth.defaultAccount = web3.eth.accounts[0];
var Contract = web3.eth.contract(abi);
var C = Contract.at(addressContract);
console.log(C.tiempo)


C.tiempo((e,data)=>{
console.log("dddd"+e,data);
})


app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname,"public")))
app.get("/",function(req,res){
	res.sendFile("index.html")
})


app.post("/validar",(req,res)=>{

 console.log(req.body);

 C.comprobar(req.body.adreess,(c,n)=>{
	console.log(5,c)
	res.status(200).send({x:n})
  })

})


app.post("/result",(req,res)=>{
C.total((e,r)=>{
	console.log(r);
res.status(200).send(r);
})
})

app.post("/votar",(req,res)=>{
console.log(req.body);
const x=req.body;
C.votar(x.from,x.to,(c)=>{
res.status(200).send({x:true})
})

})

app.get("/evn",(req,res)=>{
	C.tiempo((e,data)=>{
console.log("dddd"+e,data);
res.writeHead(200,{
	"Access-Control-Allow-Origin":"*",
	"Content-Type":"text/event-stream",
	"Cache-Control":"no-cache"
})

res.write("event: ola\n")
res.write("data:"+data+"\n\n")
})
})

console.log("Probando desde consola");




app.listen(3500,()=>{
	console.log("Servidor Ejecutanjjose en el puerto "+3500)
})