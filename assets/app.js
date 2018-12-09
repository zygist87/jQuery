console.log('bandymas');
$(".one").hide();
$(document).ready(function(){
  $('button').click(function(){
    $(".two").hide();
  });
});
$(document).ready(function(){
  $(".secondButton").click(function(){
    $(".three").hide();
  });
});
/*
$(document).ready(function(){
  $(".three").mouseenter(function(){
    alert('What the fuck');
  });
});
*/
$(document).ready(function(){
  $("h2").focus(function(){
    $("h2").css("color", "red");
  });
});


$(document).ready(function(){
    $("input").focus(function(){
        $(this).css("background-color", "#cccccc");
    });
    $("input").blur(function(){
        $(this).css("background-color", "red");
    });
});

$(document).ready(function(){
  $("p").on("click", function(){
    $("p").hide();
  });
});

$(document).ready(function(){
  $("#hide").click(function(){
    $("p").hide(1000);
  })
  $("#show").click(function(){
    $("p").show(100);
  });
});

$(document).ready(function(){
  $("button").click(function(){
    $("p").toggle(100);
  });
});

$(document).ready(function(){
  $(".mk").click(function(){
    $("#div1").fadeToggle("slow");
    $("#div2").fadeToggle("fast");
    $("#div3").fadeToggle(500);
  });
});

$(document).ready(function(){
  $(".iki").click(function(){
    $("#div4").fadeTo("slow", 0.05);
    $("#div5").fadeTo('fast', 0.1);
    $("#div6").fadeTo(1);
  });
});
$(document).ready(function(){
  $(".menu").click(function(){
    $(".listas").slideDown("slow");
  });
});
$(document).ready(function(){
  $(".listas").mouseenter(function(){
    $(".listas").css("color", "red");
  });
});
