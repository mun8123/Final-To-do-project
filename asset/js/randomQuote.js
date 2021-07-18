const quotes = [
    {
        quote: "내 기분은 내가 정해 오늘은 행복으로 할래",
        author: "이상한 나라의 앨리스"
    },
    {
        quote: "안전지대를 벗어나 모험을 해봐. 그에 대한 보상은 분명 가치 있을 거야",
        author: "라푼젤"
    },
    {
        quote: "넌 네가 믿는 것보다 더 용감하고, 보기보다 강하고, 네 생각보다 훨씬 똑똑해",
        author: "곰돌이 푸"
    },
    {
        quote: "가끔은 가장 옳은 길이 가장 쉬운 길이 아닐 때도 있지",
        author: "포카혼타스"
    },
    {
        quote: "사랑은 누국가를 너보다 먼저 두는 거야",
        author: "겨울왕국"
    },
    {
        quote: "네가 간절히 원한다면 할 수 있어. 하지만 넌 하고 또 해야해. 그럼 넌 마침내 할 수 있을거야",
        author: "인어공주"
    },
    {
        quote: "세상을 햇살로 가득 채울 수 있는 사람은 오직 너뿐이야",
        author: "백설공주"
    },
    {
        quote: "누구를 사랑하고자 한다면 너 자신을 먼저 사랑하라",
        author: "미녀와 야수"
    },
    {
        quote: "누구나 무엇이든 될 수 있으니까 그 누구도 내 꿈에 대해서 이러쿵저러쿵 못해",
        author: "주토피아"
    }
]

const quote = document.querySelector("#quotes");
const selectedQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = `${selectedQuote.quote} - ${selectedQuote.author}`;
