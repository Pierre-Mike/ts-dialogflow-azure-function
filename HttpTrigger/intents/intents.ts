import { fallback } from "./fallback";
import { welcome } from "./welcome";
import { reset } from "./reset";
import { WebhookClient } from "dialogflow-fulfillment";

export function getMapIntents(): Map<string, (agent: WebhookClient) => void> {
	let intentMap = new Map();
	intentMap.set("Default Welcome Intent", welcome);
	intentMap.set("Fallback", fallback);
	intentMap.set("reset", reset);
	return intentMap;
}
