// const nums = [1, 2, 3, 4, 5, 6, 7, 8];
// for (let i = 0; i < nums.length; i++) {
//     const element = nums[i];
//     if (nums[i] > 4) {
//         break;
//     }
//     console.log(element);
// }

const nums = [1, 2, -3, 4, -5, 6, 7, -8];
for (let i = 0; i < nums.length; i++) {
    const element = nums[i];
    if (nums[i] < 0) {
        continue;
    }
    console.log(element);
}