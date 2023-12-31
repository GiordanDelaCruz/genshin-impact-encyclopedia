import express from "express";
import axios from "axios";
import bodyParser from "body-parser";
import morgan from "morgan";
import {dirname} from "path";
import { fileURLToPath } from "url";

const app = express();
const port = process.env.PORT || 3000;
const __dirname = dirname(fileURLToPath(import.meta.url));  
const API_URL = "https://genshin.jmp.blue";

app.set("view engine", "ejs");      // Load EJS templates

/***********************************************************/
/******              Middlewares                      ******/
/***********************************************************/
app.use(express.static("public"));
app.use(morgan("dev"));
app.use(bodyParser.urlencoded({ extended: true }));

/***********************************************************/
/******             Route Handling                    ******/
/***********************************************************/
// Get Homepage
app.get("/", (req, res) => {
    try{
        res.render("home");
    }catch(error) {
        console.log(error);
    }
});

// Handle Character Query
app.post("/post-character", async (req, res) => {
    const character = req.body.character.toLowerCase().replace(" ", "-");
    try{
        const result = await axios.get(API_URL + "/characters/" + character);
        res.render("index", {
            name:  result.data.name,
            title: result.data.title, 
            vision: result.data.vision.toLowerCase(), 
            weapon: result.data.weapon.toLowerCase(), 
            gender: result.data.gender, 
            nation: result.data.nation, 
            affiliation: result.data.affiliation, 
            rarity: result.data.rarity, 
            release: result.data.release, 
            constellation: result.data.constellation, 
            birthday: result.data.birthday, 
            description: result.data.description, 
            imageName: character, 
            skillTalents: result.data.skillTalents, 
            passiveTalents: result.data.passiveTalents, 
            constellations: result.data.constellations
        });
    }catch(error) {
        console.log(error);
    }
});

// TESTING
app.get("/test", async (req, res) => {
    try{
        // const result = await axios.get(API_URL + "/characters/ganyu");
        // const image  = await axios.get(API_URL + "/characters/ganyu/card"); 
        // console.log("Printing image data:\n" + image.data )
        res.render("index", {
            mame: "ganyu"
            // name:  result.data.name,
            // title: result.data.title, 
            // vision: result.data.vision, 
            // weapon: result.data.weapon, 
            // gender: result.data.gender, 
            // nation: result.data.nation, 
            // affiliation: result.data.affiliation, 
            // rarity: result.data.rarity, 
            // release: result.data.release, 
            // constellation: result.data.constellation, 
            // birthday: result.data.birthday, 
            // description: result.data.description, 
            // image: image
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