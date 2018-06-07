const fullname = 'Keenan Humm';

// const getFirstName = (full) => {
//     return full.split(' ')[0];
// };

const getFirstName = (fullName) => (fullName.split(' ')[0]);

console.log(getFirstName(fullname));

const multiplier = {
    numbers : [1, 2, 3],
    multBy : 2,
    multiply(){
        return this.numbers.map((number)=>number*this.multBy);
    }
};

console.log(multiplier.multiply());