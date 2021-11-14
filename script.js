 let p=new Promise(
     function input(resolve,reject){
        let q=parseInt( prompt("Enter Pin:"));
        console.log(q);
        console.log(typeof(q));
        if(isNaN(q)){
            alert("please enter a value");
            console.log("input is not a number or no input provided");
            input();            
        }else{

            if(q==20){
                resolve(q);

            }
            else{
                console.log("NOW THROWING NEW ERROR");   
                throw new Error(`YOU ENTERED${q} is not correct, please enter 20 and see magic`) ;
            }
            
        }

    }

);
p
.then(
    function(qresolved){
        for(let i=0;i<qresolved; i++){
            document.write(i);
        }
       
    }
)
.catch(function(errejected){
        console.log("received error");
        console.log(errejected.message);
    }
)