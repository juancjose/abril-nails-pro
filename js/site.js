// Interacciones compartidas: header, menú móvil, reveal y año. Respeta prefers-reduced-motion.
(()=>{const d=document,h=d.querySelector('.hdr'),b=d.querySelector('.burger'),n=d.getElementById('nav');
const onS=()=>h&&h.classList.toggle('scrolled',scrollY>24);addEventListener('scroll',onS,{passive:true});onS();
if(b&&n){b.addEventListener('click',()=>{const o=b.getAttribute('aria-expanded')==='true';b.setAttribute('aria-expanded',!o);d.body.classList.toggle('menu-open',!o)});
n.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{b.setAttribute('aria-expanded','false');d.body.classList.remove('menu-open')}));
d.addEventListener('keydown',e=>{if(e.key==='Escape'&&d.body.classList.contains('menu-open')){b.click();b.focus()}})}
const r=d.querySelectorAll('.rv');if(!('IntersectionObserver' in window)||matchMedia('(prefers-reduced-motion: reduce)').matches){r.forEach(e=>e.classList.add('in'))}
else{const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}}),{rootMargin:'0px 0px -8% 0px'});r.forEach(e=>io.observe(e))}
d.querySelectorAll('[data-year]').forEach(e=>e.textContent=new Date().getFullYear());})();

(()=>{const WA='5491156972933',a=document.getElementById('book'),sel=[...document.querySelectorAll('.svc input')],out=document.getElementById('picked');
const up=()=>{const p=sel.filter(i=>i.checked).map(i=>i.value);out.textContent=p.length?p.join(' + '):'Ningún servicio elegido';
a.href='https://wa.me/'+WA+'?text='+encodeURIComponent('Hola Abril! Quiero sacar turno'+(p.length?' para: '+p.join(', '):'')+'. ¿Qué días tenés disponibles?')};sel.forEach(i=>i.addEventListener('change',up));up();
// brillo que sigue al puntero
document.querySelectorAll('.svc').forEach(c=>c.addEventListener('pointermove',e=>{const r=c.getBoundingClientRect();c.style.setProperty('--x',(e.clientX-r.left)+'px');c.style.setProperty('--y',(e.clientY-r.top)+'px')}));})();
