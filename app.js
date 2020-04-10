const express = require('express');
const app = express();
app.set('view engine', 'ejs')


app.get("/", (req, res)=>{
    res.sendFile(__dirname + "/index.html");
});

app.get("/contact", (req, res)=>{
    res.sendFile(__dirname + "/contact.html")
});

app.get("/profile/:name", (req, res)=>{
    const data = {age: 45, job: "lacasa", hobbies: ['hikings', 'skydiving', 'eating']};
    res.render('profiles', {person: req.params.name, data: data});
});


const port = process.env.PORT || 3000
app.listen(port, () => {
    console.log(`server is running on port ${port}`)
});

