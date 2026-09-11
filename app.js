/**
 * RIYADH SMOKE & GRILL | VIP Reservation & Digital Menu Engine
 * Engineered by ABDO HOUSE
 * Contact / WhatsApp: +201104689702
 */

// ==========================================
// 1. DATA DEFINITIONS & STATE
// ==========================================

const RESTAURANT_PHONE = "201104689702";

// Menu Data (All 10 Real Dishes with High-Res Unsplash Photography)
const MENU_ITEMS = [
  // Category A: المشاوي المشكلة ولحوم الفحم (Charcoal Grills & Meats)
  {
    id: "dish-1",
    category: "grills",
    title_ar: "صحن مشاوي مشكل فاخر",
    title_en: "Royal Mixed Grill Platter",
    desc_ar: "كباب نعيمي، شيش طاووق، وريش غنم متبلة مع خبز الصاج والبصل المشوي على الحطب.",
    desc_en: "Naemi lamb kebab, shish tawook, marinated lamb chops with saj bread & charcoal-grilled onions.",
    price: 85,
    calories: 650,
    badge_ar: "الأكثر طلباً",
    badge_en: "Chef's Signature",
    image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=800&q=80"
  },
  {
    id: "dish-2",
    category: "grills",
    title_ar: "كباب نعيمي على الفحم",
    title_en: "Charcoal Naemi Lamb Kebab",
    desc_ar: "لحم نعيمي بلدي طازج مفروم مع دهن اللية والبهارات النجدية الخاصة مشوي ببطء.",
    desc_en: "Fresh local Naemi lamb minced with authentic spices & charcoal flame grilled to perfection.",
    price: 68,
    calories: 520,
    badge_ar: "لحم بلدي طازج",
    badge_en: "Fresh Local Lamb",
    image: "https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?w=800&q=80"
  },
  {
    id: "dish-3",
    category: "grills",
    title_ar: "ريش غنم مشوية بالعسل والتوابل",
    title_en: "Glazed Lamb Chops",
    desc_ar: "4 قطع ريش غنم طرية مشوية على لهب الحطب مع تتبيلة الشيف الخاصة ودبس الرمان.",
    desc_en: "4 tender lamb chops seared over wood fire with chef's special honey glaze and pomegranate reduction.",
    price: 92,
    calories: 680,
    badge_ar: "فاخر جداً",
    badge_en: "Ultra Premium",
    image: "https://images.unsplash.com/photo-1544025162-d76694265947?w=800&q=80"
  },
  {
    id: "dish-4",
    category: "grills",
    title_ar: "أوصال لحم بقري مدخن",
    title_en: "Smoked Tenderloin Skewers",
    desc_ar: "مكعبات تندرلوين طرية مشوية لدرجة الاستواء المثالية مع صوص التدخين الملكي.",
    desc_en: "Prime beef tenderloin cubes smoked in oak wood with royal glaze and charred shallots.",
    price: 75,
    calories: 490,
    badge_ar: "تدخين حطب البلوط",
    badge_en: "Oak Wood Smoked",
    image: "https://images.unsplash.com/photo-1529193591184-b1d58069ecdd?w=800&q=80"
  },

  // Category B: المقبلات والمتبلات الشامية (Mezzeh & Starters)
  {
    id: "dish-5",
    category: "mezzeh",
    title_ar: "تشكيلة مقبلات مشكلة وحمص بيروتي",
    title_en: "Grand Mezzeh Platter",
    desc_ar: "حمص بالصنوبر، متبل باذنجان مشوي، بابا غنوج مدخن، وتبولة بالرمان مع زيت الزيتون البكر.",
    desc_en: "Hummus with pine nuts, smoked mutabbal eggplant, baba ghanoush, and ruby pomegranate tabbouleh.",
    price: 38,
    calories: 340,
    badge_ar: "مشاركة ملكية",
    badge_en: "Sharing Platter",
    image: "https://images.unsplash.com/photo-1541518763669-27fef04b14ea?w=800&q=80"
  },
  {
    id: "dish-6",
    category: "mezzeh",
    title_ar: "بطاطا حرة ومقرمشات بالكزبرة والثوم",
    title_en: "Spicy Batata Harra",
    desc_ar: "مكعبات بطاطا ذهبية مقرمشة متبلة بالثوم الطازج والكزبرة الخضراء وزيت الزيتون والشطة الحارة.",
    desc_en: "Crispy golden potato cubes tossed with fresh garlic, green coriander, chili flakes and extra virgin olive oil.",
    price: 26,
    calories: 290,
    badge_ar: "حار ومقرمش",
    badge_en: "Crispy & Spicy",
    image: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=800&q=80"
  },
  {
    id: "dish-7",
    category: "mezzeh",
    title_ar: "سلطة فتوش بدبس الرمان",
    title_en: "Special Fattoush Salad",
    desc_ar: "خضار موسمية طازجة مقرمشة مع الخبز المحمص والرمان ودبس الرمان الجبلي الفاخر والسماق البلدي.",
    desc_en: "Crisp market vegetables, golden toasted sumac pita, heirloom pomegranate, and tangy mountain molasses.",
    price: 28,
    calories: 180,
    badge_ar: "صحي ومنعش",
    badge_en: "Healthy & Fresh",
    image: "https://images.unsplash.com/photo-1540420773420-3366772f4999?w=800&q=80"
  },

  // Category C: المشروبات والحلويات الفاخرة (Drinks & Sweets)
  {
    id: "dish-8",
    category: "sweets",
    title_ar: "كنافة نابلسية بالجبن على الفحم",
    title_en: "Charcoal Kunafa",
    desc_ar: "كنافة خشنة ساخنة محشوة بجبن عكاوي ذائب مع رشة فستق حلبي وشيرة خفيفة معطرة بماء الزهر.",
    desc_en: "Warm golden shredded pastry stuffed with melting akkawi cheese, crushed pistachio, and blossom syrup.",
    price: 32,
    calories: 450,
    badge_ar: "مخبوز على الجمر",
    badge_en: "Ember Baked",
    image: "https://images.unsplash.com/photo-1579954115545-a95591f28bfc?w=800&q=80"
  },
  {
    id: "dish-9",
    category: "sweets",
    title_ar: "كيكة التمر بالكراميل الدافئ",
    title_en: "Sticky Date Pudding",
    desc_ar: "كيكة تمر خلاص القصيم الملكي الفاخر مع صوص التوفي الساخن وبولة آيس كريم فانيليا مدغشقر.",
    desc_en: "Rich Qassim Khalas date cake served with warm toffee butterscotch reduction and Madagascar vanilla gelato.",
    price: 34,
    calories: 380,
    badge_ar: "حلوى نجدية راقية",
    badge_en: "Riyadh Signature",
    image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=800&q=80"
  },
  {
    id: "dish-10",
    category: "sweets",
    title_ar: "عصير رمان طبيعي طازج",
    title_en: "Fresh Pomegranate Juice",
    desc_ar: "عصير رمان يمني بلدي معصور طازجاً على البارد عند الطلب بدون سكر مضاف.",
    desc_en: "Cold-pressed freshly squeezed pure mountain pomegranates with no added sugar.",
    price: 20,
    calories: 130,
    badge_ar: "طبيعي 100%",
    badge_en: "100% Pure",
    image: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?w=800&q=80"
  }
];

// Seating Zones Data
const SEATING_ZONES = [
  {
    id: "main_hall",
    name_ar: "الصالة الرئيسية الملكية (Main Hall)",
    name_en: "Royal Main Dining Hall",
    subtitle_ar: "تصميم صوتي هادئ، إطلالة مباشرة على لهب الفحم وشوايات الحطب المفتوحة.",
    subtitle_en: "Acoustic-optimized luxury dining beside the live charcoal & open wood fire display.",
    fee: 0,
    tables: ["T-01", "T-02", "T-03", "T-04", "T-05", "T-06", "T-07", "T-08"],
    tag_ar: "أجواء حيوية راقية",
    tag_en: "Vibrant Ambiance",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&q=80"
  },
  {
    id: "terrace",
    name_ar: "التراس الخارجي المفتوح (Panoramic Terrace)",
    name_en: "Panoramic Skyline Terrace",
    subtitle_ar: "جلسات خارجية في الهواء الطلق مع إطلالة بانورامية على أفق الرياض ومبردات رذاذ ذكية.",
    subtitle_en: "Open-air terrace with Riyadh skyline view, smart mist coolers & ambient lighting.",
    fee: 0,
    tables: ["T-09", "T-10", "T-11", "T-12", "T-13", "T-14"],
    tag_ar: "إطلالة بانورامية ساحرة",
    tag_en: "Skyline View",
    image: "https://images.unsplash.com/photo-1543007630-9710e4a00a20?w=800&q=80"
  },
  {
    id: "vip_cabana",
    name_ar: "كابينة VIP خاصة مغلقة (Private VIP Suite)",
    name_en: "Private VIP Suite & Family Cabana",
    subtitle_ar: "خصوصية مطلقة للعائلات والاجتماعات مع خدمة نادل خاص (Butler) وأدوات مائدة مذهبة.",
    subtitle_en: "Exclusive privacy for families & VIPs with dedicated butler service & luxury tableware.",
    fee: 150,
    tables: ["T-15", "T-16", "T-17", "T-18"],
    tag_ar: "خدمة بتلر خاصة (+150 ر.س)",
    tag_en: "Butler Service (+150 SAR)",
    image: "https://images.unsplash.com/photo-1578474846511-04ba529f0b88?w=800&q=80"
  }
];

// Interactive Floor Plan Tables (T-01 to T-18)
const FLOOR_TABLES = [
  // Main Hall
  { id: "T-01", zone: "main_hall", capacity: 2, shape: "round", status: "available", view_ar: "إطلالة النافذة والمدفأة", view_en: "Window & Fire View" },
  { id: "T-02", zone: "main_hall", capacity: 4, shape: "square", status: "available", view_ar: "أمام عرض الشواء الحي", view_en: "Live Grill View" },
  { id: "T-03", zone: "main_hall", capacity: 4, shape: "square", status: "reserved", view_ar: "الرواق المركزي الملكي", view_en: "Central Aisle" },
  { id: "T-04", zone: "main_hall", capacity: 6, shape: "booth", status: "available", view_ar: "بوث عائلي مريح وفاخر", view_en: "Luxury Booth" },
  { id: "T-05", zone: "main_hall", capacity: 2, shape: "round", status: "available", view_ar: "زاوية هادئة للأزواج", view_en: "Intimate Corner" },
  { id: "T-06", zone: "main_hall", capacity: 8, shape: "rect", status: "available", view_ar: "طاولة ملكية للولائم", view_en: "Royal Banquet Table" },
  { id: "T-07", zone: "main_hall", capacity: 4, shape: "square", status: "reserved", view_ar: "قرب شاشة العرض الفنية", view_en: "Artistic Display" },
  { id: "T-08", zone: "main_hall", capacity: 4, shape: "square", status: "available", view_ar: "زاوية المدخنة الكلاسيكية", view_en: "Classic Fire Corner" },

  // Panoramic Terrace
  { id: "T-09", zone: "terrace", capacity: 2, shape: "round", status: "available", view_ar: "حافة التراس - إطلالة الأفق", view_en: "Edge Skyline View" },
  { id: "T-10", zone: "terrace", capacity: 4, shape: "square", status: "available", view_ar: "أمام نافورة التراس المضيئة", view_en: "Terrace Fountain View" },
  { id: "T-11", zone: "terrace", capacity: 4, shape: "square", status: "reserved", view_ar: "وسط التراس الهادئ", view_en: "Center Terrace Lounge" },
  { id: "T-12", zone: "terrace", capacity: 6, shape: "round", status: "available", view_ar: "جلسة دائرية محاطة بالرذاذ", view_en: "Cooling Mist Circle" },
  { id: "T-13", zone: "terrace", capacity: 2, shape: "round", status: "available", view_ar: "ركن الغروب الرومانسي", view_en: "Romantic Sunset Corner" },
  { id: "T-14", zone: "terrace", capacity: 8, shape: "rect", status: "available", view_ar: "برجولا خارجية فاخرة", view_en: "Luxury Terrace Pergola" },

  // VIP Suite
  { id: "T-15", zone: "vip_cabana", capacity: 6, shape: "booth", status: "available", view_ar: "كابينة الأمراء الخاصة", view_en: "Princes Cabana Suite" },
  { id: "T-16", zone: "vip_cabana", capacity: 8, shape: "rect", status: "reserved", view_ar: "جناح رجال الأعمال والشركات", view_en: "Executive Board Suite" },
  { id: "T-17", zone: "vip_cabana", capacity: 10, shape: "rect", status: "available", view_ar: "كابينة السلطان الملكية", view_en: "Sultan Presidential Suite" },
  { id: "T-18", zone: "vip_cabana", capacity: 12, shape: "rect", status: "available", view_ar: "الصالون الإمبراطوري الأكبر", view_en: "Grand Imperial Salon" }
];

// Curated Dining Periods & Time Slots
const DINING_PERIODS = [
  {
    id: "lunch",
    title_ar: "غداء عمل (Business Lunch)",
    title_en: "Business Lunch",
    time_range: "1:00 PM - 4:30 PM",
    icon: "fa-sun",
    slots: ["1:00 PM", "1:30 PM", "2:00 PM", "2:30 PM", "3:00 PM", "3:30 PM", "4:00 PM"]
  },
  {
    id: "sunset",
    title_ar: "جلسة الغروب (Sunset Golden Hour)",
    title_en: "Sunset Golden Hour",
    time_range: "5:00 PM - 7:00 PM",
    icon: "fa-cloud-sun",
    slots: ["5:00 PM", "5:30 PM", "6:00 PM", "6:30 PM"]
  },
  {
    id: "dinner",
    title_ar: "عشاء فاخر (Royal Dinner)",
    title_en: "Royal Dinner",
    time_range: "7:30 PM - 11:30 PM",
    icon: "fa-moon",
    slots: ["7:30 PM", "8:00 PM", "8:30 PM", "9:00 PM", "9:30 PM", "10:00 PM", "10:30 PM", "11:00 PM"]
  },
  {
    id: "latenight",
    title_ar: "السهرة (Late Night Smokehouse)",
    title_en: "Late Night Smokehouse",
    time_range: "12:00 AM - 2:00 AM",
    icon: "fa-fire",
    slots: ["12:00 AM", "12:30 AM", "1:00 AM", "1:30 AM"]
  }
];

// App Global State
let currentLang = "ar";
let cart = [];
let bookingState = {
  step: 1,
  partySize: 4,
  selectedDate: getFormattedDate(0),
  period: "dinner",
  timeSlot: "8:30 PM",
  zone: "main_hall",
  tableId: "T-02",
  occasion: "none",
  addons: {
    cake: false,
    cakeText: "",
    flowers: false,
    dietary: ""
  },
  guestName: "",
  guestPhone: "",
  notes: ""
};

// ==========================================
// 2. HELPER FUNCTIONS
// ==========================================

function getFormattedDate(offsetDays = 0) {
  const d = new Date();
  d.setDate(d.getDate() + offsetDays);
  return d.toISOString().split("T")[0];
}

let toastTimer = null;
function showToast(message, isSuccess = true) {
  const container = document.getElementById("toast-container");
  if (!container) return;

  if (toastTimer) {
    clearTimeout(toastTimer);
    toastTimer = null;
  }

  container.innerHTML = `
    <div class="toast">
      <i class="fas ${isSuccess ? 'fa-check-circle text-emerald-400' : 'fa-exclamation-circle text-amber-400'} text-lg"></i>
      <span class="font-medium">${message}</span>
    </div>
  `;

  toastTimer = setTimeout(() => {
    const toast = container.querySelector(".toast");
    if (toast) {
      toast.style.animation = "toastOut 0.25s ease forwards";
      setTimeout(() => { container.innerHTML = ""; }, 240);
    }
  }, 2200);
}

// ==========================================
// 3. MULTI-LANGUAGE SYSTEM
// ==========================================

const TRANSLATIONS = {
  ar: {
    navHome: "الرئيسية",
    navMenu: "قائمة الطعام",
    navExperience: "أجواء المطعم",
    navZones: "المناطق والطاولات",
    navReviews: "تقييمات الضيوف",
    navReserve: "حجز طاولة VIP",
    heroTitlePart1: "فخامة النكهة النجدية",
    heroTitlePart2: "على جمر الحطب الملكي",
    heroSubtitle: "تجربة طهي استثنائية في قلب الرياض تمزج عراقة لحوم النعيمي المدخنة مع أرقى معايير الضيافة النجدية والعالمية — طريق التخصصي، الرياض.",
    heroReserveBtn: "احجز طاولتك الملكية الآن",
    heroMenuBtn: "استكشف قائمة الطعام الفاخرة",
    quickGuests: "عدد الضيوف",
    quickDate: "تاريخ الزيارة",
    quickTime: "الفترة الزمنية",
    quickZone: "المنطقة المفضلة",
    quickSearchBtn: "تحقق من التوفر الفوري",
    filterAll: "جميع الأطباق الفاخرة",
    filterGrills: "المشاوي ولحوم الفحم",
    filterMezzeh: "المقبلات والمتبلات",
    filterSweets: "الحلويات والمشروبات",
    sar: "ر.س",
    kcal: "سعرة حرارية",
    addToCart: "إضافة للطلب",
    cartTitle: "سلة الطلبات الخارجية (Takeaway)",
    cartEmpty: "سلة طلباتك فارغة حالياً. أضف أطباقك المفضلة من القائمة!",
    subtotal: "المجموع الفرعي:",
    vat: "ضريبة القيمة المضافة (15%):",
    grandTotal: "المبلغ الإجمالي:",
    checkoutBtn: "إتمام الطلب عبر الواتساب",
    modalTitle: "نظام حجز الطاولات الملكي | SevenRooms VIP Engine",
    step1Tab: "1. الموعد والضيوف",
    step2Tab: "2. المنطقة والمخطط",
    step3Tab: "3. المناسبة والإضافات",
    step4Tab: "4. بيانات الضيف والتأكيد",
    step1Title: "اختر عدد الضيوف وتوقيت الزيارة",
    step1Subtitle: "نرجو تحديد عدد المقاعد والفترة المفضلة لضمان أرقى معايير الاستقبال",
    guestsLabel: "عدد المقاعد المطلوبة:",
    dateLabel: "تاريخ الحجز:",
    periodLabel: "فترة تناول الطعام:",
    timeLabel: "اختر وقت الوصول الدقيق:",
    nextBtn: "المتابعة للخطوة التالية",
    backBtn: "الرجوع للخطوة السابقة",
    step2Title: "اختر منطقة الجلوس وحدد طاولتك على المخطط التفاعلي",
    step2Subtitle: "حدد منطقتك المفضلة وانقر على أي طاولة متاحة باللون الأخضر لاختيارها",
    zonesTitle: "مناطق الجلوس الفاخرة:",
    floorMapTitle: "مخطط توزيع الطاولات الحي (Live Floor Map)",
    availableLegend: "متاح للحجز الفوري",
    reservedLegend: "محجوز حالياً",
    selectedLegend: "طاولتك المحددة",
    selectedTableInfo: "الطاولة المختارة حالياً:",
    capacityLabel: "السعة:",
    guestsUnit: "ضيوف",
    step3Title: "المناسبات الخاصة والخدمات الإضافية",
    step3Subtitle: "خصص تجربتك لنصنع لك ذكرى لا تُنسى في أرقى أجواء الرياض",
    occasionLabel: "نوع المناسبة:",
    occNone: "عشاء عادي راقي",
    occRomantic: "عشاء رومانسي / ذكرى زواج (Anniversary)",
    occBirthday: "احتفال عيد ميلاد (Birthday Celebration)",
    occBusiness: "عشاء عمل رسمي (Business Dinner)",
    occFamily: "اجتماع عائلي خاص (Family Gathering)",
    addonsLabel: "خدمات الضيافة الملكية الإضافية:",
    cakeOption: "كيكة شوكولاتة فاخرة للاحتفال مع كتابة اسم الضيف (+120 ر.س)",
    cakePlaceholder: "الاسم أو العبارة المطلوبة على الكيكة...",
    flowersOption: "تنسيق باقة ورد طبيعي فاخرة على الطاولة (+180 ر.س)",
    dietaryLabel: "ملاحظات غذائية خاصة (حساسية جلوتين، قليل الصوديوم، استواء محدد):",
    dietaryPlaceholder: "أدخل أي تفضيلات أو حساسيات غذائية للضيوف...",
    step4Title: "تفاصيل الضيف والتأكيد النهائي عبر الواتساب",
    step4Subtitle: "سيتم تجهيز استقبالك فوراً وإرسال إشعار التأكيد المباشر للكونسيرج",
    nameLabel: "الاسم الكريم للضيف الأساسي:",
    phoneLabel: "رقم الجوال / الواتساب:",
    notesLabel: "ملاحظات خاصة للكونسيرج:",
    notesPlaceholder: "أي طلبات خاصة بإطلالة المقعد أو الاستقبال...",
    dressCodePolicy: "سياسة الزي المعتمد: رسمي أنيق (Smart Casual) • يُرجى تأكيد الحضور قبل الموعد بـ 15 دقيقة لضمان حجز الطاولة.",
    summaryZoneFee: "رسوم الجلسة الخاصة:",
    summaryAddonsFee: "الخدمات الإضافية:",
    confirmWhatsAppBtn: "تأكيد الحجز الملكي عبر الواتساب",
    footerText: "صُمم هذا النظام التفاعلي لإدارة الحجوزات والمطاعم بواسطة ABDO HOUSE | تبي موقع ونظام حجز لكافيهك أو مطعمك خلال 48 ساعة؟",
    footerContactBtn: "تواصل معنا واتساب: 01104689702",
    searchPlaceholder: "ابحث عن طبقك المفضل (كباب، ريش، حلى...)",
    modalClose: "إغلاق"
  },
  en: {
    navHome: "Home",
    navMenu: "The Menu",
    navExperience: "Atmosphere",
    navZones: "Zones & Floor Plan",
    navReviews: "Guest Reviews",
    navReserve: "Reserve VIP Table",
    heroTitlePart1: "The Grand Flame of Najd",
    heroTitlePart2: "Smoked Over Royal Charcoal",
    heroSubtitle: "An ultra-luxury wood-fired culinary destination in the heart of Riyadh, harmonizing Saudi heritage butchery with high-refinement hospitality — Al Takhassusi St, Riyadh.",
    heroReserveBtn: "Reserve Your Royal Table",
    heroMenuBtn: "Explore The Master Menu",
    quickGuests: "Party Size",
    quickDate: "Reservation Date",
    quickTime: "Dining Period",
    quickZone: "Preferred Zone",
    quickSearchBtn: "Check Live Availability",
    filterAll: "Full Curated Menu",
    filterGrills: "Charcoal Grills & Cuts",
    filterMezzeh: "Levantine Mezzeh",
    filterSweets: "Desserts & Refreshers",
    sar: "SAR",
    kcal: "kcal",
    addToCart: "Add to Order",
    cartTitle: "Takeaway Order Bag",
    cartEmpty: "Your takeaway bag is empty. Explore our master menu to add dishes!",
    subtotal: "Subtotal:",
    vat: "VAT (15%):",
    grandTotal: "Grand Total:",
    checkoutBtn: "Complete Takeaway via WhatsApp",
    modalTitle: "Royal VIP Table Reservation | SevenRooms Engine",
    step1Tab: "1. Date & Guests",
    step2Tab: "2. Zone & Floor Map",
    step3Tab: "3. Occasion & Add-ons",
    step4Tab: "4. Guest & WhatsApp",
    step1Title: "Select Party Size, Date & Dining Period",
    step1Subtitle: "Choose your seating requirements to ensure seamless luxury concierge reception",
    guestsLabel: "Number of Guests:",
    dateLabel: "Reservation Date:",
    periodLabel: "Dining Period:",
    timeLabel: "Exact Arrival Slot:",
    nextBtn: "Proceed to Next Step",
    backBtn: "Previous Step",
    step2Title: "Select Seating Zone & Choose Table on Floor Map",
    step2Subtitle: "Choose your ambiance zone and click on any available emerald table to reserve it",
    zonesTitle: "Luxury Dining Zones:",
    floorMapTitle: "Live Interactive Floor Map",
    availableLegend: "Available for Booking",
    reservedLegend: "Reserved",
    selectedLegend: "Your Selection",
    selectedTableInfo: "Current Selected Table:",
    capacityLabel: "Capacity:",
    guestsUnit: "guests",
    step3Title: "Occasion & VIP Hospitality Amenities",
    step3Subtitle: "Personalize your visit for an unforgettable evening in Riyadh's premier smokehouse",
    occasionLabel: "Dining Occasion:",
    occNone: "Standard Fine Dining",
    occRomantic: "Romantic Dinner / Anniversary",
    occBirthday: "Birthday Celebration",
    occBusiness: "Executive Business Dinner",
    occFamily: "Private Family Gathering",
    addonsLabel: "Bespoke Hospitality Amenities:",
    cakeOption: "Custom chocolate celebration cake with guest inscription (+120 SAR)",
    cakePlaceholder: "Message / Name to write on the cake...",
    flowersOption: "Luxury fresh flower table centerpiece (+180 SAR)",
    dietaryLabel: "Dietary preferences (Gluten-free, Low sodium, Doneness):",
    dietaryPlaceholder: "Note any allergies or special culinary requests...",
    step4Title: "Guest Concierge Details & WhatsApp Dispatch",
    step4Subtitle: "Your table will be held with priority concierge notification upon instant WhatsApp dispatch",
    nameLabel: "Primary Guest Full Name:",
    phoneLabel: "Mobile / WhatsApp Number:",
    notesLabel: "Special Concierge Notes:",
    notesPlaceholder: "Any special seating or reception preferences...",
    dressCodePolicy: "Dress Code Policy: Smart Casual • Please arrive 15 minutes prior to reserved time to secure your table.",
    summaryZoneFee: "Private Seating Fee:",
    summaryAddonsFee: "Selected Amenities:",
    confirmWhatsAppBtn: "Confirm VIP Reservation via WhatsApp",
    footerText: "Engineered with precision for Riyadh Smoke & Grill by ABDO HOUSE | Looking for an ultra-luxury reservation & restaurant app in 48 hours?",
    footerContactBtn: "Chat with us on WhatsApp: +201104689702",
    searchPlaceholder: "Search signature dishes (kebab, lamb chops, kunafa...)",
    modalClose: "Close"
  }
};

function setLanguage(lang) {
  currentLang = lang;
  document.documentElement.lang = lang;
  document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";

  // Update text of elements with data-i18n
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    if (TRANSLATIONS[lang] && TRANSLATIONS[lang][key]) {
      if (el.tagName === "INPUT" || el.tagName === "TEXTAREA") {
        el.placeholder = TRANSLATIONS[lang][key];
      } else {
        el.textContent = TRANSLATIONS[lang][key];
      }
    }
  });

  // Language button label
  const langToggleBtn = document.getElementById("lang-toggle-btn");
  if (langToggleBtn) {
    langToggleBtn.innerHTML = lang === "ar" 
      ? `<span class="text-xs font-bold text-amber-300">EN</span><span class="text-xs text-slate-300">English</span>`
      : `<span class="text-xs font-bold text-amber-300">عربي</span><span class="text-xs text-slate-300">العربية</span>`;
  }

  // Re-render components with localized text
  renderMenu();
  renderDateChips();
  renderTimeSlots();
  renderZoneCards();
  renderFloorMap();
  renderBookingSummary();
  renderCart();
}

// ==========================================
// 4. MENU CATALOG & CART SYSTEM
// ==========================================

let activeCategory = "all";
let activeSearchQuery = "";

function onSearchMenu(query) {
  activeSearchQuery = (query || "").trim().toLowerCase();
  renderMenu();
}

function clearMenuSearch() {
  activeSearchQuery = "";
  const searchInput = document.getElementById("menu-search-input");
  if (searchInput) searchInput.value = "";
  renderMenu();
}

function renderMenu() {
  const container = document.getElementById("menu-grid");
  if (!container) return;

  let filtered = activeCategory === "all" 
    ? MENU_ITEMS 
    : MENU_ITEMS.filter(item => item.category === activeCategory);

  if (activeSearchQuery) {
    filtered = filtered.filter(item => {
      const matchAr = (item.title_ar + " " + item.desc_ar).toLowerCase().includes(activeSearchQuery);
      const matchEn = (item.title_en + " " + item.desc_en).toLowerCase().includes(activeSearchQuery);
      return matchAr || matchEn;
    });
  }

  if (filtered.length === 0) {
    container.innerHTML = `
      <div class="col-span-full text-center py-16 glass-panel rounded-3xl border border-white/10 p-8">
        <i class="fas fa-search text-4xl text-amber-400/60 mb-4 block animate-bounce"></i>
        <h3 class="text-lg font-bold text-white mb-1">${currentLang === 'ar' ? 'لم يتم العثور على أطباق مطابقة' : 'No matching culinary dishes found'}</h3>
        <p class="text-sm text-slate-400 mb-4">${currentLang === 'ar' ? 'جرب البحث باسم طبق آخر أو اختر تصنيفاً مختلفاً' : 'Try searching for another dish or selecting a different category'}</p>
        <button onclick="clearMenuSearch()" class="py-2 px-5 rounded-xl bg-amber-500 text-black text-xs font-bold shadow-lg">
          ${currentLang === 'ar' ? 'عرض كل الأطباق' : 'Show All Dishes'}
        </button>
      </div>
    `;
    return;
  }

  container.innerHTML = filtered.map(item => {
    const title = currentLang === "ar" ? item.title_ar : item.title_en;
    const desc = currentLang === "ar" ? item.desc_ar : item.desc_en;
    const badge = currentLang === "ar" ? item.badge_ar : item.badge_en;
    const sar = TRANSLATIONS[currentLang].sar;
    const kcal = TRANSLATIONS[currentLang].kcal;
    const addText = TRANSLATIONS[currentLang].addToCart;
    const isBestSeller = item.badge_ar === "الأكثر طلباً" || item.id === "dish-1";

    return `
      <div class="glass-panel rounded-2xl overflow-hidden flex flex-col group menu-card-elevate ${isBestSeller ? 'bestseller-ember-glow border-amber-400/60' : 'hover:border-amber-400/40'}">
        <div class="relative h-56 w-full overflow-hidden bg-slate-900 aspect-[16/10]">
          <img src="${item.image}" alt="${title}" width="800" height="500" class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" loading="lazy" decoding="async" />
          <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20 pointer-events-none"></div>
          <span class="absolute top-3 right-3 ${isBestSeller ? 'bg-amber-500 text-black font-extrabold' : 'bg-slate-900/90 text-amber-300'} text-xs px-3 py-1 rounded-full border border-amber-400/30 shadow-md">
            ${isBestSeller ? '🔥 ' : ''}${badge}
          </span>
          <div class="absolute bottom-3 left-3 bg-black/85 border border-white/10 px-2.5 py-0.5 rounded-lg text-xs text-amber-300 flex items-center gap-1.5">
            <i class="fas fa-fire-alt text-amber-400"></i>
            <span>${item.calories} ${kcal}</span>
          </div>
        </div>

        <div class="p-6 flex-1 flex flex-col justify-between">
          <div>
            <div class="flex items-start justify-between gap-3 mb-2">
              <h3 class="font-bold text-lg text-white group-hover:text-amber-300 transition-colors">${title}</h3>
              <span class="text-lg font-bold text-amber-400 whitespace-nowrap">${item.price} <span class="text-xs font-normal text-amber-200/80">${sar}</span></span>
            </div>
            <p class="text-slate-400 text-sm leading-relaxed mb-5">${desc}</p>
          </div>

          <div class="pt-4 border-t border-white/5 flex items-center justify-between">
            <button onclick="addToCart('${item.id}', this)" class="w-full btn-gold py-2.5 px-4 rounded-xl text-sm flex items-center justify-center gap-2">
              <i class="fas fa-plus-circle"></i>
              <span>${addText}</span>
            </button>
          </div>
        </div>
      </div>
    `;
  }).join("");
}

function filterMenu(category, buttonEl) {
  activeCategory = category;
  document.querySelectorAll(".menu-filter-btn").forEach(btn => {
    btn.classList.remove("bg-amber-500", "text-black", "font-bold");
    btn.classList.add("bg-slate-800/80", "text-slate-300");
  });
  if (buttonEl) {
    buttonEl.classList.remove("bg-slate-800/80", "text-slate-300");
    buttonEl.classList.add("bg-amber-500", "text-black", "font-bold");
  }
  renderMenu();
}

function addToCart(dishId, btnEl = null) {
  const item = MENU_ITEMS.find(d => d.id === dishId);
  if (!item) return;

  const existing = cart.find(c => c.id === dishId);
  if (existing) {
    existing.quantity += 1;
  } else {
    cart.push({ ...item, quantity: 1 });
  }

  // Instant tactile feedback directly on button (<0ms delay)
  if (btnEl) {
    const originalHTML = btnEl.innerHTML;
    btnEl.classList.add("btn-added-state");
    btnEl.innerHTML = `<i class="fas fa-check-circle"></i> <span>${currentLang === "ar" ? "تمت الإضافة ✓" : "Added ✓"}</span>`;
    setTimeout(() => {
      btnEl.classList.remove("btn-added-state");
      btnEl.innerHTML = originalHTML;
    }, 650);
  }

  updateCartBadge();
  renderCart();
  const title = currentLang === "ar" ? item.title_ar : item.title_en;
  showToast(currentLang === "ar" ? `تمت إضافة "${title}" لسلة الطلبات` : `Added "${title}" to your takeaway order`);
}

function updateCartQuantity(dishId, delta) {
  const item = cart.find(c => c.id === dishId);
  if (!item) return;
  item.quantity += delta;
  if (item.quantity <= 0) {
    cart = cart.filter(c => c.id !== dishId);
  }
  updateCartBadge();
  renderCart();
}

function updateCartBadge() {
  const count = cart.reduce((acc, c) => acc + c.quantity, 0);
  const badge = document.getElementById("cart-count-badge");
  const floatingBadge = document.getElementById("floating-cart-count");
  if (badge) {
    badge.textContent = count;
    badge.style.display = count > 0 ? "inline-flex" : "none";
  }
  if (floatingBadge) {
    floatingBadge.textContent = count;
    floatingBadge.style.display = count > 0 ? "inline-flex" : "none";
  }
}

function renderCart() {
  const container = document.getElementById("cart-items-container");
  const subtotalEl = document.getElementById("cart-subtotal");
  const vatEl = document.getElementById("cart-vat");
  const grandTotalEl = document.getElementById("cart-grand-total");
  const emptyState = document.getElementById("cart-empty-state");
  const footerEl = document.getElementById("cart-footer");

  if (!container) return;

  if (cart.length === 0) {
    container.innerHTML = "";
    if (emptyState) emptyState.style.display = "block";
    if (footerEl) footerEl.style.display = "none";
    return;
  }

  if (emptyState) emptyState.style.display = "none";
  if (footerEl) footerEl.style.display = "block";

  const sar = TRANSLATIONS[currentLang].sar;

  container.innerHTML = cart.map(item => {
    const title = currentLang === "ar" ? item.title_ar : item.title_en;
    const itemTotal = item.price * item.quantity;
    return `
      <div class="flex items-center justify-between p-3.5 bg-slate-900/80 rounded-xl border border-white/5 gap-3">
        <img src="${item.image}" alt="${title}" width="64" height="64" class="w-16 h-16 rounded-lg object-cover border border-amber-400/20 aspect-square" loading="lazy" decoding="async" />
        <div class="flex-1 min-w-0">
          <h4 class="text-sm font-semibold text-white truncate">${title}</h4>
          <span class="text-xs text-amber-400 font-bold">${item.price} ${sar}</span>
        </div>
        <div class="flex items-center gap-2 bg-slate-800 rounded-lg p-1 border border-white/10">
          <button onclick="updateCartQuantity('${item.id}', -1)" class="w-7 h-7 flex items-center justify-center rounded bg-slate-700 text-white hover:bg-amber-500 hover:text-black transition-colors">
            <i class="fas fa-minus text-xs"></i>
          </button>
          <span class="text-sm font-bold text-white px-1">${item.quantity}</span>
          <button onclick="updateCartQuantity('${item.id}', 1)" class="w-7 h-7 flex items-center justify-center rounded bg-slate-700 text-white hover:bg-amber-500 hover:text-black transition-colors">
            <i class="fas fa-plus text-xs"></i>
          </button>
        </div>
        <div class="text-right whitespace-nowrap min-w-[60px]">
          <span class="text-sm font-bold text-amber-400">${itemTotal} ${sar}</span>
        </div>
      </div>
    `;
  }).join("");

  const subtotal = cart.reduce((acc, c) => acc + (c.price * c.quantity), 0);
  const vat = Math.round(subtotal * 0.15);
  const grandTotal = subtotal + vat;

  if (subtotalEl) subtotalEl.textContent = `${subtotal} ${sar}`;
  if (vatEl) vatEl.textContent = `${vat} ${sar}`;
  if (grandTotalEl) grandTotalEl.textContent = `${grandTotal} ${sar}`;
}

function toggleCart(open = null) {
  const drawer = document.getElementById("cart-drawer");
  if (!drawer) return;
  if (open === null) {
    drawer.classList.toggle("active");
  } else if (open) {
    drawer.classList.add("active");
  } else {
    drawer.classList.remove("active");
  }
}

function checkoutTakeawayWhatsApp() {
  if (cart.length === 0) {
    showToast(currentLang === "ar" ? "سلة الطلبات فارغة!" : "Your cart is empty!", false);
    return;
  }

  const subtotal = cart.reduce((acc, c) => acc + (c.price * c.quantity), 0);
  const vat = Math.round(subtotal * 0.15);
  const grandTotal = subtotal + vat;

  let msg = `🔥 *طلب خارجي جديد (Takeaway) | مداخن ومشويات الرياض*\n`;
  msg += `─────────────────────────\n`;
  cart.forEach((item, idx) => {
    msg += `${idx + 1}. ${item.title_ar} (${item.title_en})\n`;
    msg += `   العدد: ${item.quantity} × ${item.price} ر.س = ${item.quantity * item.price} ر.س\n`;
  });
  msg += `─────────────────────────\n`;
  msg += `المجموع الفرعي: ${subtotal} ر.س\n`;
  msg += `ضريبة القيمة المضافة 15%: ${vat} ر.س\n`;
  msg += `*الإجمالي النهائي: ${grandTotal} ر.س*\n`;
  msg += `─────────────────────────\n`;
  msg += `✨ *نظام الطلبات الذكي مهندس بواسطة ABDO HOUSE*`;

  const url = `https://wa.me/${RESTAURANT_PHONE}?text=${encodeURIComponent(msg)}`;
  window.open(url, "_blank");
}

// ==========================================
// 5. VIP RESERVATION WIZARD ENGINE (SEVENROOMS STYLE)
// ==========================================

function openReservationModal(defaultZone = null) {
  if (defaultZone) {
    selectZone(defaultZone);
  }
  const modal = document.getElementById("reservation-modal");
  if (modal) {
    // Reset scroll positions to top so modal never appears scrolled down
    modal.scrollTop = 0;
    const modalBody = modal.querySelector(".overflow-y-auto");
    if (modalBody) {
      modalBody.scrollTop = 0;
    }

    modal.classList.add("active");
    document.body.style.overflow = "hidden";
    goToStep(defaultZone ? 2 : 1);
  }
}

function closeReservationModal() {
  const modal = document.getElementById("reservation-modal");
  if (modal) {
    modal.classList.remove("active");
    document.body.style.overflow = "auto";
  }
}

function goToStep(step) {
  bookingState.step = step;

  // Instant zero-reflow tabs and panes switching
  for (let s = 1; s <= 4; s++) {
    const tab = document.getElementById(`step-tab-${s}`);
    const content = document.getElementById(`step-content-${s}`);
    if (tab) {
      if (s === step) {
        tab.className = "flex-1 py-3 px-3 text-center rounded-xl bg-gradient-to-r from-amber-500/20 to-amber-500/10 border border-amber-400 text-amber-300 font-bold transition-all shadow-lg whitespace-nowrap cursor-pointer";
      } else if (s < step) {
        tab.className = "flex-1 py-3 px-3 text-center rounded-xl bg-slate-800/80 border border-emerald-500/40 text-emerald-400 font-semibold transition-all whitespace-nowrap cursor-pointer";
      } else {
        tab.className = "flex-1 py-3 px-3 text-center rounded-xl bg-slate-900/50 border border-white/5 text-slate-400 transition-all whitespace-nowrap cursor-pointer";
      }
    }
    if (content) {
      content.style.display = (s === step) ? "block" : "none";
    }
  }

  // Ensure scroll position resets to top on every step change
  const modal = document.getElementById("reservation-modal");
  if (modal) {
    modal.scrollTop = 0;
    const modalBody = modal.querySelector(".overflow-y-auto");
    if (modalBody) {
      modalBody.scrollTop = 0;
    }
  }

  // Ensure components exist in DOM without wasteful re-rendering
  if (step === 1) {
    const dateContainer = document.getElementById("date-chips-container");
    if (dateContainer && !dateContainer.hasChildNodes()) {
      renderDateChips();
    }
    const slotContainer = document.getElementById("time-slots-container");
    if (slotContainer && !slotContainer.hasChildNodes()) {
      renderTimeSlots();
    }
  } else if (step === 2) {
    const zoneContainer = document.getElementById("zone-cards-container");
    if (zoneContainer && !zoneContainer.hasChildNodes()) {
      renderZoneCards();
    }
    const mapContainer = document.getElementById("floor-map-grid");
    if (mapContainer && !mapContainer.hasChildNodes()) {
      renderFloorMap();
    }
  } else if (step === 4) {
    renderBookingSummary();
  }
}

// Step 1: Party Size, Dates & Timeslots
function setPartySize(size) {
  bookingState.partySize = size;
  document.querySelectorAll(".party-size-pill").forEach(pill => {
    const pSize = parseInt(pill.getAttribute("data-size"));
    pill.classList.toggle("selected", pSize === size);
  });
}

function renderDateChips() {
  const container = document.getElementById("date-chips-container");
  if (!container) return;

  const daysArabic = ["الأحد", "الإثنين", "الثلاثاء", "الأربعاء", "الخميس", "الجمعة", "السبت"];
  const daysEnglish = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const monthsArabic = ["يناير", "فبراير", "مارس", "أبريل", "مايو", "يونيو", "يوليو", "أغسطس", "سبتمبر", "أكتوبر", "نوفمبر", "ديسمبر"];
  const monthsEnglish = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

  let html = "";
  for (let i = 0; i < 14; i++) {
    const d = new Date();
    d.setDate(d.getDate() + i);
    const dateStr = d.toISOString().split("T")[0];
    const dayName = currentLang === "ar" ? daysArabic[d.getDay()] : daysEnglish[d.getDay()];
    const monthName = currentLang === "ar" ? monthsArabic[d.getMonth()] : monthsEnglish[d.getMonth()];
    const dayNum = d.getDate();
    const isWeekend = d.getDay() === 5 || d.getDay() === 6; // Friday & Saturday in Saudi Arabia
    const isSelected = bookingState.selectedDate === dateStr;

    html += `
      <button type="button" data-date="${dateStr}" onclick="selectBookingDate('${dateStr}')" class="date-chip w-auto min-w-[76px] sm:min-w-[84px] px-3 py-2.5 rounded-2xl flex flex-col items-center justify-center border transition-all ${
        isSelected ? 'selected' : ''
      }">
        <span class="text-[11px] uppercase tracking-wider mb-1 opacity-80">${i === 0 ? (currentLang === 'ar' ? 'اليوم' : 'Today') : dayName}</span>
        <span class="text-lg sm:text-xl font-black">${dayNum}</span>
        <span class="text-[10px] opacity-75">${monthName}</span>
        ${isWeekend ? `<span class="mt-1 text-[9px] px-1.5 py-0.5 rounded ${isSelected ? 'bg-black/20 text-black' : 'bg-emerald-500/20 text-emerald-400 font-bold'}">${currentLang === 'ar' ? 'ويكند' : 'Peak'}</span>` : ''}
      </button>
    `;
  }
  container.innerHTML = html;
}

function selectBookingDate(dateStr) {
  bookingState.selectedDate = dateStr;
  const chips = document.querySelectorAll(".date-chip");
  if (chips.length > 0) {
    chips.forEach(chip => {
      const d = chip.getAttribute("data-date");
      chip.classList.toggle("selected", d === dateStr);
    });
  } else {
    renderDateChips();
  }
}

function selectDiningPeriod(periodId) {
  bookingState.period = periodId;
  document.querySelectorAll(".dining-period-card").forEach(card => {
    const id = card.getAttribute("data-period");
    card.classList.toggle("selected", id === periodId);
  });

  // Pick first available slot in that period
  const periodObj = DINING_PERIODS.find(p => p.id === periodId);
  if (periodObj && periodObj.slots.length > 0) {
    bookingState.timeSlot = periodObj.slots[0];
  }
  renderTimeSlots();
}

function renderTimeSlots() {
  const container = document.getElementById("time-slots-container");
  if (!container) return;

  const currentPeriod = DINING_PERIODS.find(p => p.id === bookingState.period) || DINING_PERIODS[2];
  container.innerHTML = currentPeriod.slots.map(slot => {
    const isSelected = bookingState.timeSlot === slot;
    return `
      <button type="button" data-slot="${slot}" onclick="selectTimeSlot('${slot}')" class="time-slot-btn w-auto min-w-fit px-4 py-2.5 rounded-xl border text-xs sm:text-sm font-semibold transition-all ${
        isSelected ? 'selected' : ''
      }">
        <i class="far fa-clock mr-1 text-xs"></i> ${slot}
      </button>
    `;
  }).join("");
}

function selectTimeSlot(slot) {
  bookingState.timeSlot = slot;
  const buttons = document.querySelectorAll(".time-slot-btn");
  if (buttons.length > 0) {
    buttons.forEach(btn => {
      const s = btn.getAttribute("data-slot");
      btn.classList.toggle("selected", s === slot);
    });
  } else {
    renderTimeSlots();
  }
}

// Step 2: Seating Zone & Floor Map
function renderZoneCards() {
  const container = document.getElementById("zone-cards-container");
  if (!container) return;

  container.innerHTML = SEATING_ZONES.map(zone => {
    const isSelected = bookingState.zone === zone.id;
    const name = currentLang === "ar" ? zone.name_ar : zone.name_en;
    const sub = currentLang === "ar" ? zone.subtitle_ar : zone.subtitle_en;
    const tag = currentLang === "ar" ? zone.tag_ar : zone.tag_en;

    return `
      <div data-zone-id="${zone.id}" onclick="selectZone('${zone.id}')" class="zone-card cursor-pointer rounded-2xl overflow-hidden border transition-all duration-300 ${
        isSelected ? 'selected' : ''
      }">
        <div class="h-32 w-full relative overflow-hidden aspect-[16/9]">
          <img src="${zone.image}" alt="${name}" width="600" height="338" class="w-full h-full object-cover transition-transform duration-500 hover:scale-105" loading="lazy" decoding="async" />
          <div class="absolute inset-0 bg-gradient-to-t from-black/85 to-transparent pointer-events-none"></div>
          <span class="absolute top-2.5 right-2.5 bg-black/85 border border-amber-400/30 text-amber-300 text-xs px-2.5 py-1 rounded-full font-semibold">
            ${tag}
          </span>
        </div>
        <div class="p-4">
          <div class="flex items-center justify-between mb-1">
            <h4 class="zone-title font-bold text-white text-base ${isSelected ? 'text-amber-300' : ''}">${name}</h4>
            <i class="zone-check fas fa-check-circle text-amber-400 text-lg ${isSelected ? '' : 'hidden'}"></i>
          </div>
          <p class="text-xs text-slate-400 leading-relaxed">${sub}</p>
        </div>
      </div>
    `;
  }).join("");
}

function selectZone(zoneId) {
  bookingState.zone = zoneId;
  const cards = document.querySelectorAll(".zone-card");
  if (cards.length > 0) {
    cards.forEach(card => {
      const zid = card.getAttribute("data-zone-id");
      const isSelected = (zid === zoneId);
      card.classList.toggle("selected", isSelected);
      const title = card.querySelector(".zone-title");
      const check = card.querySelector(".zone-check");
      if (title) title.classList.toggle("text-amber-300", isSelected);
      if (check) check.classList.toggle("hidden", !isSelected);
    });
  } else {
    renderZoneCards();
  }

  // Automatically select the first available table in this zone
  const firstAvailable = FLOOR_TABLES.find(t => t.zone === zoneId && t.status === "available");
  if (firstAvailable) {
    bookingState.tableId = firstAvailable.id;
  }
  renderFloorMap();
  renderSelectedTableBadge();
}

function renderFloorMap() {
  const container = document.getElementById("floor-map-grid");
  if (!container) return;

  // Filter tables according to current selected zone
  const tables = FLOOR_TABLES.filter(t => t.zone === bookingState.zone);

  container.innerHTML = tables.map(table => {
    const isAvailable = table.status === "available";
    const isSelected = bookingState.tableId === table.id;
    const view = currentLang === "ar" ? table.view_ar : table.view_en;
    const guestsLabel = TRANSLATIONS[currentLang].guestsUnit;

    let shapeClass = "rounded-2xl";
    let icon = "fa-chair";
    if (table.shape === "round") {
      shapeClass = "rounded-full aspect-square";
      icon = "fa-circle-notch";
    } else if (table.shape === "booth") {
      shapeClass = "rounded-2xl border-l-4 border-amber-400/80";
      icon = "fa-couch";
    }

    return `
      <div data-table-id="${table.id}" data-status="${table.status}" onclick="${isAvailable ? `selectTable('${table.id}', event)` : ''}" class="floor-table p-4 border flex flex-col items-center justify-between ${shapeClass} ${
        isSelected
          ? 'selected'
          : isAvailable
          ? 'available'
          : 'reserved'
      }">
        <div class="flex items-center justify-between w-full mb-2">
          <span class="table-id-label text-xs font-black tracking-wider ${isSelected ? 'text-amber-300' : isAvailable ? 'text-emerald-400' : 'text-slate-500'}">
            ${table.id}
          </span>
          <span class="table-status-badge text-[11px] px-2 py-0.5 rounded-full ${
            isSelected 
              ? 'bg-amber-400 text-black font-extrabold' 
              : isAvailable 
              ? 'bg-emerald-500/20 text-emerald-400' 
              : 'bg-slate-800 text-slate-500'
          }">
            ${isAvailable ? (isSelected ? (currentLang === 'ar' ? 'مختارة' : 'Chosen') : (currentLang === 'ar' ? 'متاحة' : 'Open')) : (currentLang === 'ar' ? 'محجوزة' : 'Booked')}
          </span>
        </div>

        <div class="my-2 flex flex-col items-center text-center">
          <i class="table-icon fas ${icon} text-2xl ${isSelected ? 'text-amber-300' : isAvailable ? 'text-emerald-400' : 'text-slate-600'}"></i>
          <span class="text-xs font-bold text-white mt-1">${table.capacity} ${guestsLabel}</span>
        </div>

        <div class="w-full text-center mt-1">
          <span class="text-[10px] text-slate-400 line-clamp-1">${view}</span>
        </div>
      </div>
    `;
  }).join("");

  renderSelectedTableBadge();
}

function selectTable(tableId, event) {
  if (event) {
    event.stopPropagation();
  }
  const table = FLOOR_TABLES.find(t => t.id === tableId);
  if (!table || table.status !== "available") return;

  bookingState.tableId = tableId;

  // Zero-DOM-rebuild: smoothly toggle classes on all table cards directly
  const allTableCards = document.querySelectorAll(".floor-table");
  allTableCards.forEach(card => {
    const tid = card.getAttribute("data-table-id");
    const tStatus = card.getAttribute("data-status");
    if (tStatus !== "available") return; // Keep reserved untouched

    const idLabel = card.querySelector(".table-id-label");
    const statusBadge = card.querySelector(".table-status-badge");
    const iconEl = card.querySelector(".table-icon");

    if (tid === tableId) {
      card.classList.remove("available");
      card.classList.add("selected");
      card.classList.add("table-reward-pulse");
      setTimeout(() => card.classList.remove("table-reward-pulse"), 350);

      if (idLabel) {
        idLabel.className = "table-id-label text-xs font-black tracking-wider text-amber-300";
      }
      if (statusBadge) {
        statusBadge.className = "table-status-badge text-[11px] px-2 py-0.5 rounded-full bg-amber-400 text-black font-extrabold";
        statusBadge.textContent = currentLang === "ar" ? "مختارة" : "Chosen";
      }
      if (iconEl) {
        iconEl.classList.remove("text-emerald-400");
        iconEl.classList.add("text-amber-300");
      }
    } else {
      card.classList.remove("selected", "table-reward-pulse");
      card.classList.add("available");

      if (idLabel) {
        idLabel.className = "table-id-label text-xs font-black tracking-wider text-emerald-400";
      }
      if (statusBadge) {
        statusBadge.className = "table-status-badge text-[11px] px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400";
        statusBadge.textContent = currentLang === "ar" ? "متاحة" : "Open";
      }
      if (iconEl) {
        iconEl.classList.remove("text-amber-300");
        iconEl.classList.add("text-emerald-400");
      }
    }
  });

  renderSelectedTableBadge();
  showToast(currentLang === "ar" ? `تم تحديد الطاولة ${tableId} بنجاح ✨` : `Table ${tableId} selected successfully ✨`);
}

function renderSelectedTableBadge() {
  const badgeEl = document.getElementById("selected-table-badge-info");
  if (!badgeEl) return;

  const table = FLOOR_TABLES.find(t => t.id === bookingState.tableId);
  const zone = SEATING_ZONES.find(z => z.id === bookingState.zone);

  if (table && zone) {
    const zoneName = currentLang === "ar" ? zone.name_ar : zone.name_en;
    const view = currentLang === "ar" ? table.view_ar : table.view_en;
    const guestsLabel = TRANSLATIONS[currentLang].guestsUnit;

    badgeEl.innerHTML = `
      <div class="flex items-center gap-3 bg-amber-500/10 border border-amber-400/40 p-3 rounded-xl">
        <div class="w-10 h-10 rounded-lg bg-amber-500 text-black flex items-center justify-center font-black text-sm">
          ${table.id}
        </div>
        <div>
          <div class="font-bold text-white text-sm">${zoneName}</div>
          <div class="text-xs text-amber-300/90">${table.capacity} ${guestsLabel} • ${view}</div>
        </div>
      </div>
    `;
  }
}

// Step 3: Occasion & Add-ons
function setOccasion(occasionKey) {
  bookingState.occasion = occasionKey;
  document.querySelectorAll(".occasion-pill").forEach(pill => {
    const occ = pill.getAttribute("data-occasion");
    pill.classList.toggle("selected", occ === occasionKey);
  });
}

function toggleCakeAddon(checked) {
  bookingState.addons.cake = checked;
  const inputEl = document.getElementById("cake-text-input");
  if (inputEl) {
    inputEl.style.display = checked ? "block" : "none";
  }
}

function toggleFlowersAddon(checked) {
  bookingState.addons.flowers = checked;
}

// Step 4: Summary & WhatsApp Dispatch
function renderBookingSummary() {
  const summaryContainer = document.getElementById("booking-summary-container");
  if (!summaryContainer) return;

  const zone = SEATING_ZONES.find(z => z.id === bookingState.zone);
  const table = FLOOR_TABLES.find(t => t.id === bookingState.tableId);
  const sar = TRANSLATIONS[currentLang].sar;

  const zoneFee = zone ? zone.fee : 0;
  let addonsFee = 0;
  if (bookingState.addons.cake) addonsFee += 120;
  if (bookingState.addons.flowers) addonsFee += 180;

  const totalFee = zoneFee + addonsFee;

  const zoneName = zone ? (currentLang === "ar" ? zone.name_ar : zone.name_en) : "";
  const guestsLabel = TRANSLATIONS[currentLang].guestsUnit;
  const periodObj = DINING_PERIODS.find(p => p.id === bookingState.period);
  const periodTitle = periodObj ? (currentLang === "ar" ? periodObj.title_ar : periodObj.title_en) : "";

  summaryContainer.innerHTML = `
    <div class="glass-panel p-5 rounded-2xl border border-amber-400/30 space-y-3">
      <div class="flex items-center justify-between pb-3 border-b border-white/10">
        <span class="text-sm text-slate-400">${currentLang === 'ar' ? 'التاريخ والوقت:' : 'Date & Time:'}</span>
        <span class="font-bold text-white text-sm">${bookingState.selectedDate} • ${bookingState.timeSlot}</span>
      </div>
      <div class="flex items-center justify-between pb-3 border-b border-white/10">
        <span class="text-sm text-slate-400">${currentLang === 'ar' ? 'عدد الضيوف والفترة:' : 'Party & Period:'}</span>
        <span class="font-bold text-amber-300 text-sm">${bookingState.partySize} ${guestsLabel} • ${periodTitle}</span>
      </div>
      <div class="flex items-center justify-between pb-3 border-b border-white/10">
        <span class="text-sm text-slate-400">${currentLang === 'ar' ? 'المنطقة ورقم الطاولة:' : 'Zone & Table:'}</span>
        <span class="font-bold text-emerald-400 text-sm">${zoneName} (${table ? table.id : ''})</span>
      </div>
      ${totalFee > 0 ? `
      <div class="flex items-center justify-between pt-1 text-sm font-bold text-amber-400">
        <span>${currentLang === 'ar' ? 'إجمالي رسوم الخدمات الإضافية:' : 'Total Special Amenities Fee:'}</span>
        <span>${totalFee} ${sar}</span>
      </div>
      ` : ''}
    </div>
  `;
}

function confirmVIPReservation() {
  const nameInput = document.getElementById("guest-name");
  const phoneInput = document.getElementById("guest-phone");
  const notesInput = document.getElementById("guest-notes");
  const cakeTextInput = document.getElementById("cake-inscription");
  const dietaryInput = document.getElementById("dietary-requests");

  const name = nameInput ? nameInput.value.trim() : "";
  const phone = phoneInput ? phoneInput.value.trim() : "";
  const notes = notesInput ? notesInput.value.trim() : "";
  const cakeText = cakeTextInput ? cakeTextInput.value.trim() : "";
  const dietary = dietaryInput ? dietaryInput.value.trim() : "";

  if (!name) {
    showToast(currentLang === "ar" ? "يرجى كتابة اسم الضيف الكريم" : "Please enter guest name", false);
    if (nameInput) nameInput.focus();
    return;
  }

  if (!phone) {
    showToast(currentLang === "ar" ? "يرجى إدخال رقم الجوال / الواتساب" : "Please enter mobile number", false);
    if (phoneInput) phoneInput.focus();
    return;
  }

  const zone = SEATING_ZONES.find(z => z.id === bookingState.zone);
  const table = FLOOR_TABLES.find(t => t.id === bookingState.tableId);
  const periodObj = DINING_PERIODS.find(p => p.id === bookingState.period);

  const bookingRef = `RSG-VIP-${Math.floor(1000 + Math.random() * 9000)}`;
  const zoneFee = zone ? zone.fee : 0;
  let addonsFee = 0;
  if (bookingState.addons.cake) addonsFee += 120;
  if (bookingState.addons.flowers) addonsFee += 180;
  const grandTotalFees = zoneFee + addonsFee;

  let occasionLabel = "عادي راقي";
  if (bookingState.occasion === "romantic") occasionLabel = "عشاء رومانسي / ذكرى سنوية";
  if (bookingState.occasion === "birthday") occasionLabel = "عيد ميلاد";
  if (bookingState.occasion === "business") occasionLabel = "عشاء عمل رسمي";
  if (bookingState.occasion === "family") occasionLabel = "اجتماع عائلي خاص";

  // Build Concierge WhatsApp payload
  let msg = `👑 *طلب حجز طاولة VIP ملكية | مداخن ومشويات الرياض*\n`;
  msg += `*RIYADH SMOKE & GRILL - LUXURY CONCIERGE*\n`;
  msg += `─────────────────────────\n`;
  msg += `🔖 *رمز الحجز المرجعي:* ${bookingRef}\n`;
  msg += `👤 *اسم الضيف:* ${name}\n`;
  msg += `📞 *رقم التواصل:* ${phone}\n`;
  msg += `─────────────────────────\n`;
  msg += `📅 *تاريخ الحجز:* ${bookingState.selectedDate}\n`;
  msg += `⏰ *وقت الوصول الدقيق:* ${bookingState.timeSlot}\n`;
  msg += `🕒 *الفترة:* ${periodObj ? periodObj.title_ar : ''}\n`;
  msg += `👥 *عدد الضيوف:* ${bookingState.partySize} مقاعد\n`;
  msg += `🏛️ *المنطقة:* ${zone ? zone.name_ar : ''}\n`;
  msg += `🪑 *رقم الطاولة:* ${table ? table.id : 'T-01'} (${table ? table.view_ar : ''})\n`;
  msg += `─────────────────────────\n`;
  msg += `🎉 *المناسبة:* ${occasionLabel}\n`;
  
  if (bookingState.addons.cake) {
    msg += `🎂 *كيكة شوكولاتة فاخرة (+120 ر.س)*: ${cakeText ? `[العبارة: ${cakeText}]` : '[بدون عبارة]'}\n`;
  }
  if (bookingState.addons.flowers) {
    msg += `💐 *تنسيق باقة ورد طبيعي فاخرة (+180 ر.س)*\n`;
  }
  if (dietary) {
    msg += `🥗 *ملاحظات غذائية خاصة:* ${dietary}\n`;
  }
  if (notes) {
    msg += `📝 *ملاحظات إضافية للكونسيرج:* ${notes}\n`;
  }

  if (grandTotalFees > 0) {
    msg += `─────────────────────────\n`;
    msg += `💰 *إجمالي رسوم الخدمات الإضافية:* ${grandTotalFees} ر.س\n`;
  }

  msg += `─────────────────────────\n`;
  msg += `👔 *سياسة الزي:* رسمي أنيق (Smart Casual)\n`;
  msg += `✨ *حجز مؤكد عبر نظام ABDO HOUSE للحجوزات الذكية*`;

  const url = `https://wa.me/${RESTAURANT_PHONE}?text=${encodeURIComponent(msg)}`;
  window.open(url, "_blank");

  showToast(currentLang === "ar" ? "جاري تحويلك لواتساب كونسيرج المطعم لتأكيد الحجز..." : "Redirecting to restaurant concierge WhatsApp...");
  closeReservationModal();
}

// ==========================================
// 6. INITIALIZATION & EVENT LISTENERS
// ==========================================

document.addEventListener("DOMContentLoaded", () => {
  // Set default language
  setLanguage("ar");

  // Initialize quick-date-input with today's date
  const quickDate = document.getElementById("quick-date-input");
  if (quickDate) {
    const today = getFormattedDate(0);
    quickDate.value = today;
    quickDate.min = today;
  }

  // Party size clicks
  document.querySelectorAll(".party-size-pill").forEach(pill => {
    pill.addEventListener("click", () => {
      const size = parseInt(pill.getAttribute("data-size"));
      setPartySize(size);
    });
  });

  // Dining period clicks
  document.querySelectorAll(".dining-period-card").forEach(card => {
    card.addEventListener("click", () => {
      const p = card.getAttribute("data-period");
      selectDiningPeriod(p);
    });
  });

  // Cake inscription input
  const cakeCheck = document.getElementById("addon-cake");
  if (cakeCheck) {
    cakeCheck.addEventListener("change", e => toggleCakeAddon(e.target.checked));
  }
  const flowerCheck = document.getElementById("addon-flowers");
  if (flowerCheck) {
    flowerCheck.addEventListener("change", e => toggleFlowersAddon(e.target.checked));
  }

  // Pre-render reservation wizard components for instantaneous (0ms) opening
  try {
    if (typeof renderDateChips === "function") renderDateChips();
    if (typeof renderTimeSlots === "function") renderTimeSlots();
    if (typeof renderZoneCards === "function") renderZoneCards();
    if (typeof renderFloorMap === "function") renderFloorMap();
  } catch (err) {}

  // Backdrop click listeners to dismiss modals instantly
  const resModal = document.getElementById("reservation-modal");
  if (resModal) {
    resModal.addEventListener("click", (e) => {
      if (e.target === resModal) closeReservationModal();
    });
  }
  const cartDrawer = document.getElementById("cart-drawer");
  if (cartDrawer) {
    cartDrawer.addEventListener("click", (e) => {
      if (e.target === cartDrawer) toggleCart(false);
    });
  }

  // 60fps Mobile Performance: Global passive listeners for zero scroll-blocking overhead
  try {
    window.addEventListener("scroll", () => {}, { passive: true });
    window.addEventListener("touchmove", () => {}, { passive: true });
    window.addEventListener("touchstart", () => {}, { passive: true });
  } catch (err) {}

  // Start floating live reservation ticker (Social proof)
  startLiveReservationTicker();
});

// ==========================================
// 7. SOCIAL PROOF LIVE RESERVATION TICKER
// ==========================================

const SOCIAL_PROOF_RESERVATIONS = [
  {
    ar: "🔥 تم حجز كابينة VIP رقم 4 قبل 3 دقائق لعشاء عائلي",
    en: "🔥 VIP Cabana T-15 was reserved 3 mins ago for Family Gathering"
  },
  {
    ar: "✨ تم حجز طاولة التراس T-10 قبل 7 دقائق لجلسة الغروب",
    en: "✨ Skyline Terrace T-10 was reserved 7 mins ago for Sunset Golden Hour"
  },
  {
    ar: "👑 تم حجز طاولة ملكية T-06 قبل 12 دقيقة لعشاء عمل",
    en: "👑 Royal Table T-06 was reserved 12 mins ago for Business Dinner"
  },
  {
    ar: "🎉 تم حجز كابينة السلطان T-17 قبل 5 دقائق لاحتفال عيد ميلاد",
    en: "🎉 Sultan Cabana T-17 was reserved 5 mins ago for Birthday Celebration"
  },
  {
    ar: "🕯️ تم حجز طاولة لشخصين T-01 قبل 15 دقيقة لعشاء رومانسي",
    en: "🕯️ Intimate Table T-01 was reserved 15 mins ago for Romantic Anniversary"
  }
];

let currentTickerIndex = 0;
let tickerTimeout = null;
let isTickerDismissed = false;

function dismissLiveTicker(e) {
  if (e) e.stopPropagation();
  isTickerDismissed = true;
  if (tickerTimeout) clearTimeout(tickerTimeout);
  const tickerEl = document.getElementById("live-reservation-ticker");
  if (tickerEl) {
    tickerEl.classList.remove("ticker-visible");
    tickerEl.style.display = "none";
  }
}

function startLiveReservationTicker() {
  const tickerEl = document.getElementById("live-reservation-ticker");
  if (!tickerEl) return;

  function showNextTicker() {
    if (isTickerDismissed) return;
    const item = SOCIAL_PROOF_RESERVATIONS[currentTickerIndex];
    currentTickerIndex = (currentTickerIndex + 1) % SOCIAL_PROOF_RESERVATIONS.length;

    const text = currentLang === "ar" ? item.ar : item.en;
    tickerEl.innerHTML = `
      <div class="ticker-box">
        <span class="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse flex-shrink-0"></span>
        <span class="text-xs sm:text-sm font-bold text-white tracking-wide">${text}</span>
        <button onclick="dismissLiveTicker(event)" class="text-slate-400 hover:text-white p-1 rounded transition-colors text-xs ml-1" title="${currentLang === 'ar' ? 'إغلاق' : 'Close'}">
          <i class="fas fa-times"></i>
        </button>
      </div>
    `;

    tickerEl.classList.add("ticker-visible");

    // Automatically fades out after 4 seconds as requested
    setTimeout(() => {
      if (isTickerDismissed) return;
      tickerEl.classList.remove("ticker-visible");
      // Cycle every 11 seconds
      tickerTimeout = setTimeout(showNextTicker, 11000);
    }, 4000);
  }

  // First appearance after 3 seconds
  tickerTimeout = setTimeout(showNextTicker, 3000);
}
