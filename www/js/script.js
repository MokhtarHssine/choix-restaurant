
$(document).ready(function(){
    //Récupère la police et l'affiche 
    let police = $("body").css("font-family");
    $("#police").text(police);

    //Lors du clic sur le bouton #b1...
    $("#b1").click(function(){
        //Toggle la classe et accroche des styles à chaque classe
        $("body").toggleClass("light dark");
        $(".light").css({"background-color": "#fafafa", "color": "#333"});
        $(".dark").css({"background-color": "#444", "color": "#fff"});
    });
});

$(document).ready(function(){
  $("#myInput").on("keyup", function() {
    var value = $(this).val().toLowerCase();
    $("#myTable tr").filter(function() {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
   });
  });
});
$(document).ready(function(){
  $("input").focus(function(){
    $(this).css("background-color", "yellow");
  });
  $("input").blur(function(){
    $(this).css("background-color", "green");
  });
});
$(document).ready(function(){
  $("p").on({
    mouseenter: function(){
      $(this).css("background-color", "lightgray");
    },  
    mouseleave: function(){
      $(this).css("background-color", "lightblue");
    }, 
    click: function(){
      $(this).css("background-color", "yellow");
    }  
  });
});
$(document).ready(function(){
  $("#p2").mousedown(function(){
    prompt("evaluez-nous");
     });
}); 
$(document).ready(function(){
  $("#service").mousedown(function(){
    alert("encore en service");
  });
});
$(document).ready(function(){
  $("#encours").mousedown(function(){
    alert("encore en service");
  });
});
$(document).ready(function(){
  $("#p1").mousedown(function(){
    prompt("evaluez-nous");
     });
});

$(document).ready(function(){
  $("#ser").mousedown(function(){
    alert("encore en service");
  });
});

$(document).ready(function(){
  $("#encours").mousedown(function(){
    alert("encore en service");
  });
});

$(document).ready(function(){
  $("#lieua").mousedown(function(){
    alert("aucun lieu aimé pour le momemnt");
  });
});
$(document).ready(function(){
  $("#lieus").mousedown(function(){
    alert("aucun lieus sauvgardé pour le momemnt");
  });
});
$(document).ready(function(){
  $("#plats").mousedown(function(){
    alert("aucun plat sauvgardé pour le momemnt");
  });
});
$(document).ready(function(){
  $("#plo").mousedown(function(){
    alert("aucun plat aimé pour le momment");
  });
});
clicked = true;
$(document).ready(function() {
     $("button").click(function() {
       if (clicked) {
         $(this).css('background-color', 'green');
         clicked = false;
       } else {
         $(this).css('background-color', 'green');
         clicked = true;
       }
     });
});

 
