let styles = new Array("Jazz", "Blues");
console.log(styles)

styles.push("Rock-n-Roll");
console.log(styles)

styles[Math.floor((styles.length - 1) / 2)] = "Classics";
console.log(styles)

console.log(styles.shift());
console.log(styles)

styles.unshift("Rap", "Reggae");
console.log(styles)