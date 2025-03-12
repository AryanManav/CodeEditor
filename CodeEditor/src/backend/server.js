import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import compiler from "compilex";

const app = express();
const port = 3000;

// Initialize Compilex
compiler.init({ stats: true });

app.use(cors());
app.use(bodyParser.json());

app.get("/", (req, res) => {
    res.send("Hello World!");
});

app.post("/", (req, res) => {
    const code = req.body.code;
    const language = req.body.lan;
    console.log("Received Code:", code);
    console.log("Language:", language);

    if (!code || !language) {
        return res.status(400).send({ error: "Missing code or language." });
    }

    if (language === "python") {
        const envData = { OS: "windows" };
        compiler.compilePython(envData, code, (data) => {
            console.log("Python Output:", data);
            res.send(data);
        });

    } else if (language === "java") {
        const envData = { OS: "windows" };

        // Ensure the Java code has a `Main` class for execution
        const wrappedCode = code.includes("class Main")
            ? code
            : `public class Main { public static void main(String[] args) { ${code} } }`;

        compiler.compileJava(envData, wrappedCode, (data) => {
            console.log("Java Output:", data);
            if (data.error) {
                console.error("Compilation Error:", data.error);
                return res.status(500).send({ error: data.error });
            }
            res.send(data);
        });

    } else {
        return res.status(400).send({ error: "Unsupported language." });
    }
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
