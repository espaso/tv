const bookmarks = [
  {url: "aie"},
  {url: "amc"},
  {url: "animalplanet"},
  {url: "axn"},
  {url: "band"},
  {url: "bandnews"},
  {url: "bandsports"},
  {url: "bis"},
  {url: "canalbrasil"},
  {url: "cartoon"},
  {url: "cinecanal"},
  {url: "cnnbrasil"},
  {url: "discovery"},
  {url: "discoveryhomeihealth"},
  {url: "discoverykids"},
  {url: "discoverysience"},
  {url: "discoverytheater"},
  {url: "discoveryturbo"},
  {url: "discoveryworld"},
  {url: "disney"},
  {url: "espn"},
  {url: "espn2"},
  {url: "espn3"},
  {url: "espn4"},
  {url: "espnextra"},
  {url: "foxsports2"},
  {url: "fx"},
  {url: "globonews"},
  {url: "boborj"},
  {url: "gnt"},
  {url: "hbo"},
  {url: "hbo2"},
  {url: "hbofamily"},
  {url: "hbomundi"},
  {url: "hboplus"},
  {url: "hbopop"},
  {url: "hbosignature"},
  {url: "hboxtreme"},
  {url: "history"},
  {url: "history2"},
  {url: "lifetime"},
  {url: "megapix"},
  {url: "multishow"},
  {url: "natgeo"},
  {url: "nickjr"},
  {url: "nick"},
  {url: "off"},
  {url: "paramount"},
  {url: "premiereclubes"},
  {url: "premiere2"},
  {url: "premiere3"},
  {url: "premiere4"},
  {url: "premiere5"},
  {url: "premiere6"},
  {url: "premiere7"},
  {url: "premiere8"},
  {url: "recordnews"},
  {url: "record"},
  {url: "redetv"},
  {url: "sbt"},
  {url: "sony"},
  {url: "space"},
  {url: "sportv1"},
  {url: "sportv2"},
  {url: "sportv3"},
  {url: "starchannel"},
  {url: "studiouniversal"},
  {url: "syfy"},
  {url: "tcm"},
  {url: "telecineaction"},
  {url: "telecinecult"},
  {url: "telecinefun"},
  {url: "telecinepipoca"},
  {url: "telecinepremium"},
  {url: "telecinetouch"},
  {url: "tlc"},
  {url: "tnt"},
  {url: "tntnovelas"},
  {url: "tntseries"},
  {url: "tooncast"},
  {url: "universal"},
  {url: "viva"},
  {url: "warner"},
  {url: "woohoo"}
];

const tilesContainer = document.querySelector("#tiles");
let selectedIndex = 0;
const numTilesPerRow = 4;
const caminho = "https://%78%6E%2D%2D%2D%2D%2D%2D%2D%2D%2D%2D%2D%2D%2D%2D%2D%2D%67%33%34%6C%33%66%6B%70%37%6D%73%68%31%63%6A%33%61%63%6F%62%6A%33%33%61%63%32%61%37%61%38%6C%75%66%6F%6D%6D%61%37%63%66%32%62%31%73%68%2E%78%6E%2D%2D%2D%31%6C%31%2D%2D%35%6F%34%64%78%62%2E%78%6E%2D%2D%2D%32%32%2D%2D%31%31%2D%2D%33%33%2D%2D%39%39%2D%2D%37%35%2D%2D%2D%2D%2D%2D%2D%2D%2D%62%32%35%7A%6A%66%33%6C%74%61%36%6D%77%66%36%61%34%37%64%7A%61%39%34%65%2E%78%6E%2D%2D%70%63%6B%2E%78%6E%2D%2D%7A%63%6B%2E%78%6E%2D%2D%30%63%6B%2E%78%6E%2D%2D%70%63%6B%2E%78%6E%2D%2D%79%63%6B%2E%78%6E%2D%2D%2D%2D%2D%30%62%34%61%73%6A%61%37%63%63%66%76%32%62%34%62%30%67%64%30%65%64%62%6A%6D%32%6A%70%61%31%62%31%65%39%7A%76%61%37%61%30%33%34%37%73%34%64%61%32%37%39%37%65%38%71%72%69%2E%78%6E%2D%2D%31%63%6B%32%65%31%62";

bookmarks.forEach((bookmark, index) => {
  const tile = document.createElement("div");
  tile.classList.add("tile");
  tile.setAttribute("tabindex", "0");
  tile.innerHTML = "<img src='" + caminho + "/player3/imgs-videos/Canais/" + bookmark.url + ".jpg'>";

  tile.addEventListener("click", () => {
	//window.open("https://sinalpublico.com/player3/ch.php?canal="+bookmark.url, "_blank");
	window.location.href=caminho+"/player3/ch.php?canal="+bookmark.url;
  });

  tile.addEventListener("keydown", event => {
    if (event.code === "ArrowUp") {
      const newRow = Math.floor(index / numTilesPerRow);
      const newIndex = newRow * numTilesPerRow + (index % numTilesPerRow);
      if (newRow >= 0 && newIndex < bookmarks.length) {
        tilesContainer.children[newIndex].focus();
        selectedIndex = newIndex;
      }
    } else if (event.code === "ArrowDown") {
      const newRow = Math.floor(index / numTilesPerRow);
      const newIndex = newRow * numTilesPerRow + (index % numTilesPerRow);
      if (newRow < Math.ceil(bookmarks.length / numTilesPerRow) && newIndex < bookmarks.length) {
        tilesContainer.children[newIndex].focus();
        selectedIndex = newIndex;
      }
    } else if (event.code === "ArrowLeft") {
      const newIndex = index;
      if (newIndex >= 0) {
        tilesContainer.children[newIndex].focus();
        selectedIndex = newIndex;
      }
    } else if (event.code === "ArrowRight") {
      const newIndex = index;
      if (newIndex < bookmarks.length) {
        tilesContainer.children[newIndex].focus();
        selectedIndex = newIndex;
      }
    } else if (event.code === "Enter") {
		window.open("https://sinalpublico.com/player3/ch.php?canal="+bookmark.url, "_blank");
	}
  });

  tile.addEventListener("focus", () => {
    selectedIndex = index;
  });

  tilesContainer.appendChild(tile);
});

tilesContainer.firstChild.focus();

document.addEventListener("keydown", event => {
  if (event.code === "ArrowUp") {
    const newRow = Math.floor(selectedIndex / numTilesPerRow) - 1;
    const newIndex = newRow * numTilesPerRow + (selectedIndex % numTilesPerRow);
    if (newRow >= 0 && newIndex < bookmarks.length) {
      tilesContainer.children[newIndex].focus();
      selectedIndex = newIndex;
    }
  } else if (event.code === "ArrowDown") {
    const newRow = Math.floor(selectedIndex / numTilesPerRow) + 1;
    const newIndex = newRow * numTilesPerRow + (selectedIndex % numTilesPerRow);
    if (newRow < Math.ceil(bookmarks.length / numTilesPerRow) && newIndex < bookmarks.length) {
      tilesContainer.children[newIndex].focus();
      selectedIndex = newIndex;
    }
  } else if (event.code === "ArrowLeft") {
    const newIndex = selectedIndex - 1;
    if (newIndex >= 0) {
      tilesContainer.children[newIndex].focus();
      selectedIndex = newIndex;
    }
  } else if (event.code === "ArrowRight") {
    const newIndex = selectedIndex + 1;
    if (newIndex < bookmarks.length) {
      tilesContainer.children[newIndex].focus();
      selectedIndex = newIndex;
    }
  }
});
