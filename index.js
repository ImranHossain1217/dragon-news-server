const express = require("express");
const app = express();
const port = process.env.PORT || 5000;
const category = require('./Data/category.json');
app.get('/',(req,res) => {
    res.send([
        {
          "id": "01",
          "name": "Breaking News"
        },
        {
          "id": "02",
          "name": "Regular News"
        },
        {
          "id": "03",
          "name": "International News"
        },
        {
          "id": "04",
          "name": "Sports"
        },
        {
          "id": "05",
          "name": "Entertainment"
        },
        {
          "id": "06",
          "name": "Culture"
        },
        {
          "id": "07",
          "name": "Arts"
        },
        {
          "id": "08",
          "name": "All News"
        }
      ]);
});

app.get("/news-category",(req,res)=>{
    res.send([
        {
          "id": "01",
          "name": "Breaking News"
        },
        {
          "id": "02",
          "name": "Regular News"
        },
        {
          "id": "03",
          "name": "International News"
        },
        {
          "id": "04",
          "name": "Sports"
        },
        {
          "id": "05",
          "name": "Entertainment"
        },
        {
          "id": "06",
          "name": "Culture"
        },
        {
          "id": "07",
          "name": "Arts"
        },
        {
          "id": "08",
          "name": "All News"
        }
      ]);
});
app.listen(port,()=>{
    console.log("Dregon news port:",port);
});