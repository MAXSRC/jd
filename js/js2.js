/**
 * Created by Administrator on 2016/3/16.
 */
window.onscroll=scroll;
function scroll(){
    var floor=document.getElementById('floor');
    var lis1=floor.getElementsByTagName('li');
    var ul2=document.getElementById('trueHou');
    //var lis2=ul2.getElementById('house1');
    var backTop=document.getElementById('backTop');
    var divs=floor.getElementsByTagName('div');
    var bac=document.getElementById('bac');
    var floor2=document.getElementById('floor2');
    var time1;
    var topS = document.documentElement.scrollTop || document.body.scrollTop;
    var clientH=document.documentElement.clientHeight||document.body.clientHeight;
    var scrollTop = ul2.offsetTop;
    var arr=[];
    function getClass(cla){
        var elem=ul2.all?ul2.all:ul2.getElementsByTagName('*');
        for(var i=0;i<elem.length;i++){
            if(elem[i].className==cla){
                arr.push(elem[i]);
            }
        }
        return arr;
    }
    getClass('house1');
    if (topS > scrollTop - 200) {
        floor.style.display = 'block';
    }
    else {
        floor.style.display = 'none';
    }
    if(topS>clientH){
        floor2.style.display = 'block';
    }
    else {
        floor2.style.display = 'none';
    }
    function color() {
        for (var i = 0; i < lis1.length; i++) {
            divs[i].style.visibility='hidden';
        }

        for(var j=lis1.length-1;j>=0;j--){
            var floorTop=arr[j].offsetTop-200;
            if(topS>=floorTop){
                divs[j].style.visibility='visible';
                break;
            }
        }
    }
    color();
    backTop.onmouseover=bc;
    function bc(){
        bac.style.visibility='visible';
    }
    backTop.onmouseout=bd;
    function bd(){
        bac.style.visibility='hidden';
    }
    function moveTo(a, b) {
        var startY = a;
        var endY = b;
        var step = 0;
        var maxStep = 40;
        var everyStep = (endY - startY) / maxStep;
        function move1() {
            step++;
            topS += everyStep;
            document.documentElement.scrollTop = topS;
            document.body.scrollTop = topS;
            if (step == maxStep) {
                topS = endY;
                clearInterval(time1)
            }
        }
        time1 = setInterval(move1, 10);
    }
    for(var i=0;i<lis1.length;i++){
        lis1[i].onclick=function(){
            for(var j=0;j<lis1.length;j++){
                if(this==lis1[j]){
                    moveTo(topS,arr[j].offsetTop)
                }
            }
        };
        lis1[i].onmouseover=re;
        function re(){
            for(var j=0;j<lis1.length;j++){
                if(this==lis1[j]){
                    divs[j].style.visibility='visible';
                }
                else{
                    divs[j].style.visibility='hidden';
                }
            }
        }
        lis1[i].onmouseout=color;
    }
    backTop.onclick =function (){
        time = setInterval(function () {
            topS -= 100;
            document.documentElement.scrollTop = topS;
            document.body.scrollTop = topS;
            if (topS <= 0) {
                clearInterval(time);
            }
        }, 10)
    }
}
var endShow=document.getElementById('endShow');
var endPic=document.getElementById('endPic');
function scroll1() {
    endShow.scrollLeft+=1200;
    if (endShow.scrollLeft>1200) {
        endShow.scrollLeft=0;
    }
}
function clock2(){
    time2=setInterval(scroll1,2000);
}
clock2();