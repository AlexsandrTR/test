document.addEventListener('DOMContentLoaded', function(){
	var a = document.getElementById('odin');
	a.style.height = '100px';
	a.style.background = 'red';
	console.log(a);
	var b = document.getElementById('h3');
	var c = document.getElementById('p');
	b.style.fontSize = '34px';
	c.style.color = 'blue';

	var newDiv = document.createElement('div');
	newDiv.style.border = '1px solid red';
	var but = document.createElement('button');
	but.style.border = '1px solid blue';
	but.innerHTML = 'press';
	newDiv.appendChild(but);
	document.body.appendChild(newDiv);


	var alemArray = document.getElementsByTagName('header')[0];
	//var alemArray_1 = alemArray[0]; 
	alemArray.classList.add('elemArr');
	alemArray.style.padding = '15px';
	var abz = document.createElement('p');
	abz.innerHTML= 'hello';
	abz.classList.add('newP');
	alemArray.appendChild(abz);



	console.log(alemArray.classList.contains('elemArr'));//проверка на наличие классов
	alemArray.classList.toggle('elemArrnot');
	alemArray.classList.remove('elemArrnot');



	var elementsArray = document.getElementsByClassName('main-menu-btn');
	console.log(elementsArray);
	for (var i = 0; i < elementsArray.length; i++) {
		elementsArray[i].style.margin = '5px';
		elementsArray[i].classList.add('btn');

	}
	elementsArray[0].style.background= 'yellow';

	for (var i = 0; i < document.body.childNodes.length; i++) {
		//console.log(document.body.childNodes[i]);
	}

	console.log(document.documentElement);

	console.log(document.documentElement.parentNode);

	for (var i = 0; i < document.body.children.length; i++) {
		console.log(document.body.children[i]);
	}


	console.log('1' , alemArray.firstElementChild);
	console.log('3' , alemArray.lastElementChild);

	var newUl = document.getElementsByTagName('ul');
	console.log(newUl[0]);
	console.log(newUl[0].children);
	var newLi = newUl[0].children[0];
	var newSpan = newLi.children[0];
	newSpan.innerHTML = 'newgg';
	newSpan.innerText = 'fhghfg'
	console.log(newSpan);
	console.log(newLi);


	for (var i = 0; i < newUl.length; i++) {
		console.log(newUl[i].innerHTML);
	}
	for (var i = 0; i < newUl.length; i++) {
		console.log(newUl[i].innerText);
	}

	var li5 = newUl[0].children[4];
		li5.innerText = '59';

	var li6 = newUl[0].children[5];
		li6.innerHTML = '<span> gefhfh</span>';


	var newDiv1 = document.createElement('div');
	newDiv1.innerText = 'asdfghjkl';
	newDiv1.style.border = '3px solid red';	
	document.body.appendChild(newDiv1);
	
	//document.body.removeChild(newDiv1);

	var press = document.createElement('button');
	press.innerText = 'asdfghjkl';
	press.style.border = '3px solid green';	
	document.body.appendChild(press);

	document.body.replaceChild(press, newDiv1);//заменяет перрвый на второй элемент

	var newLII = document.createElement('li');
	newLII.innerText = 'before';
	newUl[0].insertBefore(newLII, newUl[0].children[3]);

	document.body.removeChild(newUl[0]);

	var container = document.getElementsByClassName('divMargin');
	var container1 = container[0];
	var arrButton = [];
	var buttonText = ['button1', 'button2', 'button3', 'button4', 'button5'];
	for (var i = 0; i < buttonText.length; i++) {
		var btnn =document.createElement('button');
		btnn.innerText = buttonText[i];
		arrButton[i] = btnn;
		container1.appendChild(arrButton[i]);
	}



	var sam_div = document.createElement('div');
	sam_div.style.color = 'blue';
	sam_div.style.border = '3px solid black';
	sam_div.style.width = '100px';

	sam_div.innerText = 'Сам делаю';
	document.body.appendChild(sam_div);

	



});

/*var moz = prompt('введите браузер');
var proverka = false;
var arrBr =['Chrome', 'FireFox', 'Exploer', 'Opera', 'Safari'];
for (var i = 0; i < arrBr.length; i++) {
	if (moz.toLowerCase() === arrBr[i].toLowerCase()) {
	proverka = true;
}

}
if (proverka) {
	alert('ok');
}
else{
	alert('ne ok');
}*/


"use strict";

a = null + undefined;
alert(0 || 1 && 2 || 3);
