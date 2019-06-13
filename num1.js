

//name.getAttribute("href")
//name.setAttribute("href","http://www.amazon.com")

//var head= document.querySelector('h1')
//head.addEventListener("click", changecolor)   //click,hovers.doubleclick, drags etc
//search for web events on developer.mozilla.org


const sections= document.querySelectorAll('section');
const prevBtn= document.querySelector('.prev');
const nextBtn= document.querySelector('.next');

let index=0;
nextBtn.addEventListener('click',()=> {
  if (index>3)return;
  index++;
  sections.forEach((section,i) =>{
    if(i=== index) {
      section.scrollIntoView({behavior: 'smooth'});
    }
  })
});

prevBtn.addEventListener('click',()=> {
  if(index<1)return;
  index--;
  sections.forEach((section,i) =>{
    if(i=== index) {
      section.scrollIntoView({behavior: 'smooth'});
    }
  })
});




var subtitle= document.getElementById("subtitle");
subtitle.style.color= 'red';

function getRandomColor(){
  var letters="0123456789ABCDEF";
  var color='#';
  for(var i= 0;i<6;i++){
      color+= letters[Math.floor(Math.random()*16)];
  }
  return color;
}

function changeHeaderColor(){
  colorInput= getRandomColor();
  subtitle.style.color= colorInput;

}

setInterval("changeHeaderColor()",500);
