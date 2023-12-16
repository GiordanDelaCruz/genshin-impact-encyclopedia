import express from "express";
import axios from "axios";
import ejs from "ejs";
import bodyParser from "body-parser";
import morgan from "morgan";
import {dirname} from "path";
import { fileURLToPath } from "url";

const app = express();
const port = 3000;
const __dirname = dirname(fileURLToPath(import.meta.url));  
const API_URL = "https://genshin.jmp.blue";

app.set("view engine", "ejs");      // Load EJS templates

/***********************************************************/
/******              Middlewares                      ******/
/***********************************************************/
app.use(express.static("public"));
app.use(morgan("dev"));
// app.use(bodyParser)

/***********************************************************/
/******             Route Handling                    ******/
/***********************************************************/
// Get Homepage
app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html");
});

// TESTING
app.get("/test", async (req, res) => {
    try{
        const result = await axios.get(API_URL + "/characters/ganyu");
        res.render("index", {
            data: JSON.stringify(result.data)
        });
    }catch(error) {
        console.log(error);
    }
});

/***********************************************************/
/******              Start Server                     ******/
/***********************************************************/
app.listen( port, () => {
    console.log(`Server started on port ${3000}`);
});