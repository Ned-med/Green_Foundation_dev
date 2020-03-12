// const u="med";console.log(you);const Person=function(e,n,a){this.name=e,this.yearOfbirth=n,this.job=a};Person.prototype.calculateAge=function(){console.log(2020-this.yearOfbirth)};const john=new Person("john",1990,"teacher"),jane=new Person("jane",1995,"designer"),Mark=new Person("jane",1960,"retired");john.calculateAge(),jane.calculateAge(),Mark.calculateAge();

const listItems = document.querySelectorAll(".main li");
const allimages = document.querySelectorAll(".main .container-fluid .images");

function toggleActiveClass(active) {
    listItems.forEach(item => {
        item.classList.remove("active");
    });
    active.classList.add("active");
}

function toggleimages(dataClass) {
    if (dataClass === "all") {
        for (let i = 0; i < allimages.length; i++) {
            allimages[i].style.display = "block";
        }
    } else {
        for (let i = 0; i < allimages.length; i++)
            allimages[i].dataset.class === dataClass ?
            (allimages[i].style.display = "block") :
            (allimages[i].style.display = "none");
    }
}

for (let i = 0; i < listItems.length; i++) {
    listItems[i].addEventListener("click", function () {
        toggleActiveClass(listItems[i]);
        toggleimages(listItems[i].dataset.class);
    });
}

///********** */ Dispay caption ***********///

const caption = document.getElementsByClassName("caption");
const imgs = document.getElementsByTagName("img");

for (let i = 0; i < imgs.length; i++) {
    ["mouseover", "mouseout"].forEach(evt => {
        imgs[i].addEventListener(evt, () => {
            if (caption[i].style.display == "block") {
                caption[i].style.display = "none";
            } else {
                caption[i].style.display = "block";
            }
        })
    });
}
var video = document.getElementById("myVideo");
var btn = document.getElementById("myBtn");

function myFunction() {
  if (video.paused) {
    video.play();
    btn.innerHTML = "Pause";
  } else {
    video.pause();
    btn.innerHTML = "Play";
  }
}

function openForm() {
    document.getElementById("myForm").style.display = "block";
  }
  
  function closeForm() {
    document.getElementById("myForm").style.display = "none";}