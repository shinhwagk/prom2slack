import * as http from "http"

import * as slack from "@slack/client"

import { MessageSchema } from "./schema";
import { plugins, defaultPlugin } from "./plugins"
import { ASToMA } from "./tempalte";

const WEBHOOK_PORT = process.env.WEBHOOK_PORT || 8888;
const WEBHOOK_EXTERNAL_URL = process.env.WEBHOOK_EXTERNAL_URL || "/alertmanager";

const url: string = process.env.SLACK_WEBHOOK_URL || "";
const webhook = new slack.IncomingWebhook(url);

http.createServer((req, res) => {
  if (req.method === "POST" && req.url === WEBHOOK_EXTERNAL_URL) {
    let rawData = '';
    req.on("data", (chunk) => { rawData += chunk; })
    req.on("end", () => {
      const ms = JSON.parse(rawData) as MessageSchema;
      ms.alerts.forEach(element => {
        const alertname: string = element.labels["alertname"]
        const plugin: ASToMA = plugins.get(alertname) || defaultPlugin.template
        const attachment: slack.MessageAttachment = plugin(element)
        webhook.send({ attachments: [attachment] });
      });
    })
  } else {
    res.writeHead(400);
    res.end('not ok');
  }
}).listen(WEBHOOK_PORT)