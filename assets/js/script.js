const API_Key = "PA_E4YJs_MnE4dWVR-qHjTutMvs";
const API_URL = "https://ci-jshint.herokuapp.com/api";
const resultsModal = new bootstrap.Modal(document.getElementById("resultsModal"));

document.getElementById("status").addEventListener("click", e => getStatus(e));

async function getStatus(e) {
    const queryString = '${API_URL}?api_key=${API_Key}';

    const = await fetch(queryString);

    const data = await response.json();

    if (response.ok) {
        console.log(data);
    }
}
