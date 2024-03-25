let btn = document.getElementById('btn');
let emojiname = document.querySelector('.emojiName');

const emoji = [];

async function getEmoji(){
    let response = await fetch("https://emoji-api.com/emojis?access_key=84ea78772efa5f83f4564e6c0f880e5c2cc95b5b");
    data = await response.json();
    console.log(data);

    for(let i=0; i<1500; i++)
    {
        emoji.push({

            emojiCharacter: data[i].character,
            emojiName: data[i].unicodeName,

        });
    }
}

getEmoji();

console.log(emoji);

btn.addEventListener("click", function(){
    let randomNumber = Math.floor(Math.random() * emoji.length);
    btn.innerText = emoji[randomNumber].emojiCharacter;
    emojiname.innerText = emoji[randomNumber].emojiName; 
});

