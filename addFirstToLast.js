const addFirstToLast = array => {
  if (array.length > 0) {
    let firstAndLast = array[0] + array[array.length -1]
    return firstAndLast
  } else {
    return ""
  }
}