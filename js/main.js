/*
 * Vänta på att sidan har laddats.
 * Läs mer, https://developer.mozilla.org/en-US/docs/Web/API/Window/load_event
 */
window.addEventListener('load', (event) => {
    console.log('page is fully loaded');

    // Hitta knappen i DOM-trädet och spara den i variabeln button.
    // Ett tips är att kunna och känna till vilka olika selectors vi kan använda.
    // Vad är ens en selector?
    // https://developer.mozilla.org/en-US/docs/Glossary/CSS_Selector
    // https://developer.mozilla.org/en-US/docs/Web/API/Element/querySelector
    let button = document.querySelector('.navbar-toggle');

    // skapa en listener på knappen och bind den till eventet "click"
    // https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener
    button.addEventListener('click', (e) => {
        e.preventDefault();
        console.log('Button is pressed');

        // hämta menyn
        let collapse = document.querySelector('.navbar-collapse');
        collapse.classList.toggle("collapse");

        // Om du vill byta ikonen för hamburgermeny eller färger så kan du göra det här.
        // antingen genom att manipulera klasser eller DOM
        // https://developer.mozilla.org/en-US/docs/Web/API/Element/classList
        // https://developer.mozilla.org/en-US/docs/Web/API/Document/createElement

    }, false);
});