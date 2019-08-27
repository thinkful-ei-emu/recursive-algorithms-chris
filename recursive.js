// const countSheep = function(num) {
//   if(num === 0) {
//     return 'All sheep jumped over the fence';
//   }
//   return `${num}: Another sheep jump over the fence` + countSheep(num - 1);
// };
// console.log(countSheep(5));

// function powerCalculator(base, exp){
//   if(exp === 0){
//     return 1;
//   }
//   if(exp < 0){
//     return 'exponent should be >= 0';
//   }
//   return base * powerCalculator(base, exp-1);
// }

// console.log(powerCalculator(10,2));


// const reverseString = string => {
//   if(string.length === 0) {
//     return '';
//   }
//   return string[string.length-1] + reverseString(string.slice(0, string.length-1));
// };
// console.log(reverseString('chris'));

// const triNum = function(num) {
//   if(num === 1){
//     return 1;
//   }
//   if(num < 1){
//     return 'number must be greater than 0';
//   }
//   return triNum(num-1) + num;
// };
// console.log(triNum(4));

// const stringSplitter = string => {
//   if(string.length === 0){
//     return '';
//   }
//   if(string[0] === '/'){
//     return stringSplitter(string.slice(1));
//   }
//   return string[0] + stringSplitter(string.slice(1));
// };
// console.log(stringSplitter('02/20/2020'));

// const fibonacci = num => {
//   if(num === 1){
//     return 1;
//   }
//   if(num === 2){
//     return 1;
//   }
//   let fib = fibonacci(num-2) + fibonacci(num - 1);
//   return fib;
// };
// console.log(fibonacci(7));

// const factorial = num => {
//   if( num === 1 ) {
//     return 1;
//   }
//   return num * factorial(num-1);
// };
// console.log(factorial(5));

// const mazeEscape = (string, ud=0, lr=0) => {
//   let mySmallMaze = [
//     [' ', ' ', ' '],
//     [' ', '*', ' '],
//     [' ', ' ', 'e']
//   ];
//   let maze = [
//     [' ', ' ', ' ', '*', ' ', ' ', ' '],
//     ['*', '*', ' ', '*', ' ', '*', ' '],
//     [' ', ' ', ' ', ' ', ' ', ' ', ' '],
//     [' ', '*', '*', '*', '*', '*', ' '],
//     [' ', ' ', ' ', ' ', ' ', ' ', 'e']
//   ];
//   if(maze[ud][lr] === 'e'){
//     return true;
//   }
//   if(string.length === 0){
//     return maze[ud][lr] === 'e';
//   }
//   if(!maze[ud] || !maze[ud][lr]){
//     return false;
//   }
//   if(maze[ud][lr] === '*'){
//     return false;
//   }
//   let hor = lr;
//   let ver = ud;
//   if(string[0] ==='R'){
//     hor = 1 + lr;
//   } if(string[0] === 'D'){
//     ver = 1 + ud;
//   } if(string[0] ==='L'){
//     hor = -1 + lr;
//   } if(string[0] === 'U'){
//     ver = -1 + ud;
//   }
//   return mazeEscape(string.slice(1), ver, hor);

// };
// console.log(mazeEscape('RRDDLLDDRRRRRR'));

// let newMaze = [
//   [' ', ' ', ' ', '*', ' ', ' ', ' '],
//   ['*', '*', ' ', '*', ' ', '*', ' '],
//   [' ', ' ', ' ', ' ', ' ', ' ', ' '],
//   [' ', '*', '*', '*', '*', '*', ' '],
//   [' ', ' ', ' ', ' ', ' ', ' ', 'e']
// ];
// const solveMaze = (maze, position=0, ud=0,lr=0, direction='S', str = []) => {
//   console.log('ud:', direction);
//   if(ud < 0 || lr < 0){
//     return;
//   }
//   if(ud>=maze.length || lr>=maze[0].length){
//     return;
//   }
//   str[position] = direction;
//   position++;
//   if(maze[ud][lr] === 'e'){
//     return 'Found path to the exit: ' + str;
//   }
//   if(maze[ud][lr] === ' '){
//     maze[ud][lr] = 's';
//     solveMaze(maze, position, ud, lr+1, 'R', str);
//     solveMaze(maze, position, ud, lr-1, 'L', str);
//     solveMaze(maze, position, ud+1, lr, 'D', str);
//     solveMaze(maze, position, ud-1, lr, 'U', str);
//     maze[ud][lr] = ' ';
//   }
//   position--;
// };

// console.log(solveMaze(newMaze, 0, 0, 0, 'S', []));

// function anagrams(prefix, str){
//   if(str.length <= 1){
//     console.log(`The anagram is ${prefix}${str}`);
//   } else {
//     for(let i=0; i<str.length; i++){
//       let currentLetter = str.substring(i, i+1); 
//       let previousLetters = str.substring(0,i);
//       let afterLetters = str.substring(i+1);
//       anagrams(prefix+currentLetter, previousLetters+afterLetters);
//     }
//   }
// }
// console.log(anagrams(' ', 'cheese'));

// function orgChart(data, indent = 0) {
//   let space = ' '.repeat(indent * 4);
//   Object.keys(data).forEach(key => {
//     console.log(space + key);
//     orgChart(data[key], indent + 1);
//   });
// }

// let organization = {
//   'Zuckerberg': {		
//     'Schroepfer': {
//       'Bosworth': {
//         'Steve':{},
//         'Kyle':{},
//         'Andra':{}
//       },
//       'Zhao': {
//         'Richie':{},
//         'Sofia':{},
//         'Jen':{}
//       },
//       'Badros': {
//         'John':{},
//         'Mike':{},
//         'Pat':{}
//       },
//       'Parikh': {
//         'Zach':{},
//         'Ryan':{},
//         'Tes':{}
//       }
//     },
//     'Schrage': {
//       'VanDyck': {
//         'Sabrina':{},
//         'Michelle':{},
//         'Josh':{}
//       },
//       'Swain': {
//         'Blanch':{},
//         'Tom':{},
//         'Joe':{}
//       },
//       'Frankovsky': {
//         'Jasee':{},
//         'Brian':{},
//         'Margaret':{}
//       }
//     },
//     'Sandberg': {
//       'Goler': {
//         'Eddie':{},
//         'Julie':{},
//         'Annie':{}
//       },
//       'Hernandez': {
//         'Rowi':{},
//         'Inga':{},
//         'Morgan':{}
//       },
//       'Moissinac': {
//         'Amy':{},
//         'Chuck':{},
//         'Vinni':{}
//       },
//       'Kelley': {
//         'Eric':{},
//         'Ana':{},
//         'Wes':{}
//       }
//     }}};

// orgChart(organization);

//input: 5      3
//output: 101   11

//
//5%2 = 1   5/2 = 2 (integer)
//2%2 = 0   2/2 = 1
//1%2 = 1   1/2 = 0

//3%2 = 1   3/2 = 1

//stop at 0

//
// function binaryRep(num){
//   //base case
//   if(num<= 0){
//     return' ';
//   }
//   let binary = num%2;
//   return binaryRep(Math.floor(num/2)) + binary;
// }

// console.log(binaryRep(37));