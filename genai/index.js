import { Tiktoken } from "js-tiktoken/lite";
import o200k_base from "js-tiktoken/ranks/o200k_base";

const enc = new Tiktoken(o200k_base);

//use dom
const userQuery = "hey buddy welcome to code baithak" //request of user

const tokens = enc.encode(userQuery);
console.log(tokens); //loop array

console.log( enc.decode(tokens), "deceoded" ); //display

