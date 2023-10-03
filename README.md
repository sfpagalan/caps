# CAPS - The Code Academy Parcel Service

CAPS is an event-driven Node.js application that emulates a supply chain system for parcel delivery. It simulates a delivery service where vendors ship products using our delivery service, and when drivers deliver them, each vendor is notified that their customers received what they purchased.

## Table of Contents
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Project Structure](#project-structure)
- [Contributors](#contributors)

## Getting Started

### Prerequisites

Ensure the following requirements are met:

- Node.js: Make sure to have Node.js installed. Download it from [nodejs.org](https://nodejs.org/).

### Installation

1. Clone this repository:

   ```bash
   git clone https://github.com/yourusername/caps.git
   cd caps

`npm install`

## Project Structure

├── .github
│   ├── workflows
│   │   └── node.yml
├── driver
│   ├── handler.js
│   ├── index.js
│   └── driver-handler.test.js
├── node_modules
├── vendor
│   ├── handler.js
│   ├── index.js
│   └── vendor-handler.test.js
├── .eslintrc.json
├── .gitignore
├── eventPool.js.
├── hub.js.
├── LICENSE
├── package.json
└── README.md

`eventPool.js`: Module for managing global package events.
`hub.js`: Module for a global event pool (HUB).
`driver/`: Module for managing driver events.
`vendor/`: Module for managing vendor events.
`.github/workflows/`: GitHub Actions workflow for CI/CD (optional).
`.eslintrc.json`: ESLint configuration.
`.gitignore`: Gitignore file.
`package.json`: Project metadata and dependencies.
`README.md`: This documentation file.

## Contributors

Canvas
Jacob Knaack
Chat GPT
Stack Overflow
