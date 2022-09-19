interface Person {
    firstName: string;
    lastName: string;
    age: number;
    dateJoined?: Date;
    isTrustedByKarakan: boolean;
    address?: Address;
}

interface Address {
    street: string;
    houseNumber: string;
    postalCode: string;
    city: string;
}

export { Person };