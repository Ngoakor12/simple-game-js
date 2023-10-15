document.addEventListener("DOMContentLoaded", function () {
  const avatar = document.querySelector("#avatar");
  const stage = document.querySelector("#stage");

  const stageRect = stage.getBoundingClientRect();

  avatar.style.top = Math.round(stageRect.top) + "px";
  avatar.style.left = Math.round(stageRect.left) + "px";

  console.log("stage", stage);

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
        if (newX <= stageRect.right) {
          avatar.style.left = newX + "px";
        }
        break;
      case "ArrowLeft":
        console.log("lefttttt");
        newX = xNum - 100;
        if (newX >= stageRect.left) {
          avatar.style.left = newX + "px";
        }
        break;
      case "ArrowDown":
        console.log("downnnn");
        newY = yNum + 100;
        if (newY <= stageRect.bottom - 100) {
          avatar.style.top = newY + "px";
        }
        break;
      case "ArrowUp":
        console.log("upppp");
        newY = yNum - 100;
        if (newY >= stageRect.top) {
          avatar.style.top = newY + "px";
        }
        break;
    }
  }

  document.addEventListener("keydown", move);
});
