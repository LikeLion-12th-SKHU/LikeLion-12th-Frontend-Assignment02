// 1번
const styles = ["Jazz", "Blues"]
console.log(styles)

// 2번
styles.push("Rock-n-Roll")
console.log(styles)

// 3번
styles.map(() => {
    if (styles.length === 1)
        return styles = ["Classics"]

    if (styles.length % 2 === 1)
        return styles[1] = "Classics"
})
console.log(styles)


// 4번
styles.shift()
console.log(styles)

// 5번
styles.unshift('Rap', 'Raggae')
console.log(styles)