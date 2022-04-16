import { createServer } from 'http'
import { handler } from './routes/index.js'
import 'dotenv/config'

const server = createServer(handler)
const PORT = process.env.PORT || 5000
const serverApi = () => {
  server.listen(PORT, () =>
    console.log(
      `Server is running on port  http://localhost:${PORT}${process.env.URL_API_V1}`
    )
  )
}

export default serverApi
