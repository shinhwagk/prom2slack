import * as schema from "../src/schema"

import * as t from "../src/plugins/ash-sql"
import * as tt from "../src/plugins/default"

const alertSchema: schema.AlertSchema = {
    status: "resolved",
    labels: { alertname: "ash-sql", db_name: "zfjs", inst: "1", sql_id: "xxx", event: "event" },
    annotations: { description: "xxx", value: "aaa" },
    startsAt: 1111,
    endsAt: 22222,
    generatorURL: "aaaa"
}

console.info(t.t.template(alertSchema))
console.info(tt.t.template(alertSchema))
