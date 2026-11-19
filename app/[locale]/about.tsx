import LottieArt from "@/components/animation/LottieArt";

type AboutProps = { fa: boolean; locale: string };

export default function About({ fa, locale }: AboutProps) {
  const stories = fa ? [
    { tag: "تخصص‌ها", title: "ایده چطور ساخته می‌شود؟", text: "از طراحی رابط تا کدنویسی، با ابزارهایی که برای مسئله مناسب‌اند.", href: "expertise", symbol: "✳" },
    { tag: "تجربه‌ها", title: "چه مسیری را طی کرده‌ام؟", text: "نگاهی به تیم‌ها و محصولاتی که در ساخت آن‌ها همراه بوده‌ام.", href: "experience", symbol: "◈" },
    { tag: "همکاری", title: "چطور با هم کار می‌کنیم؟", text: "از پکیج متناسب با بودجه تا پشتیبانی بعد از تحویل.", href: "why", symbol: "✦" },
  ] : [
    { tag: "EXPERTISE", title: "How does an idea take shape?", text: "From interface design to code, with tools chosen for the problem.", href: "expertise", symbol: "✳" },
    { tag: "EXPERIENCE", title: "What has the journey been like?", text: "Meet the teams and products I’ve helped bring to life.", href: "experience", symbol: "◈" },
    { tag: "WORKING TOGETHER", title: "What could we make together?", text: "From a package that fits your budget to support after delivery.", href: "why", symbol: "✦" },
  ];
  return <div className="about-page">
    <section className="about-hero wrap">
      <div className="about-hero-copy">
        <p className="eyebrow"><span className="line" />{fa ? "سلام، من بردیا ریاحی هستم" : "HELLO, I’M BARDIA RIAHI"}</p>
        <h1>{fa ? <>کنجکاوی، نقطهٔ شروع <em>ساختن است.</em></> : <>Curiosity is where <em>creating begins.</em></>}</h1>
        <p className="about-lead">{fa ? "من عاشق لحظه‌ای هستم که یک ایده، کم‌کم به چیزی واقعی تبدیل می‌شود؛ چیزی که آدم‌ها بتوانند ببینند، تجربه کنند و از آن استفاده کنند." : "I love the moment an idea starts becoming something real—something people can see, experience and use."}</p>
        <div className="about-identity"><span className="identity-dot" /><span>{fa ? "توسعه‌دهنده فرانت‌اند و طراح وب · تهران" : "FRONT-END DEVELOPER & WEB DESIGNER · TEHRAN"}</span></div>
      </div>
      <div className="about-art-frame"><LottieArt /><div className="about-art-caption"><span>{fa ? "از ایده تا تجربه" : "FROM IDEA TO EXPERIENCE"}</span><span>✳</span></div></div>
    </section>
    <section className="about-story"><div className="wrap about-story-grid"><div><p className="eyebrow"><span className="line" />{fa ? "نگاه من به کار" : "THE WAY I WORK"}</p><h2>{fa ? <>پشت هر صفحه،<br /><em>یک هدف واقعی است.</em></> : <>Behind every screen,<br /><em>there’s a real purpose.</em></>}</h2></div><div className="about-story-copy"><p>{fa ? "بیش از شش سال است که در کنار تیم‌های مختلف، روی وب‌سایت‌ها، پنل‌ها و محصولات دیجیتال کار می‌کنم. چیزی که برایم جذاب است فقط نوشتن کد نیست؛ فهمیدن مسئله و پیدا کردن راهی است که استفاده از محصول را ساده‌تر و دلپذیرتر کند." : "For over six years, I’ve worked with different teams on websites, dashboards and digital products. What interests me goes beyond writing code: understanding the problem and finding ways to make a product simpler and more enjoyable to use."}</p><p>{fa ? "به جزئیات طراحی، کیفیت اجرا و قابلیت توسعه اهمیت می‌دهم؛ چون یک تجربه خوب باید هم برای مخاطب خوشایند باشد و هم برای آیندهٔ پروژه قابل اتکا." : "I care about design details, quality implementation and room to grow—because a good experience should feel right for its users and remain dependable as the project evolves."}</p><div className="about-pill-row"><span>{fa ? "طراحی با هدف" : "PURPOSEFUL DESIGN"}</span><span>{fa ? "کد با دقت" : "CAREFUL CODE"}</span><span>{fa ? "آماده رشد" : "ROOM TO GROW"}</span></div></div></div></section>
    <section className="about-explore wrap"><div className="about-explore-heading"><div><p className="eyebrow"><span className="line" />{fa ? "داستان ادامه دارد" : "THERE’S MORE TO EXPLORE"}</p><h2>{fa ? "بیایید بیشتر آشنا شویم." : "Let’s get to know each other."}</h2></div><p>{fa ? "هر بخش، دریچه‌ای به روش فکر کردن و کار کردن من است." : "Each page is a little window into how I think and work."}</p></div><div className="about-explore-grid">{stories.map((story) => <a className="about-explore-card" href={`/${locale}/${story.href}/`} key={story.href}><div className="explore-card-top"><span>{story.tag}</span><span className="explore-symbol" aria-hidden="true">{story.symbol}</span></div><div><h3>{story.title}</h3><p>{story.text}</p><span className="explore-link">{fa ? "بیشتر ببینید" : "Explore"}</span></div></a>)}</div><div className="about-end"><div><span>{fa ? "ایده‌ای در ذهن دارید؟" : "HAVE AN IDEA?"}</span><p>{fa ? "شاید این، شروع یک همکاری خوب باشد." : "This could be the start of something good."}</p></div><a className="button primary" href={`/${locale}/contact/`}>{fa ? "بیایید گفتگو کنیم" : "Let’s talk"}</a></div></section>
  </div>;
}
