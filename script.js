// 1.) get the most popular activity by # of participants
// given a list of users and their activities
// results => Most popular:  { name: 'Biking', count: 7 }



// 2.) if text contains any of the bad words replace with ***
// e.g  sentence = "The quick brown fox jumps over the box", banned = ['fox', 'box', 'quick']
// result = The ***** brown *** jumps over the ***
const banned = ['fox', 'box', 'quick'];
let sentence = "The quick brown fox jumps over the box";


// 3.) combine username and id to create uid for each user in list 
// e.g {name: "Jon", id: 3} => Jon_3
// return an array of string [ 'Jon_3', 'Joan_5', 'Smith_6' ... ]