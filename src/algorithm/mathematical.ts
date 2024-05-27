import { Step } from "../App";

function gcd(a: number, b: number): number {
    return b === 0 ? a : gcd(b, a % b);
}

function pour(pourer: number, receiver: number, amount: number) {
    // Initialize current amount of water in source and destination jugs
    let from = pourer;
    let to = 0;

    // Initialize count of steps required needed to fill "from" Jug
    const finalSteps: Step[] = [[0, 0], [from, to]];

    // Break the loop when either of the two jugs has Z amount of water
    while (from !== amount && to !== amount) {
        // Find the maximum amount that can be poured to "to"
        let pouredWater = Math.min(from, receiver - to);

        // Pour the liters of water from "from" to "to"
        to += pouredWater;
        from -= pouredWater;

        finalSteps.push([from, to]);

        if (from === amount || to === amount) break;

        // If the first jug is empty, fill it
        if (from === 0) {
            from = pourer;
            finalSteps.push([from, to]);
        }

        // If the second jug is full, empty it
        if (to === receiver) {
            to = 0;
            finalSteps.push([from, to]);
        }
    }

    return finalSteps;
}

export default function pick(jug1: number, jug2: number, amount: number) {

    // To make sure that jug1 is smaller than jug2
    if (jug1 > jug2) {
        let temp = jug1;
        jug1 = jug2;
        jug2 = temp;
    }

    /* If gcd of jug2 and jug1 does not divide the resulting amount then the solution is not possible, otherwise 
    if either jug is negative, or if the amount to find is bigger than either jug it's also not possible. */
    if ((amount % gcd(jug2, jug1)) !== 0 || amount > jug2 || jug2 <= 0 || jug1 <= 0 || amount <= 0) return [];

    /* Return minimum two cases:
        a) Water of n liter jug is poured into m liter jug
        b) Vice versa of "a" 
    */
    const case1 = pour(jug2, jug1, amount);
    const case2 = pour(jug1, jug2, amount);

    return Math.min(case1.length, case2.length) === case1.length ? case1 : case2;
}