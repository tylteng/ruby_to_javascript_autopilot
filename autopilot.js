var cars = [];
var getNewCar = function() {
  car = {
    city: 'Toronto',
    passengers: 0,
    gas: 100,
  };
  return car;
}

var addCar = function(cars, newCar) {
  cars.push(newCar);
  return 'Adding new car to fleet. Fleet size is now ' + cars.length + '.';
}

var pickUpPassenger = function(car) {
  car['passengers'] += 1;
  car['gas'] -= 10;
  return 'Picked up passenger. Car now has ' + car['passengers'] + ' passengers.';
}

var getDestination = function(car) {
  if (car['city'] === 'Toronto') {
    return 'Mississauga';
  } else if (car['city'] === 'Mississauga') {
    return 'London';
  } else if (car['city'] === 'London') {
    return 'Toronto';
  }
}

var fillUpGas = function(car) {
  var oldGas = car['gas'];
  car['gas'] = 100;
  return 'Filled up to ' + getGasDisplay(car['gas']) + ' on gas from ' + getGasDisplay(oldGas) + '.';
}

var getGasDisplay = function(gasAmount) {
  return gasAmount + '%';
}

var drive = function(car, cityDistance) {
  if (car['gas'] < cityDistance) {
    return fillUpGas(car);
  }

  car['city'] = getDestination(car);
  car['gas'] -= cityDistance;
  return 'Drove to ' + car['city'] + '. Remaining gas: ' + getGasDisplay(car['gas'] + '%.');
}

var dropOffPassengers = function(car) {
  var previousPassengers = car['passengers'];
  car['passengers'] = 0;
  return 'Dropped off ' + previousPassengers + ' passengers.';
}

var act = function(car) {
  var distanceBetweenCities = 50;

  if (car['gas'] < 20) {
    return fillUpGas(car);
  } else if (car['passengers'] < 3) {
    return pickUpPassenger(car);
  } else {
    if (car['gas'] < distanceBetweenCities) {
      return fillUpGas(car);
    }
    var droveTo = drive(car, distanceBetweenCities);
    var passengersDropped = dropOffPassengers(car);
    return droveTo + ' ' + passengersDropped;
  }
}

var commandFleet = function(cars) {
  for (var i = 0; i < cars.length; i++) {
    var action = act(cars[i]);
    console.log('Car ' + (i + 1) + ': ' + action);
  }
  console.log('---');
}

var addOneCarPerDay = function(cars, numDays) {
  for (var index = 0; index < numDays; index++) {
    var newCar = getNewCar();
    console.log(addCar(cars, newCar));
    commandFleet(cars)
  }
}

addOneCarPerDay(cars, 10)
