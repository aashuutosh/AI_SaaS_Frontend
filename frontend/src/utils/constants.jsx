// frontend/src/utils/constants.jsx
export const FEATURES = [
  {
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"/></svg>,
    cls: "fi-green", title: "AI tools, ready to use",
    desc: "Chat with AI, create content, and get answers in seconds. No setup, no learning curve — just ask and get results.",
  },
  {
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/></svg>,
    cls: "fi-teal", title: "Your data, always safe",
    desc: "Sign in with Google, no passwords to remember. Every request is encrypted. Your chats and files are private — always.",
  },
  {
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>,
    cls: "fi-amber", title: "Pay only for what you use",
    desc: "Start free with 500 credits every month. Top up when you need more — no subscriptions forced, no surprise bills.",
  },
  {
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/></svg>,
    cls: "fi-violet", title: "See every detail",
    desc: "A clear dashboard shows how many credits you've used, which tools you love, and exactly what happened — no mysteries.",
  },
  {
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"/></svg>,
    cls: "fi-sky", title: "Bring your whole team",
    desc: "Invite colleagues, share a credit pool, and see who's using what. Everyone gets their own space under one account.",
  },
  {
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"/></svg>,
    cls: "fi-rose", title: "Connect your own tools",
    desc: "Developers can plug AIFlow into any app via our simple API. Full documentation, instant API keys, and clean responses.",
  },
];

export const PLANS = [
  {
    tier: "Free", price: "0", period: "forever · no card needed",
    credits: "500 credits / month",
    features: ["AI Chat", "Usage history", "Google sign-in", "Community support"],
    cta: "Get started free", ctaCls: "plan-cta-ghost",
  },
  {
    tier: "Starter", price: "12", period: "per month",
    credits: "3,000 credits / month",
    features: ["Everything in Free", "Content generator", "Save your API key", "Email support"],
    cta: "Start Starter", ctaCls: "plan-cta-ghost",
  },
  {
    tier: "Pro", price: "39", period: "per month",
    credits: "12,000 credits / month",
    features: ["Everything in Starter", "Faster AI responses", "Earn referral credits", "Advanced analytics", "Priority support"],
    cta: "Start Pro", ctaCls: "plan-cta-green", featured: true,
  },
  {
    tier: "Enterprise", price: null, period: "custom contract",
    credits: "Unlimited credits",
    features: ["Everything in Pro", "Team workspaces", "White-label option", "Dedicated support", "Custom AI models"],
    cta: "Contact us", ctaCls: "plan-cta-ghost",
  },
];

export const TESTIMONIALS = [
  {
    quote: "I'm not a tech person at all. AIFlow felt like talking to a very smart assistant. Had it summarising reports on day one.",
    name: "Sara Okonkwo", role: "Operations Manager · NexLabs", emoji: "👩🏾‍💼",
  },
  {
    quote: "The credit system makes total sense — I only pay for what I actually use. No more monthly SaaS regret.",
    name: "James Park", role: "Freelance Designer · Self-employed", emoji: "🧑‍🎨",
  },
  {
    quote: "We onboarded our whole 12-person team in an afternoon. The admin dashboard made it dead simple.",
    name: "Priya Mehta", role: "Head of Product · Orbitai", emoji: "👩‍💻",
  },
];

export const FAQS = [
  { q: "What is a credit?", a: "Think of a credit as a coin you spend when you use an AI tool. Sending one chat message costs 1 credit. Generating long content costs more. You can always see the cost before you click send." },
  { q: "Do unused credits roll over?", a: "Free plan credits reset each month. Credits from paid packs never expire — they stay in your account until you use them." },
  { q: "Do I need a credit card to start?", a: "No. You can sign in with Google and start using AIFlow with 500 free credits, no card required. Upgrade when you're ready." },
  { q: "Is my data private?", a: "Yes. Your conversations and files are private to you. We don't train AI models on your data, and we never sell your information." },
  { q: "Can my team use AIFlow together?", a: "Yes — Pro and Enterprise plans include team workspaces. Everyone gets their own account, and an admin can manage credits and usage from one place." },
];

export const LOGOS = ["ACMECORP","NEXLABS","BUILDFAST","ORBITAI","STACKLY","DEVFORGE","CLOUDNINE","LUMINARY","VAULTCO","TILESOFT"];