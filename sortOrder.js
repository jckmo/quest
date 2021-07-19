// const first = process.argv[2]
const first = 'cat'
// const second = process.argv[3]
const second = 'cats'

const sort = (firstV, secondV) => {
  let a = firstV.toLowerCase().split('')
  let b = secondV.toLowerCase().split('')

  let is

  for (let x = 0; x < a.length; x++) {
    if (a[x] > b[x]) {
      is = -1
    } else if (a[x] < b[x]) {
      is = 1
    } else if (a[x] == b[x]) {
      is = 0
    }
  }

  if (is == 0) {
    if (a.length > b.length) {
      is = 1
    } else if (a.length < b.length) {
      is = -1
    }
  }

  console.log(is)
}

sort(first, second)