const findTheOldest = function(people) {
    people.sort((person1, person2) => {
        let person1Age;
        let person2Age;
        if (!("yearOfDeath" in person1)) {
            person1Age = 2024 - person1.yearOfBirth;
        }
        if (!("yearOfDeath" in person2)) {
            person2Age = 2024 - person2.yearOfBirth;
        }
        person1Age = person1Age ? person1Age : person1.yearOfDeath - person1.yearOfBirth;
        person2Age = person2Age ? person2Age : person2.yearOfDeath - person2.yearOfBirth;

        return person1Age > person2Age ? -1 : 1;
    });

    return people[0];
};

// Do not edit below this line
module.exports = findTheOldest;
