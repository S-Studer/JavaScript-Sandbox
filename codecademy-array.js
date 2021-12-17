let secretMessage = ['Learning', 'is', 'not', 'about', 'what', 'you', 'get', 'easily', 'the', 'first', 'time,', 'it', 'is', 'about', 'what', 'you', 'can', 'figure', 'out.', '-2015,', 'Chris', 'Pine,', 'Learn', 'JavaScript'];

let secretMessagesPop = secretMessage.pop(); //remove

console.log(secretMessage.length); // check length

secretMessage.push("to"); 

secretMessage.push("Program"); //Push Item

secretMessage.splice(7, 1, "right"); //splice(start, deleteCount, item1)

secretMessage.splice(0, 1); // remove first string

secretMessage.unshift("Programming") // add string to first item array

secretMessage.splice(6, 5, "know"); // Removes 7 strings starting at 6

console.log(secretMessage.join(' ')); // Print de array en verwijderd de comma met een spatie