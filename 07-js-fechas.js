const now = new Date()
const myBirthday = new Date("07/19/1989")
const isMayorOfMyBirthdat = now.getTime() > myBirthday.getTime()
const myDayOfBirthday = myBirthday.getUTCDate()
const myMonthOfBirthday = myBirthday.getUTCMonth() + 1
const myYearOfBirthday = myBirthday.getUTCFullYear() 

console.log(myYearOfBirthday)
console.log(myDayOfBirthday)
console.log(myMonthOfBirthday)
console.log(isMayorOfMyBirthdat)