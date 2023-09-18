const button = document.querySelector("button")!;

const clickHandler = (message: string) => {
  console.log("ClickHandler clicked!!!" + message);
};

// a comment
// button.addEventListener("click", () => {
//   console.log("clicked!!");
// });

button.addEventListener("click", clickHandler.bind(null, "Your welcome!"));
