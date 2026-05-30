let todo=[];
while(true){
let choice=prompt("enter your choice =>");
    if(choice=="quite"){
        console.log("App is quited!!!");
        break;
    }
    else if(choice=="add"){
        let task=prompt("enter task to add=>");
        todo.push(task);
        console.log("task added!!");
    }
    else if(choice=="list"){
        console.log("**********************************");
        for(let i=0;i<todo.length;i++){
            console.log(i ,todo[i]);

        }
        console.log("**********************************");
    }
    else if(choice=="del"){
        let id=prompt("enter index to delete task=>")
        todo.splice(id,1);
        console.log("Task Deleted!!")
    }
    else{
        console.log("INVALID CHOICE");
    }
}