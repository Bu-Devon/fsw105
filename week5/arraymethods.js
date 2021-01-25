var fruit = ["Banana", "apple","orange","watermelon"];
var vegtables = ["carrot", "tomato","pepper","lettuce"]; 
 
function arrayChange(){
    vegtables.pop();
    console.log ( "vegtables", vegtables);

    fruit.shift();
    console.log ("fruit", fruit);

      var indexOfOrange = fruit.indexOf("orange");
    console.log ("index of orange is:" + indexOfOrange)

    fruit.push(indexOfOrange) 
    console.log ("fruit", fruit);

    vegtables.push(vegtables.length);
    console.log ( "vegtables", vegtables);
   
   var food = new Array (fruit.join(vegtables));
   
     console.log (food)

}
console.log (arrayChange());