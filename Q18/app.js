"use strict";
// Question 18: Seeing the World: Think of at least five places you’d like to visit.
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
var places = ["America", "Canada", "Sweden", "Japan", "China"];
console.log("Original Order:", places);
console.log("Alphabetical Order:", [places].sort()); // [...places].sort for alphabetical order 
console.log("Reverse Alphabetical Order:", __spreadArray([], places, true).sort().reverse());
places.reverse(); // we can also write it in the console.log() 
console.log("Reversed Order:", places);
places.reverse();
console.log("Original Order:", places); // it gives original because it reverse the previous one which is already reverse 
places.sort();
console.log("Alphabetical Order:", places);
places.reverse();
console.log("Reverse Alphabetical Order:", places); // same for here as it reverses the previous one
