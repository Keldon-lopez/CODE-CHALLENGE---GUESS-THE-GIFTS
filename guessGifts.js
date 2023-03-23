var wishlist = [
    {name: "Mini Puzzle", size: "small", clatters: "yes", weight: "light"},
    {name: "Toy Car", size: "medium", clatters: "a bit", weight: "medium"},
    {name: "Card Game", size: "small", clatters: "no", weight: "light"}
];

var presents = [
    {size: "medium", clatters: "a bit", weight: "medium"},
    {size: "small", clatters: "yes", weight: "light"}
];

const guessGifts = (wants, gifts) => {
// I need an answer array of the names of what I got
    let answer = [];

    // grab the values of each presents individually
    for (let index = 0; index < gifts.length; index++) {
        let { size: Gsize, clatters:Gclatters, weight:Gweight} = gifts[index];
        console.log(Gsize, Gclatters, Gweight)
        
    // now I need to loop my wishlist to compare my presents to wishlist
        for (let j = 0; j < wants.length; j++) {
            let { size:Wsize, clatters:Wclatters, weight:Wwants} = wants[j];

            // Now I need to compare
            if (Gsize === Wsize && Gclatters === Wclatters && Gweight === Wwants ) {
                // If it is correct I need to push the name of the present to the answer array
                answer.push(wants[j].name);
            }
        }
    }
    // return a list of presents
    return answer
}

console.log(guessGifts(wishlist, presents));