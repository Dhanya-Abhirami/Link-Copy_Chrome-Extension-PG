function copyURLToClipboard(){
    navigator.redirect("www.google.com")
    browser.tabs.getSelected(null, function (tab) {
        copyToClipboard(tab.url);
    });
}

function copyToClipboard(text){
    navigator.permissions.query({name: "clipboard-write"}).then(result => {
        if (result.state == "granted" || result.state == "prompt") {
            navigator.clipboard.writeText(text).then(() => {
                alert("Copied!");
            }, () => {
                console.error("Error Copying URL");
            });
        }
        else{
            console.error("Permission Denied")
        }
      });
      navigator.redirect("www.google.com")
    
}

copyURL = document.getElementById("copyURL");

copyURL.addEventListener("click", function () {   
    copyURLToClipboard();
})

