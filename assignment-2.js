//CHALLENGE 1
var numbers = [];
var i = '#'; 
while (i<'########') {
    console.log(i);
    i = i+'#';
}

/* First I must create an empty array. Then declare variable i with its first string. 
I must use a while statement because I wanted to repeat the task for a certain amount 
of time. I made sure i was less than the final seven #, and then console logged with 
the increment of i+'#'.
*/

//CHALLENGE 2

function isEven(number) {
    if (number %2) {
        console.log("This number is Odd");
    }
    else {
        console.log("This number is Even");
    }

};

isEven(77)

/*I found this challenge very difficult. I knew I had to use an if else statement
because IF the number is even say "the number is even" or ELSE, say "the number is odd"
I ended up realizing that I could use the remainder of %2 to produce an Odd number. 
After that, I knew the rest would be even in my ELSE statement. */
