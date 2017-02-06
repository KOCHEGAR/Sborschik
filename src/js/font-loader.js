function loadFont(a,b,c,d){function e(){if(!window.FontFace)return!1;var a=new FontFace("t",'url("data:application/font-woff2,") format("woff2")',{}),b=a.load();try{b.then(null,function(){})}catch(c){}return"loading"===a.status}var f=navigator.userAgent,g=!window.addEventListener||f.match(/(Android (2|3|4.0|4.1|4.2|4.3))|(Opera (Mini|Mobi))/)&&!f.match(/Chrome/);if(!g){var h={};try{h=localStorage||{}}catch(i){}var j="x-font-"+a,k=j+"url",l=j+"css",m=h[k],n=h[l],o=document.createElement("style");if(o.rel="stylesheet",document.head.appendChild(o),!n||m!==b&&m!==c){var p=c&&e()?c:b,q=new XMLHttpRequest;q.open("GET",p),q.onload=function(){q.status>=200&&q.status<400&&(h[k]=p,h[l]=q.responseText,d||(o.textContent=q.responseText))},q.send()}else o.textContent=n}}

// loadFont('bundle','fonts/fonts-bundle.css');
loadFont('firasans-book','fonts/firasans-book.woff.css'),

loadFont('firasans-light','fonts/firasans-light.woff.css'),
loadFont('firasans-lightitalic','fonts/firasans-lightitalic.woff.css'),
loadFont('firasans-medium','fonts/firasans-medium.woff.css'),
loadFont('firasans-regular','fonts/firasans-regular.woff.css'),
loadFont('proximanovacond-semibold','fonts/proximanovacond-semibold.woff.css');

/*не забывать ставить запятые!!!*/

/*loadFont('firasans-book2','fonts/firasans-book.woff2.css'),
loadFont('firasans-light2','fonts/firasans-light.woff2.css'),
loadFont('firasans-lightitalic2','fonts/firasans-lightitalic.woff2.css'),
loadFont('firasans-medium2','fonts/firasans-medium.woff2.css'),
loadFont('firasans-regular2','fonts/firasans-regular.woff2.css'),
loadFont('proximanovacond-semibold2','fonts/proximanovacond-semibold.woff2.css');*/