function placeAnOrder(orderNumber){
    console.log("Customer order", orderNumber);

    cookAndDeliverFood(function(){
        console.log("Deliver food order:", orderNumber);

    });
}

function cookAndDeliverFood(callback){
    setTimeout(callback, 5000);
}

placeAnOrder(1);
placeAnOrder(2);
placeAnOrder(3);
placeAnOrder(4);
placeAnOrder(5);
placeAnOrder(6);

var Bucky = {
    printFirstName: function(){
        console.log("My name is Bucky");
        console.log(this === Bucky);
    }
}

Bucky.printFirstName();

//Global value
function doSomethingWorthless() {
    console.log("\nI am worthless");
    console.log(this === global);
}
doSomethingWorthless();

function User() {
    this.name = "";
    this.life = 100;
    this.giveLife = function giveLife(targetPlayer){
        targetPlayer.life +=1;
        console.log(this.name + "gave 1 life to " + targetPlayer.name);
    }
}

var Bucky = new User();
var Wendy = new User();

Bucky.name = "Bucky";
Wendy.name = "Wendy";

Bucky.giveLife(Wendy);
console.log("Bucky:" + Bucky.life);
console.log("Wendy:" + Wendy.life);

//prototype --- You can add function to all objects
User.prototype.uppercut = function uppercut(targetPlayer){
    targetPlayer.life-=3;
    console.log(this.name + " just uppercutted " + targetPlayer.name)
};

Wendy.uppercut(Bucky);
console.log("Bucky: " + Bucky.life);
console.log("Wendy: " + Wendy.life);

// You can add prototypes to all objects
User.prototype.magic = 60;
console.log(Bucky.magic);
console.log(Wendy.magic);

var movie = require("./movie");// the same directory file
movie.printAvatar();
movie.printChappie();
console.log(movie.fanMovie);

require('./emily');
require('./bucky');


