import * as slack from "@slack/client"

import { AlertSchema } from "./schema";

export type ASToMA = (as: AlertSchema) => slack.MessageAttachment

export interface SlackTemplate {
  name: string
  template: ASToMA
}

export function MakeSlackTemplate(name: string, template: ASToMA): SlackTemplate {
  return { name: name, template: template }
}