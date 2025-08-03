// Question 41: Magicians: Display magician names from an array.
var magician_names = ["David Blaine", "Dynamo", "Criss Angel"];
function show_magicians(magician_names) {
    magician_names.forEach(function (magician_name) {
        console.log("The ".concat(magician_name, " is a famous magician."));
    });
    // for (let one of magician_names){
    //   console.log(one)
    // }
}
show_magicians(magician_names);
