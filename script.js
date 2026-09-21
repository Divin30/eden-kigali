document.addEventListener('DOMContentLoaded', () => {
  const year = new Date().getFullYear();
  const header = document.querySelector('.site-header');
  const navShell = document.querySelector('.nav-shell');
  const navToggle = document.querySelector('.nav-toggle');
  const navLinks = document.querySelectorAll('.nav-links a');
  const languageSelect = document.querySelector('.language-picker select');
  const heroVideo = document.querySelector('.hero video');

  const loadHeroVideo = () => {
    if (!heroVideo) return;

    const connection = navigator.connection || navigator.mozConnection || navigator.webkitConnection;
    const isDataSaverEnabled = connection && connection.saveData;
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (isDataSaverEnabled || prefersReducedMotion) {
      heroVideo.removeAttribute('autoplay');
      heroVideo.preload = 'none';
      heroVideo.load();
      return;
    }

    const source = heroVideo.querySelector('source[data-src]');
    if (!source) return;

    source.src = source.dataset.src;
    source.removeAttribute('data-src');
    heroVideo.preload = 'metadata';
    heroVideo.load();
  };

  const translations = {
    en: {
      pageTitle: 'EDEN Kigali',
      pageDescription: 'EDEN Kigali luxury residential property landing page',
      aboutPageTitle: 'About EDEN Kigali',
      aboutPageDescription: 'Discover the EDEN Kigali vision, community, and green lifestyle.',
      aboutPageIntro: 'A new standard of green, refined living in the heart of Kigali.',
      bookingPageTitle: 'Book a Viewing | EDEN Kigali',
      bookingPageDescription: 'Book a private viewing at EDEN Kigali through WhatsApp.',
      bookingEyebrow: 'Private viewings',
      bookingTitle: 'The fastest way to book',
      bookingDescription: 'Chat with our EDEN Kigali team directly on WhatsApp. We will help you choose the perfect home and arrange your private viewing.',
      whatsappButton: 'Chat on WhatsApp',
      whatsappLabel: 'Chat with EDEN Kigali on WhatsApp',
      orCall: 'Or call us directly at:',
      mainNavigation: 'Main navigation',
      home: 'EDEN Kigali home',
      homeNav: 'Home',
      logoAlt: 'EDEN logo',
      toggleNavigation: 'Toggle navigation',
      about: 'About',
      aboutEyebrow: 'About EDEN Kigali',
      aboutHeadline: 'Where nature meets modern living.',
      aboutImageCaption: 'Green refined living',
      aboutLocation: 'KIGALI · RWANDA',
      aboutImageAlt: 'EDEN Kigali residence',
      aboutIntro: 'EDEN Kigali is a visionary residential development in the heart of Rwanda’s capital, offering a unique blend of nature, comfort, and modern living. Inspired by the idea of an “Eden,” it promotes eco-friendly living through sustainable materials and energy-efficient design. From minimalist studios to lush penthouse garden suites, EDEN Kigali reflects both Rwanda’s cultural richness and contemporary global aesthetics.',
      aboutCommunity: 'More than just a place to live, EDEN Kigali fosters a sense of community and belonging. Residents wake up to greenery, enjoy local coffee, and connect with warm, welcoming neighbors. Whether you’re an ambitious entrepreneur, an expatriate professional, or a local family, EDEN Kigali invites you to experience Kigali’s green lifestyle—where urban life and nature exist in harmony.',
      plans: 'Plans',
      gallery: 'Gallery',
      contact: 'Contact',
      selectLanguage: 'Select language',
      languageSelector: 'Language selector',
      bookViewing: 'Book a viewing',
      projectVideo: 'EDEN Kigali project video',
      apartmentPlans: 'Apartment plans',
      chooseHome: 'Choose your home',
      studio: 'Studio',
      studioDescription: 'Compact and refined living.',
      studioAlt: 'Studio apartment',
      oneBedroom: '1 BR',
      oneBedroomDescription: 'Comfortable, functional, and elegant.',
      oneBedroomAlt: '1 bedroom apartment',
      twoBedroom: '2 BR',
      twoBedroomDescription: 'Room for family living and entertaining.',
      twoBedroomAlt: '2 bedroom apartment',
      threeBedroom: '3 BR',
      threeBedroomDescription: 'Spacious luxury with flexibility.',
      threeBedroomAlt: '3 bedroom apartment',
      penthouse: 'Penthouse',
      penthouseDescription: 'Signature living with sweeping views.',
      penthouseAlt: 'Penthouse apartment',
      lifestyle: 'A glimpse into the lifestyle',
      facadeAlt: 'EDEN Kigali facade',
      studioViewAlt: 'EDEN Kigali studio view',
      apartmentDetailAlt: 'EDEN Kigali apartment detail',
      buildingAlt: 'EDEN Kigali building exterior',
      footerDescription: 'Luxury residences for modern Kigali living.',
      visit: 'Visit',
      locationName: 'Eden Apartment',
      location: '3325+7M3, Kigali, Rwanda',
      locationMapLabel: 'Open Eden Apartment in Google Maps',
      privateTour: 'Schedule a private tour',
      instagram: 'Instagram',
      instagramLabel: 'Follow EDEN Rwanda Sales on Instagram',
      copyright: '© 2026 EDEN KIGALI APARTMENT · KIGALI, RWANDA.'
    },
    fr: {
      pageTitle: 'EDEN Kigali',
      pageDescription: 'Page de présentation des résidences de luxe EDEN Kigali',
      aboutPageTitle: 'À propos d’EDEN Kigali',
      aboutPageDescription: 'Découvrez la vision, la communauté et le mode de vie vert d’EDEN Kigali.',
      aboutPageIntro: 'Un nouvel art de vivre vert et raffiné au cœur de Kigali.',
      bookingPageTitle: 'Réserver une visite | EDEN Kigali',
      bookingPageDescription: 'Réservez une visite privée à EDEN Kigali via WhatsApp.',
      bookingEyebrow: 'Visites privées',
      bookingTitle: 'La façon la plus rapide de réserver',
      bookingDescription: 'Discutez directement avec l’équipe EDEN Kigali sur WhatsApp. Nous vous aiderons à choisir le logement idéal et à organiser votre visite privée.',
      whatsappButton: 'Discuter sur WhatsApp',
      whatsappLabel: 'Discuter avec EDEN Kigali sur WhatsApp',
      orCall: 'Ou appelez-nous directement au :',
      mainNavigation: 'Navigation principale',
      home: 'Accueil EDEN Kigali',
      homeNav: 'Accueil',
      logoAlt: 'Logo EDEN',
      toggleNavigation: 'Ouvrir ou fermer la navigation',
      about: 'À propos',
      aboutEyebrow: 'À propos d’EDEN Kigali',
      aboutHeadline: 'Là où la nature rencontre la vie moderne.',
      aboutImageCaption: 'Un art de vivre vert et raffiné',
      aboutLocation: 'KIGALI · RWANDA',
      aboutImageAlt: 'Résidence EDEN Kigali',
      aboutIntro: 'EDEN Kigali est un projet résidentiel visionnaire au cœur de la capitale du Rwanda, offrant un équilibre unique entre nature, confort et vie moderne. Inspiré par l’idée d’un « Eden », il favorise un mode de vie écologique grâce à des matériaux durables et une conception économe en énergie. Des studios minimalistes aux suites-jardins luxueuses des penthouses, EDEN Kigali reflète la richesse culturelle du Rwanda et l’esthétique contemporaine internationale.',
      aboutCommunity: 'Bien plus qu’un lieu de vie, EDEN Kigali crée un véritable sentiment de communauté et d’appartenance. Les résidents se réveillent entourés de verdure, savourent le café local et rencontrent des voisins chaleureux. Que vous soyez entrepreneur ambitieux, professionnel expatrié ou famille locale, EDEN Kigali vous invite à découvrir le mode de vie vert de Kigali, où la ville et la nature vivent en harmonie.',
      plans: 'Plans',
      gallery: 'Galerie',
      contact: 'Contact',
      selectLanguage: 'Choisir la langue',
      languageSelector: 'Sélecteur de langue',
      bookViewing: 'Réserver une visite',
      projectVideo: 'Vidéo du projet EDEN Kigali',
      apartmentPlans: 'Plans des appartements',
      chooseHome: 'Choisissez votre logement',
      studio: 'Studio',
      studioDescription: 'Un espace compact et raffiné.',
      studioAlt: 'Appartement studio',
      oneBedroom: '1 chambre',
      oneBedroomDescription: 'Confortable, fonctionnel et élégant.',
      oneBedroomAlt: 'Appartement d’une chambre',
      twoBedroom: '2 chambres',
      twoBedroomDescription: 'De l’espace pour vivre et recevoir en famille.',
      twoBedroomAlt: 'Appartement de deux chambres',
      threeBedroom: '3 chambres',
      threeBedroomDescription: 'Un luxe spacieux et flexible.',
      threeBedroomAlt: 'Appartement de trois chambres',
      penthouse: 'Penthouse',
      penthouseDescription: 'Un art de vivre unique avec des vues panoramiques.',
      penthouseAlt: 'Appartement penthouse',
      lifestyle: 'Un aperçu de notre art de vivre',
      facadeAlt: 'Façade d’EDEN Kigali',
      studioViewAlt: 'Vue du studio EDEN Kigali',
      apartmentDetailAlt: 'Détail d’un appartement EDEN Kigali',
      buildingAlt: 'Extérieur du bâtiment EDEN Kigali',
      footerDescription: 'Des résidences de luxe pour la vie moderne à Kigali.',
      visit: 'Visiter',
      locationName: 'Eden Apartment',
      location: '3325+7M3, Kigali, Rwanda',
      locationMapLabel: 'Ouvrir Eden Apartment dans Google Maps',
      privateTour: 'Planifiez une visite privée',
      instagram: 'Instagram',
      instagramLabel: 'Suivre EDEN Rwanda Sales sur Instagram',
      copyright: '© 2026 EDEN KIGALI APARTMENT · KIGALI, RWANDA.'
    },
    sw: {
      pageTitle: 'EDEN Kigali',
      pageDescription: 'Ukurasa wa makazi ya kifahari wa EDEN Kigali',
      aboutPageTitle: 'Kuhusu EDEN Kigali',
      aboutPageDescription: 'Gundua maono, jamii na maisha ya kijani ya EDEN Kigali.',
      aboutPageIntro: 'Kiwango kipya cha maisha ya kijani na ustaarabu katikati ya Kigali.',
      bookingPageTitle: 'Weka miadi ya kutembelea | EDEN Kigali',
      bookingPageDescription: 'Weka miadi ya kutembelea EDEN Kigali kupitia WhatsApp.',
      bookingEyebrow: 'Ziara za kibinafsi',
      bookingTitle: 'Njia ya haraka zaidi ya kuweka miadi',
      bookingDescription: 'Zungumza moja kwa moja na timu ya EDEN Kigali kwenye WhatsApp. Tutakusaidia kuchagua nyumba inayofaa na kupanga ziara yako ya kibinafsi.',
      whatsappButton: 'Ongea kwenye WhatsApp',
      whatsappLabel: 'Ongea na EDEN Kigali kwenye WhatsApp',
      orCall: 'Au tupigie moja kwa moja:',
      mainNavigation: 'Menyu kuu',
      home: 'Mwanzo wa EDEN Kigali',
      homeNav: 'Mwanzo',
      logoAlt: 'Nembo ya EDEN',
      toggleNavigation: 'Fungua au funga menyu',
      about: 'Kuhusu',
      aboutEyebrow: 'Kuhusu EDEN Kigali',
      aboutHeadline: 'Ambapo asili hukutana na maisha ya kisasa.',
      aboutImageCaption: 'Maisha ya kijani yenye ustaarabu',
      aboutLocation: 'KIGALI · RWANDA',
      aboutImageAlt: 'Makazi ya EDEN Kigali',
      aboutIntro: 'EDEN Kigali ni mradi wa makazi wa kipekee katikati ya mji mkuu wa Rwanda, unaochanganya asili, starehe na maisha ya kisasa. Ukiongozwa na wazo la “Edeni,” unahamasisha maisha rafiki kwa mazingira kupitia vifaa endelevu na usanifu unaotumia nishati kwa ufanisi. Kuanzia studio rahisi hadi penthouse zenye bustani, EDEN Kigali unaonyesha utajiri wa utamaduni wa Rwanda pamoja na uzuri wa kisasa wa dunia.',
      aboutCommunity: 'EDEN Kigali si mahali pa kuishi tu; unajenga hisia ya jamii na umiliki. Wakazi huamka wakizungukwa na kijani, hufurahia kahawa ya hapa na kuungana na majirani wachangamfu. Iwe wewe ni mjasiriamali mwenye malengo, mtaalamu kutoka nje au familia ya hapa, EDEN Kigali inakualika ufurahie maisha ya kijani ya Kigali, ambako mji na asili vinaishi kwa maelewano.',
      plans: 'Mipango',
      gallery: 'Picha',
      contact: 'Mawasiliano',
      selectLanguage: 'Chagua lugha',
      languageSelector: 'Kiteuzi cha lugha',
      bookViewing: 'Weka miadi ya kutembelea',
      projectVideo: 'Video ya mradi wa EDEN Kigali',
      apartmentPlans: 'Mipango ya vyumba',
      chooseHome: 'Chagua nyumba yako',
      studio: 'Studio',
      studioDescription: 'Maisha yenye nafasi ndogo na ya kifahari.',
      studioAlt: 'Chumba cha studio',
      oneBedroom: 'Chumba 1',
      oneBedroomDescription: 'Starehe, utendaji na umaridadi.',
      oneBedroomAlt: 'Ghorofa ya chumba kimoja',
      twoBedroom: 'Vyumba 2',
      twoBedroomDescription: 'Nafasi kwa maisha ya familia na wageni.',
      twoBedroomAlt: 'Ghorofa ya vyumba viwili',
      threeBedroom: 'Vyumba 3',
      threeBedroomDescription: 'Anasa yenye nafasi na unyumbufu.',
      threeBedroomAlt: 'Ghorofa ya vyumba vitatu',
      penthouse: 'Penthouse',
      penthouseDescription: 'Maisha ya kipekee yenye mandhari pana.',
      penthouseAlt: 'Ghorofa ya penthouse',
      lifestyle: 'Mwonekano wa maisha yetu',
      facadeAlt: 'Mwonekano wa mbele wa EDEN Kigali',
      studioViewAlt: 'Mwonekano wa studio ya EDEN Kigali',
      apartmentDetailAlt: 'Maelezo ya ghorofa ya EDEN Kigali',
      buildingAlt: 'Nje ya jengo la EDEN Kigali',
      footerDescription: 'Makazi ya kifahari kwa maisha ya kisasa Kigali.',
      visit: 'Tembelea',
      locationName: 'Eden Apartment',
      location: '3325+7M3, Kigali, Rwanda',
      locationMapLabel: 'Fungua Eden Apartment kwenye Google Maps',
      privateTour: 'Panga ziara ya kibinafsi',
      instagram: 'Instagram',
      instagramLabel: 'Fuata EDEN Rwanda Sales kwenye Instagram',
      copyright: '© 2026 EDEN KIGALI APARTMENT · KIGALI, RWANDA.'
    },
    ar: {
      pageTitle: 'إيدن كيغالي',
      pageDescription: 'الصفحة التعريفية للمساكن الفاخرة إيدن كيغالي',
      aboutPageTitle: 'عن إيدن كيغالي',
      aboutPageDescription: 'اكتشف رؤية إيدن كيغالي ومجتمعه وأسلوب حياته الأخضر.',
      aboutPageIntro: 'معيار جديد لحياة خضراء راقية في قلب كيغالي.',
      bookingPageTitle: 'احجز زيارة | إيدن كيغالي',
      bookingPageDescription: 'احجز زيارة خاصة في إيدن كيغالي عبر واتساب.',
      bookingEyebrow: 'زيارات خاصة',
      bookingTitle: 'أسرع طريقة للحجز',
      bookingDescription: 'تحدث مباشرة مع فريق إيدن كيغالي عبر واتساب. سنساعدك في اختيار المنزل المثالي وترتيب زيارتك الخاصة.',
      whatsappButton: 'الدردشة عبر واتساب',
      whatsappLabel: 'الدردشة مع إيدن كيغالي عبر واتساب',
      orCall: 'أو اتصل بنا مباشرة على:',
      mainNavigation: 'التنقل الرئيسي',
      home: 'الصفحة الرئيسية لإيدن كيغالي',
      homeNav: 'الرئيسية',
      logoAlt: 'شعار إيدن',
      toggleNavigation: 'فتح أو إغلاق القائمة',
      about: 'عن إيدن',
      aboutEyebrow: 'عن إيدن كيغالي',
      aboutHeadline: 'حيث تلتقي الطبيعة بالحياة العصرية.',
      aboutImageCaption: 'حياة خضراء راقية',
      aboutLocation: 'كيغالي · رواندا',
      aboutImageAlt: 'مساكن إيدن كيغالي',
      aboutIntro: 'إيدن كيغالي هو مشروع سكني طموح في قلب عاصمة رواندا، يجمع بشكل فريد بين الطبيعة والراحة والحياة العصرية. مستوحى من فكرة «الجنة»، يشجع على الحياة الصديقة للبيئة من خلال المواد المستدامة والتصميم الموفر للطاقة. من الاستوديوهات البسيطة إلى أجنحة البنتهاوس الفاخرة ذات الحدائق، يعكس إيدن كيغالي غنى ثقافة رواندا وجماليات العالم المعاصر.',
      aboutCommunity: 'إيدن كيغالي أكثر من مجرد مكان للسكن؛ فهو يعزز الشعور بالمجتمع والانتماء. يستيقظ السكان وسط الخضرة، ويستمتعون بالقهوة المحلية، ويتواصلون مع جيران ودودين. سواء كنت رائد أعمال طموحاً أو مهنياً مغترباً أو عائلة محلية، يدعوك إيدن كيغالي لاكتشاف أسلوب الحياة الأخضر في كيغالي، حيث تعيش المدينة والطبيعة في انسجام.',
      plans: 'المخططات',
      gallery: 'المعرض',
      contact: 'اتصل بنا',
      selectLanguage: 'اختر اللغة',
      languageSelector: 'محدد اللغة',
      bookViewing: 'احجز زيارة',
      projectVideo: 'فيديو مشروع إيدن كيغالي',
      apartmentPlans: 'مخططات الشقق',
      chooseHome: 'اختر منزلك',
      studio: 'استوديو',
      studioDescription: 'معيشة مدمجة وراقية.',
      studioAlt: 'شقة استوديو',
      oneBedroom: 'غرفة واحدة',
      oneBedroomDescription: 'مريحة وعملية وأنيقة.',
      oneBedroomAlt: 'شقة بغرفة نوم واحدة',
      twoBedroom: 'غرفتان',
      twoBedroomDescription: 'مساحة للحياة العائلية واستقبال الضيوف.',
      twoBedroomAlt: 'شقة بغرفتي نوم',
      threeBedroom: 'ثلاث غرف',
      threeBedroomDescription: 'فخامة واسعة ومرنة.',
      threeBedroomAlt: 'شقة بثلاث غرف نوم',
      penthouse: 'بنتهاوس',
      penthouseDescription: 'معيشة مميزة مع إطلالات واسعة.',
      penthouseAlt: 'شقة بنتهاوس',
      lifestyle: 'لمحة عن أسلوب الحياة',
      facadeAlt: 'واجهة إيدن كيغالي',
      studioViewAlt: 'إطلالة استوديو إيدن كيغالي',
      apartmentDetailAlt: 'تفاصيل شقة إيدن كيغالي',
      buildingAlt: 'الواجهة الخارجية لمبنى إيدن كيغالي',
      footerDescription: 'مساكن فاخرة للحياة العصرية في كيغالي.',
      visit: 'زيارة',
      locationName: 'شقق إيدن',
      location: '3325+7M3، كيغالي، رواندا',
      locationMapLabel: 'فتح شقق إيدن في خرائط Google',
      privateTour: 'حدّد موعداً لجولة خاصة',
      instagram: 'إنستغرام',
      instagramLabel: 'تابع EDEN Rwanda Sales على إنستغرام',
      copyright: '© 2026 شقق إيدن كيغالي · كيغالي، رواندا'
    },
    zh: {
      pageTitle: 'EDEN 基加利',
      pageDescription: 'EDEN 基加利豪华住宅项目介绍页',
      aboutPageTitle: '关于 EDEN 基加利',
      aboutPageDescription: '了解 EDEN 基加利的愿景、社区和绿色生活方式。',
      aboutPageIntro: '位于基加利中心的绿色精致生活新标准。',
      bookingPageTitle: '预约看房 | EDEN 基加利',
      bookingPageDescription: '通过 WhatsApp 预约参观 EDEN 基加利。',
      bookingEyebrow: '私人参观',
      bookingTitle: '最快的预约方式',
      bookingDescription: '直接在 WhatsApp 联系 EDEN 基加利团队。我们将帮助您选择理想住宅并安排私人参观。',
      whatsappButton: '在 WhatsApp 聊天',
      whatsappLabel: '在 WhatsApp 联系 EDEN 基加利',
      orCall: '或直接致电：',
      mainNavigation: '主导航',
      home: 'EDEN 基加利主页',
      homeNav: '首页',
      logoAlt: 'EDEN 标志',
      toggleNavigation: '打开或关闭导航',
      about: '关于我们',
      aboutEyebrow: '关于 EDEN 基加利',
      aboutHeadline: '让自然与现代生活相遇。',
      aboutImageCaption: '绿色而精致的生活',
      aboutLocation: '基加利 · 卢旺达',
      aboutImageAlt: 'EDEN 基加利住宅',
      aboutIntro: 'EDEN 基加利是位于卢旺达首都中心的前瞻性住宅项目，将自然、舒适与现代生活融为一体。项目以“伊甸园”为灵感，通过可持续材料和节能设计倡导环保生活。从极简单间公寓到拥有花园的豪华顶层套房，EDEN 基加利兼具卢旺达丰富的文化底蕴与当代国际美学。',
      aboutCommunity: 'EDEN 基加利不仅是居住的地方，更营造了社区感和归属感。居民在绿意中醒来，享用当地咖啡，与热情友好的邻居交流。无论您是充满抱负的企业家、外籍专业人士，还是本地家庭，EDEN 基加利都诚邀您体验基加利的绿色生活方式，让城市与自然和谐共存。',
      plans: '户型',
      gallery: '图库',
      contact: '联系我们',
      selectLanguage: '选择语言',
      languageSelector: '语言选择器',
      bookViewing: '预约看房',
      projectVideo: 'EDEN 基加利项目视频',
      apartmentPlans: '公寓户型',
      chooseHome: '选择您的家',
      studio: '单间公寓',
      studioDescription: '紧凑而精致的生活空间。',
      studioAlt: '单间公寓',
      oneBedroom: '一居室',
      oneBedroomDescription: '舒适、实用而优雅。',
      oneBedroomAlt: '一居室公寓',
      twoBedroom: '两居室',
      twoBedroomDescription: '适合家庭生活和招待宾客。',
      twoBedroomAlt: '两居室公寓',
      threeBedroom: '三居室',
      threeBedroomDescription: '宽敞、灵活的奢华空间。',
      threeBedroomAlt: '三居室公寓',
      penthouse: '顶层公寓',
      penthouseDescription: '享有开阔景观的标志性住宅。',
      penthouseAlt: '顶层公寓',
      lifestyle: '一览优雅生活方式',
      facadeAlt: 'EDEN 基加利建筑外观',
      studioViewAlt: 'EDEN 基加利单间公寓景观',
      apartmentDetailAlt: 'EDEN 基加利公寓细节',
      buildingAlt: 'EDEN 基加利建筑外部',
      footerDescription: '为基加利现代生活打造的豪华住宅。',
      visit: '到访',
      locationName: 'Eden 公寓',
      location: '3325+7M3，基加利，卢旺达',
      locationMapLabel: '在 Google 地图中打开 Eden 公寓',
      privateTour: '预约私人参观',
      instagram: 'Instagram',
      instagramLabel: '在 Instagram 关注 EDEN Rwanda Sales',
      copyright: '© 2026 EDEN 基加利公寓 · 基加利，卢旺达'
    }
  };

  const applyLanguage = (language) => {
    const dictionary = translations[language] || translations.en;
    const isArabic = language === 'ar';
    document.documentElement.lang = language;
    document.documentElement.dir = isArabic ? 'rtl' : 'ltr';

    document.querySelectorAll('[data-i18n]').forEach((element) => {
      const key = element.dataset.i18n;
      if (dictionary[key]) element.textContent = dictionary[key];
    });

    document.querySelectorAll('[data-i18n-alt]').forEach((element) => {
      const key = element.dataset.i18nAlt;
      if (dictionary[key]) element.setAttribute('alt', dictionary[key]);
    });

    document.querySelectorAll('[data-i18n-aria-label]').forEach((element) => {
      const key = element.dataset.i18nAriaLabel;
      if (dictionary[key]) element.setAttribute('aria-label', dictionary[key]);
    });

    document.querySelectorAll('[data-i18n-content]').forEach((element) => {
      const key = element.dataset.i18nContent;
      if (dictionary[key]) element.setAttribute('content', dictionary[key]);
    });

    if (document.body.classList.contains('about-page')) {
      document.title = dictionary.aboutPageTitle;
    } else if (document.body.classList.contains('booking-page')) {
      document.title = dictionary.bookingPageTitle;
    } else {
      document.title = dictionary.pageTitle;
    }
    localStorage.setItem('eden-language', language);
  };

  const updateHeaderState = () => {
    const scrolled = window.scrollY > 80;
    document.body.classList.toggle('scrolled', scrolled);
    if (header) {
      header.classList.toggle('scrolled', scrolled);
    }
  };

  const closeMenu = () => {
    if (!navShell || !navToggle) return;
    navShell.classList.remove('nav-open');
    navToggle.setAttribute('aria-expanded', 'false');
  };

  const toggleMenu = () => {
    if (!navShell || !navToggle) return;
    const isOpen = !navShell.classList.contains('nav-open');
    navShell.classList.toggle('nav-open', isOpen);
    navToggle.setAttribute('aria-expanded', String(isOpen));
  };

  if (navToggle) {
    navToggle.addEventListener('click', (event) => {
      event.preventDefault();
      if (window.innerWidth <= 980) {
        toggleMenu();
      }
    });
  }

  navLinks.forEach((link) => {
    link.addEventListener('click', () => {
      if (window.innerWidth <= 980) {
        closeMenu();
      }
    });
  });

  if (languageSelect) {
    const savedLanguage = localStorage.getItem('eden-language') || 'en';
    languageSelect.value = translations[savedLanguage] ? savedLanguage : 'en';
    applyLanguage(languageSelect.value);
    languageSelect.addEventListener('change', (event) => {
      applyLanguage(event.target.value);
    });
  }

  loadHeroVideo();
  updateHeaderState();
  window.addEventListener('scroll', updateHeaderState, { passive: true });
  window.addEventListener('resize', () => {
    if (window.innerWidth > 980) {
      closeMenu();
    }
  });

  console.log(`EDEN Kigali ready — ${year}`);
});
