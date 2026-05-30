function constrfun(str){
    let result="";
    for(i=0;i<str.length;i++)
    {
        result=result+str[i];
    }
    return result;
}
let str=["money ","is ","life","!"];
console.log(constrfun(str));
