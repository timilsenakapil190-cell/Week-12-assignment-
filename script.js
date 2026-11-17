// ==========================================
// PREVIOUS WEEKS: Greeting & Dark Mode
// ==========================================
const greetingElement = document.getElementById('greeting');
const currentHour = new Date().getHours();

if (currentHour < 12) {
  greetingElement.textContent = 'Good Morning! Welcome to My Portfolio';
} else if (currentHour < 18) {
  greetingElement.textContent = 'Good Afternoon! Welcome to My Portfolio';
} else {
  greetingElement.textContent = 'Good Evening! Welcome to My Portfolio';
}

const darkModeBtn = document.getElementById('dark-mode-toggle');
darkModeBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
});

// ==========================================
// WEEK 12 STEP 1: Hobby/Skill List Rendering
// ==========================================
const hobbies = ['Photography', 'Skiing', 'Piano', 'Cooking'];
const listContainer = document.getElementById('hobby-list');
const ul = document.createElement('ul');

for (let i = 0; i < hobbies.length; i++) {
  const li = document.createElement('li');
  li.textContent = hobbies[i];
  ul.appendChild(li);
}

listContainer.appendChild(ul);

// ==========================================
// WEEK 12 STEP 2: Hobby Gallery (Extension)
// ==========================================
const galleryImages = [
  'https://picsum.photos/id/1018/500/300',
  'https://picsum.photos/id/1015/500/300',
  'https://picsum.photos/id/1039/500/300',
  'https://picsum.photos/id/1043/500/300'
];

let currentIndex = 0;
const galleryImgElement = document.getElementById('gallery-img');
const nextPhotoBtn = document.getElementById('next-photo-btn');

nextPhotoBtn.addEventListener('click', () => {
  currentIndex++;

  // Crucial Step: Reset index to 0 when reaching the end of the array
  if (currentIndex >= galleryImages.length) {
    currentIndex = 0;
  }

  galleryImgElement.src = galleryImages[currentIndex];
});
