import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import Tamagotchi from './js/tamagotchi.js';

let tamagotchi;
$(document).ready(function() {
  tamagotchi = new Tamagotchi("Bob");
  tamagotchi.needsTick();
  setInterval(function(){
    $("#foodDisplay").text(parseInt(tamagotchi.hunger));
    $("#boredomDisplay").text(tamagotchi.boredom);
    $("#tiredDisplay").text(tamagotchi.tiredness);
  }, 1000);

  $("#sleep").click(function() {
    tamagotchi.sleep();
    $("#tiredDisplay").text(tamagotchi.tiredness);
    $("body").toggleClass("bodyNight");
    $("#baron").fadeToggle();
    $("#sleep").hide();
    $("#awaken").show();
  });

  $("#awaken").click(function() {
    tamagotchi.awaken();
    $("#tiredDisplay").text(tamagotchi.tiredness);
    $("body").toggleClass("bodyNight");
    $("#baron").fadeToggle();
    $("#awaken").hide();
    $("#sleep").show();
  });

  $("#feed").click(function() {
    tamagotchi.feed();
    $("#foodDisplay").text(parseInt(tamagotchi.hunger));
  })

  $("#play").click(function() {
    tamagotchi.entertain();
    $("#boredomDisplay").text(tamagotchi.boredom);
  })
});
