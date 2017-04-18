/*
 * This is a script that defines a single function for creating specific instances of CAP Pokemon, custom abilities, and custom moves.
 */

function Syclar() {
	var cap = new CAP();
	cap.pokemonName = "Syclar";
	cap.type1 = "Ice";
	cap.type2 = "Bug";

	cap.ability1 = "Compound Eyes";
	cap.ability1Desc = "Raises accuracy by 30% and increases the probability of wild Pokemon holding items.";
	cap.ability2 = "Snow Cloak";
	cap.ability2Desc = "Evasion increases by 20% in hail.";

	cap.baseHP = 40;
	cap.baseAttack = 76;
	cap.baseDefense = 45;
	cap.baseSpAttack = 74;
	cap.baseSpDefense = 39;
	cap.baseSpeed = 91;

	cap.generation = "DP";
	return cap;
};

function Syclant() {
	var cap = new CAP();
	cap.pokemonName = "Syclant";
	cap.type1 = "Ice";
	cap.type2 = "Bug";

	cap.ability1 = "Compound Eyes";
	cap.ability1Desc = "Raises accuracy by 30% and increases the probability of wild Pokemon holding items.";
	cap.customAbility2 = Mountaineer();

	cap.baseHP = 70;
	cap.baseAttack = 116;
	cap.baseDefense = 70;
	cap.baseSpAttack = 114;
	cap.baseSpDefense = 64;
	cap.baseSpeed = 121;

	cap.generation = "DP";
	return cap;
};

function Mountaineer() {
	var ability = new CustomAbility();
	ability.abilityName = "Mountaineer";
	ability.shortDesc = "Avoids all Rock-type attacks and Stealth Rock when switching in.";
	ability.longDesc = "This Pokemon avoids all Rock-type attacks and entry hazards upon entering the battlefield, including Stealth Rock. This ability is only in effect while the Pokemon is switching in. When a Pokemon with this ability switches into a foe with Mold Breaker, Teravolt, or Turboblaze, the Pokemon with Mountaineer will avoid Stealth Rock damage, but will not be afforded any special protections from any Rock-type attacks launched by the foe.";
	return ability;
};

function Revenankh() {
	var cap = new CAP();
	cap.pokemonName = "Revenankh";
	cap.type1 = "Ghost";
	cap.type2 = "Fighting";

	cap.ability1 = "Shed Skin";
	cap.ability1Desc = "30% chance to heal status.";
	cap.ability2 = "Air Lock";
	cap.ability2Desc = "Blocks the effects of weather.";

	cap.baseHP = 90;
	cap.baseAttack = 105;
	cap.baseDefense = 90;
	cap.baseSpAttack = 65;
	cap.baseSpDefense = 110;
	cap.baseSpeed = 65;

	cap.generation = "DP";
	return cap;
};

function Embirch() {
	var cap = new CAP();
	cap.pokemonName = "Embirch";
	cap.type1 = "Fire";
	cap.type2 = "Grass";

	cap.ability1 = "Reckless";
	cap.ability1Desc = "Increases the power of recoil moves by 20%.";
	cap.ability2 = "Leaf Guard";
	cap.ability2Desc = "Prevents status effects in sun.";

	cap.baseHP = 60;
	cap.baseAttack = 40;
	cap.baseDefense = 55;
	cap.baseSpAttack = 65;
	cap.baseSpDefense = 40;
	cap.baseSpeed = 60;

	cap.generation = "DP";
	return cap;
};

function Flarelm() {
	var cap = new CAP();
	cap.pokemonName = "Flarelm";
	cap.type1 = "Fire";
	cap.type2 = "Grass";

	cap.ability1 = "Rock Head";
	cap.ability1Desc = "Negates recoil from recoil moves.";
	cap.ability2 = "Battle Armor";
	cap.ability2Desc = "Prevents critical hits.";

	cap.baseHP = 90;
	cap.baseAttack = 50;
	cap.baseDefense = 95;
	cap.baseSpAttack = 75;
	cap.baseSpDefense = 70;
	cap.baseSpeed = 40;

	cap.generation = "DP";
	return cap;
};

function Pyroak() {
	var cap = new CAP();
	cap.pokemonName = "Pyroak";
	cap.type1 = "Fire";
	cap.type2 = "Grass";

	cap.ability1 = "Rock Head";
	cap.ability1Desc = "Negates recoil from recoil moves.";
	cap.ability2 = "Battle Armor";
	cap.ability2Desc = "Prevents critical hits.";

	cap.baseHP = 120;
	cap.baseAttack = 70;
	cap.baseDefense = 105;
	cap.baseSpAttack = 95;
	cap.baseSpDefense = 90;
	cap.baseSpeed = 60;

	cap.generation = "DP";
	return cap;
};

function Breezi() {
	var cap = new CAP();
	cap.pokemonName = "Breezi";
	cap.type1 = "Poison";
	cap.type2 = "Flying";

	cap.ability1 = "Unburden";
	cap.ability1Desc = "Speed doubles when an item is used or lost.";
	cap.ability2 = "Own Tempo";
	cap.ability2Desc = "Cannot be confused.";

	cap.baseHP = 50;
	cap.baseAttack = 46;
	cap.baseDefense = 69;
	cap.baseSpAttack = 60;
	cap.baseSpDefense = 50;
	cap.baseSpeed = 75;

	cap.generation = "DP";
	return cap;
};

function Fidgit() {
	var cap = new CAP();
	cap.pokemonName = "Fidgit";
	cap.type1 = "Poison";
	cap.type2 = "Ground";

	cap.customAbility1 = Persistent();
	cap.ability2 = "Vital Spirit";
	cap.ability2Desc = "Prevents sleep. Increases wild encounters with higher level Pokemon.";

	cap.baseHP = 95;
	cap.baseAttack = 76;
	cap.baseDefense = 109;
	cap.baseSpAttack = 90;
	cap.baseSpDefense = 80;
	cap.baseSpeed = 105;

	cap.generation = "DP";
	return cap;
};

function Persistent() {
	var ability = new CustomAbility();
	ability.abilityName = "Persistent";
	ability.shortDesc = "Increases the duration of Gravity, Heal Block, Safeguard, Tailwind, and Trick Room by two turns when used by this Pokemon.";
	ability.longDesc = 'When <a href="/dp/moves/gravity/">Gravity</a>, ' +
		'<a href="/sm/moves/trick_room/">Trick Room</a>, ' +
		'<a href="/sm/moves/heal_block/">Heal Block</a>, ' +
		'<a href="/sm/moves/safeguard/">Safeguard</a>, or ' +
		'<a href="/sm/moves/tailwind/">Tailwind</a> is used by this Pokemon, ' +
		'it will last for two turns longer than it otherwise would. ' +
		'This extension remains even after the holder switches out.';
	return ability;
};

function Stratagem() {
	var cap = new CAP();
	cap.pokemonName = "Stratagem";
	cap.type1 = "Rock";

	cap.ability1 = "Levitate";
	cap.ability1Desc = "This Pokemon is immune to Ground-type moves.";
	cap.ability2 = "Technician";
	cap.ability2Desc = "Increases power of moves with 60 base power or less by 50%.";

	cap.baseHP = 90;
	cap.baseAttack = 60;
	cap.baseDefense = 65;
	cap.baseSpAttack = 120;
	cap.baseSpDefense = 70;
	cap.baseSpeed = 130;

	cap.generation = "DP";
	return cap;
};

function PaleoWave() {
	var move = new CustomMove();
	move.moveName = "Paleo Wave";
	move.type = "Rock";
	move.category = "Special";
	move.power = 85;
	move.accuracy = 100;
	move.pp = 15;
	move.shortDesc = "Has a 20% chance to lower the target's Attack by one stage.";
	return move;
};

function Arghonaut() {
	var cap = new CAP();
	cap.pokemonName = "Arghonaut";
	cap.type1 = "Water";
	cap.type2 = "Fighting";

	cap.ability1 = "Unaware";
	cap.ability1Desc = "Ignores stat boosts and debuffs on other Pokemon.";

	cap.baseHP = 105;
	cap.baseAttack = 110;
	cap.baseDefense = 95;
	cap.baseSpAttack = 70;
	cap.baseSpDefense = 100;
	cap.baseSpeed = 75;

	cap.generation = "DP";
	return cap;
};

function Kitsunoh() {
	var cap = new CAP();
	cap.pokemonName = "Kitsunoh";
	cap.type1 = "Steel";
	cap.type2 = "Ghost";

	cap.ability1 = "Frisk";
	cap.ability1Desc = "Reveals the foe's item.";
	cap.ability2 = "Limber";
	cap.ability2Desc = "Blocks paralysis.";

	cap.baseHP = 80;
	cap.baseAttack = 103;
	cap.baseDefense = 85;
	cap.baseSpAttack = 55;
	cap.baseSpDefense = 80;
	cap.baseSpeed = 110;

	cap.generation = "DP";
	return cap;
};

function ShadowStrike() {
	var move = new CustomMove();
	move.moveName = "Shadow Strike";
	move.type = "Ghost";
	move.category = "Physical";
	move.power = 80;
	move.accuracy = 95;
	move.pp = 10;
	move.shortDesc = "Has a 50% chance of lowering the target's Defense 1 stage.";
	return move;
};

function Cyclohm() {
	var cap = new CAP();
	cap.pokemonName = "Cyclohm";
	cap.type1 = "Electric";
	cap.type2 = "Dragon";

	cap.ability1 = "Shield Dust";
	cap.ability1Desc = "Secondary effects won't occur.";
	cap.ability2 = "Static";
	cap.ability2Desc = "Enemies' contact moves can paralyze them.";

	cap.baseHP = 108;
	cap.baseAttack = 60;
	cap.baseDefense = 118;
	cap.baseSpAttack = 112;
	cap.baseSpDefense = 70;
	cap.baseSpeed = 80;

	cap.generation = "DP";
	return cap;
};

function Colossoil() {
	var cap = new CAP();
	cap.pokemonName = "Colossoil";
	cap.type1 = "Dark";
	cap.type2 = "Ground";

	cap.customAbility1 = Rebound();
	cap.ability2 = "Guts";
	cap.ability2Desc = "Attack is increased 50% when afflicted by a non-volatile status.";

	cap.baseHP = 133;
	cap.baseAttack = 122;
	cap.baseDefense = 72;
	cap.baseSpAttack = 71;
	cap.baseSpDefense = 72;
	cap.baseSpeed = 95;

	cap.generation = "DP";
	return cap;
};

function Rebound() {
	var ability = new CustomAbility();
	ability.abilityName = "Rebound";
	ability.shortDesc = "Bounces back certain non-damaging moves when switching in.";
	ability.longDesc = "This Pokemon bounces back certain non-damaging moves on the turn it switches in. This includes moves that induce status, moves that alter the target's stats (excluding Memento), entry hazards, and so on. Rebound reflects the sames moves that Magic Bounce and Magic Coat do.";
	return ability;
};

function Krilowatt() {
	var cap = new CAP();
	cap.pokemonName = "Krilowatt";
	cap.type1 = "Electric";
	cap.type2 = "Water";

	cap.ability1 = "Trace";
	cap.ability1Desc = "Copies foe's ability.";
	cap.ability2 = "Magic Guard";
	cap.ability2Desc = "Prevents indirect damage.";

	cap.baseHP = 151;
	cap.baseAttack = 84;
	cap.baseDefense = 73;
	cap.baseSpAttack = 83;
	cap.baseSpDefense = 74;
	cap.baseSpeed = 105;

	cap.generation = "DP";
	return cap;
};

function Voodoom() {
	var cap = new CAP();
	cap.pokemonName = "Voodoom";
	cap.type1 = "Fighting";
	cap.type2 = "Dark";

	cap.ability1 = "Volt Absorb";
	cap.ability1Desc = "Heals 25% HP when hit by an Electric-type attack.";
	cap.ability2 = "Lightning Rod";
	cap.ability2Desc = "All Electric-type attacks target this Pokemon. Grants immunity to Electric-type moves and boosts Special Attack by 1 stage when hit by an Electric-type move.";

	cap.baseHP = 90;
	cap.baseAttack = 85;
	cap.baseDefense = 80;
	cap.baseSpAttack = 105;
	cap.baseSpDefense = 80;
	cap.baseSpeed = 110;

	cap.generation = "DP";
	return cap;
};

function Scratchet() {
	var cap = new CAP();
	cap.pokemonName = "Scratchet";
	cap.type1 = "Normal";
	cap.type2 = "Fighting";

	cap.ability1 = "Scrappy";
	cap.ability1Desc = "Can hit Ghost-types with Fighting- and Normal-type moves.";
	cap.ability2 = "Prankster";
	cap.ability2Desc = "Non-damaging moves have their priority increased by one level. Opposing Dark-types are immune to affected moves.";
	cap.ability3 = "Vital Spirit";
	cap.ability3Desc = "Prevents sleep. Increases wild encounters with higher level Pokemon.";

	cap.baseHP = 55;
	cap.baseAttack = 85;
	cap.baseDefense = 80;
	cap.baseSpAttack = 20;
	cap.baseSpDefense = 70;
	cap.baseSpeed = 40;

	cap.generation = "BW";
	return cap;
};

function Tomohawk() {
	var cap = new CAP();
	cap.pokemonName = "Tomohawk";
	cap.type1 = "Flying";
	cap.type2 = "Fighting";

	cap.ability1 = "Intimidate";
	cap.ability1Desc = "Lowers the foe's Attack by 1 stage. Decreases wild encounter rate.";
	cap.ability2 = "Prankster";
	cap.ability2Desc = "Non-damaging moves have their priority increased by one level. Opposing Dark-types are immune to affected moves.";
	cap.ability3 = "Justified";
	cap.ability3Desc = "Raises Attack by one stage when hit by a Dark-type move.";

	cap.baseHP = 105;
	cap.baseAttack = 60;
	cap.baseDefense = 90;
	cap.baseSpAttack = 115;
	cap.baseSpDefense = 80;
	cap.baseSpeed = 85;

	cap.generation = "BW";
	return cap;
};

function Necturine() {
	var cap = new CAP();
	cap.pokemonName = "Necturine";
	cap.type1 = "Grass";
	cap.type2 = "Ghost";

	cap.ability1 = "Anticipation";
	cap.ability1Desc = "Alerts the Pokemon of certain dangerous moves.";
	cap.ability3 = "Telepathy";
	cap.ability3Desc = "Does not take damage from allies' attacks.";

	cap.baseHP = 49;
	cap.baseAttack = 55;
	cap.baseDefense = 60;
	cap.baseSpAttack = 50;
	cap.baseSpDefense = 75;
	cap.baseSpeed = 51;

	cap.generation = "BW";
	return cap;
};

function Necturna() {
	var cap = new CAP();
	cap.pokemonName = "Necturna";
	cap.type1 = "Grass";
	cap.type2 = "Ghost";

	cap.ability1 = "Forewarn";
	cap.ability1Desc = "Tells which of the foe's moves has the highest Base Power.";
	cap.ability3 = "Telepathy";
	cap.ability3Desc = "Does not take damage from allies' attacks.";

	cap.baseHP = 64;
	cap.baseAttack = 120;
	cap.baseDefense = 100;
	cap.baseSpAttack = 85;
	cap.baseSpDefense = 120;
	cap.baseSpeed = 81;

	cap.generation = "BW";
	return cap;
};

function Mollux() {
	var cap = new CAP();
	cap.pokemonName = "Mollux";
	cap.type1 = "Fire";
	cap.type2 = "Poison";

	cap.ability1 = "Dry Skin";
	cap.ability1Desc = "User absorbs Water-type attacks and has a weakness to Fire-type moves. Heals in rain and is damaged by sun.";
	cap.ability3 = "Illuminate";
	cap.ability3Desc = "Increases wild encounter rate (no effect in battles).";

	cap.baseHP = 95;
	cap.baseAttack = 45;
	cap.baseDefense = 83;
	cap.baseSpAttack = 131;
	cap.baseSpDefense = 105;
	cap.baseSpeed = 76;

	cap.generation = "BW";
	return cap;
};

function Cupra() {
	var cap = new CAP();
	cap.pokemonName = "Cupra";
	cap.type1 = "Bug";
	cap.type2 = "Psychic";

	cap.ability1 = "Shield Dust";
	cap.ability1Desc = "Secondary effects won't occur.";
	cap.ability2 = "Keen Eye";
	cap.ability2Desc = "Pokemon's accuracy cannot be lowered. Opponent's evasion boosts are ignored. Decreases wild encounter rate.";
	cap.ability3 = "Illusion";
	cap.ability3Desc = "The wielder appears as the last Pokemon in the party to the opponent.";

	cap.baseHP = 50;
	cap.baseAttack = 60;
	cap.baseDefense = 49;
	cap.baseSpAttack = 67;
	cap.baseSpDefense = 30;
	cap.baseSpeed = 44;

	cap.generation = "BW";
	return cap;
};

function Argalis() {
	var cap = new CAP();
	cap.pokemonName = "Argalis";
	cap.type1 = "Bug";
	cap.type2 = "Psychic";

	cap.ability1 = "Shed Skin";
	cap.ability1Desc = "30% chance to heal status.";
	cap.ability2 = "Compound Eyes";
	cap.ability2Desc = "Raises accuracy by 30% and increases the probability of wild Pokemon holding items.";
	cap.ability3 = "Illusion";
	cap.ability3Desc = "The wielder appears as the last Pokemon in the party to the opponent.";

	cap.baseHP = 60;
	cap.baseAttack = 90;
	cap.baseDefense = 89;
	cap.baseSpAttack = 87;
	cap.baseSpDefense = 40;
	cap.baseSpeed = 54;

	cap.generation = "BW";
	return cap;
};

function Aurumoth() {
	var cap = new CAP();
	cap.pokemonName = "Aurumoth";
	cap.type1 = "Bug";
	cap.type2 = "Psychic";

	cap.ability1 = "Weak Armor";
	cap.ability1Desc = "Boosts Speed by 2 stages and lowers Defense by 1 stage when the user is hit by a physical move.";
	cap.ability2 = "No Guard";
	cap.ability2Desc = "All attacks used by and used on this Pokemon will never miss.";
	cap.ability3 = "Illusion";
	cap.ability3Desc = "The wielder appears as the last Pokemon in the party to the opponent.";

	cap.baseHP = 110;
	cap.baseAttack = 120;
	cap.baseDefense = 99;
	cap.baseSpAttack = 117;
	cap.baseSpDefense = 60;
	cap.baseSpeed = 94;

	cap.generation = "BW";
	return cap;
};

function Brattler() {
	var cap = new CAP();
	cap.pokemonName = "Brattler";
	cap.type1 = "Dark";
	cap.type2 = "Grass";

	cap.ability1 = "Harvest";
	cap.ability1Desc = "After each turn, the wielder may receive the Berry it used at a 50% chance (100% if in sun).";
	cap.ability2 = "Infiltrator";
	cap.ability2Desc = "The wielder bypasses the foe's Light Screen, Reflect, Mist, Safeguard, and Substitute.";

	cap.baseHP = 80;
	cap.baseAttack = 70;
	cap.baseDefense = 40;
	cap.baseSpAttack = 20;
	cap.baseSpDefense = 90;
	cap.baseSpeed = 30;

	cap.generation = "BW";
	return cap;
};

function Malaconda() {
	var cap = new CAP();
	cap.pokemonName = "Malaconda";
	cap.type1 = "Dark";
	cap.type2 = "Grass";

	cap.ability1 = "Harvest";
	cap.ability1Desc = "After each turn, the wielder may receive the Berry it used at a 50% chance (100% if in sun).";
	cap.ability2 = "Infiltrator";
	cap.ability2Desc = "The wielder bypasses the foe's Light Screen, Reflect, Mist, Safeguard, and Substitute.";

	cap.baseHP = 115;
	cap.baseAttack = 100;
	cap.baseDefense = 60;
	cap.baseSpAttack = 40;
	cap.baseSpDefense = 130;
	cap.baseSpeed = 55;

	cap.generation = "BW";
	return cap;
};

function Cawdet() {
	var cap = new CAP();
	cap.pokemonName = "Cawdet";
	cap.type1 = "Steel";
	cap.type2 = "Flying";

	cap.ability1 = "Keen Eye";
	cap.ability1Desc = "Pokemon's accuracy cannot be lowered. Opponent's evasion boosts are ignored. Decreases wild encounter rate.";
	cap.ability2 = "Volt Absorb";
	cap.ability2Desc = "Heals 25% HP when hit by an Electric-type attack.";
	cap.ability3 = "Big Pecks";
	cap.ability3Desc = "The wielder's Defense cannot be lowered.";

	cap.baseHP = 35;
	cap.baseAttack = 72;
	cap.baseDefense = 85;
	cap.baseSpAttack = 40;
	cap.baseSpDefense = 55;
	cap.baseSpeed = 88;

	cap.generation = "BW";
	return cap;
};

function Cawmodore() {
	var cap = new CAP();
	cap.pokemonName = "Cawmodore";
	cap.type1 = "Steel";
	cap.type2 = "Flying";

	cap.ability1 = "Intimidate";
	cap.ability1Desc = "Lowers the foe's Attack by 1 stage. Decreases wild encounter rate.";
	cap.ability2 = "Volt Absorb";
	cap.ability2Desc = "Heals 25% HP when hit by an Electric-type attack.";
	cap.ability3 = "Big Pecks";
	cap.ability3Desc = "The wielder's Defense cannot be lowered.";

	cap.baseHP = 50;
	cap.baseAttack = 92;
	cap.baseDefense = 130;
	cap.baseSpAttack = 65;
	cap.baseSpDefense = 75;
	cap.baseSpeed = 118;

	cap.generation = "BW";
	return cap;
};

function Volkritter() {
	var cap = new CAP();
	cap.pokemonName = "Volkritter";
	cap.type1 = "Water";
	cap.type2 = "Fire";

	cap.ability1 = "Anticipation";
	cap.ability1Desc = "Alerts the Pokemon of certain dangerous moves.";
	cap.ability2 = "Infiltrator";
	cap.ability2Desc = "The wielder bypasses the foe's Light Screen, Reflect, Mist, Safeguard, and Substitute.";
	cap.ability3 = "Unnerve";
	cap.ability3Desc = "Prevents the foe from consuming its held Berry item.";

	cap.baseHP = 60;
	cap.baseAttack = 30;
	cap.baseDefense = 50;
	cap.baseSpAttack = 80;
	cap.baseSpDefense = 60;
	cap.baseSpeed = 70;

	cap.generation = "XY";
	return cap;
};

function Volkraken() {
	var cap = new CAP();
	cap.pokemonName = "Volkraken";
	cap.type1 = "Water";
	cap.type2 = "Fire";

	cap.ability1 = "Analytic";
	cap.ability1Desc = "Raises the power of all moves by 30% if the wielder moves last.";
	cap.ability2 = "Infiltrator";
	cap.ability2Desc = "The wielder bypasses the foe's Light Screen, Reflect, Mist, Safeguard, and Substitute.";
	cap.ability3 = "Pressure";
	cap.ability3Desc = "Enemy attacks lose 1 extra PP. Increases wild encounter rate.";

	cap.baseHP = 100;
	cap.baseAttack = 45;
	cap.baseDefense = 80;
	cap.baseSpAttack = 135;
	cap.baseSpDefense = 100;
	cap.baseSpeed = 95;

	cap.generation = "XY";
	return cap;
};

function Snugglow() {
	var cap = new CAP();
	cap.pokemonName = "Snugglow";
	cap.type1 = "Electric";
	cap.type2 = "Poison";

	cap.ability1 = "Storm Drain";
	cap.ability1Desc = "All Water-type attacks target this Pokemon. Grants immunity to Water-type moves and boosts Special Attack by 1 stage when hit by a Water-type move.";
	cap.ability2 = "Vital Spirit";
	cap.ability2Desc = "Prevents sleep. Increases wild encounters with higher level Pokemon.";
	cap.ability3 = "Telepathy";
	cap.ability3Desc = "Does not take damage from allies' attacks.";

	cap.baseHP = 40;
	cap.baseAttack = 37;
	cap.baseDefense = 79;
	cap.baseSpAttack = 91;
	cap.baseSpDefense = 68;
	cap.baseSpeed = 70;

	cap.generation = "XY";
	return cap;
};

function Plasmanta() {
	var cap = new CAP();
	cap.pokemonName = "Plasmanta";
	cap.type1 = "Electric";
	cap.type2 = "Poison";

	cap.ability1 = "Storm Drain";
	cap.ability1Desc = "All Water-type attacks target this Pokemon. Grants immunity to Water-type moves and boosts Special Attack by 1 stage when hit by a Water-type move.";
	cap.ability2 = "Vital Spirit";
	cap.ability2Desc = "Prevents sleep. Increases wild encounters with higher level Pokemon.";
	cap.ability3 = "Telepathy";
	cap.ability3Desc = "Does not take damage from allies' attacks.";

	cap.baseHP = 60;
	cap.baseAttack = 57;
	cap.baseDefense = 119;
	cap.baseSpAttack = 131;
	cap.baseSpDefense = 98;
	cap.baseSpeed = 100;

	cap.generation = "XY";
	return cap;
};

function Floatoy() {
	var cap = new CAP();
	cap.pokemonName = "Floatoy";
	cap.type1 = "Water";

	cap.ability1 = "Water Veil";
	cap.ability1Desc = "Prevents burn.";
	cap.ability2 = "Heatproof";
	cap.ability2Desc = "Reduces Fire damage 50%.";
	cap.ability3 = "Swift Swim";
	cap.ability3Desc = "Speed doubles in rain.";

	cap.baseHP = 48;
	cap.baseAttack = 70;
	cap.baseDefense = 40;
	cap.baseSpAttack = 70;
	cap.baseSpDefense = 30;
	cap.baseSpeed = 77;

	cap.generation = "XY";
	return cap;
};

function Caimanoe() {
	var cap = new CAP();
	cap.pokemonName = "Caimanoe";
	cap.type1 = "Water";
	cap.type2 = "Steel";

	cap.ability1 = "Water Veil";
	cap.ability1Desc = "Prevents burn.";
	cap.ability2 = "Heatproof";
	cap.ability2Desc = "Reduces Fire damage 50%.";
	cap.ability3 = "Light Metal";
	cap.ability3Desc = "The wielder's weight is halved.";

	cap.baseHP = 73;
	cap.baseAttack = 85;
	cap.baseDefense = 65;
	cap.baseSpAttack = 80;
	cap.baseSpDefense = 40;
	cap.baseSpeed = 87;

	cap.generation = "XY";
	return cap;
};

function Naviathan() {
	var cap = new CAP();
	cap.pokemonName = "Naviathan";
	cap.type1 = "Water";
	cap.type2 = "Steel";

	cap.ability1 = "Water Veil";
	cap.ability1Desc = "Prevents burn.";
	cap.ability2 = "Heatproof";
	cap.ability2Desc = "Reduces Fire damage 50%.";
	cap.ability3 = "Light Metal";
	cap.ability3Desc = "The wielder's weight is halved.";

	cap.baseHP = 103;
	cap.baseAttack = 110;
	cap.baseDefense = 90;
	cap.baseSpAttack = 95;
	cap.baseSpDefense = 65;
	cap.baseSpeed = 97;

	cap.generation = "XY";
	return cap;
};

function Crucibelle() {
	var cap = new CAP();
	cap.pokemonName = "Crucibelle";
	cap.dexName = "Crucibelle";
	cap.forme = "Base";
	cap.type1 = "Rock";
	cap.type2 = "Poison";

	cap.ability1 = "Regenerator";
	cap.ability1Desc = "Wielder heals 1/3 of its maximum HP on switching out.";
	cap.ability2 = "Mold Breaker";
	cap.ability2Desc = "Abilities that hinder attacks are nullified.";
	cap.ability3 = "Liquid Ooze";
	cap.ability3Desc = "Leeching moves cause the enemy to lose HP instead.";

	cap.baseHP = 106;
	cap.baseAttack = 105;
	cap.baseDefense = 65;
	cap.baseSpAttack = 75;
	cap.baseSpDefense = 85;
	cap.baseSpeed = 104;

	cap.generation = "XY";

	var mega = new CAP();
	mega.pokemonName = "Mega Crucibelle";
	mega.dexName = "Crucibelle";
	mega.forme = "Mega";
	mega.type1 = "Rock";
	mega.type2 = "Poison";
	mega.ability1 = "Magic Guard";
	mega.ability1Desc = "Prevents indirect damage.";
	mega.baseHP = 106;
	mega.baseAttack = 135;
	mega.baseDefense = 75;
	mega.baseSpAttack = 85;
	mega.baseSpDefense = 125;
	mega.baseSpeed = 114;
	mega.generation = "XY";

	cap.megaEvolution = mega;

	return cap;
};

function Pluffle() {
	var cap = new CAP();
	cap.pokemonName = "Pluffle";
	cap.type1 = "Fairy";

	cap.ability1 = "Natural Cure";
	cap.ability1Desc = "Cures status on switching out.";
	cap.ability2 = "Aroma Veil";
	cap.ability2Desc = "Protects allies from attacks that limit their move choices.";
	cap.ability3 = "Friend Guard";
	cap.ability3Desc = "Reduces damage done to a teammate by 25%.";

	cap.baseHP = 74;
	cap.baseAttack = 38;
	cap.baseDefense = 51;
	cap.baseSpAttack = 65;
	cap.baseSpDefense = 78;
	cap.baseSpeed = 49;

	cap.generation = "XY";
	return cap;
};

function Kerfluffle() {
	var cap = new CAP();
	cap.pokemonName = "Kerfluffle";
	cap.type1 = "Fairy";
	cap.type2 = "Fighting";

	cap.ability1 = "Natural Cure";
	cap.ability1Desc = "Cures status on switching out.";
	cap.ability2 = "Aroma Veil";
	cap.ability2Desc = "Protects allies from attacks that limit their move choices.";
	cap.ability3 = "Friend Guard";
	cap.ability3Desc = "Reduces damage done to a teammate by 25%.";

	cap.baseHP = 84;
	cap.baseAttack = 78;
	cap.baseDefense = 86;
	cap.baseSpAttack = 115;
	cap.baseSpDefense = 88;
	cap.baseSpeed = 119;

	cap.generation = "XY";
	return cap;
};
