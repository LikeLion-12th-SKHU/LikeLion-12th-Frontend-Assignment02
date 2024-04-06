// 1번
const styles = ["Jazz", "Blues"]
console.log(styles)

// 2번
styles.push("Rock-n-Roll")
console.log(styles)

// 3번
styles.map(() => {
    if (styles.length === 1){
        return styles = ["Classics"]
    }

    else if (styles.length % 2 === 1){
        return styles[Math.floor(styles.length / 2)] = "Classics"
    }
})
console.log(styles)


// 4번
styles.shift()
console.log(styles)

// 5번
styles.unshift('Rap', 'Raggae')
console.log(styles)