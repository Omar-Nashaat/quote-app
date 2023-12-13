var quotes = [
    "The only way to do great work is to love what you do. - Steve Jobs",
    "Success is not final, failure is not fatal: It is the courage to continue that counts. - Winston Churchill",
    "The future belongs to those who believe in the beauty of their dreams. - Eleanor Roosevelt",
    "In three words I can sum up everything I've learned about life: it goes on. - Robert Frost",
    "Believe you can and you're halfway there. - Theodore Roosevelt",
    "The only limit to our realization of tomorrow will be our doubts of today. - Franklin D. Roosevelt",
    "Strive not to be a success, but rather to be of value. - Albert Einstein",
    "Don't watch the clock; do what it does. Keep going. - Sam Levenson",
    "Success is stumbling from failure to failure with no loss of enthusiasm. - Winston Churchill",
    "The only person you are destined to become is the person you decide to be. - Ralph Waldo Emerson",
    "Do not wait to strike till the iron is hot, but make it hot by striking. - William Butler Yeats",
    "The best way to predict the future is to create it. - Peter Drucker",
    "It's not whether you get knocked down, it's whether you get up. - Vince Lombardi",
    "Your time is limited, don't waste it living someone else's life. - Steve Jobs",
    "Believe in yourself and all that you are. Know that there is something inside you that is greater than any obstacle. - Christian D. Larson",
    "Life is either a daring adventure or nothing at all. - Helen Keller",
    "Success usually comes to those who are too busy to be looking for it. - Henry David Thoreau",
    "The only thing standing between you and your goal is the story you keep telling yourself as to why you can't achieve it. - Jordan Belfort",
    "The best revenge is massive success. - Frank Sinatra",
    "I have not failed. I've just found 10,000 ways that won't work. - Thomas Edison",
    "Life is what happens when you're busy making other plans. - John Lennon",
    "If you want to achieve greatness stop asking for permission. - Anonymous",
    "The greatest glory in living lies not in never falling, but in rising every time we fall. - Nelson Mandela",
    "The future belongs to those who prepare for it today. - Malcolm X",
    "Success is not in what you have, but who you are. - Bo Bennett",
    "Do not dwell in the past, do not dream of the future, concentrate the mind on the present moment. - Buddha",
    "The only easy day was yesterday. - Navy SEAL motto",
    "Strive for progress, not perfection. - Unknown",
    "The way to get started is to quit talking and begin doing. - Walt Disney",
    "You miss 100% of the shots you don't take. - Wayne Gretzky",
    "Success is not just about making money. It's about making a difference. - Unknown",
    "The only thing standing between you and your goal is the story you keep telling yourself as to why you can't achieve it. - Jordan Belfort",
    "Your life does not get better by chance, it gets better by change. - Jim Rohn",
    "Don't count the days, make the days count. - Muhammad Ali",
    "You are never too old to set another goal or to dream a new dream. - C.S. Lewis"
];

function newQuote() {
    if (quotes.length == 0) { //law el quotes 5elst
        document.getElementById('end').innerHTML = ("You have seen all my quotes today !");
        return;
    }
    // bne3ml random llquotes
    var randomIndex = Math.floor(Math.random() * quotes.length);
    var randomQuote = quotes[randomIndex];

    // bashel el quote el est5dmtha 3shan mytba3sh quote aktar mn mra
    quotes.splice(randomIndex, 1);
    document.getElementById('text').innerHTML = randomQuote;
}