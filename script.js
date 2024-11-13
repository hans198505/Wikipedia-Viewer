document.getElementById('searchButton').addEventListener('click', async () => {
    const searchQuery = document.getElementById('search').value;
    const response = await fetch(`https://en.wikipedia.org/w/api.php?action=query&list=search&srsearch=${searchQuery}&format=json&origin=*`);
    const data = await response.json();
    const results = data.query.search.map(result => `
        <div>
            <h3>${result.title}</h3>
            <p>${result.snippet}</p>
            <a href="https://en.wikipedia.org/wiki/${result.title}" target="_blank">Leer más</a>
        </div>
    `).join('');
    document.getElementById('results').innerHTML = results;
});
