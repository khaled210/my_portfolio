// for the open popop


function openModal() {
  document.getElementById("over-port").style.display = "block";
}

function closeModal() {
  document.getElementById("over-port").style.display = "none";
}

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  slideIndex = n
  showSlides(slideIndex);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("my-slids");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      // slides[i].style.display = "none";
      slides[i].style.opacity = "0";
      
  }
  // slides[slideIndex-1].style.display = "block"; 
  slides[slideIndex-1].style.opacity = "1";

}

// End the open popop



// this two function to the nav in the phone

function openNav(){
  document.getElementById("open-nav").style.display="none";
  document.getElementById("close-nav").style.display="block";
  document.getElementById("my-nav-mini").style.width="100%";

}
function closeNav(){
  document.getElementById("open-nav").style.display="block";
  document.getElementById("close-nav").style.display="none";
  document.getElementById("my-nav-mini").style.width="0%";
}

// End two function to the nav in the phone





// this two function to display block and non for the color box

function openBox(){
  document.getElementById("change-color").style.marginLeft="-500px";
  document.getElementById("box-color").style.marginLeft="0px";
}
function closeBox(){
  document.getElementById("change-color").style.marginLeft="0";
  document.getElementById("box-color").style.marginLeft="-500px";
}

// End two function to display block and non for the color box

// this code to change color
document.body.classList.add(localStorage.getItem("saveColor") || "purple")

var el = document.querySelectorAll(".box-color-content ul li i"),
hear = document.querySelectorAll("body:first-child"),
classItem = [];

for (i = 0 ; i < el .length ; i++ ){
  classItem.push(el[i].getAttribute("data-color"));

  el[i].addEventListener("click", function(){
      document.body.classList.remove(...classItem)
      document.body.classList.add(this.getAttribute("data-color"))
      localStorage.setItem("saveColor", this.getAttribute("data-color"))
  })
}
console.log(classItem);

// End code to change color



// for the hover

// var allBox =document.getElementsByClassName("img-bord");

// var boxWidth = allBox[0].querySelector("img").offsetWidth;
// var boxHeight = allBox[0].querySelector("img").offsetHeight;
// var boxLeft = allBox[0].querySelector("img").offsetLeft;
// var boxTop = allBox[0].querySelector("img").offsetTop;
// var div = document.createElement("div");
//     div.className="hezn";
//     document.querySelector(".port").appendChild(div);

//     for(let i=0; i<allBox.length; i++){
//       allBox[i].querySelector("img").addEventListener("mouseover" , function(){
//           const x = this.offsetLeft;
//           const y = this.offsetTop;

//           div.style.left=x+"px";
//           div.style.top=y+"px";  
//       })
//     }



// End the hover
