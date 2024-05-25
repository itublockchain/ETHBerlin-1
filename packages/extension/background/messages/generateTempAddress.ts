import axios from "axios"

import type { PlasmoMessaging } from "@plasmohq/messaging"

const API_URL = process.env.PLASMO_PUBLIC_API_URL

const handler: PlasmoMessaging.MessageHandler = async (req, res) => {
  let nonce = req.body.nonce

  if (req.body.type === "increase") {
    nonce++
  }

  const message = await axios.post(
    (req.body.IP ?? API_URL) + "/generateTempAddress",
    {
      nonce: nonce,
      mnemonic: req.body.wallet_seed
    }
  )

  res.send({
    nonce: nonce
  })
}

export default handler
