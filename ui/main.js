var button = document.getElementBy('counter');
var counter=0;
button.onclick=function()
{
    counter=counter+1;
    var span=document.getElementBy('count');
    span.innerHTML=counter.toString();
};
