/**
 * Created by Alyona on 14.06.14.
 */
var objPage ={};
objPage.body = document.body;
objPage.img= document.getElementsByClassName('block1')[0];
objPage.p = document.getElementsByClassName('browserName')[0];
function getNameBrowser(){
    var browser = navigator.vendor;
    if (browser.indexOf("Opera") != -1) {
        objPage.img.className = 'opera';
        objPage.p.innerText = 'Opera';
    } else
    if (browser.indexOf("Google") != -1) {
        objPage.img.className = 'chrome';
        objPage.p.innerText = 'Google Chrome';
    } else
    if (browser.indexOf("Apple") != -1) {
        objPage.img.className = 'safari';
        objPage.p.innerText = 'Safari';
    } else
    if (browser.indexOf("Yandex") != -1) {
        objPage.img.className = 'yandex';
        objPage.p.innerText = 'Yandex';
    } else
    if (browser.indexOf("") != -1) {
        objPage.img.className = 'mozilla';
        objPage.p.innerText  ='Mozilla Firefox';
    } else{
        alert('Вы используете другой браузер');
    }
}
getNameBrowser();
//objPage.body.style.backgroundImage = '../../img/opera.png';