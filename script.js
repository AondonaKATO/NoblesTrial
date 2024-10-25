
//Share as an Image
const form = document.getElementById('personality-form');
const resultDiv = document.getElementById('result');
const downloadBtn = document.getElementById('download-btn');

const personalityTypes = {
    'AAAA': {type: 'Logical Leader', description: 'You are a logical and analytical person who values organization and planning. Very responsible, strong and aware of the world around.'},
    'AAAB': {type: 'Charismatic Leader', description: 'You are a charismatic and confident person who inspires others with your passion and creativity. You make things happen.'},
    'AABA': {type: 'Strategic Leader', description: 'You are a strategic thinker who balances logic and creativity to achieve your goals.'},
    'AABB': {type: 'Innovative Leader', description: 'You are an innovative person who thinks outside the box. You are optimistic, generous, warm and fun to be with. Can be annoying sometimes.'},
    'ABAA': {type: 'Dynamic Entrepreneur', description: 'You are a dynamic entreprenuer who takes calculated risks.'},
    'ABAB': {type: 'Creative Visionary', description: 'You are a creative visionary who brings ideas to life. Very enthusiatic and open to new ideas; comes up with own ideas too.'},
    'ABBA': {type: 'Collaborative Person', description: 'You are a creative leader who values teamwork and can be aggressive in helpin others do well.'},
    'ABBB': {type: 'Adaptable Explorer', description: 'You are an adaptable explorer who thrives in a new environment. You understand other people and see life as an adventure.'},
    'BAAA': {type: 'Inspirational Mentor', description: 'You are an inspirational mentor who guides others. You are practical, reliable and decisive in practical things.'},
    'BAAB': {type: 'Strategic Partner', description: 'You are a strategic partner who builds strong relationships.'},
    'BABA': {type: 'Loyalist', description: 'You are a loyal person. You love to be of service to others.'},
    'BABB': {type: 'Creative Catalyst', description: 'You are a creative catalyst who sparks new ideas. Uses the senses a lot.'},
    'BBAA': {type: 'Empathetic Coach', description: 'You are an empathetic coach who supports personal growth. You are also self-confident adn sensible. You find it easy to make decisions'},
    'BBAB': {type: 'Innovative Designer', description: 'You are one who thinks the world has understood, you easily see when things are right.'},
    'BBBA': {type: 'Strategist', description: 'You love mysteries. You can work hard and also enjoy helping others, especially close friends.'},
    'BBBB': {type: 'Artistic Free Spirit', description: 'You are caring, calm and pleasant. You have a strong sense of honour.'},
};


//Print Result
form.addEventListener('submit', (e) => {
    e.preventDefault();
    const q1 = document.querySelector('input[name="q1"]:checked').value;
    const q2 = document.querySelector('input[name="q2"]:checked').value;
    const q3 = document.querySelector('input[name="q3"]:checked').value;
    const q4 = document.querySelector('input[name="q4"]:checked').value;

    const personalityId = q1 + q2 + q3 + q4;
    const personality = personalityTypes[personalityId];

    resultDiv.innerHTML = `
    <h2>Your Personality Type:</h2>
    <p>${personality.type}</p>
    <p>${personality.description}</p>
    `;
    
});





/*******************************************
-------------------------------------------
|                                          |
|                                          |
|       Written By                         |
|           Thy Nobles                     |
|               Founder                    |
|                   Cybertron Technologies |
|    22nd Oct, 2024                        |
|        To   25th Oct. 2024               |
|                                          |
|                                          |
|                                          |
-------------------------------------------
*******************************************/


//Navigation
/*** Get elements
const menuToggle = document.getElementById('mobile-menu');
const nav = document.querySelector('.nav');

// Toggle menu on click
menuToggle.addEventListener('click', () => {
    nav.classList.toggle('active');
});
***/

const menuToggle = document.getElementById('mobile-menu');
const nav = document.querySelector('.nav');

// Toggle menu on click
menuToggle.addEventListener('click', () => {
    nav.classList.toggle('active');
});

// Close the menu when clicking on a link
nav.addEventListener('click', (event) => {
    if (event.target.tagName === 'A') {
        nav.classList.remove('active');
    }
});

// Close the menu when clicking outside of it
document.addEventListener('click', (event) => {
    // Check if the click is outside the menu and the toggle button
    if (!nav.contains(event.target) && !menuToggle.contains(event.target)) {
        nav.classList.remove('active');
    }
});


