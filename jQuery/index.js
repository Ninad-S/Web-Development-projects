jQuery("h1").on("mouseover",function(){
    $("h1").css("color","purple");
});
$("h1").prepend("<button>New</button>")
$("button").on("click", function(){
    $("h1").slideUp();
});