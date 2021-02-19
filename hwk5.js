//2
function possibleArrays(arr, time) {
    let result = [];
    function subArr(i, arr2) {
        if (time === arr2.length) {
            result.push(arr2);
            return result;
        } else if (i === arr.length) {
            return result;
        } else {
            subArr(i + 1, arr2.concat([arr[i]]));
        }
        subArr(i + 1, arr2);
    }
    subArr(0, []);
    return result;
}

console.log(possibleArrays([1,2,3,4,5], 3))

//3
function objWithMap () {
  this.map = function (fn) {
    let obj = {};
    for (let key in this) {
    	if (key === 'map') continue;
   		let thisMap = fn(this[key], key, this)
    	obj[key] = thisMap
    } return obj
  }
}
obj = new objWithMap
obj.a = 1;
obj.b = 2;
obj.c = 3;
console.log(obj.map(x => x+2))
