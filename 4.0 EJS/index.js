import express from "express";
const app = express();
const port = 4000;



app.get("/", (req, res) => {
  var today = new Date();
  var day = today.getDay();
  var typeOf = "a weekday";
  var adv = "it's time to work hard";
  if (day == 0 || day == 6)
  {
    typeOf = "a weekend";
    adv = "It's time to have some fun."
  
  }
  res.render("index.ejs", {
    dayType:typeOf,
    advice: adv,
  });
});
app.listen(port, () => {
    console.log(`Server started on port ${port}`);
  });