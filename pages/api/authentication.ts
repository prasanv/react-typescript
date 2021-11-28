// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

interface authObjectProps {
  authToken: string;
  userId: number;
}

const authObject = {
  authToken: '23kj-nnu8-nf3u-n9uw4er3n',
  userId: 34543
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<authObjectProps>
) {
  res.status(200).json(authObject)
}
