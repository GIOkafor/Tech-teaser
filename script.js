// 1a.) get users by activity 
const getUsersWithActivity = (data, genre) => {
  return data.filter(d => d.activities.includes(genre))
}

// 1b.)
//get the most popular activity by # of participants
// how to make this recursive & curried???
// how to deal with multiple most popular 
// least popular
const getMostPopularActivity = (data, activities) => {
  let mostPopular = { 
    name: "",
    count: 0
  };
  activities.map(activity => {
    let count = getUsersWithActivity(data, activity).length;
    if(count > mostPopular.count){
      mostPopular.name = activity;
      mostPopular.count = count;
    }
  });

  return mostPopular;
}

console.log("Biking: ", getUsersWithActivity(users, "Biking").length);
console.log("Hiking: ", getUsersWithActivity(users, "Hiking").length);
console.log("Running: ", getUsersWithActivity(users, "Running").length);
//console.log(users);

console.log("Most popular: ", getMostPopularActivity(users, ["Biking", "Hiking", "Running"]));

const wordToX = word => {
  let x = "";
  for(let i = word.length; i > 0; i--)
    x += "*";

  return x;
}

// 2.) if text contains any of the bad words replace with ***
// e.g  sentence = "The quick brown fox jumps over the box", banned = ['fox', 'box', 'quick']
// result = The ***** brown *** jumps over the ***
const cleanMsg = (message, blacklist) => {
  return message.replace(new RegExp(blacklist.join('|'), 'g'), wordToX);
}

const banned = ['fox', 'box', 'quick'];
let sentence = "The quick brown fox jumps over the box";
console.log(cleanMsg(sentence, banned));

// 3.) combine username and id to create uid
// e.g {name: "Jon", id: 3} => Jon_3
const generateUid = user => user.name + "_" + user.id;

console.log("UID: ", generateUid(users[4]));