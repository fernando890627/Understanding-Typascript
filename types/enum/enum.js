//Enum
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 1] = "ADMIN";
    Role[Role["READ_ONLY"] = 2] = "READ_ONLY";
    Role[Role["AUTHOR"] = 3] = "AUTHOR";
})(Role || (Role = {}));
var personEnum = {
    age: 30,
    name: "Fernando",
    hobbies: ["Sports", "Cooking"],
    role: Role.ADMIN
};
