import { useEffect, useRef, useState } from 'react'
import Nav from '../components/Nav'
import Footer from '../components/Footer'

const sections = [
  { id: 'install', label: 'Installation' },
  { id: 'record', label: 'Recording a Workflow' },
  { id: 'replay', label: 'Replaying a Recording' },
  { id: 'share', label: 'Export & Import' },
  { id: 'usecases', label: 'Use Cases' },
  { id: 'faq', label: 'FAQ' },
]

export default function DocsPage() {
  const [activeId, setActiveId] = useState<string>('')
  const observerRef = useRef<IntersectionObserver | null>(null)

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting)
        if (visible.length > 0) {
          setActiveId(visible[0].target.id)
        }
      },
      { rootMargin: '-80px 0px -60% 0px', threshold: 0 }
    )

    sections.forEach((s) => {
      const el = document.getElementById(s.id)
      if (el) observerRef.current?.observe(el)
    })

    return () => observerRef.current?.disconnect()
  }, [])

  const scrollTo = (id: string) => {
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' })
      setActiveId(id)
    }
  }

  return (
    <div className="min-h-screen bg-surface text-bone">
      <Nav />

      <div className="mx-auto grid max-w-[1100px] grid-cols-1 gap-16 px-8 pt-24 pb-24 md:grid-cols-[220px_1fr]">
        {/* Sidebar */}
        <aside className="hidden md:block">
          <div className="sticky top-20">
            <div className="mb-4 text-[0.6875rem] font-semibold uppercase tracking-widest text-muted">
              On this page
            </div>
            <ul className="flex flex-col gap-1">
              {sections.map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => scrollTo(item.id)}
                    className={`block w-full rounded-lg px-3 py-2 text-left text-sm transition-colors cursor-pointer ${
                      activeId === item.id
                        ? 'bg-surface-high text-bone border-l-2 border-primary pl-[calc(0.75rem-2px)]'
                        : 'text-muted hover:bg-surface-high hover:text-bone'
                    }`}
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </aside>

        {/* Content */}
        <article className="max-w-[640px]">
          <div className="mb-4 label-sm">Documentation</div>
          <h1 className="mb-4 font-display text-4xl font-bold tracking-tight">
            Everything you need to know.
          </h1>
          <p className="mb-8 text-base leading-relaxed text-muted">
            Poppy is intentionally simple. But simple doesn't mean shallow. Here's how to get the
            most out of it.
          </p>

          <h2 id="install" className="mb-4 mt-12 border-b border-ghost pb-3 font-display text-xl font-bold tracking-tight">
            Installation
          </h2>
          <p className="mb-4 text-sm leading-relaxed text-muted">
            We don't have a Chrome Web Store listing yet (coming soon). For now, you load it as an
            unpacked extension.
          </p>
          <ol className="mb-6 list-decimal pl-5">
            <li className="mb-2 text-sm leading-relaxed text-muted">
              Download or clone the repo.
            </li>
            <li className="mb-2 text-sm leading-relaxed text-muted">
              Run <code className="bg-surface-high px-1.5 py-0.5 text-xs text-bone">npm install</code> and{' '}
              <code className="bg-surface-high px-1.5 py-0.5 text-xs text-bone">npm run build</code> in the{' '}
              <code className="bg-surface-high px-1.5 py-0.5 text-xs text-bone">extension/</code> folder.
            </li>
            <li className="mb-2 text-sm leading-relaxed text-muted">
              Open Chrome → Extensions → Developer mode → Load unpacked.
            </li>
            <li className="mb-2 text-sm leading-relaxed text-muted">
              Select the{' '}
              <code className="bg-surface-high px-1.5 py-0.5 text-xs text-bone">.output/chrome-mv3/</code>{' '}
              folder.
            </li>
            <li className="mb-2 text-sm leading-relaxed text-muted">
              Done. Click the Poppy icon in your toolbar to open the sidepanel.
            </li>
          </ol>

          <div className="mb-8 border-l-2 border-primary bg-surface-low p-5">
            <div className="mb-2 text-[0.6875rem] font-semibold uppercase tracking-widest text-primary">
              Pro Tip
            </div>
            <p className="text-sm text-muted">
              Pin the extension to your toolbar. You'll be opening the sidepanel a lot.
            </p>
          </div>

          <h2 id="record" className="mb-4 mt-12 border-b border-ghost pb-3 font-display text-xl font-bold tracking-tight">
            Recording a Workflow
          </h2>
          <p className="mb-4 text-sm leading-relaxed text-muted">
            Recording is the whole point. Here's how to capture a session without messing it up.
          </p>
          <ol className="mb-6 list-decimal pl-5">
            <li className="mb-2 text-sm leading-relaxed text-muted">
              <strong className="text-bone">Open the sidepanel.</strong> Click the Poppy icon in your
              toolbar.
            </li>
            <li className="mb-2 text-sm leading-relaxed text-muted">
              <strong className="text-bone">Hit the red circle.</strong> It's in the top-right of
              the sidepanel. You'll see a red "Recording..." banner appear.
            </li>
            <li className="mb-2 text-sm leading-relaxed text-muted">
              <strong className="text-bone">Do your thing.</strong> Click buttons, fill forms,
              scroll, open tabs. Poppy is watching.
            </li>
            <li className="mb-2 text-sm leading-relaxed text-muted">
              <strong className="text-bone">Hit stop.</strong> The red square next to the action
              count. Type a name. Hit save.
            </li>
          </ol>

          <div className="mb-8 border-l-2 border-primary bg-surface-low p-5">
            <div className="mb-2 text-[0.6875rem] font-semibold uppercase tracking-widest text-primary">
              What gets recorded?
            </div>
            <p className="text-sm text-muted">
              Clicks, text inputs, dropdown selections, scrolls, page navigations, and tab events
              (open, switch, close). We skip anything that happens while replaying so you don't get
              infinite loops.
            </p>
          </div>

          <h2 id="replay" className="mb-4 mt-12 border-b border-ghost pb-3 font-display text-xl font-bold tracking-tight">
            Replaying a Recording
          </h2>
          <p className="mb-4 text-sm leading-relaxed text-muted">
            Replaying is where the magic happens. Poppy steps through each action with a small delay
            so you can watch.
          </p>
          <ol className="mb-6 list-decimal pl-5">
            <li className="mb-2 text-sm leading-relaxed text-muted">
              Open the sidepanel and click the film icon to view your recordings.
            </li>
            <li className="mb-2 text-sm leading-relaxed text-muted">
              Pick one and click the play button, or open it for details.
            </li>
            <li className="mb-2 text-sm leading-relaxed text-muted">
              Hit <strong className="text-bone">Replay</strong>. Poppy will switch to the right tabs,
              click the right elements, and type the right text.
            </li>
          </ol>
          <p className="mb-6 text-sm leading-relaxed text-muted">
            If an element has moved or changed, Poppy tries a fallback chain: highlight index → CSS
            selector → XPath → text match. Most of the time it just works.
          </p>

          <div className="mb-8 border-l-2 border-primary bg-surface-low p-5">
            <div className="mb-2 text-[0.6875rem] font-semibold uppercase tracking-widest text-primary">
              Heads up
            </div>
            <p className="text-sm text-muted">
              Make sure you're on the right page before replaying. Poppy handles navigations, but if
              your recording starts mid-flow, you might need to get yourself to the starting point
              first.
            </p>
          </div>

          <h2 id="share" className="mb-4 mt-12 border-b border-ghost pb-3 font-display text-xl font-bold tracking-tight">
            Export & Import
          </h2>
          <p className="mb-4 text-sm leading-relaxed text-muted">
            Recordings are stored locally in your browser. To share them, you export as JSON.
          </p>
          <h3 className="mb-3 mt-8 text-base font-semibold">Export</h3>
          <ol className="mb-6 list-decimal pl-5">
            <li className="mb-2 text-sm leading-relaxed text-muted">
              Go to your recordings list.
            </li>
            <li className="mb-2 text-sm leading-relaxed text-muted">
              Hover over a recording and click the download arrow.
            </li>
            <li className="mb-2 text-sm leading-relaxed text-muted">
              A JSON file downloads:{' '}
              <code className="bg-surface-high px-1.5 py-0.5 text-xs text-bone">
                poppy-recording-name-2026-04-21.json
              </code>
            </li>
          </ol>
          <h3 className="mb-3 mt-8 text-base font-semibold">Import</h3>
          <ol className="mb-6 list-decimal pl-5">
            <li className="mb-2 text-sm leading-relaxed text-muted">
              Click the <strong className="text-bone">Import</strong> button in the recordings list.
            </li>
            <li className="mb-2 text-sm leading-relaxed text-muted">
              Select a JSON file someone sent you.
            </li>
            <li className="mb-2 text-sm leading-relaxed text-muted">
              It appears in your list, ready to replay.
            </li>
          </ol>

          <div className="mb-8 border-l-2 border-primary bg-surface-low p-5">
            <div className="mb-2 text-[0.6875rem] font-semibold uppercase tracking-widest text-primary">
              Behind the scenes
            </div>
            <p className="text-sm text-muted">
              The JSON is just our intermediate representation (IR). It's plain text, versioned, and
              human-readable if you're curious. Version{' '}
              <code className="bg-surface-high px-1.5 py-0.5 text-xs text-bone">"1"</code> is the
              current format.
            </p>
          </div>

          <h2 id="usecases" className="mb-4 mt-12 border-b border-ghost pb-3 font-display text-xl font-bold tracking-tight">
            Use Cases
          </h2>
          <p className="mb-6 text-sm leading-relaxed text-muted">
            We built Poppy for ourselves, but turns out a lot of people have the same problem. Here
            are the workflows we see most.
          </p>

          <div className="flex flex-col">
            {[
              {
                tag: 'QA / Testing',
                title: 'Regression testing without writing a single test',
                body: "You're a QA engineer testing a SaaS app. Every release, you manually click through the same 20 steps to make sure checkout still works. Record it once. Replay it on every deploy. If something breaks, Poppy stops and you know exactly which step failed.",
              },
              {
                tag: 'Customer Support',
                title: 'Send repro steps that actually make sense',
                body: 'A customer says "the export button doesn\'t work." Instead of writing a novel in Zendesk, record yourself reproducing the bug and attach the JSON. The dev team imports it, hits replay, and sees the exact issue. No screenshots. No confusion.',
              },
              {
                tag: 'Onboarding',
                title: 'Document internal tools without documentation',
                body: 'Your company has an internal dashboard that nobody understands. Record the "how to generate a quarterly report" workflow. Share it in Slack. New hires replay it instead of bothering you.',
              },
              {
                tag: 'Demos',
                title: 'Perfect demos, every time',
                body: "You're doing a product demo for investors. Instead of praying you don't typo the login password or click the wrong menu, record the ideal demo path. Replay it live. Looks like you're just fast at your job.",
              },
              {
                tag: 'Personal',
                title: 'Automate the boring stuff',
                body: 'You fill out the same timesheet form every Friday. Record it once. Every Friday, replay it. You just saved 10 minutes a week. That\'s 8 hours a year. You\'re welcome.',
              },
            ].map((u, i) => (
              <div key={u.tag} className={`py-8 ${i > 0 ? 'border-t border-ghost' : ''}`}>
                <div className="mb-3">
                  <span className="bg-surface-high px-2 py-1 text-[0.625rem] font-semibold uppercase tracking-wider text-muted">
                    {u.tag}
                  </span>
                </div>
                <h3 className="mb-3 text-lg font-semibold tracking-tight">{u.title}</h3>
                <p className="text-sm leading-relaxed text-muted">{u.body}</p>
              </div>
            ))}
          </div>

          <h2 id="faq" className="mb-4 mt-12 border-b border-ghost pb-3 font-display text-xl font-bold tracking-tight">
            FAQ
          </h2>

          <h3 className="mb-3 mt-8 text-base font-semibold">Does Poppy work on every website?</h3>
          <p className="mb-6 text-sm leading-relaxed text-muted">
            Almost. We inject a content script on all URLs, so any standard web page is fair game.
            We skip chrome:// pages, file:// URLs, and other restricted origins for security.
          </p>

          <h3 className="mb-3 mt-8 text-base font-semibold">Can I edit a recording?</h3>
          <p className="mb-6 text-sm leading-relaxed text-muted">
            Not in the UI yet. You can export the JSON, edit it by hand (it's just text), and
            re-import it. A visual editor is on the roadmap.
          </p>

          <h3 className="mb-3 mt-8 text-base font-semibold">Does Poppy store my data?</h3>
          <p className="mb-6 text-sm leading-relaxed text-muted">
            Everything stays in your browser. Recordings are stored in IndexedDB. We don't have a
            server, we don't have analytics, and we don't phone home. Your data is yours.
          </p>

          <h3 className="mb-3 mt-8 text-base font-semibold">What if a replay fails?</h3>
          <p className="mb-6 text-sm leading-relaxed text-muted">
            Poppy tries hard to find the right element. If the page has completely changed and none
            of the fallback identifiers work, the step will error and replay stops. You'll see what
            failed in the sidepanel.
          </p>

          <h3 className="mb-3 mt-8 text-base font-semibold">
            Can I slow down or speed up replay?
          </h3>
          <p className="mb-6 text-sm leading-relaxed text-muted">
            The default delay is 500ms between steps. This isn't configurable in the UI yet, but
            it's a single constant in the code if you want to tweak it.
          </p>

          <h3 className="mb-3 mt-8 text-base font-semibold">
            Is there a limit to how long a recording can be?
          </h3>
          <p className="mb-6 text-sm leading-relaxed text-muted">
            No hard limit. We've tested recordings with 200+ actions. Performance depends on your
            machine and the complexity of the pages you're interacting with.
          </p>
        </article>
      </div>

      <Footer />
    </div>
  )
}
