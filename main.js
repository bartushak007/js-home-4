var arr = [43, 23, 57, 54, 60, 41, 10, 60, 23, 47, 60, 12, 59, 60];
var maxResult = 0;

function getMaxNumber(arr) {
  for (var i = 0; i < arr.length; i++) {
    console.log('Образец под номером ' + (i + 1) + ' - результат ' + arr[i]);
    if (maxResult < arr[i]) {
      maxResult = arr[i];
    }
  }
  console.log('Всего проведено исследований:' + i);
  console.log('Наилучший результат: ' + maxResult);
}

function getMaximalNumbers(arr, maxResult) {
  var arrayOfResults = [];
  for (var j = 0; j < arr.length; j++) {
    if (maxResult === arr[j]) {
      arrayOfResults.push(j);
    }
  }
  console.log(
    'Образцы с наилучшими результатами под номерами' + arrayOfResults
  );
}

var car = {
  brand: 'BMW',
  year: '2018',
  passing: 10000,
  color: 'black',
  engine: false,
  motion: false,
  fuel: false,
  startEngine: function() {
    if (this.fuel) {
      this.engine = true;
    } else {
      console.log('Заправ бмв');
    }
  },
  go: function() {
    if (this.engine) {
      this.motion = true;
      console.log('Машина ' + this.year + ' марки ' + this.brand + ' цвета ' + this.color + ' поехала!');
    } else {
      console.log('Включите вначале зажигание');
    }
  },
  stop: function() {
    if (this.engine) {
      this.engine = false;
      this.motion = false;
      console.log('Машинка остановилась');
    } else {
      console.log('Зажигание и так выключено');
    }
  },
  isFuel: function() {
    if (!this.fuel) {
      console.log('Заправ мене!');
    }
  },
  addFuel: function() {
    this.fuel = true;
  }
};

/*3. Напишите функцию, которая получает на вход объект типа { Anna: 29, Misha: 35, Stepan: 1, Elena: 99 } 
и возвращает имя ученика с наиболее высоким баллом.*/

function showMaxRating(obj) {
  var maxRating = -Infinity;
  var maxRatingPerson = '';

  for (var key in obj) {
    if (maxRating < obj[key]) {
      maxRating = obj[key];
      maxRatingPerson = key;
    }
  }
  return maxRatingPerson;
}

/*4. Напишите функцию, перемешивающую элементы массива в случайном порядке */

function anyOrderArray(arr) {
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

/* 5. Напишите функцию, которая возвращает сумму элементов массива */

function arraySum(arr) {
  sum = 0;
  for (var i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}

/* 6. Напишите функцию, которая возвращает максимальный элемент массива*/

function maxElement(arr) {
  var max = 0;

  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i]
    }
  }

  return max;
}

/*A simple function for tasks 7/8*/

function sortArr(arr) {
  var newArr = [],
  res,
  counter;

  for (var i = 0; i < arr.length; i++) {
    res = Infinity;
    for (var j = arr.length - 1; j >= 0; j--){
      if (res > arr[j]){
        res = arr[j];
        counter = j;
      }
    }
    arr[counter] = Infinity;
    newArr.push(res)
  }

  return newArr;
}

/*7. Напишите функцию, которая возвращает массив, состоящий из всех возможных непрерывных подмассивов данного массива.
 Например: getSubArrays([1, 2, 3, 4]) => [ [1], [2], [3], [4], [1, 2], [2, 3], [3, 4], [1, 2, 3], [2, 3, 4], [1, 2, 3, 4] ]*/

function uninteruptedArray(inputArr) {
  var arr = sortArr(inputArr),
  newArr = [],
  counter;
 
  for (var i = 0; i < arr.length; i++) {
    
    counter = 0;
    for (var j = i; j < arr.length; j++) {
      newArr.push(arr.slice(counter, counter + i + 1));
      counter++;
    }
  }
  console.log('Array : ' + newArr);

  return newArr;
}

/*-8. Напишите функцию, которая получает на вход массив чисел 
типа [1, -2, 3, 4, -9, 6]. Задача – найти непрерывный подмассив,
 сумма элементов которого максимальна. И вернуть эту сумму.--*/

function maximalUninteruptedArray(inputArr) {  
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

/*--9. Палиндром - это строка которая читается с обоих сторон 
одинаково. Например: Анна, оно, А роза упала на лапу Азора.
 Напишите функцию, которая возвращает true или false в зависимости
  от того является ли строка палиндромом или нет.--*/

function palindrome(str) {
  var oppositeStr = ''; 
  var clearStr = '';
  str = str.toLowerCase();

  for (var j = 0; j < str.length; j++) {
    if (!(str[j] === ',' || str[j] === '!' || str[j] === '.' || str[j] === '?' || str[j] === ' ')) {
      clearStr += str[j];    
    }
  }

  console.log(clearStr); 
  for (var i = clearStr.length - 1; i >= 0; i--){   
      oppositeStr += clearStr[i];    
  }
  console.log(oppositeStr);

  return clearStr === oppositeStr;
}


getMaxNumber(arr);
getMaximalNumbers(arr, maxResult);
console.log(showMaxRating({ Anna: 29, Misha: 35, Stepan: 1, Elena: 99 }));
console.log(anyOrderArray([1, 2, 3, 4, 5, 6, 7, 8, 9]));
console.log(arraySum([1, 2, 3, 4, 5, 6, 7, 8, 9]));
console.log(maxElement([1, 2, 3, 4, 5, 6, 7, 8, 9]));
console.log(uninteruptedArray([1, 4, 2, 3]));
console.log(maximalUninteruptedArray([6, -2, 2, 3, 5, 4, -9, 1]));
console.log(palindrome('anna'));
console.log(palindrome('sofia'));
console.log(palindrome('А роза, упала? на лапу Азора'));
