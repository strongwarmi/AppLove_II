window.addEventListener('load',function(){
var ImgPortafolio=[{url:"img-1.jpg"},
                   {url:"img-2.jpg"},
                   {url:"img-3.jpg"},
                   {url:"img-4.jpg"},
                   {url:"img-5.jpg"},
                   {url:"img-6.jpg"},
                   {url:"img-7.jpg"},
                   {url:"img-8.jpg"},
                   {url:"img-9.jpg"},
                   {url:"img-10.jpg"},
                   {url:"img-11.jpg"},
                   {url:"img-12.jpg"}];
function CreaPortafolio(){
  var portafolio = document.getElementById("portafolio");
  ImgPortafolio.forEach(function(Imagen){
    var directorio = "assets/img/" + Imagen.url;
    var img = document.createElement('img');
    img.className="picture";
    img.id= "img" + ImgPortafolio.indexOf(Imagen);
    img.setAttribute("src",directorio);
    portafolio.appendChild(img);

  });//cierra forEach
}
CreaPortafolio();

function onClick(element) {
  document.getElementById("img01").src = element.src;
  document.getElementById("modal01").style.display = "block";
}
var listaimages = document.getElementsByClassName("picture");
var mostrarModal=function(){
  console.log(this)
}
for (var i = 0; i < listaimages.length; i++) {
  listaimages[i].addEventListener("click",mostrarModal)
}
//img0.addEventListener("click", function() {
  //event.preventDefault();
  //onClick(img0);
  // console.log("dddd");
//});//fin click

});// fin load
