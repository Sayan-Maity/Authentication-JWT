const express = require("express")
const app = express()
const dotenv = require("dotenv");
dotenv.config();
const PORT = process.env.PORT || 3002
const cors = require("cors")
const bodyParser = require("body-parser");
const auth = require("./routes/auth")
const post = require("./routes/post")



// middlewares
app.use(express.json())
app.use(cors())
app.use(bodyParser.urlencoded({extended: true}))
app.use("/auth", auth)
app.use("/posts", post)


app.get("/", (req, res) => {
    res.status(200).send("You have landed on Sayan Maity's 👦 Portfolio Server !")
})



// Database connection
// mongoose.connect(process.env.MONGODB_URI)
// .then(() => {
//     console.log("Database connected")
// })
// .catch((err) => {
//     console.log(err)
// })

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})