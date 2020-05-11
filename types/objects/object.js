var person = {
    age: 30,
    name: "Fernando",
    hobbies: ["Sports", "Cooking"],
    role: [2, "author"]
};
console.log(person);
var favoriteActivities = ["Sports", "Cooking"];
//person.role[0]=10;
person.role.push("admin");
console.log(person.role);
for (var _i = 0, _a = person.hobbies; _i < _a.length; _i++) {
    var hobby = _a[_i];
    console.log(hobby);
}
