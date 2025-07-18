import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import compiler from "compilex";

const app = express();
const port = 3000;

compiler.init({ stats: true });
app.use(cors());
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

// ==============================
// Verify Testcases Route
// ==============================
app.post("/verify", (req, res) => {
  const { code, lan, input, expectedOutput } = req.body;

  if (!code || !lan || !input || expectedOutput === undefined) {
    return res.status(400).json({ error: "Missing required fields" });
  }

  if (lan !== "java") {
    return res.status(400).json({ error: "Only Java is supported for now." });
  }

  const envData = { OS: "windows" };

  // Convert input (e.g., { nums: [2,7,11,15], target: 9 }) to Java-style args
  const inputStr = `new int[]{${input.nums.join(",")}}, ${input.target}`;

  // Replace main method with dynamic input from testcase
  const dynamicMain = `
public static void main(String[] args) {
    Solution obj = new Solution();
    int[] result = obj.twoSum(${inputStr});
    for (int value : result) {
        System.out.print(value + " ");
    }
}
`;

  // Inject new main into the code
  const codeWithDynamicMain = code.replace(/public\s+static\s+void\s+main\s*\(.*?\)\s*{[^}]*}/s, dynamicMain);

  compiler.compileJavaWithInput(envData, codeWithDynamicMain, "", function (data) {
    if (data.error) {
      return res.status(200).json({ correct: false, error: data.error });
    }

    let actual = data.output?.trim().split(" ").map(Number);
    let expected = expectedOutput;

    const isCorrect =
      actual.length === expected.length &&
      actual.every((val, idx) => val === expected[idx]);

    return res.status(200).json({ correct: isCorrect, output: actual });
  });
});

// ==============================
// Default Compilation Route
// ==============================
app.post("/", (req, res) => {
  const code = req.body.code;
  const language = req.body.lan;

  if (!code || !language) {
    return res.status(400).send({ error: "Missing code or language." });
  }

  if (language === "java") {
    const envData = { OS: "windows" };

    compiler.compileJava(envData, code, (data) => {
      if (data.error) {
        return res.status(500).send({ error: data.error });
      }
      res.send(data);
    });

  } else if (language === "python") {
    const envData = { OS: "windows" };
    compiler.compilePython(envData, code, (data) => {
      if (data.error) {
        return res.status(500).send({ error: data.error });
      }
      res.send(data);
    });

  } else {
    return res.status(400).send({ error: "Unsupported language." });
  }
});

app.listen(port, () => {
  console.log(`✅ Backend running on http://localhost:${port}`);
});
