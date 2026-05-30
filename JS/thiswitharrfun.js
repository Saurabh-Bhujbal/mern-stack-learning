let employ={
    name:"saurabh",
    salary:40998,
    post:"team lead",
    getname:function(){
        console.log(this);
    },
    showsal:()=>{
        console.log(this);
    }
}
employ.getname();
employ.showsal();