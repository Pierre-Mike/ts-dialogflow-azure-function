import { WebhookClient } from "dialogflow-fulfillment";

export function welcome(agent: WebhookClient): void {
	agent.add("hello express");
}
