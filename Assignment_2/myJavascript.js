function myFunction() {
  const myNav = document.getElementById("navigator");
  const myNavState = myNav.style.display;
  if (myNavState == "block")
    myNav.style.display = "none";
  else
    myNav.style.display = "block";
}
