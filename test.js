const openpgp = require("openpgp");

describe("generate key", () => {
  it("should work", async () => {
    const { publicKeyArmored, privateKeyArmored } = await openpgp.generateKey({
      userIds: [{ name: "Me", email: "me@mydomain.com" }],
    });
  });
});
