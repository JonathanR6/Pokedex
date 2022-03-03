/* eslint-disable import/no-extraneous-dependencies */
const { expect } = require("chai");
const session = require("supertest-session");
const app = require("../../src/app.js");
const { Pokemon, conn } = require("../../src/db.js");

const agent = session(app);
const pokemon = {
  name: "pikachu",
};

describe("Pokemon routes", () => {
  before(() =>
    conn.authenticate().catch((err) => {
      console.error("Unable to connect to the database:", err);
    })
  );
  beforeEach(() =>
    Pokemon.sync({ force: true }).then(() => Pokemon.create(pokemon))
  );
  describe("GET /pokemons", () => {
    it("should get 200", () => {
      return agent.get("/pokemons").expect(200);
    });
  });
});

describe("Types routes", () => {
  it("GET /types expect array length 18", () => {
    return agent
      .get("/types")
      .expect(200)
      .expect((r) => expect(r.body).to.have.length(18));
  });
});
