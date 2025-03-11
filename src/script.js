function formatJSON() {
    try {
        const input = document.getElementById("jsonInput").value;
        const parsed = JSON.parse(input);
        document.getElementById("jsonOutput").textContent = JSON.stringify(parsed, null, 4);
    } catch (error) {
        document.getElementById("jsonOutput").textContent = "Invalid JSON: " + error.message;
    }
}

function minifyJSON() {
    try {
        const input = document.getElementById("jsonInput").value;
        const parsed = JSON.parse(input);
        document.getElementById("jsonOutput").textContent = JSON.stringify(parsed);
    } catch (error) {
        document.getElementById("jsonOutput").textContent = "Invalid JSON: " + error.message;
    }
}

function clearJSON() {
    document.getElementById("jsonInput").value = "";
    document.getElementById("jsonOutput").textContent = "";
}
