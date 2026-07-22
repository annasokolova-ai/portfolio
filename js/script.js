const header=document.getElementById('header');
    const menuBtn=document.getElementById('menuBtn');
    const navLinks=document.getElementById('navLinks');
    window.addEventListener('scroll',()=>header.classList.toggle('scrolled',window.scrollY>20));
    menuBtn.addEventListener('click',()=>{const open=navLinks.classList.toggle('open');menuBtn.setAttribute('aria-expanded',String(open));});
    navLinks.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{navLinks.classList.remove('open');menuBtn.setAttribute('aria-expanded','false');}));
    const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('visible');observer.unobserve(entry.target);}}),{threshold:.12});
    document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));
    document.getElementById('year').textContent=new Date().getFullYear();