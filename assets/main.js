const navButtons = document.querySelectorAll('.nav-btn');
const sections = document.querySelectorAll('.view-section');
const sectionMap = new Map();
sections.forEach(sec => sectionMap.set(sec.dataset.section, sec));
const jumpButtons = document.querySelectorAll('.jump-btn');

function showSection(target) {
    sections.forEach(sec => {
        const active = sec.dataset.section === target;
        sec.classList.toggle('active', active);
        sec.classList.remove('fade-in');
        if (active) {
            void sec.offsetWidth; // 触发重绘以便重新播放动画
            sec.classList.add('fade-in');
        }
    });
    navButtons.forEach(btn => {
        btn.classList.toggle('active', btn.dataset.target === target);
    });
}

navButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        const target = btn.dataset.target;
        if (target && sectionMap.has(target)) {
            showSection(target);
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    });
});

jumpButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    const target = btn.dataset.targetSection;
    if (target && sectionMap.has(target)) {
      showSection(target);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  });
});

showSection('brand');

const backtop = document.querySelector('.backtop');
backtop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
window.addEventListener('scroll', () => {
    backtop.style.opacity = window.scrollY > 240 ? 1 : 0.6;
});
