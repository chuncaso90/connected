window.onload = function start(){
    var leftHeight = document.querySelector(".left").style.height;
    var rightHeight = document.querySelector(".right").style.height;    

    if(rightHeight>leftHeight){
        document.querySelector(".left").style.height = rightHeight;
    }
}