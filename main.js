// var headerTitle = document.getElementById('header-title');
// headerTitle.innerText = "Lets Rock";

// headerTitle.style.borderBottom = 'solid 5px yellow';


// var items=document.getElementsByClassName('list-group-item');
// items[2].style.background ='green';
// for (let i = 0; i < items.length; i++) {
//     items[i].style.fontWeight='900';
//   }



//   // tag Selector

//   var li=document.getElementsByTagName('li');
//   for (let i = 0; i < li.length; i++) {
//     li[i].style.background='grey';
//     li[i].style.fontWeight='900';
//   } 

// Query Selector

// 


// var thirdli=document.querySelector('.list-group-item:nth-child(3)');
// thirdli.style.display='none';



//TRanversing the DOM
//var listItems = document.querySelector('#items')



//Parent Element

// listItems.parentElement.style.backgroundColor='#a4f2f9';

//ChildElement

// listItems.children[2].style.backgroundColor='green';


//firstElementChild
// listItems.firstElementChild.style.fontWeight='900'


// lastElementChild
// listItems.lastElementChild.style.fontWeight='900'

// Sibling Element

// listItems.previousElementSibling.style.backgroundColor='yellow';

//NEW CHILD

var newDiv= document.createElement('div');
newDiv.classname='class1';

// create text node

var textnode = document.createTextNode('hey its me');

newDiv.appendChild(textnode);

// show new child

var container = document.querySelector('header .container');
var h1= document.querySelector('header h1');

container.insertBefore(newDiv,h1);




