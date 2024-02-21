var hh = document.querySelector('.bars') 
var mobile_u = document.querySelector('.mobile-ul')
var company_links = document.querySelector("#company-links")

function addclass(){
   hh.classList.toggle("show")
   mobile_u.classList.toggle("hey")
}

function showlinks(el, btn){
  if (el.style.display === "block") {
     el.style.display = "none"
     btn.setAttribute("class", "fa fa-chevron-down")
  } else {
     el.style.display = "block"
     btn.setAttribute("class", "fa fa-chevron-up")
  }
}