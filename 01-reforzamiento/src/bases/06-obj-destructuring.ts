

const person = {
    name: 'Tony',
    age: 45,
    key: 'Ironman'
};

// const name = person.name;
// const age = person.age;
// const key = person.key;
// console.log({ name, age, key });

const { name: ironmanName, age, key} = person;
console.log({ ironmanName, age, key });

interface Hero {
    name: string;
    age: number;
    key: string;
    rank?: string;
    // rank: string | undefined; //otra forma de definir que puede venir o no
};

const useContext = ({ key, name, age, rank = 'sin rango' } : Hero) => {
    return {
        keyName: key,
        user: {
            name,
            age,
        },
        rank: rank,
    };
};

const { rank, keyName, user: { name } } = useContext( person );
console.log({ rank, keyName, name });
