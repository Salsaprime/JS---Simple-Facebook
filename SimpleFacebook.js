var database = [
  {
    username: "Sal",
    password: "SuperSecret",
  }
];

var newsfeed = [
    {
        username: "Bobby",
        timeline: "So tired from all that learning!",
    },
    {
        username: "Jenny",
        timeline: "Javascript is soooo coooool!",
    },
    {
        username: "Rachael",
        timeline: "Programmers are hot!",
    }
];

var userNamePrompt = prompt("What's your username?");
var passwordPrompt = prompt("What's you're password?");

function signIn(user, pass) {
  if (user === database[0].username && pass === database[0].password) {
    console.log(newsfeed);
  } else {
    alert("Sorry, wrong username and password!");
  }
}

signIn(userNamePrompt, passwordPrompt);