// ---------- Data ----------
const loanCategories = [
  { icon: "briefcase", title: "Business Loan", desc: "Fuel growth with tailored funding for enterprises." },
  { icon: "building-2", title: "MSME Loan", desc: "Purpose-built credit for small and medium businesses." },
  { icon: "wallet", title: "Working Capital Loan", desc: "Keep operations running smoothly, month on month." },
  { icon: "home", title: "Home Loan", desc: "Own your dream home with the best possible rates." },
  { icon: "landmark", title: "Loan Against Property", desc: "Unlock the value of your residential or commercial asset." },
  { icon: "user", title: "Personal Loan", desc: "Instant funds for weddings, travel, medical & more." },
  { icon: "shield-plus", title: "Secured Business Loan", desc: "Higher tickets with collateral-backed structures." },
  { icon: "shield-off", title: "Unsecured Business Loan", desc: "Collateral-free credit for qualified businesses." },
  { icon: "repeat", title: "Balance Transfer", desc: "Move existing loans to lower rates and better terms." },
  { icon: "hard-hat", title: "Project Finance", desc: "Structured funding for large-scale projects." },
];

const whyChoose = [
  { icon: "users", title: "Expert Financial Advisors" },
  { icon: "scale", title: "Best Bank Comparisons" },
  { icon: "percent", title: "Competitive Interest Rates" },
  { icon: "badge-check", title: "High Approval Assistance" },
  { icon: "eye", title: "Transparent Process" },
  { icon: "truck", title: "Doorstep Documentation" },
  { icon: "user-check", title: "Dedicated Relationship Manager" },
  { icon: "life-buoy", title: "Complete Support Till Disbursal" },
];

const steps = [
  { n: "01", title: "Tell us your requirement", desc: "Share your goal, amount and timeline in minutes." },
  { n: "02", title: "Compare the best options", desc: "We match you with the right lenders and offers." },
  { n: "03", title: "Document verification", desc: "Curated checklist, doorstep pickup, zero confusion." },
  { n: "04", title: "Approval & processing", desc: "We coordinate with the bank until sanction." },
  { n: "05", title: "Quick loan disbursal", desc: "Funds credited swiftly to your account." },
];

const partners = ["HDFC Bank","ICICI Bank","Axis Bank","SBI","Kotak Mahindra","IDFC First","Yes Bank","Bajaj Finserv","Tata Capital","IIFL Finance","L&T Finance","Aditya Birla"];

const testimonials = [
  { quote: "The most transparent loan experience I've had. Sanction in five days without a single unnecessary form.", name: "Rajeev Sharma", role: "Founder, Jaipur Textiles" },
  { quote: "They compared six lenders and got me a rate almost 1.4% lower than what my bank offered directly.", name: "Aditi Mehra", role: "Home Loan Customer" },
  { quote: "Professional, calm, and fast. The relationship manager handled everything end-to-end.", name: "Vikas Agarwal", role: "MD, Agarwal Traders" },
];

const faqs = [
  { q: "How much loan can I get?", a: "Eligibility depends on income, credit profile and loan type. Our advisors typically arrange personal loans up to ₹40L and business loans up to ₹10Cr+ depending on your profile." },
  { q: "Which documents are required?", a: "A standard set — KYC, income proof, bank statements and, for businesses, GST/ITR. We share a precise checklist upfront so you're never asked twice." },
  { q: "How long does approval take?", a: "Personal and MSME loans can be approved in 24–72 hours. Secured and property-backed loans typically take 7–15 working days." },
  { q: "Can I get an unsecured business loan?", a: "Yes — subject to turnover, vintage and credit health. We work with multiple NBFCs offering collateral-free credit." },
  { q: "Is my information confidential?", a: "Absolutely. Your data is shared only with matched lenders after your explicit consent, and stored securely at all times." },
];

// ---------- Section renderers (only run if the target element exists on this page) ----------

function renderLoanGrid(elId, items) {
  const el = document.getElementById(elId);
  if (!el) return;
  items.forEach(l => {
    el.insertAdjacentHTML('beforeend', `
      <div class="loan-card">
        <div class="loan-icon"><i data-lucide="${l.icon}"></i></div>
        <h3>${l.title}</h3>
        <p>${l.desc}</p>
        <div class="more">Apply for this <i data-lucide="arrow-right"></i></div>
      </div>`);
  });
}

function renderLoanTypeSelect(elId) {
  const el = document.getElementById(elId);
  if (!el) return;
  loanCategories.forEach(l => {
    const opt = document.createElement('option');
    opt.textContent = l.title;
    el.appendChild(opt);
  });
}

function renderWhyGrid(elId) {
  const el = document.getElementById(elId);
  if (!el) return;
  whyChoose.forEach(w => {
    el.insertAdjacentHTML('beforeend', `
      <div class="why-item">
        <div class="icon"><i data-lucide="${w.icon}"></i></div>
        <span>${w.title}</span>
      </div>`);
  });
}

function renderMiniWhy(elId, count) {
  const el = document.getElementById(elId);
  if (!el) return;
  whyChoose.slice(0, count).forEach(w => {
    el.insertAdjacentHTML('beforeend', `
      <div class="mini-why-item">
        <div class="icon"><i data-lucide="${w.icon}"></i></div>
        <span>${w.title}</span>
      </div>`);
  });
}

function renderSteps(elId) {
  const el = document.getElementById(elId);
  if (!el) return;
  steps.forEach(s => {
    el.insertAdjacentHTML('beforeend', `
      <li class="step">
        <div class="step-n">${s.n}</div>
        <h3>${s.title}</h3>
        <p>${s.desc}</p>
      </li>`);
  });
}

function renderPartners(elId) {
  const el = document.getElementById(elId);
  if (!el) return;
  partners.forEach(p => {
    el.insertAdjacentHTML('beforeend', `<div class="partner-tile">${p}</div>`);
  });
}

function renderTestimonials(elId) {
  const el = document.getElementById(elId);
  if (!el) return;
  testimonials.forEach(t => {
    el.insertAdjacentHTML('beforeend', `
      <figure class="testi-card">
        <div class="testi-quotemark">&rdquo;</div>
        <div class="testi-stars">${'<i data-lucide=\"star\"></i>'.repeat(5)}</div>
        <blockquote>${t.quote}</blockquote>
        <footer>
          <div class="testi-name">${t.name}</div>
          <div class="testi-role">${t.role}</div>
        </footer>
      </figure>`);
  });
}

function renderFaq(elId) {
  const el = document.getElementById(elId);
  if (!el) return;
  faqs.forEach((f, i) => {
    el.insertAdjacentHTML('beforeend', `
      <div class="faq-item ${i === 0 ? 'open' : ''}">
        <button class="faq-q" type="button">
          <span>${f.q}</span>
          <span class="faq-icon"><i data-lucide="${i === 0 ? 'minus' : 'plus'}"></i></span>
        </button>
        <div class="faq-a"><p>${f.a}</p></div>
      </div>`);
  });
  el.addEventListener('click', (e) => {
    const btn = e.target.closest('.faq-q');
    if (!btn) return;
    const item = btn.closest('.faq-item');
    const wasOpen = item.classList.contains('open');
    el.querySelectorAll('.faq-item').forEach(it => {
      it.classList.remove('open');
      it.querySelector('.faq-icon i').setAttribute('data-lucide', 'plus');
    });
    if (!wasOpen) {
      item.classList.add('open');
      item.querySelector('.faq-icon i').setAttribute('data-lucide', 'minus');
    }
    lucide.createIcons();
  });
}

function initEligibilityForm() {
  const form = document.getElementById('eligibilityForm');
  if (!form) return;
  renderLoanTypeSelect('loanTypeSelect');
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    document.getElementById('formFields').classList.add('hide');
    document.getElementById('formSuccess').classList.add('show');
  });
}

function initEmiCalculator() {
  const amountSlider = document.getElementById('amountSlider');
  if (!amountSlider) return;
  const rateSlider = document.getElementById('rateSlider');
  const tenureSlider = document.getElementById('tenureSlider');
  const fmt = n => '₹' + Math.round(n).toLocaleString('en-IN');

  function updateCalc() {
    const amount = Number(amountSlider.value);
    const rate = Number(rateSlider.value);
    const tenure = Number(tenureSlider.value);
    const monthlyRate = rate / 12 / 100;
    const emi = monthlyRate > 0
      ? (amount * monthlyRate * Math.pow(1 + monthlyRate, tenure)) / (Math.pow(1 + monthlyRate, tenure) - 1)
      : amount / tenure;
    const total = emi * tenure;
    const interest = total - amount;

    document.getElementById('amountLabel').textContent = fmt(amount);
    document.getElementById('rateLabel').textContent = rate.toFixed(2) + '%';
    document.getElementById('tenureLabel').textContent = tenure + ' mo';
    document.getElementById('emiOut').textContent = fmt(emi);
    document.getElementById('principalOut').textContent = fmt(amount);
    document.getElementById('interestOut').textContent = fmt(interest);
    document.getElementById('totalOut').textContent = fmt(total);
  }
  [amountSlider, rateSlider, tenureSlider].forEach(s => s.addEventListener('input', updateCalc));
  updateCalc();
}

function initNavAndFooter() {
  const menuBtn = document.getElementById('menuBtn');
  if (menuBtn) {
    menuBtn.addEventListener('click', () => {
      document.getElementById('mobilePanel').classList.toggle('open');
    });
    document.querySelectorAll('#mobilePanel a').forEach(a => a.addEventListener('click', () => {
      document.getElementById('mobilePanel').classList.remove('open');
    }));
  }
  const yearEl = document.getElementById('copyrightYear');
  if (yearEl) yearEl.textContent = `© ${new Date().getFullYear()} PinkCity Credit. All rights reserved.`;
}

// ---------- Run whatever this page needs ----------
function initPage() {
  renderLoanGrid('loanGridPreview', loanCategories.slice(0, 6));
  renderLoanGrid('loanGridFull', loanCategories);
  renderWhyGrid('whyGrid');
  renderMiniWhy('miniWhyGrid', 3);
  renderSteps('stepsGrid');
  renderPartners('partnersGrid');
  renderTestimonials('testiGrid');
  renderFaq('faqList');
  initEligibilityForm();
  initEmiCalculator();
  initNavAndFooter();
  lucide.createIcons();
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initPage);
} else {
  initPage();
}
