var popoverlay=document.querySelector(".pop-overlay")
var popbox=document.querySelector(".pop-box")
var addbutton=document.getElementById("add-pop-button")

addbutton.addEventListener("click",function(){
    popoverlay.style.display="block"
    popbox.style.display="block"
})

var cancelbutton=document.getElementById("cancel")

cancelbutton.addEventListener("click",function(event){
    event.preventDefault()
    popoverlay.style.display="none"
    popbox.style.display="none"
})
var container=document.querySelector(".container")
var addbox=document.getElementById("add")
var bookname=document.getElementById("title-input")
var authorname=document.getElementById("author-input")
var bookdetail=document.getElementById("detail-input")

addbox.addEventListener("click",function(event){
    event.preventDefault()
    var div=document.createElement("div")
    div.setAttribute("class","div-container")
    div.innerHTML=`<h2>${bookname.value}</h2>
    <h5>${authorname.value}</h5>
    <p>${bookdetail.value}</p>
    <button onclick="deletebook(event)">delete</button>`
    container.append(div)
    popoverlay.style.display="none"
    popbox.style.display="none"

})
function deletebook(event){
    event.target.parentElement.remove()

}
