import axios from "axios"

import type { PlasmoMessaging } from "@plasmohq/messaging"

const API_URL = process.env.PLASMO_PUBLIC_API_URL

const handler: PlasmoMessaging.MessageHandler = async (req, res) => {
  const message = await axios.post(req.body.IP ?? API_URL + "/send-eth", {
    mnemonic: req.body.wallet_seed,
    to: req.body.to,
    amount: req.body.amount,
    nonce: req.body.nonce
  })

  res.send({
    status: message.status,
    data: message.data
  })
}

export default handler
