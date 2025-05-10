// Simple script to check for duplicate player names in players.json
const fs = require('fs');

try {
  // Read the players.json file
  const playersData = JSON.parse(fs.readFileSync('players.json', 'utf8'));
  const players = playersData.players;
  
  // Create a map to count occurrences of each name
  const nameCounts = {};
  
  // Count occurrences of each player name
  players.forEach(player => {
    const name = player.name;
    nameCounts[name] = (nameCounts[name] || 0) + 1;
  });
  
  // Find duplicates
  const duplicates = Object.entries(nameCounts)
    .filter(([name, count]) => count > 1)
    .map(([name, count]) => ({ name, count }));
  
  // Print results
  console.log('Total players:', players.length);
  
  if (duplicates.length === 0) {
    console.log('No duplicate player names found.');
  } else {
    console.log('Duplicate player names found:');
    duplicates.forEach(dup => {
      console.log(`- "${dup.name}" appears ${dup.count} times`);
    });
  }
} catch (error) {
  console.error('Error:', error.message);
}