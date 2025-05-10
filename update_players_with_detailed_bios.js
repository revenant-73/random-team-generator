const fs = require('fs');

// Read the updated_famous_players.txt file
const updatedPlayersText = fs.readFileSync('updated_famous_players.txt', 'utf8');

// Read the existing players.json file
const playersJson = JSON.parse(fs.readFileSync('players.json', 'utf8'));

// Parse the updated famous players text
function parseUpdatedPlayers(text) {
    const players = [];
    
    // Split by player entries (they start with a number followed by a dot)
    const playerRegex = /\d+\.\s+([^(]+)\s*\(([^)]+)\)\s*\n[-=]+\s*\nHeight:\s*([\d.]+\s*m\s*\([^)]+\))\s*\nDiscipline:\s*([^\n]+)\s*\n\s*\n([\s\S]+?)(?=\n\s*\n\d+\.|$)/g;
    
    let match;
    while ((match = playerRegex.exec(text)) !== null) {
        const name = match[1].trim();
        const country = match[2].trim();
        const height = match[3].trim();
        const discipline = match[4].trim();
        const bio = match[5].trim();
        
        // Create known_for based on key achievements mentioned in bio
        let knownFor = '';
        if (bio.includes('Olympic gold')) {
            knownFor = 'Olympic gold medalist';
        } else if (bio.includes('Olympic')) {
            knownFor = 'Olympic medalist';
        } else if (bio.includes('World Champion')) {
            knownFor = 'World Champion';
        } else {
            knownFor = discipline + ' specialist';
        }
        
        // Format detailed info as HTML
        const detailedInfo = `
            <h4 class="font-bold text-lg mb-2">${name}</h4>
            <p class="mb-2">Country: ${country}</p>
            <p class="mb-2">Height: ${height}</p>
            <p class="mb-2">Discipline: ${discipline}</p>
            <p>${bio}</p>
        `.replace(/\n\s+/g, '\n').trim();
        
        players.push({
            name,
            country,
            known_for: knownFor,
            detailed_info: detailedInfo
        });
    }
    
    return players;
}

// Parse the updated players
const updatedPlayers = parseUpdatedPlayers(updatedPlayersText);

// Create a map of existing players by name for easy lookup
const existingPlayersByName = new Map();
playersJson.players.forEach(player => {
    existingPlayersByName.set(player.name, player);
});

// Update existing players with new detailed info or add new players
updatedPlayers.forEach(updatedPlayer => {
    if (existingPlayersByName.has(updatedPlayer.name)) {
        // Update existing player
        const existingPlayer = existingPlayersByName.get(updatedPlayer.name);
        existingPlayer.detailed_info = updatedPlayer.detailed_info;
        existingPlayer.known_for = updatedPlayer.known_for;
    } else {
        // Add new player
        playersJson.players.push(updatedPlayer);
    }
});

// Write the updated JSON back to the file
fs.writeFileSync('players.json', JSON.stringify(playersJson, null, 2));

console.log(`Updated ${updatedPlayers.length} players in players.json`);
console.log(`Total players: ${playersJson.players.length}`);