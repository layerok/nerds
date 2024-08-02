var c = 0;
var slider = document.getElementsByClassName('slider');
var control = document.getElementsByClassName('controlers');
slider.slick = function (active) {
  console.log(this[0].children[0].children.length)

  var amountChildren = this[0].children[0].children.length
  for (i = 1; i < amountChildren; i++) {
    //slides
    this[0].children[0].children[i - 1].className += ' defaultSlide';
    //controlers создаем кнопки
    var input = document.createElement('input')
    this[0].children[0].children[amountChildren - 1].appendChild(input);
    input.setAttribute('type', 'radio');
    input.setAttribute('name', 'btn');
    input.setAttribute('id', 'btn' + i);
    if (i == active) {
      input.setAttribute('checked', 'true');
    }
    //делаем активным слай в соответствии с активной кнопкой
    for (b = 0; b < control[0].children.length; b++) {
      if (control[0].children[b].checked == false)
        slider[0].children[0].children[b].style.display = "none"
    }
  }
}

function click() {
  //делаем неактивные блоки невидимыми
  for (b = 0; b < control[0].children.length; b++) {
    if (control[0].children[b].checked == false)
      slider[0].children[0].children[b].style.display = "none"
  }
  //делаем активный блок видимым
  for (a = 0; a < control[0].children.length; a++) {
    if (control[0].children[a].checked == true) {
      slider[0].children[0].children[a].style.display = "block"
      c = a;
    }
  }
}

control[0].onclick = click;
slider.slick(1);

function next() {
  //смена слайдов
  control[0].children[c].checked = false;
  c++
  if (c == 3) {
    c = 0
  }
  control[0].children[c].checked = true;
  for (b = 0; b < control[0].children.length; b++) {
    if (control[0].children[b].checked == false)
      slider[0].children[0].children[b].style.display = "none"
  }
  for (a = 0; a < control[0].children.length; a++) {
    if (control[0].children[a].checked == true) {
      slider[0].children[0].children[a].style.display = "block"
    }

  }
}

var prev = setInterval(next, 5000);
