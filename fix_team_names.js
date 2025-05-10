// Add more unique players to the players.json file
const fs = require('fs');

// Read the current players.json file
const playersData = JSON.parse(fs.readFileSync('players.json', 'utf8'));
const currentPlayers = playersData.players;

console.log(`Current player count: ${currentPlayers.length}`);

// Add more unique players
const additionalPlayers = [
  {
    "name": "Natalia Pereira",
    "country": "Brazil",
    "known_for": "Olympic champion",
    "detailed_info": "<h4 class=\"font-bold text-lg mb-2\">Natalia Pereira</h4><p class=\"mb-2\">Height: 1.86 m (6'1\")</p><p class=\"mb-2\">Discipline: Indoor</p><p>A powerful outside hitter for Brazil, Natalia won Olympic gold in 2012 and has been a consistent force in international volleyball. Known for her explosive attacking and strong blocking, she has played professionally in top leagues worldwide. Her versatility and leadership have made her a cornerstone of Brazilian volleyball.</p>"
  },
  {
    "name": "Simone Giannelli",
    "country": "Italy",
    "known_for": "Olympic silver medalist",
    "detailed_info": "<h4 class=\"font-bold text-lg mb-2\">Simone Giannelli</h4><p class=\"mb-2\">Height: 1.98 m (6'6\")</p><p class=\"mb-2\">Discipline: Indoor</p><p>A prodigious setter who debuted for Italy at just 18 years old, Giannelli helped Italy win silver at the 2016 Olympics. Known for his exceptional hands, court vision, and athletic ability, he has revolutionized the setter position with his dynamic play. His precision and creativity make him one of the world's premier playmakers.</p>"
  },
  {
    "name": "Facundo Conte",
    "country": "Argentina",
    "known_for": "Olympic bronze medalist",
    "detailed_info": "<h4 class=\"font-bold text-lg mb-2\">Facundo Conte</h4><p class=\"mb-2\">Height: 1.98 m (6'6\")</p><p class=\"mb-2\">Discipline: Indoor</p><p>Son of volleyball legend Hugo Conte, Facundo has carved his own legacy as one of Argentina's greatest players. He helped Argentina win bronze at the 2020 Olympics, their first medal since 1988. Known for his powerful attacking and emotional leadership, Conte has played professionally in top leagues around the world.</p>"
  },
  {
    "name": "Nataliya Goncharova",
    "country": "Russia",
    "known_for": "Olympic champion",
    "detailed_info": "<h4 class=\"font-bold text-lg mb-2\">Nataliya Goncharova</h4><p class=\"mb-2\">Height: 1.96 m (6'5\")</p><p class=\"mb-2\">Discipline: Indoor</p><p>One of the most powerful opposite hitters in women's volleyball, Goncharova led Russia to gold at the 2020 Olympics. Known for her devastating spike and ability to score from any position, she has been the scoring leader in numerous international tournaments. Her combination of power and precision makes her nearly unstoppable when in form.</p>"
  },
  {
    "name": "Murilo Endres",
    "country": "Brazil",
    "known_for": "Olympic silver medalist",
    "detailed_info": "<h4 class=\"font-bold text-lg mb-2\">Murilo Endres</h4><p class=\"mb-2\">Height: 1.90 m (6'3\")</p><p class=\"mb-2\">Discipline: Indoor</p><p>A cornerstone of Brazil's men's team for over a decade, Murilo won Olympic silver medals in 2008 and 2012. Known for his exceptional passing and defensive skills, he was often tasked with receiving the opponent's toughest serves. Married to Brazilian volleyball star Jaqueline Carvalho, they form one of volleyball's most famous couples.</p>"
  },
  {
    "name": "Nikola Grbić",
    "country": "Serbia",
    "known_for": "Olympic gold medalist",
    "detailed_info": "<h4 class=\"font-bold text-lg mb-2\">Nikola Grbić</h4><p class=\"mb-2\">Height: 1.93 m (6'4\")</p><p class=\"mb-2\">Discipline: Indoor</p><p>One of the greatest setters in volleyball history, Grbić led Yugoslavia/Serbia to Olympic gold in 2000 and numerous other international medals. Known for his precision, court vision, and leadership, he has successfully transitioned to coaching, leading Poland to the 2022 World Championship. His tactical understanding of the game has made him respected as both player and coach.</p>"
  },
  {
    "name": "Virna Dias",
    "country": "Brazil",
    "known_for": "Olympic bronze medalist",
    "detailed_info": "<h4 class=\"font-bold text-lg mb-2\">Virna Dias</h4><p class=\"mb-2\">Height: 1.80 m (5'11\")</p><p class=\"mb-2\">Discipline: Indoor</p><p>A key figure in Brazil's rise to prominence in women's volleyball, Virna won Olympic bronze in 1996 and 2000. Known for her powerful attacking and emotional leadership, she helped establish Brazil as a global volleyball powerhouse. Her charismatic personality made her one of Brazil's most popular athletes during her career.</p>"
  },
  {
    "name": "Natalie Cook",
    "country": "Australia",
    "known_for": "Olympic gold medalist",
    "detailed_info": "<h4 class=\"font-bold text-lg mb-2\">Natalie Cook</h4><p class=\"mb-2\">Height: 1.75 m (5'9\")</p><p class=\"mb-2\">Discipline: Beach</p><p>A pioneer of Australian beach volleyball, Cook won Olympic gold in 2000 with Kerri Pottharst and bronze in 1996. She is the only Australian athlete to compete in five consecutive Summer Olympics (1996-2012). Known for her determination, tactical intelligence, and advocacy for the sport, Cook helped establish beach volleyball in Australia and the Pacific region.</p>"
  },
  {
    "name": "Bernardo Rezende",
    "country": "Brazil",
    "known_for": "Legendary coach",
    "detailed_info": "<h4 class=\"font-bold text-lg mb-2\">Bernardo Rezende \"Bernardinho\"</h4><p class=\"mb-2\">Height: 1.84 m (6'0\")</p><p class=\"mb-2\">Discipline: Indoor (Coach)</p><p>The most successful volleyball coach in history, Bernardinho led Brazil's men's team to Olympic gold in 2004 and 2016, plus silver in 2008 and 2012. As a player, he won Olympic silver in 1984. His methodical approach, attention to detail, and psychological mastery have made him a coaching legend. Father of volleyball star Bruno Rezende, creating a volleyball dynasty.</p>"
  },
  {
    "name": "Bruno Rezende",
    "country": "Brazil",
    "known_for": "Olympic gold medalist",
    "detailed_info": "<h4 class=\"font-bold text-lg mb-2\">Bruno Rezende \"Bruninho\"</h4><p class=\"mb-2\">Height: 1.90 m (6'3\")</p><p class=\"mb-2\">Discipline: Indoor</p><p>Son of legendary coach Bernardinho, Bruno has established himself as one of the greatest setters in volleyball history. He led Brazil to Olympic gold in 2016 and silver in 2008, 2012, and 2020. Known for his exceptional court vision, leadership, and tactical intelligence, Bruno has been named Best Setter at numerous international tournaments. His precision and creativity make him the quarterback of Brazil's offense.</p>"
  }
];

// Add the new players to the current list
const updatedPlayers = [...currentPlayers, ...additionalPlayers];

// Create the updated players.json content
const updatedPlayersData = {
  players: updatedPlayers
};

// Write the updated content back to players.json
fs.writeFileSync('players.json', JSON.stringify(updatedPlayersData, null, 2));

console.log(`Updated player count: ${updatedPlayers.length}`);
console.log('Updated players.json file with additional unique players');