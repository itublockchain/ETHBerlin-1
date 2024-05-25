import axios from "axios"

import type { PlasmoMessaging } from "@plasmohq/messaging"

const API_URL = process.env.PLASMO_PUBLIC_API_URL

const handler: PlasmoMessaging.MessageHandler = async (req, res) => {
  if (req.body.wallet_seed) {
    return res.send({
      message: {
        wallet_address: req.body.wallet_address,
        mnemonic: req.body.wallet_seed,
        nonce: req.body.nonce
      }
    })
  }
  const message = await axios.post(req.body.IP ?? API_URL + "/createMainWallet")

  res.send({
    message: { ...message?.data, nonce: req.body.nonce }
  })
}

export default handler
