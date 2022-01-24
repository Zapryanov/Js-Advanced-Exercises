function handler(req, res) {
    res.status(200).json({ message: 'This works from api/feedback.js' })
}

export default handler;