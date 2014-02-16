/* Problem 1 */

var numberOfChildren = 0
var partnersName = "Matt Damon"
var geo = "Boulder, CO"
var jobTitle = "Professional Rock Climber"
"You will be a " + jobTitle + " in " + geo + " , and married to " + partnersName + " with " + numberOfChildren + " kids."

/* Problem 2 */

var currentdate = 2014
var birthyear = 1987
"They are either " + (currentdate-birthyear-1) + " or " + (currentdate-birthyear) "."

// Problem 3

var currentAge = 26
var maxAge = 80
var socksPerDay = 1
"In order to have " + socksPerDay " fresh pair of socks per day every day for the rest of my lift, I'll neeed " + (maxAge - currentAge)*365 + " pairs to last me until I'm " + maxAge "!"

// Problem 4

var radius = 3
var circumference = 2* Math.PI * radius
var circum = Math.round(circumference)
"When the radius is " + radius + " the circumference is about " + circum + "."

// Problem 5

var tempC = 27
var F  = tempC * 9/5 + 32
tempC + " degrees celsius is equal to " + F + " degrees Fahrenheit."
var newC = Math.round((F - 32) * 5/9)
F + " degrees Fahrenheit is equal to " + newC + " degrees celsius."

