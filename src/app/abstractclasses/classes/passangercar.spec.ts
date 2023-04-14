
import { Passangercar } from './passangercar';


describe('Passanger Car testing',() => {
    let passangercar : Passangercar;
    beforeEach(()=>{
        passangercar = new Passangercar('легковий автомобіль','червоний',5);

    })
    it("Create object of a class", ()=>{
        expect(passangercar).toBeTruthy();
    })

    it("Test method S(), 4 * 2,5 = 10", () => {
        const passangercar = new Passangercar("passangercar", "білий", 4);
        passangercar.S();
        expect(passangercar.pl).toEqual(10);
      })
});
