let myName: string;
let meaningOfLife: number;
let isLoading: boolean;
let album: any;

myName = "Mehedi";
meaningOfLife = 42;
isLoading = true;
album = true;

console.log(
  "myName:-",
  myName,
  "meaningOfLife:-",
  meaningOfLife,
  "isLoading:",
  isLoading,
  "album",
  album
);

const sum = (a: number, b: string) => {
  return a + b;
};

console.log(sum(3, "4"), "<==", typeof sum(3, "4"));

let postId: string | number;
let isActive: number | boolean;

let re: RegExp = /\w+/g;