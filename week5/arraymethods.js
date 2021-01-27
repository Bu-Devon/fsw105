var fruit = ["Banana", "apple","orange","watermelon"];
var vegtables = ["carrot", "tomato","pepper","lettuce"]; 
 
function arrayChange(){
    vegtables.pop();
   

    fruit.shift();
    

      var indexOfOrange = fruit.indexOf("orange");
    

    fruit.push(indexOfOrange); 
    

    vegtables.push(vegtables.length);
   
   
   var food = fruit.concat(vegtables);
   
    
    var removed = food.splice (4,2) ;
    
    
    var revr = food.reverse();
    
    
      var div = food.toString();
       
       return div;
}
console.log (arrayChange());