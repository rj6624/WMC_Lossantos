import express from "express";
import bodyParser from "body-parser";
// import pg from "pg";

// Get the directory name of the current module file
// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);

const app = express();
const port = 3000;

// Database connection
// const db = new pg.Client({
//     user: "postgres",
//     host: "localhost",
//     database: "WMC_LOGIN",
//     password: "jayrupareliya",
//     port: 5432,
// });

// db.connect();

// Serve static files
// app.use(express.static(path.join(__dirname, "public")));
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// app.get("/", (req, res) => {
//     res.render("Login.ejs", {
//         heading: "Login",
//         button: "Login"
//     });
// });

app.get("/", (req, res) => {
    res.render("Home_page.ejs");
});

app.get("/cart", (req, res) => {
    res.render("CART.ejs");
});

app.get("/penthouses", (req, res) => {
    res.render("Penthouse.ejs");
});

app.get("/cars", (req, res) => {
    res.render("Cars.ejs");
});

app.get("/buy/car", (req, res) => {
    res.render("BUY_CAR.ejs");
});

app.get("/buy/plan", (req, res) => {
    res.render("BUY_PLAN.ejs");
});

app.get("/buy/yatch", (req, res) => {
    res.render("BUY_YATCH.ejs");
});

app.get("/buy/penthouse", (req, res) => {
    res.render("BUY_PENTHOUSE.ejs");
});

app.get("/sell/car", (req, res) => {
    res.render("SELL_CAR.ejs");
});

app.get("/sell/plan", (req, res) => {
    res.render("SELL_PLAN.ejs");
});

app.get("/sell/yatch", (req, res) => {
    res.render("SELL_YATCH.ejs");
});

app.get("/sell/penthouse", (req, res) => {
    res.render("SELL_PENTHOUSE.ejs");
});

app.get("/plans", (req, res) => {
    res.render("Plans.ejs");
});

app.get("/yatches", (req, res) => {
    res.render("Yatches.ejs");
});

app.get("/profile", (req, res) => {
    res.render("PROFILE.ejs");
});

app.get("/car/car1", (req, res) => {
    res.render("CAR_1.ejs");
});

app.get("/plan/plan1", (req, res) => {
    res.render("PLAN_1.ejs");
});

app.get("/yatch/yatch1", (req, res) => {
    res.render("YATCH_1.ejs");
});

app.get("/penthouse/penthouse1", (req, res) => {
    res.render("PENTHOUSE_1.ejs");
});


app.listen(port, () => {
    console.log(`Backend server is running on http://localhost:${port}`);
  });

// app.get("/penthouses/house1/profile", (req, res) => {
//     res.render("User_profile.ejs");
// });

// app.get
// app.get("/login", (req, res) => {
//     res.render("Login.ejs", {
//         heading: "Login",
//         button: "Login"
//     })
// })

// app.post("/login", (req, res) => {

// })
