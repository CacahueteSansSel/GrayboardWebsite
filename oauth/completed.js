function onLoadHandler() {
    let query = window.location.search;
    console.log(query);

    // We need to get the OAuth access token and forward it to Grayboard

    let urlParams = new URLSearchParams(query);
    let code = urlParams.get("code");

    console.log(`Code : ${code}`);
}

function sendToGrayboard() {
    console.log(`Click`);
}

window.onload = onLoadHandler;