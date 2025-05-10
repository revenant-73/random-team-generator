// Create a new players.json file with unique entries
const fs = require('fs');

// Define the unique players array
const uniquePlayers = [
  {
    "name": "Karch Kiraly",
    "country": "USA",
    "known_for": "3x Olympic gold medalist",
    "detailed_info": "<h4 class=\"font-bold text-lg mb-2\">Karch Kiraly</h4><p class=\"mb-2\">Height: 1.88 m (6'2\")</p><p class=\"mb-2\">Discipline: Indoor and Beach</p><p>Widely considered the greatest volleyball player of all time, Charles Frederick \"Karch\" Kiraly is the only athlete to win Olympic gold in both indoor (1984, 1988) and beach (1996) volleyball. He led the U.S. Men's National Team during its golden era, dominating the 1980s with two Olympic golds and a World Championship. After transitioning to beach volleyball, he revolutionized the sport with his tenacity and elite ball control, amassing over 140 tournament victories. Later, as coach of the U.S. Women's National Team, he led them to their first Olympic gold in 2020. Kiraly is a founding figure in American volleyball culture and a pioneer in both disciplines.</p>"
  },
  {
    "name": "Giba",
    "country": "Brazil",
    "known_for": "Olympic gold medalist, 3x World Champion",
    "detailed_info": "<h4 class=\"font-bold text-lg mb-2\">Giba</h4><p class=\"mb-2\">Height: 1.92 m (6'3\")</p><p class=\"mb-2\">Discipline: Indoor</p><p>Gilberto Amauri de Godoy Filho, known as Giba, was the charismatic leader of Brazil's men's national team during their most dominant period. Despite not having the height or raw power of his peers, Giba's explosive athleticism, relentless defense, and emotional leadership made him a fan favorite. He won gold at the 2004 Olympics and silver in 2008 and 2012. Additionally, he captured three World Championship titles (2002, 2006, 2010) and eight World League titles. His aggressive play style, emotional celebrations, and ability to deliver in clutch moments define his legacy.</p>"
  },
  {
    "name": "Sergio Santos",
    "country": "Brazil",
    "known_for": "Olympic gold medalist, defensive specialist",
    "detailed_info": "<h4 class=\"font-bold text-lg mb-2\">Sergio Dutra Santos \"Escadinha\"</h4><p class=\"mb-2\">Born: October 15, 1975 in São Paulo, Brazil</p><p class=\"mb-2\">Olympic gold medalist in 2004 and silver medalist in 2008 and 2012.</p><p class=\"mb-2\">Nicknamed \"Escadinha\" (Little Ladder) because of his incredible jumping ability despite being only 5'8\".</p><p class=\"mb-2\">Considered one of the greatest liberos in volleyball history, revolutionizing the position with his spectacular defensive plays.</p><p>Won the Best Libero award at numerous international competitions, including the World Championship and World Cup.</p>"
  },
  {
    "name": "Ivan Zaytsev",
    "country": "Italy",
    "known_for": "Powerful opposite hitter",
    "detailed_info": "<h4 class=\"font-bold text-lg mb-2\">Ivan Zaytsev \"The Tsar\"</h4><p class=\"mb-2\">Born: October 2, 1988 in Spoleto, Italy (to Russian and Italian parents)</p><p class=\"mb-2\">Olympic silver medalist with Italy in 2016 and bronze medalist in 2012.</p><p class=\"mb-2\">Known for having one of the most powerful serves in volleyball, recorded at over 134 km/h (83 mph).</p><p class=\"mb-2\">Versatile player who has played as an outside hitter, opposite, and even setter during his career.</p><p>Recognizable for his distinctive mohawk hairstyle and numerous tattoos, making him one of volleyball's most marketable personalities.</p>"
  },
  {
    "name": "Wilfredo León",
    "country": "Poland/Cuba",
    "known_for": "One of the highest paid players",
    "detailed_info": "<h4 class=\"font-bold text-lg mb-2\">Wilfredo León</h4><p class=\"mb-2\">Height: 2.01 m (6'7\")</p><p class=\"mb-2\">Discipline: Indoor</p><p>Born in Cuba and now representing Poland, León is widely regarded as one of the most physically gifted players of his generation. He debuted with Cuba's national team at age 14 and led them to a silver medal at the 2010 World Championship. After naturalizing in Poland, León brought his unmatched power and aerial ability to the Polish squad, quickly becoming a game-changer. Known for his devastating serve and high-velocity attacking, he plays for top-tier clubs and is feared worldwide.</p>"
  },
  {
    "name": "Earvin N'Gapeth",
    "country": "France",
    "known_for": "Olympic gold medalist, creative attacker",
    "detailed_info": "<h4 class=\"font-bold text-lg mb-2\">Earvin N'Gapeth</h4><p class=\"mb-2\">Born: February 12, 1991 in Saint-Raphaël, France</p><p class=\"mb-2\">Led France to their first Olympic gold medal in volleyball at the 2020 Tokyo Olympics.</p><p class=\"mb-2\">Son of Eric N'Gapeth, a former volleyball player who represented France in the 1980s.</p><p class=\"mb-2\">Known for his acrobatic style and unconventional attacks, including the \"back spike\" (attacking while facing away from the net).</p><p>Considered one of the most creative and entertaining players in modern volleyball.</p>"
  },
  {
    "name": "Yuji Nishida",
    "country": "Japan",
    "known_for": "Young star with incredible vertical",
    "detailed_info": "<h4 class=\"font-bold text-lg mb-2\">Yuji Nishida</h4><p class=\"mb-2\">Born: January 30, 2000 in Mie Prefecture, Japan</p><p class=\"mb-2\">Despite being only 6'2\" (relatively short for his position), has one of the highest vertical jumps in volleyball at 44 inches.</p><p class=\"mb-2\">Made his professional debut at just 17 years old and quickly became Japan's ace attacker.</p><p class=\"mb-2\">Known for his powerful jump serve that can reach speeds of over 130 km/h (80 mph).</p><p>Helped lead Japan back to volleyball prominence, including a quarterfinal appearance at the 2020 Tokyo Olympics.</p>"
  },
  {
    "name": "Matt Anderson",
    "country": "USA",
    "known_for": "Olympic bronze medalist",
    "detailed_info": "<h4 class=\"font-bold text-lg mb-2\">Matthew Anderson</h4><p class=\"mb-2\">Born: April 18, 1987 in Buffalo, New York</p><p class=\"mb-2\">Olympic bronze medalist with Team USA in 2016 and a key player in the U.S. resurgence in men's volleyball.</p><p class=\"mb-2\">Versatile player who transitioned from outside hitter to opposite to become the team's primary attacker.</p><p class=\"mb-2\">Has played professionally in Russia, Italy, and Japan, becoming one of the highest-paid American volleyball players.</p><p>Known for his powerful serve, exceptional ball control, and leadership on the court.</p>"
  },
  {
    "name": "Bartosz Kurek",
    "country": "Poland",
    "known_for": "World Champion MVP",
    "detailed_info": "<h4 class=\"font-bold text-lg mb-2\">Bartosz Kurek</h4><p class=\"mb-2\">Born: August 29, 1988 in Wałbrzych, Poland</p><p class=\"mb-2\">Named MVP of the 2018 FIVB Volleyball Men's World Championship, leading Poland to their second consecutive title.</p><p class=\"mb-2\">Son of volleyball player Adam Kurek, making them one of Poland's most famous volleyball families.</p><p class=\"mb-2\">Known for his powerful attacking from both the front and back rows, with exceptional versatility.</p><p>Has overcome several serious injuries throughout his career to remain one of the world's elite players.</p>"
  },
  {
    "name": "Dmitriy Muserskiy",
    "country": "Russia",
    "known_for": "Olympic gold medalist, 7'2\" tall",
    "detailed_info": "<h4 class=\"font-bold text-lg mb-2\">Dmitriy Muserskiy</h4><p class=\"mb-2\">Born: October 29, 1988 in Makiivka, Ukraine (represents Russia)</p><p class=\"mb-2\">At 7'2\" (218 cm), he is one of the tallest professional volleyball players in history.</p><p class=\"mb-2\">Led Russia to Olympic gold in 2012, scoring 31 points in the final against Brazil in a legendary performance.</p><p class=\"mb-2\">Uniquely versatile for his height, having played as both a middle blocker and opposite hitter.</p><p>Has one of the highest reaches in volleyball, with a spiking reach of 12'6\" (382 cm).</p>"
  },
  {
    "name": "Misty May-Treanor",
    "country": "USA",
    "known_for": "3x Olympic gold medalist in beach volleyball",
    "detailed_info": "<h4 class=\"font-bold text-lg mb-2\">Misty May-Treanor</h4><p class=\"mb-2\">Height: 1.75 m (5'9\")</p><p class=\"mb-2\">Discipline: Beach</p><p>Misty May-Treanor is a beach volleyball legend and three-time Olympic gold medalist (2004, 2008, 2012) alongside Kerri Walsh Jennings. Known for her flawless technique, ball control, and impenetrable defense, Misty played with a cerebral edge. She won over 100 career titles, including three FIVB World Championships. A fierce competitor who overcame multiple injuries and personal hardships, Misty retired as one of the most decorated athletes in volleyball history and helped elevate the visibility of women's beach volleyball worldwide.</p>"
  },
  {
    "name": "Kerri Walsh Jennings",
    "country": "USA",
    "known_for": "3x Olympic gold medalist in beach volleyball",
    "detailed_info": "<h4 class=\"font-bold text-lg mb-2\">Kerri Walsh Jennings</h4><p class=\"mb-2\">Height: 1.88 m (6'2\")</p><p class=\"mb-2\">Discipline: Beach</p><p>Kerri Walsh Jennings, often referred to as \"Six Feet of Sunshine,\" is one of the most iconic figures in volleyball. She teamed with Misty May-Treanor to form the most successful beach volleyball duo in history, winning three consecutive Olympic golds. Known for her dominant blocking, leadership, and relentless pursuit of excellence, she added a bronze medal in 2016 with April Ross. Kerri's longevity, including her return to elite play after giving birth, is a testament to her extraordinary fitness and mental toughness.</p>"
  },
  {
    "name": "Logan Tom",
    "country": "USA",
    "known_for": "4x Olympian",
    "detailed_info": "<h4 class=\"font-bold text-lg mb-2\">Logan Tom</h4><p class=\"mb-2\">Born: May 25, 1981 in Napa, California</p><p class=\"mb-2\">Four-time Olympian (2000, 2004, 2008, 2012), winning silver medals in 2008 and 2012.</p><p class=\"mb-2\">One of the youngest Olympic volleyball players ever, making her debut at just 19 years old.</p><p class=\"mb-2\">Versatile player who excelled at both outside hitter and libero positions during her career.</p><p>Has played professionally in more countries than almost any other player, including Brazil, Italy, Switzerland, Spain, Russia, China, and Japan.</p>"
  },
  {
    "name": "Sheilla Castro",
    "country": "Brazil",
    "known_for": "2x Olympic gold medalist",
    "detailed_info": "<h4 class=\"font-bold text-lg mb-2\">Sheilla Castro</h4><p class=\"mb-2\">Born: July 1, 1983 in Belo Horizonte, Brazil</p><p class=\"mb-2\">Two-time Olympic gold medalist (2008, 2012) and bronze medalist (2016) with Brazil.</p><p class=\"mb-2\">Known for her powerful attacking and clutch performances in critical matches.</p><p class=\"mb-2\">After retiring in 2016, she returned to volleyball in 2018 and made a comeback to the Brazilian national team.</p><p>One of the most decorated players in Brazilian volleyball history, with multiple World Championship and Grand Prix medals.</p>"
  },
  {
    "name": "Yekaterina Gamova",
    "country": "Russia",
    "known_for": "2x World Champion, 6'8\" tall",
    "detailed_info": "<h4 class=\"font-bold text-lg mb-2\">Yekaterina Gamova</h4><p class=\"mb-2\">Born: October 17, 1980 in Chelyabinsk, Russia</p><p class=\"mb-2\">At 6'8\" (202 cm), she was one of the tallest female volleyball players in history.</p><p class=\"mb-2\">Two-time Olympic silver medalist (2000, 2004) and two-time World Champion (2006, 2010).</p><p class=\"mb-2\">Named MVP of the 2010 World Championship, leading Russia to the gold medal.</p><p>Known as \"The Empress\" for her dominance at the net, both attacking and blocking.</p>"
  },
  {
    "name": "Saori Kimura",
    "country": "Japan",
    "known_for": "Japanese volleyball icon",
    "detailed_info": "<h4 class=\"font-bold text-lg mb-2\">Saori Kimura</h4><p class=\"mb-2\">Born: August 19, 1986 in Saitama, Japan</p><p class=\"mb-2\">Three-time Olympian (2004, 2008, 2012) and bronze medalist in 2012.</p><p class=\"mb-2\">Made her Olympic debut at just 17 years old, one of the youngest volleyball Olympians ever.</p><p class=\"mb-2\">Served as Japan's captain and was the flag bearer for Japan at the 2016 Rio Olympics opening ceremony.</p><p>Known for her all-around skills and exceptional ball control, compensating for her relatively modest height (5'10\").</p>"
  },
  {
    "name": "Zhu Ting",
    "country": "China",
    "known_for": "2x Olympic medalist, MVP",
    "detailed_info": "<h4 class=\"font-bold text-lg mb-2\">Zhu Ting</h4><p class=\"mb-2\">Height: 1.98 m (6'6\")</p><p class=\"mb-2\">Discipline: Indoor</p><p>Zhu is a generational talent, leading China to Olympic gold in 2016 (earning MVP) and World Cup titles in 2015 and 2019. Her imposing height and explosive hitting make her nearly unplayable on offense. She played for VakifBank Istanbul, becoming one of the highest-paid volleyball players globally. Zhu is praised for her humility, work ethic, and dominance on the court.</p>"
  },
  {
    "name": "Paola Egonu",
    "country": "Italy",
    "known_for": "One of the world's best attackers",
    "detailed_info": "<h4 class=\"font-bold text-lg mb-2\">Paola Egonu</h4><p class=\"mb-2\">Born: December 18, 1998 in Cittadella, Italy (to Nigerian parents)</p><p class=\"mb-2\">Olympic silver medalist with Italy in 2020 Tokyo Olympics.</p><p class=\"mb-2\">Holds the record for the fastest recorded spike in women's volleyball at 112 km/h (70 mph).</p><p class=\"mb-2\">Known for her incredible vertical jump (over 3 feet) and powerful attacking from all positions on the court.</p><p>An outspoken advocate for racial equality and against discrimination in sports.</p>"
  },
  {
    "name": "Kim Yeon-koung",
    "country": "South Korea",
    "known_for": "Olympic MVP",
    "detailed_info": "<h4 class=\"font-bold text-lg mb-2\">Kim Yeon-koung</h4><p class=\"mb-2\">Height: 1.92 m (6'3\")</p><p class=\"mb-2\">Discipline: Indoor</p><p>A national icon in South Korea, Kim is one of the most prolific scorers in volleyball history. She was MVP and top scorer of the 2012 Olympics and led Korea to a fourth-place finish. Kim's stints in Japan, Turkey, and China turned her into a global star. Her all-around excellence—spiking, serving, passing, and blocking—made her a complete outside hitter and one of the most respected players worldwide.</p>"
  },
  {
    "name": "Maxim Mikhaylov",
    "country": "Russia",
    "known_for": "Olympic gold medalist",
    "detailed_info": "<h4 class=\"font-bold text-lg mb-2\">Maxim Mikhaylov</h4><p class=\"mb-2\">Height: 2.02 m (6'8\")</p><p class=\"mb-2\">Discipline: Indoor</p><p>Mikhaylov is a powerhouse opposite hitter from Russia, known for his high volleyball IQ, precision, and devastating spike. He played a central role in Russia's Olympic gold medal run in 2012 and silver in 2020. He was also instrumental in the 2011 World Cup and multiple European Championship podiums. Mikhaylov is renowned for his efficiency in attack, excellent serving, and leadership during critical moments.</p>"
  },
  {
    "name": "April Ross",
    "country": "USA",
    "known_for": "Olympic gold medalist",
    "detailed_info": "<h4 class=\"font-bold text-lg mb-2\">April Ross</h4><p class=\"mb-2\">Height: 1.85 m (6'1\")</p><p class=\"mb-2\">Discipline: Beach</p><p>April Ross is a three-time Olympic medalist: silver (2012), bronze (2016), and gold (2020, with Alix Klineman). Known for her aggressive jump serve and high-flying attacking, Ross adapted across multiple partnerships, including with Walsh Jennings and Klineman. A fierce competitor with deep tactical insight, she has also won numerous AVP and FIVB titles. April is widely respected for her adaptability, intelligence, and fierce work ethic.</p>"
  },
  {
    "name": "Lang Ping",
    "country": "China",
    "known_for": "Olympic gold medalist as player and coach",
    "detailed_info": "<h4 class=\"font-bold text-lg mb-2\">Lang Ping</h4><p class=\"mb-2\">Height: 1.84 m (6'0\")</p><p class=\"mb-2\">Discipline: Indoor</p><p>Nicknamed \"The Iron Hammer,\" Lang Ping is a trailblazer in international volleyball. She led China to Olympic gold as a dominant outside hitter in 1984. Later, as a coach, she guided China to another Olympic gold in 2016, making her the first person to win Olympic gold both as a player and coach. Her legacy includes influencing generations of Chinese players and helping globalize women's volleyball. Revered for her discipline, poise, and innovation.</p>"
  },
  {
    "name": "Francesca Piccinini",
    "country": "Italy",
    "known_for": "World Champion",
    "detailed_info": "<h4 class=\"font-bold text-lg mb-2\">Francesca Piccinini</h4><p class=\"mb-2\">Height: 1.84 m (6'0\")</p><p class=\"mb-2\">Discipline: Indoor</p><p>A five-time Olympian, Piccinini represented the Italian national team for nearly two decades. She helped Italy win the 2002 World Championship and numerous European medals. Stylish and charismatic, she became a role model in Italy. Her versatility and professionalism allowed her to adapt over time, remaining elite well into her 30s.</p>"
  },
  {
    "name": "Thaisa Menezes",
    "country": "Brazil",
    "known_for": "Olympic gold medalist",
    "detailed_info": "<h4 class=\"font-bold text-lg mb-2\">Thaisa Menezes</h4><p class=\"mb-2\">Height: 1.96 m (6'5\")</p><p class=\"mb-2\">Discipline: Indoor</p><p>A middle blocker with exceptional athleticism and timing, Thaisa won Olympic gold in 2008 and 2012. She was also part of Brazil's 2010 World Championship silver medal run. Her blocking and quick attacking helped define Brazil's success in that era. Despite major injuries, Thaisa fought back to play professionally and maintain her elite form.</p>"
  },
  {
    "name": "Fernanda Garay",
    "country": "Brazil",
    "known_for": "Olympic gold medalist",
    "detailed_info": "<h4 class=\"font-bold text-lg mb-2\">Fernanda Garay</h4><p class=\"mb-2\">Height: 1.79 m (5'10\")</p><p class=\"mb-2\">Discipline: Indoor</p><p>Fernanda was a clutch performer for Brazil, winning Olympic gold in 2012 and silver in 2020. She was known for her aggressive serving, tactical defense, and emotional energy. A fan favorite, Fernanda provided stability in both reception and attacking for over a decade.</p>"
  },
  {
    "name": "Jaqueline Carvalho",
    "country": "Brazil",
    "known_for": "Olympic gold medalist",
    "detailed_info": "<h4 class=\"font-bold text-lg mb-2\">Jaqueline Carvalho</h4><p class=\"mb-2\">Height: 1.86 m (6'1\")</p><p class=\"mb-2\">Discipline: Indoor</p><p>Carvalho was a fixture in Brazil's golden generation, capturing two Olympic golds (2008, 2012). Renowned for her graceful play, communication, and versatility, she played a critical role in key matches. She's also remembered for her strong presence on and off the court and long-time partnership with Murilo Endres.</p>"
  },
  {
    "name": "Phil Dalhausser",
    "country": "USA",
    "known_for": "Olympic gold medalist",
    "detailed_info": "<h4 class=\"font-bold text-lg mb-2\">Phil Dalhausser</h4><p class=\"mb-2\">Height: 2.06 m (6'9\")</p><p class=\"mb-2\">Discipline: Beach</p><p>Nicknamed \"The Thin Beast,\" Dalhausser dominated the beach volleyball scene with his imposing height and deceptive agility. He won Olympic gold in 2008 with Todd Rogers and accumulated over 60 career titles. Known for his fierce blocking, laser-guided jump serves, and calm demeanor under pressure, Dalhausser also competed in the 2012, 2016, and 2020 Olympics. He remains one of the most physically dominant players in beach volleyball history.</p>"
  },
  {
    "name": "Todd Rogers",
    "country": "USA",
    "known_for": "Olympic gold medalist",
    "detailed_info": "<h4 class=\"font-bold text-lg mb-2\">Todd Rogers</h4><p class=\"mb-2\">Height: 1.88 m (6'2\")</p><p class=\"mb-2\">Discipline: Beach</p><p>Known as \"The Professor\" for his brilliant tactical mind, Rogers played a key role in coaching and strategizing during his partnerships. He paired with Dalhausser to win the 2008 Olympic gold and a 2007 FIVB World Championship. Rogers brought a cerebral style to the game, reading the offense better than almost anyone and setting the standard for future defenders.</p>"
  },
  {
    "name": "Ricardo Santos",
    "country": "Brazil",
    "known_for": "Olympic gold medalist",
    "detailed_info": "<h4 class=\"font-bold text-lg mb-2\">Ricardo Santos</h4><p class=\"mb-2\">Height: 2.00 m (6'7\")</p><p class=\"mb-2\">Discipline: Beach</p><p>A dominant blocker and partner to Emanuel, Ricardo won Olympic gold in 2004, silver in 2000, and bronze in 2008. His vertical jump and powerful spikes defined his game, and his intensity on the court made him a feared opponent. A key figure in the golden era of Brazilian beach volleyball.</p>"
  },
  {
    "name": "Anders Mol",
    "country": "Norway",
    "known_for": "Olympic gold medalist",
    "detailed_info": "<h4 class=\"font-bold text-lg mb-2\">Anders Mol</h4><p class=\"mb-2\">Height: 1.98 m (6'6\")</p><p class=\"mb-2\">Discipline: Beach</p><p>Mol is part of the young Norwegian duo that stunned the world, winning Olympic gold in 2020 with Christian Sørum. With quick reflexes, offensive versatility, and elite blocking, Mol has won multiple European Championships and World Tour Finals. He's known for changing the tempo and geometry of modern beach volleyball.</p>"
  },
  {
    "name": "Christian Sørum",
    "country": "Norway",
    "known_for": "Olympic gold medalist",
    "detailed_info": "<h4 class=\"font-bold text-lg mb-2\">Christian Sørum</h4><p class=\"mb-2\">Height: 1.92 m (6'3\")</p><p class=\"mb-2\">Discipline: Beach</p><p>Sørum is the quicker, defensive partner of Anders Mol. Their chemistry and innovation have redefined the sport. Olympic gold medalist in 2020, he is celebrated for his agility, vision, and dynamic transition game. Together, Mol and Sørum are reshaping beach volleyball with speed and strategy.</p>"
  },
  {
    "name": "Julius Brink",
    "country": "Germany",
    "known_for": "Olympic gold medalist",
    "detailed_info": "<h4 class=\"font-bold text-lg mb-2\">Julius Brink</h4><p class=\"mb-2\">Height: 1.85 m (6'1\")</p><p class=\"mb-2\">Discipline: Beach</p><p>Brink captured Olympic gold in 2012 with Jonas Reckermann, the first European men's team to achieve this feat. Known for his emotional leadership and precision, Brink also won a 2009 World Championship. He brought a unique mix of grit, flair, and German efficiency to the sand.</p>"
  },
  {
    "name": "Jonas Reckermann",
    "country": "Germany",
    "known_for": "Olympic gold medalist",
    "detailed_info": "<h4 class=\"font-bold text-lg mb-2\">Jonas Reckermann</h4><p class=\"mb-2\">Height: 1.93 m (6'4\")</p><p class=\"mb-2\">Discipline: Beach</p><p>Reckermann's partnership with Brink culminated in Olympic gold and a World Championship. A cerebral blocker with refined technique and footwork, he dealt with significant injuries throughout his career but remained one of Europe's top players. His success helped popularize the sport in Germany.</p>"
  },
  {
    "name": "Alison Cerutti",
    "country": "Brazil",
    "known_for": "Olympic gold medalist",
    "detailed_info": "<h4 class=\"font-bold text-lg mb-2\">Alison Cerutti</h4><p class=\"mb-2\">Height: 2.03 m (6'8\")</p><p class=\"mb-2\">Discipline: Beach</p><p>Nicknamed \"The Mammoth,\" Alison is one of the most physically dominant blockers in history. Olympic gold medalist (2016), silver (2012), and double world champion, he combined power with surprising mobility. His presence at the net was nearly unmatched, and his partnership with Bruno Schmidt became legendary.</p>"
  },
  {
    "name": "Bruno Oscar Schmidt",
    "country": "Brazil",
    "known_for": "Olympic gold medalist",
    "detailed_info": "<h4 class=\"font-bold text-lg mb-2\">Bruno Oscar Schmidt</h4><p class=\"mb-2\">Height: 1.85 m (6'1\")</p><p class=\"mb-2\">Discipline: Beach</p><p>Known for his elite defensive skills, Bruno won Olympic gold in 2016 and the 2015 World Championship with Alison Cerutti. Nephew of indoor legend Oscar Schmidt, Bruno made his own mark with quickness, anticipation, and court awareness. One of the most respected defenders on the international circuit.</p>"
  },
  {
    "name": "Larissa França",
    "country": "Brazil",
    "known_for": "Olympic bronze medalist",
    "detailed_info": "<h4 class=\"font-bold text-lg mb-2\">Larissa França</h4><p class=\"mb-2\">Height: 1.74 m (5'9\")</p><p class=\"mb-2\">Discipline: Beach</p><p>With over 60 FIVB wins, Larissa is one of the winningest female beach volleyball players. Olympic bronze medalist (2012), world champion, and numerous tour titles with Juliana Felisberta. Known for her fiery play, relentless defense, and infectious energy, she dominated on the sand for over a decade.</p>"
  },
  {
    "name": "Juliana Felisberta",
    "country": "Brazil",
    "known_for": "World Champion",
    "detailed_info": "<h4 class=\"font-bold text-lg mb-2\">Juliana Felisberta</h4><p class=\"mb-2\">Height: 1.77 m (5'10\")</p><p class=\"mb-2\">Discipline: Beach</p><p>A top partner to Larissa, Juliana was a world champion and Olympic medalist. She was a dynamic presence with powerful hitting and precise control. Her strategic approach and resilience under pressure earned her global recognition.</p>"
  },
  {
    "name": "Kira Walkenhorst",
    "country": "Germany",
    "known_for": "Olympic gold medalist",
    "detailed_info": "<h4 class=\"font-bold text-lg mb-2\">Kira Walkenhorst</h4><p class=\"mb-2\">Height: 1.86 m (6'1\")</p><p class=\"mb-2\">Discipline: Beach</p><p>Olympic gold medalist (2016), World and European champion, Walkenhorst was a force at the net. Her powerful blocks and emotional intensity made her the perfect partner for Laura Ludwig. Though she retired young due to injury, her impact was immense.</p>"
  },
  {
    "name": "Alix Klineman",
    "country": "USA",
    "known_for": "Olympic gold medalist",
    "detailed_info": "<h4 class=\"font-bold text-lg mb-2\">Alix Klineman</h4><p class=\"mb-2\">Height: 1.96 m (6'5\")</p><p class=\"mb-2\">Discipline: Beach</p><p>Transitioning from indoor to beach in 2017, Alix quickly rose to prominence with April Ross, winning Olympic gold in 2020. Known for her height, blocking, and composure, Klineman redefined what late-career transformation could look like in elite sports.</p>"
  },
  {
    "name": "Talita Antunes",
    "country": "Brazil",
    "known_for": "Beach volleyball champion",
    "detailed_info": "<h4 class=\"font-bold text-lg mb-2\">Talita Antunes</h4><p class=\"mb-2\">Height: 1.80 m (5'11\")</p><p class=\"mb-2\">Discipline: Beach</p><p>A 3-time Olympian and tour champion, Talita has partnered with top players like Larissa and Taiana. Her quick attacking and defensive anticipation have kept her relevant for nearly two decades. Known for her sportsmanship and longevity.</p>"
  },
  {
    "name": "Mariafe Artacho del Solar",
    "country": "Australia",
    "known_for": "Olympic silver medalist",
    "detailed_info": "<h4 class=\"font-bold text-lg mb-2\">Mariafe Artacho del Solar</h4><p class=\"mb-2\">Height: 1.73 m (5'8\")</p><p class=\"mb-2\">Discipline: Beach</p><p>A star of the Australian team, Mariafe won Olympic silver in 2021 and several international titles. She's known for her court intelligence, fast defense, and creative playmaking. As the sport grows in Australia, she has become its most prominent ambassador.</p>"
  },
  {
    "name": "Tijana Bošković",
    "country": "Serbia",
    "known_for": "World Champion",
    "detailed_info": "<h4 class=\"font-bold text-lg mb-2\">Tijana Bošković</h4><p class=\"mb-2\">Height: 1.94 m (6'4\")</p><p class=\"mb-2\">Discipline: Indoor</p><p>Bošković is one of the most dominant opposites in the world. She led Serbia to back-to-back World Championships (2018, 2022) and an Olympic silver (2016). Known for her raw power and aggressive serving, she has been named MVP in multiple tournaments. At just 20, she was already considered among the best in her position globally.</p>"
  },
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
  }
];

// Create the players.json file with the unique players
const playersData = {
  players: uniquePlayers
};

// Write the file
fs.writeFileSync('players.json', JSON.stringify(playersData, null, 2));

console.log(`Created players.json with ${uniquePlayers.length} unique players`);