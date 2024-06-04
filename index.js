
const words = [
    "Today a reader, tomorrow a leader, -Margaret Fuller",
    "A word after a word after a word is power, -Margaret Atwood",
    "One glance at a book and you hear the voice of another person, perhaps someone dead for 1,000 years, to read is to voyage through time, -Carl Sagan",
    "Show me a family of readers, and I will show you the people who move the world, -Napoleon Bonaparte",
    "A book is a garden, an orchard, a storehouse, a party, a company by the way, a counselor, a multitude of counselors, -Charles Baudelaire",
    "When I look back, I am so impressed again with the life-giving power of literature, if I were a young person today, trying to gain a sense of myself in the world, I would do that again by reading, just as I did when I was young, -Maya Angelou",
    "Reading should not be presented to children as a chore, a duty, it should be offered as a gift, -Kate DiCamillo",
    "I think books are like people, in the sense that they’ll turn up in your life when you most need them, -Emma Thompson",
    "It wasn't until I started reading and found books they wouldn't let us read in school that I discovered you could be insane and happy and have a good life without being like everybody else, -John Waters",
    "Books are a uniquely portable magic, -Stephen King",
    "Books are mirrors, you only see in them what you already have inside you, -Carlos Ruiz Zafón",
    "Let’s be reasonable and add an eighth day to the week that is devoted exclusively to reading, -Lena Dunham",
    "If you don’t like to read, you haven’t found the right book, -J.K. Rowling",
    "I can feel infinitely alive curled up on the sofa reading a book, -Benedict Cumberbatch",
    "Some books leave us free and some books make us free, -Ralph Waldo Emerson",
    "We tell ourselves stories in order to live, -Joan Didion",
    "Books and doors are the same thing, you open them, and you go through into another world, -Jeanette Winterson",
    "A good book would take me out of myself and then stuff me back in, outsized, now, and uneasy with the fit, -David Sedaris",
    "Books are, let's face it, better than everything else, Nick Hornby",
    "We read to know we are not alone, -C.S. Lewis",
    "As you read a book word by word and page by page, you participate in its creation, just as a cellist playing a Bach suite participates, note by note, in the creation, the coming-to-be, the existence, of the music, and, as you read and re-read, the book of course participates in the creation of you, your thoughts and feelings, the size and temper of your soul, -Ursula K. Le Guin",
    "Read a lot, expect something big, something exalting or deepening from a book, no book is worth reading that isn't worth re-reading, -Susan Sontag",
    "Have books “happened” to you, unless your answer to that question is “yes,” I’m unsure how to talk to you, -Haruki Murakami",
    
    "Once you learn to read, you will be forever free, -Frederick Douglass",
    "Literature is the safe and traditional vehicle through which we learn about the world and pass on values from one generation to the next, books save lives, -Laurie Anderson",
    "Reading is the key that unlocks the door to a lifetime of learning, and students who read widely and often are better equipped to succeed in school and beyond, -Barack Obama",
"Students who read regularly develop a deeper understanding of the world around them, and are more empathetic and open-minded individuals, -Khaled Hosseini",
"Reading is the ultimate exercise in empathy, allowing students to walk in the shoes of others and see the world from different perspectives, -Celeste Ng",
"Students who read widely are better writers, better thinkers, and better communicators, -Neil Gaiman",
"Reading is the spark that ignites a love of learning in students, and sets them on a path to success, -LeVar Burton",
"Students who read regularly are more likely to succeed in school and beyond, as reading develops critical thinking, analytical skills, and creativity, -Bill Gates",
"Reading is the doorway to a world of wonder, imagination, and possibility, and students who read widely are more likely to achieve their dreams, -J.K. Rowling",
"Students who read regularly develop a deeper understanding of themselves and the world around them, and are more likely to become engaged and active citizens, -Malala Yousafzai",
"Reading is the ultimate form of self-care for students, allowing them to escape, relax, and recharge, -Rainbow Rowell",
"Students who read widely are more likely to develop a growth mindset, and see challenges as opportunities for growth and learning, -Carol Dweck",
"Reading is the key to unlocking a student's full potential, and sets them on a path to success and fulfillment, -Oprah Winfrey",
"Students who read regularly are more likely to develop a love of learning that lasts a lifetime, and are more likely to succeed in school and beyond, -Dr. Seuss",
"Reading is the ultimate form of exploration for students, allowing them to discover new worlds, ideas, and perspectives, -Neil deGrasse Tyson",
"Students who read widely are more likely to develop a deeper understanding of the world around them, and are more likely to become empathetic and open-minded individuals, -Brené Brown",
"Reading is the spark that ignites a love of learning in students, and sets them on a path to success and fulfillment, -Maya Angelou",
"Students who read regularly are more likely to develop critical thinking, analytical skills, and creativity, and are more likely to succeed in school and beyond, -Steve Jobs",
"Reading is the doorway to a world of wonder, imagination, and possibility, and students who read widely are more likely to achieve their dreams, -Walt Disney",
"Students who read regularly develop a deeper understanding of themselves and the world around them, and are more likely to become engaged and active citizens, -Nelson Mandela",
"Reading is the ultimate form of self-care for students, allowing them to escape, relax, and recharge, -Jane Austen",
"Students who read widely are more likely to develop a growth mindset, and see challenges as opportunities for growth and learning, -Albert Einstein",
"Reading is the key to unlocking a student's full potential, and sets them on a path to success and fulfillment, -Martin Luther King Jr.",
"Students who read regularly are more likely to develop a love of learning that lasts a lifetime, and are more likely to succeed in school and beyond, -Helen Keller",
"Reading is the ultimate form of exploration for students, allowing them to discover new worlds, ideas, and perspectives, -Marie Curie",
"Students who read widely are more likely to develop a deeper understanding of the world around them, and are more likely to become empathetic and open-minded individuals, -Charles Darwin",
"Reading is the spark that ignites a love of learning in students, and sets them on a path to success and fulfillment, -Florence Nightingale",
"Students who read regularly are more likely to develop critical thinking, analytical skills, and creativity, and are more likely to succeed in school and beyond, -Thomas Edison",
"Reading is the doorway to a world of wonder, imagination, and possibility, and students who read widely are more likely to achieve their dreams, -Emily Dickinson",
"Students who read regularly develop a deeper understanding of themselves and the world around them, and are more likely to become engaged and active citizens, -Rosa Parks",
"Reading is the ultimate form of self-care for students, allowing them to escape, relax, and recharge, -J.R.R. Tolkien",
"Students who read widely are more likely to develop a growth mindset, and see challenges as opportunities for growth and learning, -Marie Kondo",
"Reading is the key to unlocking a student's full potential, and sets them on a path to success and fulfillment, -Stephen King",
"Students who read regularly are more likely to develop a love of learning that lasts a lifetime, and are more likely to succeed in school and beyond, -Judy Blume",
"Reading is the ultimate form of exploration for students, allowing them to discover new worlds, ideas, and perspectives, -Stephen Hawking", 

"A room without books is like a body without a soul, -Cicero",
"The reading of all good books is like a conversation with the finest minds of past centuries, -Rene Descartes",
"That's the thing about books, they let you travel without moving your feet, -Jhumpa Lahiri",
"I love the way that each book — any book — is its own journey, you open it, and off you go, -Sharon Creech",
"Reading is an exercise in empathy, an exercise in walking in someone else's shoes for a while, -Malorie Blackman",
"Reading is a form of prayer, a guided meditation that briefly makes us believe we're someone else, disrupting the delusion that we're permanent and at the center of the universe, suddenly we're saved, other people are real again, and we're fond of them, -George Saunders",
"A great book should leave you with many experiences, and slightly exhausted at the end, you live several lives while reading, -William Styron",
"I guess a big part of serious fiction's purpose is to give the reader, who like all of us is sort of marooned in her own skull, to give her imaginative access to other selves, -David Foster Wallace",
"Reading is escape, and the opposite of escape, it's a way to make contact with reality after a day of making things up, and it's a way of making contact with someone else's imagination after a day that's all too real, -Nora Ephron",
"Reading makes immigrants of us all, it takes us away from home, but more important, it finds homes for us everywhere, -Jean Rhys",
"Salvation is certainly among the reasons I read, reading and writing have always pulled me out of the darkest experiences in my life, stories have given me a place in which to lose myself, they have allowed me to remember, they have allowed me to forget, they have allowed me to imagine different endings and better possible worlds, -Roxane Gay",
"You think your pain and your heartbreak are unprecedented in the history of the world, but then you read, it was books that taught me that the things that tormented me most were the very things that connected me with all the people who were alive, who had ever been alive, -James Baldwin",
"Reading is important, if you know how to read, then the whole world opens up to you, -Barack Obama",
"That is part of the beauty of all literature, you discover that your longings are universal longings, that you’re not lonely and isolated from anyone, you belong, -F. Scott Fitzgerald",
"We don’t need a list of rights and wrongs, tables of dos and don’ts, we need books, time, and silence, thou shalt not is soon forgotten, but once upon a time lasts forever, -Philip Pullman",
"Books may well be the only true magic, -Alice Hoffman",
"Maybe this is why we read, and why in moments of darkness we return to books, to find words for what we already know, -Alberto Manguel",
"A room without books is like a body without a soul, -Cicero",
"The reading of all good books is like a conversation with the finest minds of past centuries, -Rene Descartes",
"That's the thing about books, they let you travel without moving your feet, -Jhumpa Lahiri",
"I love the way that each book — any book — is its own journey, you open it, and off you go, -Sharon Creech",
"Reading is an exercise in empathy, an exercise in walking in someone else's shoes for a while, -Malorie Blackman",
"Reading is a form of prayer, a guided meditation that briefly makes us believe we're someone else, disrupting the delusion that we're permanent and at the center of the universe, suddenly we're saved, other people are real again, and we're fond of them, -George Saunders",
"A great book should leave you with many experiences, and slightly exhausted at the end, you live several lives while reading, -William Styron",
"I guess a big part of serious fiction's purpose is to give the reader, who like all of us is sort of marooned in her own skull, to give her imaginative access to other selves, -David Foster Wallace",
"Reading is escape, and the opposite of escape, it's a way to make contact with reality after a day of making things up, and it's a way of making contact with someone else's imagination after a day that's all too real, -Nora Ephron",
"Reading makes immigrants of us all, it takes us away from home, but more important, it finds homes for us everywhere, -Jean Rhys"
    ]
    const action = Math.floor(Math.random() * words.length);
const randomQuote =() =>{
    const action = Math.floor(Math.random() * words.length);
        const link= 'https://preciousultimate.github.io/exam-countdown/'
    
    document.querySelector('.qoute').innerHTML=(words[action]);

    document.querySelector('div a').href =`whatsapp://send?text=${words[action]} from ${link}`

}
  randomQuote()
  


  const showError = () => {
    const error = document.querySelector('#error');
    error.style.display = 'block';
    error.textContent = 'You blocked this site notification. To allow notification, go to you your browser setting, and then allow nottification';
}

const showNotification = () => {
    // create a new notification
    const notification = new Notification(' Hi', {
        body: `Please Study Hard! ${words[action]} `,
        icon: './radioactive.png',
        vibrate: true
    });

    // close the notification after 10 seconds
    setTimeout(() => {
        notification.close();
        //  notification
     },10 * 1000);

    // navigate to a URL when clicked
    notification.addEventListener('click', () => {

        window.open('https://preciousultimate/github.io/exam-countdown/', '_blank');
    });
}
const api=()=>{
    (async () => {
        let granted = false;
    
        if (Notification.permission === 'granted') {
            granted = true;
        } else if (Notification.permission !== 'denied') {
            let permission = await Notification.requestPermission();
            granted = permission === 'granted' ? true : false;
        }
    
        // show notification or error
        granted ? showNotification() : showError();
    
    })();
    
}



const countTimer = setInterval( function(){
    const endTime = new Date("August 11, 2024 24:00:00").getTime();        
    const CurrentTime = new Date().getTime();
    const distance = endTime - CurrentTime;
    const timeinDays = Math.floor(distance / (1000 * 60 * 60 * 24));
    const timeinHours = Math.floor((distance % (1000 * 60 * 60 * 24)) /(1000 * 60 * 60));
    const timeinMinutes = Math.floor((distance % (1000 * 60 * 60)) /(1000 * 60));
    const timeinSeconds = Math.floor((distance % (1000 * 60)) /(1000));
document.querySelector('#days').innerHTML= timeinDays;
document.querySelector('#hours').innerHTML= timeinHours;
document.querySelector('#minutes').innerHTML= timeinMinutes;
document.querySelector('#seconds').innerHTML= timeinSeconds;
   


    if(timeinDays  <= 0){
    clearInterval(countTimer);
    document.querySelector('.qoute').innerHTML= "I wish you Success";
    document.querySelector('.qoute').style.marginLeft ="50px "
    }
    
     if(timeinSeconds === 45 || timeinSeconds === 25 ){
         randomQuote()
        
    }
    
    }, 1000)
    
 
const copyright = new Date().getFullYear()
document.querySelector('#copyright').innerHTML= ` Copyright &copy; ${copyright}`; 


const permit = setInterval(() => {
    const notifyinSeconds = new Date().getSeconds()
    // console.log(notifyinSeconds)

    
    if(notifyinSeconds === 30 || notifyinSeconds === 15){
        clearInterval(permit)   
        api();
    }
}, 1000);


const notifyinMinutes = new Date().getMinutes()

if (notifyinMinutes === 30) {
    showNotification()
}
