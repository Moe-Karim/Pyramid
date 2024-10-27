var num = prompt("Enter rows number:")
s="";
for (var i =0;i<num;i++){
    if(i>0){
        s += " ";
    }
    s += ((i*2)+1).toString();
    console.log(s)
}
