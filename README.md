---

# hex86-auth-utilities

[![npm version](https://img.shields.io/npm/v/hex86-auth-utilities.svg)](https://www.npmjs.com/package/hex86-auth-utilities)
[![license](https://img.shields.io/npm/l/hex86-auth-utilities.svg)](./LICENSE)

A lightweight utility package that wraps **bcrypt**, **jsonwebtoken**, and **uuid** to give you the essentials for **authentication, session management, and unique ID generation** in your Node.js web apps.

---

## 🚀 Why this package?

Instead of repeatedly configuring and importing `bcrypt`, `jsonwebtoken`, and `uuid` separately, this package gives you a **ready-to-use wrapper** with the most common operations.

This package is meant for **getting started quickly** with auth and sessions (with plans to expand in the future).

---

## ✨ Features

* 🔑 **bcrypt** → Hash and compare passwords securely.
* 🛡 **jsonwebtoken** → Create and verify JSON Web Tokens.
* 🆔 **uuid** → Generate universally unique IDs (UUID v4).

---

## 📦 Installation

```bash
npm install hex86-auth-utilities
```

---

## 📖 Usage

```js
import { uuid, jwtSign, jwtVerify, hashPwd, comparePwd } from "hex86-auth-utilities";

const run = async () => {
  // Password hashing
  const hashedPassword = await hashPwd(10, "HelloWorld");
  const isMatch = await comparePwd("HelloWorld", hashedPassword);

  // JWT handling
  const token = jwtSign({ id: 1, name: "Hex" }, "super-secret-key");
  const decoded = jwtVerify(token, "super-secret-key");

  // UUID
  const uniqueId = uuid();

  console.log({
    hashedPassword,
    isMatch,
    token,
    decoded,
    uniqueId,
  });
};

run();
```

---

## 🛠 Development

To clone and modify locally:

```bash
git clone https://github.com/SeveredSeikyo/hex86-auth-utilities.git
cd hex86-auth-utilities
npm install
```

You can then link it locally for testing:

```bash
npm link
```

---

## 🤝 Contributing

Contributions are welcome!

* Open an issue for bugs/feature requests.
* Submit a PR with improvements.

---

## 📜 License

This project is licensed under the **ISC License**.

---