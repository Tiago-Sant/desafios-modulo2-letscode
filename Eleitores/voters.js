const voters = [
  { name: 'Bob', age: 30, voted: true },
  { name: 'Jake', age: 32, voted: true },
  { name: 'Kate', age: 25, voted: false },
  { name: 'Sam', age: 20, voted: false },
  { name: 'Phil', age: 21, voted: true },
  { name: 'Ed', age: 55, voted: true },
  { name: 'Tami', age: 54, voted: true },
  { name: 'Mary', age: 31, voted: false },
  { name: 'Becky', age: 43, voted: false },
  { name: 'Joey', age: 41, voted: true },
  { name: 'Jeff', age: 30, voted: true },
  { name: 'Zack', age: 19, voted: false }]

const handler = (voters, people) => (totals, voter) => ({
  ...totals,
  [voters]: voter.voted ? totals[voters] + 1 : totals[voters],
  [people]: totals[people] + 1
})


const handlerYoung = handler('numYoungVotes', 'numYoungPeople')

const handlerMid = handler('numMidVotesPeople', 'numMidPeople')

const handlerOld = handler('numOldVotesPeople', 'numOldPeople')

const ageRang = (currentVoter, initialAge, finalAge) => currentVoter.age >= initialAge && currentVoter.age <= finalAge



function getResults(arr) {

  return arr.reduce(
    (acc, curr) => {

      if (ageRang(curr, 18, 25)) {
        return handlerYoung(acc, curr)
      }
      else if (ageRang(curr, 26, 35)) {
        return handlerMid(acc, curr)
      }
      else if (ageRang(curr, 36, 55)) {
        return handlerOld(acc, curr)
      }
    },
    {
      numYoungVotes: 0,
      numYoungPeople: 0,
      numMidVotesPeople: 0,
      numMidPeople: 0,
      numOldVotesPeople: 0,
      numOldPeople: 0
    }
  )
}

console.log(getResults(voters))

