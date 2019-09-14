// ./lib/index.js
import { config as env } from "dotenv";
import { MissingConnection } from "src/errors";
import azure from "azure";
import chalk from "chalk";

// Local Dependencies
import { createServiceBus } from "src/shared";

// Configure Environment
env();

/**
 * Azure Service Bus Utility
 * @param {array} args -- Array of Command Line ARGS
 */
export function asb() {
  // Check if the connection is Defined
  if (!process.env.AZURE_SERVICEBUS_CONNECTION_STRING) {
    throw new MissingConnection();
  }

  // Create an instance of Azure Service Bus
  const serviceBus = createServiceBus(azure);

  console.log(
    chalk.green("info:"),
    chalk.grey("Successfully Connected to:"),
    serviceBus.host
  );
}
