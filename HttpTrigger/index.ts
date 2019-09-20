import { createHandler } from "azure-function-express";
import * as express from "express";
import { getMapIntents } from "./intents/intents";

import { WebhookClient } from "dialogflow-fulfillment";

const app = express();

app.post("/api/HttpTrigger", (request, response) => {
	// Handle Function
	console.log(request.body);
	const agent = new WebhookClient({ request, response });
	agent.handleRequest(getMapIntents());
});

export default createHandler(app);
