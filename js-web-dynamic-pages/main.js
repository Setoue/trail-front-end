const pom = document.querySelector(".tecla_pom");

pom.addEventListener("click", () => {
  playPom();
});

const playPom = async () => {
  await document.querySelector("#som_tecla_pom").play();
};
