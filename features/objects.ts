// we can use inferred types
const profile = {
  name: 'Alex',
  age: 30,
  coords: {
    lat: 0,
    lng: 0,
  },
  // we set the return type for function though
  setAge(age: number): void {
    this.age = age;
  },
};

// Destructuring nested objects
const { age }: { age: number } = profile;
const {
  coords: { lat, lng },
}: { coords: { lat: number; lng: number } } = profile;
