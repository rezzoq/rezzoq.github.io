let counter = 1;
let img_name = ["../img/soap_circles_many_colors.png","../img/soap_many_colors.png",
    "../img/stars_cute_soap.png", "../img/yellow_violet_soap.png",
    "../img/yellow_brown_soap.png"];
let text_all = ["Красота и здоровье",
    "SweetSoap - это про настроение",
    "Создайте уют дома",
    "Расслабьтесь",
    "Уникальные подборки от SweetSoap",

    "Подберем для Вас лучшие сочетания",
    "Создаем ароматы настроений и эмоций, которые много значат для вас",
    "Будьте первым, кто погрузится в мир новинок",
    "Устройте себе СПА, не выходя из дома",
    "Необычные формы и яркие сочетания"];
let opacity = 1;

let first = setInterval(function main_img_change() {
    if (counter < 6) counter++;
    if (counter === 6) counter = 1;
    let img = document.getElementById("img_soap");
    let src_old = img.src;
    img.src = img_name[counter-1];

    let txt_title = document.getElementById("img_title");
    txt_title.innerText = text_all[counter-1];

    let txt_desc = document.getElementById("img_desc");
    txt_desc.innerText = text_all[counter-1+5];

    let fon_play_img = document.getElementById("img_soap_front_change");
    fon_play_img.src = src_old;
    fon_play_img.style.opacity = '1.0';
    change_fon();
}, 3000);
function hide_second_pic() {
    opacity = opacity - 0.1;
    let fon_play_img = document.getElementById("img_soap_front_change");
    fon_play_img.style.opacity = '' + opacity.toString();
}

function change_fon() {
    const intervalId = setInterval(hide_second_pic, 50);

    setTimeout(() => {
        clearInterval(intervalId);
        opacity = 1;
    }, 1000);
}

let map_view;
function on_init() {
    map_view = new MapView('mapid');
}
let map = document.getElementById('mapid');