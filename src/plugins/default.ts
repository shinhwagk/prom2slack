import { AlertSchema } from "../schema";
import { MakeSlackTemplate } from "../tempalte"

const template = (as: AlertSchema) => {
  var text = ""
  for (const i in as.labels) {
    const label = i
    const value = as.labels[label]
    text += `${label}: ${value}\n`
  }
  return {
    text: text,
    color: "danger"
  }
}

export const t = MakeSlackTemplate("default", template)