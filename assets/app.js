console.log('bandymas');
$(document).ready(function(){
  $("#btn1").click(function(){
    alert("Text:" + $("#test").text());
  });
  $("#btn2").click(function(){
    alert("HTML:" + $('#test').html());
  });
  $('#value1').click(function(){
    alert("value:" + $("#test").val());
  });
  $('#adresas').click(function(){
    alert($("#w3s").attr('href'));
  });
});

$(document).ready(function(){
  $("#btn4").click(function(){
    $("#test3").text("Ka tu, sepeti?");
  });
  $("#btn6").click(function(){
    $("#test5").val("e, nepjauk grybo");
  });
});

$(document).ready(function(){
  $("#appenddd").click(function(){
    $("#apppendT").append("bam bam bam");
  });
});

$(document).ready(function(){
  $("#liks").click(function(){
    $("#dings").remove();
  });
});

$(document).ready(function(){
  $("button").click(function(){
    $("h1, h2, p").addClass("blue");
    $("div").toggleClass("important");
  });
});

$(document).ready(function(){
  $("#btn7").click(function(){
    $("#div7").width(500).height(500);
  });
});
