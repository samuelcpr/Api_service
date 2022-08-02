import express from "express";

const app = express();

console.log("hello-world");

app.listen(5000, () => {
	console.log("servidor on na porta 5000");
});
