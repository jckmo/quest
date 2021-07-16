const lifeStatus = Number(process.argv[2])

switch (lifeStatus) {
  case 0: 
    console.log('alive')
    break
  case 1: 
    console.log('flowering')
    break
  case 2: 
    console.log('shedding')
    break
  case 3: 
    console.log('other')
    break
}