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