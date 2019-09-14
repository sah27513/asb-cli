import * as asb from "asb";

// Instantiate Variables
let main;

describe("Azure Service Bus CLI", () => {
  beforeEach(() => {
    // Spy on the Main method to see results
    main = jest.spyOn(asb, "asb");
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });
  /**
   * General
   */
  test("It Can connect to Azure Service Bus", async next => {
    // Run the test
    main();

    // Assertions

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
