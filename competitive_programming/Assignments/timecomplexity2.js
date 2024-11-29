class Solution {
    constructor() {
        this.cnt = 0;
    }

    print() {
        this.cnt++;
    }

    solve(n) {
        //Write your code here
        let totalIteration = 0;

        for (let i = n; i > 0; i = (i / 2|0)) {
            totalIteration += i + 1;
        }

        for (let x = 0; x < totalIteration; x++) {
            this.print();
        }

    }
}

let sol = new Solution();
sol.solve(5);
console.log(sol.cnt)