//selecting popupbox,popupoverlay button
var popupoverlay = document.querySelector(".popupoverlay")
 var popupbox = document.querySelector(".popupbox")
 var addpopupbutton = document.getElementById("addpopupbutton")
 addpopupbutton.addEventListener("click",function(){
    popupoverlay.style.display = "block"
    popupbox.style.display = "block"
 })
 //select cancel button
 var cancelbook = document.getElementById("cancelbook")
 cancelbook.addEventListener("click",function(event){
    event.preventDefault()
     popupoverlay.style.display = "none"
    popupbox.style.display = "none"
 })
 //select container,add book,booktitle,bookauthor,book description
 var container = document.querySelector(".container")
 var addbook = document.getElementById("addbook")
 var booktitleinput = document.getElementById("booktitleinput")
 var booktitleinput = document.getElementById("bookauthorinput")
 var booktitleinput = document.getElementById("bookdescriptioninput")

 addbook.addEventListener("click",function(){
    event.preventDefault()
    var div=document.createElement("div")
    div.setAttribute("class", "bookcontainer")
    div.innerHTML= `<h2>${booktitleinput.value}</h2>
    <h5>${bookauthorinput.value}</h5>
    <p>${bookdescriptioninput.value}</p>
     <button onclick="deletebook(event)">Delete</button>`
    container.append(div)
 })
 function deletebook(event)
 {
    event.target.parentElement.remove()
 }