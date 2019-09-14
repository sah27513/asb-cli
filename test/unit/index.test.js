import * as asb from "asb";
import { MissingConnection } from "src/errors";
import { config as env } from "dotenv";
import chalk from "chalk";
import azure from "azure";

// Import Local Dependencies
import * as shared from "src/shared/azure";

// Import Mock Data
import { serviceBus } from "test/data";

// Mock Modules
jest.mock("azure");

// Instantiate Variables
let main;

describe("Azure Service Bus CLI", () => {
  beforeEach(() => {
    // Spy On the main function
    main = jest.spyOn(asb, "asb");

    // Mock the return values
    jest.spyOn(global.console, "log").mockReturnValue("");
    jest.spyOn(shared, "createServiceBus").mockReturnValue(serviceBus);
  });

  afterEach(() => {
    jest.restoreAllMocks();

    // Restore the Environment
    env();
  });
  /**
   * General
   */
  test("It Can Call the ServiceBus method to create a Service Bus instance", async next => {
    // Run the test
    main();

    // Assertions
    expect(shared.createServiceBus).toHaveBeenCalledWith(azure);
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
});
