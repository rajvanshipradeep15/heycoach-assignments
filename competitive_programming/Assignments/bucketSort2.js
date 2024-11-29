class Solution {
    frequencySort(s) {
      //Write your code here
      let carHash = new Map();
      for(let char of s) {
        let charCount = carHash.get(char) ?? 0;
        charCount = charCount + 1;
        carHash.set(char, charCount);
      }

      let carArr = [...carHash.entries()];
      let sortedCarArr = carArr.sort((a,b) => b[1] - a[1]);
      let arrOfObj = [];

      for(let sortedChar of sortedCarArr) {
        let count = sortedChar[1];
        let selectedObj = arrOfObj.find( obj => {
          return obj.count === count;
        });

        if(selectedObj !== undefined) {
          selectedObj.chars.push(sortedChar[0].repeat(count));
        } else {
          let obj = {'count': count, 'chars': [sortedChar[0].repeat(count)]};
          arrOfObj.push(obj);
        }
      }

      let result = [];
      for(let obj of arrOfObj) {
        let sortResult = obj.chars.sort();
        let sortJoined = sortResult.join('');
        result.push(sortJoined);
      }
      console.log(result.join(''));
      return result.join('');
   }
}

let s = "ssccgysyqa";
let sortSolution = new Solution();
sortSolution.frequencySort(s);

