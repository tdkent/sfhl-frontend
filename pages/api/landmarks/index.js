const { landmarks } = require('./data.json')

export default function handler(req, res) {
  if (req.method === 'GET') res.status(200).json(landmarks)
  else {
    res.setHeader('Allow', ['GET'])
    res.status(405).json({ message: `Method ${req.method} is not allowed.` })
  }
}
