export interface User {
  total_balance: number
  tokens: number[]
  wallet_address: `${"0x"}string`
}

export interface UserPartial extends Partial<User> {}
