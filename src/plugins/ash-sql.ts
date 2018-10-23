import { AlertSchema } from "../schema";
import { MakeSlackTemplate, ASToMA } from "../tempalte"
import request = require("request");
import * as fs from "fs";


const template: ASToMA = (as: AlertSchema) => {
  return {
    text: as.annotations.description,
    color: "danger",
    fields: [
      { title: "DBNAME", value: as.labels["db_name"], short: true },
      { title: "INST", value: as.labels["inst"], short: true },
      { title: "EVENT", value: as.labels["event"], short: true },
      { title: "SQLID", value: as.labels["sql_id"], short: true },
      { title: "VALUE", value: as.annotations.value, short: false },
    ],
    actions: [
      {
        text: "XPLAN",
        type: "button",
        value: ""
      }
    ]
  }
}

function pushXPlanToGoogleDrive(db_name: string, inst: string, sql_id: string) {
  const url = ""
  request.get(`${url}?db_name=${db_name}&inst=${inst}&sql_id=${sql_id}`)
    .pipe(fs.createWriteStream("xxx")).on("close", () => {

    })
}

export const t = MakeSlackTemplate("ash-sql", template)