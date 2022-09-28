export default function handler(req, res) {
    const id = +req.query.id
    res.status(200).json([100,200,300,400])
}