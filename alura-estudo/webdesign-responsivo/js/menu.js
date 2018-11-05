$(function(){
    ativaMenu();
    fechaMenu();
    fechaMenuHTML();
});

function ativaMenu(){
    $(".abre-menu").click(function(){
        $("html").addClass("menu-ativo");
    });
}

function fechaMenu(){
    $(".fecha-menu").click(function(event){
        $("html").removeClass("menu-ativo");
    });
}
function fechaMenuHTML(){
    $("html").click(function(event){
        if(event.target.nodeName == "HTML")
            $(this).removeClass("menu-ativo");
    });

}