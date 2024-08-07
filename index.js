
// var numberofdrumbuttons = document.querySelectorAll(".drum").length;

// for(let i=0; i<numberofdrumbuttons;i++){
//     document.querySelectorAll(".drum")[i].addEventListener("click",function(){
        
//         var buttonelement = this.innerHTML;

//         switch(buttonelement){
//             case 'w':
//                 var audioelement = new Audio("sounds/crash.mp3");
//                 audioelement.play();
//                 break;
//             case 'a':
//                 var audioelement = new Audio("sounds/kick-bass.mp3");
//                 audioelement.play();
//                 break;
//             case 's':
//                 var audioelement = new Audio("sounds/snare.mp3");
//                 audioelement.play();
//                 break;
//             case 'd':
//                 var audioelement = new Audio("sounds/tom-1.mp3");
//                 audioelement.play();
//                 break;
//             case 'j':
//                 var audioelement = new Audio("sounds/tom-2.mp3");
//                 audioelement.play();
//                 break;
//             case 'k':
//                 var audioelement = new Audio("sounds/tom-3.mp3");
//                 audioelement.play();
//                 break;
//             case 'l':
//                 var audioelement = new Audio("sounds/tom-4.mp3");
//                 audioelement.play();
//                 break;

//             default:

//         }
//     })

// }


var numberofdrumbuttons = document.querySelectorAll(".drum").length;

document.addEventListener('keydown',function(event){
    console.log(event)
    if(event.key==='w'){
        var audioelement = new Audio("sounds/crash.mp3");
        audioelement.play();

    }
    else if(event.key==='a'){
        var audioelement = new Audio("sounds/kick-bass.mp3");
        audioelement.play();

    }
    else if(event.key==='s'){
        var audioelement = new Audio("sounds/snare.mp3");
        audioelement.play();

    }
    else if(event.key==='d'){
        var audioelement = new Audio("sounds/tom-1.mp3");
        audioelement.play();

    }
    else if(event.key==='j'){
        var audioelement = new Audio("sounds/tom-2.mp3");
        audioelement.play();

    }
    else if(event.key==='k'){
        var audioelement = new Audio("sounds/tom-3.mp3");
        audioelement.play();

    }
    else if(event.key==='l'){
        var audioelement = new Audio("sounds/tom-4.mp3");
        audioelement.play();

    }
})
