const express = require("express")
const app = express()
const PORT = process.env.PORT || 3000
const path = require("path")

app.use(express.json())

app.use(express.urlencoded({ extended:true }))

app.use(express.static("public"))

// require("./routes/htmlroutes")(app)

    app.get("*", function(req,res){
        res.sendFile(path.join(__dirname, "public/notes.html"))
    })

    app.get("/notes", function(req,res){
        res.sendFile(path.join(__dirname, "public/notes.html"))
    })

app.listen(PORT,function(){
    console.log("listeningonport" + PORT)
})

