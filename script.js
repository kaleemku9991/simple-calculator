function gethistory(){
      return  document.getElementById("historyvalue").innerText;
}

function printhistory(num){
    document.getElementById("historyvalue").innerText=num;
}
function getoutput(){
    return  document.getElementById("outputvalue").innerText;
}
function printoutput(num){

    if (num==""){
        document.getElementById("outputvalue").innerText=num;
    }
else{
    document.getElementById("outputvalue").innerText=getformattednumber(num);
}
}
function getformattednumber(num){

    if(num=="-"){
        return "";
    }

    var n=Number (num);
    var value=n.toLocaleString("en");
    return value;
}
 
function reverseNumberformate(num){

    return Number (num.replace(/,/g,''));
}

var operator=document.getElementsByClassName("operator");
for(var i=0;i<operator.length;i++){
    operator[i].addEventListener('click',function(){
        if (this.id=="clear"){
            printhistory("");
            printoutput("");
        }
        else  if (this.id=="backspace"){
                var output=reverseNumberformate(getoutput()).toString();
                if (output){
                    output=output.substr(0,output.length-1);
                    printoutput(output);
                }
            }
        

        else {
            var output=getoutput();
            var history=gethistory();
            if(output=="" && history!=""){
                if (isNaN(history[history.length-1])){
                    history=history.substr(0,history.length-1)

                }

            }
        


            if (output!="" || history!=""){
                output= output==""?
                output:  reverseNumberformate(output);
                history=history+output;
                if (this.id=="="){
                    var result=eval(history);
                    printoutput(result);
                    printhistory("");
                }
                else {
                    history=history+this.id;
                    printhistory(history);
                    printoutput("");
                }
            }

        }
    });
    
}

var number=document.getElementsByClassName("number");
for(var i=0;i<number.length;i++){
    number[i].addEventListener('click',function(){
       var output=reverseNumberformate(getoutput());
       if (output!=NaN){
           output=output+this.id;
           printoutput(output);
       }
    })
}

