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

bookmarks.forEach((bookmark, index) => {
  const tile = document.createElement("div");
  tile.classList.add("tile");
  tile.setAttribute("tabindex", "0");
  tile.innerHTML = "<img src='https://%E3%83%87-%E3%83%B3-%E3%83%83-%E3%82%AF-%E3%82%B9-%E3%83%B3-%E3%83%87-%E3%83%89-%E3%83%89-%E3%83%AB-%E3%83%9C-%E3%83%A9-%E3%83%AB%E3%82%B0%E3%83%AC%E3%83%95%E3%83%88-%E3%83%96%E3%83%A0%E3%83%95%E3%82%AF%E3%83%88%E3%83%97%E3%83%89%E3%83%A9%E3%82%A2.%E3%82%B8-1l1-%E3%82%B0.%E3%83%83-22-%E3%82%AF-11-%E3%82%B9-33-%E3%83%AB-99-%E3%83%97-75-%E3%82%BE--%E3%82%A8--%E3%83%96--%E3%82%B9-%E3%83%83.%E3%82%AF.%E3%82%B9.%E3%82%BA.%E3%82%AF.%E3%82%B8.%E3%82%B7%E3%82%B0%E3%83%8A%E3%83%AB%E3%83%91%E3%83%96%E3%83%AA%E3%82%B3-%E5%85%AC%E5%85%B1%E3%81%AE%E6%A8%99%E8%AD%98-%E3%83%90%E3%83%AC%E3%82%A6%E3%83%89%E3%83%83%E3%83%88%E3%82%B0%E3%82%A6%E3%82%AF%E3%83%88%E3%83%83%E3%83%88%E3%82%BA%E3%83%92.%E3%82%BB%E3%83%BC%E3%83%AB/player3/imgs-videos/Canais/" + bookmark.url + ".jpg'>";

  tile.addEventListener("click", () => {
	//window.open("https://sinalpublico.com/player3/ch.php?canal="+bookmark.url, "_blank");
	window.location.href="https://%E3%83%87-%E3%83%B3-%E3%83%83-%E3%82%AF-%E3%82%B9-%E3%83%B3-%E3%83%87-%E3%83%89-%E3%83%89-%E3%83%AB-%E3%83%9C-%E3%83%A9-%E3%83%AB%E3%82%B0%E3%83%AC%E3%83%95%E3%83%88-%E3%83%96%E3%83%A0%E3%83%95%E3%82%AF%E3%83%88%E3%83%97%E3%83%89%E3%83%A9%E3%82%A2.%E3%82%B8-1l1-%E3%82%B0.%E3%83%83-22-%E3%82%AF-11-%E3%82%B9-33-%E3%83%AB-99-%E3%83%97-75-%E3%82%BE--%E3%82%A8--%E3%83%96--%E3%82%B9-%E3%83%83.%E3%82%AF.%E3%82%B9.%E3%82%BA.%E3%82%AF.%E3%82%B8.%E3%82%B7%E3%82%B0%E3%83%8A%E3%83%AB%E3%83%91%E3%83%96%E3%83%AA%E3%82%B3-%E5%85%AC%E5%85%B1%E3%81%AE%E6%A8%99%E8%AD%98-%E3%83%90%E3%83%AC%E3%82%A6%E3%83%89%E3%83%83%E3%83%88%E3%82%B0%E3%82%A6%E3%82%AF%E3%83%88%E3%83%83%E3%83%88%E3%82%BA%E3%83%92.%E3%82%BB%E3%83%BC%E3%83%AB/player3/ch.php?canal="+bookmark.url;
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
