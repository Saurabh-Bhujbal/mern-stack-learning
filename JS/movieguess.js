let movie="Dhurandar";
let guess=prompt("Enter Movie Name=>");
while((guess!=movie)&& (guess!="quite")){
       alert("WRONG MOVIE!!!");
       guess=prompt("Enter Movie Name=>");
}
if(guess==movie){
    alert("CONGRATS !!! guess is RIGHT");
}
else{
    console.log("QUITE!!")
}

