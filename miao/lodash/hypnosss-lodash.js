var hypnosss = {
  chunk: function(arr, n) {
    var ans = [];
    var num = Math.ceil(arr.length / n);
    for(let i = 0; i < num; i++) {
      if(i == num - 1) {
        ans[i] = arr.slice((num - 1) * n);
      } else {
        ans[i] = arr.slice(i * n, (i + 1) * n);
      }
    }
    return ans;
  },
  compact: function (ary) {
    return ary.filter(it => it);
  },
  difference: function a(arr1, ...values) {
    var arr2 = [];
    for(let value of values) {
      arr2 = arr2.concat(value);
    }
    return arr1.filter(arr1mem=>arr2.indexOf(arr1mem) == -1);
  },
  drop: function a(arr, num) {
    return arr.slice((num||num==0)?num:1);
  },
  dropRight: function a(arr, num) {
    var end = (num||num==0)?arr.length-num:arr.length-1;
    return arr.slice(0,end<0?0:end);
  },
  fill: function a(arr, value, start, end) {
    start = start || 0;
    end = end || arr.length;
    for(let i = start; i < end; i++) {
      arr[i] = value;
    }
    return arr;
  },
  flatten: function a(arr) {
    var ans = [];
    for(let arrmem of arr) {
      if(Array.isArray(arrmem)) {
        for(let i = 0; i < arrmem.length; i++) {
          ans.push(arrmem[i]);
        }
      }	else {
        ans.push(arrmem);
      }
    }
    return ans;
  },
  flattenDeep: function a(arr) {
    var ans = [];
    for(let arrmem of arr) {
      if(Array.isArray(arrmem)) {
        ans = ans.concat(this.flattenDeep(arrmem));
      } else {
        ans.push(arrmem);
      }
    }
    return ans;
  },
  flattenDepth: function a(arr, depth) {
    var ans = [];
    for(let i = 0; i < arr.length; i++) {
      ans[i] = arr[i]; 
    }
    for(let i = 0; i < depth; i++) {
      ans = this.flatten(ans);
    }
    return ans;
  },
  fromPairs: function a(pairs) {
    var hash = {};
    for(let pair of pairs) {
      hash[pair[0]] = pair[1];
    }
    return hash;
  },
  head: function a(arr) {
    return arr.length>0?arr[0]:undefined;
  },
  indexOf: function a(arr, val, from) {
    from = from || 0;
    for(let i = (from < 0 ? arr.length + from : from); i < arr.length; i++) {
      if(arr[i] == val) {
        return i;
      }
    }
    return -1;
  },
  initial: function a(arr) {
    return arr.length > 0 ? arr.slice(0, arr.length - 1) : [];
  },
  intersection: function a(...arrs) {
    var hash = {};
    var ans = [];
    for(let arr of arrs) {
      for(let arrmem of arr) {
        if(!hash[arrmem]) {
          hash[arrmem] = 1;
        } else {
          hash[arrmem] ++;
        }
      }
    }
    for(let key in hash) {
      if(hash[key] == arrs.length) {
        ans.push(+key);
      }
    }
    return ans;
  },
  join: function a(arr, sep) {
    var ans = "";
    for(let i = 0; i < arr.length; i++) {
      if(i == arr.length - 1) {
        ans += "" + arr[i];
      } else {
        ans += "" + arr[i] + sep;
      }
    }
    return ans;
  },
  last: function a(arr) {
    return arr.length > 0 ? arr[arr.length - 1] : undefined;
  },
  lastIndexOf: function a(arr, val, from) {
    from = from || from == 0 ? from : arr.length - 1;
    from = from < 0 ? Math.max(0, arr.length + from) : Math.min(arr.length - 1, from);
    for(let i = from; i > 0; i--) {
      if(arr[i] == val) {
        return i;
      }
    }
    return -1;
  },
  pull: function a(arr, ...vals) {
    var ans = [];
    for(let arrmem of arr) {
      if(vals.indexOf(arrmem) == -1) {
        ans.push(arrmem);
      }
    }
    return ans;
  },
  reverse: function a(arr) {
    arr = arr || [];
    if(arr.length <= 1) {
      return arr;
    }
    var start = 0, end = arr.length - 1;
    while(start < end) {
      var temp = arr[start];
      arr[start] = arr[end];
      arr[end] = temp;
      start++;
      end--;
    }
    return arr;
  },
  sortedIndex: function a(arr, val) {
    var start = 0;
    var end = arr.length - 1;
    var mid = Math.floor((start+end)/2);
    while(start < end - 1) {
      if(val > arr[mid]) {
        start = mid;
        mid = Math.floor((start+end)/2);
      } else {
        end = mid;
        mid = Math.floor((start+end)/2);
      }
    }
    return mid + 1;
  },
  uniq: function a(arr) {
    var hash = new Map();
    var ans = [];
    for(let arrmem of arr) {
      if(!hash.get(arrmem)) {
        hash.set(arrmem, 1);
      } 
    }
    for(let key of hash.keys()) {
      ans.push(key)
    }
    return ans;
  },
  without: function a(arr, ...vals) {
    var ans = [];
    for(arrmem of arr) {
      if(vals.indexOf(arrmem) == -1) {
        ans.push(arrmem);
      }
    }
    return ans;
  },
  zip: function a(...arrs) {
    var ans = [];
    for(let i = 0; i < arrs[0].length; i++) {
      ans[i] = [];
      for(let j = 0; j < arrs.length; j++) {
        ans[i][j] = arrs[j][i];
      }
    }
    return ans;
  },
  unzip: function a(arr) {
    var ans = [];
    for(let i = 0; i < arr[0].length; i++) {
      ans[i] = [];
      for(let j = 0; j < arr.length; j++) {
        ans[i][j] = arr[j][i];
      }
    }
    return ans;
  },
  countBy: function a(collection, functionb) {
    var hash = {};
    var flag;
    if(functionb+"" === functionb) {
      flag = 1//str
    } else {
      flag = 0;//fun
    }
    for(let co of collection) {
      if(!flag) {
        if(!hash[functionb(co)]) {
          hash[functionb(co)] = 1
        } else {
          hash[functionb(co)] ++;
        }
      } else {
        if(!hash[co[functionb]]) {
          hash[co[functionb]] = 1
        } else {
          hash[co[functionb]] ++;
        }
      }
    }
    return hash;
  },
  forEach: function a(collection, functionb) {
    // var obj = {
    // 	functionbb: eval("(" + functionb + ")")
    // };
    // if(Array.isArray(collection)) {
    // 	for(let key in collection) {
    // 		obj.functionbb(collection[key], key);
    // 	}
    // } else {
    // 	for(let [keyo,val] in collection) {
    // 		obj.functionbb(val, keyo);
    // 	}
    // }
    return collection;
  },
  groupBy: function a(collection, functionb) {
    var hash = {};
    var flag;
    if(functionb+"" === functionb) {
      flag = 1//str
    } else {
      flag = 0;//fun
    }
    for(let co of collection) {
      if(!flag) {
        if(!hash[functionb(co)]) {
          hash[functionb(co)] = [co]
        } else {
          hash[functionb(co)].push(co);
        }
      } else {
        if(!hash[co[functionb]]) {
          hash[co[functionb]] = [co];
        } else {
          hash[co[functionb]].push(co);
        }
      }
    }
    return hash;
  },
  differenceBy: function a(arr, ...rest) {
    var limits = [], func, vals = [], ans = [];
    if(rest.length > 0) {
      if(Array.isArray(rest[rest.length - 1])) {
        for(let i = 0; i < rest.length; i++) {
          limits[i] = rest[i];
        } 
      } else {
        for(let i = 0; i < rest.length - 1; i++) {
          limits[i] = rest[i];
        } 
        func = rest[rest.length - 1];
      }
    }
    for(let i = 0; i < limits.length; i++) {
      for(let mem of limits[i]) {
        vals.push(mem);
      }
    }
    var map = new Map();
    var flag = (func+""===func);
    if(!func) {
      for(let arrmem of arr) {
        map.set(arrmem, arrmem);
      }
      for(let val of vals) {
        if(map.has(val)) {
          map.delete(val);
        }
      }
      for(let arrmem of arr) {
        if(map.has(arrmem)) {
          ans.push(arrmem);
        }
      }
      return ans;
    }
    if(flag) {//str
      for(let arrmem of arr) {
        map.set(arrmem[func], arrmem);
      }
      for(let val of vals) {
        if(map.has(val[func])) {
          map.delete(val[func]);
        }
      }
      for(let arrmem of arr) {
        if(map.has(arrmem[func])) {
          ans.push(arrmem);
        }
      }
    } else {//func
      for(let arrmem of arr) {
        map.set(func(arrmem), arrmem);
      }
      for(let val of vals) {
        if(map.has(func(val))) {
          map.delete(func(val));
        }
      }
      ans = [...map.values()];
    }
    return ans;
  },
  map: function a(collection, func) {
    var ans = [];
    var flag1 = Array.isArray(collection);//1arr 0obj
    var flag2 = (func + "" === func)// 1str 0func
    if(flag1) {
      if(+collection[0] == collection[0]) {// num in arr
        for(let i = 0; i < collection.length; i++) {
          ans.push(func(collection[i], i, collection));
        }
      } else {//obj in arr
        if(flag2) { //str
          for(let co of collection) {
            if(func.includes(".")) {
              func
            } else {
              ans.push(co[func]);
            }
          }
        } else {
          for(let co of collection) {
            ans.push(func(co));
          }
        }
      }
    } else if(!flag1 && !flag2){
      for(let key in collection) {
        ans.push(func(collection[key]));
      }
    } else if(!flag1 && flag2) {
      for(let key in collection) {
        ans.push(co[func]);
      }
    }
    return ans;
  },
  // sample: function a(collection) {
  // 	if(Array.isArray(collection)) {
  // 		for(let co of collection) {
  // 			return co;
  // 		}
  // 	} else {
  // 		for(let [key, val] in collection) {
  // 			return [key, val]
  // 		}
  // 	}
  // 	return 2;
  // },
  size: function a(collection) {
    if(collection + "" === collection || Array.isArray(collection)) {
      return collection.length;
    }
    var len = 0;
    for(let key in collection) {
      len++;
    }
    return len;
  },
  // isArguments: function a(val) {
  // 	return val[Symbol.iterator]() && !Array.isArray(val);
  // },
  isArray: function(arg) {
    return Object.prototype.toString.call(arg) === '[object Array]';
  },
  isBoolean: function(arg) {
    return (arg === !!arg) || arg.toString() == "true" || arg.toString() == "false";
  },
  isNumber: function(arg) {
    return +arg === arg;
  },
  isString: function(arg) {
    return "" + arg === arg;
  },
  max: function(arr) {
    if(arr) {
      var max = arr[0];
      for(let arrmem of arr) {
        max = arrmem>max?arrmem:max;
      }
    }
    return max;
  },
  min: function(arr) {
    if(arr) {
      var min = arr[0];
      for(let arrmem of arr) {
        min = arrmem<min?arrmem:min;
      }
    }
    return min;
  },
  isFinite: function(val) {
    return +val === val && val - 1 != val;
  },
  isFunction: function(val) {
    return typeof(val) == "function";
  },
  isNaN: function(val) {
    // console.log(typeof(val));
    return !val || val !== val;
  },
  isNil: function(val) {
    return val === undefined || val === null;
  },
  isNull: function(val) {
    return val === null;
  },
  isObject: function(val) {
    var valType =  Object.prototype.toString.call(val);
    return valType.includes("object") && val != null;
  },
  isUndefined: function(val) {
    return val === undefined;
  },
  toArray: function(val) {
    if(this.isString(val)) {
      return val.split("");
    }
    if(this.isObject(val)) {
      var ans = [];
      for(let key in val) {
        ans.push(val[key]);
      }
      return ans;
    }
    return [];
  },
  ceil: function(num, pre = 0) {
    function myceil(val) {
      if(val % 1 == 0) {//整数
        return val;
      } else {
         return val - (val % 1) + 1;
      }
    }
    var ans =  myceil(num / Math.pow(10, -pre)) * Math.pow(10, -pre);
    return ans;
  },
  round: function(num, pre = 0) {
    function myceil(val) {
      var left = val % 1;
      if(left == 0) {//整数
        return val;
      } else if(left >= 0.5) {
        return val - (val % 1) + 1;
      } else {
        return val - (val % 1);
      }
    }
    var ans =  myceil(num * Math.pow(10, pre)) / Math.pow(10, pre);
    return ans;
  },
  forIn: function(obj, func) {
    for(let key in obj) {
      func(obj[key], key, obj);
    }
    return obj;
  },
  forInRight: function(obj, func) {
    // console.log(Object.keys(obj));
    var keyArr = [];
    for(let key in obj) {
      keyArr.push(key);
    }
    for(let i = keyArr.length - 1; i >= 0; i--) {
      func(obj[keyArr[i]], keyArr[i], obj);
    }
    return obj;
  },
  forOwn: function(obj, func) {
    var keyArr = Object.keys(obj);
    for(let i = 0; i >= keyArr.length - 1; i--) {
      func(obj[keyArr[i]], keyArr[i], obj);
    }
    return obj;
  },
  forOwnRight: function(obj, func) {
   var keyArr = Object.keys(obj);
    for(let i = keyArr.length - 1; i >= 0; i--) {
      func(obj[keyArr[i]], keyArr[i], obj);
    }
    return obj;
  },
}