const quotes = [
    {
        quote:"Believe in yourself.",
        trans:"자기 자신을 믿으세요.",
    },
    {
        quote:"Nothing ventured, nothing gained.",
        trans:"모험하지 않는다면, 얻는 것도 없다.",
    },
    {
        quote:"Try your best rather than be the best.",
        trans:"최고가 되기보다는 최선을 다해라.",
    },
    {
        quote:"It is kind of fun to do the impossible.",
        trans:"불가능을 하는 것은 좀 재미있다.",
    },
    {
        quote:"You will never know until you try.",
        trans:"해보기 전에는 결코 알 수 없을 것이다.",
    },
    {
        quote:"Every wall is a door.",
        trans:"모든 벽에도 문이 있다.",
    },
    {
        quote:"Nothing can be instead of you.",
        trans:"어떤 것이라도 너를 대신할 수는 없어.",
    },
    {
        quote:"Seize the day.",
        trans:"오늘을 즐기세요.",
    },
    {
        quote:"You only live once.",
        trans:"인생은 한 번 뿐이에요.",
    },
    {
        quote:"This too shall pass away.",
        trans:"이 또한 지나갈 겁니다.",
    },
    {
        quote:"I'm really glad I metyou.",
        trans:"당신을 만나서 정말 좋았어.",
    },
]

const quote = document.querySelector("#quote p");
const trans = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
trans.innerText = todaysQuote.trans;




