// test.js
import { uuid, jwtSign, jwtVerify, hashPwd, comparePwd } from "./index.js";

const runTests = async () => {
  try {
    console.log("Started Workflow")
    console.log("🔍 Running tests...");

    // Test 1: UUID
    const id1 = uuid();
    const id2 = uuid();
    console.assert(id1 !== id2, "❌ UUIDs should be unique");
    console.log("✅ UUID test passed");

    // Test 2: Password hashing
    const password = "SuperSecret123";
    const hash = await hashPwd(10, password);
    console.assert(typeof hash === "string", "❌ Hash should be a string");

    const match = await comparePwd(password, hash);
    console.assert(match === true, "❌ Password should match hash");

    const mismatch = await comparePwd("WrongPassword", hash);
    console.assert(mismatch === false, "❌ Wrong password should not match hash");
    console.log("✅ Bcrypt test passed");

    // Test 3: JWT
    const secret = "test-secret";
    const payload = { userId: 42, role: "admin" };

    const token = jwtSign(payload, secret);
    console.assert(typeof token === "string", "❌ Token should be a string");

    const decoded = jwtVerify(token, secret);
    console.assert(decoded.userId === 42, "❌ Decoded payload should match");
    console.log("✅ JWT test passed");

    console.log("🎉 All tests passed successfully!");
    process.exit(0);
  } catch (err) {
    console.error("❌ Test failed:", err);
    process.exit(1);
  }
};

runTests();
