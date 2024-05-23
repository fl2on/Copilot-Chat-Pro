(() => {
    const urlPattern = {
        matches: [
            "*://www.bing.com/search*",
            "https://copilot.microsoft.com/*",
        ]
    };

    async function removeCharLimit() {
        try {
            const searchInput = document.querySelector("#sb_form_q");
            if (searchInput) searchInput.removeAttribute("maxlength");

            document.querySelector("#sb_chcounter_r")?.remove();

            const serp = document.querySelector("#b_sydConvCont > cib-serp");
            if (!serp) throw new Error("Elemento cib-serp no encontrado.");

            const actionBarMain = serp.shadowRoot.querySelector("#cib-action-bar-main");
            if (!actionBarMain) throw new Error("Elemento cib-action-bar-main no encontrado.");

            const textInput = actionBarMain.shadowRoot.querySelector("div > div.main-container > div > div.input-row > cib-text-input");
            if (!textInput) throw new Error("Elemento cib-text-input no encontrado.");

            const textarea = textInput.shadowRoot.querySelector("#searchbox");
            if (textarea) {
                textarea.removeAttribute("maxlength");
                textarea.setAttribute("aria-description", "∞");
            } else {
                throw new Error("Textarea con atributo 'maxlength' no encontrado.");
            }

            const letterCounter = actionBarMain.shadowRoot.querySelector("div > div.main-container > div > div.bottom-controls > div.bottom-right-controls > div.letter-counter");
            if (letterCounter) letterCounter.textContent = "∞";

        } catch (error) {
            console.error("Error:", error.message);
        }
    }

    const initializeExtension = () => removeCharLimit();

    setInterval(initializeExtension, 3000);
    window.addEventListener("load", initializeExtension);
    window.addEventListener("popstate", initializeExtension);
})();
