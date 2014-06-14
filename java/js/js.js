/**
 * Created by Alyona on 14.06.14.
 */

// пример использования
for(i in navigator) {
    document.write(i + " : "+navigator[i] + '<br>');
}

var browser = navigator.vendor;

if(browser=='') {
    alert('Mozilla');
}else {
    alert(browser);
}
  function getNameBrowser(){
      var browser = navigator.vendor;
      if (browser.indexOf("Opera") != -1) { alert('Вы используете Opera')} else
      if (browser.indexOf("Google") != -1) { alert('Вы используете Google')} else
      if (browser.indexOf("Apple") != -1) { alert('Вы используете Safari')} else
      if (browser.indexOf("Yandex") != -1) { alert('Вы используете Yandex')} else
      if (browser.indexOf("") != -1) { alert('Вы используете Mozilla')} else
      {alert('Вы используете другой браузер')}
  }
getNameBrowser();