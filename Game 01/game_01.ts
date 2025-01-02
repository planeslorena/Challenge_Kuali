/**
 * This method find the first subset of 2 numbers of M which sum N
 * @param m array of integer numbers
 * @param n sum result
 */
const sumN = (m: number[], n: number) => {
    if (m.length == 0) {
        return 'El array esta vacio';
    }
    let result: Array<number>; 
    for (let i: number = 0; i < m.length; i++) {
        for (let j: number = i + 1; j < m.length; j++) {
            const sum = m[i] + m[j];
            if (sum == n) {
                result = [m[i], m[j]];
                return result;
            }
        };
    };
    return 'Ningun par de numeros suma ' + n;
}

console.log(sumN([2, 5, 8, 14, 0], 10));
