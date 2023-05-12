import { Random} from './random'
describe("Random testing", () => {
    let random: Random;
    
    beforeEach(() => {
    random = new Random();
    });
    
    it("Test getRandomInt() method returns an integer within range", () => {
    const min = 0;
    const max = 10;
    const result = random.getRandomInt(max, min);
    expect(Number.isInteger(result)).toBe(true);
    expect(result).toBeGreaterThanOrEqual(min);
    expect(result).toBeLessThanOrEqual(max);
    });
    });