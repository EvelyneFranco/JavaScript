// Try edit msg
const arr=[{"name":"Luis","age":25},{"name":"Osuna","age":29},{"name":"Diego","age":17},{"name":"Tulio","age":31},{"name":"William","age":31}];

function getPeopleUnder26(nuevoArray){
  nuevoArray= new Array;
 for (var i=0;i<arr.length;i++){
    if(arr[i].age<26){
     nuevoArray.push(arr[i]);
    
    }
  
  
  }//for
  console.log("People under 26:");
  for(var i =0;i<nuevoArray.length;i++){
    console.log(nuevoArray[i].name+" age is "+nuevoArray[i].age);
  }//for



}//end function 




getPeopleUnder26(arr);


  function gettingDiegoData(diegoArray){
    diegoArray= new Array;
  
    for (var i=0;i<arr.length;i++){
     if(arr[i].name=="Diego"){
       diegoArray.push(arr[i]);
    
     }
    }
    console.log("-------------------------");
    console.log("Diego values are:");
    for(var i =0;i<diegoArray.length;i++){
      console.log(diegoArray[i]);
    }
  }
  
  gettingDiegoData(arr);