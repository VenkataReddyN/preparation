//Input: nums1 = [1,3], nums2 = [2]
//Output: 2.00000
//Explanation: merged array = [1,2,3] and median is 2.

//Input: nums1 = [1,2], nums2 = [3,4]
//Output: 2.50000
//Explanation: merged array = [1,2,3,4] and median is (2 + 3) / 2 = 2.5.

function median(a, b) {
    let c = [...a, ...b];
    c = c.sort((a, b) => a - b);
    console.log("c", c);
    if (c.length % 2 == 0) {
        console.log("c.length::" + c.length % 2)
        let t = parseInt(c.length / 2);
        return (c[t - 1] + c[t]) / 2;
    } else {
        console.log("parseInt(c.length / 2)::: "+ parseInt((c.length-1) / 2))
        return c[parseInt((c.length -1)/ 2)];
    }
}

console.log("median", median([3, 4], [5,6,7]))