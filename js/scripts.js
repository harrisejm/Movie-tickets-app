$(document).ready(function(){

var totalTickets = 0;
var totalPrice = 0;


  var Movie = function(name, time, age){
    this.name = name;
    this.time = time;
    this.age = age;

    this.calc = function() {
      if (this.age === "1" && this.time !== "9:00pm" && this.time !== "5:00pm") {
        totalTickets += 1;
        totalPrice += 4.99;
        return this.name + " Child Matinee showing: Price $4.99 " + this.time;//this.arr[0];
      } else if (this.age === "1" && this.time === "5:00pm" || this.time === "9:00pm") {
        totalTickets +=1;
        totalPrice += 6.99;
        return this.time, this.name + " Child Regular showing: Price $6.99 " + this.time;
      } else if (this.age === "2" && this.time !== "9:00pm" && this.time !== "5:00pm") {
        totalTickets +=1;
        totalPrice += 8.99;
        return this.name + " Adult Matinee showing: Price $8.99 " + this.time;
      } else if (this.age === "2" && this.time === "5:00pm" || this.time === "9:00pm") {
        totalTickets +=1;
        totalPrice += 14.99;
        return this.name + " Adult Regular showing: Price $14.99 " + this.time;
      } else if (this.age === "3" && this.time !== "9:00pm" && this.time !== "5:00pm") {
        totalTickets +=1;
        totalPrice += 7.99;
        return this.name + " Senior Matinee  showing: Price $7.99 " + this.time;
      } else if (this.age === "3" && this.time === "5:00pm" || this.time === "9:00pm") {
        totalTickets +=1;
        totalPrice += 9.99;
        return this.name + " Senior Regular showing: Price $9.99 " + this.time;
      }
    }
  }

  $("form#movieInput").submit(function(event) {
   event.preventDefault();
    var movieName = $("#movie-name").val();
    var movieTime = $("#time").val();
    var userAge = $("#age").val();
    var tickets = new Movie(movieName, movieTime, userAge);

     $("ul#test").append("<li><span class='contact'>" + tickets.calc() + "</span></li>");
     document.getElementById("test1").innerHTML = " " + totalTickets ;
     document.getElementById("test2").innerHTML = "$" + totalPrice.toFixed(2);



  //document.getElementById("test").innerHTML = tickets.calc();

});

});
