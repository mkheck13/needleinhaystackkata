// Can you find the needle in the haystack?
// Write a function findNeedle() that takes an array full of junk but containing one "needle"
// After your function finds the needle it should return a message (as a string) that says:
// "found the needle at position " plus the index it found the needle, so:

// so with this one I have figured out two differnt methods:
// using indexof() or a for loop

// with a bit of testing things, I figured out this works the way I need it to
// this is the indexOf() method
function findNeedle(haystack) {
    return "found the needle at position " + haystack.indexOf('needle');
}

// now we will try the for loop method
// first we set i(index) to zero, then we set the length of our array, then we iterate thought it until our condition is met
// once i equals 'needle' we return the index in the return statement 
function findNeedle(haystack){
    for (let i = 0; i < haystack.length; i++){
        if (haystack[i] === 'needle'){
            return "found the needle at position " + i;
        }
    }
}