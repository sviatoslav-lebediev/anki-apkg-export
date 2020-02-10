import Exporter from "./exporter";
import createTemplate from "./template";

const sql = require("sql.js");

export { Exporter };

export default function(deckName, template) {
  return new Exporter(deckName, {
    template: createTemplate(template),
    sql
  });
}
