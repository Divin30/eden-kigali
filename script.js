document.addEventListener('DOMContentLoaded', () => {
  const year = new Date().getFullYear();
  const header = document.querySelector('.site-header');
  const navShell = document.querySelector('.nav-shell');
  const navToggle = document.querySelector('.nav-toggle');
  const navLinks = document.querySelectorAll('.nav-links a');
  const languageSelect = document.querySelector('.language-picker select');

  const translations = {
    en: {
      pageTitle: 'EDEN Kigali',
      pageDescription: 'EDEN Kigali luxury residential property landing page',
      mainNavigation: 'Main navigation',
      home: 'EDEN Kigali home',
      logoAlt: 'EDEN logo',
      toggleNavigation: 'Toggle navigation',
      project: 'Project',
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
      mainNavigation: 'Navigation principale',
      home: 'Accueil EDEN Kigali',
      logoAlt: 'Logo EDEN',
      toggleNavigation: 'Ouvrir ou fermer la navigation',
      project: 'Projet',
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
      mainNavigation: 'Menyu kuu',
      home: 'Mwanzo wa EDEN Kigali',
      logoAlt: 'Nembo ya EDEN',
      toggleNavigation: 'Fungua au funga menyu',
      project: 'Mradi',
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
      mainNavigation: 'التنقل الرئيسي',
      home: 'الصفحة الرئيسية لإيدن كيغالي',
      logoAlt: 'شعار إيدن',
      toggleNavigation: 'فتح أو إغلاق القائمة',
      project: 'المشروع',
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
      mainNavigation: '主导航',
      home: 'EDEN 基加利主页',
      logoAlt: 'EDEN 标志',
      toggleNavigation: '打开或关闭导航',
      project: '项目',
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

    document.title = dictionary.pageTitle;
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

  updateHeaderState();
  window.addEventListener('scroll', updateHeaderState, { passive: true });
  window.addEventListener('resize', () => {
    if (window.innerWidth > 980) {
      closeMenu();
    }
  });

  console.log(`EDEN Kigali ready — ${year}`);
});
