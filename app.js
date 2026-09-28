const events = {
  dale: {
    id: 'dale', artist: "Dale Q’ Va", slug: 'dale-q-va', dateShort: '03', month: 'OCT',
    date: 'Sábado 3 de octubre · 23:59', place: 'La Casona · San Antonio, FME',
    tag: 'Anticipadas disponibles', theme: '', photo:'assets/dale-q-va.jpg', credit:'Foto: El Doce', description: 'Una noche a puro cuarteto para cantar, bailar y vivir todos sus éxitos en el templo de La Casona.',
    sectors: [
      { id:'general', name:'General · 1ª tanda', note:'Acceso a pista general', price:15000, left:420 },
      { id:'preferencial', name:'Preferencial', note:'Sector próximo al escenario', price:25000, left:96 },
      { id:'vip', name:'VIP + mesa', note:'Ingreso preferencial y sector exclusivo', price:40000, left:24 }
    ]
  },
  ulises: {
    id:'ulises', artist:'Ulises Bueno', slug:'ulises-bueno', dateShort:'17', month:'OCT',
    date:'Sábado 17 de octubre · 23:59', place:'La Casona · San Antonio, FME',
    tag:'Próximamente', theme:'ulises', photo:'assets/ulises-bueno.jpg', credit:'Foto: La Popu / Cadena 3', description:'El Flaco vuelve a La Casona para una noche inolvidable de emoción, clásicos y cuarteto del bueno.',
    sectors: [
      { id:'general', name:'General · Preventa', note:'Acceso a pista general', price:20000, left:650 },
      { id:'preferencial', name:'Preferencial', note:'Sector próximo al escenario', price:32000, left:120 },
      { id:'vip', name:'VIP + mesa', note:'Ingreso preferencial y sector exclusivo', price:48000, left:30 }
    ]
  },
  retro: {
    id:'retro', artist:'Noche Retro', slug:'noche-retro', dateShort:'07', month:'NOV',
    date:'Sábado 7 de noviembre · 23:59', place:'La Casona · San Antonio, FME',
    tag:'Preventa', theme:'retro', photo:'assets/social-crowd-v2.png', credit:'Producción visual La Casona', description:'Una edición especial con los clásicos que hicieron historia en nuestra pista.',
    sectors:[{id:'general',name:'General · Preventa',note:'Acceso a pista general',price:12000,left:300},{id:'preferencial',name:'Preferencial',note:'Ingreso rápido',price:20000,left:80},{id:'vip',name:'VIP + mesa',note:'Sector exclusivo',price:35000,left:20}]
  }
};

const posts = [
  {id:'dale-llega',category:'PRÓXIMO SHOW',time:'Hace 12 min',title:'Dale Q’ Va llega a La Casona: todo lo que tenés que saber',excerpt:'La banda que viene arrasando confirma una noche a puro cuarteto. Mirá horarios, sectores y cómo conseguir tu anticipada.',image:'assets/dale-q-va.jpg',credit:'Foto: El Doce',eventId:'dale',likes:1284,body:['La Casona vuelve a encender su escenario con una de las propuestas más convocantes del cuarteto actual. Dale Q’ Va será protagonista de una noche pensada para cantar, bailar y reencontrarse con los grandes éxitos de la banda.','Las puertas abrirán con anticipación para agilizar el ingreso. Habrá sectores General, Preferencial y VIP, cada uno con su acceso digital mediante código QR.','Las entradas anticipadas ya pueden reservarse desde este mismo sitio. La fecha, los valores y la disponibilidad que aparecen en este prototipo son demostrativos y deberán confirmarse antes de la publicación oficial.']},
  {id:'ulises-vuelve',category:'ANTICIPO',time:'Hace 1 h',title:'Ulises Bueno vuelve al templo: se prepara una noche histórica',excerpt:'El Flaco regresa a La Casona. La preventa y los detalles del show estarán disponibles muy pronto.',image:'assets/ulises-bueno.jpg',credit:'Foto: La Popu / Cadena 3',eventId:'ulises',likes:962,body:['Una de las voces más queridas del cuarteto prepara su regreso a Catamarca. Ulises Bueno volverá a encontrarse con el público de La Casona en una fecha que promete emoción, clásicos y una producción especial.','El anuncio abre la etapa de preventa. Quienes sigan el portal podrán enterarse primero de la habilitación de cada tanda y de las novedades de acceso.','La experiencia incluirá ingreso digital, sectores diferenciados y la posibilidad de cargar saldo para consumir en las barras sin usar efectivo.']},
  {id:'nueva-experiencia',category:'LA CASONA',time:'Ayer',title:'Una nueva forma de vivir la noche: entradas, saldo y pedidos desde el celular',excerpt:'El nuevo ecosistema digital reúne cartelera, noticias, radio en vivo, anticipadas y una billetera propia.',image:'assets/logo-la-casona.png',credit:'Archivo La Casona',eventId:null,likes:731,body:['La Casona da un nuevo paso en sus 40 años de historia con una experiencia digital integrada. El objetivo es que cada persona pueda resolver desde el celular todo lo necesario antes y durante la noche.','El sistema reúne la compra de entradas, una billetera de consumo, pedidos para retirar en distintas barras y un QR personal. También suma noticias, comentarios de la comunidad y la transmisión de La Casona FM.','En esta primera demostración los pagos y avisos funcionan de forma simulada. La versión productiva incorporará validaciones, seguridad, conciliación de transferencias y las integraciones definitivas.']}
];
const videos = [
  {id:'MfNEzyTHRr0',title:'Ulises Bueno · La Casona',tag:'ULISES BUENO'},
  {id:'0meJ-FH7HV8',title:'Damián Córdoba · Cinco minutos',tag:'ARCHIVO'},
  {id:'D3OQOsxFEL0',title:'La LBC & Euge Quevedo',tag:'EN VIVO'},
  {id:'casUn93YB2I',title:'Ulises Bueno · Hielo en mi whisky',tag:'GRANDES NOCHES'},
  {id:'8isWhz6J3F4',title:'La Banda de Carlitos & Eugenia Quevedo',tag:'LA CASONA'}
];

const bars = [{id:'central',name:'Barra Central'},{id:'patio',name:'Barra Patio'},{id:'vip',name:'Barra VIP'}];
const products = [
  {id:'fernet',name:'Fernet + Coca',category:'Tragos',price:7500,icon:'🥃',stock:86},
  {id:'gin',name:'Gin Tonic',category:'Tragos',price:8000,icon:'🍸',stock:54},
  {id:'vodka',name:'Vodka Energy',category:'Tragos',price:8500,icon:'⚡',stock:48},
  {id:'cerveza',name:'Cerveza',category:'Cervezas',price:5000,icon:'🍺',stock:120},
  {id:'agua',name:'Agua mineral',category:'Sin alcohol',price:2500,icon:'💧',stock:140},
  {id:'gaseosa',name:'Gaseosa',category:'Sin alcohol',price:3000,icon:'🥤',stock:98}
];
const state = { route:'home', event:'dale', post:'dale-llega', sector:'general', qty:1, checkout:false, posBar:'central', cart:{}, posScanned:false };
const money = n => new Intl.NumberFormat('es-AR',{style:'currency',currency:'ARS',maximumFractionDigits:0}).format(n);
const uiIcon=name=>({ticket:'<svg viewBox="0 0 24 24"><path d="M3 9.5 9.5 3H21v11.5L14.5 21 3 9.5Z"/><circle cx="16.5" cy="7.5" r="1.5"/></svg>',arrow:'<svg viewBox="0 0 24 24"><path d="M5 12h14m-5-5 5 5-5 5"/></svg>',volume:'<svg viewBox="0 0 24 24"><path d="M5 9v6h4l5 4V5L9 9H5Zm12 0c1.4 1.7 1.4 4.3 0 6m2.5-9c3.4 3.4 3.4 8.6 0 12"/></svg>',play:'<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="9"/><path d="m10 8 6 4-6 4V8Z"/></svg>',calendar:'<svg viewBox="0 0 24 24"><rect x="4" y="5" width="16" height="16" rx="2"/><path d="M8 3v4m8-4v4M4 10h16"/></svg>'}[name]||'');
const app = document.querySelector('#app');
const modalRoot = document.querySelector('#modal-root');

function getWallet(){
  const saved=JSON.parse(localStorage.getItem('lacasona-wallet')||'null');
  if(saved)return saved;
  const initial={name:'Carlo Demo',balance:45000,transactions:[{id:'demo-1',type:'topup',label:'Carga inicial demostrativa',amount:45000,date:'Hoy · 20:12'}],topups:[],orders:[]};
  localStorage.setItem('lacasona-wallet',JSON.stringify(initial));return initial;
}
function saveWallet(w){localStorage.setItem('lacasona-wallet',JSON.stringify(w));updateHeaderBalance()}
function updateHeaderBalance(){const w=getWallet();document.querySelectorAll('[data-header-balance]').forEach(x=>x.textContent=new Intl.NumberFormat('es-AR').format(w.balance))}
function cartTotal(){return Object.entries(state.cart).reduce((sum,[id,qty])=>sum+(products.find(p=>p.id===id)?.price||0)*qty,0)}
function escapeHTML(value){return String(value).replace(/[&<>'"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','"':'&quot;'}[c]))}
function getComments(postId){const all=JSON.parse(localStorage.getItem('lacasona-comments')||'{}');return all[postId]||[]}
function saveComment(postId,text){const all=JSON.parse(localStorage.getItem('lacasona-comments')||'{}');(all[postId]||(all[postId]=[])).push({text:escapeHTML(text),date:'Ahora'});localStorage.setItem('lacasona-comments',JSON.stringify(all))}

function heroVisual(event, detail=false){
  return `<div class="${detail ? 'detail-poster' : 'poster-card'} ${event.theme}">
    <img class="artist-photo" src="${event.photo}" alt="${event.artist} en vivo" />
    <div class="beam one"></div><div class="beam two"></div><div class="poster-stage"></div>
    <div class="poster-content"><small>LA CASONA PRESENTA</small><strong>${event.artist}</strong><em>${event.date} · CATAMARCA</em></div>
    <span class="photo-credit">${event.credit}</span>
  </div>`;
}

function feedPost(post,featured=false){
  const comments=getComments(post.id);
  return `<article class="social-post ${featured?'featured-post':''}"><header><img src="assets/logo-la-casona.png" alt=""><div><b>lacasonaoficial</b><span>${post.category} · ${post.time}</span></div><button aria-label="Más opciones">•••</button></header><button class="post-media" data-news="${post.id}" aria-label="Abrir noticia ${post.title}"><img src="${post.image}" alt="${post.title}"><span class="post-category">${post.category}</span><div class="post-overlay"><h2>${post.title}</h2><span>Leer noticia completa →</span></div><small>${post.credit}</small></button><div class="post-actions"><button data-like="${post.id}" aria-label="Me gusta">♡</button><button data-focus-comment="${post.id}" aria-label="Comentar">○</button><button data-news="${post.id}" aria-label="Compartir">⌁</button><button class="save-post" aria-label="Guardar">◇</button></div><div class="post-copy"><b>${new Intl.NumberFormat('es-AR').format(post.likes+comments.length)} Me gusta</b><p><strong>lacasonaoficial</strong> ${post.excerpt} <button data-news="${post.id}">más</button></p>${comments.slice(-2).map(c=>`<p class="comment-preview"><strong>Anónimo</strong> ${c.text}</p>`).join('')}<button class="view-comments" data-news="${post.id}">Ver los ${comments.length||0} comentarios</button></div><form class="quick-comment" data-comment-form="${post.id}"><input name="comment" id="comment-${post.id}" maxlength="180" placeholder="Agregá un comentario anónimo…" required><button>Publicar</button></form></article>`
}

function radioPost(){return `<article class="social-post radio-post" id="radio"><header><img src="assets/logo-la-casona.png" alt=""><div><b>lacasonafm</b><span>TRANSMISIÓN OFICIAL · EN VIVO</span></div><span class="radio-live-dot">● LIVE</span></header><div class="radio-frame"><iframe id="kick-player" src="https://player.kick.com/lacasonafm?autoplay=true&muted=false" title="La Casona FM en Kick" frameborder="0" scrolling="no" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen="true"></iframe></div><div class="radio-post-copy"><div><b>La noche también se escucha</b><p>Música, noticias y transmisión en vivo desde nuestro canal oficial.</p></div><button data-kick-sound><span>🔊</span><b>ACTIVAR SONIDO</b><small>El navegador puede iniciar en silencio</small></button></div><a class="radio-direct" href="https://kick.com/lacasonafm" target="_blank" rel="noopener">Abrir directo en Kick ↗</a></article>`}

function momentsPost(){return `<article class="moments-post"><header><div><span>● AHORA EN LA CASONA</span><h2>La noche la hacés vos</h2></div><button data-story="4">Ver todos</button></header><div class="moment-grid"><button data-story="4" class="moment m1"><i>▶</i><b>La previa</b><small>124 momentos</small></button><button data-story="4" class="moment m2"><i>♪</i><b>En la pista</b><small>En vivo</small></button><button data-story="1" class="moment m3"><i>40</i><b>Tu historia</b><small>Subí tu recuerdo</small></button></div></article>`}

function drinksPost(){return `<article class="drinks-post"><div><span>BARRAS · SIN FILAS</span><h2>Pedí tu trago<br>desde el celular</h2><p>Elegí la barra, pagá con tu saldo y recibí un código para retirar.</p><button data-route="order">Ver carta y pedir →</button></div><div class="drink-stack"><i>🍹</i><i>🥃</i><i>🍺</i><b>3 BARRAS</b><small>Central · Patio · VIP</small></div></article>`}

function pollPost(){return `<article class="poll-post"><small>ENCUESTA DE LA COMUNIDAD</small><h2>¿Qué tema no puede faltar<br>en la próxima noche?</h2><div><button data-poll="1"><span>1</span>Un clásico de Ulises <i>46%</i></button><button data-poll="2"><span>2</span>Lo nuevo de Dale Q’ Va <i>38%</i></button><button data-poll="3"><span>3</span>Cuarteto de los 2000 <i>16%</i></button></div><p>1.248 votos · Votá de forma anónima</p></article>`}

function videoPoster(v,label=''){return `<button class="video-poster" data-video="${v.id}" data-video-title="${v.title}"><img src="https://i.ytimg.com/vi/${v.id}/hqdefault.jpg" alt="${v.title}" loading="lazy"><span class="video-play">${uiIcon('play')}</span>${label?`<small>${label}</small>`:''}</button>`}
function videoReels(){return `<section class="video-reels"><header><div><small>VIDEOS · LA CASONA</small><h2>Reviví la noche</h2></div><a href="https://www.youtube.com/results?search_query=la+casona+catamarca" target="_blank" rel="noopener">Ver canal y más videos ↗</a></header><div class="video-reel-row">${videos.map((v,i)=>`<article class="video-reel"><div class="video-embed">${videoPoster(v,`${i+1}/5`)}</div><div><small>${v.tag}</small><b>${v.title}</b><a href="https://www.youtube.com/watch?v=${v.id}" target="_blank" rel="noopener">Abrir en YouTube ↗</a></div></article>`).join('')}</div><p>Deslizá para ver más →</p></section>`}

const storyItems=[
  {label:'Eventos',image:'assets/hero-casona-v2.png',target:'eventos'},
  {label:'Artistas',image:'assets/ulises-bueno.jpg',target:'artistas'},
  {label:'Backstage',image:'assets/social-crowd-v2.png',target:'reels'},
  {label:'VIP',image:'assets/venue-vip-v2.png',target:'lugar'},
  {label:'Novedades',image:'assets/dale-q-va.jpg',target:'hoy'}
];
const serviceCards=[
  {type:'VENUE_RENTAL',icon:'⌂',title:'Alquilá La Casona',text:'El lugar perfecto para tu evento. Capacidad, servicios y un equipo de primera.',cta:'CONSULTAR'},
  {type:'ARTIST_BOOKING',icon:'♬',title:'Contratá un artista',text:'Te conectamos con artistas, producción integral y asesoramiento.',cta:'SOLICITAR'},
  {type:'EVENT_PRODUCTION',icon:'⚙',title:'Producimos tu evento',text:'Sonido, luces, escenario, pantallas, logística, ticketing y difusión.',cta:'QUIERO PRODUCIR'}
];
function getLeads(){return JSON.parse(localStorage.getItem('lacasona-leads')||'[]')}
function saveLead(data){const leads=getLeads();leads.push({id:'LC-'+Date.now().toString(36).toUpperCase(),status:'NEW',createdAt:new Date().toISOString(),...data});localStorage.setItem('lacasona-leads',JSON.stringify(leads))}
function eventV2(e){const from=Math.min(...e.sectors.map(s=>s.price));return `<article class="v2-event-card"><button class="v2-event-image" data-detail="${e.id}"><img src="${e.photo}" alt="${e.artist}"><span class="v2-date"><small>${e.month}</small><b>${e.dateShort}</b></span><span class="v2-status ${e.tag.includes('disponibles')?'hot':''}">${e.tag}</span></button><div><small>${e.place}</small><h3>${e.artist}</h3><p>Desde ${money(from)}</p><button class="premium-button" data-event="${e.id}">${uiIcon('ticket')}<span>COMPRAR ENTRADAS</span>${uiIcon('arrow')}</button></div></article>`}
function homeV2(){
  const evs=Object.values(events);
  return `<div class="home-v2">
  <section class="v2-hero authentic-hero"><img src="assets/la-casona-aereo-original.jpg" alt="La Casona llena vista desde el aire"><div class="v2-hero-shade"></div><div class="v2-hero-copy"><img class="v2-hero-logo v2-hero-brand" src="assets/logo-header-transparent-v2.png" alt="La Casona"><p class="v2-anniversary"><strong>40</strong> <em>años</em></p><h1>HACIENDO HISTORIA</h1><p class="v2-music-line">LA MÚSICA NOS UNE</p><div><button class="v2-gold premium-button" data-scroll="eventos"><span>VER PRÓXIMOS EVENTOS</span>${uiIcon('arrow')}</button><button class="v2-outline premium-button outline" data-event="dale">${uiIcon('ticket')}<span>COMPRAR ENTRADAS</span></button></div></div></section>
  <section class="v2-section v2-events" id="eventos"><header><div><small>AGENDA</small><h2>Próximos eventos</h2></div><button data-detail="dale">VER TODOS →</button></header><div class="v2-event-row">${evs.map(eventV2).join('')}</div></section>
  <section class="v2-section v2-today" id="hoy"><header><div><small>VIVÍ LA EXPERIENCIA EN TIEMPO REAL</small><h2>La Casona hoy</h2></div><a href="https://instagram.com" target="_blank" rel="noopener">◎ @LACASONAOK →</a></header><div class="v2-stories">${storyItems.map(s=>`<button data-scroll="${s.target}"><span><img src="${s.image}" alt=""></span><b>${s.label}</b></button>`).join('')}</div><div class="v2-social-grid"><article class="v2-main-post"><header><img src="assets/logo-la-casona.png" alt=""><div><b>lacasonaok <i>●</i></b><small>Córdoba · Hace 2 h</small></div><span>•••</span></header><button data-news="dale-llega"><img src="assets/social-crowd-v2.png" alt="Público disfrutando La Casona"></button><footer><div><span>♥</span><span>○</span><span>⌁</span><i>◇</i></div><b>2.4 mil Me gusta</b><p><strong>lacasonaok</strong> Una noche más que queda en la historia ✨ <button data-news="dale-llega">ver más</button></p></footer></article><div class="v2-mosaic">${[videos[0],videos[1],videos[2],videos[3]].map((v,i)=>`<article>${videoPoster(v)}<span>${i%2?'♥':'▶'} ${[125,84,62,47][i]} mil</span></article>`).join('')}</div></div>
  <div id="reels">${videoReels()}</div></section>
  <section class="v2-live" id="radio"><div class="v2-live-copy"><span class="live-badge"><i></i> EN VIVO</span><small>LA CASONA FM · KICK</small><h2>La noche también se escucha.</h2><p>El stream oficial se inicia automáticamente con el volumen activo. Si tu navegador bloquea el audio, activalo desde el control destacado.</p><button class="premium-button" data-kick-sound>${uiIcon('volume')}<span>ACTIVAR SONIDO</span>${uiIcon('arrow')}</button><a href="https://kick.com/lacasonafm" target="_blank" rel="noopener">ABRIR EN KICK ↗</a></div><div class="v2-live-player"><iframe id="kick-player" src="https://player.kick.com/lacasonafm?autoplay=true&muted=false&volume=1" title="La Casona FM en vivo por Kick" frameborder="0" scrolling="no" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe><div class="v2-live-corner">${uiIcon('volume')} AUDIO ACTIVO</div></div></section>
  <section class="v2-experience"><div class="v2-experience-copy"><small>LA EXPERIENCIA</small><h2>No es una fecha.<br>Es una noche que queda.</h2><p>Cuatro décadas de música, encuentros y artistas en un lugar que late con vos.</p><button data-scroll="lugar">CONOCÉ EL LUGAR →</button></div><div class="v2-experience-image"><img src="assets/hero-casona-v2.png" alt="El escenario de La Casona"><span>▶ VER AFTERMOVIE</span></div></section>
  <section class="v2-section" id="artistas"><header><div><small>TRAYECTORIA</small><h2>Eventos anteriores</h2></div><span>40 AÑOS DE HISTORIA</span></header><div class="v2-past"><article><img src="assets/ulises-bueno.jpg" alt="Ulises Bueno"><div><small>EN VIVO</small><h3>Ulises Bueno</h3><p>Una noche inolvidable</p></div></article><article><img src="assets/dale-q-va.jpg" alt="Dale Q Va"><div><small>CUARTETO</small><h3>Dale Q' Va</h3><p>El baile que nos une</p></div></article><article><img src="assets/social-crowd-v2.png" alt="La Casona"><div><small>ARCHIVO</small><h3>La Casona</h3><p>Tu historia también está acá</p></div></article></div></section>
  <section class="v2-section v2-services" id="servicios"><header><div><small>SERVICIOS COMERCIALES</small><h2>Hacemos que suceda</h2></div><span>DE LA IDEA A LA NOCHE →</span></header><div>${serviceCards.map(s=>`<article><i>${s.icon}</i><h3>${s.title}</h3><p>${s.text}</p><button data-lead-type="${s.type}">${s.cta} →</button></article>`).join('')}</div></section>
  <section class="v2-section v2-place" id="lugar"><header><div><small>UN ESPACIO ÚNICO</small><h2>El lugar</h2></div><span>CAPACIDAD · PRODUCCIÓN · EXPERIENCIA</span></header><div><article class="stage"><img src="assets/hero-casona-v2.png" alt="Escenario"><b>ESCENARIO</b></article><article><img src="assets/social-crowd-v2.png" alt="Pista"><b>PISTA</b></article><article><img src="assets/venue-vip-v2.png" alt="VIP"><b>VIP</b></article><article><img src="assets/venue-bar-v2.png" alt="Barras"><b>BARRAS</b></article></div><p>San Antonio, Fray Mamerto Esquiú · Accesos diferenciados · 3 barras · Sector VIP · Producción técnica integral</p></section>
  <section class="v2-section v2-contact" id="contacto"><header><div><small>HABLEMOS DE GRANDES COSAS</small><h2>Contacto comercial</h2></div></header><div>${[['ARTIST_BOOKING','Contrataciones','Artistas, shows y producciones'],['VIP','Mesas / VIP','Reservas y espacios exclusivos'],['SPONSOR','Sponsors / marcas','Activaciones y experiencias'],['EVENT_PRODUCTION','Producción','Hacemos realidad tu evento']].map(x=>`<button data-lead-type="${x[0]}"><span>◇</span><b>${x[1]}</b><small>${x[2]}</small><i>→</i></button>`).join('')}</div></section>
  <section class="v2-final"><img src="assets/logo-la-casona.png" alt="La Casona"><h2>Tu próxima historia empieza acá.</h2><div><button data-event="dale">COMPRAR ENTRADAS</button><button data-lead-type="GENERAL">CONTACTANOS</button></div></section>
  </div>${footer()}<button class="floating-tickets" data-event="dale"><span>◇</span> Comprar entradas</button>`;
}

function leadModal(type){const labels={VENUE_RENTAL:'Alquilá La Casona',ARTIST_BOOKING:'Contratá un artista',EVENT_PRODUCTION:'Producimos tu evento',VIP:'Mesas y VIP',SPONSOR:'Sponsors y marcas',GENERAL:'Contacto comercial'};modalRoot.innerHTML=`<div class="modal-backdrop"><div class="modal v2-lead-modal"><div class="modal-head"><div><small>CONSULTA COMERCIAL</small><h3>${labels[type]||labels.GENERAL}</h3></div><button class="close">×</button></div><form id="lead-form" class="form" data-type="${type}"><div class="form-row"><div class="field"><label>Nombre</label><input name="name" required></div><div class="field"><label>Empresa</label><input name="company"></div></div><div class="form-row"><div class="field"><label>WhatsApp</label><input name="phone" required></div><div class="field"><label>Email</label><input type="email" name="email" required></div></div><div class="form-row"><div class="field"><label>Fecha tentativa</label><input type="date" name="date"></div><div class="field"><label>Ciudad / Provincia</label><input name="location"></div></div><div class="field"><label>Contanos tu idea</label><textarea name="message" rows="4" required></textarea></div><button class="cta full">ENVIAR CONSULTA →</button><small class="safe-note">La consulta quedará guardada en el CRM demostrativo.</small></form></div></div>`;bindModal()}

function home(){
  const w=getWallet();
  return `<section class="social-home"><div class="now-ticker"><span><i></i> LA CASONA AHORA</span><b>Próximo baile · Dale Q’ Va · Anticipadas disponibles</b><button data-event="dale">COMPRAR →</button></div><div class="social-stories">${posts.map(p=>`<button data-news="${p.id}"><span><img src="${p.image}" alt=""></span><b>${p.eventId?events[p.eventId].artist:'La Casona'}</b></button>`).join('')}<button data-scroll="radio"><span class="story-live">▶</span><b>En vivo</b></button><button data-route="order"><span class="story-drink">🍹</span><b>Tragos</b></button><button data-route="wallet"><span class="story-wallet">▱</span><b>Mi saldo</b></button></div><div class="feed-intro compact"><div><span>EL PORTAL DE TU NOCHE</span><h1>Noticias, música<br>y comunidad.</h1></div><p>Entrá, mirá qué está pasando y prepará tu próxima salida.</p></div>${videoReels()}<div class="feed-layout"><main class="feed-column" id="eventos">${feedPost(posts[0],true)}${momentsPost()}${drinksPost()}${radioPost()}${feedPost(posts[1])}${pollPost()}${feedPost(posts[2])}</main><aside class="feed-sidebar"><div class="profile-card"><img src="assets/logo-la-casona.png" alt="La Casona"><div><b>La Casona</b><span>@lacasonaoficial · Catamarca</span></div></div><button class="sidebar-wallet" data-route="wallet"><span class="big-wallet-icon"><svg viewBox="0 0 24 24"><path d="M4 6.5A2.5 2.5 0 0 1 6.5 4H18a2 2 0 0 1 2 2v2H7a3 3 0 0 0 0 6h13v2a2 2 0 0 1-2 2H6.5A2.5 2.5 0 0 1 4 15.5v-9Z"/><path d="M7 8h13v6H7a3 3 0 1 1 0-6Z"/></svg></span><span><small>MI BILLETERA</small><b>${money(w.balance)}</b><em>Ver saldo y QR →</em></span></button><div class="agenda-card"><small>PRÓXIMAS FECHAS</small>${Object.values(events).map(e=>`<button data-detail="${e.id}"><span><b>${e.dateShort}</b>${e.month}</span><div><strong>${e.artist}</strong><small>${e.tag}</small></div></button>`).join('')}</div><div class="mini-radio"><span class="live-badge"><i></i> EN VIVO</span><b>La Casona FM</b><p>Música y transmisión desde Kick.</p><a href="https://kick.com/lacasonafm" target="_blank" rel="noopener">Escuchar ahora ↗</a></div></aside></div></section>${footer()}<button class="floating-tickets" data-event="dale"><span>🎟</span> Comprar entradas</button><button class="admin-link" data-route="admin">Vista administración</button>`;
}

function newsArticle(){
  const post=posts.find(p=>p.id===state.post)||posts[0], comments=getComments(post.id);
  return `<section class="news-page"><div class="article-back"><button data-route="home">← Volver al portal de noticias</button></div><article class="news-article"><header><span>${post.category}</span><h1>${post.title}</h1><p>${post.excerpt}</p><div><img src="assets/logo-la-casona.png" alt=""><b>La Casona</b><small>Publicado ${post.time}</small></div></header><figure><img src="${post.image}" alt="${post.title}"><figcaption>${post.credit}</figcaption></figure><div class="article-body">${post.body.map((x,i)=>i===0?`<p class="lead">${x}</p>`:`<p>${x}</p>`).join('')}<div class="article-cta">${post.eventId?`<div><small>VIVÍ ESTA NOCHE</small><b>${events[post.eventId].artist}</b><span>${events[post.eventId].date}</span></div><button class="cta" data-event="${post.eventId}">Comprar anticipada →</button>`:`<div><small>LA CASONA DIGITAL</small><b>Tu saldo y tus consumos</b><span>Todo desde el mismo lugar.</span></div><button class="cta" data-route="wallet">Abrir billetera →</button>`}</div></div></article><section class="article-comments"><div class="comments-head"><div><small>COMUNIDAD</small><h2>Comentarios <span>${comments.length}</span></h2></div><p>Podés participar sin crear una cuenta. No publiques datos personales.</p></div><form class="article-comment-form" data-comment-form="${post.id}"><div class="anonymous-avatar">A</div><textarea name="comment" maxlength="300" placeholder="Comentá de forma anónima…" required></textarea><button>Publicar comentario</button></form><div class="comment-list">${comments.slice().reverse().map(c=>`<article><span class="anonymous-avatar">A</span><div><b>Anónimo <small>· ${c.date}</small></b><p>${c.text}</p><button>Responder</button></div></article>`).join('')||'<div class="no-comments">Sé la primera persona en comentar esta noticia.</div>'}</div></section></section>${footer()}`;
}

function eventCard(e,n){ return `<article class="event-card ${e.theme}" data-detail="${e.id}" style="--event-photo:url('${e.photo}')"><div class="number">${n}</div><span class="photo-credit">${e.credit}</span><div class="event-card-copy"><span class="status ${e.id==='ulises'?'soon':''}">● ${e.tag}</span><h3>${e.artist}</h3><p>${e.date} · ${e.place}</p><div class="card-actions"><button class="mini-btn primary" data-event="${e.id}">${e.id==='ulises'?'Ver preventa':'Comprar'}</button><button class="mini-btn" data-detail="${e.id}">Detalles</button></div></div></article>`; }
function footer(){return `<footer class="footer"><div><strong>LA CASONA</strong><p>San Antonio · Fray Mamerto Esquiú · Catamarca. Sitio demostrativo: no procesa pagos reales.</p></div><div class="footer-links"><button data-story="4">Cómo llegar</button><button data-story="5">Preguntas frecuentes</button><button data-story="6">Términos</button><button data-story="6">Botón de arrepentimiento</button></div></footer>`}

function eventDetail(){
  const e=events[state.event]; const s=e.sectors.find(x=>x.id===state.sector) || e.sectors[0];
  if(state.checkout) return checkout(e,s);
  return `<section class="detail"><button class="back" data-route="home">← Volver a eventos</button><div class="detail-grid">
    ${heroVisual(e,true)}
    <div class="detail-content"><span class="status ${e.id==='ulises'?'soon':''}">● ${e.tag}</span><h1>${e.artist}</h1><p>${e.description}</p>
      <div class="info-list"><div class="info-row"><span>Fecha</span><b>${e.date}</b></div><div class="info-row"><span>Lugar</span><b>${e.place}</b></div><div class="info-row"><span>Ingreso</span><b>Entrada digital QR · Un solo uso</b></div></div>
      <div class="eyebrow">Elegí tu sector</div><div class="ticket-options">${e.sectors.map(x=>`<button class="ticket-option ${x.id===s.id?'selected':''}" data-sector="${x.id}"><span><b>${x.name}</b><small>${x.note} · Quedan ${x.left}</small></span><span class="price">${money(x.price)}</span></button>`).join('')}</div>
      <div class="quantity"><span>Cantidad</span><div class="stepper"><button data-qty="-1">−</button><b>${state.qty}</b><button data-qty="1">＋</button></div></div>
      <div class="total-row"><span>Total estimado<br><small>Incluye cargo demo</small></span><b>${money(s.price*state.qty)}</b></div>
      <button class="cta full" data-checkout>Continuar con la compra →</button><div class="safe-note">🔒 Flujo demostrativo · No se realizará ningún cobro</div>
    </div></div></section>${footer()}`;
}

function checkout(e,s){ const total=s.price*state.qty; return `<section class="detail"><button class="back" data-back-detail>← Cambiar entradas</button><div class="detail-grid">${heroVisual(e,true)}<div class="detail-content">
  <div class="checkout-head"><h2>Finalizá tu compra</h2><span class="status soon">DEMO</span></div><div class="summary"><span><b>${e.artist}</b><small>${state.qty} × ${s.name}<br>${e.date}</small></span><b>${money(total)}</b></div>
  <form class="form" id="checkout-form"><div class="form-row"><div class="field"><label>Nombre</label><input name="name" required placeholder="Tu nombre" /></div><div class="field"><label>Apellido</label><input name="surname" required placeholder="Tu apellido" /></div></div><div class="field"><label>Email donde recibirás la entrada</label><input type="email" name="email" required placeholder="nombre@email.com" /></div><div class="field"><label>WhatsApp</label><input name="phone" required placeholder="383 400 0000" /></div><div class="field"><label>DNI</label><input name="dni" required placeholder="Sin puntos" inputmode="numeric" /></div><button class="cta full" type="submit">Simular pago aprobado · ${money(total)}</button><div class="safe-note">Al continuar aceptás los términos del prototipo. No se envían datos ni se cobra dinero.</div></form>
  </div></div></section>${footer()}` }

function tickets(){
  const t=JSON.parse(localStorage.getItem('lacasona-ticket')||'null');
  if(!t) return `<section class="tickets-page"><div class="eyebrow">Billetera digital</div><h1 class="page-title">Mis entradas</h1><div class="empty"><div class="empty-icon">◇</div><h2>Todavía no tenés entradas</h2><p>Comprá una anticipada demo y aparecerá acá automáticamente.</p><button class="cta" data-event="dale">Ver próximos eventos</button></div></section>${footer()}`;
  return `<section class="tickets-page"><div class="eyebrow">Billetera digital</div><h1 class="page-title">Tu entrada</h1><div class="ticket-pass"><div class="pass-main"><div class="pass-brand"><img src="assets/logo-la-casona.png" alt="" /> LA CASONA · PASE OFICIAL</div><h2>${t.artist}</h2><p>${t.date}<br>${t.place}</p><div class="pass-data"><div><small>Sector</small><b>${t.sector}</b></div><div><small>Titular</small><b>${t.name}</b></div><div><small>Operación</small><b>${t.code}</b></div></div></div><div class="pass-qr"><div class="qr" id="qr"></div><small>QR DEMO · PERSONAL Y DE UN SOLO USO</small></div></div><div class="ticket-actions"><button class="mini-btn" data-share>Compartir evento</button><button class="mini-btn" data-route="home">Volver al inicio</button></div></section>${footer()}`;
}

function walletPage(){
  const w=getWallet(), pending=w.topups.filter(t=>t.status==='pending'), tx=w.transactions.slice().reverse().slice(0,8);
  return `<section class="wallet-page"><div class="wallet-hero"><div><div class="eyebrow">Billetera La Casona · Demo</div><h1>Tu noche,<br>sin efectivo</h1><p>Cargá saldo, pagá con tu QR y retiralo en cualquiera de nuestras barras.</p><div class="wallet-actions"><button class="cta" data-topup>＋ Cargar saldo</button><button class="mini-btn" data-route="order">Pedir tragos</button></div></div><div class="balance-card"><small><span class="balance-wallet-mark">▱</span> SALDO DISPONIBLE</small><b>${money(w.balance)}</b><span>◆ ${w.name}</span><i>LA CASONA</i></div></div>
  <div class="wallet-grid"><section class="wallet-panel qr-panel"><div class="panel-head"><div><small>QR DE CONSUMO</small><h2>Mostralo en la barra</h2></div><span class="rotating-dot">● ACTIVO</span></div><div class="wallet-qr" id="wallet-qr"></div><p>Token dinámico · cambia cada 30 segundos</p><div class="qr-timer"><i id="qr-progress"></i></div></section>
  <section class="wallet-panel"><div class="panel-head"><div><small>MOVIMIENTOS</small><h2>Actividad reciente</h2></div></div><div class="transaction-list">${tx.map(t=>`<div class="transaction"><span class="tx-icon">${t.amount>0?'＋':'−'}</span><div><b>${t.label}</b><small>${t.date}</small></div><strong class="${t.amount>0?'positive':''}">${t.amount>0?'+':''}${money(t.amount)}</strong></div>`).join('')||'<p class="muted">Sin movimientos todavía.</p>'}</div>${pending.length?`<div class="pending-note">⏳ ${pending.length} transferencia${pending.length>1?'s':''} esperando aprobación de caja.</div>`:''}</section></div>
  <div class="quick-links"><button data-route="order"><span>🍹</span><b>Pedir desde el celular</b><small>Elegí barra y retirá con QR</small></button><button data-route="pos"><span>▣</span><b>Abrir POS de barra</b><small>Vista del bartender</small></button><button data-route="admin"><span>⚙</span><b>Administración</b><small>Cajas, alertas y aprobaciones</small></button></div></section>${footer()}`;
}

function productCards(){return products.map(p=>`<button class="product-card" data-add-product="${p.id}"><span>${p.icon}</span><div><b>${p.name}</b><small>${p.category} · Stock ${p.stock}</small></div><strong>${money(p.price)}</strong><i>＋</i></button>`).join('')}
function cartMarkup(context){
  const rows=Object.entries(state.cart).filter(([,q])=>q>0), total=cartTotal();
  return `<div class="cart-box"><div class="panel-head"><div><small>PEDIDO ACTUAL</small><h2>${rows.length?'Tu selección':'Carrito vacío'}</h2></div><button class="clear-cart" data-clear-cart>Vaciar</button></div><div class="cart-lines">${rows.map(([id,q])=>{const p=products.find(x=>x.id===id);return `<div class="cart-line"><span>${p.icon}</span><div><b>${p.name}</b><small>${money(p.price)} c/u</small></div><div class="cart-step"><button data-cart-qty="${id}" data-delta="-1">−</button><b>${q}</b><button data-cart-qty="${id}" data-delta="1">＋</button></div><strong>${money(p.price*q)}</strong></div>`}).join('')||'<div class="cart-empty">Agregá bebidas desde el menú.</div>'}</div><div class="cart-total"><span>Total</span><b>${money(total)}</b></div>${context==='pos'?`<div class="scan-status ${state.posScanned?'ok':''}"><span>${state.posScanned?'✓':'⌁'}</span><div><b>${state.posScanned?'QR de Carlo Demo leído':'Falta escanear al cliente'}</b><small>${state.posScanned?`Saldo ${money(getWallet().balance)}`:'Usá el simulador para leer su QR'}</small></div></div><button class="cta full" data-scan-qr>${state.posScanned?'Volver a escanear':'Simular escaneo QR'}</button><button class="pay-wallet full" data-pay-pos ${!rows.length||!state.posScanned?'disabled':''}>Cobrar ${money(total)} del saldo</button>`:`<button class="pay-wallet full" data-pay-order ${!rows.length?'disabled':''}>Pagar ${money(total)} con mi saldo</button><small class="balance-hint">Saldo actual: ${money(getWallet().balance)}</small>`}</div>`;
}
function orderPage(){return `<section class="commerce-page"><button class="back" data-route="wallet">← Volver a mi saldo</button><div class="commerce-head"><div><div class="eyebrow">Pedido móvil</div><h1>Elegí, pagá<br>y retirá</h1></div><div class="bar-picker"><small>RETIRAR EN</small>${bars.map(b=>`<button class="${state.posBar===b.id?'active':''}" data-bar="${b.id}">${b.name}</button>`).join('')}</div></div><div class="commerce-grid"><div><div class="product-grid">${productCards()}</div></div>${cartMarkup('user')}</div></section>`}

function posPage(){return `<section class="commerce-page pos-page"><div class="staff-top"><div><div class="eyebrow">Punto de venta · Demo</div><h1>Barra rápida</h1></div><div class="operator"><span class="online-dot"></span><div><b>Martina · Caja 02</b><small>Turno abierto · 22:14</small></div></div></div><div class="bar-tabs">${bars.map(b=>`<button class="${state.posBar===b.id?'active':''}" data-bar="${b.id}">${b.name}</button>`).join('')}</div><div class="commerce-grid"><div><div class="product-grid">${productCards()}</div></div>${cartMarkup('pos')}</div><button class="admin-link" data-route="admin">Abrir administración</button></section>`}

function topupModal(){modalRoot.innerHTML=`<div class="modal-backdrop"><div class="modal topup-modal"><div class="modal-head"><div><small>CARGA POR TRANSFERENCIA</small><h3>Sumá saldo</h3></div><button class="close">×</button></div><form id="topup-form" class="form"><div class="amount-presets">${[10000,20000,30000,50000].map(n=>`<button type="button" data-preset="${n}">${money(n)}</button>`).join('')}</div><div class="field"><label>Importe transferido</label><input name="amount" id="topup-amount" type="number" min="1000" step="500" required placeholder="$ 20.000" /></div><div class="bank-data"><div><small>ALIAS</small><b>lacasona.saldo</b><button type="button" data-copy="lacasona.saldo">Copiar</button></div><div><small>CUENTA DEMO</small><b>La Casona Eventos</b></div></div><div class="telegram-preview"><span>➤</span><div><b>Aviso automático a Telegram</b><small>Caja recibirá importe, usuario y referencia para aprobar la carga.</small></div></div><button class="cta full" type="submit">Ya transferí · Enviar aviso</button></form></div></div>`;bindModal()}

function orderReceipt(order){modalRoot.innerHTML=`<div class="modal-backdrop"><div class="modal receipt-modal"><div class="success-mark">✓</div><small>PAGO REALIZADO</small><h3>${order.code}</h3><p>Tu pedido fue enviado a <b>${bars.find(b=>b.id===order.bar).name}</b>. Mostrá este código cuando aparezca como listo.</p><div class="pickup-code">${order.code}</div><button class="cta full close">Entendido</button></div></div>`;modalRoot.querySelector('.close').onclick=()=>modalRoot.innerHTML=''}

function admin(){
  const w=getWallet(), pending=w.topups.filter(t=>t.status==='pending'), approved=w.topups.filter(t=>t.status==='approved'), sales=w.transactions.filter(t=>t.type==='purchase').reduce((s,t)=>s+Math.abs(t.amount),0), leads=getLeads();
  return `<section class="admin-page"><div class="admin-heading"><div><div class="eyebrow">Centro de operaciones · Demo</div><h1 class="page-title">La noche<br>bajo control</h1></div><div class="admin-actions"><button class="mini-btn" data-route="pos">Abrir POS</button><button class="mini-btn" data-route="wallet">Ver usuario</button></div></div><div class="metric-grid"><div class="metric"><small>Ventas en barras</small><b>${money(sales)}</b></div><div class="metric"><small>Saldo del usuario demo</small><b class="gold">${money(w.balance)}</b></div><div class="metric"><small>Cargas pendientes</small><b>${pending.length}</b></div><div class="metric"><small>Barras operativas</small><b>3/3</b></div></div>
  <div class="admin-layout"><div><div class="admin-panel telegram-panel"><div class="panel-head"><div><small>TELEGRAM · @LaCasonaCajaBot</small><h3>Solicitudes de carga</h3></div><span class="telegram-live">● CONECTADO DEMO</span></div>${pending.length?`<div class="topup-requests">${pending.map(t=>`<article><span class="telegram-icon">➤</span><div><b>Nueva transferencia informada</b><p><strong>${money(t.amount)}</strong> · ${w.name}<br><small>${t.date} · Ref. ${t.id}</small></p></div><div class="approval-actions"><button data-approve="${t.id}">Aprobar</button><button data-reject="${t.id}">Rechazar</button></div></article>`).join('')}</div>`:`<div class="no-alerts"><span>✓</span><p>No hay transferencias esperando aprobación.</p></div>`}<div class="integration-note"><b>Producción:</b> Telegram Bot API enviará este aviso al grupo privado de caja. El token quedará únicamente en el backend.</div></div>
  <div class="admin-panel"><h3>Ventas por barra</h3><div class="bar-sales">${bars.map((b,i)=>`<div><span><b>${b.name}</b><small>${[12,9,6][i]} operaciones</small></span><strong>${money([94500,73000,58000][i]+sales/(i+2))}</strong><div class="bar"><i style="width:${[78,61,47][i]}%"></i></div></div>`).join('')}</div></div></div>
  <div><div class="admin-panel"><h3>Stock crítico</h3><div class="stock-list">${products.map(p=>`<div><span>${p.icon} ${p.name}</span><b>${p.stock}</b></div>`).join('')}</div></div><div class="admin-panel"><h3>Integraciones</h3><div class="integration-list"><div class="integration on"><span>➤</span><div><b>Telegram</b><small>Avisos simulados activos</small></div><strong>DEMO</strong></div><div class="integration off"><span>MP</span><div><b>Mercado Pago</b><small>Checkout + webhooks</small></div><strong>PENDIENTE</strong></div><div class="integration on"><span>↔</span><div><b>Transferencias</b><small>Aprobación manual</small></div><strong>ACTIVO</strong></div></div></div></div></div>
  <div class="admin-panel"><div class="panel-head"><div><small>CRM COMERCIAL · ${leads.length} CONSULTAS</small><h3>Leads recientes</h3></div></div><div class="compact-history">${leads.slice().reverse().map(l=>`<div><span>◇</span><b>${escapeHTML(l.name)} · ${l.type}</b><small>${escapeHTML(l.phone)} · ${l.status}</small><strong>${l.date||'A coordinar'}</strong></div>`).join('')||'<p class="muted">Todavía no hay consultas comerciales.</p>'}</div></div>
  <div class="admin-panel"><div class="panel-head"><div><small>ÚLTIMAS ACREDITACIONES</small><h3>Historial de caja</h3></div></div><div class="compact-history">${approved.slice().reverse().map(t=>`<div><span>✓</span><b>${t.id}</b><small>${t.date}</small><strong>+${money(t.amount)}</strong></div>`).join('')||'<p class="muted">Todavía no se aprobaron transferencias en esta demo.</p>'}</div></div></section>`
}

function render(){
  window.scrollTo({top:0,behavior:'instant'});
  const views={home,news:newsArticle,event:eventDetail,tickets,wallet:walletPage,order:orderPage,pos:posPage,admin};
  app.innerHTML = state.route==='home'?homeV2():(views[state.route]||admin)();
  bind(); updateHeaderBalance(); updateActiveNav(); if(state.route==='tickets') makeQR(); if(state.route==='wallet') makeWalletQR();
}

function updateActiveNav(){const buttons=[...document.querySelectorAll('.mobile-nav button')];buttons.forEach(b=>b.classList.remove('active'));const index=state.route==='home'?0:state.route==='event'||state.route==='tickets'?2:state.route==='wallet'||state.route==='order'||state.route==='pos'?4:-1;if(index>=0)buttons[index]?.classList.add('active')}

function bind(){
  document.querySelectorAll('[data-route]').forEach(b=>b.onclick=()=>{state.route=b.dataset.route;state.checkout=false;render()});
  document.querySelectorAll('[data-news]').forEach(b=>b.onclick=e=>{e.stopPropagation();state.post=b.dataset.news;state.route='news';render()});
  document.querySelectorAll('[data-focus-comment]').forEach(b=>b.onclick=()=>document.querySelector(`#comment-${b.dataset.focusComment}`)?.focus());
  document.querySelectorAll('[data-like]').forEach(b=>b.onclick=()=>{b.classList.toggle('liked');b.textContent=b.classList.contains('liked')?'♥':'♡'});
  document.querySelectorAll('[data-poll]').forEach(b=>b.onclick=()=>{document.querySelectorAll('[data-poll]').forEach(x=>x.classList.remove('voted'));b.classList.add('voted');toast('¡Voto anónimo registrado!')});
  document.querySelectorAll('[data-comment-form]').forEach(f=>f.addEventListener('submit',submitComment));
  document.querySelectorAll('[data-event]').forEach(b=>b.onclick=e=>{e.stopPropagation();state.event=b.dataset.event;state.sector='general';state.qty=1;state.checkout=false;state.route='event';render()});
  document.querySelectorAll('[data-detail]').forEach(b=>b.onclick=e=>{e.stopPropagation();state.event=b.dataset.detail;state.sector='general';state.qty=1;state.checkout=false;state.route='event';render()});
  document.querySelectorAll('[data-sector]').forEach(b=>b.onclick=()=>{state.sector=b.dataset.sector;render()});
  document.querySelectorAll('[data-qty]').forEach(b=>b.onclick=()=>{state.qty=Math.max(1,Math.min(6,state.qty+Number(b.dataset.qty)));render()});
  document.querySelectorAll('[data-checkout]').forEach(b=>b.onclick=()=>{state.checkout=true;render()});
  document.querySelectorAll('[data-back-detail]').forEach(b=>b.onclick=()=>{state.checkout=false;render()});
  document.querySelectorAll('[data-scroll]').forEach(b=>b.onclick=()=>{if(state.route!=='home'){state.route='home';render();setTimeout(()=>document.querySelector('#'+b.dataset.scroll)?.scrollIntoView(),30)}else document.querySelector('#'+b.dataset.scroll)?.scrollIntoView()});
  document.querySelectorAll('[data-story]').forEach(b=>b.onclick=()=>openStory(Number(b.dataset.story)));
  document.querySelectorAll('[data-kick-sound]').forEach(b=>b.onclick=activateKickSound);
  document.querySelectorAll('[data-video]').forEach(b=>b.onclick=()=>{const id=b.dataset.video,title=b.dataset.videoTitle||'Video de La Casona';b.outerHTML=`<iframe src="https://www.youtube.com/embed/${id}?autoplay=1&rel=0&playsinline=1" title="${title}" allow="autoplay; encrypted-media; picture-in-picture" allowfullscreen></iframe>`});
  document.querySelectorAll('[data-topup]').forEach(b=>b.onclick=topupModal);
  document.querySelectorAll('[data-lead-type]').forEach(b=>b.onclick=()=>leadModal(b.dataset.leadType));
  document.querySelectorAll('[data-menu-toggle]').forEach(b=>b.onclick=()=>{const d=document.querySelector('[data-mobile-drawer]');d.classList.add('open');d.setAttribute('aria-hidden','false')});
  document.querySelectorAll('[data-close-menu]').forEach(b=>b.onclick=()=>{const d=document.querySelector('[data-mobile-drawer]');d.classList.remove('open');d.setAttribute('aria-hidden','true')});
  document.querySelectorAll('[data-add-product]').forEach(b=>b.onclick=()=>{const id=b.dataset.addProduct;state.cart[id]=(state.cart[id]||0)+1;render()});
  document.querySelectorAll('[data-cart-qty]').forEach(b=>b.onclick=()=>{const id=b.dataset.cartQty;state.cart[id]=Math.max(0,(state.cart[id]||0)+Number(b.dataset.delta));render()});
  document.querySelectorAll('[data-clear-cart]').forEach(b=>b.onclick=()=>{state.cart={};render()});
  document.querySelectorAll('[data-bar]').forEach(b=>b.onclick=()=>{state.posBar=b.dataset.bar;render()});
  document.querySelectorAll('[data-scan-qr]').forEach(b=>b.onclick=()=>{state.posScanned=true;render();toast('QR dinámico validado')});
  document.querySelectorAll('[data-pay-order]').forEach(b=>b.onclick=()=>payFromWallet('user'));
  document.querySelectorAll('[data-pay-pos]').forEach(b=>b.onclick=()=>payFromWallet('pos'));
  document.querySelectorAll('[data-approve]').forEach(b=>b.onclick=()=>approveTopup(b.dataset.approve,true));
  document.querySelectorAll('[data-reject]').forEach(b=>b.onclick=()=>approveTopup(b.dataset.reject,false));
  document.querySelector('[data-share]')?.addEventListener('click',()=>{navigator.clipboard?.writeText(location.href);toast('Enlace del evento copiado')});
  document.querySelector('#checkout-form')?.addEventListener('submit',buy);
}

function submitComment(ev){
  ev.preventDefault();const fd=new FormData(ev.currentTarget),text=String(fd.get('comment')||'').trim();if(!text)return;saveComment(ev.currentTarget.dataset.commentForm,text);render();toast('Comentario publicado de forma anónima');
}

function bindModal(){
  modalRoot.querySelectorAll('.close').forEach(b=>b.onclick=()=>modalRoot.innerHTML='');
  modalRoot.querySelectorAll('[data-preset]').forEach(b=>b.onclick=()=>{modalRoot.querySelector('#topup-amount').value=b.dataset.preset});
  modalRoot.querySelectorAll('[data-copy]').forEach(b=>b.onclick=()=>{navigator.clipboard?.writeText(b.dataset.copy);toast('Alias copiado')});
  modalRoot.querySelector('#topup-form')?.addEventListener('submit',submitTopup);
  modalRoot.querySelector('#lead-form')?.addEventListener('submit',ev=>{ev.preventDefault();const fd=new FormData(ev.currentTarget);saveLead({type:ev.currentTarget.dataset.type,name:escapeHTML(fd.get('name')),company:escapeHTML(fd.get('company')),phone:escapeHTML(fd.get('phone')),email:escapeHTML(fd.get('email')),date:escapeHTML(fd.get('date')),location:escapeHTML(fd.get('location')),message:escapeHTML(fd.get('message'))});modalRoot.innerHTML='';toast('Consulta enviada · ya aparece en Leads del panel')});
}

function submitTopup(ev){
  ev.preventDefault();const amount=Number(new FormData(ev.currentTarget).get('amount'));if(!amount||amount<1000)return;
  const w=getWallet(), id='TR-'+Math.random().toString(36).slice(2,7).toUpperCase();w.topups.push({id,amount,status:'pending',date:'Ahora'});saveWallet(w);modalRoot.innerHTML='';state.route='wallet';render();toast('Aviso enviado a Telegram · Pendiente de aprobación');
}

function approveTopup(id,approve){
  const w=getWallet(),t=w.topups.find(x=>x.id===id);if(!t)return;t.status=approve?'approved':'rejected';if(approve){w.balance+=t.amount;w.transactions.push({id:t.id,type:'topup',label:'Transferencia aprobada por caja',amount:t.amount,date:'Ahora'})}saveWallet(w);render();toast(approve?'Saldo acreditado correctamente':'Transferencia rechazada');
}

function payFromWallet(source){
  const total=cartTotal(),w=getWallet();if(!total)return;if(w.balance<total){toast('Saldo insuficiente · cargá crédito primero');return}
  w.balance-=total;const order={code:'B'+String(w.orders.length+1).padStart(3,'0'),bar:state.posBar,total,status:source==='pos'?'entregado':'preparando',date:'Ahora'};w.orders.push(order);w.transactions.push({id:order.code,type:'purchase',label:`Consumo · ${bars.find(b=>b.id===state.posBar).name}`,amount:-total,date:'Ahora'});saveWallet(w);state.cart={};state.posScanned=false;if(source==='user'){state.route='wallet';render();orderReceipt(order)}else{render();toast(`Cobro aprobado · ${order.code}`)}
}

function activateKickSound(ev){
  const button=ev.currentTarget, frame=document.querySelector('#kick-player');
  if(!frame)return;
  button.classList.add('loading');
  const label=button.querySelector('b, span:nth-of-type(1)');
  if(label)label.textContent='ACTIVANDO SONIDO…';
  frame.src='about:blank';
  setTimeout(()=>{
    frame.src=`https://player.kick.com/lacasonafm?autoplay=true&muted=false&volume=1&sound=${Date.now()}`;
    button.classList.remove('loading');
    button.classList.add('active');
    if(label)label.textContent='SONIDO ACTIVADO';
    const hint=button.querySelector('small');if(hint)hint.textContent='Si no se escucha, usá “Escuchar directo en Kick”';
  },120);
}

function buy(ev){ev.preventDefault();const fd=new FormData(ev.currentTarget),e=events[state.event],s=e.sectors.find(x=>x.id===state.sector);const ticket={artist:e.artist,date:e.date,place:e.place,sector:`${state.qty} × ${s.name}`,name:`${fd.get('name')} ${fd.get('surname')}`,code:'LC-'+Math.random().toString(36).slice(2,8).toUpperCase()};localStorage.setItem('lacasona-ticket',JSON.stringify(ticket));state.route='tickets';state.checkout=false;render();toast('¡Pago demo aprobado! Tu entrada ya está lista.');}
function makeWalletQR(){const q=document.querySelector('#wallet-qr');if(!q)return;let seed=Math.floor(Date.now()/30000)%99991;for(let y=0;y<25;y++)for(let x=0;x<25;x++){seed=(seed*9301+49297)%233280;const i=document.createElement('i');const finder=(x<7&&y<7)||(x>17&&y<7)||(x<7&&y>17);if(finder?((x%6===0||y%6===0)||(x%6>1&&x%6<5&&y%6>1&&y%6<5)):seed/233280>.5)i.className='on';q.appendChild(i)}const progress=document.querySelector('#qr-progress');if(progress){const remain=30-(Math.floor(Date.now()/1000)%30);progress.style.width=`${remain/30*100}%`}}
function makeQR(){const q=document.querySelector('#qr');if(!q)return;let seed=19;for(let y=0;y<21;y++)for(let x=0;x<21;x++){seed=(seed*9301+49297)%233280;const i=document.createElement('i');const finder=(x<7&&y<7)||(x>13&&y<7)||(x<7&&y>13);if(finder?((x%6===0||y%6===0)||(x%6>1&&x%6<5&&y%6>1&&y%6<5)):seed/233280>.53)i.style.background='#16120c';q.appendChild(i)}}
function openStory(i){const content=[['Próximos eventos','Dale Q’ Va abre la cartelera y Ulises Bueno aparece como la gran próxima fecha. En producción, cada círculo puede contener videos, flyers o anuncios.'],['40 años de historia','Una línea de tiempo con fotos históricas, artistas y recuerdos de cuatro décadas junto al público catamarqueño.'],['Sectores y experiencia','General, Preferencial y VIP con precios y beneficios claros antes de comprar.'],['Cómo llegar','La Casona · San Antonio, Fray Mamerto Esquiú, Catamarca. En producción se conectará el mapa oficial.'],['La noche en vertical','Videos breves tipo historia o reel para mostrar la energía real de cada baile.'],['Ayuda rápida','Compra como invitado, recuperación por email y soporte directo por WhatsApp.'],['Información legal','Términos, privacidad y botón de arrepentimiento se completarán con la razón social y política oficial.']][i]||['La Casona','Contenido demostrativo'];modalRoot.innerHTML=`<div class="modal-backdrop"><div class="modal"><div class="modal-head"><h3>${content[0]}</h3><button class="close">×</button></div><p>${content[1]}</p><button class="cta full close">Entendido</button></div></div>`;modalRoot.querySelectorAll('.close').forEach(b=>b.onclick=()=>modalRoot.innerHTML='');}
function toast(msg){const t=document.querySelector('#toast');t.textContent=msg;t.classList.add('show');setTimeout(()=>t.classList.remove('show'),2600)}
document.addEventListener('keydown',e=>{if(e.key==='Escape')modalRoot.innerHTML=''});
render();
