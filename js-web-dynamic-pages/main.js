const keys = document.querySelectorAll(".tecla");

const playSounds = async (idSound) => {
  await document.querySelector(idSound).play();
};

keys.forEach((key) => {
  const tool = key.classList[1];
  const idSound = `#som_${tool}`;

  key.onclick = () => {
    playSounds(idSound);
  };
});
