var findMedianSortedArrays = function(nums1, nums2) {
    const all = nums1.length + nums2.length;
    const target = all % 2 === 0 ? (all / 2) - 1 : Math.floor(all / 2);
    let jk = 0;
    let i = 0;
    let n1 = 0, n2 = 0;
    while(n1 < nums1.length && n2 < nums2.length) {
        let cur = 0;
        if (nums1[n1] < nums2[n2]) {
            cur = nums1[n1];
            if (n1 + 1 < nums1.length) {
                n1 ++;
            }
        } else {
            cur = nums2[n2];
            if (n2 + 1 < nums2.length) {
                n2 ++;
            }
        }
        if (i === target && all % 2 === 1) {
            return cur
        }
        if (jk) {
            return (jk + cur) / 2;
        }
        if (i === target && all % 2 === 0) {
            jk = cur;
        }
        i++;
    }
    console.log(n1, n2)
    // if (n1 < nums1.length) {
    //     let cur = nums1[n1];
    //     if (i === target && all % 2 === 1) {
    //         return cur
    //     }
    //     if (jk) {
    //         return (jk + cur) / 2;
    //     }
    //     if (i === target && all % 2 === 0) {
    //         jk = cur;
    //     }
    // }
};

console.log(findMedianSortedArrays([1, 2], [3, 4]))