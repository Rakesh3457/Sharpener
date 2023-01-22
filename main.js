var headerTitle = document.getElementById('header-title');
headerTitle.innerText = "Lets Rock";

headerTitle.style.borderBottom = 'solid 5px yellow';


var items=document.getElementsByClassName('list-group-item');
items[2].style.background ='green';
for (let i = 0; i < items.length; i++) {
    items[i].style.fontWeight='900';
  }
