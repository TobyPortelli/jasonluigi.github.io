const myImage = document.querySelector("img");
myImage.onclick = () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/skyrim-logo.png") {
    myImage.setAttribute("src", "images/skyrim-logo2.png");
  } else {
    myImage.setAttribute("src", "images/skyrim-logo.png");
  }
};
let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");
function setUserName() {
    const myName = prompt("Please enter your name.");
    if (!myName) {
      setUserName();
    } else {
      localStorage.setItem("name", myName);
      myHeading.textContent = `Introduction To The Elder Scrolls 5: Skyrim, ${myName}`;
    }
  }
  if (!localStorage.getItem("name")) {
    setUserName();
  } else {
    const storedName = localStorage.getItem("name");
    myHeading.textContent = `Introduction To The Elder Scrolls 5: Skyrim, ${storedName}`;
  }
  myButton.onclick = () => {
    setUserName();
  };