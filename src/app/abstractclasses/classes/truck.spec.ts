import { Truck } from "./truck";

describe("Truck testing", () => {
  let truck: Truck;

  beforeEach(() => {
    truck = new Truck("вантажівка", "синя", 10);
  })

  it("Create an object of a TRUCK class", () => {
    expect(truck).toBeTruthy();
  })

  it("pl should be >=100 or <=108 ", () => {
    truck.S();
    expect(truck.pl).toBeGreaterThanOrEqual(100);
    expect(truck.pl).toBeLessThanOrEqual(108);
  })
});