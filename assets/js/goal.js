//check off specific goals by clicking
$("ul").on("click", "li", function() {
  $(this).toggleClass("completed");
});

//click on X to delete goals
$("ul").on("click", "span", function(event){ 
    //fades out and removes the parent element  after 500 milliseconds if the span is clicked 
    $(this).parent().fadeOut(500, function (){
        $(this).remove();
    })
    //stops an event bubble from happening
    event.stopPropagation();
});

$("input[type='text']").keypress(function(event) {
  if(event.which === 13) {
    //gettting a new list of goals
    const goals = ($(this).val());
    //clearing out the input after a goal was added 
    $(this).val("");
    //create a new li and span and add to ul
    $("ul").append("<li><span>X</span> "  + goals + "</li>")
  }
});

