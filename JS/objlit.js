let emp={
    name:"Saurabh",
    age:22,
    salary:30,
    hobbies:["sleeping","coding","playing"]
};//sequence of key-value pair can be changed (not fixed)
let emp2=["sanket",22,40000];//sequence of array elements are fixed as declared

let post={
    username:"@saurb_25",
    content:"this is my post",
    likes:800,
    reposts:9,
    tags:["oggy_07","jack_3","hamja_X_9"]
}
console.log(emp,post);
console.log(`username of post is ${post.username}`);
console.log(`first hobbie of emp is ${emp.hobbies[0]}`);
console.log(`usernname of post is ${post["username"]}`);
console.log(`hobbies of emp are => ${emp["hobbies"]}`);

post.username="saurabh_bhujbal_205";//update username 
console.log(post);
delete post.tags;//delete key-value pair from object
console.log(post);
console.log(post.tags);//shows undefined bcoz it is already deleted