const ratings = document.querySelectorAll(".rating");
for (var i = 0; i < ratings.length; i++) {
  let rating = ratings[i];
  let index = i;
  rating.addEventListener("click", () => {
    for (var j = 0; j <= index; j++) {
      ratings[j].style.fill = "yellow";
    }
  });
}
