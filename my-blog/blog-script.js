// to my blog windo
var myBlogs = document.getElementsByClassName("blog-img");

for(i=0 ; i < myBlogs.length ; i++){
    myBlogs[i].onclick = function (){
        window.location.assign("./blog-desc/blog-desc-index.html")
   }
}

var myBlogsP = document.querySelectorAll(".blog-desc h3");

for(i=0 ; i < myBlogsP.length ; i++){
    myBlogsP[i].onclick = function (){
        window.location.assign("./blog-desc/blog-desc-index.html")
   }
}

// End to my blog windo  

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
  
  for (i = 0 ; i < el.length ; i++ ){
    classItem.push(el[i].getAttribute("data-color"));
  
    el[i].addEventListener("click", function(){
        document.body.classList.remove(...classItem)
        document.body.classList.add(this.getAttribute("data-color"))
        localStorage.setItem("saveColor", this.getAttribute("data-color"))
    })
  }
  console.log(classItem);
  
  // End code to change color
