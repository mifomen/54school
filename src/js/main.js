// document.addEventListener('DOMContentLoaded', function () {
//   if (localStorage["MenuOpen"] == "YES") {
//     document.querySelector('.js-menu-active').classList.add('hover'); 
// document.querySelector('.arrow-after').classList.add('arrow-after-off')

// } else {
//     document.querySelector('.js-menu-active').classList.remove('hover'); 
// document.querySelector('.arrow-after').classList.remove('arrow-after-off')

// }})
// // document.querySelector('.active-sub').classList.remove('active-sub')

// // document.querySelector('.arrow').style.transform = "rotate(90deg)";
// // document.querySelector('.arrow-after').style.opacity= "0";



var links = document.getElementsByTagName('a');
for (var i = 0; i < links.length; i++) {
  links[i].addEventListener('click',function (evt) {
    evt.preventDefault();
  })
};


// var hoverEffect = function () {
//   // console.log('mifomen')
//   document.querySelector('.js-menu-active').classList.toggle('hover')
//   // document.querySelector('.js-menu').classList.toggle('hover')
//   document.querySelector('.arrow-after').classList.toggle('arrow-after-off')
//   if (document.querySelector('.js-menu-active').classList.contains('hover')) {
//     localStorage["MenuOpen"] = "YES"

//   } else {
//     localStorage["MenuOpen"] = "NO"
//   } 

// }
// // onClick="hoverEffect2()"
// var hoverEffect2 = function () {
//   document.querySelector('.hover-js-2').classList.toggle('hover-w200')
// }
// var hoverEffect3 = function () {
//   document.querySelector('.hover-js-3').classList.toggle('hover-w200')
// }

document.addEventListener("DOMContentLoaded",function(){
    document.querySelector(".active-sub").classList.remove("active-sub")
  if ("YES"==localStorage.MenuOpen) {
    document.querySelector(".js-menu-active").classList.add("hover")
    document.querySelector(".arrow-after").classList.add("arrow-after-off")
  } else {
    document.querySelector(".js-menu-active").classList.remove("hover")
    document.querySelector(".arrow-after").classList.remove("arrow-after-off")
  
  }})



var hoverEffect = function(){
  document.querySelector(".js-menu-active").classList.toggle("hover"),
  document.querySelector(".arrow-after").classList.toggle("arrow-after-off")
  if (  document.querySelector(".js-menu-active").classList.contains("hover")) {
    localStorage.MenuOpen="YES"
  } else {
    localStorage.MenuOpen="NO"
  }
}

  var hoverEffect2=function(){
    document.querySelector(".hover-js-2").classList.toggle("hover-w200")
  }
  var hoverEffect3=function(){
    document.querySelector(".hover-js-3").classList.toggle("hover-w200")
  }