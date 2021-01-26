var fruit = ["Banana", "apple","orange","watermelon"];
var vegtables = ["carrot", "tomato","pepper","lettuce"]; 
 
function arrayChange(){
    vegtables.pop();
    console.log ( "vegtables", vegtables);

    fruit.shift();
    console.log ("fruit", fruit);

      var indexOfOrange = fruit.indexOf("orange");
    console.log ("index of orange is:" + indexOfOrange);

    fruit.push(indexOfOrange); 
    console.log ("fruit", fruit);

    vegtables.push(vegtables.length);
    console.log ( "vegtables", vegtables);
   
   var food = new Array (fruit.concat(vegtables));
   console.log (food)
    
    var removed = food.splice (4, 5);
    console.log (removed)

   var flat = food.shift();
   console.log (flat)

  var revr = food.reverse();
     console.log  (revr)
}
console.log (arrayChange());