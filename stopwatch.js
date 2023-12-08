 let hr=0
 let minet=0;
 let second=0;

 let count=0;

 let timer=false

 function start(){
timer=true;
StopWatch()
}

function stop(){
timer=false
}

function reset(){
timer=false


 document.getElementById("hr").innerHTML="00"
 document.getElementById("minet").innerHTML="00"
 document.getElementById("second").innerHTML="00"
document.getElementById("count").innerHTML="00"
}

function StopWatch(){
if(timer==true){
    if(count==100){
        second=second+1;
        count=0
    }
    if(second==60){
        minet=minet+1;
        second=0
    }
    if(minet==60){
        hr=hr+1;
        minet=0
        second=0
    }

    
        count=count+1
        document.getElementById("hr").innerHTML=hr
        document.getElementById("minet").innerHTML=minet
        document.getElementById("second").innerHTML=second
       document.getElementById("count").innerHTML=count
        
        setTimeout(()=>{
            StopWatch()
        } ,1)

    
}
}