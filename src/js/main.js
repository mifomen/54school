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





// var timerId = setInterval(function() {
//   SlideLeft();
// }, 500);

//  let StopTimer = function () {
//   clearInterval(timerId)
//   console.log(timerId)
//  }
 // let StartTimer = function () {
 //  setInterval(SlideLeft, 1000);


 //  console.log('start' + timerId)
 // }
 // setInterval(SlideLeft, 1000);

// clearInterval(timerId)

// setTimeout(function() {
//   clearInterval(timerId);
//   alert('stop');
// }, 5000);
var NewsSliderArray = [
{
  href:"http://54school.ru/news3/shkolnyj-hudozhestvennyj-konkurs-kak-ja",
  text:"Школьный художественный конкурс «Как я вижу весну»",
  imgSrc:"http://54school.ru/_mod_files/ce_images/5april2019/0009.jpg"

},
{
  href:"http://54school.ru/news3/anons-meroprijatij-na-zimnie-kanikuly",
  text:"Анонс мероприятий на зимние каникулы",
  imgSrc:"http://54school.ru/_mod_files/ce_images/christmas2019/slide1.jpg"
},
{
  href:"https://na.ria.ru/20181022/1531069799.html",
  text:"Что нужно знать о своих правах на ЕГЭ и как действовать!",
  imgSrc:"https://cdn22.img.ria.ru/images/153106/83/1531068357_0:0:998:2629_998x0_80_0_0_46ec4c0d21f0cf8beecaed523c0cdaa6.png"
}
]

function addElem(href,txt,imgSrc) {
  var newLi = document.createElement('li');
  newLi.classList="new-slider__card";

  var link = document.createElement('a');
  link.classList="mifomen"
  link.target="_blank";
  link.href=href;

  var newText= document.createElement('span');
  newText.textContent=txt;

  var newImg = document.createElement('img');
  newImg.src=imgSrc;
  newImg.width="100%";
  newImg.alt="picture";

  list.appendChild(newLi);
  newLi.appendChild(link);
  link.appendChild(newImg);
  link.appendChild(newText);

//   var div = document.createElement('div');
//   // div.className = "alert alert-success";
//   // div.innerHTML = "<strong>Ура!</strong> Вы прочитали это важное сообщение.";
//   // list.appendChild(div);
//   // document.body.insertBefore(list, document.body.firstChild);

//   // создать копию узла
//   var div2 = newLi.cloneNode(true);
//   // копию можно подправить
// div2.querySelector('span').textContent = 'YA COPY!!';
//   // вставим её после текущего сообщения
//   newLi.parentNode.insertBefore(div2, div.nextSibling);
}



// setTimeout(function() {
//   for (var i=0; i<=2; i++) {
//     addElem(mas[i].href,mas[i].text,mas[i].imgSrc)
//   }
// }, 10);


// var x = 250;
var x=0;
var Count=0;
addElem(NewsSliderArray[Count].href,NewsSliderArray[Count].text,NewsSliderArray[Count].imgSrc)
var NewsSliderCount=250*(NewsSliderArray.length-1)

// console.log('NewsSliderCount= ' + NewsSliderCount)

let SlideLeft = function () {
  // if (x<NewsSliderCount)  {x+=250}  
  x+=250
  document.querySelector('.new-slider__wrapper').style.transform = 'translateX(-' + x + 'px)'
  // console.log('x= ' + x)
  Count+=1;
}
// let SlideRight = function () {

//  if (x<=NewsSliderCount)  {x-=250}  
//   if (x<1) {x=0}
//    // console.log('NewsSliderCount= ' + NewsSliderCount)
//  // console.log('RIGHT x= ' + x)
//  document.querySelector('.new-slider__wrapper').style.transform = 'translateX(-' + x + 'px)';
//  Count-=1;

// }
  var RemoveFirstItem = function () {
   var checkbox = document.querySelector('.new-slider');
   var item = checkbox.querySelector('.new-slider__card');
     x-=250;
       document.querySelector('.new-slider__wrapper').style.transform = 'translateX(-' + x + 'px)'
   item.remove();
 
 };


var timerIdd = setInterval(function() {

 if (Count<NewsSliderArray.length) {
  SlideLeft();
}

if (Count==NewsSliderArray.length) {Count=0
x-=250
       document.querySelector('.new-slider__wrapper').style.transform = 'translateX(-' + x + 'px)'
} else {}

  // console.log('Count ' + Count)
addElem(NewsSliderArray[Count].href,NewsSliderArray[Count].text,NewsSliderArray[Count].imgSrc)


if (x == 2000) {
  RemoveFirstItem();
} else {}

// setTimeout(function() {
// addElem(NewsSliderArray[Count+1].href,NewsSliderArray[Count+1].text,NewsSliderArray[Count+1].imgSrc)
// }, 500);

},2000);


// var timerId = setInterval(function() {
//   SlideLeft();
// }, 500);


  // var first = document.querySelector(".new-slider__wrapper").children[0]
  // console.log(first)
  // var second = document.querySelector(".new-slider__wrapper").children[1]
  //  console.log(second)

  // нет необходимости в предварительном removeChild(last)
  // document.body.insertBefore(second, first); // поменять местами




