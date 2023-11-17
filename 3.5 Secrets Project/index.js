//To see how the final website should work, run "node solution.js".
//Make sure you have installed all the dependencies with "npm i".
//The password is ILoveProgramming
import bodyParser from "body-parser";
import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;
var authorized = false;
app.use(bodyParser.urlencoded({extended: true}));
app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/index.html")
    
});
function passwordCheck(req, res, next)
{
    const pwd = req.body["password"];
    if (pwd == "Subaru!2004")
    {
        authorized =true;
    }
    next();
}
app.use(passwordCheck);
app.post("/check", (req, res) => {
    if (authorized)
    {
        res.sendFile(__dirname + "/public/secret.html")
    }
    else{
        res.sendFile(__dirname + "/public/index.html")
    }
    
});
app.listen(port, () => {
    console.log(`Listening on port ${port}`);
  });