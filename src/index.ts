import * as express from "express";
import routes from "./database/Routes"

const app = express()
app.use(express.json())
app.use(routes)



app.listen(3333, () => console.log('Server is running'))  
