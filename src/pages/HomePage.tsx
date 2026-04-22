import Nav from "../components/Nav";
import Footer from "../components/Footer";
import screen from "../assets/screen.png";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-surface text-bone">
      <Nav />

      {/* Hero */}
      <section className="bg-surface-low pt-36 pb-24">
        <div className="mx-auto grid max-w-[1100px] grid-cols-1 items-center gap-16 px-8 md:grid-cols-2">
          <div>
            <div className="mb-6 inline-flex items-center gap-2 label-sm">
              <span className="block h-1.5 w-1.5 bg-primary" />
              Browser Automation
            </div>
            <h1 className="display-lg mb-6 max-w-[480px]">
              Teach once.
              <br />
              Replay forever.
            </h1>
            <p className="mb-8 max-w-[420px] text-sm leading-relaxed text-muted">
              Poppy records exactly what you do in the browser — clicks, typing,
              scrolls, even tab switches — and turns it into a recipe anyone can
              run. No coding. No fragile scripts. Just show it once.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="#"
                className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-br from-primary to-primary-hover px-7 py-3.5 text-sm font-medium text-bone transition-opacity hover:opacity-90"
              >
                Add to Chrome
              </a>
              <a
                href="#/docs"
                className="inline-flex items-center gap-2 rounded-lg border border-ghost px-7 py-3.5 text-sm font-medium text-bone transition-colors hover:bg-surface-high"
              >
                Read the Docs
              </a>
            </div>
          </div>
          <div>
            <img
              src={screen}
              alt="Poppy extension in action"
              className="w-full border border-ghost shadow-2xl"
            />
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-24" id="features">
        <div className="mx-auto max-w-[1100px] px-8">
          <div className="mb-16">
            <div className="mb-4 label-sm">Features</div>
            <h2 className="display-md mb-4">
              Everything you need,
              <br />
              nothing you don't.
            </h2>
            <p className="max-w-[500px] text-sm leading-relaxed text-muted">
              We built Poppy because we were tired of explaining the same
              14-step process over Slack. Now we just send a file.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-px md:grid-cols-3">
            {[
              {
                num: "01",
                title: "Record Real Actions",
                body: "Click, type, select dropdowns, scroll, navigate between pages. If you can do it, Poppy can record it. No mockups. No guessing.",
              },
              {
                num: "02",
                title: "Smart Element Locking",
                body: "Poppy doesn't just remember 'the 3rd button.' It stores a chain of identifiers — index, selector, XPath, text — so replays survive redesigns.",
              },
              {
                num: "03",
                title: "Full Tab Support",
                body: "Multi-tab workflows? No problem. Opening new tabs, switching between them, closing old ones — all captured in the recording.",
              },
              {
                num: "04",
                title: "Export & Share",
                body: "Save your recording as a JSON file. Drop it in Slack, email it, commit it to git. The other person imports it and hits replay.",
              },
              {
                num: "05",
                title: "Instant Replay",
                body: "Load a recording and watch it run. Step-by-step with a small delay so you can see what's happening. Pause anytime.",
              },
              {
                num: "06",
                title: "Built for Teams",
                body: "QA engineers use it for regression testing. Support teams use it for repro steps. Developers use it for demos. You do you.",
              },
            ].map((f) => (
              <div
                key={f.num}
                className="bg-surface-low p-10 transition-colors hover:bg-surface-high"
              >
                <div className="mb-6 font-display text-3xl font-bold leading-none text-primary/40">
                  {f.num}
                </div>
                <h3 className="mb-3 text-base font-semibold tracking-tight">
                  {f.title}
                </h3>
                <p className="text-sm leading-relaxed text-muted">{f.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="bg-surface-low py-24">
        <div className="mx-auto max-w-[1100px] px-8">
          <div className="mb-16">
            <div className="mb-4 label-sm">How it Works</div>
            <h2 className="display-md mb-4">
              Three steps.
              <br />
              That's it.
            </h2>
            <p className="max-w-[500px] text-sm leading-relaxed text-muted">
              We deliberately kept the workflow stupidly simple. No setup. No
              configuration files. Just open the sidepanel and go.
            </p>
          </div>

          <div className="flex flex-col">
            {[
              {
                num: "1",
                title: "Hit record",
                body: "Open the Poppy sidepanel and tap the red circle. Now go about your business. Fill out that form. Click through that onboarding flow. Open tabs. Whatever you need.",
              },
              {
                num: "2",
                title: "Save and name it",
                body: 'When you\'re done, hit stop. Give your recording a name like "New user signup" or "Invoice export workflow." It\'s saved locally in your browser.',
              },
              {
                num: "3",
                title: "Share or replay",
                body: "Export the recording as JSON and send it to a teammate. They import it, hit replay, and watch the magic happen. Or just rerun it yourself tomorrow when you forget the steps.",
              },
            ].map((s, i) => (
              <div
                key={s.num}
                className={`grid grid-cols-[80px_1fr] gap-8 py-10 ${i > 0 ? "border-t border-ghost" : ""}`}
              >
                <div className="font-display text-4xl font-bold leading-none text-primary/60">
                  {s.num}
                </div>
                <div>
                  <h3 className="mb-2 text-lg font-semibold tracking-tight">
                    {s.title}
                  </h3>
                  <p className="max-w-[480px] text-sm leading-relaxed text-muted">
                    {s.body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-surface-low py-24 text-center">
        <div className="mx-auto max-w-[1100px] px-8">
          <div className="mb-6 label-sm">Get Started</div>
          <h2 className="display-md mb-6">
            Stop typing instructions.
            <br />
            Start sending recordings.
          </h2>
          <p className="mx-auto mb-8 max-w-[420px] text-sm leading-relaxed text-muted">
            Free. Open source. Takes 30 seconds to install and works on every
            website.
          </p>
          <a
            href="#"
            className="inline-flex items-center gap-2 bg-gradient-to-br from-primary to-primary-hover px-7 py-3.5 text-sm font-medium text-bone transition-opacity hover:opacity-90 rounded-lg"
          >
            Install Poppy for Chrome
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}
