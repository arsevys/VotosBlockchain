var Web3 = require('web3');
const addressContract="0x08c0acc71691dd5c9883bdb9a617fd772c47cd0b";

const abi=require("./../abi.json")
var web3 = new Web3();




web3.setProvider(new web3.providers.HttpProvider('http://localhost:8545'));

var Contract = web3.eth.contract(abi);

var C = Contract.at(addressContract);

class Funciones {
     
  static votar(a,b,callback){
  	console.log("VOTANDO **********");
  	console.log(a,b)
 web3.eth.defaultAccount="0x4891a4394a6f0daab716f4aa7e237c27b5982975";
  	console.log("new : " +web3.eth.defaultAccount)
 
  C.votar(a,b,(e,y)=>{
  	 console.log(e,y);
   if(e){
  	  console.log(e,y);
  return;
  }
  
  return callback(b);

  })
  }
  

  static validar(x,callback){
   C.comprobar(x,(e,y)=>{
   if(typeof e==="null"){
  	  console.log(e,y);
  return;
  }
  
  return callback(y);

  })
  }
  
  static mostrarResultados(callback){
  C.total((e,y)=>{
  if(typeof e==="null"){
  	  console.log(e,y);
  return;
  }
	return callback(y);
  });
  }



}





Funciones.mostrarResultados((p)=>{
	console.log(p)
})
module.exports=Funciones;