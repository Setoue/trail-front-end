const keys = document.querySelectorAll(".tecla");

const playSounds = async (idSound) => {
  const sound = document.querySelector(idSound);
  sound ? sound.play() : alert("sound not found it");
};

keys.forEach((key) => {
  const tool = key.classList[1];
  const idSound = `#som_${tool}`;

  key.onclick = () => {
    playSounds(idSound);
  };

  key.keypress = () => {
    key.classList.add("ativa");
  };
});
