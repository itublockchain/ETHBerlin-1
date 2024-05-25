import { fakerEN as faker } from "@faker-js/faker"

interface Token {
  label: string
  wallet_address: string
  amountCurrency: string
  image: string
}

const walletsMock: Token[] = []

Array.from(Array(12))
  .fill(0)
  .forEach(() => {
    const label = faker.helpers.arrayElement(["eth", "btc", "usdt"])
    const amount = faker.number.int({ min: 1, max: 1000 })
    const wallet_address = "0x" + faker.string.alphanumeric({ length: 20 })
    const amountCurrency = "$" + (amount * 3).toFixed(2)
    const image = faker.image.avatar()
    walletsMock.push({ label, wallet_address, amountCurrency, image })
  })

export default walletsMock
