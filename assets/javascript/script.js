const button = document.getElementById("button");
const signInButton = document.getElementById("signIn");
const registerButton = document.getElementById("btnRegister");
const registerPage = document.getElementsByClassName("right-register")[0];
const signInPage = document.getElementsByClassName("right-sign-in")[0];
let hasAccount = false;

registerButton.addEventListener("click", event => {
    if (!hasAccount) {
        // registerPage.style.display = "none";
        registerPage.style.left = "-100%";
        // signInPage.style.display = "flex";
        signInPage.style.right = "0px";
        hasAccount = true;
        button.innerHTML = "ثبت نام کنید"
    } else {
        // registerPage.style.display = "flex";
        registerPage.style.left = "0";
        // signInPage.style.display = "none";
        signInPage.style.right = "-100%";
        hasAccount = false;
        button.innerHTML = "وارد شوید"
    }
})

signInButton.addEventListener("click", (event) => {
    if (!hasAccount) {
        // registerPage.style.display = "none";
        registerPage.style.left = "-100%";
        // signInPage.style.display = "flex";
        signInPage.style.right = "0px";
        hasAccount = true;
        button.innerHTML = "ثبت نام کنید"
    } else {
        // registerPage.style.display = "flex";
        registerPage.style.left = "0";
        // signInPage.style.display = "none";
        signInPage.style.right = "-100%";
        hasAccount = false;
        button.innerHTML = "وارد شوید"
    }
})

button.addEventListener("click", (event) => {
    if (!hasAccount) {
        // registerPage.style.display = "none";
        registerPage.style.left = "-100%";
        // signInPage.style.display = "flex";
        signInPage.style.right = "0px";
        hasAccount = true;
        button.innerHTML = "ثبت نام کنید"
    } else {
        // registerPage.style.display = "flex";
        registerPage.style.left = "0";
        // signInPage.style.display = "none";
        signInPage.style.right = "-100%";
        hasAccount = false;
        button.innerHTML = "وارد شوید"
    }
});