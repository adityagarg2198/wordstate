const btn = document.querySelector(".btn");

btn.addEventListener("click", async () => {
  const wrapper = document.querySelector(".card-wrapper");
  wrapper.innerHTML = "";
  const word = document.querySelector(".input").value;
  const result = await fetch(
    `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
  );
  const data = await result.json();
  const definitions = data[0].meanings[0].definitions;
  definitions.forEach((element) => {
    const card = document.createElement("div");
    card.classList.add("card");
    const p = document.createElement("p");
    p.classList.add("meaning");
    p.textContent = element.definition;
    card.appendChild(p);
    wrapper.appendChild(card);
  });
});
