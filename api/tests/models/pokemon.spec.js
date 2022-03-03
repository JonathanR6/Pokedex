const { Pokemon, Type, conn } = require("../../src/db.js");
const { expect } = require("chai");

describe("Pokemon model", () => {
  before(() =>
    conn.authenticate().catch((err) => {
      console.error("Unable to connect to the database:", err);
    })
  );
  describe("Validators", () => {
    beforeEach(() => Pokemon.sync({ force: true }));
    describe("name", () => {
      it("should throw an error if name is null", (done) => {
        Pokemon.create({})
          .then(() => done(new Error("It requires a valid name")))
          .catch(() => done());
      });
      it("should work when its a valid name", () => {
        Pokemon.create({ name: "pikachu" });
      });
    });
  });
});

describe("Type model", () => {
  it("type name not null", (done) => {
    Type.create({})
      .then(() => done(new Error("It requires a valid name")))
      .catch(() => done());
  });
  // it("name is valid", (done) => {
  //   Type.create({ name: "fire" })
  //     .then(() => done())
  //     .catch(() => done(new Error("name is valid")));
  // });
});
