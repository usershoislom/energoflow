export type Lang = "en" | "ru" | "uz";

export const CONTENT = {
  en: {
    langLabel: "EN",
    nav: {
      about: "About",
      problem: "Problem",
      approach: "Approach",
      ai: "What AI does",
      architecture: "Architecture",
      result: "Outcome",
    },
    header: {
      tagline: "Intelligent layer for the power system",
    },
    hero: {
      eyebrow: "Power system of Uzbekistan",
      title: "AI platform for intelligent management of the energy flow",
      lead: "Energo Flow AI is a concept of an intelligent layer on top of the existing energy infrastructure: from data to decision, from decision to result.",
      motto: ["Forecast.", "Coordinate.", "Optimise."],
      ctaPrimary: "About the project",
      ctaSecondary: "Solution architecture",
    },
    about: {
      eyebrow: "About the project",
      title: "A platform for forecasting, analysing and coordinating energy resources",
      body: "The system brings together data on consumption, solar and wind generation, weather, smart meter readings, infrastructure condition and energy storage into a single picture.",
      quote:
        "Do not wait for an energy problem to appear — predict it and take the optimal decision in advance",
      sourcesLabel: "Data sources",
      sources: [
        "Energy consumption",
        "Solar and wind generation",
        "Weather conditions",
        "Smart meters",
        "Grid infrastructure",
        "Energy storage",
      ],
    },
    problem: {
      eyebrow: "Problem",
      title: "The country's power system is changing rapidly",
      items: [
        "Growing electricity consumption",
        "Rising industrial load",
        "Expansion of solar and wind generation",
        "Dependence of renewables on weather",
        "Growth of energy storage systems",
        "High load on individual grid segments",
        "Need for infrastructure modernisation",
        "Energy losses in transmission and distribution",
      ],
    },
    approach: {
      eyebrow: "Approach",
      title: "From production to coordination",
      body: "The task is not only to produce more electricity, but to coordinate the entire energy flow efficiently.",
      stages: ["Generation", "Transmission", "Storage", "Consumption"],
      note: "Energo Flow AI acts as an intelligent layer on top of the existing energy infrastructure.",
    },
    ai: {
      eyebrow: "What AI does",
      title: "Seven key functions based on unified data",
      items: [
        "Forecasts electricity consumption",
        "Forecasts renewable generation",
        "Detects anomalies and overloads",
        "Predicts equipment failures",
        "Optimises the use of storage systems",
        "Determines the optimal distribution",
        "Reduces peak loads and losses",
      ],
    },
    architecture: {
      eyebrow: "Solution architecture",
      title: "From data to decision",
      layers: [
        {
          label: "Data layer",
          items: ["Smart Meters", "Consumption", "Solar / Wind generation", "Weather"],
        },
        {
          label: "Energo Flow AI",
          items: ["Forecasting", "Anomaly Detection", "Optimisation", "Risk Prediction"],
        },
        { label: "Decision Engine", items: ["Decision making"] },
        { label: "Control action", items: ["Generation", "Storage", "Consumption"] },
      ],
    },
    forecast: {
      eyebrow: "Forecasting",
      title: "The core of the platform — predicting demand and generation before imbalance occurs",
      cards: [
        {
          title: "Consumption",
          body: "Electricity demand forecast by region and industry, accounting for seasonality and growing industrial load.",
        },
        {
          title: "Renewable generation",
          body: "Solar and wind output forecast based on weather conditions and meteorological data.",
        },
      ],
      note: "The forecast is calculated continuously and updated as new data arrives from sensors and weather stations.",
    },
    risks: {
      eyebrow: "Risks and anomalies",
      title: "Early warning instead of reacting to an outage",
      cards: [
        {
          title: "Anomalies",
          body: "Detection of deviations in consumption and generation that signal faults or losses.",
        },
        {
          title: "Overloads",
          body: "Early warning about potential overloads of individual grid segments.",
        },
        {
          title: "Equipment failures",
          body: "Prediction of likely infrastructure failures before an outage occurs.",
        },
      ],
    },
    optimization: {
      eyebrow: "Energy flow optimisation",
      title: "The Decision Engine acts in three directions simultaneously",
      cards: [
        {
          title: "Storage",
          body: "Optimal use of energy storage systems depending on the demand forecast.",
        },
        {
          title: "Distribution",
          body: "Determining the optimal distribution of consumption across regions and consumers.",
        },
        {
          title: "Peak loads",
          body: "Reducing peak loads and losses in transmission and distribution.",
        },
      ],
    },
    result: {
      eyebrow: "Outcome",
      title: "An optimised energy flow at every stage — from generation to consumption",
      items: [
        { title: "Fewer losses", body: "in transmission and distribution" },
        { title: "Sharper forecast", body: "of demand and renewable output" },
        { title: "Lower peaks", body: "of load on the grid" },
        { title: "Earlier signal", body: "about risks and failures" },
      ],
    },
    closing: {
      title: "An intelligent layer above the power system of Uzbekistan",
      body: "From data to decision, from decision to result.",
    },
    footer: {
      note: "Platform concept. The material is descriptive in nature.",
    },
  },

  ru: {
    langLabel: "RU",
    nav: {
      about: "О проекте",
      problem: "Проблема",
      approach: "Подход",
      ai: "Что делает AI",
      architecture: "Архитектура",
      result: "Результат",
    },
    header: {
      tagline: "Интеллектуальный слой энергосистемы",
    },
    hero: {
      eyebrow: "Энергетическая система Узбекистана",
      title: "AI-платформа интеллектуального управления энергетическим потоком",
      lead: "Energo Flow AI — концепция интеллектуального слоя над существующей энергетической инфраструктурой: от данных к решению, от решения к результату.",
      motto: ["Прогнозировать.", "Координировать.", "Оптимизировать."],
      ctaPrimary: "О проекте",
      ctaSecondary: "Архитектура решения",
    },
    about: {
      eyebrow: "О проекте",
      title: "Платформа прогнозирования, анализа и координации энергетических ресурсов",
      body: "Система объединяет данные о потреблении, солнечной и ветровой генерации, погоде, показаниях smart-метров, состоянии инфраструктуры и накопителях энергии в единую картину.",
      quote:
        "Не ждать возникновения энергетической проблемы — предсказывать её и принимать оптимальное решение заранее",
      sourcesLabel: "Источники данных",
      sources: [
        "Потребление энергии",
        "Солнечная и ветровая генерация",
        "Погодные условия",
        "Smart-метры",
        "Инфраструктура сети",
        "Накопители энергии",
      ],
    },
    problem: {
      eyebrow: "Проблема",
      title: "Энергетическая система страны быстро меняется",
      items: [
        "Рост потребления электроэнергии",
        "Увеличение промышленной нагрузки",
        "Развитие солнечной и ветровой генерации",
        "Зависимость ВИЭ от погодных условий",
        "Развитие систем накопления энергии",
        "Высокая нагрузка на отдельные участки сети",
        "Необходимость модернизации инфраструктуры",
        "Потери энергии при передаче и распределении",
      ],
    },
    approach: {
      eyebrow: "Подход",
      title: "От производства к координации",
      body: "Задача — не только производить больше электроэнергии, а эффективно координировать весь энергетический поток.",
      stages: ["Генерация", "Передача", "Накопление", "Потребление"],
      note: "Energo Flow AI выступает интеллектуальным слоем над существующей энергетической инфраструктурой.",
    },
    ai: {
      eyebrow: "Что делает AI",
      title: "Семь ключевых функций на основе объединённых данных",
      items: [
        "Прогнозирует потребление электроэнергии",
        "Прогнозирует генерацию из ВИЭ",
        "Обнаруживает аномалии и перегрузки",
        "Прогнозирует неисправности оборудования",
        "Оптимизирует использование накопителей",
        "Определяет оптимальное распределение",
        "Снижает пиковые нагрузки и потери",
      ],
    },
    architecture: {
      eyebrow: "Архитектура решения",
      title: "От данных к решению",
      layers: [
        {
          label: "Слой данных",
          items: ["Smart Meters", "Потребление", "Генерация Solar / Wind", "Погода"],
        },
        {
          label: "Energo Flow AI",
          items: ["Прогнозирование", "Anomaly Detection", "Оптимизация", "Risk Prediction"],
        },
        { label: "Decision Engine", items: ["Принятие решения"] },
        { label: "Управляющее воздействие", items: ["Генерация", "Накопление", "Потребление"] },
      ],
    },
    forecast: {
      eyebrow: "Прогнозирование",
      title: "Ядро платформы — предсказание спроса и генерации до возникновения дисбаланса",
      cards: [
        {
          title: "Потребление",
          body: "Прогноз спроса на электроэнергию по регионам и отраслям с учётом сезонности и роста промышленной нагрузки.",
        },
        {
          title: "Генерация ВИЭ",
          body: "Прогноз выработки солнечной и ветровой энергии с учётом погодных условий и данных метеослужб.",
        },
      ],
      note: "Прогноз рассчитывается непрерывно и обновляется по мере поступления новых данных с датчиков и метеостанций.",
    },
    risks: {
      eyebrow: "Риски и аномалии",
      title: "Раннее предупреждение вместо реакции на аварию",
      cards: [
        {
          title: "Аномалии",
          body: "Выявление отклонений в потреблении и генерации, сигнализирующих о сбоях или потерях.",
        },
        {
          title: "Перегрузки",
          body: "Раннее предупреждение о потенциальных перегрузках отдельных участков сети.",
        },
        {
          title: "Неисправности оборудования",
          body: "Прогноз вероятных отказов инфраструктуры до наступления аварии.",
        },
      ],
    },
    optimization: {
      eyebrow: "Оптимизация энергопотока",
      title: "Decision Engine принимает решения по трём направлениям одновременно",
      cards: [
        {
          title: "Накопители",
          body: "Оптимальное использование систем накопления энергии в зависимости от прогноза спроса.",
        },
        {
          title: "Распределение",
          body: "Определение оптимального распределения энергопотребления между регионами и потребителями.",
        },
        {
          title: "Пиковые нагрузки",
          body: "Снижение пиковых нагрузок и потерь при передаче и распределении энергии.",
        },
      ],
    },
    result: {
      eyebrow: "Результат",
      title: "Оптимизированный энергетический поток на всех этапах — от генерации до потребления",
      items: [
        { title: "Меньше потерь", body: "при передаче и распределении энергии" },
        { title: "Точнее прогноз", body: "спроса и выработки ВИЭ" },
        { title: "Меньше пиков", body: "нагрузки на сеть" },
        { title: "Раньше сигнал", body: "о рисках и неисправностях" },
      ],
    },
    closing: {
      title: "Интеллектуальный слой над энергетической системой Узбекистана",
      body: "От данных к решению, от решения к результату.",
    },
    footer: {
      note: "Концепция платформы. Материал носит описательный характер.",
    },
  },

  uz: {
    langLabel: "UZ",
    nav: {
      about: "Loyiha haqida",
      problem: "Muammo",
      approach: "Yondashuv",
      ai: "AI nima qiladi",
      architecture: "Arxitektura",
      result: "Natija",
    },
    header: {
      tagline: "Energotizim ustidagi intellektual qatlam",
    },
    hero: {
      eyebrow: "O'zbekiston energetika tizimi",
      title: "Energiya oqimini intellektual boshqarish uchun AI-platforma",
      lead: "Energo Flow AI — mavjud energetika infratuzilmasi ustidagi intellektual qatlam konsepsiyasi: ma'lumotdan qarorga, qarordan natijaga.",
      motto: ["Bashorat qilish.", "Muvofiqlashtirish.", "Optimallashtirish."],
      ctaPrimary: "Loyiha haqida",
      ctaSecondary: "Yechim arxitekturasi",
    },
    about: {
      eyebrow: "Loyiha haqida",
      title: "Energiya resurslarini bashorat qilish, tahlil qilish va muvofiqlashtirish platformasi",
      body: "Tizim iste'mol, quyosh va shamol generatsiyasi, ob-havo, smart-hisoblagichlar, tarmoq infratuzilmasi holati va energiya to'plagichlari haqidagi ma'lumotlarni yagona manzaraga birlashtiradi.",
      quote:
        "Energetik muammo yuzaga kelishini kutmaslik — uni oldindan bashorat qilib, optimal qarorni avvaldan qabul qilish",
      sourcesLabel: "Ma'lumot manbalari",
      sources: [
        "Energiya iste'moli",
        "Quyosh va shamol generatsiyasi",
        "Ob-havo sharoitlari",
        "Smart-hisoblagichlar",
        "Tarmoq infratuzilmasi",
        "Energiya to'plagichlari",
      ],
    },
    problem: {
      eyebrow: "Muammo",
      title: "Mamlakat energetika tizimi tez o'zgarmoqda",
      items: [
        "Elektr energiyasi iste'molining o'sishi",
        "Sanoat yukining ortishi",
        "Quyosh va shamol generatsiyasining rivojlanishi",
        "QTEning ob-havoga bog'liqligi",
        "Energiya to'plash tizimlarining rivojlanishi",
        "Tarmoqning ayrim uchastkalaridagi yuqori yuklama",
        "Infratuzilmani modernizatsiya qilish zarurati",
        "Uzatish va taqsimlashdagi energiya yo'qotishlari",
      ],
    },
    approach: {
      eyebrow: "Yondashuv",
      title: "Ishlab chiqarishdan muvofiqlashtirishga",
      body: "Vazifa — ko'proq elektr energiyasi ishlab chiqarish emas, balki butun energiya oqimini samarali muvofiqlashtirish.",
      stages: ["Generatsiya", "Uzatish", "To'plash", "Iste'mol"],
      note: "Energo Flow AI mavjud energetika infratuzilmasi ustida intellektual qatlam sifatida ishlaydi.",
    },
    ai: {
      eyebrow: "AI nima qiladi",
      title: "Birlashtirilgan ma'lumotlar asosidagi yettita asosiy funksiya",
      items: [
        "Elektr energiyasi iste'molini bashorat qiladi",
        "QTE generatsiyasini bashorat qiladi",
        "Anomaliya va ortiqcha yuklamalarni aniqlaydi",
        "Uskunalar nosozligini bashorat qiladi",
        "To'plagichlardan foydalanishni optimallashtiradi",
        "Optimal taqsimotni belgilaydi",
        "Cho'qqi yuklama va yo'qotishlarni kamaytiradi",
      ],
    },
    architecture: {
      eyebrow: "Yechim arxitekturasi",
      title: "Ma'lumotdan qarorga",
      layers: [
        {
          label: "Ma'lumot qatlami",
          items: ["Smart Meters", "Iste'mol", "Solar / Wind generatsiya", "Ob-havo"],
        },
        {
          label: "Energo Flow AI",
          items: ["Bashoratlash", "Anomaly Detection", "Optimallashtirish", "Risk Prediction"],
        },
        { label: "Decision Engine", items: ["Qaror qabul qilish"] },
        { label: "Boshqaruv ta'siri", items: ["Generatsiya", "To'plash", "Iste'mol"] },
      ],
    },
    forecast: {
      eyebrow: "Bashoratlash",
      title: "Platforma yadrosi — nomutanosiblik yuzaga kelgunga qadar talab va generatsiyani bashorat qilish",
      cards: [
        {
          title: "Iste'mol",
          body: "Mavsumiylik va sanoat yukining o'sishini hisobga olgan holda hududlar va tarmoqlar bo'yicha talab prognozi.",
        },
        {
          title: "QTE generatsiyasi",
          body: "Ob-havo sharoitlari va meteoxizmat ma'lumotlarini hisobga olgan holda quyosh va shamol energiyasi prognozi.",
        },
      ],
      note: "Prognoz uzluksiz hisoblanadi va datchiklar hamda meteostansiyalardan yangi ma'lumot kelishi bilan yangilanadi.",
    },
    risks: {
      eyebrow: "Risklar va anomaliyalar",
      title: "Avariyaga javob berish o'rniga oldindan ogohlantirish",
      cards: [
        {
          title: "Anomaliyalar",
          body: "Nosozlik yoki yo'qotishlardan darak beruvchi iste'mol va generatsiyadagi og'ishlarni aniqlash.",
        },
        {
          title: "Ortiqcha yuklama",
          body: "Tarmoqning ayrim uchastkalaridagi ehtimoliy ortiqcha yuklama haqida erta ogohlantirish.",
        },
        {
          title: "Uskuna nosozliklari",
          body: "Avariya yuz berishidan oldin infratuzilmadagi ehtimoliy ishdan chiqishlarni bashorat qilish.",
        },
      ],
    },
    optimization: {
      eyebrow: "Energiya oqimini optimallashtirish",
      title: "Decision Engine bir vaqtning o'zida uch yo'nalishda qaror qabul qiladi",
      cards: [
        {
          title: "To'plagichlar",
          body: "Talab prognoziga qarab energiya to'plash tizimlaridan optimal foydalanish.",
        },
        {
          title: "Taqsimot",
          body: "Hududlar va iste'molchilar o'rtasida energiya iste'molining optimal taqsimotini belgilash.",
        },
        {
          title: "Cho'qqi yuklamalar",
          body: "Uzatish va taqsimlashdagi cho'qqi yuklama hamda yo'qotishlarni kamaytirish.",
        },
      ],
    },
    result: {
      eyebrow: "Natija",
      title: "Generatsiyadan iste'molgacha — barcha bosqichlarda optimallashtirilgan energiya oqimi",
      items: [
        { title: "Kamroq yo'qotish", body: "energiya uzatish va taqsimlashda" },
        { title: "Aniqroq prognoz", body: "talab va QTE ishlab chiqarishi bo'yicha" },
        { title: "Kamroq cho'qqi", body: "tarmoqqa tushadigan yuklamada" },
        { title: "Erta signal", body: "risk va nosozliklar haqida" },
      ],
    },
    closing: {
      title: "O'zbekiston energetika tizimi ustidagi intellektual qatlam",
      body: "Ma'lumotdan qarorga, qarordan natijaga.",
    },
    footer: {
      note: "Platforma konsepsiyasi. Material tavsifiy xarakterga ega.",
    },
  },
} as const;
