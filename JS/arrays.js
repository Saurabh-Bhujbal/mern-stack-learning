let arr=["raju","jay",46,"shaury",8];
let arr2=["oggy","oli","bablu"];
console.log(arr);
console.log(arr[0],arr[4]);
arr.push("balasaheb");//adds element at end
console.log(arr);
arr.pop();//remove element from last
console.log(arr);
arr.unshift("bheem");//adds element at start
console.log(arr);
arr.shift();//remove element from start
console.log(arr);
console.log(arr.indexOf(46));
console.log(arr.indexOf("sam"));
console.log(arr.includes("shaury"));
console.log(arr.includes("jack"));
newstr=arr.concat(arr2);//returns new array
console.log(newstr);
console.log(arr.reverse());//reverses original array
console.log(arr);
let slicedarr=arr.slice(2);
console.log(slicedarr);
console.log(arr);//there is no any change in original array
console.log(arr.slice(2,4));



let demoarr=["mango","banana","apple","papaya","watermelon"];
console.log(demoarr);
console.log(demoarr.splice(3));
console.log(demoarr);
console.log(demoarr.splice(3,0,"cocanaut","sitaphal","chiku"));//no any element want to delete so 0,it start from 3 
                                                                // no any element delete ,start adding element from 3
 console.log(demoarr);
 console.log(demoarr.splice(1,3,"red","orange","black"));//it start from 1 delete 3 element of index 1,2,3
                                                         //then adds 3 element red,orange,black at 1,2,3
console.log(demoarr);
console.log(demoarr.sort());
let numarr=[12,3,1,7,9];
console.log(numarr.sort());
const conarr=[1,2,3];
console.log(conarr);
conarr.push(60);//we can add element into array
console.log(conarr);
conarr.shift();//we can remove element from array
console.log(conarr);
let checkarr=[7,8,9];
conarr=checkarr;//gives error because conarr is constant can't assign to new array(mean conarr 
                // can not able to assign new address)
console.log(checkarr);

