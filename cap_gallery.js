/*
 * This is a script that defines the data for the CAP Art Gallery
 */

var capTypes = [
	["", ""],
	["Ice", "Bug"],
	["Ghost", "Fighting"],
	["Fire", "Grass"],
	["Poison", "Ground"],
	["Rock", ""],
	["Water", "Fighting"],
	["Steel", "Ghost"],
	["Electric", "Dragon"],
	["Dark", "Ground"],
	["Electric", "Water"],
	["Fighting", "Dark"],
	["Flying", "Fighting"],
	["Grass", "Ghost"],
	["Fire", "Poison"],
	["Bug", "Psychic"],
	["Dark", "Grass"],
	["Steel", "Flying"],
	["Water", "Fire"],
	["Electric", "Poison"],
	["Water", "Steel"],
	["Rock", "Poison"],
	["Fairy", "Fighting"]
];

function ArtGallery(nm, dir, pNum) {
	this.name = nm;
	this.directory = dir;
	this.projectNum = pNum;
	this.artworks = [];
	this.sprites = [];
	this.previousGallery = null;
	this.nextGallery = null;
};

ArtGallery.prototype.addArt = function(artName, projNum, placeNum, fileName) {
	this.artworks.push(new Artwork(artName, projNum, placeNum, fileName));
};

ArtGallery.prototype.addSprite = function(artName, projNum, placeNum, fileName) {
	this.sprites.push(new Artwork(artName, projNum, placeNum, fileName));
};

ArtGallery.prototype.totalArtworks = function() {
	return this.artworks.length;
};

ArtGallery.prototype.type1 = function() {
	return capTypes[this.projectNum][0];
};

ArtGallery.prototype.type2 = function() {
	return capTypes[this.projectNum][1];
};

function Artwork(aName, proj, plc, fName) {
	this.artist = aName;
	this.projectNum = proj;
	this.placeNum = plc;
	this.fileName = fName;
};

Artwork.prototype.type1 = function() {
	return capTypes[this.projectNum][0];
};

Artwork.prototype.type2 = function() {
	return capTypes[this.projectNum][1];
};

function ArtSection() {
	this.name = "";
	this.directory = "";
	this.galleries = [];
};

ArtSection.prototype.addGallery = function(aGallery) {
	this.galleries.push(aGallery);
	var sz = this.galleries.length;
	if (sz > 1) {
		aGallery.previousGallery = this.galleries[sz - 2];
		aGallery.previousGallery.nextGallery = aGallery;
	}
};

ArtSection.prototype.getGallery = function(aGalleryName) {
	for (var i = 0; this.galleries.length; i++) {
		if (this.galleries[i].name == aGalleryName) {
			return this.galleries[i];
		}
	}
	return null;
};

function FeaturedArtistsSection() {
	var section = new ArtSection();
	section.name = "Featured Artists"
	section.directory = "featured";
	var gallery = null;

	gallery = new ArtGallery("Aragornbird", "aragornbird", 0);
	gallery.addArt(gallery.name, 6, 0, "cap06-piratesquidts6.jpg");
	gallery.addArt(gallery.name, 9, 0, "cap09-finalsubmission.jpg");
	gallery.addArt(gallery.name, 10, 0, "cap10-shrimp.jpg");
	gallery.addArt(gallery.name, 11, 0, "cap11-cap11r.jpg");
	gallery.addArt(gallery.name, 13, 0, "cap13-cap2k.jpg");
	gallery.addArt(gallery.name, 15, 0, "cap15-caph.jpg");
	gallery.addArt(gallery.name, 16, 0, "cap16-woDXyXI.jpg");
	gallery.addArt(gallery.name, 18, 0, "cap18-sl35ap.jpg");
	// Sprites
	gallery.addSprite(gallery.name, 7, 0, "cap07-fox4.png");
	gallery.addSprite(gallery.name, 8, 0, "cap08-sprite.png");
	gallery.addSprite(gallery.name, 9, 0, "cap09-cap914.png");
	gallery.addSprite(gallery.name, 11, 0, "cap11-sprites.png");
	section.addGallery(gallery);

	gallery = new ArtGallery("Cartoons", "cartoons", 0);
	gallery.addArt(gallery.name, 3, 0, "cap03-firedeer.jpg");
	gallery.addArt(gallery.name, 4, 0, "cap04-hands.jpg");
	gallery.addArt(gallery.name, 6, 0, "cap06-squiddy.jpg");
	gallery.addArt(gallery.name, 8, 0, "cap08-dragjump.jpg");
	gallery.addArt(gallery.name, 9, 0, "cap09-good.jpg");
	gallery.addArt(gallery.name, 10, 0, "cap10-cap.jpg");
	gallery.addArt(gallery.name, 12, 0, "cap12-fightflying3.jpg");
	gallery.addArt(gallery.name, 16, 0, "cap16-rotty.jpg");
	// Sprites
	gallery.addSprite(gallery.name, 6, 0, "cap06-pirate.png");
	gallery.addSprite(gallery.name, 9, 0, "cap09-colossoil1.png");
	gallery.addSprite(gallery.name, 10, 0, "cap10-shrimp.png");
	section.addGallery(gallery);

	gallery = new ArtGallery("CyzirVisheen", "cyzirvisheen", 0);
	gallery.addArt(gallery.name, 1, 0, "cap01-sc00c0e2b6.jpg");
	gallery.addArt(gallery.name, 3, 0, "cap03-Design3.jpg");
	gallery.addArt(gallery.name, 4, 0, "cap04-sc001ddb61.jpg");
	gallery.addArt(gallery.name, 4, 0, "cap04-sc001e0681.jpg");
	gallery.addArt(gallery.name, 4, 0, "cap04-sc001e23e3.jpg");
	gallery.addArt(gallery.name, 5, 0, "cap05-Queen.jpg");
	gallery.addArt(gallery.name, 6, 0, "cap06-anemonefinal.jpg");
	gallery.addArt(gallery.name, 7, 0, "cap07-bansheefinal.jpg");
	gallery.addArt(gallery.name, 8, 0, "cap08-hydrafinal2.jpg");
	gallery.addArt(gallery.name, 9, 0, "cap09-narwhalfinal.jpg");
	gallery.addArt(gallery.name, 10, 0, "cap10-28bwiue.jpg");
	gallery.addArt(gallery.name, 13, 0, "cap13-rb1Yx.jpg");
	gallery.addArt(gallery.name, 14, 0, "cap14-vcnir.jpg");
	gallery.addArt(gallery.name, 16, 0, "cap16-baww.jpg");
	// Sprites
	gallery.addSprite(gallery.name, 1, 0, "cap01-CoolAntv3II.png");
	section.addGallery(gallery);

	gallery = new ArtGallery("DougJustDoug", "dougjustdoug", 0);
	gallery.addArt(gallery.name, 1, 0, "cap01-skibug.jpg");
	gallery.addArt(gallery.name, 2, 0, "cap02-FightingGhost.jpg");
	gallery.addArt(gallery.name, 3, 0, "cap03-Hallowmean.jpg");
	gallery.addArt(gallery.name, 4, 0, "cap04-GroundSnake.jpg");
	gallery.addArt(gallery.name, 5, 0, "cap05-PlanetPokemon5.jpg");
	gallery.addArt(gallery.name, 6, 0, "cap06-ScubaWrestler2.jpg");
	gallery.addArt(gallery.name, 7, 0, "cap07-Skelebot.jpg");
	gallery.addArt(gallery.name, 8, 0, "cap08-ElectricDragonCopper.jpg");
	gallery.addArt(gallery.name, 9, 0, "cap09-TribalBuffalo.jpg");
	gallery.addArt(gallery.name, 10, 0, "cap10-beaver16.jpg");
	gallery.addArt(gallery.name, 11, 0, "cap11-voodoo9.jpg");
	gallery.addArt(gallery.name, 12, 0, "cap12-fighterplane13.jpg");
	gallery.addArt(gallery.name, 13, 0, "cap13-weepingwillow8.jpg");
	gallery.addArt(gallery.name, 14, 0, "cap14-radioactive.jpg");
	gallery.addArt(gallery.name, 15, 0, "cap15-bookworm8.jpg");
	gallery.addArt(gallery.name, 16, 0, "cap16-punisher8.jpg");
	gallery.addArt(gallery.name, 17, 0, "cap17-rocketmon.jpg");
	gallery.addArt(gallery.name, 18, 0, "cap18-onuf.jpg");
	gallery.addArt(gallery.name, 19, 0, "cap19-135gT1.jpg");
	gallery.addArt(gallery.name, 20, 0, "cap20-yVq0LT.jpg");
	gallery.addArt(gallery.name, 21, 0, "cap21-base-5afee153.jpg");
	gallery.addArt(gallery.name, 21, 0, "cap21-mega-6aeab1ef.jpg");
	// Sprites
	gallery.addSprite(gallery.name, 1, 0, "cap01-cyzirsprite6ds5.png");
	gallery.addSprite(gallery.name, 4, 0, "cap04-hmcutsheet2.png");
	gallery.addSprite(gallery.name, 6, 0, "cap06-piratecutshee.png");
	gallery.addSprite(gallery.name, 8, 0, "cap08-edcutsheet.png");
	gallery.addSprite(gallery.name, 9, 0, "cap09-colossoilcutsheet1211.png");
	gallery.addSprite(gallery.name, 10, 0, "cap10-shrimpcutsheet.png");
	gallery.addSprite(gallery.name, 11, 0, "cap11-sprites.png");
	gallery.addSprite(gallery.name, 12, 0, "cap12-sprites.png");
	gallery.addSprite(gallery.name, 13, 0, "cap13-sprites.png");
	gallery.addSprite(gallery.name, 14, 0, "cap14-sprites.png");
	gallery.addSprite(gallery.name, 15, 0, "cap15-sprites.png");
	gallery.addSprite(gallery.name, 16, 0, "cap16-sprites.png");
	gallery.addSprite(gallery.name, 17, 0, "cap17-sprites.png");
	gallery.addSprite(gallery.name, 18, 0, "cap18-sprites.png");
	gallery.addSprite(gallery.name, 19, 0, "cap19-sprites.png");
	section.addGallery(gallery);

	gallery = new ArtGallery("KoA", "koa", 0);
	gallery.addArt(gallery.name, 1, 0, "cap01-icebugsmall.jpg");
	gallery.addArt(gallery.name, 2, 0, "cap02-bannevo.jpg");
	gallery.addArt(gallery.name, 2, 0, "cap02-ghostfight.jpg");
	gallery.addArt(gallery.name, 2, 0, "cap02-mummra.jpg");
	gallery.addArt(gallery.name, 3, 0, "cap03-cockatrice.jpg");
	gallery.addArt(gallery.name, 4, 0, "cap04-pestilence.jpg");
	gallery.addArt(gallery.name, 4, 0, "cap04-Raptilisk.jpg");
	gallery.addArt(gallery.name, 6, 0, "cap06-Mertessen.jpg");
	gallery.addArt(gallery.name, 7, 0, "cap07-vassagosmall.jpg");
	gallery.addArt(gallery.name, 8, 0, "cap08-bolteel2smal.jpg");
	gallery.addArt(gallery.name, 9, 0, "cap09-hyenadonsm.jpg");
	gallery.addArt(gallery.name, 12, 0, "cap12-puppetcap.jpg");
	gallery.addArt(gallery.name, 13, 0, "cap13-grossst.jpg");
	gallery.addArt(gallery.name, 14, 0, "cap14-final.jpg");
	gallery.addArt(gallery.name, 15, 0, "cap15-angelic.jpg");
	gallery.addArt(gallery.name, 16, 0, "cap16-rober.jpg");
	// Sprites
	gallery.addSprite(gallery.name, 1, 0, "cap01-cyzirbug.png");
	gallery.addSprite(gallery.name, 2, 0, "cap02-Revenankhsp.png");
	gallery.addSprite(gallery.name, 3, 0, "cap03-gilaman.png");
	gallery.addSprite(gallery.name, 6, 0, "cap06-piratepose.png");
	gallery.addSprite(gallery.name, 7, 0, "cap07-kitsunoh.png");
	gallery.addSprite(gallery.name, 8, 0, "cap08-thundrasheetcopy.png");
	gallery.addSprite(gallery.name, 9, 0, "cap09-newest999263827755024iaza.png");
	section.addGallery(gallery);

	gallery = new ArtGallery("Magistrum", "magistrum", 0);
	gallery.addArt(gallery.name, 16, 0, "cap16-capmon9resize.jpg");
	gallery.addArt(gallery.name, 17, 0, "cap17-k95n.jpg");
	gallery.addArt(gallery.name, 18, 0, "cap18-Wm6sboY.jpg");
	gallery.addArt(gallery.name, 19, 0, "cap19-Hk46p2E.jpg");
	gallery.addArt(gallery.name, 20, 0, "cap20-QqtmQ12.jpg");
	gallery.addArt(gallery.name, 21, 0, "cap21-base-jZfTBup.jpg");
	gallery.addArt(gallery.name, 21, 0, "cap21-mega-oYRjz7b.jpg");
	section.addGallery(gallery);

	gallery = new ArtGallery("MosQuitoxe", "mosquitoxe", 0);
	gallery.addArt(gallery.name, 13, 0, "cap13-point1.jpg");
	gallery.addArt(gallery.name, 14, 0, "cap14-HeSKk.jpg");
	gallery.addArt(gallery.name, 15, 0, "cap15-CAP4final2.jpg");
	gallery.addArt(gallery.name, 16, 0, "cap16-CAP5final.jpg");
	gallery.addArt(gallery.name, 17, 0, "cap17-Cap6Jet.jpg");
	gallery.addArt(gallery.name, 18, 0, "cap18-CAP7_2.jpg");
	gallery.addArt(gallery.name, 19, 0, "cap19-CAP82.jpg");
	gallery.addArt(gallery.name, 20, 0, "cap20-CAP20.jpg");
	gallery.addArt(gallery.name, 21, 0, "cap21-base-Tarmax.jpg");
	gallery.addArt(gallery.name, 21, 0, "cap21-mega-MegaTarmax.jpg");
	// Sprites
	gallery.addSprite(gallery.name, 13, 0, "cap13-sprites.png");
	section.addGallery(gallery);

	gallery = new ArtGallery("Quanyails", "quanyails", 0);
	gallery.addArt(gallery.name, 14, 0, "cap14-temporaryfile2.jpg");
	gallery.addArt(gallery.name, 15, 0, "cap15-temporaryfile2b.jpg");
	gallery.addArt(gallery.name, 16, 0, "cap16-temporaryfile2v.jpg");
	gallery.addArt(gallery.name, 17, 0, "cap17-18j9.jpg");
	gallery.addArt(gallery.name, 18, 0, "cap18-pAOwJ1R.jpg");
	gallery.addArt(gallery.name, 19, 0, "cap19-gp2c7qw.jpg");
	gallery.addArt(gallery.name, 20, 0, "cap20-mAPufqj.jpg");
	gallery.addArt(gallery.name, 21, 0, "cap21-base-F0xJARK.jpg");
	gallery.addArt(gallery.name, 21, 0, "cap21-mega-4icEI8z.jpg");
	// Sprites
	gallery.addSprite(gallery.name, 13, 0, "cap13-sprites.png");
	gallery.addSprite(gallery.name, 14, 0, "cap14-sprites.png");
	gallery.addSprite(gallery.name, 15, 0, "cap15-sprites.png");
	gallery.addSprite(gallery.name, 16, 0, "cap16-sprites.png");
	gallery.addSprite(gallery.name, 17, 0, "cap17-sprites.png");
	gallery.addSprite(gallery.name, 18, 0, "cap18-sprites.png");
	gallery.addSprite(gallery.name, 19, 0, "cap19-sprites.png");
	gallery.addSprite(gallery.name, 20, 0, "cap20-sprites.png");

	section.addGallery(gallery);

	gallery = new ArtGallery("Wyverii", "wyverii", 0);
	gallery.addArt(gallery.name, 6, 0, "cap06-Battlestork.png");
	gallery.addArt(gallery.name, 7, 0, "cap07-PokeinaBox2.png");
	gallery.addArt(gallery.name, 8, 0, "cap08-dragon3.png");
	gallery.addArt(gallery.name, 9, 0, "cap09-darkhorse.png");
	gallery.addArt(gallery.name, 10, 0, "cap10-bipolar4.jpg");
	gallery.addArt(gallery.name, 11, 0, "cap11-Darkcoon21.jpg");
	gallery.addArt(gallery.name, 12, 0, "cap12-flyfight3.jpg");
	gallery.addArt(gallery.name, 13, 0, "cap13-Forestmon640.jpg");
	gallery.addArt(gallery.name, 16, 0, "cap16-PGIX8ym.jpg");
	// Sprites
	gallery.addSprite(gallery.name, 3, 0, "cap03-WoodmanSet.png");
	gallery.addSprite(gallery.name, 4, 0, "cap04-Fidgitset.png");
	gallery.addSprite(gallery.name, 5, 0, "cap05-Rockmon.png");
	gallery.addSprite(gallery.name, 6, 0, "cap06-piratesquid.png");
	gallery.addSprite(gallery.name, 7, 0, "cap07-Phoxcomplete.png");
	gallery.addSprite(gallery.name, 8, 0, "cap08-Thundra.png");
	gallery.addSprite(gallery.name, 9, 0, "cap09-Dknrwl.png");
	gallery.addSprite(gallery.name, 11, 0, "cap11-sprites.png");
	gallery.addSprite(gallery.name, 12, 0, "cap12-sprites.png");
	gallery.addSprite(gallery.name, 13, 0, "cap13-sprites.png");
	gallery.addSprite(gallery.name, 14, 0, "cap14-sprites.png");
	gallery.addSprite(gallery.name, 15, 0, "cap15-sprites.png");
	gallery.addSprite(gallery.name, 16, 0, "cap16-sprites.png");
	section.addGallery(gallery);

	gallery = new ArtGallery("Yilx", "yilx", 0);
	gallery.addArt(gallery.name, 8, 0, "cap08-dragO.jpg");
	gallery.addArt(gallery.name, 10, 0, "cap10-cap105.jpg");
	gallery.addArt(gallery.name, 11, 0, "cap11-noshado.jpg");
	gallery.addArt(gallery.name, 12, 0, "cap12-sygile_2.jpg");
	gallery.addArt(gallery.name, 13, 0, "cap13-Nanamorpha.jpg");
	gallery.addArt(gallery.name, 14, 0, "cap14-sum.jpg");
	gallery.addArt(gallery.name, 15, 0, "cap15-monc.jpg");
	gallery.addArt(gallery.name, 16, 0, "cap16-ss20130316at090124.jpg");
	gallery.addArt(gallery.name, 17, 0, "cap17-4yJ17.jpg");
	gallery.addArt(gallery.name, 18, 0, "cap18-ss.jpg");
	gallery.addArt(gallery.name, 19, 0, "cap19-frog3.jpg");
	gallery.addArt(gallery.name, 20, 0, "cap20-ss20150428.jpg");
	gallery.addArt(gallery.name, 21, 0, "cap21-base-ss20151109125139.jpg");
	gallery.addArt(gallery.name, 21, 0, "cap21-mega-ss20151119013510.jpg");
	section.addGallery(gallery);

	return section;
};

function PastProjectsSection() {
	var section = new ArtSection();
	section.name = "Past Projects"
	section.directory = "past";
	var gallery = null;

	gallery = new ArtGallery("CAP 1", "cap01", 1);
	gallery.addArt("CyzirVisheen", gallery.projectNum, 1, "1-cyzirvisheen-sc00c0e2b6.jpg");
	gallery.addArt("JustSomeChick", gallery.projectNum, 2, "2-justsomechick-bugice.jpg");
	gallery.addArt("Soy Monk", gallery.projectNum, 3, "3-soymonk-yukalio.jpg");
	gallery.addArt("DougJustDoug", gallery.projectNum, 4, "4-dougjustdoug-skibugcscopyht5.jpg");
	gallery.addArt("KoA", gallery.projectNum, 5, "5-koa-icebugsmall.png");
	// Sprites	
	gallery.addSprite("KoA", gallery.projectNum, 1, "1-koa-cyzirbug.png");
	gallery.addSprite("CyzirVisheen", gallery.projectNum, 2, "2-cyzirvisheen-CoolAntv3II.png");
	gallery.addSprite("DougJustDoug", gallery.projectNum, 3, "3-dougjustdoug-cyzirsprite6ds5.png");
	section.addGallery(gallery);

	gallery = new ArtGallery("CAP 2", "cap02", 2);
	gallery.addArt("KoA", gallery.projectNum, 1, "1-koa-mummra.jpg");
	gallery.addArt("KoA", gallery.projectNum, 2, "2-koa-bannevo.jpg");
	gallery.addArt("DougJustDoug", gallery.projectNum, 3, "3-dougjustdoug-fightingghostlz0.jpg");
	gallery.addArt("Sanglunaria", gallery.projectNum, 4, "4-sanglunaria-ghostideanz0.jpg");
	gallery.addArt("Tea and Blues", gallery.projectNum, 4, "4-tab-kana.jpg");
	gallery.addArt("Tea and Blues", gallery.projectNum, 5, "5-tab-boxing.jpg");
	// Sprites	
	gallery.addSprite("KoA", gallery.projectNum, 1, "1-koa-Revenankhsp.png");
	gallery.addSprite("Atyroki", gallery.projectNum, 3, "3-atyroki-revenankhiu2.png");
	gallery.addSprite("Flygon493", gallery.projectNum, 4, "4-flygon493-revenankhfinalfw.png");
	section.addGallery(gallery);

	gallery = new ArtGallery("CAP 3", "cap03", 3);
	gallery.addArt("Elagune", gallery.projectNum, 1, "1-elagune-woodman.jpg");
	gallery.addArt("Cartoons", gallery.projectNum, 2, "2-cartoons-firedeer.jpg");
	gallery.addArt("KoA", gallery.projectNum, 3, "3-koa-cockatrice.jpg");
	gallery.addArt("Pyrrhocorax", gallery.projectNum, 4, "4-pyrrhocorax-snakeycoloured.jpg");
	gallery.addArt("Blu", gallery.projectNum, 5, "5-blu-22882740nl6.jpg");
	gallery.addArt("CyzirVisheen", gallery.projectNum, 5, "5-cyzirvisheen-Design3.jpg");
	// Sprites	
	gallery.addSprite("Wyverii", gallery.projectNum, 1, "1-wyverii-WoodmanSet.png");
	gallery.addSprite("KoA", gallery.projectNum, 2, "2-koa-gilaman.png");
	gallery.addSprite("Atyroki", gallery.projectNum, 3, "3-atyroki-elagunesyr2.png");
	gallery.addSprite("T.I.B.M.", gallery.projectNum, 4, "4-tibm-nimetn10il9.png");
	section.addGallery(gallery);

	gallery = new ArtGallery("CAP 4", "cap04", 4);
	gallery.addArt("Cartoons", gallery.projectNum, 1, "1-cartoons-cap4hands.jpg");
	gallery.addArt("Zantimonius", gallery.projectNum, 2, "2-zantimonius-cap4small.jpg");
	gallery.addArt("DougJustDoug", gallery.projectNum, 3, "3-dougjustdoug-groundsnaketailjewelwd8.jpg");
	gallery.addArt("Absolution", gallery.projectNum, 4, "4-absolution-threeimpsqg3.jpg");
	gallery.addArt("CyzirVisheen", gallery.projectNum, 5, "5-cyzirvisheen-sc001ddb61.jpg");
	gallery.addArt("Cerbi01", gallery.projectNum, 6, "6-cerbi01-yuudou.jpg");
	gallery.addArt("Elagune", gallery.projectNum, 6, "6-elagune-solohorn2.jpg");
	// Sprites	
	gallery.addSprite("DougJustDoug", gallery.projectNum, 1, "1-dougjustdoug-hmcutsheet2.png");
	gallery.addSprite("Wyverii", gallery.projectNum, 2, "2-wyverii-Fidgitset.png");
	gallery.addSprite("Atyroki", gallery.projectNum, 3, "3-atyroki-captotaluz7.png");
	section.addGallery(gallery);

	gallery = new ArtGallery("CAP 5", "cap05", 5);
	gallery.addArt("YourDeadGrandad", gallery.projectNum, 1, "1-yourdeadgrandad-rockpokemon.jpg");
	gallery.addArt("Caladbolg & Skyshroud", gallery.projectNum, 2, "2-caladbolgskyshroud-easterisland2.jpg");
	gallery.addArt("CyzirVisheen", gallery.projectNum, 3, "3-cyzirvisheen-Queen.jpg");
	gallery.addArt("RegiDS", gallery.projectNum, 4, "4-regids-61e93159.jpg");
	gallery.addArt("Lofty", gallery.projectNum, 5, "5-lofty-CometPoke19.jpg");
	gallery.addArt("DougJustDoug", gallery.projectNum, 6, "6-dougjustdoug-planetpokemon5rt0.jpg");
	gallery.addArt("Wichu", gallery.projectNum, 7, "7-wichu-cap5final3wf8.jpg");
	// Sprites	
	gallery.addSprite("Wyverii", gallery.projectNum, 1, "1-wyverii-Rockmon.png");
	gallery.addSprite("DarthVader317", gallery.projectNum, 2, "2-darthvader317-capsprite.png");
	gallery.addSprite("Atyroki", gallery.projectNum, 3, "3-atyroki-rockmontt.png");
	section.addGallery(gallery);

	gallery = new ArtGallery("CAP 6", "cap06", 6);
	gallery.addArt("Aragornbird", gallery.projectNum, 1, "1-aragornbird-piratesquidts6.jpg");
	gallery.addArt("CyzirVisheen", gallery.projectNum, 2, "2-cyzirvisheen-anemonefinal.jpg");
	gallery.addArt("Cartoons", gallery.projectNum, 3, "3-cartoons-squiddy.jpg");
	gallery.addArt("Wyverii", gallery.projectNum, 4, "4-wyverii-Battlestork.png");
	gallery.addArt("Caladbolg", gallery.projectNum, 5, "5-caladbolg-finalsubmissionmv9.jpg");
	gallery.addArt("Atyroki", gallery.projectNum, 6, "6-atyroki-pixku2.png");
	// Sprites	
	gallery.addSprite("Cartoons", gallery.projectNum, 1, "1-cartoons-pirate.png");
	gallery.addSprite("Chaoscrippler", gallery.projectNum, 2, "2-chaoscrippler-numbers.png");
	gallery.addSprite("DougJustDoug", gallery.projectNum, 3, "3-dougjustdoug-piratecutshee.png");
	gallery.addSprite("Wyverii", gallery.projectNum, 4, "4-wyverii-piratesquid.png");
	gallery.addSprite("KoA", gallery.projectNum, 5, "5-koa-piratepose.png");
	section.addGallery(gallery);

	gallery = new ArtGallery("CAP 7", "cap07", 7);
	gallery.addArt("Elegy of Emptiness", gallery.projectNum, 1, "1-elegyofemptiness-Phoxfinal.jpg");
	gallery.addArt("DougJustDoug", gallery.projectNum, 2, "2-dougjustdoug-skelebot3tj3.jpg");
	gallery.addArt("Caladbolg", gallery.projectNum, 3, "3-caladbolg-goldie3zv6.jpg");
	gallery.addArt("CyzirVisheen", gallery.projectNum, 4, "4-cyzirvisheen-bansheefinal-1.jpg");
	gallery.addArt("Ixfalia", gallery.projectNum, 5, "5-ixfalia-nbxffs.jpg");
	gallery.addArt("Wyverii", gallery.projectNum, 6, "6-wyverii-PokeinaBox2.png");
	gallery.addArt("KoA", gallery.projectNum, 7, "7-koa-vassagosmall.jpg");
	// Sprites	
	gallery.addSprite("Aragornbird", gallery.projectNum, 1, "1-aragornbird-fox4.png");
	gallery.addSprite("Wyverii", gallery.projectNum, 2, "2-wyverii-Phoxcomplete.png");
	gallery.addSprite("Dragonzrule", gallery.projectNum, 3, "3-dragonzrule-rir87.png");
	gallery.addSprite("Headpunch", gallery.projectNum, 4, "4-headpunch-sprites.png");
	gallery.addSprite("KoA", gallery.projectNum, 5, "5-koa-kitsunoh.png");
	section.addGallery(gallery);

	gallery = new ArtGallery("CAP 8", "cap08", 8);
	gallery.addArt("CyzirVisheen", gallery.projectNum, 1, "01-cyzirvisheen-hydrafinal2.jpg");
	gallery.addArt("Cartoons", gallery.projectNum, 2, "02-cartoons-dragjump.jpg");
	gallery.addArt("Zantimonius", gallery.projectNum, 3, "03-zantimonius-cap8bsmall.jpg");
	gallery.addArt("DougJustDoug", gallery.projectNum, 4, "04-dougjustdoug-electricdragoncopper640.jpg");
	gallery.addArt("KoA", gallery.projectNum, 5, "05-koa-bolteel2smal.jpg");
	gallery.addArt("Atyroki", gallery.projectNum, 6, "06-atyroki-elethree.jpg");
	gallery.addArt("pkmn-Taicho321", gallery.projectNum, 7, "07-pkmntaicho321-pokepsd.jpg");
	gallery.addArt("RegiDS", gallery.projectNum, 8, "08-regids-dravire2finalsmogon.jpg");
	gallery.addArt("Wyverii", gallery.projectNum, 9, "09-wyverii-CAPdragon3.png");
	gallery.addArt("Buffalo Wings", gallery.projectNum, 10, "10-buffalowings-wyvoltcapfinal.jpg");
	gallery.addArt("Ixfalia", gallery.projectNum, 11, "11-ixfalia-33lpbwn.jpg");
	gallery.addArt("Yilx", gallery.projectNum, 12, "12-yilx-drag.jpg");
	gallery.addArt("Keishinkae", gallery.projectNum, 13, "13-keishinkae-draglect2f.jpg");
	gallery.addArt("CactuarJoe", gallery.projectNum, 14, "14-cactuarjoe-CAP8Final.jpg");
	// Sprites	
	gallery.addSprite("Aragornbird", gallery.projectNum, 1, "1-aragornbird-sprite.png");
	gallery.addSprite("DougJustDoug", gallery.projectNum, 2, "2-dougjustdoug-edcutsheet.png");
	gallery.addSprite("Wyverii", gallery.projectNum, 3, "3-wyverii-Thundra.png");
	gallery.addSprite("Clawed Nyasu", gallery.projectNum, 4, "4-clawednyasu-cap8.png");
	gallery.addSprite("KoA", gallery.projectNum, 5, "5-koa-thundrasheetcopy.png");
	section.addGallery(gallery);

	gallery = new ArtGallery("CAP 9", "cap09", 9);
	gallery.addArt("CyzirVisheen", gallery.projectNum, 1, "01-cyzirvisheen-narwhalfinal.jpg");
	gallery.addArt("DougJustDoug", gallery.projectNum, 2, "02-dougjustdoug-TribalBuffalo.jpg");
	gallery.addArt("pkmn-Taicho321", gallery.projectNum, 3, "03-pkmntaicho321-cap9pkmntaicho.jpg");
	gallery.addArt("Aragornbird", gallery.projectNum, 4, "04-aragornbird-finalsubmission.jpg");
	gallery.addArt("Buffalo Wings", gallery.projectNum, 5, "05-buffalowings-borreal2.jpg");
	gallery.addArt("Caladbolg", gallery.projectNum, 6, "06-caladbolg-armadillocopia.jpg");
	gallery.addArt("Chomzloh", gallery.projectNum, 7, "07-chomzloh-anubismon2.jpg");
	gallery.addArt("Atyroki", gallery.projectNum, 8, "08-atyroki-f.jpg");
	gallery.addArt("Cartoons", gallery.projectNum, 9, "09-cartoons-good.jpg");
	gallery.addArt("Scampy", gallery.projectNum, 10, "10-scampy-FinalMole2.jpg");
	gallery.addArt("Wyverii", gallery.projectNum, 11, "11-wyverii-darkhorse.jpg");
	gallery.addArt("Keishinkae", gallery.projectNum, 12, "12-keishinkae-tasfin.jpg");
	gallery.addArt("KoA", gallery.projectNum, 13, "13-koa-hyenadonsm.jpg");
	gallery.addArt("Galactic Grunt", gallery.projectNum, 14, "14-galacticgrunt-stalagnight.jpg");
	gallery.addArt("TheMutant", gallery.projectNum, 15, "15-themutant-etOy8.jpg");
	gallery.addArt("Zantimonius", gallery.projectNum, 16, "16-zantimonius-small.jpg");
	// Sprites	
	gallery.addSprite("Aragornbird", gallery.projectNum, 1, "1-aragornbird-cap914.png");
	gallery.addSprite("Cartoons", gallery.projectNum, 2, "2-cartoons-colossoil1.png");
	gallery.addSprite("KoA", gallery.projectNum, 3, "3-koa-newest999263827755024iaza.png");
	gallery.addSprite("Clawed Nyasu", gallery.projectNum, 4, "4-clawednyasu-cap9fullsheet.png");
	gallery.addSprite("Chaoscrippler", gallery.projectNum, 5, "5-chaoscrippler-196vk3.png");
	gallery.addSprite("DougJustDoug", gallery.projectNum, 6, "6-dougjustdoug-colossoilcutsheet1211.png");
	gallery.addSprite("Wyverii", gallery.projectNum, 7, "7-wyverii-Dknrwl.png");
	gallery.addSprite("pkmn-Taicho321", gallery.projectNum, 8, "8-pkmntaicho321-colossoil.png");
	section.addGallery(gallery);

	gallery = new ArtGallery("CAP 10", "cap10", 10);
	gallery.addArt("Aragornbird", gallery.projectNum, 1, "01-aragornbird-shrimp.jpg");
	gallery.addArt("CyzirVisheen", gallery.projectNum, 2, "02-cyzirvisheen-28bwiue.jpg");
	gallery.addArt("Cartoons", gallery.projectNum, 3, "03-cartoons-cap10.jpg");
	gallery.addArt("Yilx", gallery.projectNum, 4, "04-yilx-cap105.jpg");
	gallery.addArt("Paras Hilton", gallery.projectNum, 5, "05-parashilton-finalangel1.jpg");
	gallery.addArt("Clawed Nyasu", gallery.projectNum, 6, "06-clawednyasu-cap103color.jpg");
	gallery.addArt("DougJustDoug", gallery.projectNum, 7, "07-dougjustdoug-beaver16.jpg");
	gallery.addArt("Keishinkae", gallery.projectNum, 8, "08-keishinkae-plezapsarfinal.jpg");
	gallery.addArt("Wyverii", gallery.projectNum, 9, "09-wyverii-bipolar4.jpg");
	gallery.addArt("Darkmattr", gallery.projectNum, 10, "10-darkmattr-final100.jpg");
	gallery.addArt("Scampy", gallery.projectNum, 11, "11-scampy-GlobmonV3.png");
	// Sprites	
	gallery.addSprite("DougJustDoug", gallery.projectNum, 1, "01-dougjustdoug-shrimpcutsheet.png");
	gallery.addSprite("Chaoscrippler", gallery.projectNum, 2, "02-chaoscrippler-sprites.png");
	gallery.addSprite("Cartoons", gallery.projectNum, 3, "03-cartoons-shrimp.png");
	gallery.addSprite("DarthVader317", gallery.projectNum, 4, "04-darthvader317-cap10.png");
	section.addGallery(gallery);

	gallery = new ArtGallery("CAP 11", "cap11", 11);
	gallery.addArt("DougJustDoug", gallery.projectNum, 1, "01-dougjustdoug-voodoo9.jpg");
	gallery.addArt("Kukem", gallery.projectNum, 2, "02-kukem-DarklorisFinal.jpg");
	gallery.addArt("Aragornbird", gallery.projectNum, 3, "03-aragornbird-cap11r.jpg");
	gallery.addArt("Yilx", gallery.projectNum, 5, "05-yilx-cap11_noshado.jpg");
	gallery.addArt("Buffalo Wings", gallery.projectNum, 6, "06-buffalowings-cap11md.jpg");
	gallery.addArt("Darkmattr", gallery.projectNum, 7, "07-darkmattr-capclaws2.jpg");
	gallery.addArt("Old Man Dugan", gallery.projectNum, 8, "08-oldmandugan-swordbat2.jpg");
	gallery.addArt("Swaggersaurus", gallery.projectNum, 9, "09-swaggersaurus-tanukimaindesign.jpg");
	gallery.addArt("Wyverii", gallery.projectNum, 10, "10-wyverii-Darkcoon21.jpg");
	// Sprites	
	gallery.addSprite("Aragornbird", gallery.projectNum, 1, "01-aragornbird-sprites.png");
	gallery.addSprite("DougJustDoug", gallery.projectNum, 2, "02-dougjustdoug-sprites.png");
	gallery.addSprite("DarthVader317", gallery.projectNum, 3, "03-darthvader317-sprites.png");
	gallery.addSprite("Wyverii", gallery.projectNum, 4, "04-wyverii-sprites.png");
	gallery.addSprite("Gun6", gallery.projectNum, 5, "05-gun6-sprites.png");
	section.addGallery(gallery);

	gallery = new ArtGallery("CAP 12", "cap12", 12);
	gallery.addArt("Cartoons", gallery.projectNum, 1, "01-cartoons-fightflying3.jpg");
	gallery.addArt("SoIHeardYouLikeSentret", gallery.projectNum, 2, "02-soiheardyoulikesentret-Bamboom.jpg");
	gallery.addArt("Fatecrashers", gallery.projectNum, 4, "04-fatecrashers-HKekC.jpg");
	gallery.addArt("DougJustDoug", gallery.projectNum, 5, "05-dougjustdoug-fighterplane13.jpg");
	gallery.addArt("Chomzloh", gallery.projectNum, 6, "06-chomzloh-cap1finalcolor.jpg");
	gallery.addArt("KoA", gallery.projectNum, 7, "07-koa-puppetcap.jpg");
	gallery.addArt("Yilx", gallery.projectNum, 8, "08-yilx-sygile_2.jpg");
	gallery.addArt("Paras Hilton", gallery.projectNum, 9, "09-parashilton-pxcasug.jpg");
	gallery.addArt("NastyJungle", gallery.projectNum, 10, "10-nastyjungle-2hwiwcz.jpg");
	gallery.addArt("Energy Storm", gallery.projectNum, 11, "11-energystorm-Intimidate.jpg");
	gallery.addArt("Wyverii", gallery.projectNum, 12, "12-wyverii-flyfight3.jpg");
	// Sprites	
	gallery.addSprite("DarthVader317", gallery.projectNum, 1, "01-darthvader317-sprites.png");
	gallery.addSprite("Wekhter", gallery.projectNum, 2, "02-wekhter-sprites.png");
	gallery.addSprite("Ice Cold Claws", gallery.projectNum, 3, "03-icecoldclaws-sprites.png");
	gallery.addSprite("DougJustDoug", gallery.projectNum, 4, "04-dougjustdoug-sprites.png");
	gallery.addSprite("Wyverii", gallery.projectNum, 5, "05-wyverii-sprites.png");
	gallery.addSprite("Suntt123", gallery.projectNum, 6, "06-suntt123-sprites.png");
	section.addGallery(gallery);

	gallery = new ArtGallery("CAP 13", "cap13", 13);
	gallery.addArt("Yilx", gallery.projectNum, 1, "01-yilx-Nanamorpha.jpg");
	gallery.addArt("MosQuitoxe", gallery.projectNum, 2, "02-mosquitoxe-point1.jpg");
	gallery.addArt("DougJustDoug", gallery.projectNum, 3, "03-dougjustdoug-weepingwillow8.jpg");
	gallery.addArt("SoIHeardYouLikeSentret", gallery.projectNum, 4, "04-soiheardyoulikesentret-Scarecrowredux.jpg");
	gallery.addArt("Aragornbird", gallery.projectNum, 5, "05-aragornbird-cap2k.jpg");
	gallery.addArt("Wyverii", gallery.projectNum, 6, "06-wyverii-Forestmon640-1.jpg");
	gallery.addArt("Paintseagull", gallery.projectNum, 7, "07-paintseagull-eyFVX.jpg");
	gallery.addArt("CyzirVisheen", gallery.projectNum, 8, "08-cyzirvisheen-rb1Yx.jpg");
	gallery.addArt("Mayatraese", gallery.projectNum, 9, "09-mayatraese-flowermonfinal.jpg");
	gallery.addArt("Calad", gallery.projectNum, 10, "10-calad-Onionpumpkindefintivo.jpg");
	// Sprites	
	gallery.addSprite("ElementalPenguin", gallery.projectNum, 1, "01-elementalpenguin-sprites.png");
	gallery.addSprite("Wyverii", gallery.projectNum, 2, "02-wyverii-sprites.png");
	gallery.addSprite("Ice Cold Claws", gallery.projectNum, 3, "03-icecoldclaws-sprites.png");
	gallery.addSprite("Quanyails", gallery.projectNum, 4, "04-quanyails-sprites.png");
	gallery.addSprite("DougJustDoug", gallery.projectNum, 5, "05-dougjustdoug-sprites.png");
	gallery.addSprite("MosQuitoxe", gallery.projectNum, 6, "06-mosquitoxe-sprites.png");
	gallery.addSprite("Doran Dragon", gallery.projectNum, 8, "08-dorandragon-sprites.png");
	section.addGallery(gallery);

	gallery = new ArtGallery("CAP 14", "cap14", 14);
	gallery.addArt("MosQuitoxe", gallery.projectNum, 1, "01-mosquitoxe-HeSKk.jpg");
	gallery.addArt("CyzirVisheen", gallery.projectNum, 2, "02-cyzirvisheen-vcnir.jpg");
	gallery.addArt("Tea and Blues", gallery.projectNum, 3, "03-teaandblues-FinalThinTentacles.jpg");
	gallery.addArt("DougJustDoug", gallery.projectNum, 4, "04-dougjustdoug-radioactive.jpg");
	gallery.addArt("KoA", gallery.projectNum, 5, "05-koa-final.jpg");
	gallery.addArt("SoIHeardYouLikeSentret", gallery.projectNum, 6, "06-soiheardyoulikesentret-CAPfinal.jpg");
	gallery.addArt("Paintseagull", gallery.projectNum, 7, "07-paintseagull-GOnCG.jpg");
	gallery.addArt("NastyJungle", gallery.projectNum, 8, "08-nastyjungle-k1b3a8.jpg");
	gallery.addArt("Quanyails", gallery.projectNum, 9, "09-quanyails-temporaryfile2.jpg");
	gallery.addArt("Yilx", gallery.projectNum, 10, "10-yilx-sum.jpg");
	gallery.addArt("Calad", gallery.projectNum, 11, "11-calad-fevermon.jpg");
	gallery.addArt("Cretacerus", gallery.projectNum, 12, "12-cretacerus-lotl2.jpg");
	// Sprites	
	gallery.addSprite("Wyverii", gallery.projectNum, 1, "01-wyverii-sprites.png");
	gallery.addSprite("DougJustDoug", gallery.projectNum, 2, "02-dougjustdoug-sprites.png");
	gallery.addSprite("Doran Dragon", gallery.projectNum, 3, "03-dorandragon-sprites.png");
	gallery.addSprite("Quanyails", gallery.projectNum, 4, "04-quanyails-sprites.png");
	section.addGallery(gallery);

	gallery = new ArtGallery("CAP 15", "cap15", 15);
	gallery.addArt("KoA", gallery.projectNum, 1, "01-koa-angelic.jpg");
	gallery.addArt("Yilx", gallery.projectNum, 2, "02-yilx-monc.jpg");
	gallery.addArt("Aragornbird", gallery.projectNum, 3, "03-aragornbird-caph.jpg");
	gallery.addArt("DougJustDoug", gallery.projectNum, 4, "04-dougjustdoug-bookworm8.jpg");
	gallery.addArt("Doran Dragon", gallery.projectNum, 5, "05-dorandragon-MOD116435.jpg");
	gallery.addArt("MosQuitoxe", gallery.projectNum, 6, "06-mosquitoxe-CAP4final2.jpg");
	gallery.addArt("BlueConcept", gallery.projectNum, 7, "07-blueconcept-KnCV1.jpg");
	gallery.addArt("Quanyails", gallery.projectNum, 8, "08-quanyails-tefile2b.jpg");
	gallery.addArt("SoIHeardYouLikeSentret", gallery.projectNum, 9, "09-soiheardyoulikesentret-bugnoblue.jpg");
	gallery.addArt("Calad", gallery.projectNum, 10, "10-calad-Clarividente3_zpsdfe50e6c.jpg");
	gallery.addArt("CBMeadow", gallery.projectNum, 11, "11-cbmeadow-ponph.jpg");
	gallery.addArt("Rocket Grunt", gallery.projectNum, 12, "12-rocketgrunt-bugpyche.jpg");
	gallery.addArt("Birkal", gallery.projectNum, 13, "13-birkal-MNbnK.jpg");
	gallery.addArt("Kadew", gallery.projectNum, 14, "14-kadew-GrTwl.jpg");
	// Sprites	
	gallery.addSprite("Ice Cold Claws", gallery.projectNum, 1, "01-icecoldclaws-sprites.png");
	gallery.addSprite("Wyverii", gallery.projectNum, 2, "02-wyverii-sprites.png");
	gallery.addSprite("DougJustDoug", gallery.projectNum, 3, "03-dougjustdoug-sprites.png");
	gallery.addSprite("Quanyails", gallery.projectNum, 4, "04-quanyails-sprites.png");
	gallery.addSprite("CBMeadow", gallery.projectNum, 5, "05-cbmeadow-sprites.png");
	section.addGallery(gallery);

	gallery = new ArtGallery("CAP 16", "cap16", 16);
	gallery.addArt("Dracoyoshi8", gallery.projectNum, 1, "01-dracoyoshi8-Opqmvx2.jpg");
	gallery.addArt("Yilx", gallery.projectNum, 2, "02-yilx-ss20130316at090124.jpg");
	gallery.addArt("Birkal", gallery.projectNum, 3, "03-birkal-ah6Cs1s.jpg");
	gallery.addArt("Magistrum", gallery.projectNum, 4, "04-magistrum-capmon9resize.jpg");
	gallery.addArt("Eol", gallery.projectNum, 5, "05-eol-iHAPsWA901YC8.jpg");
	gallery.addArt("Cartoons", gallery.projectNum, 6, "06-cartoons-rotty.jpg");
	gallery.addArt("DougJustDoug", gallery.projectNum, 7, "07-dougjustdoug-punisher8.jpg");
	gallery.addArt("Wyverii", gallery.projectNum, 8, "08-wyverii-PGIX8ym.jpg");
	gallery.addArt("MosQuitoxe", gallery.projectNum, 9, "09-mosquitoxe-CAP5final.jpg");
	gallery.addArt("Noobiess", gallery.projectNum, 10, "10-noobiess-iaza14381738079100.jpg");
	// Sprites	
	gallery.addSprite("Wyverii", gallery.projectNum, 1, "01-wyverii-sprites.png");
	gallery.addSprite("Quanyails", gallery.projectNum, 2, "02-quanyails-sprites.png");
	gallery.addSprite("DougJustDoug", gallery.projectNum, 3, "03-dougjustdoug-sprites.png");
	gallery.addSprite("El Cheeso", gallery.projectNum, 4, "04-elcheeso-sprites.png");
	section.addGallery(gallery);

	gallery = new ArtGallery("CAP 17", "cap17", 17);
	gallery.addArt("Magistrum", gallery.projectNum, 1, "01-magistrum-k95n.jpg");
	gallery.addArt("MosQuitoxe", gallery.projectNum, 2, "02-mosquitoxe-Cap6Jet.jpg");
	gallery.addArt("Yilx", gallery.projectNum, 3, "03-yilx-4yJ17.jpg");
	gallery.addArt("Kadew", gallery.projectNum, 4, "04-kadew-LMo5kuf.jpg");
	gallery.addArt("Zracknel", gallery.projectNum, 5, "05-zracknel-l3ce.jpg");
	gallery.addArt("Knirp", gallery.projectNum, 6, "06-knirp-3oLHXMH.jpg");
	gallery.addArt("Calad", gallery.projectNum, 7, "07-calad-39123d48.jpg");
	gallery.addArt("Harle", gallery.projectNum, 8, "08-harle-steelcock.jpg");
	gallery.addArt("paintseagull", gallery.projectNum, 9, "09-paintseagull-MLINoTR.jpg");
	gallery.addArt("DougJustDoug", gallery.projectNum, 10, "10-dougjustdoug-rocketmon.jpg");
	gallery.addArt("Old Man Dugan", gallery.projectNum, 11, "11-oldmandugan-XUM9FR4.jpg");
	gallery.addArt("Birkal", gallery.projectNum, 12, "12-birkal-AVnzlE6.jpg");
	// Sprites	
	gallery.addSprite("Quanyails", gallery.projectNum, 1, "01-quanyails-sprites.png");
	gallery.addSprite("DougJustDoug", gallery.projectNum, 2, "02-dougjustdoug-sprites.png");
	gallery.addSprite("noobiess", gallery.projectNum, 3, "03-noobiess-sprites.png");
	gallery.addSprite("The Reptile", gallery.projectNum, 4, "04-thereptile-sprites.png");
	section.addGallery(gallery);

	gallery = new ArtGallery("CAP 18", "cap18", 18);
	gallery.addArt("Golurkyourself", gallery.projectNum, 1, "01-golurkyourself-2devil4squid.jpg");
	gallery.addArt("Magistrum", gallery.projectNum, 2, "02-magistrum-Wm6sboY.jpg");
	gallery.addArt("Miririri", gallery.projectNum, 3, "03-miririri-p959B8H.jpg");
	gallery.addArt("Yilx", gallery.projectNum, 4, "04-yilx-ss.jpg");
	gallery.addArt("DougJustDoug", gallery.projectNum, 5, "05-dougjustdoug-onuf.jpg");
	gallery.addArt("Cretacerus", gallery.projectNum, 6, "06-cretacerus-ho8f.jpg");
	gallery.addArt("MosQuitoxe", gallery.projectNum, 7, "07-mosquitoxe-CAP7_2.jpg");
	gallery.addArt("Blue Frog", gallery.projectNum, 8, "08-bluefrog-Ns1lMgu.jpg");
	gallery.addArt("Arkeis", gallery.projectNum, 9, "09-arkeis-sl35ap.jpg");
	// Sprites	
	gallery.addSprite("HeaLnDeaL", gallery.projectNum, 1, "01-healndeal-sprites.png");
	gallery.addSprite("Quanyails", gallery.projectNum, 2, "02-quanyails-sprites.png");
	gallery.addSprite("Umbreonage", gallery.projectNum, 3, "03-umbreonage-sprites.png");
	gallery.addSprite("DougJustDoug", gallery.projectNum, 4, "04-dougjustdoug-sprites.png");
	gallery.addSprite("Noobiess", gallery.projectNum, 5, "05-noobiess-sprites.png");
	gallery.addSprite("FrenzyPlant", gallery.projectNum, 6, "06-frenzyplant-sprites.png");
	section.addGallery(gallery);

	gallery = new ArtGallery("CAP 19", "cap19", 19);
	gallery.addArt("Magistrum", gallery.projectNum, 1, "01-magistrum-Hk46p2E.jpg");
	gallery.addArt("paintseagull", gallery.projectNum, 2, "02-paintseagull-d0Tztk9.jpg");
	gallery.addArt("Golurkyourself", gallery.projectNum, 3, "03-golurkyourself-olgoikhorkhoi.jpg");
	gallery.addArt("Yilx", gallery.projectNum, 4, "04-yilx-frog3.jpg");
	gallery.addArt("Birkal", gallery.projectNum, 5, "05-birkal-Mowx50r.jpg");
	gallery.addArt("DougJustDoug", gallery.projectNum, 6, "06-dougjustdoug-135gT1.jpg");
	gallery.addArt("Dracoyoshi8", gallery.projectNum, 7, "07-dracoyoshi-aEbd7fw.jpg");
	gallery.addArt("MosQuitoxe", gallery.projectNum, 8, "08-mosquitoxe-CAP82.jpg");
	gallery.addArt("Hollymon", gallery.projectNum, 9, "09-hollymon-4sDWRfI.jpg");
	// Sprites	
	gallery.addSprite("Quanyails", gallery.projectNum, 1, "01-quanyails-sprites.png");
	gallery.addSprite("HeaLnDeaL", gallery.projectNum, 2, "02-healndeal-sprites.png");
	gallery.addSprite("DougJustDoug", gallery.projectNum, 3, "03-dougjustdoug-sprites.png");
	gallery.addSprite("Jaret", gallery.projectNum, 4, "04-jaret-sprites.png");
	section.addGallery(gallery);

	gallery = new ArtGallery("CAP 20", "cap20", 20);
	gallery.addArt("MosQuitoxe", gallery.projectNum, 1, "01-mosquitoxe-CAP20.jpg");
	gallery.addArt("Quanyails", gallery.projectNum, 2, "02-quanyails-mAPufqj.jpg");
	gallery.addArt("Magistrum", gallery.projectNum, 3, "03-magistrum-QqtmQ12.jpg");
	gallery.addArt("CommanderZorvox", gallery.projectNum, 4, "04-commanderzorvox-Snappingfakemon.jpg");
	gallery.addArt("paintseagull", gallery.projectNum, 5, "05-paintseagull-XB508BV.jpg");
	gallery.addArt("Knirp", gallery.projectNum, 6, "06-knirp-mPDbJZO.jpg");
	gallery.addArt("DougJustDoug", gallery.projectNum, 7, "07-dougjustdoug-yVq0LT.jpg");
	gallery.addArt("Golurkyourself", gallery.projectNum, 8, "08-golurkyourself-return3.jpg");
	gallery.addArt("Yilx", gallery.projectNum, 9, "09-yilx-ss20150428.jpg");
	gallery.addArt("aXL", gallery.projectNum, 10, "10-axl-d8rh26j.jpg");
	gallery.addArt("Blue Frog", gallery.projectNum, 11, "11-bluefrog-ojoLbRD.jpg");
	// Sprites	
	gallery.addSprite("aXL", gallery.projectNum, 1, "01-axl-sprites.png");
	gallery.addSprite("HeaLnDeaL", gallery.projectNum, 2, "02-healndeal-sprites.png");
	gallery.addSprite("Quanyails", gallery.projectNum, 3, "03-quanyails-sprites.png");
	section.addGallery(gallery);

	gallery = new ArtGallery("CAP 21", "cap21", 21);
	gallery.addArt("Yilx", gallery.projectNum, 1, "01-yilx-base-ss20151109125139.jpg");
	gallery.addArt("Yilx", gallery.projectNum, 1, "01-yilx-mega-ss20151119013510.jpg");
	gallery.addArt("DougJustDoug", gallery.projectNum, 2, "02-dougjustdoug-base-5afee153.jpg");
	gallery.addArt("DougJustDoug", gallery.projectNum, 2, "02-dougjustdoug-mega-6aeab1ef.jpg");
	gallery.addArt("Golurkyourself", gallery.projectNum, 3, "03-golurkyourself-base-EggmanFinal.jpg");
	gallery.addArt("Golurkyourself", gallery.projectNum, 3, "03-golurkyourself-mega-EggmanMegaFinal.jpg");
	gallery.addArt("Bummer", gallery.projectNum, 4, "04-bummer-base-Z9tIYL1.jpg");
	gallery.addArt("Bummer", gallery.projectNum, 4, "04-bummer-mega-t7NUx8n.jpg");
	gallery.addArt("Quanyails", gallery.projectNum, 5, "05-quanyails-base-F0xJARK.jpg");
	gallery.addArt("Quanyails", gallery.projectNum, 5, "05-quanyails-mega-4icEI8z.jpg");
	gallery.addArt("a deer", gallery.projectNum, 6, "06-adeer-base-ppfihm9.jpg");
	gallery.addArt("a deer", gallery.projectNum, 6, "06-adeer-mega-vEWOYrw.jpg");
	gallery.addArt("Magistrum", gallery.projectNum, 7, "07-magistrum-base-jZfTBup.jpg");
	gallery.addArt("Magistrum", gallery.projectNum, 7, "07-magistrum-mega-oYRjz7b.jpg");
	gallery.addArt("Chomz", gallery.projectNum, 8, "08-chomz-base-raptorzpsminngnft.jpg");
	gallery.addArt("Chomz", gallery.projectNum, 8, "08-chomz-mega-raptormegazpsx7ty8oft.jpg");
	gallery.addArt("Slapperfish", gallery.projectNum, 9, "09-slapperfish-base-1lpbDo6.jpg");
	gallery.addArt("Slapperfish", gallery.projectNum, 9, "09-slapperfish-mega-cizYQjN.jpg");
	gallery.addArt("Sunfished", gallery.projectNum, 10, "10-sunfished-base-zombie.jpg");
	gallery.addArt("Sunfished", gallery.projectNum, 10, "10-sunfished-mega-zombiemega.jpg");
	gallery.addArt("Otter Power", gallery.projectNum, 11, "11-otterpower-base-oKCSkBE.jpg");
	gallery.addArt("Otter Power", gallery.projectNum, 11, "11-otterpower-mega-0BhYllg.jpg");
	gallery.addArt("Felis Licht", gallery.projectNum, 12, "12-felislicht-base-zps577qiha5.jpg");
	gallery.addArt("Felis Licht", gallery.projectNum, 12, "12-felislicht-mega-zpsopyin2zr.jpg");
	gallery.addArt("MosQuitoxe", gallery.projectNum, 13, "13-mosquitoxe-base-Tarmax.jpg");
	gallery.addArt("MosQuitoxe", gallery.projectNum, 13, "13-mosquitoxe-mega-MegaTarmax.jpg");
	gallery.addArt("Birkal", gallery.projectNum, 14, "14-birkal-base-qeE99Tt.jpg");
	gallery.addArt("Birkal", gallery.projectNum, 14, "14-birkal-mega-2tWf1z1.jpg");
	// Sprites	
	gallery.addSprite("Noobiess", gallery.projectNum, 1, "01-noobiess-base-sprites.png");
	gallery.addSprite("Noobiess", gallery.projectNum, 1, "01-noobiess-mega-sprites.png");
	gallery.addSprite("Ice Cold Claws", gallery.projectNum, 2, "02-icecoldclaws-base-sprites.png");
	gallery.addSprite("Ice Cold Claws", gallery.projectNum, 2, "02-icecoldclaws-mega-sprites.png");
	section.addGallery(gallery);

	gallery = new ArtGallery("CAP 22", "cap22", 22);
	section.addGallery(gallery);

	return section;
};