// export default function handler(req, res) {
  // const { pid } = req.query
//   res.end(`Post: ${pid}`)
// }

export default (req, res) => {
  const {
     query :{ pid },
  } = req

  res.end(`Post: ${pid}`)
}