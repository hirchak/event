/* ============================================================
   SCRIPT — Seven Rays Event Landing Page
   Premium version: i18n, scroll animations, navbar, carousel
   ============================================================ */

// ─────────── i18n TRANSLATIONS ───────────
const translations = {
  ru: {
    nav_logo: 'Семь<span>Лучей</span>',
    nav_logo_sub: 'практическая встреча · Прага',
    nav_wisdom: 'Учение',
    nav_insights: 'Открытия',
    nav_qigong: 'Практика',
    nav_master: 'Мастер',
    nav_schedule: 'Расписание',
    nav_location: 'Место',

    hero_invitation: 'Приглашение на особую встречу',
    hero_title: 'Вневременная <em data-i18n="hero_title_em">Мудрость</em>',
    hero_title_em: 'Мудрость',
    hero_sub: 'Учение о Семи Лучах — глубокое знание, которое объясняет людей глубже, чем психология. Приглашаем вас на серию практических встреч с Владимиром Маширом в Праге.',
    hero_location_text: 'Studio Santiago, Прага',
    hero_dates_text: '24 — 25 апреля 2026',
    hero_insta: 'Instagram',
    hero_cta: 'Забронировать место',
    hero_cta2: 'Изучить программу',
    pricing_badge_note: 'Участникам клуба Santiago',

    tag_lectures: 'Лекции',
    tag_qigong: 'Цигун',
    tag_yoga: 'Йога',
    tag_tea: 'Чайная церемония',

    wisdom_label: 'Учение о Семи Лучах',
    wisdom_title: 'Есть система, которая объясняет людей глубже, чем психология',
    wisdom_lead: 'Замечали ли вы, что люди воспринимают мир совершенно по-разному?',
    wisdom_obs1: 'Один человек действует через <strong>силу и волю</strong>.',
    wisdom_obs2: 'Другой проживает всё через <strong>чувства и эмоции</strong>.',
    wisdom_obs3: 'Третий опирается на глубокое <strong>понимание и логику</strong>.',
    wisdom_highlight: 'И каждый абсолютно уверен, что именно его путь — правильный. Именно на этом стыке рождаются конфликты, выгорание и непонимание себя и других.',

    insights_label: 'Что открывает учение',
    insights_title: 'Учение о Семи Лучах показывает',
    insight1_title: 'Почему люди такие разные',
    insight1_text: 'Понимание глубинных отличий в энергетической природе каждого человека',
    insight2_title: 'Какой тип энергии у вас',
    insight2_text: 'Определение вашего уникального энергетического луча и его влияния на жизнь',
    insight3_title: 'Как вы принимаете решения',
    insight3_text: 'Осознание механизмов вашего мышления и действий в различных ситуациях',
    insight4_title: 'Где вы теряете ресурс',
    insight4_text: 'Обнаружение скрытых утечек энергии и восстановление внутренней силы',

    transform_label: 'Когда приходит это понимание',
    transform1: 'Исчезает внутренний конфликт',
    transform2: 'Появляется ясность',
    transform3: 'Возвращается опора внутри',

    not_faith: 'Это не про веру. Это про глубокое узнавание себя.',

    theme_sport: 'Спорт',
    theme_practice: 'Практики',
    theme_vladimir: 'Владимир',

    master_label: 'Практическая встреча',
    master_title: 'Владимир Машир',
    master_intro: 'Приглашаем вас на особую встречу с мастером, чей подход объединяет древнюю мудрость и современное понимание тела и сознания.',
    approach1_title: 'Телесная диагностика',
    approach1_text: 'Глубокое считывание состояния тела — понимание того, что ваше тело пытается вам сказать',
    approach2_title: 'Работа с психосоматикой',
    approach2_text: 'Выявление и растворение скрытых блоков, которые проявляются через тело',
    approach3_title: 'Тибетские поющие чаши',
    approach3_text: 'Мягкое восстановление состояния через звуковые вибрации и настройку на энергетические ритмы',

    schedule_label: 'Расписание',
    schedule_title: 'Два дня практических встреч',
    month_apr: 'апреля',
    sched1_desc: 'Вечерняя встреча — знакомство с учением и первая практика',
    sched2_desc: 'Утренняя встреча — глубокая работа с телесной диагностикой и психосоматикой',

    target_label: 'Кому это принесет результат',
    target_title: 'Два пути трансформации',
    target_athlete_title: 'Спорт и Высокие достижения',
    target_athlete_text: 'Если вы нацелены на пик формы, профессиональный рост или преодоление «плато». Узнайте, как управлять психической энергией для победы.',
    target_health_title: 'Здоровье и Качество жизни',
    target_health_text: 'Для тех, кто ищет выход из выгорания, ясность в решениях и глубокое понимание своего предназначения и отношений.',
    day_fri: 'Пятница',
    day_sat: 'Суббота',
    schedule_note: 'Вы можете посетить одну встречу или весь цикл',

    pricing_label: 'Участие',
    pricing_title: 'Стоимость и Регистрация',
    price_primary_title: 'Полное участие (2 дня)',
    price_primary_amt: '50 €',
    price_primary_desc: 'Доступ ко всем лекциям, практикам Йога-Цигун и медитациям.',
    price_club_title: 'Для резидентов Santiago Club',
    price_club_amt: '25 €',
    price_club_desc: 'Специальная цена для участников клуба.',
    price_club_btn: 'Получить скидку клуба',
    price_access_text: 'Мы верим, что знания должны быть доступны. Если вы сейчас находитесь в сложной финансовой ситуации, но искренне хотите попасть на практику — напишите нам. Мы обсудим возможность бесплатного участия.',
    price_access_btn: 'Связаться с нами',

    location_label: 'Место проведения',
    location_title: 'Studio Santiago',

    cta_title: 'Откройте для себя путь к глубокому узнаванию',
    cta_sub: 'Количество мест ограничено для создания камерной атмосферы',
    cta_btn: 'Забронировать место',
    cta_note: 'Для бронирования напишите нам в Telegram',

    footer_copy: '© 2026 Семь Лучей · Владимир Машир. Все права защищены.',
    footer_privacy: 'Конфиденциальность',
    footer_contact: 'Контакты',
  },

  ua: {
    nav_logo: 'Сім<span>Променів</span>',
    nav_logo_sub: 'практична зустріч · Прага',
    nav_wisdom: 'Вчення',
    nav_insights: 'Відкриття',
    nav_qigong: 'Практика',
    nav_master: 'Майстер',
    nav_schedule: 'Розклад',
    nav_location: 'Місце',

    hero_invitation: 'Запрошення на особливу зустріч',
    hero_title: 'Позачасова <em data-i18n="hero_title_em">Мудрість</em>',
    hero_title_em: 'Мудрість',
    hero_sub: 'Вчення про Сім Променів — глибоке знання, що розкриває людську природу глибше, ніж психологія. Запрошуємо вас на серію практичних зустрічей з Володимиром Маширом у Празі.',
    hero_location_text: 'Studio Santiago, Прага',
    hero_dates_text: '24 — 25 квітня 2026',
    hero_insta: 'Instagram',
    hero_cta: 'Забронювати місце',
    hero_cta2: 'Вивчити програму',
    pricing_badge_note: 'Учасникам клубу Santiago',

    tag_lectures: 'Лекції',
    tag_qigong: 'Цигун',
    tag_yoga: 'Йога',
    tag_tea: 'Чайна церемонія',

    wisdom_label: 'Вчення про Сім Променів',
    wisdom_title: 'Є система, яка пояснює людей глибше, ніж психологія',
    wisdom_lead: 'Чи помічали ви, що люди сприймають світ зовсім по-різному?',
    wisdom_obs1: 'Одна людина діє через <strong>силу та волю</strong>.',
    wisdom_obs2: 'Інша проживає все через <strong>почуття та емоції</strong>.',
    wisdom_obs3: 'Третя спирається на глибоке <strong>розуміння та логіку</strong>.',
    wisdom_highlight: 'І кожен абсолютно впевнений, що саме його шлях — правильний. Саме на цьому стику народжуються конфлікти, вигорання та нерозуміння себе та інших.',

    insights_label: 'Що відкриває вчення',
    insights_title: 'Вчення про Сім Променів показує',
    insight1_title: 'Чому люди такі різні',
    insight1_text: 'Розуміння глибинних відмінностей в енергетичній природі кожної людини',
    insight2_title: 'Який тип енергії у вас',
    insight2_text: 'Визначення вашого унікального енергетичного променя та його впливу на життя',
    insight3_title: 'Як ви приймаєте рішення',
    insight3_text: 'Усвідомлення механізмів вашого мислення та дій у різних ситуаціях',
    insight4_title: 'Де ви втрачаєте ресурс',
    insight4_text: 'Виявлення прихованих витоків енергії та відновлення внутрішньої сили',

    transform_label: 'Коли приходить це розуміння',
    transform1: 'Зникає внутрішній конфлікт',
    transform2: 'З\'являється ясність',
    transform3: 'Повертається опора всередині',

    not_faith: 'Це не про віру. Це про глибоке впізнавання себе.',

    theme_sport: 'Спорт',
    theme_practice: 'Практики',
    theme_vladimir: 'Володимир',

    master_label: 'Практична зустріч',
    master_title: 'Володимир Машир',
    master_intro: 'Запрошуємо вас на особливу зустріч з майстром, чий підхід об\'єднує давню мудрість і сучасне розуміння тіла та свідомості.',
    approach1_title: 'Тілесна діагностика',
    approach1_text: 'Глибоке зчитування стану тіла — розуміння того, що ваше тіло намагається вам сказати',
    approach2_title: 'Робота з психосоматикою',
    approach2_text: 'Виявлення та розчинення прихованих блоків, які проявляються через тіло',
    approach3_title: 'Тибетські співочі чаші',
    approach3_text: 'М\'яке відновлення стану через звукові вібрації та налаштування на енергетичні ритми',

    schedule_label: 'Розклад',
    schedule_title: 'Два дні практичних зустрічей',
    month_apr: 'квітня',
    sched1_desc: 'Вечірня зустріч — знайомство з вченням та перша практика',
    sched2_desc: 'Ранкова зустріч — глибока робота з тілесною діагностикою та психосоматикою',

    target_label: 'Кому це принесе результат',
    target_title: 'Два шляхи трансформації',
    target_athlete_title: 'Спорт та Високі досягнення',
    target_athlete_text: 'Якщо ви націлені на пік форми, професійне зростання або подолання «плато». Дізнайтеся, як керувати психічною енергією для перемоги.',
    target_health_title: 'Здоров\'я та Якість життя',
    target_health_text: 'Для тих, хто шукає вихід із вигорання, ясність у рішеннях та глибоке розуміння свого призначення та стосунків.',
    day_fri: 'П\'ятниця',
    day_sat: 'Субота',
    schedule_note: 'Ви можете відвідати одну зустріч або весь цикл',

    pricing_label: 'Участь',
    pricing_title: 'Вартість та Реєстрація',
    price_primary_title: 'Повна участь (2 дні)',
    price_primary_amt: '50 €',
    price_primary_desc: 'Доступ до всіх лекцій, практик Йога-Цигун та медитацій.',
    price_club_title: 'Для резидентів Santiago Club',
    price_club_amt: '25 €',
    price_club_desc: 'Спеціальна ціна для учасників клуба.',
    price_club_btn: 'Отримати знижку клуба',
    price_access_text: 'Ми віримо, що знання мають бути доступними. Якщо ви зараз перебуваєте у складній фінансовій ситуації, але щиро бажаєте потрапити на практику — напишіть нам. Ми обговоримо можливість безкоштовної участі.',
    price_access_btn: 'Зв\'язатися з нами',

    location_label: 'Місце проведення',
    location_title: 'Studio Santiago',

    cta_title: 'Відкрийте для себе шлях до глибокого впізнавання',
    cta_sub: 'Кількість місць обмежена для створення камерної атмосфери',
    cta_btn: 'Забронювати місце',
    cta_note: 'Для бронювання напишіть нам у Telegram',

    footer_copy: '© 2026 Сім Променів · Володимир Машир. Усі права захищено.',
    footer_privacy: 'Конфіденційність',
    footer_contact: 'Контакти',
  }
};

// ─────────── i18n ENGINE ───────────
let currentLang = localStorage.getItem('event-lang') || 'ru';

function setLanguage(lang) {
  currentLang = lang;
  localStorage.setItem('event-lang', lang);
  document.documentElement.lang = lang === 'ua' ? 'uk' : 'ru';

  const dict = translations[lang];
  if (!dict) return;

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (dict[key] !== undefined) {
      el.innerHTML = dict[key];
    }
  });

  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === lang);
  });
}

// ─────────── NAVBAR SCROLL ───────────
function handleNavbarScroll() {
  const navbar = document.getElementById('navbar');
  if (!navbar) return;
  navbar.classList.toggle('scrolled', window.scrollY > 50);
}

// ─────────── MOBILE MENU ───────────
function setupMobileMenu() {
  const btn = document.getElementById('mobileMenuBtn');
  const nav = document.getElementById('navLinks');
  if (!btn || !nav) return;

  btn.addEventListener('click', () => {
    btn.classList.toggle('open');
    nav.classList.toggle('open');
  });

  nav.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', () => {
      btn.classList.remove('open');
      nav.classList.remove('open');
    });
  });
}

// ─────────── SMOOTH SCROLL ───────────
function setupSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', e => {
      e.preventDefault();
      const target = document.querySelector(anchor.getAttribute('href'));
      if (target) {
        const navbarHeight = document.getElementById('navbar')?.offsetHeight || 0;
        const top = target.getBoundingClientRect().top + window.scrollY - navbarHeight;
        window.scrollTo({ top, behavior: 'smooth' });
      }
    });
  });
}

// ─────────── SCROLL REVEAL ───────────
function setupScrollReveal() {
  const reveals = document.querySelectorAll('.reveal');
  if (!reveals.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

  reveals.forEach(el => observer.observe(el));
}

// ─────────── LANGUAGE SWITCHER ───────────
function setupLanguageSwitcher() {
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => setLanguage(btn.dataset.lang));
  });
}

// ─────────── THEME TOGGLE ───────────
function setupTheme() {
  const toggleBtn = document.getElementById('themeToggleBtn');
  if (!toggleBtn) return;

  const savedTheme = localStorage.getItem('event-theme');
  if (savedTheme === 'light') {
    document.documentElement.setAttribute('data-theme', 'light');
  }

  toggleBtn.addEventListener('click', () => {
    const isLight = document.documentElement.getAttribute('data-theme') === 'light';
    if (isLight) {
      document.documentElement.removeAttribute('data-theme');
      localStorage.setItem('event-theme', 'dark');
    } else {
      document.documentElement.setAttribute('data-theme', 'light');
      localStorage.setItem('event-theme', 'light');
    }
  });
}

// ─────────── CAROUSEL ───────────
let currentTheme = 'sport';
let carouselScrollPos = 0;
let carouselSpeed = 0.4;
let isDragging = false;
let isHovered = false;
let prevX = 0;

function setupCarousel() {
  const track = document.getElementById('carouselTrack');
  const themeBtns = document.querySelectorAll('.theme-btn');
  const viewport = document.querySelector('.carousel-viewport');
  if (!track || !themeBtns.length || !viewport) return;

  filterAndBuildCarousel('sport');

  themeBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const theme = btn.dataset.theme;
      if (theme === currentTheme) return;
      currentTheme = theme;
      themeBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      track.style.opacity = '0';
      setTimeout(() => {
        filterAndBuildCarousel(theme);
        track.style.transform = 'translateX(0)';
        carouselScrollPos = 0;
        track.style.opacity = '1';
      }, 300);
    });
  });

  viewport.addEventListener('mouseenter', () => isHovered = true);
  viewport.addEventListener('mouseleave', () => { isHovered = false; if (isDragging) isDragging = false; });

  viewport.addEventListener('mousedown', e => {
    isDragging = true;
    prevX = e.pageX;
    track.style.transition = 'none';
  });

  viewport.addEventListener('mousemove', e => {
    if (!isDragging) return;
    const dx = e.pageX - prevX;
    carouselScrollPos -= dx;
    if (dx > 2) carouselSpeed = -0.4;
    else if (dx < -2) carouselSpeed = 0.4;
    prevX = e.pageX;
  });

  window.addEventListener('mouseup', () => { isDragging = false; });

  viewport.addEventListener('touchstart', e => {
    isDragging = true;
    isHovered = true;
    prevX = e.touches[0].pageX;
    track.style.transition = 'none';
  }, { passive: true });

  viewport.addEventListener('touchmove', e => {
    if (!isDragging) return;
    const dx = e.touches[0].pageX - prevX;
    carouselScrollPos -= dx;
    if (dx > 2) carouselSpeed = -0.4;
    else if (dx < -2) carouselSpeed = 0.4;
    prevX = e.touches[0].pageX;
  }, { passive: true });

  window.addEventListener('touchend', () => {
    isDragging = false;
    isHovered = false;
  });

  function animate() {
    if (!isDragging && !isHovered) {
      carouselScrollPos += carouselSpeed;
    }

    const slides = track.querySelectorAll('.carousel-slide:not(.clone):not(.hidden)');
    if (slides.length > 0) {
      const slideWidth = slides[0].offsetWidth + 20;
      const origWidth = slides.length * slideWidth;
      if (carouselScrollPos >= origWidth) carouselScrollPos -= origWidth;
      else if (carouselScrollPos <= 0) carouselScrollPos += origWidth;
      track.style.transform = `translateX(${-carouselScrollPos}px)`;
    }

    requestAnimationFrame(animate);
  }

  requestAnimationFrame(animate);
}

function filterAndBuildCarousel(theme) {
  const track = document.getElementById('carouselTrack');
  if (!track) return;

  track.querySelectorAll('.carousel-slide:not(.clone)').forEach(slide => {
    slide.classList.toggle('hidden', slide.dataset.theme !== theme);
    slide.classList.remove('hidden');
  });

  track.querySelectorAll('.carousel-slide.clone').forEach(c => c.remove());

  const visible = Array.from(track.querySelectorAll(`.carousel-slide[data-theme="${theme}"]`));
  [1, 2].forEach(() => {
    visible.forEach(slide => {
      const clone = slide.cloneNode(true);
      clone.classList.add('clone');
      track.appendChild(clone);
    });
  });
}

// ─────────── INIT ───────────
document.addEventListener('DOMContentLoaded', () => {
  setLanguage(currentLang);
  setupTheme();
  setupLanguageSwitcher();
  setupMobileMenu();
  setupSmoothScroll();
  setupScrollReveal();
  setupCarousel();
  window.addEventListener('scroll', handleNavbarScroll, { passive: true });
  handleNavbarScroll();
});