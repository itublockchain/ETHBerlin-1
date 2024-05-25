import { fakerEN as faker } from "@faker-js/faker"

interface Token {
  label: string
  amount: number
  amountCurrency: string
  image: string
}

const tokensMock: Token[] = []

Array.from(Array(12))
  .fill(0)
  .forEach(() => {
    const label = faker.helpers.arrayElement(["eth", "btc", "usdt"])
    const amount = faker.number.int({ min: 1, max: 1000 })
    const amountCurrency = "$" + (amount * 0.34).toFixed(2)
    const image = faker.image.avatar()
    tokensMock.push({ label, amount, amountCurrency, image })
  })

export default tokensMock
