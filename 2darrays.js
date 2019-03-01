// var numberGrid = [ [1, 2], [3, 4] ];

// numberGrid[0][1] = 99;
// console.log(numberGrid[0][0] + "<br>");
// console.log(numberGrid[0][1] + "<br>");

// for(var i = 0; i < numberGrid.length; i++){
//      for(var j = 0; j < numberGrid[i].length; j++){
//           console.log(numberGrid[i][j] + ", ");
//      }
//      console.log("<br>");
// }

var numberGrid = [
    [1,2,3],
    [4,5,6],
    [7,8,9],
    [0]
    
];

for( var i = 0; i < numberGrid.length; i++){
    for(var j = 0; j < numberGrid[i].length; j++) {
        console.log(numberGrid[i][j])
    }
    console.log("<br>")
}