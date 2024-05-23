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
            if (searchInput) {
                searchInput.removeAttribute("maxlength");
            } else {
                console.error("Entrada de búsqueda no encontrada.");
            }

            const elementToRemove = document.querySelector("#sb_chcounter_r");
            if (elementToRemove) {
                elementToRemove.remove();
            } else {
                console.warn("Elemento con ID 'sb_chcounter_r' no encontrado.");
            }

            const serp = document.querySelector("#b_sydConvCont > cib-serp");

            if (!serp) {
                throw new Error("Elemento cib-serp no encontrado.");
            }

            const serpShadowRoot = serp.shadowRoot;
            const actionBarMain = serpShadowRoot.querySelector("#cib-action-bar-main");

            if (!actionBarMain) {
                throw new Error("Elemento cib-action-bar-main no encontrado.");
            }

            const actionBarMainShadowRoot = actionBarMain.shadowRoot;
            const textInput = actionBarMainShadowRoot.querySelector("div > div.main-container > div > div.input-row > cib-text-input");

            if (!textInput) {
                throw new Error("Elemento cib-text-input no encontrado.");
            }

            const textInputShadowRoot = textInput.shadowRoot;
            const textarea = textInputShadowRoot.querySelector("#searchbox");

            if (textarea) {
                textarea.removeAttribute("maxlength");
                textarea.setAttribute("aria-description", "∞");
            } else {
                throw new Error("Textarea con atributo 'maxlength' no encontrado.");
            }

            const letterCounter = actionBarMainShadowRoot.querySelector("div > div.main-container > div > div.bottom-controls > div.bottom-right-controls > div.letter-counter");

            if (letterCounter) {
                letterCounter.textContent = "∞";
            } else {
                console.warn("Elemento .letter-counter no encontrado.");
            }
        } catch (error) {
            console.error("Error:", error.message);
        }
    }

    async function initializeExtension() {
        removeCharLimit();
    }

    const interval = setInterval(initializeExtension, 3000);
    window.addEventListener("load", initializeExtension);
    window.addEventListener("popstate", initializeExtension);
})();
