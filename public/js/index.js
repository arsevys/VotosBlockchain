$(function(){
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

toastr["info"]("Para Votar Usted Debera Contar Con su Address");
 toastr["success"]("Nuevo Voto Completado por <strong style='color:white'> 0x6d29803c2AcDdC6b9B1FF44B2226FFD70817d276 </strong>");
 toastr["success"]("Nuevo Voto Completado por <strong style='color:white'> 0x6d29803c2AcDdC6b9B1FF44B2226FFD70817d276 </strong>");
 toastr["success"]("Nuevo Voto Completado por <strong style='color:white'> 0x6d29803c2AcDdC6b9B1FF44B2226FFD70817d276 </strong>");

setInterval(function(){
  toastr["success"]("Nuevo Voto Completado por <strong style='color:white'> 0x6d29803c2AcDdC6b9B1FF44B2226FFD70817d276 </strong>");

},15000)

$("#enviar").click(()=>{
  console.log($(".iptKey").val());
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
  })

})

  $.ajax({
    url:"/result",
    type:"POST",
    success:function(i){
      console.log(i);
      $(".uno").text(i[1])
      $(".dos").text(i[3])
    }
  })


$("#votar").click(()=>{
 
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
