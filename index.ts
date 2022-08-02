import express from "express";

const app = express();

interface User {
	name: string;
	email: string;
}

app.get("/", (request, response) => {
	const { name, email }: User = request.body;
	const user = (user) => (user.name = name);
	if (!user) {
		return response.status(200).json({ message: "samuel" });
	}
});
