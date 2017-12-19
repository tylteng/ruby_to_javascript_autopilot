var apples = 14;

//console.log(apples);
//console.log('I have ' + apples + ' apples');


var materials = ['wood', 'metal', 'stone'];
var words = {
  'elephant': "The world's largest land mammal.",
  'school': 'A place of learning.',
  'ice cream': 'A delicious milk-based dessert.'};

for (material = 0; material < materials.length; material++) {
  //console.log(materials[material]);
}


var num = 16;

if (num > 10) {
  //console.log('Number is greater than 10');
}
else if (num == 10) {
  //console.log('Number is exactly 10');
}
else if (num < 10) {
  //console.log('Number is less than 10');
}

for (x = 0; x < 10; x++) {
  //console.log('Doing the same thing over and over');
}


var base = 5;

for (x = 0; x < 20; x++) {
  //console.log(num + base);
}


var total = 0;

for (x = 0; x < 100; x++) {
  //console.log(total += num);
}


var range = [];

for ( i = 3; i <= 15; i++) {
  if (i > 9) {
    //console.log('You can get on the rollercoaster! ' + i);
  }
  else if (i <= 9) {
    //console.log('You are too short to ride this rollercoaster. ' + i);
  }
}


var containers = ['purse', 'wallet', 'backpack'];

for (container = 0; container < containers.length; container++) {
  //console.log(containers[container]);
}


var hello_world = function() {
  console.log('Hello World');
}

//hello_world()


var add = function(x, y) {
  var amount = x + y
  return amount
}

console.log(add(5, 10));
