(function() {
    // Only run if we are on the downloads page
    const url = window.location.pathname;
    if (url.indexOf('download.html') === -1) { return }
    // Supported targets that correspond to the table headers (case-sensitive)
    const targets = [
        // Exact match for "Windows NT"
        {agent: /Windows NT/ig, header: 'Windows'}, 
        // Match for "Mac OS X"
        {agent: /Mac OS X/ig, header: 'macOS'},
        // Match for "Linux" but not with "Android"
        {agent: /(?!.*Android).*Linux.*$/ig, header: 'Linux'}
    ];
    // Obtain the browser's user agent
    const agent = navigator.userAgent;
    // Get all details accordion tables
    const detailsElements = Array.from(document.querySelectorAll('details.custom-container.details'));
    // Find an instance of the target in the user agent (case-insensitive)
    const target = targets.find(i => agent.match(i.agent) );
    // Set the open property on the element who's summary header corresponds to the found target
    detailsElements.find(i => i.childNodes[0].innerHTML === target?.header)?.setAttribute('open', '');
})();
