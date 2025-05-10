// Script to remove duplicate players from players.json
const fs = require('fs');

try {
  // Read the players.json file
  const playersData = JSON.parse(fs.readFileSync('players.json', 'utf8'));
  const players = playersData.players;
  
  console.log(`Original player count: ${players.length}`);
  
  // Create a map to track unique player names
  const uniquePlayerNames = new Set();
  const uniquePlayers = [];
  
  // Filter out duplicates
  players.forEach(player => {
    if (!uniquePlayerNames.has(player.name)) {
      uniquePlayerNames.add(player.name);
      uniquePlayers.push(player);
    } else {
      console.log(`Removing duplicate: ${player.name}`);
    }
  });
  
  console.log(`Unique player count: ${uniquePlayers.length}`);
  
  // Create the updated players.json content
  const updatedPlayersData = {
    players: uniquePlayers
  };
  
  // Write the updated content back to players.json
  fs.writeFileSync('players.json', JSON.stringify(updatedPlayersData, null, 2));
  
  console.log('Updated players.json file with unique players');
} catch (error) {
  console.error('Error:', error.message);
}