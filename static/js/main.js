/**
 * Main script.
 */
(function () {
    /**
     * Updates the payment link with relevant additional client info.
     */
    function updateLink () {
        const p = new URLSearchParams(window.location.search);
        const a = document.querySelector('#payment-options [href^="https://www.paypal.com/cgi-bin/webscr"]');
        if (a) {
            let qs = new URLSearchParams(a.search);
            qs.set('custom', p.get('custom') || '');
            qs.set('item_name', p.get('course') || '');
            const url = a.protocol + "//" + a.host + a.pathname + "?" + qs.toString();
            a.setAttribute('href', url);
        }
    }

    /**
     * Updates the page text to reflect the current payee.
     */
    function updateText () {
        const p = new URLSearchParams(window.location.search);
        const el = document.getElementById('course-id')
        if (el && p.get('course')) {
            el.textContent = p.get('course');
        }
    }

    document.addEventListener('DOMContentLoaded', updateLink);
    document.addEventListener('DOMContentLoaded', updateText);
})();
