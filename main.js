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

var li=document.querySelector('.list-group-item:nth-child(2)');
li.style.background= 'green';


var thirdli=document.querySelector('.list-group-item:nth-child(3)');
thirdli.style.display='none';
