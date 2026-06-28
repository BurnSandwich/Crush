function flyAway() {
    const noBtn = document.getElementById('noBtn');
    
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;
    
    const randomX = Math.floor(Math.random() * (windowWidth - 150));
    const randomY = Math.floor(Math.random() * (windowHeight - 100));
    
    noBtn.style.position = 'fixed';
    noBtn.style.left = randomX + 'px';
    noBtn.style.top = randomY + 'px';
}

function selectYes() {
    const message = document.getElementById('message');
    const buttonsContainer = document.querySelector('.buttons');
    const h1 = document.querySelector('h1');
    
    h1.innerHTML = "Thank you! 🥰";
    message.innerHTML = "Hehe, glad you said yes. Let's focus on our studies and careers, and let the time answer the rest. Semangat study tau! 📚💪";
    
    buttonsContainer.style.display = 'none';
}