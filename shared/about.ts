/** Longer write-ups per game slug. Each entry is a list of short paragraphs. */
export const ABOUT: Record<string, string[]> = {
  codenames: [
    'Twenty-five word cards are laid out in a grid. Each team has a spymaster who secretly knows which words belong to their agents, which are innocent bystanders, and which single word is the assassin. On their turn, the spymaster says exactly one word and one number — “Ocean, 3” — and their team debates which cards they meant.',
    'The magic is in the trade-off between ambitious clues that cover many words and safe clues that cover one. Guess the assassin and you lose instantly.',
    'Online tip: the official site lets one person create a room and share the link; everybody joins on their phone, picks a team, and the spymaster sees the key card. Put everyone on a call for the arguing.',
  ],
  'one-night-werewolf': [
    'Everyone gets a secret role card: villagers, werewolves, and a handful of special roles like the Seer, Robber, and Troublemaker. During a single “night” phase, roles act in order — peeking at cards, swapping them — so by morning nobody is quite sure who they are anymore.',
    'Then there is one loud discussion and one vote. If a werewolf dies the village wins; if not, the werewolves do. Nobody is eliminated and a game takes ten minutes, so you just deal again.',
    'netgames.io handles the night phase for you and runs entirely in the browser with no accounts. Great with 5–7 on a video call.',
  ],
  avalon: [
    'Players are secretly split into loyal servants of Arthur and minions of Mordred. Each round a leader proposes a team for a quest and everybody votes on it; if approved, team members secretly play success or fail cards. Good needs three successful quests; Evil needs three failures.',
    'Merlin knows who is evil but must hint subtly — if Good wins the quests, the Assassin gets one shot at naming Merlin to steal the game. It is the thinking player’s Werewolf: no elimination, pure logic and persuasion.',
    'avalon.fun includes the full role set (Percival, Morgana, Mordred, Oberon, Lancelot) and quest history so you can argue about who was on which team.',
  ],
  'secret-hitler': [
    'Liberals outnumber fascists, but fascists know who each other are and Hitler is hidden among them. Each round a president nominates a chancellor, the table votes, and the pair secretly draws policy cards and enacts one — with plenty of room to lie about what they saw.',
    'Enacting fascist policies grants the president powers like investigating loyalties or executing a player. Liberals win by passing five liberal policies or shooting Hitler; fascists win with six fascist policies or by electing Hitler chancellor late in the game.',
    'secrethitler.io is the polished free version: create a private game, share the code, and it handles all the card draws and presidential powers.',
  ],
  spyfall: [
    'Everyone is dealt the same secret location — a casino, a submarine, a school — plus a role there, except one player who is the spy and sees nothing. Players take turns asking each other questions to prove they know the location without saying anything so specific that the spy can figure it out.',
    'At any point players can vote to accuse someone; the spy can also stop the game and guess the location. Eight minutes of paranoid conversation per round.',
    'Both free sites support custom location packs, and netgames.io works well on phones. You need a voice or video call for the questioning.',
  ],
  coup: [
    'Each player holds two hidden influence cards from a deck of Duke, Assassin, Captain, Ambassador, and Contessa. On your turn you take an action — and you can claim any role to do it, whether you hold it or not. Anyone can call your bluff; the loser of the challenge loses an influence.',
    'Lose both cards and you are out. Games take five minutes, so it is perfect for a quick round while waiting for people to show up, and it rewards bald-faced lying.',
    'coup.thebrown.net is a straightforward free implementation with private room links; Board Game Arena also has it if you already have accounts there.',
  ],
  'love-letter': [
    'A deck of just sixteen cards. You hold one, draw one, and play one. Guards guess what rivals hold, Priests peek, Barons compare hands, and the Princess must never be discarded. Get caught with the lowest card at the end of the round and you lose it.',
    'Rounds take two minutes and games take fifteen. It is deduction, memory, and a little luck, and it is perfect for two to four players who want something light.',
    'netgames.io runs it in the browser with no sign-up; Board Game Arena has the official version with expansions.',
  ],
  enigma: [
    'Each team shares four secret keywords numbered 1–4. Every round one teammate gets a three-digit code like 4-2-1 and gives three clues that point to those keywords in order. Your team must decode it — but the other team hears everything and, over the rounds, starts to figure out your words too.',
    'Two interceptions win the game; two failed decodes lose it. It is essentially Decrypto: clever, tense, and genuinely hard.',
    'Enigma on netgames.io is a free fan version of Decrypto and works well on phones. There is also decrypto.online.',
  ],
  wavelength: [
    'A spectrum is revealed — “Guilty pleasure ↔ Actually good”, “Cold ↔ Hot” — and one player sees a hidden target somewhere along it. They give a single clue (“a warm bath”) and their team turns a dial to where they think the target is. Closer is more points.',
    'The other team then bets whether the true answer is left or right of the guess. The fun is entirely in the arguments about whether pizza is more of a seven or an eight.',
    'wavelength.zone is the official free browser version — one link, no downloads. Best over a call with the dial on a shared screen.',
  ],
  'gartic-phone': [
    'Everybody writes a silly sentence. Each sentence is passed to the next player who has to draw it; the drawing is passed on to be described in words; that description is drawn again. At the end, every chain is replayed as an animated album and the room falls apart laughing.',
    'A dozen modes include speed rounds, animation, and “background” drawings. Nothing to learn and works for absolutely any group.',
    'garticphone.com is free, browser-based, and generates a room link. Drawing with a finger on a phone is part of the charm.',
  ],
  skribbl: [
    'One player picks a word from three options and has eighty seconds to draw it while everybody else types guesses. Faster guesses earn more points; the artist scores for every correct guess. After a few rounds the leaderboard settles the argument.',
    'Add a custom word list of inside jokes, mutual friends, and workplace references and it becomes a completely different, much funnier game.',
    'skribbl.io is free with private rooms via link. Works on mobile, though a mouse or stylus helps.',
  ],
  fishbowl: [
    'Everyone secretly writes a few words or phrases into the bowl. In round one you describe them freely to your team in one-minute turns. Round two uses the exact same words but you may say only one word. Round three: charades, no talking.',
    'Because the words repeat, in-jokes form instantly and the later rounds get easier and sillier. It is the best team party game for a mixed group of friends and strangers.',
    'fishbowl-game.com handles the bowl, timers, and team scoring so you only need a video call for the acting.',
  ],
  jklm: [
    'A collection of quick, free browser party games. BombParty is the headliner: a ticking bomb is passed around and you must type a word containing the shown syllable — “ULA”, “STR” — before it explodes. PopSagot is a guessing game, and there are trivia and geography modes too.',
    'It is frantic and hilarious with six or more, and rounds last a couple of minutes. No accounts, just a room code.',
    'Works well on phones and laptops alike; add a call for the shouting.',
  ],
  scattergories: [
    'A letter is rolled and a list of categories appears: a boy’s name, something in a kitchen, a reason to be late. Everyone races to fill every category with an answer starting with that letter before the timer runs out.',
    'Then you compare: unique answers score, duplicates cancel out, and creative stretches get voted on. Easy, familiar, and reliably funny with any group size.',
    'scattergoriesonline.net is a free browser version with private rooms and built-in voting.',
  ],
  'cards-against-humanity': [
    'Each round one player, the Card Czar, reads a black card with a blank or a question. Everybody else submits their funniest white card; the Czar picks a winner. That is the whole game — the point is the cards.',
    'Pretend You’re Xyzzy is a long-running free clone with the official card packs plus thousands of custom decks. Decidedly not for polite company.',
    'Set up a private game, share the link, and play over a call so the Czar can read cards aloud.',
  ],
  jackbox: [
    'The Jackbox Party Packs are the gold standard for remote game nights. One person owns a pack on Steam, console, or their phone and streams the screen; everybody else joins at jackbox.tv from any phone browser with a four-letter room code. No downloads for players.',
    'Standout games include Quiplash (write the funniest answer), Fibbage (invent believable lies), Drawful, Trivia Murder Party, and Tee K.O. Most support eight players plus a big audience.',
    'Paid, but one purchase covers the whole group. Stream over Discord, Zoom, or Steam Remote Play.',
  ],
  kahoot: [
    'A host picks or builds a multiple-choice quiz and shares a game PIN. Players answer on their phones and points are awarded for speed as well as correctness, with a leaderboard between questions.',
    'Millions of public quizzes exist, from pub trivia to film scores to “how well do you know the bride”. It is a schoolroom tool, but it works brilliantly for a themed trivia night.',
    'Free to host basic quizzes; players never need an account.',
  ],
  geoguessr: [
    'You are dropped into a Google Street View location somewhere in the world with no labels. Wander around, look for language, driving side, vegetation, and road signs, then pin your guess on a map. Closer guesses score more.',
    'Duels, battle royale, and party modes let friends compete in real time. It becomes weirdly competitive once you start recognising Finnish road bollards.',
    'A free tier exists with limited play; the subscription unlocks unlimited games and party modes.',
  ],
  mafia: [
    'The original social deduction game. A moderator secretly assigns roles: a small mafia who know each other, and a town that does not. Each night the mafia choose a victim; each day the town debates and votes to lynch a suspect. Town wins by eliminating the mafia; mafia wins by outnumbering them.',
    'Longer and more elimination-heavy than One Night Werewolf, but with ten or more people the day discussions become epic.',
    'mafia.gg automates the moderator with configurable roles and works over a call; Werewolf.online offers a more app-like experience.',
  ],
  hanabi: [
    'You hold your cards facing away from you — everyone can see your hand except you. The team is building five fireworks in colour order from one to five. On your turn you either give a clue about someone’s hand (“these two are red”), play a card, or discard to earn a clue token back.',
    'Clues are scarce, mistakes are costly, and the whole game is about reading intent. Hanabi is one of the most quietly brilliant games ever made.',
    'hanab.live is the community standard with variants, replays, and a strong etiquette culture. Board Game Arena also has it.',
  ],
  'the-crew': [
    'A trick-taking card game with a twist: everyone is on the same team and the missions tell you exactly which tricks each player must win. You cannot talk about your hand beyond one carefully placed communication token per round.',
    'Fifty missions escalate from trivial to fiendish, so it plays like a campaign you chip away at in twenty-minute sessions. Both the space and the deep-sea versions are wonderful.',
    'Board Game Arena has both editions with saved campaign progress across sessions.',
  ],
  pandemic: [
    'Four diseases are spreading across the world map. Players take unique roles — medic, scientist, dispatcher — and fly between cities treating outbreaks and collecting cards to discover cures before the outbreaks cascade out of control.',
    'The game is famous for the way it lets you coordinate every move as a team, and for how often it beats you anyway.',
    'Board Game Arena has the official version with the On the Brink expansion roles.',
  ],
  'the-mind': [
    'Each player has a hand of numbered cards from 1 to 100. Together, with absolutely no communication, you must play them all to a single pile in ascending order. You just… feel when it is your turn.',
    'It sounds impossible and then it happens, and the room goes silent and then cheers. A genuinely strange and delightful experience.',
    'themind.online is a free fan version; Board Game Arena has the official game.',
  ],
  catan: [
    'Settle an island of hexagonal terrain. Each turn the dice decide which tiles produce resources — wood, brick, wheat, sheep, ore — and you trade with rivals to build roads, settlements, and cities. First to ten victory points wins.',
    'Trading is the heart of it: negotiate, bluff, and refuse the person in the lead. The gateway game that started the modern board-game boom.',
    'Colonist.io is a free, fast browser version with expansions and private rooms. Board Game Arena has the official edition.',
  ],
  carcassonne: [
    'Draw a tile and add it to the growing medieval landscape so that roads meet roads and cities meet cities. Place one of your followers to claim a feature and score when it completes. Farmers score at the end for every finished city they touch.',
    'Simple enough to teach in three minutes, with a sneaky amount of tactics around stealing cities and blocking farms.',
    'Board Game Arena has the official version with several expansions.',
  ],
  'ticket-to-ride': [
    'Collect sets of coloured train cards and spend them to claim railway routes across a map of North America or Europe. Longer routes score more, and secret destination tickets reward connecting distant cities — or punish you if you fail.',
    'Every turn is a simple choice between drawing cards and laying trains, but the race for contested routes makes it tense right to the end.',
    'Board Game Arena has the official game with multiple maps.',
  ],
  azul: [
    'Take all tiles of a single colour from one of the factory displays; the leftovers go to the centre for everyone else. Place them in your pattern lines and complete rows to transfer tiles to your wall for points, with bonuses for full rows, columns, and colour sets.',
    'Tiles you cannot place cost you points, so you can force rivals to take a pile of junk. Gorgeous, tactical, and the best abstract game of the decade.',
    'Board Game Arena has the official game. Also try Azul: Summer Pavilion there.',
  ],
  splendor: [
    'Collect gem tokens, spend them on development cards that provide permanent gem bonuses, and use those bonuses to buy bigger cards. Prestige points come from cards and from nobles who visit once you meet their requirements.',
    'Almost no rules, no luck after setup, and a beautiful curve where your engine snowballs. It is the perfect first engine-builder.',
    'Board Game Arena has the official version.',
  ],
  'seven-wonders': [
    'Everyone is dealt a hand of cards and picks one to play simultaneously, then passes the rest to their neighbour. Over three ages you build resources, military, science, and civic buildings, and only ever compete directly with the players beside you.',
    'Because all players act at once, a seven-player game takes thirty minutes. Few games scale so gracefully.',
    'Board Game Arena has the official game plus the two-player 7 Wonders Duel.',
  ],
  wingspan: [
    'You are a birder attracting species to three habitats. Each bird card adds a power to its row — lay eggs, gather food, draw cards — so every turn you activate a whole habitat and your engine grows. Round-end goals and bonus cards steer strategy.',
    'It is relaxing, beautiful, and surprisingly deep once you start chaining bird powers. The 170 illustrated birds are worth it alone.',
    'Board Game Arena has the official game with expansions.',
  ],
  'terraforming-mars': [
    'Corporations compete to make Mars habitable, raising oxygen, temperature, and ocean coverage while playing hundreds of unique project cards that generate resources and points. Each generation you gain income, draft cards, and expand your tableau.',
    'A heavy, sprawling engine-builder that regularly tops favourite-game lists. Expect two to three hours at the table — or spread it over days.',
    'The free Heroku fan implementation is fast and feature-complete; Board Game Arena has the official version.',
  ],
  dominion: [
    'Everyone starts with the same ten weak cards. Each turn you play actions, spend treasure to buy new cards from a shared supply, and shuffle everything back into your deck. Victory points clog your deck, so timing matters.',
    'Every game uses a different set of ten kingdom cards, so the puzzle changes every time. The game that invented deck-building.',
    'dominion.games is the official online version — free with the base set, subscription for expansions.',
  ],
  'sushi-go': [
    'Hands of sushi cards are passed around the table; pick one each round to build sets. Sashimi scores in threes, dumplings snowball, wasabi triples the next nigiri, and pudding is only tallied at the very end.',
    'A charming, ten-minute drafting game that teaches instantly and has just enough depth for adults.',
    'Board Game Arena has both Sushi Go! and the larger Sushi Go Party!.',
  ],
  skull: [
    'Each player has four discs: three flowers and one skull. Everyone places a disc face down, then someone bids how many discs they can flip without revealing a skull, starting with their own stack. Succeed twice and you win; flip a skull and you lose a disc.',
    'Pure bluffing with almost no rules. A game of nerve that gets loud.',
    'Board Game Arena has the official game.',
  ],
  saboteur: [
    'Dwarves dig tunnels toward the gold, playing path cards in a shared grid. But some players are secretly saboteurs, laying dead ends and breaking tools while pretending to help. Three rounds, most gold wins.',
    'A light hidden-role game where the accusations are half the fun. Great for families and mixed groups.',
    'Board Game Arena has the official game.',
  ],
  'king-of-tokyo': [
    'Giant monsters battle over Tokyo with custom dice: roll to attack, heal, gain energy for power cards, or score points. Whoever is in Tokyo hits everyone else but cannot heal. Twenty points or last monster standing wins.',
    'Yahtzee with kaiju and gleeful bullying. Teaches in two minutes and plays in thirty.',
    'Board Game Arena has the official game.',
  ],
  kingdomino: [
    'Pick a domino from the display and add it to your five-by-five kingdom, matching terrain to terrain. Areas score their size times the crowns inside. Picking a better tile means choosing later next round.',
    'Fifteen minutes, one clever decision per turn, and it won the Spiel des Jahres. Excellent with kids and adults alike.',
    'Board Game Arena has the official game.',
  ],
  patchwork: [
    'Two players buy Tetris-like patches of fabric and sew them onto a nine-by-nine quilt. Patches cost buttons and time; the time track determines who moves next, and empty squares cost you points at the end.',
    'A tight, thinky two-player puzzle that takes twenty minutes and rewards spatial planning.',
    'Board Game Arena has the official game.',
  ],
  jaipur: [
    'Two traders compete in the market: take goods cards, sell sets for scoring tokens that decrease in value, and manage a herd of camels that act as currency. Best of three rounds.',
    'Quick, tense, and beautifully balanced — widely considered one of the best two-player card games.',
    'Board Game Arena has the official game.',
  ],
  'lost-cities': [
    'Two explorers fund five expeditions by playing cards in ascending order. Starting an expedition costs twenty points, so you had better finish it; wager cards multiply the result for better or worse.',
    'A pocket-sized game of risk management that plays in fifteen minutes and begs for a rematch.',
    'Board Game Arena has the official game.',
  ],
  'welcome-to': [
    'Everyone has the same suburban street and writes house numbers in ascending order from flipped card pairs, building pools, parks, and fences along the way. Public goals reward the first players to hit them.',
    'A roll-and-write without dice that plays simultaneously, so it takes twenty-five minutes with any number of players.',
    'Board Game Arena has the official game.',
  ],
  'cant-stop': [
    'Roll four dice, pair them into two sums, and advance your runners up those numbered columns. Stop to lock in progress, or roll again and risk busting and losing it all. First to claim three columns wins.',
    'The purest push-your-luck game ever designed. Everyone shouts “one more roll”.',
    'Board Game Arena has the official game.',
  ],
  'no-thanks': [
    'A card is turned up. Either take it — and its points, which are bad — or pay a chip to pass. Chips on the card go to whoever eventually takes it, and runs of consecutive cards only count their lowest number.',
    'Teaches in a minute, plays in fifteen, and rewards reading exactly when a terrible card becomes worth taking.',
    'Board Game Arena has the official game.',
  ],
  wizard: [
    'A trick-taking game where the hand size grows each round and you must predict exactly how many tricks you will take. Wizards win any trick; jesters lose. Hit your bid for points; miss and you lose points per trick.',
    'Skull King is the pirate-themed cousin with special cards and a bit more chaos. Both are superb for four to six.',
    'Board Game Arena has Wizard; Skull King is also available there.',
  ],
  concept: [
    'Get your team to guess a word, film, or person by placing coloured pawns on a board of universal icons — a person, a colour, a country, a size — with no talking allowed. The main concept is marked with one colour and sub-concepts with others.',
    'Part Pictionary, part Twenty Questions. Wonderfully creative with a mixed-language group.',
    'Board Game Arena has the official game. You need a call so the guessers can shout.',
  ],
  set: [
    'Twelve cards are dealt face up, each with a shape, colour, number, and shading. A set is three cards where each attribute is either all the same or all different. Spot one, shout, take it. Fastest eyes win.',
    'Real-time, no turns, and ruthlessly fair. Set With Friends adds a chat and multiple variants.',
    'setwithfriends.com is free with private rooms via link.',
  ],
  chess: [
    'The game needs no introduction, but the online options do. Lichess is free, open source, ad-free, and lets you challenge a friend with a single link — with clocks, variants like Chess960 and Crazyhouse, puzzles, and analysis. Chess.com has the biggest community, lessons, and bots.',
    'Great for two people who want something quick, and both sites let you play correspondence games over days.',
  ],
  go: [
    'Place stones on a nineteen-by-nineteen grid to surround territory. The rules fit on a napkin; the strategy has filled libraries. Nine-by-nine boards make a quick fifteen-minute game for beginners.',
    'Online-Go.com is free with live and correspondence games, teaching resources, and a friendly ranking ladder.',
  ],
  scrabble: [
    'Form words on the board from your seven tiles, crossing existing words and chasing premium squares. The official online version handles the dictionary so there are no arguments.',
    'Play live or take turns over a day. Words With Friends is the casual alternative with a bigger player base.',
  ],
  'classic-card-games': [
    'Hearts, Spades, Euchre, Rummy, Gin, Crazy Eights, Backgammon, Checkers, Yahtzee and dozens more, all free with no accounts. Create a private table and share the link so friends fill the seats instead of bots.',
    'cardgames.io is instant and simple; PlayOK has the same classics with a more competitive ranked scene.',
  ],
  poker: [
    'Spin up a private Texas Hold’em or Omaha table with one click, share the link, and set blinds and buy-ins with play chips. Real money is up to you and your group chat.',
    'PokerNow is the standard for home games over a video call; it runs in any browser and supports ten seats.',
  ],
  'uno-and-more': [
    'Light, silly card games for when nobody wants to think: Fluxx, where the rules change every turn; Uno-style shedding games; and quick party fillers. All free on Board Game Arena with real-time or turn-based play.',
    'Good for kids, mixed groups, or the end of a long night.',
  ],
  'heavy-euros': [
    'For the table that wants a real brain-burner: Ark Nova, Agricola, Castles of Burgundy, Great Western Trail, Brass, and more. Board Game Arena hosts them with full rule enforcement, so nobody needs to own the box or referee.',
    'Most support turn-based mode, letting a three-hour game unfold over a week with notifications when it is your move. A BGA Premium account is needed to start some of these tables.',
  ],
  'playingcards-io': [
    'Not a game but a virtual table: decks, hands, dice, tokens, and boards you arrange yourself. Load a template for a classic game or build your own house rules from scratch, then share a room link.',
    'Ideal for that obscure family card game that nobody has implemented, or for testing your own prototype. Free and browser-based.',
  ],
  decrypto: [
    'Each team has four keywords numbered 1–4 that only they can see. Every round one teammate draws a three-digit code (say 4-2-1) and gives three clues pointing at those keywords in order. Your team must decode it; the other team listens and tries to intercept.',
    'The genius is the arms race: clues have to get more oblique every round because the enemy is building a picture of your words, but too oblique and your own side miscommunicates. Two interceptions win; two miscommunications lose.',
    'decrypto.online is a free fan implementation with private rooms — put both teams on a call and mute during huddles.',
  ],
  'just-one': [
    'One player is the guesser and closes their eyes. Everyone else sees a mystery word and writes a single-word clue. Before the guesser looks, identical clues are cancelled out — so the obvious clue is exactly the one you should not write.',
    'Fully cooperative, teaches in a minute, and won the Spiel des Jahres. It is at its best with 6–7 because the cancellations get ruthless.',
    'Board Game Arena runs it for free in real time; you will want a voice call for the groaning when three of you wrote the same thing.',
  ],
  werewords: [
    'The Mayor knows a secret word. Everybody asks yes/no questions and gets a token — yes, no, maybe, so close — with four minutes to guess it. But one player is a Werewolf who knows the word and wants you to fail, and the Seer knows it too and must help without being obvious.',
    'If the village guesses, the werewolves get one shot at naming the Seer; if not, the villagers vote on who the werewolf is. Ten minutes, no elimination, wildly replayable.',
    'The free official app at werewords.com handles roles, the word, and the timer; you supply the shouting.',
  ],
  'town-of-salem': [
    'A big-group evolution of Mafia with role cards for everyone: Town roles (Sheriff, Doctor, Jailor, Investigator), the Mafia (Godfather, Framer, Blackmailer), and chaotic Neutrals like the Serial Killer and the Jester, who wins only if you lynch them.',
    'Days are trials with public accusations and defense speeches; nights are when the killers, healers and investigators act. Written wills and last words make every game a mystery novel.',
    'Free to play in the browser with public lobbies, so it also works when you do not have 15 friends online at once.',
  ],
  diplomacy: [
    'Seven European powers in 1901. Every unit gets one order per turn — hold, move, support, convoy — and all orders are revealed and resolved at the same time. There are no dice: an attack succeeds only if it has more support than the defense.',
    'Since one unit can never dislodge another alone, the whole game is the negotiation phase before orders lock. Alliances form, promises are made, and someone always stabs someone. Legendary for ending friendships.',
    'Backstabbr has the nicest interface for private games with friends; webDiplomacy is the long-running community site with public games and tournaments. Turns usually run 24 hours, so it is a week-long group chat rather than a single evening.',
  ],
  'risk-warzone': [
    'The Risk formula: place armies, attack neighbouring territories, and earn bonus armies for holding whole continents. Warzone keeps the core but adds hundreds of community maps, fog of war options, and simultaneous turns that fix the endless waiting.',
    'Play real-time games in an hour or multi-day games with one move a day. Free tier is generous; a membership unlocks more maps and features.',
    'Dominating 12 is closer to the physical board if you want classic dice-rolling Risk.',
  ],
  'monopoly-richup': [
    'Roll, move, buy the property you land on, and build houses once you own a set. Rent bleeds your opponents dry until only one remains. You know this one.',
    'Richup.io is a slick free browser version with private rooms, trading, auctions, and house rules like collecting Free Parking money — plus it is faster than the real thing because it does the bookkeeping.',
  ],
  yahtzee: [
    'Roll five dice up to three times, keeping the ones you want, then score the result in one of thirteen boxes: threes, full house, large straight, and the 50-point Yahtzee. Each box can be used once, so late-game rolls get desperate.',
    'cardgames.io lets you make a private multiplayer table, no accounts required.',
  ],
  backgammon: [
    'Move your fifteen checkers around the board according to two dice, bear them off before your opponent, and hit their lone “blots” to send them back to the start. The doubling cube adds a gambling layer that makes every game about knowing when you are ahead.',
    'Five thousand years old and still the best two-player dice game there is.',
    'cardgames.io has private rooms for a quick match; bkgm.com has rules, opening tables and strategy when you want to actually get good.',
  ],
  checkers: [
    'Lidraughts is what Lichess is for chess: free, open source, no ads, with live games, ratings, puzzles and analysis. It supports international draughts on a 10×10 board plus English checkers, Russian, Brazilian and other variants.',
    'Create a game and send the link to a friend — they do not need an account.',
  ],
  'hearts-spades': [
    'Hearts: four players, no partners, avoid taking hearts (1 point each) and the Queen of Spades (13) — unless you can take them all and “shoot the moon”. Spades: two partnerships bid how many tricks they will take, spades are always trump, and going nil is the big gamble.',
    'Both are perfect for a standing four-person group who want a familiar game with real skill.',
    'cardgames.io runs both with private multiplayer tables and bots to fill empty seats.',
  ],
  hive: [
    'No board — the pieces are the board. Each bug moves differently: the queen bee steps one space, beetles climb on top, grasshoppers jump lines, spiders move exactly three, ants run anywhere. Surround the enemy queen to win.',
    'The one rule that makes it sing: the hive must never be split, so many pieces are pinned and every move is a small puzzle. It has real depth and a tournament scene.',
    'HiveGame.com is the official free real-time server; Board Game Arena also has it if your group is already there.',
  ],
  onitama: [
    'A 5×5 board, five pieces a side, and five movement cards. When you use a card to move, it slides across to your opponent, who can use it later — so every attack also arms the enemy.',
    'Win by capturing the master or walking your master onto their temple. Games take fifteen minutes and there are enough card combinations that no two feel the same.',
  ],
  'seven-wonders-duel': [
    'Cards are laid out in a pyramid, some face down, and you may only take an uncovered card. Build resources, science, military and civic buildings across three ages. Win instantly by conquering with military or collecting six science symbols — or on points.',
    'Many consider it the best two-player game ever designed: tight, fast, and full of moments where you realise the card you just uncovered is exactly what your opponent needed.',
  ],
  'stone-age': [
    'Place your tribe members on the board — forest for wood, quarry for stone, river for gold, hunting grounds for food — then roll dice for each worker to see what they bring back. Spend it on huts and civilisation cards, and feed everyone at the end of the round.',
    'The dice give it a friendly, pushing-your-luck feel that makes it the ideal first “real” euro for a group used to party games.',
  ],
  'puerto-rico': [
    'Each round players take turns choosing a role — Settler, Mayor, Builder, Craftsman, Trader, Captain — and everybody performs the action, but the chooser gets a bonus. Plant plantations, staff them with colonists, produce goods, and ship them for points.',
    'It sat at the very top of BoardGameGeek for years for good reason: the interaction is entirely in role timing. Pick Captain when your opponents have goods but no ship space and watch them rot.',
  ],
  tokaido: [
    'Walk the road from Kyoto to Edo, stopping at inns, temples, hot springs and villages. Each stop collects something — panorama pieces, souvenirs, meals — and the player at the back of the road always moves next.',
    'It is beautiful and calm, but the movement rule hides a real game: moving far claims the best spots first; dawdling gives you more turns.',
  ],
  takenoko: [
    'Grow a bamboo garden tile by tile, irrigate it, then move the gardener (who grows bamboo) and the panda (who eats it) to complete secret objective cards. A weather die adds a small bonus each turn.',
    'Light, adorable, and a great choice for mixed groups of gamers and non-gamers.',
  ],
  'six-nimmt': [
    'Everyone picks a card from their hand and reveals at once. Cards are placed in ascending order onto four rows; whoever plays the sixth card in a row must take the first five and eat their bull-heads (penalty points).',
    'You can plan, but with eight people the rows fill up faster than you expect, and the panic is the fun. Ten rounds, lowest score wins.',
  ],
  'race-for-the-galaxy': [
    'Everybody secretly chooses a phase (Explore, Develop, Settle, Consume, Produce), then all chosen phases happen for everyone, with the chooser getting a bonus. Cards in hand are also your currency: to build a planet costing three, you discard three cards.',
    'Dense with iconography and takes a couple of plays to click, but then it is a 30-minute engine-building masterpiece with huge variety. Board Game Arena teaches you the icons as you go.',
  ],
  coloretto: [
    'On your turn either flip a card and add it to a row, or take a row and sit out the rest of the round. Chameleon cards come in seven colours; your three biggest sets score positively and every other colour scores against you.',
    'A perfect ten-minute filler and the ancestor of Zooloretto.',
  ],
  tichu: [
    'Partners sit opposite. Play single cards, pairs, straights and full houses that must beat the previous play, trying to empty your hand before the other team. Special cards — Mah Jong, Dog, Phoenix, Dragon — twist the rules. Before playing you may call Tichu (100 points) or Grand Tichu (200) to bet you will go out first.',
    'Huge in Germany and among gamers who like a card game with real long-term partnership strategy. Games go to 1,000 points.',
  ],
  draftosaurus: [
    'Take a dinosaur from your hand, pass the rest, and place it in one of your park’s pens — each pen scores differently (all the same species, all different, pairs, biggest, etc.). One player rolls a placement die each turn that restricts where everyone else can put theirs.',
    'Fifteen minutes and very kid-friendly, but the pen puzzle gives adults something to chew on.',
  ],
  'kingdom-builder': [
    'Draw a terrain card, place three houses on that terrain, adjacent to your own if possible. That mandatory adjacency is the whole game: you will be dragged toward regions you do not want unless you plan ahead. Three scoring cards from a pool of ten change how you win every game.',
    'Spiel des Jahres winner that plays in 45 minutes and rewards spatial thinking.',
  ],
  quoridor: [
    'Get your pawn to the opposite side of a 9×9 board. On your turn you either move one space or place one of your ten walls to block your opponent — but you may never seal off their path entirely.',
    'A ten-minute abstract that is easy enough for kids and still a genuine head-to-head puzzle.',
  ],
  'sea-salt-paper': [
    'Draw two cards from the deck and keep one, or take the top of a discard pile. Play pairs for immediate effects — steal a card, take another turn, peek at the deck. When you have seven points in hand you may end the round: either stop and score, or call “last chance” and bet that after one more turn each you are still highest.',
    'Origami-styled art and a lot of tension for such a small deck.',
  ],
  hanamikoji: [
    'Seven geisha, each favouring certain item cards. Over a round you take four actions exactly once: secret (keep one), trade-off (discard two), gift (offer three, opponent picks one, you keep two), and competition (offer two pairs, opponent picks one). Win a geisha by having more of her items.',
    'One of the most elegant two-player games there is, playing in fifteen minutes with real bluffing.',
  ],
  'for-sale': [
    'Round one: bid on property cards numbered 1–30, paying only for the ones you win. Round two: cheques are revealed each turn and everyone secretly plays a property; highest property takes the biggest cheque.',
    'The whole game is ten minutes and it works for three to six players, so it is a perfect opener or closer.',
  ],
  'incan-gold': [
    'Explore a temple together, card by card. Treasure cards are split among everyone still inside; hazard cards are fine once, but the second copy of the same hazard collapses the temple and everyone inside loses everything. Before each card, players secretly choose to stay or leave — and leavers pick up any leftover gems on the way out.',
    'Simultaneous decisions keep everyone involved, and it is all over in 20 minutes. Also published as Diamant.',
  ],
  'railroad-ink': [
    'Four dice are rolled each round showing road and rail segments. Everyone draws them onto their own 7×7 grid, trying to connect the twelve exits around the edge, build a long highway and railway, and avoid dead ends.',
    'Zero direct interaction, so it is ideal for mixed-skill groups and even solo. Board Game Arena scores it for you.',
  ],
  'castles-of-burgundy': [
    'Roll two dice. Each die lets you take a tile from a matching depot, place a tile onto a matching number in your estate, sell goods, or take workers that adjust dice. Completing a region of the same colour scores more the earlier in the game you finish it.',
    'Stefan Feld’s masterpiece: it looks like a beige spreadsheet and plays like a dream, with dice mitigated so thoroughly that you never feel cheated.',
  ],
  agricola: [
    'Your family of two must plough fields, sow grain, fence pastures, breed sheep, boars and cattle, renovate the house from wood to clay to stone — and, six times over the game, eat. Unfed family members beg, and begging costs three points each.',
    'Hundreds of occupation and improvement cards make every game different. Heavy but deeply rewarding, and one of the most-played games on Board Game Arena.',
  ],
  'ark-nova': [
    'Run a zoo using five action cards whose strength depends on their position in your row; using one sends it back to position one. Build enclosures on your hex map, play animal cards into them, and pursue conservation projects.',
    'Two scoring tracks — appeal and conservation — move toward each other, and the game ends when they cross. Sprawling and brilliant; expect your first play to run long.',
  ],
  'gaia-project': [
    'Choose one of fourteen factions, each tied to a planet type and with unique abilities. Terraform planets to build mines, upgrade them to trading stations and research labs, form federations, and climb six research tracks.',
    'The economy is unforgiving and there is no randomness after setup. Expect three hours and a lot of thinking.',
  ],
  'through-the-ages': [
    'Grow a civilisation across four ages using a rolling card row: technologies, leaders like Aristotle and Napoleon, wonders, and military units. Balance culture (points), science, food, resources, happiness and military strength — falling behind in military invites aggression.',
    'The card-row market and no map keep it focused on the civilization arc. Long, but many people’s favourite game ever.',
  ],
  'boggle-wordshake': [
    'A 4×4 grid of letters and three minutes. Find words by connecting adjacent letters (including diagonals) without reusing a tile; longer words score more.',
    'Wordshake is a free browser Boggle — share a grid seed and compare scores, or just race the clock alone.',
  ],
  'connect-four-battleship': [
    'papergames.io is a collection of the simple games everyone grew up with: drop pieces to connect four, call coordinates to sink ships, or get five in a row in Gomoku. Create a room, send the link, play in the browser.',
    'Great for a quick head-to-head while you wait for the rest of the group to show up.',
  ],
  wikitrivia: [
    'A free Timeline: you get a card with a historical event or person and must drop it into the correct spot on a growing chronological line. One wrong placement ends the game; how long a streak can you build?',
    'Solo by design, but it works brilliantly as a group screen-share argument.',
  ],
}
