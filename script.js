document.getElementById("new-message").addEventListener("click", buttonSubmit);

async function fetchData() {
    const options = {
        method: 'GET'
    }
    const res = await fetch('https://whatthecommit.com/index.txt', options);
    const record = await res.text();

    document.getElementById("message").innerHTML = record;
}

function buttonSubmit() {
    fetchData();
}

fetchData();