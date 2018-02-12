$(function(){
  if (typeof web3 == 'undefined'){
$(".meta").css({"display":"block"});

        $(".primer").css({"display":"none"});
  }else {
     $(".meta").css({"display":"none"});
  }
// var ipfs = window.IpfsApi('localhost', '5001')
// console.log(ipfs);
// const  Buffers=window.IpfsApi().Buffer;
// const d={
//   "nombre":"Andy Javier Reyes"
// }
// let iz=Buffers.from(JSON.stringify(d));

// ipfs.add(iz,(function(e,d){
// console.log(e,d);
// }))

var addr;
toastr.options = {
  "closeButton": false,
  "debug": false,
  "newestOnTop": false,
  "progressBar": false,
  "positionClass": "toast-bottom-right",
  "preventDuplicates": false,
  "onclick": null,
  "showDuration": "1000",
  "hideDuration": "2000",
  "timeOut": "6000",
  "extendedTimeOut": "1000",
  "showEasing": "swing",
  "hideEasing": "linear",
  "showMethod": "fadeIn",
  "hideMethod": "fadeOut"
}

// toastr["info"]("Para Votar Usted Debera Contar Con su Address");
 
// setInterval(function(){
//   toastr["info"]("Nuevo Voto Completado por <strong style='color:white'> 0x6d29803c2AcDdC6b9B1FF44B2226FFD70817d276 </strong>");

// },35000)


console.log(C);
$("#enviar").click(()=>{
  console.log($(".iptKey").val());
  C.comprobar($(".iptKey").val(),function(err,data){
    console.log(data,899);
    if(data[0]){
      $(".primer").css({"display":"none"});
    
      $(".segundo").css({"display":"block"});
    }
    else {

    toastr["warning"](data[1])
    $(".msg").html("<a href='/validar.html' target='_blank'>Afiliar Voto</a>")
    }
})
  /*
  $.ajax({
    url:"/validar",
    type:"POST",
    data:{
      "adreess":$(".iptKey").val()
    },
    success:function(e){
    console.log(e);
    if(e.x==true){
      $(".msg").text("Este Address Ya A Votado o es un address invalido!!");
    }
    else {
      $(".primer").css({"display":"none"});
      $(".container").css({"background":"#F0F0F0"});
      $(".segundo").css({"display":"block"});
       addr=$(".iptKey").val();
      console.log(addr);
    }
    }
  })*/

})
/*
  $.ajax({
    url:"/result",
    type:"POST",
    success:function(i){
      console.log(i);
      $(".uno").text(i[1])
      $(".dos").text(i[3])
    }
  })

*/
$("#votar").click(()=>{

  C.votar(obten(),(e,d)=>{
 console.log(e,d);


 if(d){

    $(".primer").css({"display":"none"});
      $(".segundo").css({"display":"none"});
      $(".tercero").css({"display":"block"});
      $(".container").css({"background":"purple"});
      $(".fr").attr("href","https://rinkeby.etherscan.io/tx/"+d);
 }

  })
 /*
  $.ajax({
    url:"/votar",
    type:"POST",
    data:{
      "from":$(".iptKey").val(),
      "to":obten()
    },
    success:function(e){
    console.log(e);
    if(e.x==false){
      $(".msg").text("Este Address Ya A Votado");

    }
    else {
      $(".primer").css({"display":"none"});
      $(".segundo").css({"display":"none"});
      $(".tercero").css({"display":"block"});
      $(".container").css({"background":"purple"});
    }
    }
  })
*/
})

$(".elegir").click(function(){
  if($(this).is(":checked")){
     $(".elegir").prop("checked",false);
  $(this).prop("checked",true)
  }else{
   
  }
})


function obten(){
  let x;
  console.log($(".elegir"));
  $.each($(".elegir"),function(){
    console.log($(this).data("a"),$(this).is(":checked"));
    if($(this).is(":checked")==true){
     x=$(this).data("a");
    }else {
       return 55;
    }
   
})
  return x;
}
	
})
