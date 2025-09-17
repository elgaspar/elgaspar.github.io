window.addEventListener("load", () => {
    init();
});

function init() {
    setTimeout(() => {
        new Typed('#animated-text', {
            strings: [`Hello, I'm&nbsp;<span class="fullname">Elias Gasparis</span><br>I'm a software engineer&nbsp;`],
            typeSpeed: 50,
            onComplete: showButtons
        });
    }, 500);
}

function showButtons() {
    setTimeout(() => {
        document.querySelector('#cv-button-container').classList.add('show');
    }, 500);

    setTimeout(() => {
        document.querySelector('#social-container').classList.add('show');
    }, 1000);
}
