var headerTitle = document.getElementById('header-title');
headerTitle.innerText = "Lets Rock";

headerTitle.style.borderBottom = 'solid 5px yellow';


var items=document.getElementsByClassName('list-group-item');
items[2].style.background ='green';
for (let i = 0; i < items.length; i++) {
    items[i].style.fontWeight='900';
  }



  // query Selector

  var li=document.getElementsByTagName('li');
  for (let i = 0; i < li.length; i++) {
    li[i].style.background='grey';
    li[i].style.fontWeight='900';
  }