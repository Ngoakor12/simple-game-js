document.addEventListener("DOMContentLoaded", function () {
  const avatar = document.querySelector("#avatar");
  const stage = document.querySelector("#stage");
  const reward = document.querySelector("#reward");
  const obstacle = document.querySelector("#obstacle");
  const pointsContainer = document.querySelector(".points-container");
  const points = document.querySelector(".points");

  const stageRect = stage.getBoundingClientRect();
  const avatarRect = stage.getBoundingClientRect();
  const rewardRect = stage.getBoundingClientRect();

  console.log("reward", reward);

  avatar.style.top = Math.round(stageRect.top) + "px";
  avatar.style.left = Math.round(stageRect.left) + "px";

  reward.style.display = "inline-block";

  function getRandomRewardPos() {
    let randomPos = getRandomPos();
    reward.style.left = Math.round(stageRect.left) + randomPos[0] + "px";
    reward.style.top = Math.round(stageRect.top) + randomPos[1] + "px";
  }

  getRandomRewardPos();

  function move(e) {
    console.log("event", e, avatar);
    const key = e.key;
    const xNum = Number(
      avatar.style.left.substring(0, avatar.style.left.length - 2)
    );
    const yNum = Number(
      avatar.style.top.substring(0, avatar.style.top.length - 2)
    );
    let newX, newY;

    switch (key) {
      case "ArrowRight":
        console.log("rightttt");
        newX = xNum + 100;
        if (newX <= stageRect.right - 100) {
          avatar.style.left = newX + "px";
        }
        if (hasCollision(avatar, reward)) {
          console.log("collision!");
          getRandomRewardPos();
          points.textContent = " " + (Number(points.textContent) + 1);
        }
        break;
      case "ArrowLeft":
        console.log("lefttttt");
        newX = xNum - 100;
        if (newX >= stageRect.left) {
          avatar.style.left = newX + "px";
        }
        if (hasCollision(avatar, reward)) {
          console.log("collision!");
          getRandomRewardPos();
          points.textContent = " " + (Number(points.textContent) + 1);
        }
        break;
      case "ArrowDown":
        console.log("downnnn");
        newY = yNum + 100;
        if (newY <= stageRect.bottom - 100) {
          avatar.style.top = newY + "px";
        }
        if (hasCollision(avatar, reward)) {
          console.log("collision!");
          getRandomRewardPos();
          points.textContent = " " + (Number(points.textContent) + 1);
        }
        break;
      case "ArrowUp":
        console.log("upppp");
        newY = yNum - 100;
        if (newY >= stageRect.top) {
          avatar.style.top = newY + "px";
        }
        if (hasCollision(avatar, reward)) {
          console.log("collision!");
          getRandomRewardPos();
          points.textContent = " " + (Number(points.textContent) + 1);
        }
        break;
    }
  }

  document.addEventListener("keydown", move);
});
