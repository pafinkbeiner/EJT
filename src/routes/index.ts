import * as express from "express";
const router = express.Router();
import { JsonDB } from "node-json-db";
import { Config } from "node-json-db/dist/lib/JsonDBConfig";
const db = new JsonDB(new Config("myDataBase", true, true, "/"));

/* GET home page. */
router.get("/", function(req, res, next) {

  test();

  res.render("index", { title: "Index Page" });
});

const obj = [
  {
    id: "ladklskda",
    name: "asdasdsadasda",
    ip: "rtretetr",
    desc: "llöllöölöll",
  },
  {
    id: "452332r32r",
    name: "asdasdsadasda",
    ip: "rtretetr",
    desc: "llöllöölöll",
  },
  {
    id: "43r3rüüüüpüüüü",
    name: "asdasdsadasda",
    ip: "rtretetr",
    desc: "llöllöölöll",
  }
];

function test() {

  if (obj != null) {

    for (let i = 0; i < obj.length; i++) {
      db.push(`/data/firewallObjects[${i}]`, {
        id: obj[i].id,
        name: obj[i].name,
        ip: obj[i].ip,
        desc: obj[i].desc
      });
    }
  }

  console.log(db.getData("/data/firewallObjects"));

  const data: [{id: string, name: string, ip: string, desc: string}] = db.getData("/data/firewallObjects");

  const index: number = data.findIndex((item) => item.id == "452332r32r");

  console.log(index);

  if (index != -1) {
  db.delete(`/data/firewallObjects[${index}]`);
  }

  console.log(db.getData("/data/firewallObjects"));

}

export default router;
