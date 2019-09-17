$(document).on("click","#camera",function(){
   navigator.camera.getPicture(onSucess, onFail,{
   quality: 100,
   destinationType: Camera.DestinationType.FILE_URI,
   correctOrietation:true,
   saveToPhotoAlbum:true
   });

   function onSucess(imageURI){
     var image = document.getElementById("image");
     image.src = imageURI;
   }

   function onFail(message){
     navigator.notification.alert("Failed because: " + message);
   }
});

$(document).on("change","#myRange",function(){
  $("#image").css("filter","opacity("+$(this).val()+"%)");
})

$(document).on("change","#myRange1",function(){
  $("#image").css("filter","saturate("+$(this).val()+"%)");
})

$(document).on("change","#myRange2",function(){
  $("#image").css("filter","grayscale("+$(this).val()+"%)");
})

$(document).on("change","#myRange3",function(){
  $("#image").css("filter","blur("+$(this).val()+"px)");
})

