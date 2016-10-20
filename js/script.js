
var bonus_index = 0;

var n = 10;
var selected_s = 4;
var selected_v = 4;
var selected_m = 4;
var en_bonus = false;

function init() {

  for (var i=0; i<n; i++) {
    var s = Math.floor(Math.random()*sujetos.length);
    var sujeto = sujetos[s];
    $("#sujeto_list").append("<li>"+sujeto+"</li>");  

    var v = Math.floor(Math.random()*verbos.length);
    var verbo = verbos[v];
    $("#verbo_list").append("<li>"+verbo+"</li>");  

    var m = Math.floor(Math.random()*modos.length);
    var modo = modos[m];
    $("#modo_list").append("<li>"+modo+"</li>");  
  }

  $("#sujeto_list li:nth-child("+selected_s+")").toggleClass("selected");
  $("#verbo_list li:nth-child("+selected_v+")").toggleClass("selected");
  $("#modo_list li:nth-child("+selected_m+")").toggleClass("selected");

  $(window).keypress(function (e) {
    var key = e.which;
    if (key == 98) {
      en_bonus = !en_bonus;
    }
  })

  $(document).ready(function(){
    spinAll();
  })
}


function spinAll() {

  spin("#sujeto_list");
  spin("#verbo_list");
  spin("#modo_list");

  if (en_bonus) {
      $("#bonus_message").html(bonuses[bonus_index]);
      $("#bonus").show();
      bonus_index ++;
      if (bonus_index == bonuses.length) bonus_index = 0;
  } else {
    $("#bonus").hide();
  }

}


function spin(list) {

  for (var i=0; i<n; i++) {
    var palabra;    
    if (list == "#sujeto_list") {
      var s = Math.floor(Math.random()*sujetos.length);
      palabra = sujetos[s];
    } else if (list == "#verbo_list") {
      var v = Math.floor(Math.random()*verbos.length);
      palabra = verbos[v];
    } else if (list == "#modo_list") {
      var m = Math.floor(Math.random()*modos.length);
      palabra = modos[m];
    }
    
    $(list).append("<li>"+palabra+"</li>");  
  }

  var time = 2000;
  time += Math.round(Math.random()*1000);
  $(list).stop(true,true);

  var marginTop = parseInt($(list).css("margin-top"), 10);
    
  marginTop -= (n * 115)
    
  $(list).animate(
    {"margin-top":marginTop+"px"},
    {'duration' : time, 'easing' : "easeOutQuint"});  

  if (list == "#sujeto_list") {
    $(list+" li:nth-child("+selected_s+")").toggleClass("selected");  
    selected_s += n;
    $(list+" li:nth-child("+selected_s+")").toggleClass("selected");  
  } else if (list == "#verbo_list") {
    $(list+" li:nth-child("+selected_v+")").toggleClass("selected");  
    selected_v += n;
    $(list+" li:nth-child("+selected_v+")").toggleClass("selected");  
  } else if (list == "#modo_list") {    
    $(list+" li:nth-child("+selected_m+")").toggleClass("selected");      
    selected_m += n;
    $(list+" li:nth-child("+selected_m+")").toggleClass("selected");      
  }


}