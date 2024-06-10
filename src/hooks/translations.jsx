export const translate = (lang) => {
  if (lang == "ar") {
    sessionStorage.setItem("language", "en");
    const elements = document.getElementsByClassName("translated");
    for (let i = 0; i < elements.length; i++) {
      elements[i].style.direction = "ltr";
    }
  } else {
    sessionStorage.setItem("language", "ar");
    const elements = document.getElementsByClassName("translated");
    for (let i = 0; i < elements.length; i++) {
      elements[i].style.direction = "rtl";
    }
  }
  window.location.reload(false);
};
