import * as azureMethods from "src/shared/azure";
import azure from "azure";

// Import the Mock Data
import { serviceBus } from "test/data";

// Mock Modules
jest.mock("azure");

// Instantiate the Spies
let serviceBusInstance;

describe("Azure Methods", () => {
  beforeEach(() => {
    // Spy on the Service Bus Method
    serviceBusInstance = jest.spyOn(azureMethods, "createServiceBus");

    // Mock The Service Bus Instance
    azure.createServiceBusService.mockReturnValue(serviceBus);
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  test("It Creates a Service Bus Instancs", async next => {
    // Run the test
    const result = serviceBusInstance(azure);

    // Assertions
    expect(result).toBe(serviceBus);

    // Complete the test
    next();
  });
});
