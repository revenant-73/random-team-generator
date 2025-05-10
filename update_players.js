const fs = require('fs');

// Read the famous_players.txt file
const famousPlayersText = fs.readFileSync('famous_players.txt', 'utf8');

// Read the existing players.json file
const playersJson = JSON.parse(fs.readFileSync('players.json', 'utf8'));

// Parse the famous players text
function parseFamousPlayers(text) {
    const players = [];
    
    // Split by player entries (they start with a number followed by a dot)
    const playerEntries = text.split(/\d+\.\s+/).slice(1); // Skip the first empty entry
    
    playerEntries.forEach(entry => {
        // Extract player name and country
        const nameMatch = entry.match(/^([^(]+)\s*\(([^)]+)\)/);
        if (!nameMatch) return;
        
        const name = nameMatch[1].trim();
        const country = nameMatch[2].trim();
        
        // Extract height and discipline
        const heightMatch = entry.match(/Height:\s*([\d.]+\s*m\s*\([^)]+\))/);
        const height = heightMatch ? heightMatch[1] : '';
        
        const disciplineMatch = entry.match(/Discipline:\s*([^\n]+)/);
        const discipline = disciplineMatch ? disciplineMatch[1].trim() : '';
        
        // Extract biography (everything after the discipline line)
        let bio = '';
        if (disciplineMatch) {
            const parts = entry.split(disciplineMatch[0]);
            if (parts.length > 1) {
                bio = parts[1].trim();
            }
        }
        
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
    });
    
    return players;
}

// Parse the famous players
const newPlayers = parseFamousPlayers(famousPlayersText);

// Check for duplicates and add only new players
const existingNames = new Set(playersJson.players.map(p => p.name));
const uniqueNewPlayers = newPlayers.filter(p => !existingNames.has(p.name));

// Add the new players to the existing ones
playersJson.players = [...playersJson.players, ...uniqueNewPlayers];

// Write the updated JSON back to the file
fs.writeFileSync('players.json', JSON.stringify(playersJson, null, 2));

console.log(`Added ${uniqueNewPlayers.length} new players to players.json`);
console.log(`Total players: ${playersJson.players.length}`);