import { buildPlans } from "../utils/plans.js";

const u = (id, w = 1200) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=70`;

export const img = {
  hero: u("photo-1639762681485-074b7f938ba0", 1600),
  team: u("photo-1522071820081-009f0129c71c"),
  meeting: u("photo-1556761175-5973dc0f32e7", 900),
  office: u("photo-1573164713714-d95e436ab8d6", 900),
  desk: u("photo-1560472354-b33ff0c44a43", 900),
  chart: u("photo-1642104704074-907c0698cbd9"),
  dash: u("photo-1551288049-bebda4e38f71"),
  coins: u("photo-1590283603385-17ffb3a7f29f"),
  btc: u("photo-1518546305927-5a555bb7020d"),
};

// Home hero background (people image under the headline)
export const heroBg = "/assets/real1.png";

export const brand = {
  name: "BENWINK",
  logo: "/assets/logo.png",
  tagline: "Stake Smarter. Grow Your Crypto.",
  address: "Edge Water Business Complex, Triq Elija Zammit, Giljan STJ 3120, Malta.",
  website: "www.benwink.com",
  // Primary mail (the Footer uses this one automatically)
  email: "support@benwink.com",
  // All contact mails, shown on the Support page
  emails: [
    { label: "Support", address: "support@benwink.com" },
    { label: "General enquiries", address: "info@benwink.com" },
  ],
};
export const navLinks = [
  { to: "/", label: "Home" },
  { to: "/markets", label: "Markets" },
  { to: "/about", label: "About" },
  { to: "/blog", label: "Blog" },
  { to: "/support", label: "Support" },
];

export const stats = [
  { v: "25K+", l: "Active Stakers" },
  { v: "$12M+", l: "Total Assets Staked" },
  { v: "8.5K+", l: "Daily Transactions" },
  { v: "99.9%", l: "Platform Uptime" },
];

export const highlights = ["Secure Staking", "Competitive Rewards", "Transparent Process", "Global Community"];

export const steps = [
  { t: "Create an Account", d: "Register for an account on BENWINK.", img: "/assets/img1.jpg" },
  { t: "Choose Plan", d: "Select Solana, BNB or ZMAX and your preferred investment plan.", img: "/assets/img5.jpg"  },
  { t: "Your Investment", d: "Make your investment according to the selected plan.", img: "/assets/img6.jpg"  },
  { t: "Get your Profit", d: "Receive potential returns according to the plan's terms and conditions.", img: "/assets/img7.jpg"  },
];

export const features = [
  { icon: "care", t: "Customer Care", d: "Discover the greatest customer support with unique technology in BENWINK.", to: "/support", cta: "Get support" },
  { icon: "ref", t: "Referral Program", d: "Constant opportunity to earn money in Referral Program.", to: "/register", cta: "Join & refer" },
  { icon: "transfer", t: "Online Transfer", d: "BENWINK supports transactions through online mode through constant Trust wallet Applications.", to: "/markets", cta: "View markets" },
];

export const whatIs = [
  "BENWINK is a platform to enhance your assets and it’s a platform to gain passive income through referral.",
  "Our desire is to create a complete analysis and furnish innovative intelligence and empower you to accomplish the goals faster and easier with unique technology.",
];

export const community = {
  head: "Join the community",
  sub: "Join the world's leading crypto community leading the crypto revolution.",
  items: [
    { n: "01", t: "Learn Crypto", d: "Learn about cryptocurrencies from our experts, gain and participate in the network of a special choice to contribute and gain rewards in the network's native tokens." },
    { n: "02", t: "POS Staking", d: "Proof of Stake tokens can be staked or delegated to a validator on the network. Delegations are rewarded based on the proportion of their stake and loyalty to the ecosystem." },
    { n: "03", t: "Refer & Earn", d: "Refer and earn passive incomes. The more people create accounts, the more payouts you receive, boundlessly." },
  ],
};

export const referral = {
  head: "Referral Program",
  sub: "Constant opportunity to earn money in Referral Program.",
  items: [
    { t: "Boundless Earning Scopes", d: "Limitless profit you can make it by inviting much more people as your wish, the more people create accounts will liberally receive more payouts boundlessly." },
    { t: "Generate revenue through multiple income streams", d: "BENWINK will be a better platform for earning with upgraded techniques, available 24/7 with multi opportunities that will consist of passive earning at an affordable price to all sect of people." },
  ],
};

export const trust = [
  { t: "Trustworthy", d: "Feel the most trusted platform ever." },
  { t: "Support", d: "Ready for 24/7 for clients to rectify the issues as fast." },
  { t: "Flexibility", d: "Comfy zone to achieve your goals." },
  { t: "Affordable", d: "Standing with the Price which can make by all." },
];

export const howItWorks = {
  head: "How does it Work?",
  sub: "Join the world's leading crypto community leading the crypto revolution.",
  items: [
    { t: "Register", d: "Register on BENWINK in a few easy steps.", img: "/assets/img1.jpg" },
    { t: "Stake", d: "Choose a crypto for any time of your choosing to start earning rewards.", img: u("photo-1642104704074-907c0698cbd9", 700) },
    { t: "Rewards", d: "The best rewards and opportunities make additional returns.", img: "/assets/img3.jpg" },
    { t: "Recognition", d: "Be a prominent figure and an influencer within the community.", img: "/assets/img4.jpg" },
  ],
};

export const involved = {
  text: "BENWINK identifies the right projects with high potential and guides you towards the best choice of investing assets, in a place where you can be comfy as like home.",
  points: [
    "BENWINK identifies the right projects with high potential.",
    "Guiding the best choice of Investing assets.",
    "The place where you can be comfy as like home.",
  ],
};

export const why = [
  { t: "Secure & Reliable", d: "Secure and safe investments are made in BENWINK, with advanced security measures to protect your assets.", img: "/assets/pic1.jpg" },
  { t: "Transparent Rewards", d: "Real-time data and on-chain verification.", img: "/assets/pic2.png" },
  { t: "Boundless Earning Scopes", d: "Invite as many people as you wish. The more people create accounts, the more payouts you receive.", img: "/assets/s6.png" },
  { t: "Resolute Support", d: "Our resolute support is accomplished to help you on your path to success. Support extends through mail 24/7.", img: "/assets/pic4.jpg" },
  { t: "Explore Innovative", d: "A complete analysis and innovative intelligence to help you accomplish your goals faster and easier with unique technology.", img: img.chart },
  { t: "Easy Management", d: "Simple and user-friendly platform for everyone.", img: img.team },
];

export const benefits = [
  "Sponsorship income = 10%",
  "Return of the capital income plus for 730 days = 100%",
  "Level income opportunity = 10 × 1% for 24 months",
  "Monthly return of 3% on every plan",
];

const caveat = "Predictions vary from one platform and analyst to another, so treat every figure as an estimate and not a promise.";

export const coins = [
  {
    id: "sol", kind: "crypto", name: "Solana", symbol: "SOL", apy: "7.5%", img: "/assets/s1.jpg",
    intro: "High-performance blockchain with great rewards.",
    days: "A fast proof-of-stake network known for low fees and quick confirmations.",
    forecastTitle: "SOL Coin Price Prediction 2030",
    forecast: [caveat, "According to Changelly, SOL's average trading price could reach about $100 by 2030, with the platform suggesting a high of $2000."],
    plans: buildPlans([100, 200, 300, 500, 1000], "SOL USDT", "USDT"),
    stats: [{ l: "APY up to", v: "7.5%" }, { l: "2026 average", v: "~$100" }, { l: "2030 high", v: "$2000" }],
    points: [
      { t: "Fast network", d: "A proof-of-stake chain known for low fees and quick confirmations." },
      { t: "Staking rewards", d: "Stake SOL on BENWINK with APY up to 7.5% and a clear 24-month plan table." },
      { t: "Price outlook", d: "Changelly sees an average of about $100 by 2030, with a suggested high of $2000." },
      { t: "Read it as an estimate", d: "Predictions vary from one platform and analyst to another. They are not a promise." },
    ],
  },
  {
    id: "bnb", kind: "crypto", name: "BNB", symbol: "BNB", apy: "6.8%", img: "/assets/bnb.jpg",
    intro: "Stake BNB and earn consistent rewards.",
    days: "The native asset of the BNB Chain ecosystem, used for fees, trading and staking.",
    forecastTitle: "BNB Coin Price Prediction 2030",
    forecast: [caveat, "According to Changelly, BNB's average trading price could reach about $700 by 2030, with the platform suggesting a high of $5000."],
    plans: buildPlans([100, 200, 300, 500, 1000], "BNB USDT", "USDT"),
    stats: [{ l: "APY up to", v: "6.8%" }, { l: "2026 average", v: "~$700" }, { l: "2030 high", v: "$5000" }],
    points: [
      { t: "Ecosystem asset", d: "The native asset of the BNB Chain, used for fees, trading and staking." },
      { t: "Staking rewards", d: "Stake BNB on BENWINK with APY up to 6.8% and a clear 24-month plan table." },
      { t: "Price outlook", d: "Changelly sees an average of about $700 by 2030, with a suggested high of $5000." },
      { t: "Read it as an estimate", d: "Predictions vary from one platform and analyst to another. They are not a promise." },
    ],
  },
  {
    id: "zmax", kind: "crypto", name: "ZMAX", symbol: "ZMAX", apy: "12.0%", img: "/assets/zohomax1.jpeg",
    intro: "Our native token with exclusive benefits.",
    days: "The ZOHOMAX ecosystem token with member-only staking benefits.",
    live: "0.010600",
    forecastTitle: "ZOHOMAX Coin Price Prediction 2030",
    forecast: [caveat, "According to Changelly, ZOHOMAX's average trading price could reach about $0.5 USDT by 2030, with the platform suggesting a high of $1.5."],
    plans: buildPlans([10000, 20000, 30000, 50000, 100000], "ZMAX COIN", "COIN"),
    stats: [{ l: "Live price", v: "0.010600" }, { l: "2030 average", v: "~$0.5" }, { l: "2035 high", v: "$1.5" }],
    points: [
      { t: "Our native token", d: "The ZOHOMAX ecosystem token with member-only staking benefits." },
      { t: "Staking rewards", d: "Stake ZMAX on BENWINK with APY up to 12.0% and a clear 24-month plan table." },
      { t: "Price outlook", d: "Changelly sees an average of about $0.5 USDT by 2030, with a suggested high of $1.5." },
      { t: "Read it as an estimate", d: "Predictions vary from one platform and analyst to another. They are not a promise." },
    ],
  },
];

// ---- Extra market tabs shown after ZMAX (information only, not stakeable) ----
export const metals = [
  {
    id: "gold", kind: "metal", name: "Gold", symbol: "Gold",
    img: u("photo-1610375461246-83df859d849d", 1000),
    intro: "The classic store of value.",
    forecastTitle: "About Gold",
    stats: [{ l: "Symbol", v: "XAU" }, { l: "Type", v: "Precious metal" }, { l: "Known for", v: "Store of value" }],
    points: [
      { t: "A long-trusted store of value", d: "Gold has been held for centuries as a way to keep wealth safe over time." },
      { t: "Held by central banks", d: "Many central banks keep gold in their reserves alongside currencies." },
      { t: "Often used to balance risk", d: "Investors commonly hold some gold to spread risk away from stocks and crypto." },
      { t: "Jewellery and technology", d: "Besides investment, gold is used widely in jewellery and electronics." },
    ],
  },
  {
    id: "silver", kind: "metal", name: "Silver", symbol: "Silver",
    img: "/assets/silver.jpg",
    intro: "Precious metal with real industrial demand.",
    forecastTitle: "About Silver",
    stats: [{ l: "Symbol", v: "XAG" }, { l: "Type", v: "Precious metal" }, { l: "Known for", v: "Industrial use" }],
    points: [
      { t: "Two roles in one", d: "Silver is both an investment metal and a working industrial material." },
      { t: "Used in clean energy", d: "It is a key material in solar panels, batteries and electronics." },
      { t: "More affordable per ounce", d: "A lower price per ounce than gold makes it easier to start with small amounts." },
      { t: "Prices can swing more", d: "Silver is usually more volatile than gold, so its price can move sharply." },
    ],
  },
  {
    id: "platinum", kind: "metal", name: "Platinum", symbol: "Platinum",
    img: "/assets/plat.jpg",
    intro: "A rarer metal behind modern industry.",
    forecastTitle: "About Platinum",
    stats: [{ l: "Symbol", v: "XPT" }, { l: "Type", v: "Precious metal" }, { l: "Known for", v: "Rarity" }],
    points: [
      { t: "Rarer than gold", d: "Platinum is mined in much smaller quantities, which adds to its value." },
      { t: "Cleaner vehicles", d: "Most of the demand comes from catalytic converters that cut vehicle emissions." },
      { t: "Hydrogen and fuel cells", d: "It is also used in fuel cells and other clean energy technology." },
      { t: "Concentrated supply", d: "A small number of countries produce most platinum, which can affect its price." },
    ],
  },
];

export const team = [
  { name: "Thomas Harvey", role: "Founder", note: "BENWINK NET Corporations", img: "/assets/1.jpeg" },
  { name: "Our Crew", role: "Lead Game Designer", note: "Plans, assets and rewards", img: "/assets/2.jpeg" },
  { name: "Esmond Urwin", role: "Technical Partner Lead", note: "Security and platform build", img: "/assets/3.jpeg" },
  { name: "Mike Lee", role: "Blockchain Architect", note: "Support and referral program", img: "/assets/4.jpeg" },
];

export const posts = [
  { t: "How staking works, in plain words", d: "What happens to your coins when you stake them and where rewards come from.", img: img.chart, date: "12 Oct 2026" },
  { t: "Solana staking: what to know first", d: "Fees, lock-up time and how validators earn rewards.", img: img.dash, date: "05 Oct 2026" },
  { t: "BNB staking for beginners", d: "A simple walk through choosing an amount and period.", img: img.btc, date: "28 Sep 2026" },
  { t: "Understanding the ZMAX token", d: "Utility, supply and member benefits explained.", img: img.coins, date: "20 Sep 2026" },
  { t: "Keeping your account secure", d: "Passwords, two-factor sign-in and spotting scams.", img: img.meeting, date: "11 Sep 2026" },
  { t: "Reading price predictions wisely", d: "Why forecasts differ and how to treat them.", img: img.team, date: "02 Sep 2026" },
];

export const faqs = [
  { q: "How do I start staking?", a: "Create an account, choose Solana, BNB or ZMAX, enter the amount and confirm your stake." },
  { q: "Which assets can I stake?", a: "Solana (SOL), BNB and our native token ZMAX." },
  { q: "When are rewards paid?", a: "Each plan lists a monthly bonus and a maturity amount after 24 months." },
  { q: "Are price predictions guaranteed?", a: "No. Predictions come from third-party platforms and vary widely. Crypto prices can fall as well as rise." },
  { q: "What is BENWINK?", a: "BENWINK is a platform to enhance your assets and to gain passive income through referral." },
  { q: "How does the Referral Program work?", a: "Invite as many people as you wish. The more people create accounts, the more payouts you receive, boundlessly." },
  { q: "How are transactions made?", a: "BENWINK supports transactions through online mode through constant Trust wallet Applications." },
  { q: "How do I contact support?", a: "Our support is available through mail 24/7, and you can also use the contact details on this page." },
];

// ---- Business format (shown on the home page below the staking assets) ----
export const businessFormat = {
  head: "Business format",
  sub: "One clear plan structure across Solana, BNB and ZMAX.",
  text: "Every BENWINK plan follows the same format, so you can see what you put in, what you earn each month and what you receive at maturity before you commit.",
  items: [
    { v: "10%", t: "Sponsorship income", d: "Earn a 10% sponsorship income when people you refer create accounts and stake." },
    { v: "100%", t: "Return of capital", d: "Capital income plus for 730 days, returned in full under the plan terms." },
    { v: "10 × 1%", t: "Level income", d: "A level income opportunity of 10 levels at 1% each, for 24 months." },
    { v: "3%", t: "Monthly return", d: "A monthly return of 3% on every plan, paid as the monthly investment bonus." },
  ],
  facts: [
    { l: "Plan period", v: "24 Months" },
    { l: "Monthly bonus", v: "3%" },
    { l: "Maturity amount", v: "2× your stake" },
    { l: "Assets", v: "SOL · BNB · ZMAX" },
  ],
};

export const footerLinks = {
  resources: [
    { to: "/blog", label: "Blog" },
    { to: "/support", label: "Support" },
    { to: "/support", label: "FAQs" },
    { to: "/about", label: "About BENWINK" },
  ],
};
