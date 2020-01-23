---
layout: none
---
/**
 * Updates the course application fee link.
 */
'use strict';
(function (){
    async function init () {
        let { default: main } = await import('{% link static/js/modules/application-invoice.mjs %}');
        main();
    }
    document.addEventListener('DOMContentLoaded', init);
})()
