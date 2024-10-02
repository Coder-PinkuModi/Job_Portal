import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser"
import dbConnect from "./config/db.js"

import userAuth from "./routes/userAuth.js"
import companyRoute from "./routes/companyRoute.js"
import jobRoute from "./routes/jobRoutes.js"
import applicationRoute from "./routes/applicationRoute.js"

const app= express()
const port= 3000

//middlewares
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cookieParser())

const corsOptions = {
    origin: "http://localhost:5173",
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true,
};

app.use(cors(corsOptions));

dbConnect()


app.use("/api/userAuth", userAuth)
app.use("/api/company", companyRoute)
app.use("/api/job", jobRoute)
app.use("/api/application", applicationRoute)

app.listen(port, ()=>console.log(`server started at port ${port}`))