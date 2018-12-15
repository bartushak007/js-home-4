var arr = [43, 23, 57, 54, 60, 41, 10, 60, 23, 47, 60, 12, 59, 60];
var maxResult = 0;

function getMaxNumber(arr) {
  for (var i = 0; i < arr.length; i++) {
    console.log("Образец под номером" + (i + 1) + "- результат" + arr[i]);
    if (maxResult < arr[i]) {
      maxResult = arr[i];
    }
  }
  console.log("Всего проведено исследований:" + i);
  console.log("Наилучший результат: " + maxResult);
}

function getMaximalNumbers(arr, maxResult) {
  var arreyOfResults = [];
  for (var j = 0; j < arr.length; j++) {
    if (maxResult === arr[j]) {
      arreyOfResults.push(j);
    }
  }
  console.log(
    "Образцы с наилучшими результатами под номерами" + arreyOfResults
  );
}
getMaxNumber(arr);
getMaximalNumbers(arr, maxResult);

var car = {
  brand: "BMW",
  year: "2018",
  passing: 10000,
  color: "black",
  engine: false,
  motion: false,
  fuel: false,
  startEngine: function() {
    if (this.fuel) {
      this.engine = true;
    } else {
      console.log("Заправ бмв");
    }
  },
  go: function() {
    if (this.engine) {
      this.motion = true;
      console.log( "Машина " + this.year + " марки " + this.brand + " цвета " + this.color + " поехала!" );
    } else {
      console.log("Включите вначале зажигание");
    }
  },
  stop: function() {
    if (this.engine) {
      this.engine = false;
      this.motion = false;
      console.log("Машинка остановилась");
    } else {
      console.log("Зажигание и так выключено");
    }
  },
  isFuel: function() {
    if (!this.fuel) {
      console.log("Заправ мене!");
    }
  },
  addFuel: function() {
    this.fuel = true;
  }
};

function showMaxRating(obj) {
  var maxRating = -Infinity;
  var maxRatingPerson = "";

  for (var key in obj) {
    if (maxRating < obj[key]) {
      maxRating = obj[key];
      maxRatingPerson = key;
    }
  }
  return maxRatingPerson;
}
console.log(showMaxRating({ Anna: 29, Misha: 35, Stepan: 1, Elena: 99 }));

function anyOrderArrey(arr) {
  var changeNumber;

  function minMax(min, max) {
    return Math.round(Math.random() * (max - min)) + min;
  }
    
  for (var i = 0; i < arr.length * 2; i++) {
    changeNumber = minMax(0, arr.length);
    arr.push(arr[changeNumber]);
    arr.splice(changeNumber, 1);
  }

  return arr;
}

console.log(anyOrderArrey([1, 2, 3, 4, 5, 6, 7, 8, 9]));

function arreySum(arr) {
  sum = 0;
  for (var i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}
console.log(arreySum([1, 2, 3, 4, 5, 6, 7, 8, 9]));

function maxElement(arr) {
  var max = 0;

  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > max){
      max = arr[i]
    };
  }
  return max;
}

console.log(maxElement([1, 2, 3, 4, 5, 6, 7, 8, 9]));



function palindrome(str) {
  var oppositeStr = ''; 
  var clearStr = '';
  str = str.toLowerCase();

  for (var j = 0; j < str.length; j++) {
    if (!(str[j] === ',' || str[j] === '!' || str[j] === '.' || str[j] === '?' || str[j] === ' ')) {
      clearStr += str[j];    
    }
  };

  console.log(clearStr); 
  for (var i = str.length - 1; i >= 0; i--){
    if (!(str[i] === ',' || str[i] === '!' || str[i] === '.' || str[i] === '?' || str[i] === ' ')) {
      oppositeStr += str[i];    
    } 
  }

  console.log(oppositeStr);     
  return clearStr === oppositeStr;
}

console.log(palindrome('anna'));
console.log(palindrome('sofia'));
console.log(palindrome('А роза, упала? на лапу Азора'));




function sortArr(arr) {
  var newArr = [],
  res,
  counter;

  for (var i = 0; i < arr.length; i++) {
    res = Infinity;
    for (var j = arr.length-1; j >= 0; j--){
      if(res > arr[j]){
        res = arr[j];
        counter = j;
      }
    }
    arr[counter] = Infinity;
    newArr.push(res)
  }
  return newArr;
}



function uninteruptedArrey(inputArr) {
  var arr = sortArr(inputArr),
  newArr = [],
  counter;
 
  for (var i = 0; i < arr.length; i++) {
    newArr[i] = [];
    counter = 0;
    for (var j = i; j < arr.length; j++){
      newArr[i].push(arr.slice(counter, counter + i + 1));
      console.log(newArr);
      counter++;
    }
    
    

  }
  console.log('Arrey : ' + newArr)
  return newArr
}

console.log(uninteruptedArrey([1, 4, 2, 3]))



function maximalUninteruptedArrey(inputArr){  
  var newArr = [],
  counter = 0,
  sum = -Infinity,
  add = 0;
  arr = sortArr(inputArr);

  for (var i = 0; i < arr.length; i++) {
    newArr[i] = [];    
    counter = i;
    add = arr[i];

    for (var j = 0; j < arr.length; j++) {
      if ( arr[counter] === arr[j] - 1) {        
        newArr[i].push(arr[j]);
        add += arr[j];        
        counter = j;                       
      }      
    }

    if (sum < add) {
      sum = add;        
    }
  }

  
  return sum;
}

console.log(maximalUninteruptedArrey([6, -2, 2, 3, 5, 4, -9, 1]));