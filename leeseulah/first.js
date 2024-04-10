let styles = ["Jazz", "Blues"]

styles.push("Rock-n-Roll")

let half = Math.floor(styles.length / 2);

styles.splice(half, 1, "Classics");

console.log(styles.shift());

styles.unshift("Rap", "Reggae");