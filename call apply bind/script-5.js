const arr = [1, 2, 3];

const ans = Math.max.apply(null, arr); // 3
console.log(ans);

// 👉 = array ko tod ke values pass kar raha hai.

// Socho:

// Math.max = teacher 👨‍🏫
// Usko chahiye: 1,2,3 alag-alag
// Tumhare paas hai: [1,2,3] (ek dabba 📦)

// 👉 apply() = dabba khol deta hai 😄