document.getElementById("cache").addEventListener("click", async () => {
    let value = document.getElementById("key").value;
    let key = document.getElementById("value").value;

    try {
        let res = await fetch("/cache", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({key: key, value: value}),
        });
        console.log("Response Status:", res.status);
        res.text().then(body => {console.log(body)})

    } catch (error) {
        console.log("Oops, something went wrong", error);
    };
});