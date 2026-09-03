(function(){
  const cfg = window.LAZO_CONFIG || {};
  const number = String(cfg.whatsappNumber || '').replace(/\D/g,'');
  const isConfigured = number.length >= 11 && !number.includes('XXXX');
  const buildWA = (msg) => isConfigured ? `https://wa.me/${number}?text=${encodeURIComponent(msg)}` : '#';

  document.querySelectorAll('.service-link').forEach(a => a.href = buildWA(cfg.serviceMessage || 'Hola LAZO. Me interesa solicitar información para un servicio.'));
  document.querySelectorAll('.provider-link').forEach(a => a.href = buildWA(cfg.providerMessage || 'Hola LAZO. Me interesa integrarme al padrón.'));
  document.querySelectorAll('.whatsapp-link').forEach(a => {
    a.target = isConfigured ? '_blank' : '_self';
    a.rel = 'noopener';
    if(!isConfigured){
      a.addEventListener('click', (e)=>{
        e.preventDefault();
        alert('Falta configurar el número de WhatsApp en config.js antes de publicar.');
      });
    }
  });

  const email = cfg.email || 'contacto@tudominio.mx';
  const emailLink = document.getElementById('email-link');
  if(emailLink){ emailLink.textContent=email; emailLink.href=`mailto:${email}`; }
  const city = document.getElementById('city-label'); if(city) city.textContent = cfg.city || 'Zona Metropolitana de Guadalajara';
  const year=document.getElementById('year'); if(year) year.textContent=new Date().getFullYear();

  const menu=document.querySelector('.main-nav'); const toggle=document.querySelector('.menu-toggle');
  if(toggle && menu){
    toggle.addEventListener('click',()=>{const open=menu.classList.toggle('open');toggle.setAttribute('aria-expanded',open?'true':'false');});
    menu.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{menu.classList.remove('open');toggle.setAttribute('aria-expanded','false');}));
  }

  const items=document.querySelectorAll('.reveal');
  if('IntersectionObserver' in window){
    const io=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('visible');io.unobserve(e.target);}}),{threshold:.12});
    items.forEach(el=>io.observe(el));
  } else { items.forEach(el=>el.classList.add('visible')); }
})();
