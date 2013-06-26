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


    if (window.matchMedia("(width: 600px)").matches) {
      /* La largeur minimum de l'affichage est 600 px inclus */
      $("h1").html("Resize <===");
    } else {
      /* L'affichage est inférieur à 600px de large */
      $("h1").html("Resize");
    }
}

printWindowWidthInfo();

$(window).resize(function() {
    printWindowWidthInfo();
});

$('.toggle').click(function(){
    $('.content').toggle();
    printWindowWidthInfo();
});