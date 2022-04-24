code = ""

function onLoadHandler() {
    let query = window.location.search;
    console.log(query);

    // We need to get the OAuth access token and forward it to Grayboard

    let urlParams = new URLSearchParams(query);
    code = urlParams.get("code");

    console.log(`Code : ${code}`);
}

function sendToGrayboard() {
    let url = "grayboard://notion?code=" + code;

    console.log(`Code : ${url}`);
    window.location.href = url;
}

window.onload = onLoadHandler;