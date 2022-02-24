import { getToken } from 'next-auth/jwt'
import type { NextApiRequest, NextApiResponse } from 'next'

const secret = process.env.SECRET

const jwt = async (req: NextApiRequest, res: NextApiResponse) => {
  const token = await getToken({ req, secret })
  res.send(JSON.stringify(token, null, 2))
}

export default jwt
