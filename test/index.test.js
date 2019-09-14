import * as asb from "asb";
import { MissingConnection } from "src/errors";
import { config as env } from "dotenv";
import azure from "azure";
import chalk from "chalk";

// Import Mock Data
import { serviceBus } from "test/data";

// Instantiate Variables
let main;

describe("Azure Service Bus CLI", () => {
  beforeEach(() => {
    main = jest.spyOn(asb, "asb");
    jest.spyOn(azure, "createServiceBusService").mockReturnValue(serviceBus);
    jest.spyOn(global.console, "log");
  });

  afterEach(() => {
    jest.restoreAllMocks();

    // Restore the Environment
    env();
  });
  /**
   * General
   */
  test("It Can connect to Azure Service Bus", async next => {
    // Run the test
    main();

    // Assertions
    expect(console.log).toHaveBeenCalledWith(
      chalk.green("info:"),
      chalk.grey("Successfully Connected to:"),
      serviceBus.host
    );

    // Complete the Test
    next();
  });

  test("Throws an error when AZURE_SERVICEBUS_CONNECTION_STRING is empty or null", async next => {
    // Setup the test
    delete process.env.AZURE_SERVICEBUS_CONNECTION_STRING;

    // Assertions
    expect(main).toThrow(new MissingConnection());

    // Complete the Test
    next();
  });

  /**
   * Topics
   */
  test("It can Create a Topic", async next => {
    // Complete the Test
    next();
  });
});
