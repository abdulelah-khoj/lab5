const players = [
    { name: "Joel Embiid", team: "PHI", points: 33, rebounds: 10.8, assists: 5.7 },
    { name: "Jalen Brunson", team: "NYK", points: 32.4, rebounds: 3.3, assists: 7.5 },
    { name: "Shai Gilgeous-Alexander", team: "OKC", points: 30.2, rebounds: 7.2, assists: 6.4 },
    { name: "Tyrese Maxey", team: "PHI", points: 29.8, rebounds: 5.2, assists: 6.8 },
    { name: "Donovan Mitchell", team: "CLE", points: 29.6, rebounds: 5.4, assists: 4.7 }
];

// Populate Table
function populateTable(data) {
    const tableBody = document.getElementById("player-table");
    tableBody.innerHTML = "";
    data.forEach(player => {
        const row = `<tr>
            <td>${player.name}</td>
            <td>${player.team}</td>
            <td>${player.points}</td>
            <td>${player.rebounds}</td>
            <td>${player.assists}</td>
        </tr>`;
        tableBody.innerHTML += row;
    });
}

// Filter Table
function filterTable() {
    const searchInput = document.getElementById("search").value.toLowerCase();
    const teamFilter = document.getElementById("team-filter").value;
    const filteredPlayers = players.filter(player => {
        const matchesSearch = player.name.toLowerCase().includes(searchInput);
        const matchesTeam = teamFilter === "All" || player.team === teamFilter;
        return matchesSearch && matchesTeam;
    });
    populateTable(filteredPlayers);
}

// Toggle Dark Mode
function toggleDarkMode() {
    document.body.classList.toggle("dark-mode");
}

// Event Listeners
document.getElementById("search").addEventListener("input", filterTable);
document.getElementById("team-filter").addEventListener("change", filterTable);
document.getElementById("dark-mode-toggle").addEventListener("click", toggleDarkMode);

// Initialize
populateTable(players);
