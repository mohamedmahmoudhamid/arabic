const mobile= document.getElementById("mobile-menu");
const navItems=document.querySelector(".nav-items")
const navLinks=document.querySelectorAll(".nav-link");
mobile.addEventListener('click', ()=> {
navItems.classList.toggle("active")
    
})
navLinks.forEach((navLink)=>{
navLink.addEventListener("click",()=>{
navItems.classList.toggle("active");
});
});





// عناصر DOM
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

// التحقق من التفضيل المحفوظ
const currentTheme = localStorage.getItem('theme');
if (currentTheme) {
  body.classList.add(currentTheme);
  if (currentTheme === 'dark-mode') {
    themeToggle.checked = true;
  }
}

// حدث التبديل
themeToggle.addEventListener('change', () => {
  if (themeToggle.checked) {
    body.classList.add('dark-mode');
    localStorage.setItem('theme', 'dark-mode');
  } else {
    body.classList.remove('dark-mode');
    localStorage.setItem('theme', 'light-mode');
  }
});












// up buttom
window.onscroll = function() {
  scrollFunction();
};

function scrollFunction() {
  const upButton = document.getElementById("up");
  if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
    upButton.style.display = "block";
  } else {
    upButton.style.display = "none";
  }
}

document.getElementById("up").addEventListener("click", function() {
  // الصعود بسلسة
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
  

});


// انميشن الحركه 
  AOS.init({
    duration: 1000, // مدة الأنيميشن (بالمللي ثانية)
    easing: 'ease-in-out', // نوع الحركة
    once: true // هل يتكرر أم لا
  });