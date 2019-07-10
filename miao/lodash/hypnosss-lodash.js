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
	}
}