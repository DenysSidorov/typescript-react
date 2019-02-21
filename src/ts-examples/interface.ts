interface IUser {
    id: number;
    name: string;
    getFullName(surname: string): string;
}
let employee: IUser = {

    id: 1,
    name: "Alice",
    getFullName : function (surname: string): string {
        return this.name + " " + surname;
    }
}

let fullName = employee.getFullName("Tompson");
console.log(fullName); // Alice Tompson