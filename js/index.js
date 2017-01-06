/**
 * Created by Administrator on 2016/3/15.
 */
window.onload=init;
function init(){
    var picShow = document.getElementById('picShow');
    var last = document.getElementById('last');
    var next = document.getElementById('next');
    var picS=document.getElementById('picS');
    var imgS=picS.getElementsByTagName('img');
    var btnS=document.getElementById('but').getElementsByTagName('li');
    var mainM=document.getElementById('mainM');
    var daTu=document.getElementById('daTu');
    var time = null;
    var time2=null;
    var num=0;
    daTu.onmouseover=p;
    function p(){
        last.style.display='block';
        next.style.display='block';
    }
    daTu.onmouseout=po;
    function po(){
        last.style.display='none';
        next.style.display='none';
    }
    function moveTo(num) {
        clearInterval(time);
        clearInterval(time2);
        for(var i=0;i<imgS.length;i++){
            imgS[i].style.zIndex='0';
            btnS[i].style.background='#ccc';
        }
        imgS[num].style.zIndex='1';
        btnS[num].style.background='red';
        btnColor();
        var e=0;
        time=setInterval(function (){
            e+=0.05;
            if(e>=1){
                e=1;
                clearInterval(time);
                for (var i = 0; i < imgS.length; i++) {
                    imgS[i].style.opacity='0';
                }
            }
            imgS[num].style.opacity=e;
        },30);
        clock();
    }
    function auto(){
        num++;
        if(num>=imgS.length){
            num=0;
        }
        moveTo(num);
    }
    function clock(){
        time2=setInterval(auto,3000);
    }
    clock();
    last.onclick=function(){
        num--;
        if(num<0){
            num=imgS.length-1;
        }
        moveTo(num);
    };
    function op(obj){
        obj.onmouseover=op1;
        function op1(){
            obj.style.opacity=0.8;
        }
    }
    function op2(obj){
        obj.onmouseout=op1;
        function op1(){
            obj.style.opacity=0.3;
        }
    }
    op(last);
    op2(last);
    op(next);
    op2(next);
    next.onclick=function(){
        auto();
    };
    for(var i=0;i<btnS.length;i++){
        btnS[i].onmouseover=fa;
        function fa(){
            clearInterval(time2);
            for(var j=0;j<btnS.length;j++){
                if(this==btnS[j]){
                    num=j;
                    btnColor();
                    moveTo(num);
                }
            }
        }
    }

    var arr=['#4EDFFC','#FF69C3','#471683','#0753FF','#6F497A','#F8A9C9','#0C69C9','#FF4982','#FFE6B0'];
    function btnColor(){
        mainM.style.background=arr[num];
    }
    var bannerS=document.getElementById('banner');
    var lisB=bannerS.getElementsByTagName('li');
    var mainA=document.getElementById('mainA');
    for(var k=0;k<lisB.length;k++){
        lisB[k].onmouseover=c;
        function c(){
            mainA.style.display='block';
        }
        lisB[k].onmouseout=d;
        function d(){
            mainA.style.display='none';
        }
    }
    var mainShow0=document.getElementById('mainShow0');
    var mainShow1=document.getElementById('mainShow1');
    var mainShow2=document.getElementById('mainShow2');
    var mainShow3=document.getElementById('mainShow3');
    var mainShow4=document.getElementById('mainShow4');
    var mainShow5=document.getElementById('mainShow5');
    var mainShow6=document.getElementById('mainShow6');
    var mainShow7=document.getElementById('mainShow7');
    var tiAo0=document.getElementById('tiAo0');
    var tiAo1=document.getElementById('tiAo1');
    var tiAo2=document.getElementById('tiAo2');
    var tiAo3=document.getElementById('tiAo3');
    var tiAo4=document.getElementById('tiAo4');
    var tiAo5=document.getElementById('tiAo5');
    var tiAo6=document.getElementById('tiAo6');
    var tiAo7=document.getElementById('tiAo7');
    var tim;
    function t(mainShow,tiAoIn){
        function scroll2() {
            mainShow.scrollLeft+=330;
            if (mainShow.scrollLeft>660) {
                mainShow.scrollLeft=0;
            }
        }
        var o=0;
        function wid(){
            var num=Math.floor(mainShow.scrollLeft/330);
            for (var i=0;i<3;i++){
                tiAoIn[i].style.width='0'+'px';
            }
            o+=0.2;
            if(o>=30){
                clearInterval(tim);
                o=0;
                scroll2();
            }
            tiAoIn[num].style.width=o+'px';
        }
        tim=setInterval(wid,20);
    }
    var tiAoIn0=tiAo0.getElementsByTagName('span');
    t(mainShow0,tiAoIn0);
    var tiAoIn1=tiAo1.getElementsByTagName('span');
    t(mainShow1,tiAoIn1);
    var tiAoIn2=tiAo2.getElementsByTagName('span');
    t(mainShow2,tiAoIn2);
    var tiAoIn3=tiAo3.getElementsByTagName('span');
    t(mainShow3,tiAoIn3);
    var tiAoIn4=tiAo4.getElementsByTagName('span');
    t(mainShow4,tiAoIn4);
    var tiAoIn5=tiAo5.getElementsByTagName('span');
    t(mainShow5,tiAoIn5);
    var tiAoIn6=tiAo6.getElementsByTagName('span');
    t(mainShow6,tiAoIn6);
    var tiAoIn7=tiAo7.getElementsByTagName('span');
    t(mainShow7,tiAoIn7);


}