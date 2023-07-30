var page=document.getElementById("page0")
var home=document.getElementById("home")
var home1=document.getElementById("home1")
var about1=document.getElementById("about1")
var resume1=document.getElementById("resume1")
var project1=document.getElementById("project1")
var contact1=document.getElementById("contact1")
var change=document.querySelector(".change")
var change_one=document.getElementById("change1")
var change_two=document.getElementById("change2")
var change_three=document.getElementById("change3")
var change_four=document.getElementById("change4")
var changeIcon=document.getElementById("changeIcon")

var changeCount=0
var color_btn=document.getElementById("color_btn")
color_btn.addEventListener("click",function(){
	color_btn.classList.toggle('todoList')
	change.classList.toggle('todoList')
	change_one.classList.toggle('todoList')
	change_two.classList.toggle('todoList')
	change_three.classList.toggle('todoList')
	change_four.classList.toggle('todoList')
	changeCount++
	if(changeCount%2!=0){
		changeIcon.setAttribute("class","bi bi-brightness-high py-3 d-inline-block")
		project1.setAttribute("style","z-index: 0;background-color: #1d252c!important;color: white !important;")
		contact1.setAttribute("style","z-index: 0;background-color: #1d252c!important;color: white !important;")
	}
	else{
		changeIcon.setAttribute("class","bi bi-moon py-3 d-inline-block")
		project1.setAttribute("style","z-index: 0;background-color: white!important;color: black !important;")
		contact1.setAttribute("style","z-index: 0;background-color: white!important;color: black !important;")
	}
	
})

var changeIcon2=document.getElementById("changeIcon2")
var color_btn=document.getElementById("color_btn_1")
color_btn.addEventListener("click",function(){
	color_btn.classList.toggle('todoList')
	change.classList.toggle('todoList')
	change_one.classList.toggle('todoList')
	change_two.classList.toggle('todoList')
	change_three.classList.toggle('todoList')
	change_four.classList.toggle('todoList')
	changeCount++
	if(changeCount%2!=0){
		changeIcon2.setAttribute("class","bi bi-brightness-high py-3 d-inline-block")
		project1.setAttribute("style","z-index: 0;background-color: #1d252c!important;color: white !important;")
		contact1.setAttribute("style","z-index: 0;background-color: #1d252c!important;color: white !important;")
	}
	else{
		changeIcon2.setAttribute("class","bi bi-moon py-3 d-inline-block")
		project1.setAttribute("style","z-index: 0;background-color: white!important;color: black !important;")
		contact1.setAttribute("style","z-index: 0;background-color: white!important;color: black !important;")
	}
	
})

//count
var contactCount=0
var projectCount=0

page.setAttribute("class","col-12 col-md-12 col-lg-5 full-shadow-div1")
home1.setAttribute("class","col-12 col-md-12 col-lg-6 home in")
about1.setAttribute("class","col-12 col-md-12 col-lg-6 hidden")
resume1.setAttribute("class","col-12 col-md-12 col-lg-6 hidden")
project1.setAttribute("class","col-12 col-md-12 col-lg-6 home hidden")
contact1.setAttribute("class","col-12 col-md-12 col-lg-6 home hidden")
 
var change_clr_home=document.getElementById("change-clr-js")
var change_clr_home1=document.getElementById("change-clr-js1")
var change_clr_home2=document.getElementById("change-clr-js2")
var change_clr_home3=document.getElementById("change-clr-js3")
var change_clr_home4=document.getElementById("change-clr-js4")
change_clr_home.setAttribute("style","none")
change_clr_home1.setAttribute("style","none")
change_clr_home2.setAttribute("style","none")
change_clr_home3.setAttribute("style","none")
change_clr_home4.setAttribute("style","none")

home.addEventListener("click",function(e){
	e.preventDefault()
	
	//project and contact card reset function
	var contact_card=document.getElementById("contact1")
	contact_card.innerHTML=""

	var project_card=document.getElementById("project1")
	project_card.innerHTML=""
	//

	change_clr_home.setAttribute("style","color:#26fd26")
	change_clr_home1.setAttribute("style","none")
	change_clr_home2.setAttribute("style","none")
	change_clr_home3.setAttribute("style","none")
	change_clr_home4.setAttribute("style","none")

	contactCount=0
	projectCount=0

	home1.setAttribute("class","col-12 col-md-12 col-lg-6 home active in")
	about1.setAttribute("class","col-12 col-md-12 col-lg-6 home hidden")
	project1.setAttribute("class","col-12 col-md-12 col-lg-6 home hidden")
	resume1.setAttribute("class","col-12 col-md-12 col-lg-6 hidden")
	contact1.setAttribute("class","col-12 col-md-12 col-lg-6 home hidden")
})

var about=document.getElementById("about")
about.addEventListener("click",function(e1){
	e1.preventDefault()
	
	contactCount=0
	projectCount=0

	change_clr_home.setAttribute("style","none")
	change_clr_home1.setAttribute("style","color:#26fd26")
	change_clr_home2.setAttribute("style","none")
	change_clr_home3.setAttribute("style","none")
	change_clr_home4.setAttribute("style","none")

	home1.setAttribute("class","col-12 col-md-12 col-lg-6 home hidden")
	about1.setAttribute("class","col-12 col-md-12 col-lg-6 home in active")
	resume1.setAttribute("class","col-12 col-md-12 col-lg-6 hidden")
	project1.setAttribute("class","col-12 col-md-12 col-lg-6 home hidden")
	contact1.setAttribute("class","col-12 col-md-12 col-lg-6 home hidden")
})

var resume=document.getElementById("resume")
resume.addEventListener("click",function(e2){
	e2.preventDefault()
	
	//project and contact card reset function
	var contact_card=document.getElementById("contact1")
	contact_card.innerHTML=""

	var project_card=document.getElementById("project1")
	project_card.innerHTML=""
	//

	change_clr_home.setAttribute("style","none")
	change_clr_home1.setAttribute("style","none")
	change_clr_home2.setAttribute("style","color:#26fd26")
	change_clr_home3.setAttribute("style","none")
	change_clr_home4.setAttribute("style","none")

	contactCount=0
	projectCount=0

	home1.setAttribute("class","col-12 col-md-12 col-lg-6 home hidden")
	about1.setAttribute("class","col-12 col-md-12 col-lg-6 home hidden")
	project1.setAttribute("class","col-12 col-md-12 col-lg-6 home hidden")
	resume1.setAttribute("class","col-12 col-md-12 col-lg-6 home in active")
	contact1.setAttribute("class","col-12 col-md-12 col-lg-6 home hidden")
})

var project=document.getElementById("project")
project.addEventListener("click",function(e3){
	e3.preventDefault()

	// contact card reset function
	var contact_card=document.getElementById("contact1")
	contact_card.innerHTML=""
	//

	change_clr_home.setAttribute("style","none")
	change_clr_home1.setAttribute("style","none")
	change_clr_home2.setAttribute("style","none")
	change_clr_home3.setAttribute("style","color:#26fd26")
	change_clr_home4.setAttribute("style","none")
	
	contactCount=0
	++projectCount

	if(projectCount==1){

	var project1=document.getElementById("project1")
	home1.setAttribute("class","col-12 col-md-12 col-lg-6 home hidden")
	about1.setAttribute("class","col-12 col-md-12 col-lg-6 home hidden")
	resume1.setAttribute("class","col-12 col-md-12 col-lg-6 home hidden")
	project1.setAttribute("class","col-12 col-md-12 col-lg-6 div5-bg home in active")
	contact1.setAttribute("class","col-12 col-md-12 col-lg-6 div6-bg home hidden")

	
	
	var array=[{image:"image/mentor.png",cnt:"Mentor",link:"file:///C:/git-projects/29th-may-responsive/index.html"},{image:"image/vesper.png",cnt:"Vesper",link:"https://krishnakumar1823.github.io/24th-may-task/"},{image:"image/event.png",cnt:"Event",link:"file:///C:/git-projects/TheEvent/index.html"},{image:"image/groovin.png",cnt:"groovin",link:"file:///C:/git-projects/9th-june-task/index.html"}]
		
		var project1=document.getElementById("project1")

		var projectCardHead=document.createElement("p")
		projectCardHead.innerHTML="Projects"
		projectCardHead.setAttribute("class","abt-heading ps-4")

		project1.appendChild(projectCardHead)

		for(var i=0;i<array.length;i++){
			var project1=document.getElementById("project1")
		
			var flipCard=document.createElement("div")
			var flipCardInner=document.createElement("div")
			var flipCardFront=document.createElement("div")
			var imgSrc=document.createElement("img")
			var flipCardBack=document.createElement("div")
			var cnt=document.createElement("h6")
			var websiteLink=document.createElement("a")

			project1.setAttribute("class","col-12 col-md-12 col-lg-6 row div5-bg home in active")
			flipCard.setAttribute("class","flip-card col-12 col-md-6 col-lg-6 p-4")
			flipCardInner.setAttribute("class","flip-card-inner")
			flipCardFront.setAttribute("class","flip-card-front")
			flipCardBack.setAttribute("class","flip-card-back")
			
			
			imgSrc.setAttribute("style","height:250px;width:100%;border-radius:10px")
			imgSrc.setAttribute("src",array[i].image)
			
			cnt.setAttribute("class","col-12")
			cnt.innerHTML=`Website name: ${array[i].cnt}`
			websiteLink.innerHTML="<br>Project link"
			websiteLink.setAttribute("class","bi bi-link")
			websiteLink.setAttribute("href",array[i].link)
			websiteLink.setAttribute("style","color:white;display:block;")
			
			
			project1.appendChild(flipCard)
			flipCard.appendChild(flipCardInner)
			flipCardInner.appendChild(flipCardFront)
			flipCardFront.appendChild(imgSrc)
			flipCardInner.appendChild(flipCardBack)
			flipCardBack.appendChild(cnt)
			flipCardBack.appendChild(websiteLink)
		}
	}
})


var contact=document.getElementById("contact")
contact.addEventListener("click",function(e4){
	e4.preventDefault()
	
	// contact card reset function
	var project_card=document.getElementById("project1")
	project_card.innerHTML=""
	//

	++contactCount
	projectCount=0
	
	change_clr_home.setAttribute("style","none")
	change_clr_home1.setAttribute("style","none")
	change_clr_home2.setAttribute("style","none")
	change_clr_home3.setAttribute("style","none")
	change_clr_home4.setAttribute("style","color:#26fd26")

	if(contactCount == 1){
		var contact1=document.getElementById("contact1")
		home1.setAttribute("class","col-12 col-md-12 col-lg-6 home hidden")
		about1.setAttribute("class","col-12 col-md-12 col-lg-6 home hidden")
		resume1.setAttribute("class","col-12 col-md-12 col-lg-6 home hidden")
		project1.setAttribute("class","col-12 col-md-12 col-lg-6 div5-bg home hidden")
		contact1.setAttribute("class","col-12 col-md-12 col-lg-6 div6-bg home in active")
				
		var array1=[{cls:"https://img.icons8.com/bubbles/500/apple-phone.png",contact:"tel:+919787533778",text:"phone number",call:"9787533778"},{cls:"https://img.icons8.com/bubbles/500/apple-mail.png",contact:"mailto:kumarkrishna11231@gmail.com",text:"Mail id",call:"kumarkrishna11231@gmail"},{cls:"https://img.icons8.com/3d-fluency/94/github.png",contact:"https://github.com/krishnakumar1823",text:"Github id",call:"https://github.com/krishnakumar1823"}]
		console.log(array1)
		var contact1=document.getElementById("contact1")

		var contactCardHead=document.createElement("p")
		contactCardHead.innerHTML="Contact"
		contactCardHead.setAttribute("class","abt-heading ps-4")

		contact1.appendChild(contactCardHead)
		for(var i=0;i<array1.length;i++){

			var flipCard=document.createElement("div")
			flipCard.setAttribute("id","contact_card")
			var flipCardInner=document.createElement("div")
			var flipCardFront=document.createElement("div")
			var imgtag=document.createElement("img")
			var flipCardBack=document.createElement("div")
			var cnt=document.createElement("h6") 
			var cnt1=document.createElement("p") 
			var websiteLink=document.createElement("a")
		
			contact1.setAttribute("class","col-12 col-md-12 col-lg-6 row div5-bg home in active")
			flipCard.setAttribute("class","flip-card col-12 col-md-6 col-lg-6 p-4")
			flipCardInner.setAttribute("class","flip-card-inner")
			flipCardFront.setAttribute("class","flip-card-front bg-light d-flex align-items-center justify-content-center")
			flipCardBack.setAttribute("class","flip-card-back row")
			
			
			imgtag.setAttribute("style","height:94px;width:94px;border-radius:10px")
			imgtag.setAttribute("src",array1[i].cls)
			
			cnt.setAttribute("class","col-12")
			cnt.innerHTML=array1[i].text,"<br>"
			cnt1.innerHTML=array1[i].call,"<br>"
			cnt1.setAttribute("style","display:block")
			cnt1.setAttribute("class","col-12")
			websiteLink.innerHTML="<br> link"
			websiteLink.setAttribute("class","bi bi-link")
			websiteLink.setAttribute("href",array1[i].contact)
			websiteLink.setAttribute("style","color:white;display:block;")
			
			contact1.appendChild(flipCard)
			flipCard.appendChild(flipCardInner)
			flipCardInner.appendChild(flipCardFront)
			flipCardFront.appendChild(imgtag)
			flipCardInner.appendChild(flipCardBack)
			flipCardBack.appendChild(cnt)
			flipCardBack.appendChild(cnt1)
			flipCardBack.appendChild(websiteLink)
		}
	}
})