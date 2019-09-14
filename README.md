# Azure Service Bus CLI (asb-cli)

> Utility for creating Topics, Queues, and Subscriptions with an instance of Azure Service Bus (ASB)

Lead Maintainer: [Stephen Halliburton](mailto:sah27513@gmail.com)

---

[![npm version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Dependency Status][daviddm-image]][daviddm-url] [![Coverage percentage][coveralls-image]][coveralls-url]

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

MIT © [stephen halliburton]()

[npm-image]: https://badge.fury.io/js/npm.svg
[npm-url]: https://badge.fury.io/js/npm
[travis-image]: https://travis-ci.com/sah27513/asb-cli.svg?branch=master
[travis-url]: https://travis-ci.com/sah27513/asb-cli
[daviddm-image]: https://david-dm.org/sah27513/asb-cli.svg?theme=shields.io
[daviddm-url]: https://david-dm.org/sah27513/asb-cli
