test("adding 1+2 equals 3", () =>{
    expect(1 + 2).toBe(3);
    });

describe("First failing with Jest", () => {
    test("adding 1+1 does not equal 3", () =>{
        expect(1 + 1).toBe(3);
    });
});