const sites = [
	["https://dogspit.nekoweb.org/sidelinkads.html", "https://i.imgur.com/RINmGR1.gif"],
	["https://dogspit.nekoweb.org", "https://i.imgur.com/LOTUgBm.gif"],
	["https://pastel-skies.nekoweb.org", "https://i.imgur.com/v8G6Hij.gif"],
	["https://psyclone.nekoweb.org/", "https://psyclone.nekoweb.org/sidething.png"],
	["https://rickgottaken.nekoweb.org/", "https://rickgottaken.nekoweb.org/images/sidelink.gif"],
	["https://drfred.nekoweb.org/", "https://drfred.nekoweb.org/links/fredzone-sidelink.gif"],
	["https://spacecore.nekoweb.org/", "https://file.garden/Z4nIJOVdzm3EFe84/Your%20paragraph%20text%20(4).png"],
	["https://spacefish.neocities.org/", "https://file.garden/ZLptrSeVhBA68gx4/myWebsites/spacefish/images/sidead/SPACEFISH-NOW.gif"],
	["https://genosadness.neocities.org/", "https://genosadness.neocities.org/GenoSpit.png"],
	["https://frutigeraeroarchive.org/", "https://frutigeraeroarchive.org/images/ads/fa_archive_150x450.png"],
	["https://cheapycore.com/", "https://cheapycore.com/images/ad.gif"],
	["https://milkyway.moe/", "https://milkyway.moe/assets/sidelink.gif"]
];

function randImg(index) {
	const banner = document.getElementById("image");
	const link = document.getElementById("imglink");

	if (!banner || !link || sites.length === 0) {
		return;
	}

	const selectedIndex = Number.isInteger(index) && index >= 0 && index < sites.length
		? index
		: Math.floor(Math.random() * sites.length);

	banner.style.backgroundImage = `url("${sites[selectedIndex][1]}")`;
	link.href = sites[selectedIndex][0];
	setTimeout(randImg, 30000);
}

randImg();
