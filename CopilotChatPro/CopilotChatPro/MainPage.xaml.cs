namespace Copilot_Chat_Pro
{
    public partial class MainPage
    {
        public MainPage()
        {
            InitializeComponent();
        }
        private async void OnWebViewNavigated(object sender, WebNavigatedEventArgs e)
        {
            if (e.Result == WebNavigationResult.Success)
            {
                await MyWebView.EvaluateJavaScriptAsync("try{let t=document.querySelector(\"#b_sydConvCont > cib-serp\");if(!t)throw Error(\"Elemento cib-serp no encontrado.\");let e=t.shadowRoot,o=e.querySelector(\"#cib-action-bar-main\");if(!o)throw Error(\"Elemento cib-action-bar-main no encontrado.\");let r=o.shadowRoot,n=r.querySelector(\"div > div.main-container > div > div.input-row > cib-text-input\");if(!n)throw Error(\"Elemento cib-text-input no encontrado.\");let i=n.shadowRoot,a=i.querySelector(\"#searchbox\");if(a)a.removeAttribute(\"maxlength\"),a.setAttribute(\"aria-description\",\"\u221e\");else throw Error(\"Textarea con atributo 'maxlength' no encontrado.\");let c=r.querySelector(\"div > div.main-container > div > div.bottom-controls > div.bottom-right-controls > div.letter-counter\");c?c.textContent=\"\u221e\":console.warn(\"Elemento .letter-counter no encontrado.\")}catch(l){console.error(\"Error:\",l.message)}");
            }
        }
    }
}