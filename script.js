const products = [
  {
    name: { en: "Organic Tomatoes", hi: "साबुत टमाटर", kn: "ಆರ್ಗ್ಯಾನಿಕ್ ಟೊಮ್ಯಾಟೊ", te: "అవిభక్త టమోటాలు", ta: "கரிம தக்காளி" },
    price: 70,
    unit: { en: "per kg", hi: "प्रति किलो", kn: "ಕಿಲೋಗೆ", te: "ప్రతి కిలో", ta: "ஒரு கிலோவுக்கு" },
    origin: { en: "Karnataka", hi: "कर्नाटक", kn: "ಕರ್ನಾಟಕ", te: "కర్ణాటక", ta: "கர்நாடகம்" },
    category: "Vegetables",
    tag: { en: "Fresh today", hi: "आज ताज़ा", kn: "ಇಂದು ತಾಜಾ", te: "నేడు తాజా", ta: "இன்று புதியது" }
  },
  {
    name: { en: "Golden Rice", hi: "स्वर्ण चावल", kn: "ಗೋಲ್ಡನ್ ಅಕ್ಕಿ", te: "గోల్డెన్ బియ్యం", ta: "தங்க அரிசி" },
    price: 55,
    unit: { en: "per kg", hi: "प्रति किलो", kn: "ಕಿಲೋಗೆ", te: "ప్రతి కిలో", ta: "ஒரு கிலோவுக்கு" },
    origin: { en: "Punjab", hi: "पंजाब", kn: "ಪಂಜಾಬ್", te: "పంజాబ్", ta: "பஞ்சாப்" },
    category: "Grains",
    tag: { en: "Seasonal", hi: "मौसमी", kn: "ಹರಿದಿನ", te: "ရာသిక", ta: "பருவகால" }
  },
  {
    name: { en: "Farm Eggs", hi: "खाद्य अंडे", kn: "ಫಾರ್ಮ್ ಹಂಚಿ", te: "పొలము అండ్లు", ta: "கிராம முட்டைகள்" },
    price: 8,
    unit: { en: "per piece", hi: "प्रति अंडा", kn: "ಪ್ರತಿ ಒಣಕೆ", te: "ప్రతి అవుట్", ta: "ஒரு முட்டைக்கு" },
    origin: { en: "Madhya Pradesh", hi: "मध्य प्रदेश", kn: "ಮಧ್ಯಪ್ರದೇಶ", te: "మధ్యప్రదేశ్", ta: "மத்தியப் பிரதேசம்" },
    category: "Dairy & Eggs",
    tag: { en: "Free range", hi: "मुक्त चराई", kn: "ಮುಕ್ತ ರೆಂಜ್", te: "స్వేచ్ఛా περιοరం", ta: "இலவச ரேஞ்ச்" }
  },
  {
    name: { en: "Fresh Spinach", hi: "ताज़ा पालक", kn: "ತಾಜಾ ಸ್ಪಿನಚ್", te: "తాజా స్పినాచ్", ta: "புதிய பாசி" },
    price: 25,
    unit: { en: "per bundle", hi: "प्रति गट्ठा", kn: "ಪ್ರತಿ ಕಟ್ಟಿಗೆ", te: "ప్రతి బండిల్", ta: "ஒரு குவளைக்கு" },
    origin: { en: "Haryana", hi: "हरियाणा", kn: "ಹರಿಯಾಣಾ", te: "హర్యానా", ta: "ஹரியானா" },
    category: "Vegetables",
    tag: { en: "Hydroponic", hi: "हाइड्रोपोनिक", kn: "ಹೈಡ್ರೋಪೋನಿಕ್", te: "హైడ్రోపోనిక్", ta: "ஹைட்ரோபோனிக்" }
  }
];

const stories = [
  {
    title: { en: "Sujata’s 6-acre organic farm", hi: "सुजाता की 6-एकड़ जैविक खेती", kn: "ಸುಜಾತಾಳ 6-ಎಕರೆ ಸಾವಯವ ತೋಟ", te: "సుజాత యొక్క 6-ఎకరాల సేంద్రీయ పొలం", ta: "சுஜாதாவின் 6 ஏக்கர் கரிம பண்ணை" },
    text: { en: "Sujata grows pesticide-free tomatoes and shares soil-health updates with each buyer.", hi: "सुजाता बिना कीटनाशक टमाटर उगाती हैं और हर खरीदार को मिट्टी की सेहत की जानकारी देती हैं।", kn: "ಸುಜಾತಾ ಕೀಟನಾಶಕವಿಲ್ಲದ ಟೊಮ್ಯಾಟೊಗಳನ್ನು ಬೆಳೆದು ಪ್ರತಿ ಗ್ರಾಹಕರಿಗೆ ಮಣ್ಣಿನ ಆರೋಗ್ಯದ ನವೀಕರಣಗಳನ್ನು ಹಂಚಿಕೊಳ್ಳುತ್ತಾರೆ.", te: "సుజాత కీటకనాశకాలు లేని టమోటాలు పెంచి ప్రతి క్రేతకు మట్టి ఆరోగ్య తాజా సమాచారాన్ని పంచుకుంటుంది.", ta: "சுஜாதா பூச்சிக்கொல்லி இல்லாத தக்காளிகளை வளர்த்து ஒவ்வொரு வாங்குபவருக்கும் மண்ணின் ஆரோக்கியத்தைப் பற்றி தெரிவிக்கிறார்." }
  },
  {
    title: { en: "Raghav’s rain-fed paddy plot", hi: "रघव की वर्षा-सहायित धान की पट्टी", kn: "ರಘವ ಅವರ ಮಳೆಪಾನದಾಗಿ ಇರುವ ಅಕ್ಕಿ ಪ್ಲಾಟ್", te: "రఘవ యొక్క వర్షాధార పండ్ల పొలం", ta: "ராகவாவின் மழைநீர் நெற்பயிர் நிலம்" },
    text: { en: "Raghav posts weekly crop health updates and offers community pickup at the field gate.", hi: "रघव साप्ताहिक फसल स्वास्थ्य अपडेट पोस्ट करते हैं और खेत के गेट पर सामुदायिक पिकअप भी देते हैं।", kn: "ರಘವವು ಸಾಪ್ತಾಹಿಕ ಬೆಳೆ ಆರೋಗ್ಯ ನವೀಕರಣಗಳನ್ನು ಹಂಚಿಕೊಳ್ಳುತ್ತಾರೆ ಮತ್ತು ಹೊಲದ ಗೇಟಿನಲ್ಲಿ ಸಮುದಾಯ ಪಿಕಪ್ ಕಲ್ಪಿಸುತ್ತಾರೆ.", te: "రఘవ週ివారికీ పంట ఆరోగ్య తాజా సమాచారాన్ని ఇస్తాడు మరియు పొల గేటులో సముదాయ పికప్ అందిస్తాడు.", ta: "ராகவா வாராந்திர பயிர் ஆரோக்கிய புதுப்பிப்புகளை வெளியிடுகிறார் மற்றும் வயல் வாசலில் சமூகம் மூலம் எடுத்து செல்ல உதவுகிறார்." }
  },
  {
    title: { en: "Naina’s dairy cooperative", hi: "नैना की दुग्ध सहकारी", kn: "ನೈನಾಳ ಹಾಲು ಸಹಕಾರಿ", te: "నైనా యొక్క పాడి సహకారం", ta: "நைனாவின் பால் கூட்டுறவு" },
    text: { en: "Naina connects rural milk producers with households and tracks quality from collection to delivery.", hi: "नैना ग्रामीण दूध उत्पादकों को घरों से जोड़ती हैं और संग्रह से वितरण तक गुणवत्ता को ट्रैक करती हैं।", kn: "ನೈನಾ ಗ್ರಾಮೀಣಹಾಲು ಉತ್ಪಾದಕರನ್ನು ಮನೆಗಳಿಗೆ ಸಂಪರ್ಕಿಸುತ್ತಾಳೆ ಮತ್ತು ಸಂಗ್ರಹದಿಂದ ವಿತರಣೆಯವರೆಗೂ ಗುಣಮಟ್ಟವನ್ನು ಟ್ರ್ಯಾಕ್ ಮಾಡುತ್ತಾಳೆ.", te: "నైనా గ్రామీణ పాలు ఉత్పత్తిదారులను ఇంటి వరకు కలుపుతుంది మరియు సేకరణ నుండి డెలివరీ వరకు నాణ్యతను ట్రాక్ చేస్తుంది.", ta: "நைனா கிராமப்புற பால் உற்பத்தியாளர்களை வீடுகளுடன் இணைத்து சேகரிப்பு முதல் விநியோகம் வரை தரத்தை கண்காணிக்கிறார்." }
  }
];

const translations = {
  en: {
    brand: "Kissan Cart",
    navProducts: "Products",
    navStories: "Farm Stories",
    navSell: "Sell Now",
    heroEyebrow: "Fresh from the field, trusted by your neighborhood",
    heroTitle: "Sell your harvest directly online and bring buyers closer to your land.",
    heroText: "Kissan Cart is a farmer-first marketplace where growers can list produce, share their farm stories, and build direct relationships with customers.",
    heroPrimaryBtn: "Start selling",
    heroSecondaryBtn: "Explore products",
    highlightOne: "Live field-to-door delivery",
    highlightTwo: "Transparent pricing",
    highlightThree: "Trusted farmer profiles",
    heroCardTitle: "This week on Kissan Cart",
    metricFarmers: "Active farmers",
    metricInquiries: "Buyer inquiries",
    miniOne: "Organic tomatoes • ₹70/kg",
    miniTwo: "Fresh sugarcane juice • ₹40",
    miniThree: "Farm-fresh eggs • ₹8/piece",
    marketplaceEyebrow: "Marketplace",
    productsHeading: "Fresh produce from real farms",
    productsSubtext: "Browse verified crops and food products posted by local growers.",
    storiesEyebrow: "Farmer stories",
    storiesHeading: "Meet the people behind the harvest",
    storiesSubtext: "Every listing comes with a story about the land, the crop, and the farmer’s journey.",
    portalEyebrow: "Farmer portal",
    portalHeading: "Sign in to manage your field listings",
    portalSubtext: "Farmers can log in, publish fresh harvests, and keep buyer requests organized from one simple dashboard.",
    signinTitle: "Farmer sign-in",
    signinText: "Use any email and password to preview the dashboard experience.",
    emailLabel: "Email or phone",
    passwordLabel: "Password",
    loginBtn: "Log in",
    signinHint: "Demo access is intentionally simple for quick testing.",
    welcomeTitle: "Welcome back",
    dashboardText: "Manage your live harvest posts and buyer visibility.",
    logoutBtn: "Log out",
    cropLabel: "Crop name",
    quantityLabel: "Quantity available",
    locationLabel: "Pickup location",
    priceLabel: "Suggested price",
    publishBtn: "Publish listing",
    visibilityHeading: "Buyer visibility",
    previewEmpty: "Sign in to see your live listing summary and active harvest posts.",
    weatherTitle: "Live weather",
    weatherText: "Check today’s weather before harvesting or transporting your produce.",
    weatherValue: "28°C • Sunny • Good for harvest",
    tipsTitle: "Crop care tips",
    tipsText: "Helpful reminders to keep your crops healthy and market-ready.",
    tipOne: "Water early in the morning.",
    tipTwo: "Check soil moisture before fertilizing.",
    tipThree: "Protect fresh produce from heat during transit.",
    trackingTitle: "Order tracking",
    trackingText: "Keep buyers updated with clear delivery progress.",
    trackingStep1: "Packed",
    trackingStep2: "In transit",
    trackingStep3: "Out for delivery",
    trackingStep4: "Delivered",
    footerText: "© 2026 Kissan Cart. Built for farmers, by farmers.",
    emailPlaceholder: "farmer@example.com",
    passwordPlaceholder: "••••••••",
    cropPlaceholder: "Tomatoes / Paddy",
    quantityPlaceholder: "200 kg",
    locationPlaceholder: "Village, district",
    pricePlaceholder: "₹70 per kg",
    requestNow: "Buy now",
    all: "All",
    categories: { Vegetables: "Vegetables", Grains: "Grains", "Dairy & Eggs": "Dairy & Eggs" },
    emptyListings: "No harvests published yet. Start with your first listing.",
    noListingsPreview: "Your latest listing will appear here after publishing.",
    listingSummary: "is now visible to buyers for",
    pickupFrom: "Pickup from",
    priceLabelText: "Price:",
    loginNotice: "Sign in to see your live listing summary and active harvest posts.",
    listingCountOne: "active listing",
    listingCountMany: "active listings"
  },
  hi: {
    brand: "किसान कार्ट",
    navProducts: "उत्पाद",
    navStories: "खेत की कहानियाँ",
    navSell: "अभी बेचें",
    heroEyebrow: "खेत से सीधे, आपके पड़ोस में भरोसेमंद",
    heroTitle: "अपने फसल को सीधे ऑनलाइन बेचें और खरीदारों को अपने खेत तक ले आएँ।",
    heroText: "किसान कार्ट एक किसान-आधारित बाज़ार है जहाँ किसान अपनी उपज सूचीबद्ध कर सकते हैं, अपनी खेत की कहानी साझा कर सकते हैं और ग्राहकों के साथ सीधा संबंध बना सकते हैं।",
    heroPrimaryBtn: "बिक्री शुरू करें",
    heroSecondaryBtn: "उत्पाद देखें",
    highlightOne: "खेत से घर तक त्वरित डिलीवरी",
    highlightTwo: "पारदर्शी कीमत",
    highlightThree: "भरोसेमंद किसान प्रोफ़ाइल",
    heroCardTitle: "इस हफ्ते किसान कार्ट पर",
    metricFarmers: "सक्रिय किसान",
    metricInquiries: "खरीदार पूछताछ",
    miniOne: "साबुत टमाटर • ₹70/किलो",
    miniTwo: "ताज़ा गन्ने का जूस • ₹40",
    miniThree: "खेत ताज़ा अंडे • ₹8/प्रति अंडा",
    marketplaceEyebrow: "बाजार",
    productsHeading: "वास्तविक खेतों से ताज़ी उपज",
    productsSubtext: "स्थानीय उगाने वालों द्वारा पोस्ट की गई सत्यापित फसलें और खाद्य उत्पाद देखें।",
    storiesEyebrow: "किसान कहानियाँ",
    storiesHeading: "फसल के पीछे वाले लोगों से मिलें",
    storiesSubtext: "हर सूची में खेत, फसल और किसान की यात्रा की कहानी होती है।",
    portalEyebrow: "किसान पोर्टल",
    portalHeading: "अपने खेत की सूचियाँ प्रबंधित करने के लिए साइन इन करें",
    portalSubtext: "किसान लॉग इन कर सकते हैं, नई फसल सूची बना सकते हैं और खरीदारों की अनुरोधों को एक सरल डैशबोर्ड से व्यवस्थित रख सकते हैं।",
    signinTitle: "किसान साइन-इन",
    signinText: "डैशबोर्ड अनुभव देखने के लिए कोई भी ईमेल या पासवर्ड उपयोग करें।",
    emailLabel: "ईमेल या फोन",
    passwordLabel: "पासवर्ड",
    loginBtn: "लॉगिन",
    signinHint: "डेमो पहुँच सरल परीक्षण के लिए रखी गई है।",
    welcomeTitle: "फिर से स्वागत है",
    dashboardText: "अपनी लाइव फसल सूची और खरीदार दृश्यता प्रबंधित करें।",
    logoutBtn: "लॉग आउट",
    cropLabel: "फसल का नाम",
    quantityLabel: "उपलब्ध मात्रा",
    locationLabel: "पिकअप स्थान",
    priceLabel: "सुझाई गई कीमत",
    publishBtn: "सूची प्रकाशित करें",
    visibilityHeading: "खरीदार दृश्यता",
    previewEmpty: "अपनी लाइव सूची सारांश और सक्रिय फसल सूचियाँ देखने के लिए साइन इन करें।",
    weatherTitle: "लाइव मौसम",
    weatherText: "अपनी उपज काटने या ले जाने से पहले आज का मौसम देखें।",
    weatherValue: "28°C • साफ मौसम • कटाई के लिए अच्छा",
    tipsTitle: "फसल देखभाल टिप्स",
    tipsText: "अपनी फसलों को स्वस्थ और बाजार-ready रखने के लिए उपयोगी यादें।",
    tipOne: "सुबह जल्दी पानी दें।",
    tipTwo: "खाद डालने से पहले मिट्टी की नमी चेक करें।",
    tipThree: "परिवहन के दौरान ताज़ी उपज को गर्मी से बचाएँ।",
    trackingTitle: "ऑर्डर ट्रैकिंग",
    trackingText: "खरीदारों को स्पष्ट डिलीवरी प्रगति से अपडेट रखें।",
    trackingStep1: "पैक किया गया",
    trackingStep2: "राह में",
    trackingStep3: "डिलिवरी के लिए बाहर",
    trackingStep4: "डिलीवर हो गया",
    footerText: "© 2026 किसान कार्ट। किसानों के लिए, किसानों द्वारा बनाया गया।",
    emailPlaceholder: "farmer@example.com",
    passwordPlaceholder: "••••••••",
    cropPlaceholder: "टमाटर / धान",
    quantityPlaceholder: "200 किलो",
    locationPlaceholder: "गाँव, जिला",
    pricePlaceholder: "₹70 प्रति किलो",
    requestNow: "अभी खरीदें",
    all: "सभी",
    categories: { Vegetables: "सब्जियाँ", Grains: "अनाज", "Dairy & Eggs": "डेयरी और अंडे" },
    emptyListings: "अभी तक कोई फसल प्रकाशित नहीं हुई। अपनी पहली सूची शुरू करें।",
    noListingsPreview: "अपनी नवीनतम सूची प्रकाशित होने के बाद यहाँ दिखाई देगी।",
    listingSummary: "अब खरीदारों के लिए दिखाई दे रही है",
    pickupFrom: "पिकअप से",
    priceLabelText: "कीमत:",
    loginNotice: "अपनी लाइव सूची सारांश और सक्रिय फसल सूचियाँ देखने के लिए साइन इन करें।",
    listingCountOne: "सक्रिय सूची",
    listingCountMany: "सक्रिय सूचियाँ"
  },
  kn: {
    brand: "ಕಿಸಾನ್ ಕಾರ್ಟ್",
    navProducts: "ಉತ್ಪನ್ನಗಳು",
    navStories: "ರೈತ ಕಥೆಗಳು",
    navSell: "ಇದೀಗ ಮಾರಾಟ ಮಾಡಿ",
    heroEyebrow: "ಹೊಲದಿಂದ ನೇರವಾಗಿ, ನಿಮ್ಮ ನೆರೆಹೊರೆಯವರು ನಂಬುವವರು",
    heroTitle: "ನಿಮ್ಮ ಬೆಳೆಗಳನ್ನು ישירות ಆನ್‌ಲೈನ್‌ನಲ್ಲಿ ಮಾರಾಟ ಮಾಡಿ ಮತ್ತು ಖರೀದಿದಾರರನ್ನು ನಿಮ್ಮ ಭೂಮಿಗೆ nearer ಮಾಡಿ.",
    heroText: "ಕಿಸಾನ್ ಕಾರ್ಟ್ ರೈತ-ಮೊದಲMarketplace ಆಗಿದ್ದು, ರೈತರು ತಮ್ಮ ಉತ್ಪನ್ನಗಳನ್ನು ಪಟ್ಟಿ ಮಾಡುವುದರ ಜೊತೆಗೆ ತಮ್ಮ ಹೊಲದ ಕಥೆಗಳನ್ನು ಹಂಚಿಕೊಂಡು ಗ್ರಾಹಕರೊಂದಿಗೆ ನೇರ ಸಂಪರ್ಕ ಮಾಡಬಹುದು.",
    heroPrimaryBtn: "ಮಾರಾಟ ಪ್ರಾರಂಭಿಸಿ",
    heroSecondaryBtn: "ಉತ್ಪನ್ನಗಳನ್ನು ನೋಡಿರಿ",
    highlightOne: "ಹೊಲದಿಂದ ಮನೆಗೆ ತ್ವರಿತ ಡೆಲಿವರಿ",
    highlightTwo: "ಪಾರದರ್ಶಕ ಬೆಲೆ",
    highlightThree: "ನಂಬಿಸಬಹುದಾದ ರೈತ ಪ್ರೊಫೈಲ್‌ಗಳು",
    heroCardTitle: "ಈ ವಾರ ಕಿಸಾನ್ ಕಾರ್ಟ್‌ನಲ್ಲಿ",
    metricFarmers: "ಸಕ್ರಿಯ ರೈತರು",
    metricInquiries: "ಖರೀದಿದಾರರ ಪ್ರಶ್ನೆಗಳು",
    miniOne: "ಆರ್ಗ್ಯಾನಿಕ್ ಟೊಮ್ಯಾಟೊ • ₹70/ಕೆ.ಜಿ",
    miniTwo: "ತಾಜಾ ಕಬ್ಬಿನ ಜ್ಯೂಸ್ • ₹40",
    miniThree: "ಹೊಲದ ತಾಜಾ ಮೊಟ್ಟೆಗಳು • ₹8/ಪ್ರತಿ ಮೊಟ್ಟೆ",
    marketplaceEyebrow: "ಮಾರ್ಕೆಟ್",
    productsHeading: "ನಿಜವಾದ ಹೊಲಗಳಿಂದ ತಾಜಾ ಉತ್ಪನ್ನಗಳು",
    productsSubtext: "ಸ್ಥಳೀಯ ರೈತರು ಪೋಸ್ಟ್ ಮಾಡಿದ ಪರಿಶೀಲಿತ ಬೆಳೆಗಳು ಮತ್ತು ಆಹಾರ ಉತ್ಪನ್ನಗಳನ್ನು ವೀಕ್ಷಿಸಿ.",
    storiesEyebrow: "ರೈತ ಕಥೆಗಳು",
    storiesHeading: "ಬೆಳೆಗಳ ಹಿಂದೆ ಇರುವ ಜನರನ್ನು ಭೇಟಿ ಮಾಡಿ",
    storiesSubtext: "ಪ್ರತಿ ಲಿಸ್ಟಿಂಗ್‌ನಲ್ಲಿ ಹೊಲ, ಬೆಳೆ ಮತ್ತು ರೈತನ ಯಾತ್ರೆಯ ಕಥೆ ಇರುತ್ತದೆ.",
    portalEyebrow: "ರೈತ ಪೋರಲ್",
    portalHeading: "ನಿಮ್ಮ ಹೊಲಪಟ್ಟಿಗಳನ್ನು ನಿರ್ವಹಿಸಲು ಲಾಗಿನ್ ಮಾಡಿ",
    portalSubtext: "ರೈತರು ಲಾಗಿನ್ ಮಾಡಿ, ತಾಜಾ ಬೆಳೆಗಳ ಪಟ್ಟಿ ಮಾಡಬಹುದು ಮತ್ತು ಖರೀದಿದಾರರ ವಿನಂತಿಗಳನ್ನು ಒಂದು ಸರಳ ಡ್ಯಾಶ್‌ಬೋರ್ಡಿನಿಂದ ನಿರ್ವಹಿಸಬಹುದು.",
    signinTitle: "ರೈತ ಸೈನ್-ಇನ್",
    signinText: "ಡ್ಯಾಶ್‌ಬೋರ್ಡ್ ಅನುಭವವನ್ನು ವೀಕ್ಷಿಸಲು ಯಾವುದೇ ಇಮೇಲ್ ಅಥವಾ ಪಾಸ್‌ವರ್ಡ್ ಬಳಸಿ.",
    emailLabel: "ಇಮೇಲ್ ಅಥವಾ ಫೋನ್",
    passwordLabel: "ಪಾಸ್‌ವರ್ಡ್",
    loginBtn: "ಲಾಗಿನ್",
    signinHint: "ಡೀಮೊ ಆಕ್ಸೆಸ್ ಸುಲಭ ಪರೀಕ್ಷೆಗೆ ಇಚ್ಛೆಯಂತೆ ಸರಳವಾಗಿದೆ.",
    welcomeTitle: "ಮತ್ತೆ ಸ್ವಾಗತ",
    dashboardText: "ನಿಮ್ಮ ಲೈವ್ ಬೆಳೆ ಪೋಸ್ಟ್‌ಗಳನ್ನು ಮತ್ತು ಖರೀದಿದಾರರ ಗೋಚರತೆಯನ್ನು ನಿರ್ವಹಿಸಿ.",
    logoutBtn: "ಲಾಗ್ ಔಟ್",
    cropLabel: "ಬೆಳೆ ಹೆಸರು",
    quantityLabel: "ಲಭ್ಯವಿರುವ ಪ್ರಮಾಣ",
    locationLabel: "ಪಿಕ್‌ಅಪ್ ಸ್ಥಳ",
    priceLabel: "ಸೂಚಿಸಲಾದ ಬೆಲೆ",
    publishBtn: "ಲಿಸ್ಟ್ ಪ್ರಕಟಿಸಿ",
    visibilityHeading: "ಖರೀದಿದಾರರ ಗೋಚರತೆ",
    previewEmpty: "ನಿಮ್ಮ ಲೈವ್ ಲಿಸ್ಟಿಂಗ್ ಸಾರಾಂಶ ಮತ್ತು ಸಕ್ರಿಯ ಬೆಳೆಗಳನ್ನು ನೋಡಲು ಸೈನ್ ಇನ್ ಮಾಡಿ.",
    weatherTitle: "ಲೈವ್ ಹವಾಮಾನ",
    weatherText: "ನಿಮ್ಮ ಬೆಳೆಗಳನ್ನು ಕಟ್ ಮಾಡುವ ಮೊದಲು ಅಥವಾ ಸಾಗಿಸುವ ಮೊದಲು امروزಿನ ಹವಾಮಾನವನ್ನು ಪರಿಶೀಲಿಸಿ.",
    weatherValue: "28°C • ಸೀಮಿತ ಸೂರ್ಯ • ಕಟಿಗೆ ಒಳ್ಳೆಯದು",
    tipsTitle: "ಬೆಳೆ ಆರೈಕೆ ಸಲಹೆಗಳು",
    tipsText: "ನಿಮ್ಮ ಬೆಳೆಗಳನ್ನು ಆರೋಗ್ಯಕರ ಮತ್ತು ಮಾರುಕಟ್ಟೆಗೆ ತಯಾರಿಸಲು ಉಪಯುಕ್ತ ನೆನಪುಗಳು।",
    tipOne: "ಮುಂಜಾನೆಯಲ್ಲಿ ನೀರನ್ನು ನೀಡಿ.",
    tipTwo: "ಸಾರಕ್ಕಾಗಿ ಮಣ್ಣಿನ ತೇವವನ್ನು ಪರಿಶೀಲಿಸಿ.",
    tipThree: "ಸಾಗಿಸುವ ಸಮಯದಲ್ಲಿ ತಾಜಾ ಉತ್ಪನ್ನಗಳನ್ನು ತಾಪದಿಂದ ರಕ್ಷಿಸಿ.",
    trackingTitle: "ಆರ್ಡರ್ ಟ್ರ್ಯಾಕಿಂಗ್",
    trackingText: "ಖರೀದಿದಾರರಿಗೆ ಸ್ಪಷ್ಟ ಸಾಗಣೆಯ ಪ್ರಗತಿಯನ್ನು ನವೀಕರಿಸಿ.",
    trackingStep1: "ಪ್ಯಾಕ್ ಮಾಡಲಾಗಿದೆ",
    trackingStep2: "ರಸ್ತೆಯಲ್ಲಿ",
    trackingStep3: "ವಿತರಣೆಗಾಗಿ ಹೊರಗೆ",
    trackingStep4: "ವಿತರಿಸಲಾಗಿದೆ",
    footerText: "© 2026 ಕಿಸಾನ್ ಕಾರ್ಟ್. ರೈತರಿಗೆ, ರೈತರಿಂದ ನಿರ್ಮಿಸಲಾಗಿದೆ.",
    emailPlaceholder: "farmer@example.com",
    passwordPlaceholder: "••••••••",
    cropPlaceholder: "ಟೊಮ್ಯಾಟೊ / ಅಕ್ಕಿ",
    quantityPlaceholder: "200 ಕೆಜಿ",
    locationPlaceholder: "ಗ್ರಾಮ, ಜಿಲ್ಲೆ",
    pricePlaceholder: "₹70 ಪ್ರತಿ ಕೆಜಿಗೆ",
    requestNow: "ಇದೀಗ ಖರೀದಿಸಿ",
    all: "ಎಲ್ಲವೂ",
    categories: { Vegetables: "ತರಕಾರಿಗಳು", Grains: "ಧಾನ್ಯಗಳು", "Dairy & Eggs": "ಹಾಲು ಮತ್ತು ಮೊಟ್ಟೆಗಳು" },
    emptyListings: "ಇನ್ನೂ ಯಾವುದೇ ಬೆಳೆಗಳನ್ನು ಪ್ರಕಟಿಸಲಾಗಿಲ್ಲ. ನಿಮ್ಮ ಮೊದಲ ಲಿಸ್ಟ್ ಅನ್ನು ಪ್ರಾರಂಭಿಸಿ.",
    noListingsPreview: "ನಿಮ್ಮiswapಲ್ಲದ ಲಿಸ್ಟ್ ಪ್ರಕಟವಾದ ನಂತರ ಇಲ್ಲಿ ತೋರಿಸುತ್ತದೆ.",
    listingSummary: "ಖರೀದಿದಾರರಿಗೆ ಈಗ ಗೋಚರಿಸುತ್ತಿದೆ",
    pickupFrom: "ಪಿಕ್‌ಅಪ್ ಸ್ಥಳ",
    priceLabelText: "ಬೆಲೆ:",
    loginNotice: "ನಿಮ್ಮ ಲೈವ್ ಲಿಸ್ಟ್ ಸಾರಾಂಶ ಮತ್ತು ಸಕ್ರಿಯ ಬೆಳೆಗಳನ್ನು ನೋಡಲು ಸೈನ್ ಇನ್ ಮಾಡಿ.",
    listingCountOne: "ಸಕ್ರಿಯ ಲಿಸ್ಟ್",
    listingCountMany: "ಸಕ್ರಿಯ ಲಿಸ್ಟ್‌ಗಳು"
  },
  te: {
    brand: "కిసాన్ కార్ట్",
    navProducts: "ఉత్పత్తులు",
    navStories: "రైతుల కథలు",
    navSell: "ఇప్పుడు అమ్మండి",
    heroEyebrow: "పొలంలో నుంచి నేరుగా, మీ పొరుగు వారిచే నమ్మదగినది",
    heroTitle: "మీ పంటను నేరుగా ఆన్‌లైన్‌లో విక్రయించండి మరియు కొనుగోలుదారులను మీ భూమికి దగ్గరగా తీసుకురండి.",
    heroText: "కిసాన్ కార్ట్ ఒక రైతు-ముందు మార్కెట్‌ప్లేస్, ఇక్కడ రైతులు తమ ఉత్పత్తులను జాబితా చేసుకొని తమ పొల కథలను పంచుకోవచ్చు మరియు కస్టమర్లతో నేరుగా సంబంధాలు ఏర్పరచుకోవచ్చు.",
    heroPrimaryBtn: "విక్రయాన్ని ప్రారంభించండి",
    heroSecondaryBtn: "ఉత్పత్తులను చూడండి",
    highlightOne: "పొలం నుండి ఇంటికి తక్షణ డెలివరీ",
    highlightTwo: "పారదర్శక ధర",
    highlightThree: "నమ్మదగిన రైతుల ప్రొఫైళ్ళు",
    heroCardTitle: "ఈ వారం కిసాన్ కార్ట్‌లో",
    metricFarmers: "సక్రియ రైతులు",
    metricInquiries: "కొనుగోలుదారులquiries",
    miniOne: "అవిభక్త టమోటాలు • ₹70/కిలో",
    miniTwo: "తాజా కర్ర జ్యూస్ • ₹40",
    miniThree: "పొలపు తాజా గుడ్లు • ₹8/ప్రతి గుడ్డు",
    marketplaceEyebrow: "మార్కెట్‌ప్లేస్",
    productsHeading: "నిజమైన పొలాల నుంచి తాజా ఉత్పత్తులు",
    productsSubtext: "స్థానిక రైతుల ద్వారా పోస్ట్ చేయబడిన ధృవీకరించబడిన పంటలు మరియు ఆహార ఉత్పత్తులను చూడండి.",
    storiesEyebrow: "రైతుల కథలు",
    storiesHeading: "పంట వెనుక ఉన్న ప్రజలని కలవండి",
    storiesSubtext: "ప్రతి జాబితా ఒక పొలం, పంట మరియు రైతు ప్రయాణం కథను కలిగి ఉంటుంది.",
    portalEyebrow: "రైతుల పోర్టల్",
    portalHeading: "మీ పొల జాబితాలను నిర్వహించడానికి సైన్ ఇన్ చేయండి",
    portalSubtext: "రైతులు లాగిన్ చేసి తాజా పంటలు జాబితా చేయగలరు మరియు కొనుగోలుదారుల అభ్యర్థులను ఒక సరళ డాష్‌బోర్డ్‌లో నిర్వహించగలరు.",
    signinTitle: "రైతుల సైన్-ఇన్",
    signinText: "డాష్‌బోర్డ్ అనుభవాన్ని చూడటానికి ఏదైనా ఇమెయిల్ లేదా పాస్‌వర్డ్ ఉపయోగించండి.",
    emailLabel: "ఇమెయిల్ లేదా ఫోన్",
    passwordLabel: "పాస్‌వర్డ్",
    loginBtn: "లాగిన్",
    signinHint: "డెమో యాక్సెస్ సులభమైన పరీక్ష కోసం సరళంగా ఉంటుంది.",
    welcomeTitle: "మళ్లీ స్వాగతం",
    dashboardText: "మీ ప్రత్యక్ష పంట పోస్ట్‌లు మరియు కొనుగోలుదారుల దృశ్యమానతను నిర్వహించండి.",
    logoutBtn: "లాగ్అవుట్",
    cropLabel: "పంట పేరు",
    quantityLabel: "అందుబాటులో ఉన్న పరిమాణం",
    locationLabel: "పిక్‌అప్ స్థలం",
    priceLabel: "సూచించిన ధర",
    publishBtn: "జాబితాను ప్రచురించండి",
    visibilityHeading: "కొనుగోలుదారుల దృశ్యమానత",
    previewEmpty: "మీ ప్రత్యక్ష జాబితా సారాంశం మరియు సక్రియ పంటలని చూడటానికి సైన్ ఇన్ చేయండి.",
    weatherTitle: "లైవ్ వాతావరణం",
    weatherText: "మీ పంటను కోయడానికి లేదా తీసుకెళ్లడానికి ముందు ఈరోజు వాతావరణాన్ని తనిఖీ చేయండి.",
    weatherValue: "28°C • ఎండ • పంట కోయడానికి బాగుంది",
    tipsTitle: "పంట సంరక్షణ చిట్కాలు",
    tipsText: "మీ పంటలను ఆరోగ్యంగా మరియు మార్కెట్‌కు సిద్ధంగా ఉంచడానికి ఉపయోగకరమైన సూచనలు.",
    tipOne: "ఉదయం早点గా నీరు పెట్టండి.",
    tipTwo: "ఎరువు వేయడానికి ముందు మట్టి తేమను తనిఖీ చేయండి.",
    tipThree: "రవాణా సమయంలో తాజా ఉత్పత్తులను వేడిని నుంచి కాపాడండి.",
    trackingTitle: "ఆర్డర్ ట్రాకింగ్",
    trackingText: "కొనుగోలుదారులకు స్పష్టమైన డెలివరీ పురోగతిని నవీకరించండి.",
    trackingStep1: "ప్యాక్ చేయబడింది",
    trackingStep2: "ప్రయాణంలో ఉంది",
    trackingStep3: "డెలివరీ కోసం బయలుదేరింది",
    trackingStep4: "డెలివർ చేయబడింది",
    footerText: "© 2026 కిసాన్ కార్ట్. రైతుల కోసమే, రైతుల చేత నిర్మించబడింది.",
    emailPlaceholder: "farmer@example.com",
    passwordPlaceholder: "••••••••",
    cropPlaceholder: "టమోటాలు / ధాన్యం",
    quantityPlaceholder: "200 కిలో",
    locationPlaceholder: "గ్రామం, జిల్లా",
    pricePlaceholder: "₹70 ప్రతి కిలో",
    requestNow: "ఇప్పుడు కొనండి",
    all: "అన్నీ",
    categories: { Vegetables: "కూరగాయలు", Grains: "ధాన్యాలు", "Dairy & Eggs": "పాలు మరియు గుడ్లు" },
    emptyListings: "ఇంకా ఏ పంటలు ప్రచురించబడలేదు. మీ మొదటి జాబితాను ప్రారంభించండి.",
    noListingsPreview: "మీ తాజా జాబితా ప్రచురించిన తర్వాత ఇక్కడ కనిపిస్తుంది.",
    listingSummary: "ఇప్పుడు కొనుగోలుదారులకు కనిపిస్తోంది",
    pickupFrom: "పిక్‌అప్ నుండి",
    priceLabelText: "ధర:",
    loginNotice: "మీ ప్రత్యక్ష జాబితా సారాంశం మరియు సక్రియ పంటలను చూడటానికి సైన్ ఇన్ చేయండి.",
    listingCountOne: "సక్రియ జాబితా",
    listingCountMany: "సక్రియ జాబితాలు"
  },
  ta: {
    brand: "கிசான் கார்ட்",
    navProducts: "தயாரிப்புகள்",
    navStories: "விவசாயிகள் கதைகள்",
    navSell: "இப்போதே விற்கவும்",
    heroEyebrow: "வயலில் இருந்து நேரடியாக, உங்கள் சுற்றுப்புறத்தவரால் நம்பகமானது",
    heroTitle: "உங்கள் பயிரை நேரடியாக ஆன்லைனில் விற்று, வாங்குபவர்களை உங்கள் நிலத்திற்கு நெருக்கமாக கொண்டுவருங்கள்.",
    heroText: "கிசான் கார்ட் ஒரு விவசாயி-முதல் சந்தை ஆகும், இங்கு விவசாயிகள் தங்கள் உற்பத்திகளை பட்டியலிட்டு தங்கள் வயல் கதைகளைப் பகிர்ந்து கொள்ளலாம் மற்றும் வாடிக்கையாளர்களுடன் நேரடி உறவுகளை உருவாக்கலாம்.",
    heroPrimaryBtn: "விற்பனையைத் தொடங்குங்கள்",
    heroSecondaryBtn: "உற்பத்திகளைப் பார்க்கவும்",
    highlightOne: "வயலிலிருந்து வீடுவரை உடனடி விநியோகம்",
    highlightTwo: "தெளிவான விலை",
    highlightThree: "நம்பகமான விவசாயி சுயவிவரங்கள்",
    heroCardTitle: "இந்த வாரம் கிசான் கார்ட்டில்",
    metricFarmers: "செயலில் உள்ள விவசாயிகள்",
    metricInquiries: "வாங்குபவர்களின் விசாரணைகள்",
    miniOne: "கரிம தக்காளி • ₹70/கி.கி",
    miniTwo: "புதிய கரும்பு ஜூஸ் • ₹40",
    miniThree: "வயல் புதிய முட்டைகள் • ₹8/ஒவ்வொரு முட்டை",
    marketplaceEyebrow: "சந்தை",
    productsHeading: "உண்மையான வயல்களில் இருந்து புதிய உற்பத்திகள்",
    productsSubtext: "பகுதி விவசாயிகள் பதிவிட்ட சரிபார்க்கப்பட்ட பயிர்கள் மற்றும் உணவு பொருட்களைப் பார்க்கவும்.",
    storiesEyebrow: "விவசாயி கதைகள்",
    storiesHeading: "பயிரின் பின்னால் உள்ள மக்களை சந்தியுங்கள்",
    storiesSubtext: "ஒவ்வொரு பட்டியலிலும் வயல், பயிர் மற்றும் விவசாயியின் பயணம் பற்றிய கதை இருக்கும்.",
    portalEyebrow: "விவசாயி போர்டல்",
    portalHeading: "உங்கள் வயல் பட்டியல்களை நிர்வகிக்க உள்நுழையவும்",
    portalSubtext: "விவசாயிகள் உள்நுழைந்து புதிய பயிர்களை பட்டியலிடலாம் மற்றும் வாங்குபவர்களின் கோரவுகளை ஒரு எளிய டாஷ்போர்டில் நிர்வகிக்கலாம்.",
    signinTitle: "விவசாயி உள்நுழைவு",
    signinText: "டாஷ்போர்டு அனுபவத்தைப் பார்க்க எந்த மின்னஞ்சல் அல்லது கடவுச்சொல்லை பயன்படுத்தவும்.",
    emailLabel: "மின்னஞ்சல் அல்லது தொலைபேசி",
    passwordLabel: "கடவுச்சொல்",
    loginBtn: "உள்நுழை",
    signinHint: "டெமோ அணுகல் எளிய சோதனைக்காக வடிவமைக்கப்பட்டுள்ளது.",
    welcomeTitle: "மீண்டும் வரவேற்கிறோம்",
    dashboardText: "உங்கள் நேரடி பயிர் இடுகைகள் மற்றும் வாங்குபவர்களின் தெரிவுநிலையை நிர்வகிக்கவும்.",
    logoutBtn: "வெளியேறு",
    cropLabel: "பயிர் பெயர்",
    quantityLabel: "கிடைக்கும் அளவு",
    locationLabel: "எடுத்து செல்லும் இடம்",
    priceLabel: "பரிந்துரைக்கப்பட்ட விலை",
    publishBtn: "பட்டியலை வெளியிடவும்",
    visibilityHeading: "வாங்குபவர் தெரிவுநிலை",
    previewEmpty: "உங்கள் நேரடி பட்டியல் சுருக்கம் மற்றும் செயலில் உள்ள பயிர்களைப் பார்க்க உள்நுழையவும்.",
    weatherTitle: "நேரடி வானிலை",
    weatherText: "உங்கள் பயிரை அறுவடை செய்யவோ அல்லது கொண்டு செல்லவோ முன் இன்று வானிலையைச் சரிபார்க்கவும்.",
    weatherValue: "28°C • சூரியன் • அறுவடைக்கு நல்லது",
    tipsTitle: "பயிர் பராமரிப்பு குறிப்புகள்",
    tipsText: "உங்கள் பயிர்களை ஆரோக்கியமாகவும் சந்தைக்குத் தயாராகவும் வைத்திருப்பதற்கான பயனுள்ள நினைவூட்டல்கள்.",
    tipOne: "காலை நேரத்திலேயே தண்ணீர் விடுங்கள்.",
    tipTwo: "உரம் போடுவதற்கு முன் மண்ணின் ஈரப்பதத்தை சரிபார்க்கவும்.",
    tipThree: "விநியோகத்தின் போது புதிய உற்பத்திகளை வெப்பத்திலிருந்து பாதுகாக்கவும்.",
    trackingTitle: "ஆர்டர் கண்காணிப்பு",
    trackingText: "வாங்குபவர்களுக்கு தெளிவான விநியோக முன்னேற்றத்தைப் புதுப்பிக்கவும்.",
    trackingStep1: "பேக் செய்யப்பட்டது",
    trackingStep2: "போக்குவரத்தில்",
    trackingStep3: "விநியோகத்திற்காக வெளியேறியது",
    trackingStep4: "வழங்கப்பட்டது",
    footerText: "© 2026 கிசான் கார்ட். விவசாயிகளுக்காக, விவசாயிகளால் உருவாக்கப்பட்டது.",
    emailPlaceholder: "farmer@example.com",
    passwordPlaceholder: "••••••••",
    cropPlaceholder: "தக்காளி / நெல்",
    quantityPlaceholder: "200 கிலோ",
    locationPlaceholder: "கிராமம், மாவட்டம்",
    pricePlaceholder: "₹70 ஒரு கிலோ",
    requestNow: "இப்போதே வாங்கவும்",
    all: "அனைத்தும்",
    categories: { Vegetables: "காய்கறிகள்", Grains: "தானியங்கள்", "Dairy & Eggs": "பால் மற்றும் முட்டைகள்" },
    emptyListings: "இதுவரை எந்த பயிர்களும் வெளியிடப்படவில்லை. உங்கள் முதல் பட்டியலைத் தொடங்குங்கள்.",
    noListingsPreview: "உங்கள் சமீபத்திய பட்டியல் வெளியிடப்பட்ட பிறகு இங்கு தெரியும்.",
    listingSummary: "இப்போது வாங்குபவர்களுக்கு தெரிகிறது",
    pickupFrom: "எடுத்து செல்லும் இடம்",
    priceLabelText: "விலை:",
    loginNotice: "உங்கள் நேரடி பட்டியல் சுருக்கம் மற்றும் செயலில் உள்ள பயிர்களைப் பார்க்க உள்நுழையவும்.",
    listingCountOne: "செயலில் உள்ள பட்டியல்",
    listingCountMany: "செயலில் உள்ள பட்டியல்கள்"
  }
};

const STORAGE_KEYS = {
  token: "kissan-cart-token",
  language: "kissan-cart-language"
};

// Same-origin API base (backend serves frontend + /api/*)
const API_BASE = "";

const filterContainer = document.querySelector("#filters");
const productsGrid = document.querySelector("#products-grid");
const storyList = document.querySelector("#story-list");
const loginPanel = document.querySelector("#login-panel");
const dashboardPanel = document.querySelector("#dashboard-panel");
const loginForm = document.querySelector("#login-form");
const listingForm = document.querySelector("#listing-form");
const logoutButton = document.querySelector("#logout-btn");
const welcomeTitle = document.querySelector("#welcome-title");
const dashboardHeading = document.querySelector("#dashboard-heading");
const dashboardPreview = document.querySelector("#dashboard-preview");
const listingsList = document.querySelector("#listings-list");

let currentUser = null;
let listings = [];
let currentLanguage = localStorage.getItem(STORAGE_KEYS.language) || "en";


function getCategoryLabel(category, lang) {
  return translations[lang].categories[category] || category;
}

function getProductText(product, field, lang) {
  return product[field][lang] || product[field].en;
}

function renderFilters() {
  if (!filterContainer) return;

  const filters = ["All", ...new Set(products.map((product) => product.category))];
  filterContainer.innerHTML = filters
    .map((filter, index) => `
      <button class="filter-chip ${index === 0 ? "active" : ""}" data-filter="${filter}">
        ${filter === "All" ? translations[currentLanguage].all : getCategoryLabel(filter, currentLanguage)}
      </button>
    `)
    .join("");

  filterContainer.querySelectorAll(".filter-chip").forEach((button) => {
    button.addEventListener("click", () => {
      filterContainer.querySelectorAll(".filter-chip").forEach((chip) => chip.classList.remove("active"));
      button.classList.add("active");
      renderProducts(button.dataset.filter);
    });
  });
}

function renderProducts(filter = "All") {
  if (!productsGrid) return;

  const visibleProducts = products.filter((product) => filter === "All" || product.category === filter);

  productsGrid.innerHTML = visibleProducts
    .map((product) => `
      <article class="card product-card">
        <span class="badge">${getProductText(product, "tag", currentLanguage)}</span>
        <h3>${getProductText(product, "name", currentLanguage)}</h3>
        <p>${getProductText(product, "origin", currentLanguage)} • ${getCategoryLabel(product.category, currentLanguage)}</p>
        <div class="meta">
          <strong>₹${product.price}</strong>
          <span>${getProductText(product, "unit", currentLanguage)}</span>
        </div>
        <a class="btn btn-secondary" href="#sell">${translations[currentLanguage].requestNow}</a>
      </article>
    `)
    .join("");
}

function renderStories() {
  if (!storyList) return;

  storyList.innerHTML = stories
    .map((story) => `
      <article class="card story-card">
        <h3>${getProductText(story, "title", currentLanguage)}</h3>
        <p>${getProductText(story, "text", currentLanguage)}</p>
      </article>
    `)
    .join("");
}

function applyTranslations() {
  document.documentElement.lang = currentLanguage;
  document.title = `${translations[currentLanguage].brand} | Direct farm-to-home marketplace`;

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const key = element.getAttribute("data-i18n");
    if (translations[currentLanguage][key]) {
      element.textContent = translations[currentLanguage][key];
    }
  });

  document.querySelectorAll("[data-placeholder-key]").forEach((element) => {
    const key = element.getAttribute("data-placeholder-key");
    if (translations[currentLanguage][key]) {
      element.placeholder = translations[currentLanguage][key];
    }
  });

  document.querySelectorAll(".lang-btn").forEach((button) => {
    button.classList.toggle("active", button.dataset.lang === currentLanguage);
  });
}

function getStoredToken() {
  return localStorage.getItem(STORAGE_KEYS.token) || null;
}

function setStoredToken(token) {
  if (!token) localStorage.removeItem(STORAGE_KEYS.token);
  else localStorage.setItem(STORAGE_KEYS.token, token);
}

function getAuthHeaders() {
  const token = getStoredToken();
  return token ? { Authorization: `Bearer ${token}` } : {};
}

async function apiFetch(pathname, options = {}) {
  const res = await fetch(`${API_BASE}${pathname}`, {
    headers: {
      'Content-Type': 'application/json',
      ...(options.headers || {}),
    },
    ...options,
  });

  if (!res.ok) {
    let message = `HTTP ${res.status}`;
    try {
      const body = await res.json();
      if (body && body.error) message = body.error;
    } catch (_) {}
    throw new Error(message);
  }

  return res.json();
}

function renderListings() {
  if (!listingsList) return;

  if (!listings.length) {
    listingsList.innerHTML = `<div class="empty-state">${translations[currentLanguage].emptyListings}</div>`;
    return;
  }

  listingsList.innerHTML = listings
    .map((item) => `
      <div class="listing-item">
        <strong>${item.crop}</strong>
        <div>${item.quantity} • ${item.location}</div>
        <div>${item.price}</div>
      </div>
    `)
    .join("");
}

async function renderDashboard() {
  const token = getStoredToken();

  if (!token) {
    currentUser = null;
    listings = [];
    if (loginPanel) loginPanel.hidden = false;
    if (dashboardPanel) dashboardPanel.hidden = true;
    if (dashboardPreview) {
      dashboardPreview.innerHTML = `<p class="empty-state">${translations[currentLanguage].previewEmpty}</p>`;
    }
    if (listingsList) listingsList.innerHTML = '';
    return;
  }

  // decode name/email for greeting (no verification here; token already verified server-side)
  try {
    const [, payloadB64] = token.split('.');
    const payloadJson = atob(payloadB64.replace(/-/g, '+').replace(/_/g, '/'));
    const payload = JSON.parse(decodeURIComponent(payloadJson.split('').map(c => `%${c.charCodeAt(0).toString(16).padStart(2,'0')}`).join('')));
    currentUser = { name: payload.name || payload.email || 'Farmer' };
  } catch (_) {
    currentUser = { name: 'Farmer' };
  }

  if (loginPanel) loginPanel.hidden = true;
  if (dashboardPanel) dashboardPanel.hidden = false;

  try {
    const data = await apiFetch('/api/listings/me', { headers: getAuthHeaders() });
    listings = Array.isArray(data.listings) ? data.listings : [];
  } catch (e) {
    // token invalid/expired
    setStoredToken(null);
    if (loginPanel) loginPanel.hidden = false;
    if (dashboardPanel) dashboardPanel.hidden = true;
    if (dashboardPreview) dashboardPreview.innerHTML = `<p class="empty-state">${translations[currentLanguage].previewEmpty}</p>`;
    return;
  }

  if (welcomeTitle) welcomeTitle.textContent = `${translations[currentLanguage].welcomeTitle}, ${currentUser.name}`;
  if (dashboardHeading) dashboardHeading.textContent = `${listings.length} ${listings.length === 1 ? translations[currentLanguage].listingCountOne : translations[currentLanguage].listingCountMany}`;

  const latestListing = listings[0];
  if (dashboardPreview) {
    dashboardPreview.innerHTML = latestListing
      ? `
        <div class="empty-state">
          <strong>${latestListing.crop}</strong> ${translations[currentLanguage].listingSummary} <strong>${latestListing.quantity}</strong>.
          <p>${translations[currentLanguage].pickupFrom} ${latestListing.location}. ${translations[currentLanguage].priceLabelText} ${latestListing.price}</p>
        </div>
      `
      : `<p class="empty-state">${translations[currentLanguage].noListingsPreview}</p>`;
  }

  renderListings();
}

async function handleLoginSubmit(event) {
  event.preventDefault();

  const data = new FormData(loginForm);
  const email = (data.get("email") || "").toString().trim();
  const password = (data.get("password") || "").toString().trim();

  if (!email || !password) return;

  try {
    const resp = await apiFetch('/api/auth/login', {
      method: 'POST',
      body: JSON.stringify({ email, password })
    });

    setStoredToken(resp.token);
    if (loginForm) loginForm.reset();
    await renderDashboard();
  } catch (e) {
    // If user doesn't exist, register automatically for demo flow
    try {
      const name = email.includes("@") ? email.split("@")[0].replace(/[._-]/g, " ") : email;
      const nameClean = name.replace(/\b\w/g, (char) => char.toUpperCase());

      const resp = await apiFetch('/api/auth/register', {
        method: 'POST',
        body: JSON.stringify({ email, password, name: nameClean })
      });

      const loginResp = await apiFetch('/api/auth/login', {
        method: 'POST',
        body: JSON.stringify({ email, password })
      });

      setStoredToken(loginResp.token);
      if (loginForm) loginForm.reset();
      await renderDashboard();
    } catch (e2) {
      alert(e2.message || 'Login failed');
    }
  }
}

async function handleListingSubmit(event) {
  event.preventDefault();
  const token = getStoredToken();
  if (!token) return;

  const data = new FormData(listingForm);
  const payload = {
    crop: (data.get("cropName") || "Fresh harvest").toString().trim(),
    quantity: (data.get("quantity") || "Available stock").toString().trim(),
    location: (data.get("location") || "Local pickup").toString().trim(),
    price: (data.get("price") || "Ask buyers").toString().trim()
  };

  try {
    await apiFetch('/api/listings', {
      method: 'POST',
      headers: getAuthHeaders(),
      body: JSON.stringify(payload)
    });

    if (listingForm) listingForm.reset();
    await renderDashboard();
  } catch (e) {
    alert(e.message || 'Failed to publish listing');
  }
}

function handleLogout() {
  setStoredToken(null);
  currentUser = null;
  listings = [];
  if (loginForm) loginForm.reset();
  if (listingForm) listingForm.reset();
  renderDashboard();
}


function setLanguage(lang) {
  currentLanguage = lang;
  localStorage.setItem(STORAGE_KEYS.language, lang);
  applyTranslations();
  renderFilters();
  renderProducts();
  renderStories();
  renderDashboard();
}

document.querySelectorAll(".lang-btn").forEach((button) => {
  button.addEventListener("click", () => setLanguage(button.dataset.lang));
});

if (loginForm) {
  loginForm.addEventListener("submit", handleLoginSubmit);
}

if (listingForm) {
  listingForm.addEventListener("submit", handleListingSubmit);
}

if (logoutButton) {
  logoutButton.addEventListener("click", handleLogout);
}

applyTranslations();
renderFilters();
renderProducts();
renderStories();
renderDashboard();
