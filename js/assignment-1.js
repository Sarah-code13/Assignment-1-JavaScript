const firstColumn = ["The turkey","Mom", "Dad","The dog","My teacher", "The elephant","The cat"];
const firstImage = ["turkey.jpg","mom.jpg","dad.jpg","dog.jpg","teacher.jpg","elephant.jpg","cat.jpg"];
const secondColumn = ["sat on", "ate", "danced with","saw","doesn't like","kissed"];
const secondImage = ["sat-on.jpg","ate.jpg","dance-with.jpg","saw.jpg","doesnt-like.jpg","kiss.jpg"]
const thirdColumn = ["a funny", "a scary", "a goofy", "a slimy","a barking","a fat"];
const thirdImage = ["funny.jpg","scary.jpg","goofy.jpg","slimy.jpg","barking.jpg","fat.jpg"];
const fourthColumn = ["goat", "monkey", "fish","cow","frog","bug","worm"];
const fourthImage = ["goat.jpg","monkey.jpg","fish.jpg","cow.jpg","frog.jpg","bug.jpg","worm.jpg"];
const fifthColumn = ["on the moon.", "on the chair.","in my spaghetti.","in my soup.","on the grass","in my shoes."];
const fifthImage = ["moon.jpg","chair.jpg","spaghetti.jpg","soup.jpg","grass.jpg","shoes.jpg"]
const buttons = document.querySelectorAll("button")
const displayText = document.querySelector(".display-text");
const index = [0,0,0,0,0];
const columns = [firstColumn,secondColumn,thirdColumn,fourthColumn,fifthColumn];
const AllImages = [firstImage,secondImage,thirdImage,fourthImage,fifthImage];
const images = document.querySelectorAll("img");
const surprise = document.querySelector(".surprise")

buttons.forEach((button, i) => {
    if (i < 5) {
        button.addEventListener("click",() => {
            index[i] = (index[i] + 1) % columns[i].length;

            if (images[i]) {
                images[i].src = "images/" + AllImages[i][index[i]];
            }
            textDisplayed();
        })
    }
})
surprise.addEventListener("click", () => {
    for (let i = 0; i < columns.length; i++) {
        index[i] = Math.random() * columns[i].length;
        images[i].src = "images/" + AllImages[i][index[i]];
    }
    textDisplayed();
})
function textDisplayed() {
 displayText.textContent = `${columns[0][index[0]]} ${columns[1][index[1]]} ${columns[2][index[2]]} ${columns[3][index[3]]} ${columns[4][index[4]]}`;
}

