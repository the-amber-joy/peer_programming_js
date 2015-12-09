var value = 42;
if(value>=53){
	value+=42;
}else{
	value-=13;
}
value+="11";
var array=[];
for(i=0; i<value.length; i++){
	array[i]=value.charAt(i);
}

array.shift();
array.pop();
//array is now["9", "1"]

var backwards="";
var length=array.length;
for(i=0; i<length;i++){
	backwards+=array.pop();
}
//backwards = "19"

backwards=parseInt(backwards);
value=parseInt(value);
//backwards = 19, value = 2911

value =+ backwards;
console.log(value);
// if (value < 60) {
// 	value = 14;
// } else if (value == 2930) {
// 		value = 27;
// 	} else { 
// 		value = 2;
// 	}

// i = 10;
// while (i>0) {
// 	value++;
// 	i--;
// }

// function shiftVal(val){
// 	toString(value);
// 	if (value.length>1) {
// 		value.shift()
// 	};
// 	return val;
// }

// shiftVal(value);

// console.log(value);




