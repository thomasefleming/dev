var message = 'Hello, TypeScript!';
console.log(message);

document.addEventListener("DOMContentLoaded", function() {
    document.body.style.opacity = 0;
    setTimeout(() => {
        document.body.style.transition = "opacity 1.5s ease";
        document.body.style.opacity = 1;
    }, 100);
});