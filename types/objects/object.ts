const person: {
  age: number;
  name: string;
  hobbies: string[];
  role: [number, string]; ///Tuple
} = {
  age: 30,
  name: "Fernando",
  hobbies: ["Sports", "Cooking"],
  role: [2, "author"],
};
console.log(person);

var favoriteActivities: string[] = ["Sports", "Cooking"];
//person.role[0]=10;
// person.role.push([3, "admin"]);
console.log(person.role);

for (let hobby of person.hobbies) {
  console.log(hobby);
}
