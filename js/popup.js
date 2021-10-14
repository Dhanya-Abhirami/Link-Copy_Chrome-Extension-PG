function copyLinkToClipboard(){
    chrome.tabs.getSelected(null, function (tab) {
        copyToClipboard(tab.url);
    });
}

function copyToClipboard(text){
    navigator.permissions.query({name: "clipboard-write"}).then(result => {
        if (result.state == "granted" || result.state == "prompt") {
            navigator.clipboard.writeText(text).then(() => {
                console.log("Copied!");
            }, () => {
                console.error("Error Copying Link");
            });
        }
        else{
            console.error("Permission Denied")
        }
      });    
}

copyLink = document.getElementById("copyLink");

copyLink.addEventListener("click", function () {   
    copyLinkToClipboard();
})

