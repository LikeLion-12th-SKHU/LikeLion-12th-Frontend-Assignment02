let styles = ['Jazz', 'Blues']
console.log(styles)


styles.push('Rock-n-Roll')
console.log(styles)


let len = styles.length
let mid = Math.floor(len / 2)
styles[mid] = 'Classics'
console.log(styles)


styles.shift()
console.log(styles)


styles.unshift('Rap', 'Reggae')
console.log(styles)

