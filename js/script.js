function printWindowWidthInfo(){
    var infoInnerWidth=" ";
    if(window.innerWidth==600){
        infoInnerWidth="<==== ON TARGET";
    }
    var infoWidth=" ";
    if($(window).width()==600){
        infoWidth="<==== ON TARGET";
    }
    $(".innerWidth span").html(window.innerWidth+infoInnerWidth);
    $(".width span").html($(window).width()+infoWidth);
}

printWindowWidthInfo();

$(window).resize(function() {
    printWindowWidthInfo();
});