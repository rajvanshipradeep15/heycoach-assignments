class Solution {
    frequencySort(s) {
        //Write your code here
        let carHash = new Map();
        let similarStringArr = [];
        for (let character of s) {
            let charValue = carHash.get(character) ?? 0
            carHash.set(character, charValue + 1)
            similarStringArr[character] = character.repeat(charValue + 1);
        }
        for (let entry of carHash.entries()) {
            console.log(entry[0]);
            // console.log('key:' + key)
            // console.log('value:' + value)
        }
        let allEntries = carHash.entries();
        // allEntries.sort(this.compareFn);
        console.log(allEntries);
        console.log(allEntries);
        //localeCompare console.log(a.localeCompare(b));
        console.log(similarStringArr);
        console.log(carHash.keys());
        console.log(carHash.values());
        console.log(carHash.entries());

        return s;
    }


    compareFn(entryA, entryB) {
        if (entryA[1]<entryB[1]) {
            return -1;
        } else if (entryA[1]>entryB[1]) {
            return 1;
        }
        // a must be equal to b
        return 0;
    }
}

let sol = new Solution();
let cars = "ssgysyqa";
const result  = sol.frequencySort(cars);

console.log("result:"+result);
