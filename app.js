function isChecked() {
    const inputValue = document.querySelectorAll(".input input");
    const action = document.querySelector("a.submit");
    const n = inputValue.length;
    action.href = "./thank-you.html";
}