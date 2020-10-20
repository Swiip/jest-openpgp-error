const textEncoding = require("text-encoding-utf-8");

window.TextEncoder = textEncoding.TextEncoder;
window.TextDecoder = textEncoding.TextDecoder;

const openpgp = require("openpgp");

describe("generate key", () => {
  it("should work", async () => {
    const keys = await openpgp.generateKey({
      userIds: [{ name: "Me", email: "me@mydomain.com" }],
    });
    const message = openpgp.message.fromText("test");
    const result = await openpgp.encrypt({
      message,
      publicKeys: keys.key,
      compression: openpgp.enums.compression.zip,
    });
  });
});
