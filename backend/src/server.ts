import express from "express";
import cors from "cors";
import path from "path";

const app = express();

const PORT: number = Number(process.env.BACKEND_PORT) || 5000;
const APP_NAME: string = process.env.APP_NAME || "Admin Portal";

app.set("view engine", "ejs");

app.set("views", path.join(__dirname, "../views"));

app.locals.appName = APP_NAME;

app.use(express.static(path.join(__dirname, "..", "public")));

app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(express.json());

app.get("/admin/login", (req, res) => {
    res.render("admin-login", {
        errorMessage: null
    });
});

app.listen(PORT, "0.0.0.0", () => {
    console.log(`Backend running on port ${PORT}`);
});