//never
let userInput: unknown;
let userName: string;

userInput = 5;
userInput = "Max";
if (typeof userInput === "string") {
  userName = userInput;
}

//specify that this function NEVER will return a value even nor undefined
function generateError(message: string, code: number): never {
  throw { message: message, errorCode: code };
}

generateError("An error ocurred", 500);
