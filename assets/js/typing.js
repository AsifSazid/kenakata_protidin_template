document.addEventListener('DOMContentLoaded', function () {
    // Text to be displayed
    const text = "EAT & CHILL!!";

    // Get the element where the text will be displayed
    const typedTextElement = document.getElementById('typedText');

    function typeText() {
        // Set the text content to an empty string
        typedTextElement.textContent = "";

        // Type out each character with a delay
        for (let i = 0; i < text.length; i++) {
            setTimeout(function () {
                typedTextElement.textContent += text[i];
            }, i * 100); // Adjust the delay as needed
        }
    }

    // Call the typeText function initially
    typeText();

    // Set an interval to continuously loop the typing animation
    setInterval(typeText, text.length * 100 + 2000); // Adjust the delay as needed
});
