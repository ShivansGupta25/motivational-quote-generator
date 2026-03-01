const motivationalQuotes = [
  { text: "When something is important enough, you do it even if the odds are not in your favor.", author: "Elon Musk" },
  { text: "Your most unhappy customers are your greatest source of learning.", author: "Bill Gates" },
  { text: "It's fine to celebrate success, but it is more important to heed the lessons of failure.", author: "Bill Gates" },
  { text: "If you really look closely, most overnight successes took a long time.", author: "Steve Jobs" },
  { text: "Stay hungry, stay foolish.", author: "Steve Jobs" },
  { text: "Chase the vision, not the money; the money will end up following you.", author: "Tony Hsieh" },
  { text: "Risk more than others think is safe. Dream more than others think is practical.", author: "Howard Schultz" },
  { text: "I knew that if I failed I wouldn't regret that, but I knew the one thing I might regret is not trying.", author: "Jeff Bezos" },
  { text: "Move fast and break things. Unless you are breaking stuff, you are not moving fast enough.", author: "Mark Zuckerberg" },
  { text: "It's not about ideas. It's about making ideas happen.", author: "Scott Belsky" },
  { text: "I don't believe in taking right decisions. I take decisions and then make them right.", author: "Ratan Tata" },
  { text: "Success is not about the destination, it's about the journey.", author: "Narendra Modi" },
  { text: "Focus on being productive instead of busy.", author: "Tim Ferriss" },
  { text: "If you don't build your dream, someone else will hire you to help build theirs.", author: "Dhirubhai Ambani" },
  { text: "Confidence and hard work is the best medicine to kill the disease called failure.", author: "A.P.J. Abdul Kalam" },
  { text: "Entrepreneurship is about solving problems that others are too afraid to tackle.", author: "Aman Gupta" },
  { text: "Build something that 100 people love, not something 1 million people kind of like.", author: "Brian Chesky" },
  { text: "Make every detail perfect and limit the number of details to perfect.", author: "Jack Dorsey" },
  { text: "Don't be serious, be sincere.", author: "Chetan Bhagat" },
  { text: "The only strategy that is guaranteed to fail is not taking risks.", author: "Mark Zuckerberg" }
]

const button = document.querySelector("button");
const quote = document.querySelector("h1");
const author = document.querySelector(".author");
const card = document.querySelector(".card");

button.addEventListener("click", () => {
  // Add fade-out animation
  card.classList.add("fade-out");

  setTimeout(() => {
    const index = Math.floor(Math.random() * motivationalQuotes.length);
    quote.textContent = `"${motivationalQuotes[index].text}"`;
    author.textContent = `— ${motivationalQuotes[index].author}`;

    // Swap to fade-in
    card.classList.remove("fade-out");
    card.classList.add("fade-in");

    setTimeout(() => {
      card.classList.remove("fade-in");
    }, 500);
  }, 300);
});