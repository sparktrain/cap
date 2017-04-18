/*
 * This is the template script for CAP website pages.
 * Javascript objects hold content data, although they may be populated from other .js files.
 * HTML is usually created by calling some form of composeXXXX() method.
 */
function CAP() {
	this.pokemonName = "";
	this.dexName = "";
	this.forme = "";
	this.type1 = "";
	this.type2 = "";
	
	this.ability1 = "";
	this.ability1Desc = "";
	this.customAbility1 = null;
	this.ability2 = "";
	this.ability2Desc = "";
	this.customAbility2 = null;
	this.ability3 = "";
	this.ability3Desc = "";
	
	this.baseHP = 0;
	this.baseAttack = 0;
	this.baseDefense = 0;
	this.baseSpAttack = 0;
	this.baseSpDefense = 0;
	this.baseSpeed = 0;
	
	this.heightFeet = 0;
	this.heightInches = 0;
	this.weightPounds = 0;
	this.weightKilos = 0;
	
	this.eggGroup1 = "";
	this.eggGroup2 = "";
	
	var i;
	this.movesLevel = [];
	for (i=0;i<101;i++) { this.movesLevel[i] = null; }
	this.movesTM = [];
	for (i=0;i<100;i++) { this.movesTM[i] = null; }
	this.movesHM = [];
	for (i=0;i<10;i++) { this.movesHM[i] = null; }
	this.movesEgg = [];
	this.movesTutor = [];
	this.movesCustom = [];
	
	
	this.movesets = [];
	
	this.topicLeader = "";
	this.conceptCreator = ""
	this.statSpreadCreator = "";
	this.designArtist = "";
	this.spriteArtist = "";
	this.nameCreator = "";
	this.movepoolCreator = "";
	this.playtestChampion = "";
	
	this.indexDesc = "";
	this.generation = null;
	this.megaEvolution = null;
};
CAP.prototype.calcStat = function(base, iv, ev, natureString, labelString) {
	var natureMultiplier = 1;
	if (natureString == "+") {
		natureMultiplier = 1.1;
	}
	if (natureString == "-") {
		natureMultiplier = 0.9;
	}
	var computedStat = 0;
	if (labelString == 'HP') {
		if (natureString == '') {
			computedStat = Math.floor(Math.floor(((((2 * base) + iv) + Math.floor(ev/4))) + 10) + 100);
		} else {
			computedStat = '-';
		}
	} else {
		computedStat = Math.floor(Math.floor(((((2 * base) + iv) + Math.floor(ev/4))) + 5) * natureMultiplier);
	}
	return computedStat;
};
function Moveset() {
	this.movesetName = "";
	this.ability = "";
	this.item = "";
	this.nature = "";
	
	this.hpEV = 0;
	this.atkEV = 0;
	this.defEV = 0;
	this.spAtkEV = 0;
	this.spDefEV = 0;
	this.speedEV = 0;
	
	this.moveslots = [];
};
function CustomMove() {
	this.moveName = "";
	this.type = "";
	this.category = "";
	this.power = 0;
	this.accuracy = 0;	
	this.priority = 0;
	this.pp = 0;
	this.target = "Single non-user";
	this.shortDesc = "";
	this.longDesc = "";
};
function CustomAbility() {
	this.abilityName = "";
	this.shortDesc = "";
	this.longDesc = "";
};
function lowerAndJoin(aString) {
	return aString.toLowerCase().replace(" ", "_");
};
function toHex(aNumber) {
  var result = "00";
  if ((aNumber >= 0) && (aNumber <= 15))
  	{ result = "0" + aNumber.toString(16); }
  else  
  	{ result = aNumber.toString(16); }
  return result;
};
function getBar(aStat) {
	var widthPx = Math.max(Math.min((aStat * 1.5), 300), 18);
	
	var cstat = Math.floor(Math.min(Math.max(aStat - 50, 0), 100) * 2.55);
    var r = toHex(Math.min(((255 - cstat) * 2), 255));
    var g = toHex(Math.min(cstat * 2,255));
    var b = toHex(Math.floor(Math.min(Math.max((aStat - 140), 0), 60) * (255 / 60)));
    var rgb = r + g + b;

	return '<div style="width: ' + widthPx + 'px; background: #' + rgb + ';">' + aStat + '</div>';
}
function getStatRow(aStat, aLabel) {
	var txt = '';
	txt += '<tr> \n';
	txt += '<th>' + aLabel + '</th> \n';
	txt += '<td class="bar"> \n';
	txt += getBar(aStat) + '\n';
	txt += '</td> \n';
	txt += '<td>' + cap.calcStat(aStat, 0, 0, '-', aLabel) + '</td> \n';
	txt += '<td>' + cap.calcStat(aStat, 31, 0, '', aLabel) + '</td> \n';
	txt += '<td>' + cap.calcStat(aStat, 31, 252, '', aLabel) + '</td> \n';
	txt += '<td>' + cap.calcStat(aStat, 31, 252, '+', aLabel) + '</td> \n';
	txt += '</tr> \n';
	return txt;
};
function getTypeIcon(aType) {
	var lowerType = aType.toLowerCase();
	return '<a href="/bw/types/' + lowerType + 
	'"><img src="http://cap.smogon.com/web/media/types/' + 
	lowerType + '_big.png" style="margin: 10px 5px 0px 0px;" /></a>';	
};
function uniqueName(cap) {	
	if (cap.forme) {
		return cap.dexName + '-' + cap.forme;
	}
	return cap.pokemonName;
	
};
function lowerUnique(cap) {	
	return uniqueName(cap).toLowerCase();
};
function topHeaderInfo(cap) {
	
	var txt = "";
	txt += '<table id="dex_pokemon" style="margin-bottom: 0px;"> \n';
	txt += '<tr> \n';
	txt += '<td class="sprite"> \n';
	txt += '<img src="http://cap.smogon.com/Sprites/frontnormal-m' + lowerUnique(cap) + '.png" alt="" /> \n';
	txt += '</td> \n';
	txt += '<td class="header"> \n';
	txt += '<h1>' + cap.pokemonName + '</h1> \n';
	txt += getTypeIcon(cap.type1);
	if (cap.type2 !== '') {
	txt += getTypeIcon(cap.type2);
	} 
	txt += '</td> \n';
	
	txt += '<td class="ability"> \n';
	txt += '<dl> \n';
	if (cap.customAbility1 == null) {
	txt += '<dt> \n';
	txt += '<a href="/bw/abilities/' + lowerAndJoin(cap.ability1) + '">' + cap.ability1 + '</a> \n';
	txt += '</dt> \n';
	txt += '<dd>' + cap.ability1Desc + '</dd> \n';
	} else {
	txt += '<dt> \n';
	txt += '<a href="/cap/abilities?' + lowerAndJoin(cap.customAbility1.abilityName) + '">' + cap.customAbility1.abilityName + '</a> \n';		
	txt += '</dt> \n';
	txt += '<dd>' + cap.customAbility1.shortDesc + '</dd> \n';
	}
	if (cap.customAbility2 == null) {
	if (cap.ability2 !== '') {
	txt += '<dt> \n';
	txt += '<a href="/bw/abilities/' + lowerAndJoin(cap.ability2) + '">' + cap.ability2 + '</a> \n';
	txt += '</dt> \n';
	txt += '<dd>' + cap.ability2Desc + '</dd> \n';
	}} else {
	txt += '<dt> \n';
	txt += '<a href="/cap/abilities?' + lowerAndJoin(cap.customAbility2.abilityName) + '">' + cap.customAbility2.abilityName + '</a> \n';		
	txt += '</dt> \n';
	txt += '<dd>' + cap.customAbility2.shortDesc + '</dd> \n';
	}
	if (cap.ability3 !== '') {
	txt += '<dt> \n';
	txt += '<em><a href="/bw/abilities/' + lowerAndJoin(cap.ability3) + '">' + cap.ability3 + '</a></em> \n';
	txt += '</dt> \n';
	txt += '<dd>' + cap.ability3Desc + '</dd> \n';
	}
	txt += '</dl> \n';
	txt += '</td> \n';
	
	txt += '</tr> \n';
	txt += '</table> \n';
	
	return txt;
};

function statsTable(cap) {
	var txt = "";
	
	txt += '<table id="dex_pokemon_stats" style="margin-top: 0px;"> \n'; //Stats Table
	txt += '<caption>Statistics</caption> \n';
	txt += '<thead> \n';
	txt += '<tr> \n';
	txt += '<th colspan="2"></th> \n';
	txt += '<th>Min-</th> \n';
	txt += '<th>Min</th> \n';
	txt += '<th>Max</th> \n';
	txt += '<th>Max+</th> \n';
	txt += '</tr> \n';
	txt += '</thead> \n';	
	txt += '<tbody> \n';	
	txt += getStatRow(cap.baseHP, 'HP');
	txt += getStatRow(cap.baseAttack, 'Atk');
	txt += getStatRow(cap.baseDefense, 'Def');
	txt += getStatRow(cap.baseSpAttack, 'SpA');
	txt += getStatRow(cap.baseSpDefense, 'SpD');
	txt += getStatRow(cap.baseSpeed, 'Spe');
	txt += '</tbody> \n';
	txt += '</table> \n'; //Stats Table
	
	return txt;	
};
function artCell(cap) {
	var txt = "";
	
	txt += '<td> \n';
	if (cap.forme) txt += '<h3>' + cap.forme + '</h3> \n';
	txt += '<img src="http://cap.smogon.com/web/art/dex/' + lowerUnique(cap) + '_dex.jpg" alt="" /> \n';
	txt += '</td> \n';
	
	return txt;	
};
function heightWeightEggTableRows(cap) {
	var txt = "";
	
	txt += '<tr> \n';
	if (cap.forme) txt += '<td>' + cap.forme + '</td> \n';
	txt += '<td>' + cap.heightFeet + "' " + cap.heightInches + '"</td> \n';
	txt += '<td>' + cap.weightPounds + ' lbs / ' + cap.weightKilos + ' kg </td> \n';
	txt += '<td>' + cap.eggGroup1 + '</td> \n';
	if (cap.eggGroup2 !== '') {
	txt += '<td>' + cap.eggGroup2 + '</td> \n';
	}
	txt += '</tr> \n';
	
	return txt;	
};

function heightWeightEggTable(cap) {
	var txt = "";
	
	txt += '<table class="info"> \n'; //Height Weight Egg Table
	txt += '<tr> \n';
	if (cap.forme) txt += '<th>Forme</th> \n';
	txt += '<th>Height</th> \n';
	txt += '<th>Weight</th> \n';
	if (cap.eggGroup2 == '') {
	txt += '<th>Egg Group</th> \n';
	} else {
	txt += '<th>Egg Group 1</th> \n';
	txt += '<th>Egg Group 2</th> \n';
	}
	txt += '</tr> \n';
	
	txt += heightWeightEggTableRows(cap);
	
	if (cap.megaEvolution) {
		txt += heightWeightEggTableRows(cap.megaEvolution);
	}
	
	txt += '</table> \n'; //Height Weight Egg Table	
	
	return txt;	
};
function spriteTableRows(cap) {
	var txt = "";
	
	if (cap.forme) {
	txt += '<tr><td colspan=4><h3>' + cap.forme + '</h3></td></tr> \n';	
	}
	
	var lowerUName = lowerUnique(cap);	
	txt += '<tr> \n';
	txt += '<td><img src="http://cap.smogon.com/Sprites/frontnormal-m' + lowerUName + '.png" /></td> \n';
	txt += '<td><img src="http://cap.smogon.com/Sprites/frontnormal-f' + lowerUName + '.png" /></td> \n';
	txt += '<td><img src="http://cap.smogon.com/Sprites/frontshiny-m' + lowerUName + '.png" /></td> \n';
	txt += '<td><img src="http://cap.smogon.com/Sprites/frontshiny-f' + lowerUName + '.png" /></td> \n';
	txt += '</tr> \n';
	txt += '<tr> \n';
	txt += '<td><img src="http://cap.smogon.com/Sprites/backnormal-m' + lowerUName + '.png" /></td> \n';
	txt += '<td><img src="http://cap.smogon.com/Sprites/backnormal-f' + lowerUName + '.png" /></td> \n';
	txt += '<td><img src="http://cap.smogon.com/Sprites/backshiny-m' + lowerUName + '.png" /></td> \n';
	txt += '<td><img src="http://cap.smogon.com/Sprites/backshiny-f' + lowerUName + '.png" /></td> \n';
	txt += '</tr> \n';
	
	return txt;	
};
function spriteTable(cap) {
	var txt = "";
	
	txt += '<table class="info"> \n'; //Sprite Table
	txt += '<tr><th colspan=4>Sprites</th></tr> \n';
	
	txt += spriteTableRows(cap);
	
	if (cap.megaEvolution) {
		txt += spriteTableRows(cap.megaEvolution);
	}

	txt += '</table> \n'; //Sprite Table
	
	return txt;	
};
function composeDexPage(cap) {
	
	var lowerName = cap.pokemonName.toLowerCase();
	
	var txt = "";
	txt += '<ul class="tabs"> \n';
	txt += '<li><strong>CAP</strong></li> \n';
	txt += '<li class="tabspacer"><strong>Dex</strong></li> \n';
	txt += '<li><a href="/cap/pokemon/moves/' + lowerName + '">Moves</a></li> \n';
	txt += '<li><a href="/cap/pokemon/strategies/' + lowerName + '">Strategy</a></li> \n';
	txt += '</ul> \n';
	
	txt += topHeaderInfo(cap);
	txt += statsTable(cap);
	
	if (cap.megaEvolution) {		
		txt += '<hr> \n';
		txt += topHeaderInfo(cap.megaEvolution);
		txt += statsTable(cap.megaEvolution);
	}
	
	txt += '<table class="info" style="margin-bottom: 0px;"> \n'; //Art & Credits Table
	txt += '<tr> \n';
	txt += '<th WIDTH=400>Art Design</th> \n';
	txt += '<th>Credits</th> \n';
	txt += '</tr> \n';
	txt += '<tr> \n';
	txt += artCell(cap);
	txt += '<td> \n';
	txt += '<dl> \n';
	txt += '<dt>Topic Leader</dt> \n';
	txt += '<dd>' + cap.topicLeader + '</dd> \n';
	if (cap.conceptCreator !== '') {
	txt += '<dt>Concept</dt> \n';
	txt += '<dd>' + cap.conceptCreator + '</dd> \n';		
	}
	txt += '<dt>Base Stats</dt> \n';
	txt += '<dd>' + cap.statSpreadCreator + '</dd> \n';
	if (cap.movepoolCreator !== '') {
	txt += '<dt>Movepool</dt> \n';
	txt += '<dd>' + cap.movepoolCreator + '</dd> \n';		
	}
	txt += '<dt>Art Design</dt> \n';
	txt += '<dd>' + cap.designArtist + '</dd> \n';
	txt += '<dt>Sprites</dt> \n';
	txt += '<dd>' + cap.spriteArtist + '</dd> \n';
	txt += '<dt>Name</dt> \n';
	txt += '<dd>' + cap.nameCreator + '</dd> \n';
	if (cap.playtestChampion !== '') {
	txt += '<dt>Playtest Champion</dt> \n';
	txt += '<dd>' + cap.playtestChampion + '</dd> \n';		
	}
	txt += '</dl> \n';
	txt += '</td> \n';
	txt += '</tr> \n';
	
	if (cap.megaEvolution) {		
		txt += '<tr> \n';
		txt += artCell(cap.megaEvolution);
		txt += '<td></td> \n';
		txt += '</tr> \n';
	}
	
	txt += '</table> \n'; //Art & Credits Table

	txt += heightWeightEggTable(cap);
	txt += spriteTable(cap);

	return txt;
};
function CAPSet() {
	this.name = "";
	this.item = "";
	this.ability = "";
	this.nature = "";
	this.move = [null];
	this.evs = 
		{"HP": 0,
		"Atk": 0,
		"Def": 0,
		"SpA": 0,
		"SpD": 0,
		"Spe": 0
		};
	this.ivs = 
		{"HP": 31,
		"Atk": 31,
		"Def": 31,
		"SpA": 31,
		"SpD": 31,
		"Spe": 31
		};
}
CAPSet.prototype.hasIVs = function() {
	var v;
	for (v in this.ivs) {
		if (this.ivs[v] !== 31) {
			return true;
		}
	}
	return false;

};
function strategyTabs(aName) {
	var lowerName = aName.toLowerCase();	
	var txt = "";
	txt += '<ul class="tabs"> \n';
	txt += '<li><strong>CAP</strong></li> \n';
	txt += '<li class="tabspacer"><a href="/cap/pokemon/' + lowerName + '">Dex</a></li> \n';
	txt += '<li><a href="/cap/pokemon/moves/' + lowerName + '">Moves</a></li> \n';
	txt += '<li><strong>Strategy</strong></li> \n';
	txt += '</ul> \n';
	return txt;
};
function makeArray(aStringOrArray) {
	if (typeof(aStringOrArray)=='string') {
		var ary = [];
		ary[0] = aStringOrArray;
		return ary;
	}
	return aStringOrArray;
};
function slashAndLink(linkPrefix, aValue) {
	var txt = "";
	var valArray = makeArray(aValue);
	for (var i=0; i < valArray.length; i++) {
		if (i > 0) {
			txt += " / ";
		}
		txt += '<a href="' + linkPrefix + lowerAndJoin(valArray[i]) + '">';
		txt += valArray[i];
		txt += '</a>';
	}
	return txt;
};
function composeSet(set) {
	var txt = "";
	txt += '<table class="info strategyheader"> \n'; //Header Table
	txt += '<tr> \n';
	txt += '<th>Name</th> \n';
	txt += '<th>Item</th> \n';
	txt += '<th>Ability</th> \n';
	txt += '<th>Nature</th> \n';
	txt += '</tr> \n';
	txt += '<tr> \n';
	txt += '<td class="name"><h2>' + set.name + '</h2></td> \n';
	txt += '<td> \n';
	txt += slashAndLink('/bw/items/', set.item) + ' \n';
	txt += '</td> \n';
	txt += '<td> \n';
	txt += slashAndLink('/bw/abilities/', set.ability) + ' \n';
	txt += '</td> \n';
	txt += '<td> \n';
	txt += slashAndLink('/bw/natures/', set.nature) + ' \n';
	txt += '</td> \n';
	txt += '</tr> \n';
	txt += '</table> \n'; //Header Table

	txt += '<table class="info moveset"> \n'; //Moveset Table
	txt += '<tr> \n';
	txt += '<th>Moveset</th> \n';
	txt += '<th>EVs</th> \n';
	txt += '</tr> \n';
	txt += '<tr> \n';

	if (set.hasIVs()) {
		txt += '<td rowspan="3"> \n';
	} else {
		txt += '<td> \n';
	}
	for (var m=0;m<set.move.length;m++) {
		if (set.move[m] !== null) {
			txt += '~ ' + slashAndLink('/bw/moves/', set.move[m]);
			txt += '<br /> \n';
		}
	}
	txt += '</td> \n';
	
	txt += '<td> \n';
	var useSlash = false;
	var v;
	for (v in set.evs) {
		if (set.evs[v] !== 0) {
			if (useSlash) { txt += ' / '; }
			txt += set.evs[v];
			txt += ' ' + v;
			useSlash = true;
		}
	}
	txt += '</td> \n';
	
	txt += '</tr> \n';
	
	if (set.hasIVs()) {
		txt += '<tr><th>IVs</th></tr> \n';	
		txt += '<tr><td> \n';	
		var useSlash = false;
		var v;
		for (v in set.ivs) {
			if (set.ivs[v] !== 31) {
				if (useSlash) { txt += ' / '; }
				txt += set.ivs[v];
				txt += ' ' + v;
				useSlash = true;
			}
		}
		txt += '</td> \n';
		txt += '</tr> \n';
	}
	
	txt += '</table> \n'; //Moveset Table

	return txt;
};
function customMovesTable(cap) {
	var txt = "";
	if (cap.movesCustom.length == 0) return txt;
	
	if (cap.movesCustom.length > 1) {
	txt += '<h3>Signature Moves</h3> \n';
	} else {
	txt += '<h3>Signature Move</h3> \n';
	}
	txt += '<table class="sortable">';
	txt += '<thead> \n';
	txt += '<tr> \n';
	txt += '<th>Name</th> \n';
	txt += '<th>Type</th> \n';
	txt += '<th>Category</th> \n';
	txt += '<th>Power</th> \n';
	txt += '<th>Accuracy</th> \n';
	txt += '<th>PP</th> \n';
	txt += '<th>Description</th> \n';
	txt += '</tr> \n';
	txt += '</thead> \n';
	txt += '<tbody> \n';
	for (var i=0;i<cap.movesCustom.length;i++) {
	var move = cap.movesCustom[i];
	txt += '<tr> \n';
	txt += '<td><strong>'+move.moveName+'</strong></td> \n';
	txt += '<td>'+move.type+'</td> \n';
	txt += '<td>'+move.category+'</td> \n';
	txt += '<td>'+move.power+'</td> \n';
	txt += '<td>'+move.accuracy+'%</td> \n';
	txt += '<td>'+move.pp+'</td> \n';
	txt += '<td>'+move.shortDesc+'</td> \n';
	txt += '</tr> \n';
	}
	txt += '</tbody> \n';
	txt += '</table> \n';
	return txt;
};
function moveRow(i, moveName, odd_even, tableType) {
	var txt = '<tr class="' + odd_even + '">';
	switch (tableType) {
	case 'LEVEL':
		txt += '<td>' +  i + '</td><td>' + moveName + '</td>';
		break;
	case 'TM':
		var tmNum = (i < 10) ? ('0'+i) : i;
		txt += '<td> TM' +  tmNum + '</td><td>' + moveName + '</td>';
		break;
	case 'HM':
		var hmNum = (i < 10) ? ('0'+i) : i;
		txt += '<td> HM' +  hmNum + '</td><td>' + moveName + '</td>';
		break;
	default:
		txt += '<td>' + moveName + '</td>';
	}
	txt += '</tr> \n';
	return txt;
};
function movesTable(moves, headings, tableType) {
	var txt = '';
	var i;
	txt += '<td valign=top style="padding-right: 20px;"> \n';
	if (moves.length == 0) {
		txt += '- NONE - </td> \n';
		return txt;
	}
	txt += '<table class="sortable" style="margin-top: 0px;">'; //Moves Table
	txt += '<thead><tr> \n';
	for (i=0;i<headings.length;i++) {
		txt += '<th>' + headings[i] + '</th> \n';
	}
	txt += '</tr></thead> \n';
	txt += '<tbody> \n';
	var odd_even = 'even';
	for (i=0;i<moves.length;i++) {
		if (moves[i] !== null) {
			if (typeof(moves[i])=='string') {
				txt += moveRow(i, moves[i], odd_even, tableType);
				odd_even = (odd_even == 'even') ? 'odd' : 'even';
			} else {
				for (var j=0;j<moves[i].length;j++) {
					txt += moveRow(i, moves[i][j], odd_even, tableType);
					odd_even = (odd_even == 'even') ? 'odd' : 'even';
				}
			}
		}
	}	
	txt += '</tbody> \n';
	txt += '</table> \n'; //Moves Table
	txt += '</td> \n';
	return txt;
};
function composeMovesPage(cap) {
	var lowerName = cap.pokemonName.toLowerCase();	
	var txt = "";
	txt += '<ul class="tabs"> \n';
	txt += '<li><strong>CAP</strong></li> \n';
	txt += '<li class="tabspacer"><a href="/cap/pokemon/' + lowerName + '">Dex</a></li> \n';
	txt += '<li><strong>Moves</strong></li> \n';
	txt += '<li><a href="/cap/pokemon/strategies/' + lowerName + '">Strategy</a></li> \n';
	txt += '</ul> \n';
	
	txt += topHeaderInfo(cap);
	
	txt += customMovesTable(cap);
	
	txt += '<table> \n'; //Page Table
	txt += '<tr> \n';
	txt += '<td><h3>Level Up Moves</h3></td> \n';
	txt += '<td><h3>Tutor Moves</h3></td> \n';
	txt += '<td><h3>Egg Moves</h3></td> \n';
	txt += '</tr> \n';
	txt += '<tr> \n';
	txt += movesTable(cap.movesLevel, ['Level', 'Move'], 'LEVEL');
	txt += movesTable(cap.movesTutor, ['Move'], 'TUTOR');
	txt += movesTable(cap.movesEgg, ['Move'], 'EGG');
	txt += '</tr> \n';
	txt += '<tr> \n';
	txt += '<td><h3>TM Moves</h3></td> \n';
	txt += '<td><h3>HM Moves</h3></td> \n';
	txt += '</tr> \n';
	txt += '<tr> \n';
	txt += movesTable(cap.movesTM, ['TM', 'Move'], 'TM');
	txt += movesTable(cap.movesHM, ['HM', 'Move'], 'HM');
	txt += '</tr> \n';
	txt += '</table> \n'; //Page Table


	return txt;
};
function indexTableSprite(cap) {
	var txt = "";
	var lowerUName = lowerUnique(cap);
	txt += '<img src="http://cap.smogon.com/Sprites/frontnormal-m' + lowerUName + '.png" />\n';
	return txt;
};
function indexTableTypes(cap, rowSpan) {
	var txt = "";
	if (rowSpan == 1) {
		txt += '<td> \n';
	} else {
		txt += '<td rowspan="' + rowSpan + '"> \n';
	}
	txt += getTypeIcon(cap.type1);
	if (cap.type2 !== '') {
		txt += getTypeIcon(cap.type2);
	} 
	txt += '</td> \n';
	return txt;
};
function indexTableStats(cap) {
	var txt = "";
	txt += '<td>' + cap.baseHP + '</td> \n';
	txt += '<td>' + cap.baseAttack + '</td> \n';
	txt += '<td>' + cap.baseDefense + '</td> \n';
	txt += '<td>' + cap.baseSpAttack + '</td> \n';
	txt += '<td>' + cap.baseSpDefense + '</td> \n';
	txt += '<td>' + cap.baseSpeed + '</td> \n';
	return txt;
};
function indexTableRows(cap, projectNum) {
	var txt = "";
	var lowerName = cap.pokemonName.toLowerCase();
	
	var spriteRowSpan = (cap.megaEvolution) ? 4 : 3;
	txt += '<tr> \n';
	txt += '<td rowspan="' + spriteRowSpan + '" align="center">\n';
	txt += '<a href="/cap/pokemon/' + lowerName + '">\n';
	txt += indexTableSprite(cap);
	if (cap.megaEvolution) {
		txt += '<br>';
		txt += indexTableSprite(cap.megaEvolution);
	}
	txt += '</a>\n';
	txt += '</td> \n';
	
		
	var capNumRowSpan = (cap.megaEvolution) ? 3 : 2;
	txt += '<td rowspan="' + capNumRowSpan + '"><strong>' + projectNum + '</strong></td> \n';
	
	var nameRowSpan = (cap.megaEvolution) ? 1 : 2;	
	txt += '<td rowspan="' + nameRowSpan + '"><a href="/cap/pokemon/' + lowerName + '"><strong>' + cap.pokemonName + '</strong></a></td> \n';
	
	if (cap.megaEvolution) {
		txt += '<td></td> \n';
	} else {
		txt += indexTableTypes(cap, 2);
	}
	
	txt += '<th style="text-align: center">HP</td> \n';
	txt += '<th style="text-align: center">Atk</td> \n';
	txt += '<th style="text-align: center">Def</td> \n';
	txt += '<th style="text-align: center">SpA</td> \n';
	txt += '<th style="text-align: center">SpD</td> \n';
	txt += '<th style="text-align: center">Spe</td> \n';
	txt += '</tr> \n';
	
	if (cap.megaEvolution) {
		txt += '<tr> \n';	
		txt += '<td><strong>' + cap.forme + '</strong></td> \n';
		txt += indexTableTypes(cap, 1);
		txt += indexTableStats(cap);
		txt += '</tr> \n';
		txt += '<tr> \n';	
		txt += '<td><strong>' + cap.megaEvolution.forme + '</strong></td> \n';
		txt += indexTableTypes(cap.megaEvolution, 1);
		txt += indexTableStats(cap.megaEvolution);
		txt += '</tr> \n';
	} else {
		txt += '<tr> \n';	
		txt += indexTableStats(cap);
		txt += '</tr> \n';
		
	}
	
	txt += '<tr><td class="desc" colspan="9">' + cap.indexDesc + '</td></tr> \n';
	return txt;	
}
function composeCAPIndex(caps) {
	var txt = "";
	var currentGen = null;
	txt += '<table class="capindex" border="1" cellspacing="0" style="width: 100%; text-align: center;"> \n'; //Index Table
	for (var i=1;i<caps.length;i++) {
		var capGen = caps[i].generation;
		if (currentGen != capGen) {
			txt += '<tr> \n';
			txt += '<td colspan="10"> \n';
			if (capGen == 'DP') {
				txt += '<h2>Generation 4 - Diamond/Pearl</h2>';
			} else if (capGen == 'BW') {
				txt += '<h2>Generation 5 - Black/White</h2>';
			} else if (capGen == 'XY') {
				txt += '<h2>Generation 6 - X/Y</h2>';
			}
			txt += '</td> \n';
			txt += '</tr> \n';
			currentGen = capGen;
		}
		
		txt += indexTableRows(caps[i], i);

		if (i < (caps.length - 1)) {
			txt += '<tr><td colspan="10"></td></tr> \n';
		}
	}
	txt += '</table> \n'; //Index Table
	return txt;
};
function getTypeIcons(artObject) {
	var txt = "";
	txt += '<img src="http://cap.smogon.com/web/media/types/' + 
		artObject.type1().toLowerCase() + '_big.png" /> \n';
	if (artObject.type2() !== '') {
		txt += '<img src="http://cap.smogon.com/web/media/types/' + 
			artObject.type2().toLowerCase() + '_big.png" /> \n';
	}
	return txt;
};
function get3RandomNums(magnitude) {
	var r0, r1, r2 = null;
	r0 = (magnitude < 1) ? 0 : (Math.floor(Math.random()*magnitude));
	if (magnitude > 1) {
		while ((r1==null)||(r1==r0)) {
			r1 = Math.floor(Math.random()*magnitude);
		}
		if (magnitude > 2) {
			while ((r2==null)||(r2==r0)||(r2==r1)) {
				r2 = Math.floor(Math.random()*magnitude);
			}
		} else { return [r0, r1, 0]; }
	} else { return [r0, 0, 0]; }
	return [r0, r1, r2];
}
function composeThumb(section, gallery, tSeq, tNum) {
	var txt = "";
	var idString = "thumb" + tSeq;
	var thumbLeft = 10;
	var thumbTop = 10;
	if (tSeq == 2) {
		thumbLeft += 40;
		thumbTop += 10;
	}
	if (tSeq == 3) {
		thumbLeft += 15;
		thumbTop += 35;
	}	
	txt += '<div id="' + idString + '" class="capart_thumb" style="';
	txt += 'background-image: url(http://cap.smogon.com/web/art/gallery/' + section + '/'+ gallery + '/thumbnails.png); ';
	var offset = Math.floor(tNum * -50);
	txt += 'background-position: ' + offset + 'px 0px; ';
	txt += 'top: ' + thumbTop + 'px; ';
	txt += 'left: ' + thumbLeft + 'px; ';
	txt += '"></div> \n';
	return txt;
};
function composeThumbGroup(sectionDir, galleryDir, gallerySize) {
	var txt = "";
	var rands = get3RandomNums(gallerySize);
	txt += '<div class="capart_thumbGroup">';
	txt += composeThumb(sectionDir, galleryDir, 1, rands[0]);
	txt += composeThumb(sectionDir, galleryDir, 2, rands[1]);
	txt += composeThumb(sectionDir, galleryDir, 3, rands[2]);
	txt += '</div> \n';
	return txt;
};
function composeMini(section, gallery, tNum) {
	var txt = "";
	txt += '<div class="capart_mini" style="';
	txt += 'background-image: url(http://cap.smogon.com/web/art/gallery/' + section + '/'+ gallery + '/minis.jpg); ';
	var offset = Math.floor(tNum * -150);
	txt += 'background-position: ' + offset + 'px 0px; ';
	txt += '"></div> \n';
	return txt;
};
function composeSprite(section, gallery, fileName, tNum, colNum, rowNum, spriteSize) {
	var txt = "";
	var idString = "sprite" + tNum;
	var spriteTop = rowNum * (spriteSize + 3);
	var spriteLeft = colNum * (spriteSize + 3);
	txt += '<div id="' + idString + '" class="capart_sprite_' + spriteSize + '" style="';
	txt += 'background-image: url(http://cap.smogon.com/web/art/gallery/' + section + '/'+ gallery + '/sprites/' + fileName + '); ';
	var offset = Math.floor((tNum - 1) * (0 - spriteSize));
	txt += 'background-position: ' + offset + 'px 0px; ';
	txt += 'top: ' + spriteTop + 'px; ';
	txt += 'left: ' + spriteLeft + 'px; ';
	txt += '"></div> \n';
	return txt;
};
function composeSpriteGroup(sectionDir, galleryDir, fileName, spriteSize) {
	var txt = "";
	txt += '<div class="capart_spriteGroup_' + spriteSize + '">';
	txt += composeSprite(sectionDir, galleryDir, fileName, 1, 0, 0, spriteSize);
	txt += composeSprite(sectionDir, galleryDir, fileName, 2, 0, 1, spriteSize);
	txt += composeSprite(sectionDir, galleryDir, fileName, 3, 1, 0, spriteSize);
	txt += composeSprite(sectionDir, galleryDir, fileName, 4, 1, 1, spriteSize);
	txt += '</div> \n';
	return txt;
};

function composeGallerySection(aSection) {
	var sectionName = aSection.name;
	var sectionDir = aSection.directory;
	var galleries = aSection.galleries;
	
	var txt = "";
	txt += '<div class="capart_section"> \n';
	txt += '<h2 class="capart_sectionHeader">' + sectionName + '</h2> \n';
	
	for (var i=0;i<galleries.length;i++) {
	var gallery = galleries[i];
	txt += '<div class="capart_linkBox"> \n';
	txt += '<a href="' + sectionDir + '/' + gallery.directory + '"> \n';
	txt += composeThumbGroup(sectionDir, gallery.directory, gallery.totalArtworks());
	txt += '</a> \n';
	
	txt += '<div class="capart_linkBoxInfo capart_thumbGroupInfo"> \n';
	if (gallery.type1() !== '') {
		txt += getTypeIcons(gallery);
		txt += '<br> \n';
	}
	txt += '<strong><a href="' + sectionDir + '/' + gallery.directory + '"> \n';
	txt += gallery.name;
	txt += '</a></strong> \n';
	txt += '</div> \n'; //Info
	txt += '</div> \n'; //Link Box
	}
	/* It's important to leave this footer here, even if it is empty.
	 * This footer is what "clears" the section, and also gives the section a bottom bounds
	 * since the section is composed mostly of floating elements. If this footer
	 * is removed, the section will not have the correct bottom bounds.
	 */
	txt += '<div class="capart_sectionFooter"></div> \n';
	txt += '</div> \n'; //Section
	return txt;
};
function placeString(pNum) {
	var pString = "";
	switch (pNum) {
		case 1:
			pString = "1st";
			break;
		case 2:
			pString = "2nd";
			break;
		case 3:
			pString = "3rd";
			break;
		default:
			pString = "" + pNum + "th";
	}
	return pString;
};
function composeGalleryPage(aSection, galleryName) {
	var sectionDir = aSection.directory;
	var gallery = aSection.getGallery(galleryName);
	var galleryType = gallery.type1();
	
	var txt = "";
	txt +='<div class="capart_pageTop"> \n';
	if (sectionDir == 'past') {
		txt += '<h1>Featured Art - ' + gallery.name + '</h1> \n';
	} else {
		txt += '<h1>Featured Artist - ' + gallery.name + '</h1> \n';
	}
	txt += '<p>Click a thumbnail below to see the full-size image.</p>';
	txt += '</div> \n'; //Page Top
	
	txt += '<div class="capart_navBar"> \n';
	txt += '<table class="capart_navTable" CELLSPACING=0> \n';
	txt += '<tr> \n';
	txt += '<td class="leftNav"> \n';
	if (gallery.previousGallery !== null) {
		txt += '<a href="' + gallery.previousGallery.directory + '"> \n';
		txt += '\u00AB ' + gallery.previousGallery.name;
		txt += '</a> \n';
	}
	txt += '</td> \n';
	txt += '<td class="middleNav"> \n';
	txt += gallery.name;
	if (galleryType !== '') {
		txt += '<br>';
		txt += getTypeIcons(gallery);
	}
	txt += '</td> \n';
	txt += '<td class="rightNav"> \n';
	if (gallery.nextGallery !== null) {
		txt += '<a href="' + gallery.nextGallery.directory + '"> \n';
		txt += gallery.nextGallery.name + ' \u00BB';
		txt += '</a> \n';
	}
	txt += '</td> \n';
	txt += '</tr> \n';
	txt += '</table> \n';
	txt += '</div> \n'; //Gallery Nav

	// Artworks
	for (var i=0;i<gallery.artworks.length;i++) {
	var art = gallery.artworks[i];
	txt += '<div class="capart_linkBox capart_miniLinkBox"> \n';
	
	txt += '<a href="http://cap.smogon.com/web/art/gallery/' + sectionDir + '/' + gallery.directory + '/' + art.fileName +'"> \n';
	txt += composeMini(sectionDir, gallery.directory, i);
	txt += '</a> \n';
	
	txt += '<div class="capart_linkBoxInfo capart_miniInfo"> \n';
	
	if (art.type1() !== galleryType) {
		txt += getTypeIcons(art);
		txt += '<br> \n';
	}

	if (art.projectNum !== gallery.projectNum) {
	txt += '<nobr>';
	txt += '<span class="capart_infoLabel">Project:</span> \n'; 
	txt += '<span class="capart_infoValue">CAP ' + art.projectNum + '</span> \n';
	txt += '</nobr>';
	txt += '<br> \n';
	}

	if (art.artist !== gallery.name) {
	txt += '<nobr>';
	txt += '<strong>' + art.artist + '</strong> \n';
	txt += '</nobr>';
	txt += '<br> \n';
	}
	
	if (art.placeNum !== 0) {
	txt += '<nobr>';
	txt += '<span class="capart_infoLabel">Place:</span> \n';
	txt += '<span class="capart_infoValue">' + placeString(art.placeNum) + '</span> \n';
	txt += '</nobr>';
	txt += '<br> \n';
	}

	txt += '</div> \n'; //Art Info
	txt += '</div> \n'; //Art Link Box
	}
	
		
	// Sprites
	txt += '<div class="capart_spriteBar">Sprites</div> \n';
	
	for (var i=0;i<gallery.sprites.length;i++) {
	var sprite = gallery.sprites[i];
	txt += '<div class="capart_linkBox"> \n';
	
	var spriteSize = (sprite.projectNum >= 12) ? 96 : 80;
	txt += composeSpriteGroup(sectionDir, gallery.directory, sprite.fileName, spriteSize);
	
	txt += '<div class="capart_linkBoxInfo capart_spriteInfo_' + spriteSize + '"> \n';
	
	if (sprite.projectNum !== gallery.projectNum) {
	txt += '<nobr>';
	txt += '<span class="capart_infoLabel">Project:</span> \n';
	txt += '<span class="capart_infoValue">CAP ' + sprite.projectNum + '</span> \n';
	txt += '</nobr>';
	txt += '<br> \n';
	}

	if (sprite.artist !== gallery.name) {
	txt += '<nobr>';
	txt += '<strong>' + sprite.artist + '</strong> \n';
	txt += '</nobr>';
	txt += '<br> \n';
	}
	
	if (sprite.placeNum !== 0) {
	txt += '<nobr>';
	txt += '<span class="capart_infoLabel">Place:</span> \n';
	txt += '<span class="capart_infoValue">' + placeString(sprite.placeNum) + '</span> \n';
	txt += '</nobr>';
	txt += '<br> \n';
	}

	txt += '</div> \n'; //Sprite Info
	txt += '</div> \n'; //Sprite Link Box
	}
	
	txt += '<div class="capart_sectionFooter"></div> \n';
	txt += '<br>'
	txt += '</div> \n'; //Section
	return txt;
};
function composeCustomMovePage() {
	var txt = "";
	var urlParts=location.href.split("?");
	if (!urlParts[1]) {
		return txt;
	};
	var move = null;
	if (urlParts[1] == "paleo_wave") {
		move = PaleoWave();
	} else if (urlParts[1] == "shadowstrike") {
		move = ShadowStrike();
	}
	if (move == null) return txt;
	
	txt += '<ul class="tabs"><li><strong>CAP</strong></li></ul>';
	txt += '<h1>' + move.moveName + '</h1>';
	
	txt += '<table class="info"> \n'; //Move Table
	txt += '<tr> \n';
	txt += '<th>Type</th> \n';
	txt += '<th>Power</th> \n';
	txt += '<th>Accuracy</th> \n';
	txt += '<th>PP</th> \n';
	txt += '<th>Priority</th> \n';
	txt += '<th>Damage</th> \n';
	txt += '<th>Target</th> \n';
	txt += '</tr> \n';
	txt += '<tr> \n';
	txt += '<td><a href="/bw/types/' + move.type.toLowerCase() + '">' + move.type + '</a></td> \n';
	txt += '<td>' + move.power + '</td> \n';
	txt += '<td>' + move.accuracy + '</td> \n';
	txt += '<td>' + move.pp + '</td> \n';
	txt += '<td>' + move.priority + '</td> \n';
	txt += '<td>' + move.category + '</td> \n';
	txt += '<td>' + move.target + '</td> \n';
	txt += '</tr> \n';
	txt += '</table> \n'; //Move Table

	if (move.longDesc == "") {
		txt += '<p>' + move.shortDesc + '</p>';
	} else if (move.longDesc[0] == '<') {
		txt += move.longDesc;
	} else {
		txt += '<p>' + move.longDesc + '</p>';
	}
	
	return txt;
};
function composeCustomAbilityPage() {
	var txt = "";
	var urlParts=location.href.split("?");
	if (!urlParts[1]) {
		return txt;
	};
	var ability = null;
	if (urlParts[1] == "mountaineer") {
		ability = Mountaineer();
	} else if (urlParts[1] == "persistent") {
		ability = Persistent();
	} else if (urlParts[1] == "rebound") {
		ability = Rebound();
	}
	if (ability == null) return txt;
	
	txt += '<ul class="tabs"><li><strong>CAP</strong></li></ul>';
	txt += '<h1>' + ability.abilityName + '</h1>';
	
	if (ability.longDesc == "") {
		txt += '<p>' + ability.shortDesc + '</p>';
	} else if (ability.longDesc[0] == '<') {
		txt += ability.longDesc;
	} else {
		txt += '<p>' + ability.longDesc + '</p>';
	}
	
	return txt;
};