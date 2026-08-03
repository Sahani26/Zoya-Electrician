export type PageKind = "main" | "service" | "area" | "blog";
export type Page = { kind: PageKind; slug: string; title: string; meta: string; eyebrow: string; summary: string; body: string[]; keywords: string[]; icon: string; related?: string[] };

const services = [
  ["emergency-electrician", "Emergency Electrician", "Urgent electrical help in Surat for tripping power, sparking points and sudden faults.", "24/7"],
  ["electrical-wiring", "Electrical Wiring", "Safe, neatly routed electrical wiring for homes, offices and renovations in Surat.", "01"],
  ["mcb-repair", "MCB Repair", "Fast MCB fault diagnosis, replacement and load balancing for safer power in Surat.", "02"],
  ["switch-socket-repair", "Switch & Socket Repair", "Reliable repair and replacement of loose switches, sockets and dimmer points.", "03"],
  ["ceiling-fan-installation", "Ceiling Fan Installation", "Balanced, secure ceiling fan installation with clean wiring and testing.", "04"],
  ["ceiling-fan-repair", "Ceiling Fan Repair", "Restore noisy, slow or non-starting ceiling fans with careful on-site service.", "05"],
  ["light-installation", "Light Installation", "Professional light fitting installation for comfortable, practical rooms.", "06"],
  ["led-light-installation", "LED Light Installation", "Efficient LED lighting plans and installations for Surat homes and workspaces.", "07"],
  ["chandelier-installation", "Chandelier Installation", "Precise chandelier mounting and wiring for statement spaces that feel complete.", "08"],
  ["fairy-light-installation", "Fairy Light Installation", "Elegant fairy-light installation for balconies, events and festive interiors.", "09"],
  ["outdoor-lighting", "Outdoor Lighting", "Weather-conscious outdoor lighting for entrances, gardens and building exteriors.", "10"],
  ["doorbell-installation", "Doorbell Installation", "New doorbell installation and tidy replacement of damaged units.", "11"],
  ["electrical-maintenance", "Electrical Maintenance", "Planned electrical maintenance that keeps everyday spaces dependable.", "12"],
  ["new-home-electrical-work", "New Home Electrical Work", "Thoughtful electrical planning and execution for new homes in Surat.", "13"],
  ["electrical-safety-inspection", "Electrical Safety Inspection", "A practical inspection to find electrical risks before they become disruptions.", "14"],
  ["jhalar-installation", "Jhalar Installation", "Professional decorative jhalar light installation for homes, balconies, events and festive spaces in Surat.", "16"],
] as const;

const areas = ["Adajan", "Vesu", "Piplod", "Pal", "Citylight", "Althan", "Athwa", "Bhatar", "Udhna", "Dindoli"];

const blogSeeds = [
  ["why-mcb-keeps-tripping", "Why Does Your MCB Keep Tripping? A Surat Homeowner’s Guide", "Understand the most common causes of MCB tripping and the safe next steps for your home."],
  ["rccb-vs-mcb", "RCCB vs MCB: What Protects Your Home?", "A clear guide to two essential electrical safety devices and what each one does."],
  ["signs-your-home-needs-rewiring", "7 Signs Your Home May Need Rewiring", "Learn the warning signs of aging wiring before they turn into a safety problem."],
  ["how-to-reduce-electricity-bill", "Smart Ways to Reduce Your Electricity Bill", "Practical, electrician-approved ways to make your Surat home use less power."],
  ["ceiling-fan-running-slow", "Why Is My Ceiling Fan Running Slow?", "Find out why a fan loses speed and when professional repair is the sensible choice."],
  ["led-lighting-guide", "How to Choose LED Lights for Every Room", "Brightness, colour temperature and placement explained for a better-lit home."],
  ["electrical-safety-monsoon", "Monsoon Electrical Safety Tips for Surat Homes", "Simple checks that help keep moisture and electrical risk apart during the rains."],
  ["surge-protection-guide", "Do You Need Surge Protection at Home?", "Learn how surge protection helps safeguard sensitive appliances and electronics."],
  ["overloaded-sockets", "The Hidden Risk of Overloaded Sockets", "Why extension overloads happen and how to create safer power points."],
  ["decorative-lighting-ideas", "Decorative Lighting Ideas That Feel Timeless", "Layered lighting ideas for warm, polished interiors without visual clutter."],
  ["new-home-electrical-checklist", "New Home Electrical Checklist Before You Move In", "A useful room-by-room checklist for a safe, convenient new-home setup."],
  ["when-to-replace-switches", "When Should You Replace Old Switches and Sockets?", "Recognise wear, heat and loose contact before a small issue becomes a bigger one."],
  ["outdoor-lighting-safety", "Outdoor Lighting: Safety and Placement Essentials", "Create a welcoming exterior with sensible, weather-conscious electrical choices."],
  ["fan-installation-safety", "Ceiling Fan Installation: What Safe Mounting Looks Like", "The details that matter when installing a ceiling fan securely and quietly."],
  ["electrical-maintenance-calendar", "A Simple Annual Electrical Maintenance Calendar", "A calm, seasonal schedule for keeping a home’s electrical system in good order."],
  ["power-fluctuation-home", "What to Do When Power Fluctuates at Home", "A safe response plan for flickering lights, irregular voltage and appliance concerns."],
  ["festival-lighting-safety", "Festival Lighting Safety for Homes and Balconies", "Enjoy decorative lights with practical setup, weather and load-safety advice."],
  ["why-lights-flicker", "Why Are Your Lights Flickering?", "Common causes of flickering lights and when a qualified electrician should investigate."],
  ["electrical-safety-kids", "Electrical Safety Tips for Families With Children", "Easy, effective ways to make sockets, cords and appliances safer for children."],
  ["choosing-electrician-surat", "How to Choose an Electrician in Surat", "The questions to ask before trusting someone with your home’s electrical work."],
] as const;

const page = (kind: PageKind, slug: string, title: string, meta: string, eyebrow: string, summary: string, body: string[], icon: string, keywords: string[]): Page => ({ kind, slug, title, meta, eyebrow, summary, body, icon, keywords });

export const mainPages: Page[] = [
  page("main", "/about", "About Zoya Electrician", "Meet the careful, service-first electrician team helping Surat homes and businesses stay powered safely.", "OUR STANDARD", "Electrical work should feel clear, calm and exceptionally well finished.", ["Zoya Electrician is built around the kind of service homeowners wish were ordinary: arrive prepared, explain the work plainly, protect the space, and leave every point tested.", "From one troublesome socket to a full new-home plan, we bring the same measured attention to detail. Our work is designed around Surat homes, local needs and long-term confidence."], "ZE", ["about electrician Surat", "trusted electrician Surat"]),
  page("main", "/contact", "Contact Zoya Electrician", "Book dependable electrical service in Surat with Zoya Electrician. Call or WhatsApp for a clear, prompt response.", "LET’S GET IT SORTED", "Tell us what is happening. We will help you choose the right next step.", ["For urgent faults, call us directly. For planned work, send a WhatsApp message with your area, a short description and a convenient time. We serve homeowners, landlords and small businesses across Surat.", "Every booking starts with a practical conversation—no pressure, no confusing language, just useful guidance."], "24", ["contact electrician Surat", "electrician phone Surat"]),
  page("main", "/services", "Electrician Services in Surat", "Explore Zoya Electrician’s complete range of professional electrical services for homes and businesses in Surat.", "WHAT WE DO", "Careful electrical work for the moments that matter every day.", ["Our service range covers urgent faults, everyday repairs, lighting, maintenance and new-home electrical work. Each visit is tailored to the space, with safe methods and clear communication from start to finish.", "Choose a service below to see how we approach the work and when it may be the right fit for your Surat property."], "15", ["electrician services Surat", "home electrical services Surat"]),
  page("main", "/areas", "Electrician Service Areas in Surat", "Find dependable local electrical services from Zoya Electrician across Surat’s key residential and business areas.", "LOCAL, BY DESIGN", "A Surat electrician who understands the pace and character of your neighbourhood.", ["Zoya Electrician works across Surat’s established and growing communities. Whether you need a quick repair or are planning a larger installation, our approach stays consistent: respectful, safe and well-organised.", "Select your area to discover relevant service support and book with confidence."], "10", ["electrician near me Surat", "local electrician Surat"]),
  page("main", "/blog", "Electrical Safety & Home Care Blog", "Helpful electrical safety, lighting, maintenance and energy advice for homeowners in Surat from Zoya Electrician.", "THE FIELD NOTES", "Clear, useful electrical advice for a safer, better-lit home.", ["Our articles turn common electrical questions into practical advice. They are written for Surat homeowners who want to understand the essentials, spot early warning signs and make confident decisions.", "For a concern specific to your home, speak with Zoya Electrician directly."], "20", ["electrical safety blog", "electrician tips Surat"]),
];

export const servicePages: Page[] = services.map(([slug, title, meta, icon], index) => page("service", `/services/${slug}`, `${title} in Surat`, meta, "SPECIALIST SERVICE", `${title}, handled with care from the first check to the final test.`, [
  `When ${title.toLowerCase()} is needed, the small details are where confidence comes from. Zoya Electrician assesses the situation first, explains the sensible options and completes the work with clean, careful finishing.`,
  `We work in homes, apartments and small commercial spaces across Surat. The aim is simple: dependable results, thoughtful communication and electrical work that is ready for everyday life.`,
  `If you are unsure whether this is the right service, contact us with a brief description. We will help you plan the safest, most useful next step.`,
], icon, [title.toLowerCase(), `${title.toLowerCase()} Surat`, "electrician Surat"]));

export const areaPages: Page[] = areas.map((area, index) => page("area", `/areas/electrician-in-${area.toLowerCase()}`, `Electrician in ${area}, Surat`, `Professional electrician services in ${area}, Surat for repairs, wiring, lighting, safety and planned electrical work.`, "YOUR LOCAL ELECTRICIAN", `Practical, polished electrical service for homes and businesses in ${area}.`, [
  `Looking for an electrician in ${area}? Zoya Electrician brings a careful, friendly approach to local repairs, installations and electrical improvements. We arrive ready to understand the issue and leave the space safe and orderly.`,
  `From switch repairs and ceiling fans to new-home electrical work, our Surat-based team helps ${area} residents make clear decisions about their electrical needs.`,
  `Choose a service that fits the job, or contact us for guidance before you book.`,
], String(index + 1).padStart(2, "0"), [`electrician in ${area.toLowerCase()}`, `${area.toLowerCase()} electrician`, "electrician Surat"]));

export const blogPages: Page[] = blogSeeds.map(([slug, title, meta], index) => page("blog", `/blog/${slug}`, title, meta, "HOME ELECTRICAL GUIDE", "Practical knowledge for a more confident home.", [
  `Electrical questions are easiest to handle when you know what to notice and when to get help. This guide explains the essentials in plain language, with safety and everyday comfort as the priority.`,
  `Start with the visible signs: changes in sound, heat, performance or reliability are worth paying attention to. Avoid repeated temporary fixes; a careful inspection can protect both the system and the people using it.`,
  `For homes in Surat, the right solution depends on the building, the load and the equipment involved. Zoya Electrician can assess the details and recommend a tidy, durable way forward.`,
], String(index + 1).padStart(2, "0"), [title.toLowerCase(), "electrical safety Surat", "electrician advice"]));

export const allPages = [...mainPages, ...servicePages, ...areaPages, ...blogPages];
export const allPaths = allPages.map((item) => item.slug.slice(1));
export const getPage = (path: string) => allPages.find((item) => item.slug === path);
export const featuredServices = servicePages.slice(0, 6);
export const featuredAreas = areaPages.slice(0, 6);
export const featuredBlogs = blogPages.slice(0, 3);
