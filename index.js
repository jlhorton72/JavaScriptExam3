// Developer:   James Horton
// Date:        04/22/2019
// Purpose:     Exam #3 JavaScript
// Task:        read in data file, print out specified values from data

var read = require('read-data');

    // console.log(read.sync('data.json'));     // verified the data was read
var arrayData = read.sync('data.json');
    // console.log(arrayData['items'][0]['fname']); // how I found the values to print

    // console.log(arrayData['items'].length);      // how i found the length of array
for (i = 0; i < arrayData['items'].length; i++){
    console.log(arrayData['items'][i]['fname'] + " " + arrayData['items'][i]['age']);
}

