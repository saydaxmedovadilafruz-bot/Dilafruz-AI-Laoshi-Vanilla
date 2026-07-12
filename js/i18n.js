const translations = {
  uz: {
    "nav.about": "Men haqimda",
    "nav.services": "Xizmatlar",
    "nav.project": "AI Laoshi",
    "nav.contact": "Bog'lanish",
    "hero.name": "Dilafruz",
    "hero.tagline": "O'zbekistonda sun'iy intellekt bilan xitoy tilini o'qitadigan birinchi ustoz",
    "hero.cta": "Bog'laning",
    "about.title": "Men haqimda",
    "about.text": "Salom, men Dilafruzman. O'zbekistonda ilk bor xitoy tilini sun'iy intellekt (AI) yordamida o'qitishni yo'lga qo'ygan ustozman. Maqsadim — an'anaviy o'qitish uslubini zamonaviy AI texnologiyalari bilan birlashtirib, xitoy tilini har kimga qulay va qiziqarli qilib o'rgatish.",
    "services.title": "Xizmatlar va kurslar",
    "services.item1.title": "Individual darslar",
    "services.item1.text": "Har bir o'quvchiga moslashtirilgan shaxsiy dars rejasi va tezkor natija.",
    "services.item2.title": "Guruh darslari",
    "services.item2.text": "Qiziqarli, interaktiv mashg'ulotlar orqali guruh bo'lib xitoy tilini o'rganish.",
    "services.item3.title": "AI bilan mashq va HSK tayyorlov",
    "services.item3.text": "Sun'iy intellekt yordamida talaffuz, lug'at va HSK imtihoniga tayyorgarlik.",
    "project.title": "AI Laoshi loyihasi",
    "project.brand": "Hanzi Jie",
    "project.text": "AI Laoshi — sun'iy intellekt yordamida xitoy tilini o'qitish loyihasi. \"Hanzi Jie\" brendi ostida darslar, materiallar va foydali kontent ijtimoiy tarmoqlarda taqdim etiladi.",
    "project.cta": "Loyihani kuzatib boring",
    "contact.title": "Bog'lanish",
    "contact.text": "Savollaringiz bormi? Ijtimoiy tarmoqlar orqali bog'laning.",
    "footer.text": "Barcha huquqlar himoyalangan.",
  },
  en: {
    "nav.about": "About",
    "nav.services": "Services",
    "nav.project": "AI Laoshi",
    "nav.contact": "Contact",
    "hero.name": "Dilafruz",
    "hero.tagline": "Uzbekistan's first Chinese language teacher powered by AI",
    "hero.cta": "Get in touch",
    "about.title": "About me",
    "about.text": "Hi, I'm Dilafruz. I'm the first teacher in Uzbekistan to teach Chinese with the help of artificial intelligence. My mission is to blend traditional teaching with modern AI technology to make learning Chinese enjoyable and accessible for everyone.",
    "services.title": "Services & Courses",
    "services.item1.title": "Private lessons",
    "services.item1.text": "A personalized study plan tailored to each student for faster results.",
    "services.item2.title": "Group lessons",
    "services.item2.text": "Learn Chinese together through fun, interactive group sessions.",
    "services.item3.title": "AI practice & HSK prep",
    "services.item3.text": "Pronunciation, vocabulary, and HSK exam preparation with AI assistance.",
    "project.title": "AI Laoshi Project",
    "project.brand": "Hanzi Jie",
    "project.text": "AI Laoshi is a project that teaches Chinese with the help of artificial intelligence. Under the \"Hanzi Jie\" brand, lessons and helpful content are shared across social media.",
    "project.cta": "Follow the project",
    "contact.title": "Contact",
    "contact.text": "Have questions? Reach out through social media.",
    "footer.text": "All rights reserved.",
  },
  zh: {
    "nav.about": "关于我",
    "nav.services": "课程服务",
    "nav.project": "AI Laoshi",
    "nav.contact": "联系方式",
    "hero.name": "Dilafruz",
    "hero.tagline": "乌兹别克斯坦首位借助人工智能教授汉语的老师",
    "hero.cta": "联系我",
    "about.title": "关于我",
    "about.text": "你好，我是Dilafruz。我是乌兹别克斯坦第一位借助人工智能（AI）教授汉语的老师。我的目标是将传统教学方法与现代人工智能技术相结合，让每个人都能轻松愉快地学习汉语。",
    "services.title": "课程与服务",
    "services.item1.title": "一对一课程",
    "services.item1.text": "为每位学生量身定制学习计划，快速见效。",
    "services.item2.title": "小组课程",
    "services.item2.text": "通过有趣的互动课程，与其他学员一起学习汉语。",
    "services.item3.title": "AI练习与HSK备考",
    "services.item3.text": "借助人工智能进行发音、词汇练习及HSK考试备考。",
    "project.title": "AI Laoshi 项目",
    "project.brand": "Hanzi Jie",
    "project.text": "AI Laoshi 是一个借助人工智能教授汉语的项目。在\"Hanzi Jie\"品牌下，我们在社交媒体上分享课程和实用内容。",
    "project.cta": "关注该项目",
    "contact.title": "联系方式",
    "contact.text": "有问题吗？欢迎通过社交媒体联系我。",
    "footer.text": "版权所有。",
  },
};

const STORAGE_KEY = "dilafruz-lang";

function getInitialLang() {
  try {
    return localStorage.getItem(STORAGE_KEY) || "uz";
  } catch {
    return "uz";
  }
}

function applyLang(lang) {
  const dict = translations[lang] || translations.uz;

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (dict[key]) el.textContent = dict[key];
  });

  document.querySelectorAll("[data-i18n-attr]").forEach((el) => {
    const [attr, key] = el.getAttribute("data-i18n-attr").split(":");
    if (dict[key]) el.setAttribute(attr, dict[key]);
  });

  document.querySelectorAll(".navbar__lang-btn").forEach((btn) => {
    btn.classList.toggle("is-active", btn.dataset.lang === lang);
  });

  document.documentElement.setAttribute("lang", lang);
  try {
    localStorage.setItem(STORAGE_KEY, lang);
  } catch {
    /* localStorage may be unavailable when opened as a local file in some browsers */
  }
}

function initI18n() {
  const initialLang = getInitialLang();
  applyLang(initialLang);

  document.querySelectorAll(".navbar__lang-btn").forEach((btn) => {
    btn.addEventListener("click", () => applyLang(btn.dataset.lang));
  });
}
