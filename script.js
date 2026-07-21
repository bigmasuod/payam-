'use strict';

/* ===================================================
   DARK MODE
   =================================================== */
(function () {
  const btn  = document.getElementById('darkToggle');
  const html = document.documentElement;
  const KEY  = 'theme';

  function applyTheme(t) {
    html.setAttribute('data-theme', t);
    localStorage.setItem(KEY, t);
  }

  // اعمال تم ذخیره‌شده یا پیش‌فرض سیستم
  const saved = localStorage.getItem(KEY);
  if (saved) {
    applyTheme(saved);
  } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
    applyTheme('dark');
  }

  if (btn) {
    btn.addEventListener('click', () => {
      const cur = html.getAttribute('data-theme');
      applyTheme(cur === 'dark' ? 'light' : 'dark');
    });
  }
})();

/* ===================================================
   I18N — LANGUAGE TOGGLE (FA / EN)
   =================================================== */
(function () {
  const T = {
    fa: {
      pageTitle: 'پیام انجیل | زندگی عیسی مسیح',
      logoText: 'پیام انجیل',
      'nav.home': 'خانه', 'nav.bible': 'کتاب مقدس', 'nav.timeline': 'زندگی مسیح',
      'nav.verse': 'آیه‌ی امروز', 'nav.countdown': 'شمارش معکوس',
      'nav.symbols': 'نمادها', 'nav.about': 'درباره', 'nav.contact': 'تماس',
      'hero.title': '«من راه و حقیقت و حیات هستم»',
      'hero.subtitle': 'یوحنا ۱۴:۶ — عیسی مسیح',
      'hero.desc': 'با زندگی، پیام و دعوت عیسی مسیح آشنا شوید؛ خبری که دو هزار سال است جهان را دگرگون می‌کند.',
      'hero.cta': 'بیشتر بدانید ↓',
      'bible.tag': 'معرفی', 'bible.title': 'کتاب مقدس چیست؟',
      'bible.intro': 'کتاب مقدس، مجموعه‌ای از نوشته‌های مقدس است که در طول قرن‌ها توسط انبیا و رسولان نوشته شده و پیام خدا به انسان را در بر می‌گیرد.',
      'bible.ot.title': 'عهد عتیق', 'bible.nt.title': 'عهد جدید',
      'bible.ot.desc': 'نوشته‌های مقدس یهودی پیش از تولد مسیح؛ شامل تاریخ قوم اسرائیل، شریعت الهی، مزامیر داوود و پیشگویی‌های انبیا درباره‌ی آمدن مسیحا.',
      'bible.nt.desc': 'شامل چهار انجیل، اعمال رسولان، نامه‌های رسولان و کتاب مکاشفه. «انجیل» به معنای «مژده» است — خبر خوش نجات از طریق عیسی مسیح.',
      'timeline.tag': 'زندگی‌نامه', 'timeline.title': 'عیسی مسیح — از تولد تا رستاخیز',
      'timeline.intro': 'سفری شگفت‌انگیز از آغوش باکره‌ای در بیت‌لحم تا قبری خالی در اورشلیم.',
      'tl.birth.title': 'تولد معجزه‌آسا', 'tl.birth.label': 'بیت‌لحم',
      'tl.birth.desc': 'عیسی از مریم باکره و از طریق روح‌القدس در بیت‌لحم به دنیا آمد.',
      'tl.child.title': 'کودکی و ناصره', 'tl.child.label': 'ناصره',
      'tl.child.desc': 'پس از فرار به مصر، خانواده به ناصره بازگشتند. عیسی پسر یک نجار بزرگ شد.',
      'tl.baptism.title': 'تعمید و آغاز خدمت', 'tl.baptism.label': 'رود اردن | ~۳۰ سالگی',
      'tl.baptism.desc': 'یحیا او را تعمید داد. روح‌القدس به شکل کبوتر فرود آمد و صدایی گفت: «این است پسر محبوب من.»',
      'tl.ministry.title': 'سه سال خدمت و تعلیم', 'tl.ministry.label': 'جلیل و یهودیه',
      'tl.ministry.desc': 'دوازده حواری را انتخاب کرد. موعظه‌ی سر کوه و دو حکم اصلی: محبت به خدا و همسایه.',
      'tl.miracles.title': 'معجزات و شفاها', 'tl.miracles.label': 'سرتاسر فلسطین',
      'tl.miracles.desc': 'نابینایان بینا شدند، مردگان زنده شدند، طوفان آرام گرفت.',
      'tl.supper.title': 'شام آخر', 'tl.supper.label': 'اورشلیم',
      'tl.supper.desc': 'نان و شراب را نماد بدن و خون خود قرار داد — آغاز آیین عشای ربانی.',
      'tl.cross.title': 'مصلوب شدن — کفاره', 'tl.cross.label': 'جلجتا | اورشلیم',
      'tl.cross.desc': 'مرگ او کفاره‌ی گناهان بشریت بود.',
      'tl.resurrection.title': 'رستاخیز — پیروزی بر مرگ', 'tl.resurrection.label': 'سه روز بعد',
      'tl.resurrection.desc': 'قبر خالی بود. عیسی از مردگان برخاست — هسته‌ی مرکزی ایمان مسیحی.',
      'verse.tag': 'سخن مسیح', 'verse.title': 'آیه‌ی امروز',
      'verse.intro': 'کلامی از عیسی مسیح برای امروز شما',
      'verse.copy': 'کپی', 'verse.copied': 'آیه کپی شد ✓',
      'cd.tag': 'تقویم مسیحی', 'cd.title': 'شمارش معکوس تا عید',
      'cd.intro': 'برای دیدن تایمر هر عید، روی نام آن کلیک کنید',
      'cd.days': 'روز', 'cd.hours': 'ساعت', 'cd.mins': 'دقیقه', 'cd.secs': 'ثانیه',
      'sym.tag': 'نمادشناسی', 'sym.title': 'نمادهای مسیحی',
      'sym.intro': 'هر نماد داستانی دارد — نشانه‌هایی که دو هزار سال است پیام ایمان را منتقل می‌کنند.',
      'sym.hint': 'کلیک کنید',
      'sym.cross.t': 'صلیب', 'sym.cross.d': 'مهم‌ترین نماد مسیحیت؛ نشانه‌ی مرگ فداکارانه‌ی عیسی.',
      'sym.fish.t': 'ماهی (ایکتوس)', 'sym.fish.d': 'مسیحیان اولیه با این نماد یکدیگر را می‌شناختند.',
      'sym.dove.t': 'کبوتر', 'sym.dove.d': 'نماد روح‌القدس و آرامش الهی.',
      'sym.candle.t': 'شمع', 'sym.candle.d': 'نشانه‌ی مسیح «نور جهان».',
      'sym.bread.t': 'نان و شراب', 'sym.bread.d': 'نمادهای عشای ربانی.',
      'sym.water.t': 'آب', 'sym.water.d': 'نماد تعمید و تولد دوباره.',
      'sym.star.t': 'ستاره‌ی بیت‌لحم', 'sym.star.d': 'نماد هدایت الهی.',
      'sym.palm.t': 'برگ نخل', 'sym.palm.d': 'یادآور ورود پیروزمند عیسی به اورشلیم.',
      'about.tag': 'درباره‌ی ما', 'about.title': 'با ما آشنا شوید',
      'about.intro': 'ما یک تیم کوچک از ایمانداران فارسی‌زبان هستیم که پیام محبت مسیح را به اشتراک می‌گذاریم.',
      'about.name': 'حسین', 'about.role': 'مدیر کانال | مبلّغ انجیل',
      'about.bio': 'در تلاشم تا پیام محبت و امید مسیح را از طریق کانال تلگرام به فارسی‌زبانان سراسر جهان برسانم.',
      'about.tgChannel': 'کانال تلگرام پیام انجیل',
      'about.m1.t': 'تعلیم کتاب مقدس', 'about.m1.d': 'محتوای آموزشی درباره‌ی انجیل به زبان ساده',
      'about.m2.t': 'دعا و پشتیبانی', 'about.m2.d': 'همراهی در مسیر ایمان',
      'about.m3.t': 'رسیدن به همه', 'about.m3.d': 'پیام مسیح برای همه‌ی فارسی‌زبانان',
      'contact.title': 'می‌خواهید بیشتر بدانید؟',
      'contact.desc': 'اگر پرسشی دارید یا می‌خواهید کتاب مقدس بخوانید — با ما در تماس باشید.',
      'contact.name': 'نام شما', 'contact.email': 'ایمیل شما',
      'contact.msg': 'پیام یا سؤال شما...', 'contact.send': 'ارسال پیام ✉',
      'contact.success': 'پیام شما با موفقیت ارسال شد!',
      'footer.verse': '«زیرا خدا جهان را آن‌قدر محبت نمود که پسر یگانه‌ی خود را داد تا هر که به او ایمان آورد، هلاک نگردد بلکه حیات جاودانی یابد.»',
      'footer.verseRef': 'یوحنا ۳:۱۶',
      'footer.copy': '© ۲۰۲۵ — پیام انجیل | با محبت برای همه',
    },
    en: {
      pageTitle: 'Gospel Message | Life of Jesus Christ',
      logoText: 'Gospel Message',
      'nav.home': 'Home', 'nav.bible': 'The Bible', 'nav.timeline': 'Life of Christ',
      'nav.verse': "Today's Verse", 'nav.countdown': 'Countdown',
      'nav.symbols': 'Symbols', 'nav.about': 'About', 'nav.contact': 'Contact',
      'hero.title': '"I am the way, the truth, and the life"',
      'hero.subtitle': 'John 14:6 — Jesus Christ',
      'hero.desc': 'Discover the life, message, and invitation of Jesus Christ — a story that has transformed the world for two thousand years.',
      'hero.cta': 'Learn More ↓',
      'bible.tag': 'Introduction', 'bible.title': 'What is the Bible?',
      'bible.intro': 'The Bible is a collection of sacred writings composed over centuries by prophets and apostles, containing God\'s message to humanity.',
      'bible.ot.title': 'Old Testament', 'bible.nt.title': 'New Testament',
      'bible.ot.desc': 'The Jewish scriptures written before Christ\'s birth, including Israel\'s history, divine law, the Psalms, and prophecies about the coming Messiah.',
      'bible.nt.desc': 'Contains four Gospels, Acts of the Apostles, Epistles, and Revelation. "Gospel" means good news — the good news of salvation through Jesus Christ.',
      'timeline.tag': 'Biography', 'timeline.title': 'Jesus Christ — From Birth to Resurrection',
      'timeline.intro': 'A remarkable journey from a virgin\'s womb in Bethlehem to an empty tomb in Jerusalem.',
      'tl.birth.title': 'Miraculous Birth', 'tl.birth.label': 'Bethlehem',
      'tl.birth.desc': 'Jesus was born of the Virgin Mary through the Holy Spirit. An angel announced he would be "Son of God" and Savior of the world.',
      'tl.child.title': 'Childhood & Nazareth', 'tl.child.label': 'Nazareth',
      'tl.child.desc': 'After fleeing to Egypt, the family returned to Nazareth. Jesus grew up as a carpenter\'s son.',
      'tl.baptism.title': 'Baptism & Ministry Begins', 'tl.baptism.label': 'Jordan River | ~Age 30',
      'tl.baptism.desc': 'John baptized him in the Jordan. The Holy Spirit descended like a dove and a voice said: "This is my beloved Son."',
      'tl.ministry.title': 'Three Years of Ministry', 'tl.ministry.label': 'Galilee & Judea',
      'tl.ministry.desc': 'He chose twelve disciples. The Sermon on the Mount and two great commandments: love God and love your neighbor.',
      'tl.miracles.title': 'Miracles & Healings', 'tl.miracles.label': 'Throughout Palestine',
      'tl.miracles.desc': 'The blind received sight, the dead were raised, storms were calmed.',
      'tl.supper.title': 'The Last Supper', 'tl.supper.label': 'Jerusalem',
      'tl.supper.desc': 'He broke bread and shared wine as symbols of his body and blood — the beginning of Holy Communion.',
      'tl.cross.title': 'Crucifixion — Atonement', 'tl.cross.label': 'Golgotha | Jerusalem',
      'tl.cross.desc': 'His death was the atonement for humanity\'s sins — he bore the punishment we deserved.',
      'tl.resurrection.title': 'Resurrection — Victory over Death', 'tl.resurrection.label': 'Three Days Later',
      'tl.resurrection.desc': 'The tomb was empty. Jesus rose from the dead — the cornerstone of Christian faith.',
      'verse.tag': 'Words of Christ', 'verse.title': "Today's Verse",
      'verse.intro': 'A word from Jesus Christ for you today',
      'verse.copy': 'Copy', 'verse.copied': 'Copied ✓',
      'cd.tag': 'Christian Calendar', 'cd.title': 'Countdown to a Holy Day',
      'cd.intro': 'Click on any feast day to see its countdown timer',
      'cd.days': 'Days', 'cd.hours': 'Hours', 'cd.mins': 'Mins', 'cd.secs': 'Secs',
      'sym.tag': 'Symbolism', 'sym.title': 'Christian Symbols',
      'sym.intro': 'Each symbol tells a story — signs that have carried the message of faith for two thousand years.',
      'sym.hint': 'Click to learn more',
      'sym.cross.t': 'The Cross', 'sym.cross.d': 'The most important Christian symbol — Jesus\'s sacrificial death and love\'s victory over sin.',
      'sym.fish.t': 'The Fish (Ichthys)', 'sym.fish.d': 'Early Christians used this symbol to identify each other. The Greek letters stand for "Jesus Christ, Son of God, Savior."',
      'sym.dove.t': 'The Dove', 'sym.dove.d': 'Symbol of the Holy Spirit who descended at Christ\'s baptism; also a symbol of peace and hope.',
      'sym.candle.t': 'The Candle', 'sym.candle.d': 'Represents Christ the "Light of the World." Candlelight in darkness symbolizes God\'s presence in hardship.',
      'sym.bread.t': 'Bread & Wine', 'sym.bread.d': 'Symbols of Holy Communion, instituted by Christ at the Last Supper.',
      'sym.water.t': 'Water', 'sym.water.d': 'Symbol of baptism — the beginning of new life in faith.',
      'sym.star.t': 'Star of Bethlehem', 'sym.star.d': 'The star that guided the Magi; a symbol of divine guidance.',
      'sym.palm.t': 'Palm Branch', 'sym.palm.d': 'Recalls Jesus\'s triumphal entry into Jerusalem on Palm Sunday.',
      'about.tag': 'About Us', 'about.title': 'Meet Us',
      'about.intro': 'We are a small team of Persian-speaking believers sharing the message of Christ\'s love with everyone.',
      'about.name': 'Hossein', 'about.role': 'Channel Admin | Gospel Preacher',
      'about.bio': 'I strive to share the message of Christ\'s love and hope through our Telegram channel with Persian speakers around the world.',
      'about.tgChannel': 'Telegram Channel — Payam Enjil',
      'about.m1.t': 'Bible Teaching', 'about.m1.d': 'Educational content about the Gospel in plain language',
      'about.m2.t': 'Prayer & Support', 'about.m2.d': 'Walking alongside you in faith',
      'about.m3.t': 'Reaching Everyone', 'about.m3.d': 'Christ\'s message for all Persian speakers',
      'contact.title': 'Want to Know More?',
      'contact.desc': 'If you have questions or want to read the Bible — reach out to us.',
      'contact.name': 'Your name', 'contact.email': 'Your email',
      'contact.msg': 'Your message or question...', 'contact.send': 'Send Message ✉',
      'contact.success': 'Your message was sent successfully!',
      'footer.verse': '"For God so loved the world that he gave his one and only Son, that whoever believes in him shall not perish but have eternal life."',
      'footer.verseRef': 'John 3:16',
      'footer.copy': '© 2025 — Gospel Message | With Love for All',
    }
  };

  let currentLang = localStorage.getItem('lang') || 'fa';

  function applyLang(lang) {
    currentLang = lang;
    localStorage.setItem('lang', lang);
    const html = document.documentElement;
    html.setAttribute('lang', lang);
    html.setAttribute('dir', lang === 'en' ? 'ltr' : 'rtl');
    document.body.classList.toggle('ltr', lang === 'en');

    const dict = T[lang];
    // متون data-i18n
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (dict[key] !== undefined) el.textContent = dict[key];
    });
    // placeholderها
    document.querySelectorAll('[data-i18n-ph]').forEach(el => {
      const key = el.getAttribute('data-i18n-ph');
      if (dict[key] !== undefined) el.setAttribute('placeholder', dict[key]);
    });
    // title صفحه
    document.title = dict['pageTitle'] || document.title;

    // به‌روزرسانی برچسب دکمه زبان
    const btn = document.getElementById('langToggle');
    if (btn) {
      btn.querySelector('.lang-fa').style.color = lang === 'fa' ? 'var(--gold-light)' : 'rgba(255,255,255,0.45)';
      btn.querySelector('.lang-en').style.color = lang === 'en' ? 'var(--gold-light)' : 'rgba(255,255,255,0.45)';
    }

    // به‌روزرسانی متون countdown
    if (window._cdUpdateLabels) window._cdUpdateLabels(lang);
    // به‌روزرسانی کاروسل آیه
    if (window._verseUpdateLang) window._verseUpdateLang(lang);
  }

  const langBtn = document.getElementById('langToggle');
  if (langBtn) {
    langBtn.addEventListener('click', () => {
      applyLang(currentLang === 'fa' ? 'en' : 'fa');
    });
  }

  // اعمال اولیه
  applyLang(currentLang);
  window._currentLang = () => currentLang;
})();

/* ===================================================
   NAVBAR: scroll shadow + mobile toggle
   =================================================== */
(function () {
  const navbar    = document.getElementById('navbar');
  const navToggle = document.getElementById('navToggle');
  const navLinks  = document.getElementById('navLinks');

  window.addEventListener('scroll', () => {
    navbar.style.boxShadow = window.scrollY > 40 ? '0 4px 20px rgba(0,0,0,0.35)' : 'none';
  }, { passive: true });

  navToggle.addEventListener('click', () => {
    const open = navLinks.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', open);
  });
  navLinks.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
      navLinks.classList.remove('open');
      navToggle.setAttribute('aria-expanded', 'false');
    });
  });

  // highlight active section
  const allSections = document.querySelectorAll('section[id]');
  const navAnchors  = document.querySelectorAll('.nav-links a');
  window.addEventListener('scroll', () => {
    let cur = '';
    allSections.forEach(s => { if (window.scrollY >= s.offsetTop - 90) cur = s.id; });
    navAnchors.forEach(a => {
      const active = a.getAttribute('href') === `#${cur}`;
      a.style.color      = active ? 'var(--gold-light)' : '';
      a.style.background = active ? 'rgba(201,168,76,0.13)' : '';
    });
  }, { passive: true });
})();

/* ===================================================
   SCROLL FADE-IN
   =================================================== */
(function () {
  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); obs.unobserve(e.target); } });
  }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });
  document.querySelectorAll('.fade-in').forEach(el => obs.observe(el));
})();

/* ===================================================
   VERSE OF THE DAY
   =================================================== */
(function () {
  const VERSES_FA = [
    { text: 'من راه و حقیقت و حیات هستم؛ هیچ‌کس جز از طریق من نزد پدر نمی‌آید.', ref: 'یوحنا ۱۴:۶' },
    { text: 'بیایید نزد من، ای همه‌ی زحمت‌کشان، که من شما را آسایش خواهم داد.', ref: 'متی ۱۱:۲۸' },
    { text: 'زیرا خدا جهان را آن‌قدر محبت نمود که پسر یگانه‌ی خود را داد تا هر که به او ایمان آورد هلاک نگردد بلکه حیات جاودانی یابد.', ref: 'یوحنا ۳:۱۶' },
    { text: 'شما را وصیتی تازه می‌دهم که یکدیگر را محبت نمایید.', ref: 'یوحنا ۱۳:۳۴' },
    { text: 'من نور جهانم؛ هر که مرا پیروی کند در تاریکی راه نخواهد رفت.', ref: 'یوحنا ۸:۱۲' },
    { text: 'طلب کنید، به شما داده خواهد شد؛ بجویید، خواهید یافت؛ بکوبید، برایتان گشوده خواهد شد.', ref: 'متی ۷:۷' },
    { text: 'خوشا به حال فروتنان، زیرا آنان وارث زمین خواهند شد.', ref: 'متی ۵:۵' },
    { text: 'خوشا به حال صلح‌سازان، زیرا آنان پسران خدا خوانده خواهند شد.', ref: 'متی ۵:۹' },
    { text: 'من آمدم تا گوسفندان حیات داشته باشند و آن را فراوان‌تر داشته باشند.', ref: 'یوحنا ۱۰:۱۰' },
    { text: 'من شبان نیکو هستم؛ شبان نیکو جان خود را در راه گوسفندان می‌دهد.', ref: 'یوحنا ۱۰:۱۱' },
    { text: 'خداوند خدای خود را با تمامی دل و جان و فکر خود محبت نما.', ref: 'متی ۲۲:۳۷' },
    { text: 'من رستاخیز و حیات هستم؛ هر که به من ایمان آورد، اگرچه بمیرد، زنده خواهد شد.', ref: 'یوحنا ۱۱:۲۵' },
    { text: 'آنچه می‌خواهید مردم درباره‌ی شما بکنند، شما نیز همان‌طور درباره‌ی آن‌ها بکنید.', ref: 'متی ۷:۱۲' },
    { text: 'بیایید یوغ مرا بر خود بگیرید؛ زیرا من آرام و فروتنم.', ref: 'متی ۱۱:۲۹' },
    { text: 'پادشاهی خدا در درون شماست.', ref: 'لوقا ۱۷:۲۱' },
    { text: 'شما نمک زمین هستید.', ref: 'متی ۵:۱۳' },
    { text: 'شما نور جهان هستید.', ref: 'متی ۵:۱۴' },
    { text: 'از اینجا نگران فردا نباشید.', ref: 'متی ۶:۳۴' },
    { text: 'من تاک هستم و شما شاخه‌ها؛ هر که در من بماند میوه‌ی بسیار خواهد آورد.', ref: 'یوحنا ۱۵:۵' },
    { text: 'بزرگ‌ترین محبت این است که کسی جان خود را در راه دوستانش بدهد.', ref: 'یوحنا ۱۵:۱۳' },
    { text: 'آرامش خود را به شما می‌دهم. دل شما مضطرب نباشد.', ref: 'یوحنا ۱۴:۲۷' },
    { text: 'در دنیا سختی خواهید داشت، اما دل قوی دارید؛ من دنیا را مغلوب ساختم.', ref: 'یوحنا ۱۶:۳۳' },
    { text: 'اگر در کلام من بمانید، حقیقت را خواهید شناخت و حقیقت آزادتان خواهد کرد.', ref: 'یوحنا ۸:۳۲' },
    { text: 'من نان حیات هستم؛ هر که نزد من آید هرگز گرسنه نخواهد شد.', ref: 'یوحنا ۶:۳۵' },
    { text: 'بروید و همه‌ی قوم‌ها را شاگرد سازید.', ref: 'متی ۲۸:۱۹' },
  ];
  const VERSES_EN = [
    { text: 'I am the way and the truth and the life. No one comes to the Father except through me.', ref: 'John 14:6' },
    { text: 'Come to me, all you who are weary and burdened, and I will give you rest.', ref: 'Matthew 11:28' },
    { text: 'For God so loved the world that he gave his one and only Son, that whoever believes in him shall not perish but have eternal life.', ref: 'John 3:16' },
    { text: 'A new command I give you: Love one another. As I have loved you, so you must love one another.', ref: 'John 13:34' },
    { text: 'I am the light of the world. Whoever follows me will never walk in darkness.', ref: 'John 8:12' },
    { text: 'Ask and it will be given to you; seek and you will find; knock and the door will be opened.', ref: 'Matthew 7:7' },
    { text: 'Blessed are the meek, for they will inherit the earth.', ref: 'Matthew 5:5' },
    { text: 'Blessed are the peacemakers, for they will be called children of God.', ref: 'Matthew 5:9' },
    { text: 'I have come that they may have life, and have it to the full.', ref: 'John 10:10' },
    { text: 'I am the good shepherd. The good shepherd lays down his life for the sheep.', ref: 'John 10:11' },
    { text: 'Love the Lord your God with all your heart and with all your soul and with all your mind.', ref: 'Matthew 22:37' },
    { text: 'I am the resurrection and the life. The one who believes in me will live, even though they die.', ref: 'John 11:25' },
    { text: 'Do to others what you would have them do to you.', ref: 'Matthew 7:12' },
    { text: 'Take my yoke upon you and learn from me, for I am gentle and humble in heart.', ref: 'Matthew 11:29' },
    { text: 'The kingdom of God is within you.', ref: 'Luke 17:21' },
    { text: 'You are the salt of the earth.', ref: 'Matthew 5:13' },
    { text: 'You are the light of the world.', ref: 'Matthew 5:14' },
    { text: 'Do not worry about tomorrow, for tomorrow will worry about itself.', ref: 'Matthew 6:34' },
    { text: 'I am the vine; you are the branches. If you remain in me, you will bear much fruit.', ref: 'John 15:5' },
    { text: 'Greater love has no one than this: to lay down one\'s life for one\'s friends.', ref: 'John 15:13' },
    { text: 'Peace I leave with you; my peace I give you. Do not let your hearts be troubled.', ref: 'John 14:27' },
    { text: 'In this world you will have trouble. But take heart! I have overcome the world.', ref: 'John 16:33' },
    { text: 'Then you will know the truth, and the truth will set you free.', ref: 'John 8:32' },
    { text: 'I am the bread of life. Whoever comes to me will never go hungry.', ref: 'John 6:35' },
    { text: 'Go and make disciples of all nations.', ref: 'Matthew 28:19' },
  ];

  const AUTO_MS = 8000;
  let currentIndex = 0;
  let autoTimer = null;
  let isTransitioning = false;

  const verseTextEl  = document.getElementById('verseText');
  const verseRefEl   = document.getElementById('verseRef');
  const verseCard    = document.getElementById('verseCard');
  const dotsWrap     = document.getElementById('verseDots');
  const prevBtn      = document.getElementById('versePrev');
  const nextBtn      = document.getElementById('verseNext');
  const copyBtn      = document.getElementById('verseCopy');
  const copyToast    = document.getElementById('verseCopyToast');
  const progressBar  = document.getElementById('verseProgress');
  const shareTgBtn   = document.getElementById('shareVerseT');

  if (!verseTextEl) return;

  function getVerses() {
    return (window._currentLang && window._currentLang() === 'en') ? VERSES_EN : VERSES_FA;
  }

  function getDayIndex() {
    const now = new Date();
    const dayOfYear = Math.floor((now - new Date(now.getFullYear(), 0, 0)) / 86400000);
    return dayOfYear % getVerses().length;
  }

  currentIndex = getDayIndex();

  function buildDots() {
    if (!dotsWrap) return;
    dotsWrap.innerHTML = '';
    const verses = getVerses();
    verses.forEach((_, i) => {
      const d = document.createElement('button');
      d.className = 'verse-dot' + (i === currentIndex ? ' active' : '');
      d.setAttribute('role', 'tab');
      d.addEventListener('click', () => goTo(i));
      dotsWrap.appendChild(d);
    });
  }

  function updateDots() {
    if (!dotsWrap) return;
    dotsWrap.querySelectorAll('.verse-dot').forEach((d, i) => d.classList.toggle('active', i === currentIndex));
  }

  function showVerse(idx, dir) {
    if (isTransitioning) return;
    isTransitioning = true;
    const outCls = dir === 'next' ? 'transitioning-out' : 'transitioning-in';
    const inCls  = dir === 'next' ? 'transitioning-in'  : 'transitioning-out';
    verseCard.classList.add(outCls);
    setTimeout(() => {
      const verses = getVerses();
      verseTextEl.textContent = verses[idx].text;
      verseRefEl.textContent  = verses[idx].ref;
      updateDots();
      verseCard.classList.remove(outCls);
      verseCard.classList.add(inCls);
      void verseCard.offsetWidth;
      verseCard.classList.remove(inCls);
      isTransitioning = false;
    }, 400);
  }

  function goTo(idx, dir = 'next') {
    const verses = getVerses();
    currentIndex = (idx + verses.length) % verses.length;
    showVerse(currentIndex, dir);
    resetTimer();
  }

  function resetTimer() {
    clearInterval(autoTimer);
    if (progressBar) {
      progressBar.style.transition = 'none';
      progressBar.style.width = '0%';
      void progressBar.offsetWidth;
      progressBar.style.transition = `width ${AUTO_MS}ms linear`;
      progressBar.style.width = '100%';
    }
    autoTimer = setInterval(() => goTo(currentIndex + 1, 'next'), AUTO_MS);
  }

  if (verseCard) {
    verseCard.addEventListener('mouseenter', () => { clearInterval(autoTimer); if (progressBar) progressBar.style.transition = 'none'; });
    verseCard.addEventListener('mouseleave', () => resetTimer());
    let tx = 0;
    verseCard.addEventListener('touchstart', e => { tx = e.touches[0].clientX; }, { passive: true });
    verseCard.addEventListener('touchend',   e => { const dx = e.changedTouches[0].clientX - tx; if (Math.abs(dx) > 40) goTo(currentIndex + (dx < 0 ? 1 : -1), dx < 0 ? 'next' : 'prev'); }, { passive: true });
  }
  if (nextBtn) nextBtn.addEventListener('click', () => goTo(currentIndex + 1, 'next'));
  if (prevBtn) prevBtn.addEventListener('click', () => goTo(currentIndex - 1, 'prev'));

  if (copyBtn) {
    copyBtn.addEventListener('click', () => {
      const verses = getVerses();
      const txt = `"${verses[currentIndex].text}" — ${verses[currentIndex].ref}`;
      navigator.clipboard.writeText(txt).catch(() => {
        const ta = document.createElement('textarea');
        ta.value = txt; ta.style.cssText = 'position:fixed;opacity:0';
        document.body.appendChild(ta); ta.select(); document.execCommand('copy'); document.body.removeChild(ta);
      }).finally(() => {
        copyToast.classList.add('show');
        setTimeout(() => copyToast.classList.remove('show'), 2200);
      });
    });
  }

  if (shareTgBtn) {
    shareTgBtn.addEventListener('click', () => {
      const verses = getVerses();
      const txt = `"${verses[currentIndex].text}" — ${verses[currentIndex].ref}`;
      window.open(`https://t.me/share/url?url=${encodeURIComponent(location.href)}&text=${encodeURIComponent(txt)}`, '_blank', 'noopener');
    });
  }

  // به‌روزرسانی هنگام تغییر زبان
  window._verseUpdateLang = function () {
    currentIndex = getDayIndex();
    buildDots();
    const verses = getVerses();
    verseTextEl.textContent = verses[currentIndex].text;
    verseRefEl.textContent  = verses[currentIndex].ref;
  };

  buildDots();
  const verses = getVerses();
  verseTextEl.textContent = verses[currentIndex].text;
  verseRefEl.textContent  = verses[currentIndex].ref;
  resetTimer();
})();

/* ===================================================
   COUNTDOWN — MULTI-EVENT TABS
   =================================================== */
(function () {

  function easterDate(year) {
    const a = year % 19, b = Math.floor(year / 100), c = year % 100;
    const d = Math.floor(b / 4), e = b % 4, f = Math.floor((b + 8) / 25);
    const g = Math.floor((b - f + 1) / 3), h = (19 * a + b - d - g + 15) % 30;
    const i = Math.floor(c / 4), k = c % 4;
    const l = (32 + 2 * e + 2 * i - h - k) % 7;
    const m = Math.floor((a + 11 * h + 22 * l) / 451);
    const month = Math.floor((h + l - 7 * m + 114) / 31);
    const day   = ((h + l - 7 * m + 114) % 31) + 1;
    return new Date(year, month - 1, day);
  }

  function buildEvents(year) {
    const easter = easterDate(year);
    const gf = new Date(easter); gf.setDate(easter.getDate() - 2);
    const as = new Date(easter); as.setDate(easter.getDate() + 39);
    const pe = new Date(easter); pe.setDate(easter.getDate() + 49);
    return [
      { icon: '✝️',  fa: 'جمعه‌ی مقدس',           en: 'Good Friday',       date: gf },
      { icon: '☀️',  fa: 'عید پاک',                en: 'Easter',            date: easter },
      { icon: '🌤️', fa: 'صعود مسیح',               en: 'Ascension Day',     date: as },
      { icon: '🔥',  fa: 'عید پنطیکاست',            en: 'Pentecost',         date: pe },
      { icon: '🌟',  fa: 'کریسمس',                  en: 'Christmas',         date: new Date(year, 11, 25) },
      { icon: '⭐',  fa: 'عید میلاد (ارتدکس)',       en: 'Orthodox Christmas',date: new Date(year, 0, 6) },
    ];
  }

  const tabsEl     = document.getElementById('cdEventTabs');
  const dEl        = document.getElementById('cdDays');
  const hEl        = document.getElementById('cdHours');
  const mEl        = document.getElementById('cdMins');
  const sEl        = document.getElementById('cdSecs');
  const dateLblEl  = document.getElementById('countdownDateLabel');

  if (!tabsEl || !dEl) return;

  const now    = new Date();
  const thisYear = now.getFullYear();
  const eventsThisYear = buildEvents(thisYear);
  const eventsNextYear = buildEvents(thisYear + 1);

  // برای هر نوع عید: اگه امسال هنوز نگذشته بگیر، وگرنه سال بعد
  const events = eventsThisYear.map((ev, i) => {
    if (ev.date >= now) return ev;          // امسال هنوز نگذشته
    return eventsNextYear[i];               // گذشته، نسخه‌ی سال بعد رو بگیر
  });

  // مرتب‌سازی بر اساس تاریخ
  events.sort((a, b) => a.date - b.date);

  let selectedIdx  = 0;
  let tickTimer    = null;
  let prevVals     = {};

  // پیدا کردن نزدیک‌ترین عید آینده به عنوان پیش‌فرض
  const futureIdx = events.findIndex(e => e.date >= now);
  if (futureIdx !== -1) selectedIdx = futureIdx;

  function getLang() { return (window._currentLang && window._currentLang() === 'en') ? 'en' : 'fa'; }

  function pad(n) { return String(n).padStart(2, '0'); }

  function toPersian(s) {
    return s.replace(/[0-9]/g, d => '۰۱۲۳۴۵۶۷۸۹'[d]);
  }

  function flip(el, val) {
    el.textContent = val;
  }

  function renderTabs() {
    tabsEl.innerHTML = '';
    const lang = getLang();
    events.forEach((ev, i) => {
      const btn = document.createElement('button');
      const isPassed = ev.date < new Date();
      btn.className = 'cd-tab' + (i === selectedIdx ? ' active' : '') + (isPassed ? ' passed' : '');
      btn.setAttribute('role', 'tab');
      btn.setAttribute('aria-selected', i === selectedIdx ? 'true' : 'false');
      btn.innerHTML = `<span class="cd-tab-icon">${ev.icon}</span><span>${lang === 'en' ? ev.en : ev.fa}</span>`;
      btn.addEventListener('click', () => {
        selectedIdx = i;
        prevVals = { d: null, h: null, m: null, s: null }; // force redraw
        // آپدیت کلاس تب‌ها
        tabsEl.querySelectorAll('.cd-tab').forEach((b, j) => {
          b.classList.toggle('active', j === i);
          b.setAttribute('aria-selected', j === i ? 'true' : 'false');
        });
        clearInterval(tickTimer);
        // مقادیر قبلی رو پاک کن تا مطمئن بشیم عدد جدید نشون داده می‌شه
        [dEl, hEl, mEl, sEl].forEach(el => { el.textContent = ''; });
        tick();
        tickTimer = setInterval(tick, 1000);
      });
      tabsEl.appendChild(btn);
    });
  }

  function formatDate(d) {
    const lang = getLang();
    if (lang === 'en') {
      return d.toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
    }
    return d.toLocaleDateString('fa-IR', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
  }

  function startTick() {
    clearInterval(tickTimer);
    prevVals = { d: null, h: null, m: null, s: null };
    [dEl, hEl, mEl, sEl].forEach(el => { el.textContent = ''; });
    tick();
    tickTimer = setInterval(tick, 1000);
  }

  function tick() {
    const target = events[selectedIdx].date;
    const lang   = getLang();
    const now2   = new Date();
    const diff   = target - now2;

    if (dateLblEl) dateLblEl.textContent = formatDate(target);

    if (diff <= 0) {
      // عید گذشته
      const zero = lang === 'en' ? '00' : '۰۰';
      dEl.textContent = zero;
      hEl.textContent = zero;
      mEl.textContent = zero;
      sEl.textContent = zero;
      if (dateLblEl) {
        dateLblEl.textContent = lang === 'en'
          ? `✅ ${events[selectedIdx].en} has passed`
          : `✅ ${events[selectedIdx].fa} برگزار شد`;
      }
      clearInterval(tickTimer);
      return;
    }

    const days  = Math.floor(diff / 86400000);
    const hours = Math.floor((diff % 86400000) / 3600000);
    const mins  = Math.floor((diff % 3600000)  / 60000);
    const secs  = Math.floor((diff % 60000)    / 1000);

    const d = lang === 'en' ? pad(days)  : toPersian(pad(days));
    const h = lang === 'en' ? pad(hours) : toPersian(pad(hours));
    const m = lang === 'en' ? pad(mins)  : toPersian(pad(mins));
    const s = lang === 'en' ? pad(secs)  : toPersian(pad(secs));

    if (d !== prevVals.d) { dEl.textContent = d; prevVals.d = d; }
    if (h !== prevVals.h) { hEl.textContent = h; prevVals.h = h; }
    if (m !== prevVals.m) { mEl.textContent = m; prevVals.m = m; }
    if (s !== prevVals.s) { sEl.textContent = s; prevVals.s = s; }
  }

  // هنگام تغییر زبان تب‌ها رو rebuild کن
  window._cdUpdateLabels = function () {
    renderTabs();
    startTick();
  };

  renderTabs();
  startTick();
})();

/* ===================================================
   SYMBOL FLIP CARDS
   =================================================== */
(function () {
  document.querySelectorAll('.symbol-card').forEach(card => {
    const toggle = () => card.classList.toggle('flipped');
    card.addEventListener('click', toggle);
    card.addEventListener('keydown', e => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); toggle(); } });
  });
})();

/* ===================================================
   CONTACT FORM
   =================================================== */
(function () {
  const form       = document.getElementById('contactForm');
  const successMsg = document.getElementById('formSuccess');
  if (!form) return;

  form.addEventListener('submit', e => {
    e.preventDefault();
    const lang = window._currentLang ? window._currentLang() : 'fa';
    const name  = document.getElementById('userName').value.trim();
    const email = document.getElementById('userEmail').value.trim();
    if (!name || !email) {
      alert(lang === 'en' ? 'Please enter your name and email.' : 'لطفاً نام و ایمیل خود را وارد کنید.');
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      alert(lang === 'en' ? 'Please enter a valid email address.' : 'لطفاً یک آدرس ایمیل معتبر وارد کنید.');
      return;
    }
    const btn = form.querySelector('button[type="submit"]');
    btn.disabled = true;
    btn.textContent = lang === 'en' ? 'Sending...' : 'در حال ارسال...';
    setTimeout(() => {
      form.reset();
      btn.disabled = false;
      btn.textContent = lang === 'en' ? 'Send Message ✉' : 'ارسال پیام ✉';
      successMsg.classList.add('visible');
      setTimeout(() => successMsg.classList.remove('visible'), 5000);
    }, 1200);
  });
})();

/* ===================================================
   BACK TO TOP
   =================================================== */
(function () {
  const btn = document.getElementById('backToTop');
  if (!btn) return;
  window.addEventListener('scroll', () => btn.classList.toggle('visible', window.scrollY > 400), { passive: true });
  btn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
})();

/* ===================================================
   BOTTOM NAV — active highlight
   =================================================== */
(function () {
  const items    = document.querySelectorAll('.bn-item');
  const sections = document.querySelectorAll('section[id]');
  function update() {
    let cur = '';
    sections.forEach(s => { if (window.scrollY >= s.offsetTop - 100) cur = s.id; });
    items.forEach(a => a.classList.toggle('active', a.getAttribute('href') === `#${cur}`));
  }
  window.addEventListener('scroll', update, { passive: true });
  update();
})();
