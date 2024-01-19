// Function to handle button click for a specific card
const handleButtonClick = (e) => {
    const targetSection = e.target.getAttribute("data-section");
    const card = e.target.closest(".card"); 
  
    if (!card) return; 
  
    const sections = card.querySelectorAll(".card-section");
    const buttons = card.querySelectorAll(".card-buttons button");
  
   
    targetSection !== "#about"
      ? card.classList.add("is-active")
      : card.classList.remove("is-active");
  
    
    card.setAttribute("data-state", targetSection);
  
   
    sections.forEach((s) => s.classList.remove("is-active"));
    buttons.forEach((b) => b.classList.remove("is-active"));
  
  
    e.target.classList.add("is-active");
    const section = card.querySelector(targetSection);
    if (section) {
      section.classList.add("is-active");
    }
  };
  
  
  const setupCard = (card) => {
    const buttons = card.querySelectorAll(".card-buttons button");
    buttons.forEach((btn) => {
      btn.addEventListener("click", handleButtonClick);
    });
  };
  
  
  const cards= document.querySelectorAll(".card");
  
  
  cards.forEach((card) => {
    setupCard(card);
  });
  
  
  // Function to shuffle 