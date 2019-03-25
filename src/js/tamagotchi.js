import $ from 'jquery';
export default class Tamagotchi {

  constructor(name) {
    this.name = name;
    this.hunger = 0;
    this.boredom = 0;
    this.tiredness = 0;
    this.isSleeping = false;
  }

  needsTick() {
    const needs = setInterval(() => {
      if(this.isSleeping){
        this.hunger+=0.5;
      } else {
        this.hunger+=2;
      }
      if(!this.isSleeping){
        this.boredom+=3;
        this.tiredness++;
      } else if(this.tiredness > 0) {
          if(this.tiredness<5){
            this.tiredness=0;
          }
          else{
          this.tiredness-=15;
        }
      }
      if(this.hasRunAway()){
        clearInterval(needs);
        $("#runaway").show();
        $("img").hide();
        $("#baron_leave").show();
      }
    }, 1000);
  }

  hasRunAway() {
    if(this.hunger>=30||this.boredom>=30||this.tiredness>=30){
      return true;
    }
    return false;
  }

  feed() {
    if(this.hunger >= 3 && !this.hasRunAway() && !this.isSleeping) {
      this.hunger = 0;
      $("img").hide();
      $("#baron_feed").show();
      setTimeout(function(){
        $("img").hide();
        $("#baron").show();
      }, 2000);
    } else {
      return("Your tamagotchi is not hungry!");
    }
  }

  entertain() {
    if(this.boredom >= 6 && !this.hasRunAway() && !this.isSleeping) {
      this.boredom = 0;
      $("img").hide();
      $("#baron_entertain").show();
      setTimeout(function(){
        $("img").hide();
        $("#baron").show();
      }, 2000);
    } else {
      return("Your tamagotchi doesn't want to play.");
    }
  }

  sleep() {
    if(this.tiredness >= 10 && !this.hasRunAway() && !this.isSleeping) {
      this.isSleeping=true;
      //this.tiredness = 0;
    } else {
      return("Your tamagotchi doesn't want to sleep.");
    }
  }

  awaken(){
    if(this.isSleeping){
      this.isSleeping=false;

    }
  }

}
