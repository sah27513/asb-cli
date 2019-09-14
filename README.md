# Azure Service Bus CLI (asb-cli)

> Utility for creating Topics, Queues, and Subscriptions with an instance of Azure Service Bus (ASB)

---

![NPM](https://img.shields.io/badge/npm-v6.3.0-blue)

## Table of Contents

- [Installation](#installation)
- [Features](#features)
- [FAQ](#faq)
- [Support](#support)
- [License](#license)

---

## Example

```shell
$ asb create YOUR_TOPIC_NAME
```

---

## Installation

- Make sure you have at least v10 of NodeJS installed, to install for [Mac OS](https://treehouse.github.io/installation-guides/mac/node-mac.html), [Windows](https://nodejs.org/en/download/), [Ubuntu](https://hackernoon.com/how-to-install-node-js-on-ubuntu-16-04-18-04-using-nvm-node-version-manager-668a7166b854)
-

### Clone

- Clone this repo to your local machine using `git clone https://github.com/sah27513/asb-cli`

### Setup

> Install the package globally

```shell
$ npm i -g asb-cli
```

---

## Features

- Creates Topics
- Creates Subscriptions for Topics
- Creates Queues

## Usage

```
asb create YOUR_QUEUE_NAME
```

## Tests

- To run the unit test: `npm test`

---

## FAQ

- **How do I Delete a Remove All Queues**
  - Run the following `asb remove all`

---

## Support

Reach out to me at the following:

- Email at <a href="mailto:sah27513@gmail.com" target="_blank">sah27513@gmail.com</a>

---

## License

[![License](http://img.shields.io/:license-mit-blue.svg?style=flat-square)](http://badges.mit-license.org)

- **[MIT license](http://opensource.org/licenses/mit-license.php)**
