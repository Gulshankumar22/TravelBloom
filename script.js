function startChat() {
  alert("Chat feature coming soon!");
}

const locations = [
  {
    keyword: "beach",
    image: "assests/bondibeach.jpg",
    place: "Bondi Beach",
    country: "Australia"
  },
  {
    keyword: "temple",
    image: "assests/angarwat.jpeg",
    place: "Angkor Wat",
    country: "Cambodia"
  },
  {
    keyword: "beach",
    image: "assests/borabora.jpeg",
    place: "Bora Bora",
    country: "French Polynesia"
  },
  {
    keyword: "temple",
    image: "assests/golden-temple.jpg",
    place: "Golden Temple",
    country: "India"
  },
  {
    keyword: "Canada",
    image: "assests/toronto.jpg",
    place: "toronto",
    country: "Canada"
  },
  {
    keyword: "france",
    image: "assests/effieltower.jpeg",
    place: "Effiel Tower",
    country: "france"
  },
  {
    keyword: "france",
    image: "assests/louvre.jpg",
    place: "Louvre Museum",
    country: "france"
  },
  {
    keyword: "Canada",
    image: "assests/moraine.jpg",
    place: "Moraine Lake",
    country: "Canada"
  }
  
];

function handleSearch() {
  const input = document.getElementById("searchInput").value.toLowerCase().trim();
  const resultContainer = document.getElementById("searchResults");

  const matched = locations.filter(loc =>
    loc.keyword.toLowerCase().includes(input) ||
    loc.country.toLowerCase().includes(input) ||
    loc.place.toLowerCase().includes(input)
  );

  if (matched.length > 0) {
    resultContainer.classList.remove("hidden");
    resultContainer.innerHTML = matched.map(loc => `
      <div class="card">
        <img src="${loc.image}" alt="${loc.place}">
        <div class="card-content">
          <h3>${loc.place}</h3>
          <p>${loc.country}</p>
        </div>
      </div>
    `).join('');
  } else {
    resultContainer.classList.remove("hidden");
    resultContainer.innerHTML = `<p style="text-align:center; font-size:18px; color:#555;">No results found for "${input}"</p>`;
  }
}
