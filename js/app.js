
const btnBurger = document.querySelector(".header__burger");
const burger = document.querySelector(".burger__open");

setTimeout(()=>{
	document.querySelector('h1').classList.add('active');
	document.querySelector('#initial__p').classList.add('active');
	document.querySelector('#services').classList.add('active');
},300);

function toggleBurgerBody (){
	document.querySelector("body").classList.toggle("scrollNone");
	burger.classList.toggle("burger__open-active");
	btnBurger.classList.toggle("close");
}

btnBurger.addEventListener("click", ()=>{
	toggleBurgerBody();
});

let header = document.querySelector("header");

window.addEventListener("scroll", ()=>{
	if(scrollY>10){
		header.classList.add("header__scroll");
	}else{
		header.classList.remove("header__scroll");
	}
});


const BURGER_LINKS = burger.querySelectorAll('li');

const DESKTOP_LINKS = document.querySelectorAll('.header__list-item');

BURGER_LINKS.forEach((link)=>{

		link.addEventListener('click', function(){
			toggleBurgerBody();

		});
});


DESKTOP_LINKS.forEach((descLiks)=>{

	descLiks.addEventListener('click', function(){

		DESKTOP_LINKS.forEach((Liks)=>{

			Liks.classList.remove('active');		

		})

		this.classList.add('active');
	});
});





const FOOTER_FORM_BUTTON = document.querySelector('#footer__send-messange');
const FOOTER_FORM_GMAIL = document.querySelector('#footer__gmail');
const FOOTER_FORM_QUESTION = document.querySelector('.footer__question');

let regGmail = /^[a-zA-Z0-9_]+@[a-z0-9-]+\.[a-z]{2,6}$/;


FOOTER_FORM_BUTTON.addEventListener('click', ()=>{

		if(regGmail.test(FOOTER_FORM_GMAIL.value)){
			FOOTER_FORM_GMAIL.style.borderBottom = "1px solid #F66700";
			FOOTER_FORM_GMAIL.style.borderLeft = "1px solid transparent";
			FOOTER_FORM_GMAIL.style.borderRight = "1px solid transparent";
			FOOTER_FORM_GMAIL.style.borderTop = "1px solid transparent";
		}else{
			FOOTER_FORM_GMAIL.style.border = "1px solid red";
		
		}

	
		if(FOOTER_FORM_QUESTION.value.length < 3){
			FOOTER_FORM_QUESTION.style.border =  "1px solid red";
		}else{
			FOOTER_FORM_QUESTION.style.borderBottom = "1px solid #F66700";
			FOOTER_FORM_QUESTION.style.borderLeft = "1px solid transparent";
			FOOTER_FORM_QUESTION.style.borderRight = "1px solid transparent";
			FOOTER_FORM_QUESTION.style.borderTop = "1px solid transparent";
		}
	

		if(regGmail.test(FOOTER_FORM_GMAIL.value) && FOOTER_FORM_QUESTION.value.length >= 3){

			FOOTER_FORM_BUTTON.setAttribute(disabled, true);


			async function sendDate(){
				let res = await fetch("https://chornyi.com.ua/send/", {
				  method: "POST",
				  body: JSON.stringify({
					 question: FOOTER_FORM_QUESTION.value,
					 email: FOOTER_FORM_GMAIL.value,
					
				  }),
				});
			 
				if(res.ok){	
					
					document.querySelector('#footer__send').classList.add('active');
	
					FOOTER_FORM_QUESTION.value = "",
	
					FOOTER_FORM_GMAIL.value = "",
	
				   FOOTER_FORM_BUTTON.removeAttribute('disabled');

				}else{
				  alert('error send messange');
				}
				
			 }
			 
			 sendDate();
	
		}

});


function toggleDropDown (){
	DROP_DOWN_BUTTON.querySelector('img').classList.toggle('rotate');
	DROP_DOWN.classList.toggle('active');
}

const DROP_DOWN_BUTTON = document.querySelector('.form__type-site');
const DROP_DOWN = document.querySelector('.type-site__body')

DROP_DOWN_BUTTON.addEventListener('click', function(){
	toggleDropDown();
});



const options = document.querySelectorAll('.type-site__body li');

options.forEach((currentOption)=>{

	currentOption.addEventListener('click', function(){

			let leng = currentOption.innerText.length > 8 ? '...' : '';
			DROP_DOWN_BUTTON.querySelector('p').innerText = currentOption.innerText.slice(0,8)+leng;
			DROP_DOWN_BUTTON.querySelector('p').style.color = '#fff';
	});
});



const FORM_EMAIL = document.querySelector('#email');
const FORM_NAME = document.querySelector('#name');
const FORM_DESPRIPTION = document.querySelector('#description');
const FORM_TYPE = document.querySelector('#current__type');
const FORM_BUTTON = document.querySelector('#form__send-flag');

FORM_BUTTON.addEventListener('click', ()=>{

	if(regGmail.test(FORM_EMAIL.value)){
		FORM_EMAIL.style.borderBottom = "1px solid #F66700";
		FORM_EMAIL.style.borderLeft = "1px solid transparent";
		FORM_EMAIL.style.borderRight = "1px solid transparent";
		FORM_EMAIL.style.borderTop = "1px solid transparent";
	}else{
		FORM_EMAIL.style.border = "1px solid red";
		FOOTER_FORM_QUESTION.border = "1px solid red";
	}


	if(FORM_DESPRIPTION.value.length < 3){
		FORM_DESPRIPTION.style.border =  "1px solid red";
	}else{
		FORM_DESPRIPTION.style.borderBottom = "1px solid #F66700";
		FORM_DESPRIPTION.style.borderLeft = "1px solid transparent";
		FORM_DESPRIPTION.style.borderRight = "1px solid transparent";
		FORM_DESPRIPTION.style.borderTop = "1px solid transparent";
	}

	if(FORM_NAME.value.length < 3){
		FORM_NAME.style.border =  "1px solid red";
	}else{
		FORM_NAME.style.borderBottom = "1px solid #F66700";
		FORM_NAME.style.borderLeft = "1px solid transparent";
		FORM_NAME.style.borderRight = "1px solid transparent";
		FORM_NAME.style.borderTop = "1px solid transparent";
	}


	if(regGmail.test(FORM_EMAIL.value) && FORM_DESPRIPTION.value.length >= 3 && FORM_NAME.value.length >= 3){

		FORM_BUTTON.setAttribute('disabled', true);


		async function sendForm(){
			let res = await fetch("https://chornyi.com.ua/send/", {
			  method: "POST",
			  body: JSON.stringify({

				 despription: FORM_DESPRIPTION.value,
				 email: FOOTER_FORM_GMAIL.value,
				 name:  FORM_NAME.value,
				 type: FORM_TYPE.innerText	

			  }),
			});
		 
			if(res.ok){	
				
				document.querySelector('#form__send-success').classList.add('active');

				FORM_DESPRIPTION.value = '';
				FOOTER_FORM_GMAIL.value = '';
				FORM_NAME.value = '';
				FORM_TYPE.innerText = '';

				FORM_BUTTON.removeAttribute('disabled');

			}else{
			  alert('error send messange');
			}
			
		 }
		 
		 sendForm();
	}

})








$(document).ready(()=>{

	 	$('.subfooter__net-item').on('click', f_open);

		function f_open(){
		
				$(this).children().children('.arrow').toggleClass('rotate');
					$(this).children('p').slideToggle();
			
		}
});