export default (req, res) => {
    const { 
    query: {pid}, } = req
    res.setHeader('Content-Type', 'application/json')
    res.statusCode = 200

    res.end(JSON.stringify({ name: `post-api ${pid}` }))
  }