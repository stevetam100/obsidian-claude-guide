import { Prompt } from "@/components/Prompt";
import { ProgressBar, Step } from "@/components/Step";
import { Callout, LinkButton, Links, Ol, Section, Ul } from "@/components/ui";

const KIT_ZIP =
  "https://github.com/mattymostudio/creator-system/archive/refs/heads/main.zip";
const KIT_REPO = "https://github.com/mattymostudio/creator-system";

const NAV = [
  { id: "before", label: "Before you start" },
  { id: "install", label: "1 · Install" },
  { id: "vault", label: "2 · Set up the vault" },
  { id: "gather", label: "3 · Gather your writing" },
  { id: "ingest", label: "4 · Bring it into the vault" },
  { id: "use", label: "5 · Search, sort, find topics" },
  { id: "stuck", label: "6 · When you get stuck" },
  { id: "organize", label: "7 · Organizing & searching" },
];

const TOTAL_STEPS = 17;

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-6xl px-5 pb-32 pt-10 sm:px-8">
      {/* Hero */}
      <header className="mb-14 max-w-3xl">
        <p className="mb-4 font-mono text-[11px] font-semibold uppercase tracking-[0.2em] text-accent">
          A setup guide · Obsidian + Claude
        </p>
        <h1 className="font-serif text-[2.6rem] font-medium leading-[1.05] text-ink sm:text-[3.4rem]">
          Christiana&rsquo;s writing, <em className="font-light italic">searchable.</em>
        </h1>
        <p className="mt-5 text-lg leading-relaxed text-ink-soft">
          Step by step, from a blank laptop to a private library of every Word and Google Doc
          you&rsquo;ve ever written — one you can search, sort by date or topic, and ask
          questions of in plain English. No coding, nothing to install beyond two apps. About an
          hour of setup, then Claude does the heavy lifting. Every prompt on this page has been run
          end-to-end on a test archive.
        </p>
        <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-ink-soft">
          <ProgressBar total={TOTAL_STEPS} />
          <span>Click a step&rsquo;s number to mark it done — this page remembers.</span>
        </div>
      </header>

      <div className="lg:grid lg:grid-cols-[200px_1fr] lg:gap-14">
        {/* Sticky nav */}
        <aside className="hidden lg:block">
          <nav className="sticky top-8 space-y-1 text-sm">
            {NAV.map((n) => (
              <a
                key={n.id}
                href={`#${n.id}`}
                className="block rounded-md px-2 py-1.5 text-ink-soft transition hover:bg-paper-deep hover:text-ink"
              >
                {n.label}
              </a>
            ))}
            <div className="mt-6 border-t border-rule pt-4 text-xs leading-relaxed text-ink-faint">
              Built on the open-source{" "}
              <a className="underline" href={KIT_REPO} target="_blank" rel="noreferrer">
                Creator System
              </a>{" "}
              by Matty Mo Studio.
            </div>
          </nav>
        </aside>

        {/* Content */}
        <div className="space-y-20">
          {/* ---------- BEFORE ---------- */}
          <Section
            id="before"
            eyebrow="Read first · 3 min"
            title="What you're building, and what you'll need"
            intro={
              <p>
                You&rsquo;re setting up three things that work together. Once they&rsquo;re
                connected, you mostly just talk to Claude.
              </p>
            }
          >
            <div className="grid gap-4 sm:grid-cols-3">
              {[
                {
                  name: "Obsidian",
                  what: "A free app that shows a folder of plain-text files as a beautiful, searchable library. This is where you'll read and search your writing.",
                },
                {
                  name: "Claude (Code)",
                  what: "The AI. It runs on your laptop, reads that same folder, and does the work — converting files, organizing, tagging, answering questions.",
                },
                {
                  name: "The Vault",
                  what: "The folder itself, pre-organized with numbered subfolders and instructions that teach Claude how to file and connect things. It's yours; it lives on your computer.",
                },
              ].map((c) => (
                <div key={c.name} className="rounded-xl border border-rule bg-card p-5">
                  <h3 className="font-serif text-lg font-medium text-ink">{c.name}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-soft">{c.what}</p>
                </div>
              ))}
            </div>

            <div className="rounded-xl border border-rule bg-card p-6">
              <h3 className="font-serif text-lg font-medium text-ink">You&rsquo;ll need</h3>
              <Ul>
                <li>
                  A Mac or Windows laptop. This guide is written for <strong>Mac</strong>; Windows
                  differences are called out where they matter.
                </li>
                <li>
                  About <strong>an hour</strong> for setup, plus time to let Claude work through
                  your files (it can run while you do something else).
                </li>
                <li>
                  A <strong>Claude subscription</strong>. Pro (~$20/mo) is fine to start. If you
                  have hundreds of documents, the people who built this system recommend bumping to
                  Max (~$100/mo) for the first heavy month, then dropping back down.
                </li>
                <li>Your Word documents, and access to the Google account that holds your Google Docs.</li>
              </Ul>
              <Callout tone="why">
                <strong>The one idea to hold onto:</strong> the vault is a plain folder on your
                computer. Obsidian <em>shows</em> it. Claude <em>works in</em> it. Both point at
                the same folder. Nothing lives in a company&rsquo;s cloud — if you stopped using
                either app tomorrow, your files would still be right there.
              </Callout>
            </div>
          </Section>

          {/* ---------- 1 · INSTALL ---------- */}
          <Section
            id="install"
            eyebrow="Phase 1 · about 20 min"
            title="Install the three apps"
            intro={<p>Nothing here needs a terminal. Download, open, sign in.</p>}
          >
            <Step id="s1" number="1" title="Create a Claude account and pick a plan" time="5 min">
              <p>
                Go to claude.ai and sign up with your email. Then choose a plan — Pro is enough to
                get going. You can change plans any time.
              </p>
              <Links>
                <LinkButton href="https://claude.ai" primary>
                  claude.ai — sign up
                </LinkButton>
                <LinkButton href="https://claude.com/pricing">Compare plans</LinkButton>
              </Links>
            </Step>

            <Step id="s2" number="2" title="Download the Claude desktop app" time="5 min">
              <p>
                This is the app you&rsquo;ll talk to. Download it, drag it to Applications, open it,
                and sign in with the account you just made.
              </p>
              <p>
                Once you&rsquo;re in, look at the top of the window: there are tabs like{" "}
                <span className="ui">Chat</span>, <span className="ui">Cowork</span> and{" "}
                <span className="ui">Code</span>. You&rsquo;ll be using <span className="ui">Code</span> —
                that&rsquo;s the version of Claude that can open a folder and work inside it.
              </p>
              <Links>
                <LinkButton href="https://claude.com/download" primary>
                  Download Claude for Mac / Windows
                </LinkButton>
                <LinkButton href="https://support.claude.com/en/articles/10065433-install-claude-desktop">
                  Install help
                </LinkButton>
              </Links>
              <Callout tone="note">
                Don&rsquo;t worry about &ldquo;Claude Code&rdquo; sounding technical. It&rsquo;s the same
                Claude — it just knows how to work with files. You&rsquo;ll never type a command yourself;
                you&rsquo;ll ask Claude to.
              </Callout>
            </Step>

            <Step id="s3" number="3" title="Download Obsidian" time="3 min">
              <p>
                Free, no account needed. Download, drag to Applications, open it once. If it offers
                Obsidian Sync or a paid plan, skip — you don&rsquo;t need them.
              </p>
              <Links>
                <LinkButton href="https://obsidian.md/download" primary>
                  Download Obsidian
                </LinkButton>
                <LinkButton href="https://help.obsidian.md/getting-started">Obsidian basics</LinkButton>
              </Links>
            </Step>

            <Step id="s4" number="4" title="Python and git — nothing to install, but read this" time="1 min">
              <p>
                The vault uses two small helpers that come with your computer: <strong>Python</strong>{" "}
                (for the conversion) and <strong>git</strong> (the undo history). On a Mac you don&rsquo;t
                install anything. But the <em>first</em> time Claude uses one of them, macOS may show
                a pop-up:
              </p>
              <Callout tone="warn" title="If you see “…requires the command line developer tools. Would you like to install the tools now?”">
                Click <span className="ui">Install</span>, agree to the license, and wait — it takes
                5–10 minutes and installs quietly. When it finishes, tell Claude{" "}
                <em>&ldquo;done, try again.&rdquo;</em> This happens once per computer, and only on
                Macs that have never been used for anything technical.
              </Callout>
              <p>
                On Windows, install Python from python.org (tick{" "}
                <span className="ui">Add python.exe to PATH</span> on the first installer screen) and
                Git for Windows — the Claude app&rsquo;s Code tab needs it. If either goes wrong,
                don&rsquo;t fight it: in step 8 you can tell Claude &ldquo;install it for me.&rdquo;
              </p>
              <Links>
                <LinkButton href="https://www.python.org/downloads/">Python for Windows</LinkButton>
                <LinkButton href="https://git-scm.com/downloads/win">Git for Windows</LinkButton>
              </Links>
            </Step>
          </Section>

          {/* ---------- 2 · VAULT ---------- */}
          <Section
            id="vault"
            eyebrow="Phase 2 · about 20 min"
            title="Set up the vault and connect both apps to it"
            intro={
              <p>
                You&rsquo;ll download a ready-made folder, put it in Documents, then open it in
                Obsidian and in Claude. One thing to know up front: the download is a folder{" "}
                <em>with a folder inside it</em>. Obsidian opens the inner one; Claude opens the
                outer one. Both steps below say exactly which.
              </p>
            }
          >
            <Step id="s5" number="5" title="Download the vault kit and put it in Documents" time="5 min">
              <Ol>
                <li>
                  Click the download button below. A file called{" "}
                  <span className="path">creator-system-main.zip</span> lands in your Downloads.
                </li>
                <li>Double-click the zip to unzip it. You get a folder called <span className="path">creator-system-main</span>.</li>
                <li>
                  Drag that folder into your <span className="ui">Documents</span> folder.
                </li>
                <li>
                  Rename it to something that&rsquo;s yours — this guide calls it{" "}
                  <span className="path">Writing Vault</span>. (Click the name once, wait a second,
                  type, press Return.)
                </li>
              </Ol>
              <p>Open it and look inside. You&rsquo;ll see:</p>
              <Ul>
                <li>
                  a folder called <span className="path">vault</span> — <strong>this is your
                  library</strong>: numbered folders 00_HOME, 01_INBOX, 02_SOURCES and so on. Your
                  writing will live in here.
                </li>
                <li>
                  a folder called <span className="path">tools</span>, and a few guide files like{" "}
                  <span className="path">RECIPES.md</span> — helpers and manuals for Claude.
                </li>
              </Ul>
              <p>Leave everything exactly where it is.</p>
              <Links>
                <LinkButton href={KIT_ZIP} primary>
                  Download the vault kit (.zip)
                </LinkButton>
                <LinkButton href={KIT_REPO}>See the kit on GitHub</LinkButton>
              </Links>
              <Callout tone="why">
                The kit is the open-source <em>Creator System</em> — a folder structure plus a set
                of instructions and skills for Claude, released free under an MIT license. It&rsquo;s
                what makes Claude behave like a careful archivist instead of a chatbot.
              </Callout>
            </Step>

            <Step id="s6" number="6" title="Open the inner “vault” folder in Obsidian" time="3 min">
              <Ol>
                <li>Open Obsidian.</li>
                <li>
                  On the welcome screen click <span className="ui">Open folder as vault</span> (or{" "}
                  the <span className="ui">Open</span> button next to it).
                </li>
                <li>
                  Navigate to <span className="path">Documents → Writing Vault → vault</span>{" "}
                  — click <strong>the inner folder called <span className="path">vault</span></strong>{" "}
                  — and click Open.
                </li>
                <li>
                  If Obsidian asks about &ldquo;restricted mode&rdquo; or trusting the author,
                  choose <span className="ui">Trust author and enable plugins</span>. The kit is
                  open source and safe. (It may not ask at all.)
                </li>
              </Ol>
              <p>
                You should now see the numbered folders down the left side. Click{" "}
                <span className="path">00_HOME → Start Here</span> to have a look. Don&rsquo;t worry
                about understanding it all yet.
              </p>
              <Callout tone="why" title="Why the inner folder">
                The kit&rsquo;s Obsidian settings live inside <span className="path">vault</span>, and
                the links Claude writes between pages assume <span className="path">vault</span> is
                the top. Open the outer folder instead and those links won&rsquo;t connect.
              </Callout>
              <Callout tone="tip">
                Two Obsidian shortcuts worth learning now: <kbd>⌘</kbd>+<kbd>O</kbd> opens any
                file by name, and <kbd>⌘</kbd>+<kbd>⇧</kbd>+<kbd>F</kbd> searches the text of
                every file in the vault. (Windows: <kbd>Ctrl</kbd> instead of <kbd>⌘</kbd>.)
              </Callout>
            </Step>

            <Step id="s7" number="7" title="Open the outer “Writing Vault” folder in Claude" time="3 min">
              <Ol>
                <li>Open the Claude desktop app and click the <span className="ui">Code</span> tab at the top.</li>
                <li>
                  In the area where you type, there are a few settings. Make sure Environment is{" "}
                  <span className="ui">Local</span>. Then click the <span className="ui">Project folder</span>{" "}
                  selector and choose <span className="path">Documents → Writing Vault</span> — the{" "}
                  <strong>outer</strong> folder this time, the one that contains{" "}
                  <span className="path">vault</span> and <span className="path">tools</span>.
                </li>
                <li>
                  You&rsquo;ll see &ldquo;Writing Vault&rdquo; shown near the chat box. That means
                  Claude is standing inside your folder.
                </li>
              </Ol>
              <Callout tone="note" title="Two different folders — on purpose">
                Obsidian: the inner <span className="path">vault</span>. Claude: the outer{" "}
                <span className="path">Writing Vault</span>. Claude needs the outer one so it can see
                its own instructions and tools; Obsidian needs the inner one so page links work.
                Every time you come back, check that Claude is on the <span className="ui">Code</span>{" "}
                tab with <em>Writing Vault</em> selected — it only sees the folder it&rsquo;s pointed at.
              </Callout>
            </Step>

            <Step id="s8" number="8" title="Say hello, then type “let’s go”" time="10 min">
              <p>
                First, a quick safety habit that the kit&rsquo;s own author recommends whenever you
                download something onto your computer:
              </p>
              <Prompt>
                {`I'm not technical and this is my first time here. Please read through this whole folder and tell me, in plain English, what it is and what it does. Is there anything in it that could harm my computer or send my files anywhere? Keep it short.`}
              </Prompt>
              <p>
                Read the answer. Then start the built-in setup by typing exactly:
              </p>
              <Prompt>{`let's go`}</Prompt>
              <p>
                Claude now walks you through a short conversation, one question at a time. Here is
                what it will ask and what to say. Use your own words — these are just shapes:
              </p>
              <Ol>
                <li>
                  <strong>&ldquo;What&rsquo;s your name, and what do you do?&rdquo;</strong> — e.g.{" "}
                  <em>&ldquo;My name is ___. I&rsquo;m a writer — essays and personal nonfiction.
                  This vault is going to hold about fifteen years of my writing from Word and Google
                  Docs so I can search it and find the themes.&rdquo;</em>
                </li>
                <li>
                  <strong>&ldquo;What raw material do you have?&rdquo;</strong> — e.g.{" "}
                  <em>&ldquo;Mostly Word documents and Google Docs — hundreds of essays and drafts.
                  Not much else.&rdquo;</em>
                </li>
                <li>
                  <strong>&ldquo;Drop ONE file into the inbox and I&rsquo;ll ingest it.&rdquo;</strong>{" "}
                  — this is the one place to steer it. Don&rsquo;t drop a single file; paste this
                  instead:
                </li>
              </Ol>
              <Prompt>
                {`I'm going to bring my whole archive in as one big batch in a moment, following a guide. Please skip the single-file step, set up git now, and tell me when you're ready for the batch.`}
              </Prompt>
              <p>
                Claude sets up <strong>git</strong> (the invisible undo history for the whole
                folder — it means nothing you do later is unrecoverable) and says it&rsquo;s ready.
                That&rsquo;s the end of setup.
              </p>
              <Callout tone="warn" title="About permission pop-ups">
                Claude asks before it changes anything on your computer — you&rsquo;ll see prompts
                like <em>&ldquo;Allow Claude to edit this file?&rdquo;</em> or <em>&ldquo;Allow
                Claude to run this command?&rdquo;</em>. During setup and ingesting, it&rsquo;s fine
                to allow them; that&rsquo;s the work you asked for. If one ever confuses you, just
                type &ldquo;What is that going to do?&rdquo; before you click.
              </Callout>
              <Callout tone="note" title="If a macOS window pops up about “command line developer tools”">
                That&rsquo;s the one-time install from step 4. Click <span className="ui">Install</span>,
                wait for it to finish, then tell Claude &ldquo;done, try again.&rdquo;
              </Callout>
            </Step>
          </Section>

          {/* ---------- 3 · GATHER ---------- */}
          <Section
            id="gather"
            eyebrow="Phase 3 · 15 min of clicking, then waiting"
            title="Gather your writing into one place"
            intro={
              <p>
                Goal: one folder on your Desktop called <span className="path">My Writing</span>{" "}
                with everything in it. It does <em>not</em> need to be tidy — Claude sorts it.
              </p>
            }
          >
            <Step id="s9" number="9" title="Word documents → one folder on your Desktop" time="10 min">
              <p>
                <strong>You are collecting copies, not moving anything.</strong> Your originals stay
                exactly where they are. It doesn&rsquo;t matter how many there are — 40 or 4,000 —
                and it doesn&rsquo;t matter how messy the names or folders are.
              </p>
              <Ol>
                <li>
                  On your Desktop, right-click an empty spot → <span className="ui">New Folder</span>.
                  Name it <span className="path">My Writing</span>. Open it and make a folder
                  inside called <span className="path">Word</span>.
                </li>
                <li>
                  <strong>Find every Word file on the Mac in one go:</strong> open a new Finder
                  window, press <kbd>⌘</kbd>+<kbd>F</kbd>. In the search bar that appears, make sure{" "}
                  <span className="ui">This Mac</span> is selected (not just the current folder).
                  In the row of filters, change <span className="ui">Kind</span> → <span className="ui">Document</span>,
                  and in the box beside it choose <span className="ui">Word</span>. The list fills
                  with every Word document on the computer.
                </li>
                <li>
                  Click any file in the list, press <kbd>⌘</kbd>+<kbd>A</kbd> (select all), then{" "}
                  <kbd>⌘</kbd>+<kbd>C</kbd> (copy).
                </li>
                <li>
                  Open <span className="path">Desktop → My Writing → Word</span> and press{" "}
                  <kbd>⌘</kbd>+<kbd>V</kbd> (paste). Wait for the copy to finish — a progress bar
                  shows for large batches.
                </li>
                <li>
                  Files on an external drive, in a Dropbox/OneDrive/iCloud folder, or attached to
                  old emails? Repeat: find them, copy, paste into the same{" "}
                  <span className="path">Word</span> folder. Duplicates are fine.
                </li>
                <li>
                  <strong>Note the count.</strong> Click once on the <span className="path">Word</span>{" "}
                  folder and press <kbd>⌘</kbd>+<kbd>I</kbd>. Under &ldquo;General&rdquo; it says
                  how many items are inside (e.g. <em>2,314 items</em>). Write that number down —
                  in step 12 you&rsquo;ll check it against Claude&rsquo;s count. (Finder counts
                  folders and non-Word files too, so expect &ldquo;close&rdquo;, not exact.)
                </li>
              </Ol>
              <Callout tone="note" title="Old .doc files">
                Word files from before ~2007 end in <span className="path">.doc</span> instead of{" "}
                <span className="path">.docx</span>. Include them — Claude handles the conversion
                in step 13. You don&rsquo;t need to do anything different.
              </Callout>
              <Callout tone="warn" title="Files with a little cloud icon">
                If a file shows a cloud symbol next to its name, it lives online (iCloud/OneDrive
                &ldquo;optimize storage&rdquo;) and isn&rsquo;t on the disk yet. Copying it triggers a
                download; give the paste time to finish before moving on. If a batch seems stuck,
                wait a few minutes rather than cancelling.
              </Callout>
              <Callout tone="tip" title="On Windows">
                In File Explorer, click in the search box (top right) and type{" "}
                <span className="path">kind:document ext:docx OR ext:doc</span>. Select all
                (<kbd>Ctrl</kbd>+<kbd>A</kbd>), copy, paste into <span className="path">My Writing → Word</span>.
              </Callout>
            </Step>

            <Step id="s10" number="10" title="Google Docs → download them all with Google Takeout" time="10 min + waiting">
              <p>
                Google Takeout packages up your whole Google Drive as a zip. It&rsquo;s the reliable
                way to get years of Docs out at once.
              </p>
              <Ol>
                <li>
                  Go to Google Takeout. Even if you&rsquo;re already logged in, Google shows a{" "}
                  <span className="ui">Verify it&rsquo;s you</span> screen and asks for your password
                  again — that&rsquo;s normal for Takeout. Sign in to the account that has your Docs.
                </li>
                <li>Click <span className="ui">Deselect all</span> at the top of the list.</li>
                <li>
                  Scroll to <span className="ui">Drive</span> and tick its box.
                </li>
                <li>
                  Click the <span className="ui">Multiple formats</span> button under Drive. Make
                  sure <strong>Documents</strong> is set to <span className="ui">DOCX</span> (the
                  default). Click OK.
                </li>
                <li>
                  Optional: click <span className="ui">All Drive data included</span> (may just say{" "}
                  <span className="ui">All data included</span>) to pick only the folders that hold
                  your writing. If your writing is everywhere, leave it.
                </li>
                <li>Scroll to the bottom, click <span className="ui">Next step</span>.</li>
                <li>
                  Leave &ldquo;Send download link via email&rdquo; and &ldquo;Export once&rdquo; (a
                  one-time archive).
                  Set file size to <span className="ui">4 GB</span> so it comes as fewer zips.
                  Click <span className="ui">Create export</span>.
                </li>
                <li>
                  Wait for the email (minutes to hours depending on how much you have). Download
                  the zip(s), double-click to unzip, and drag the resulting{" "}
                  <span className="path">Takeout</span> folder into{" "}
                  <span className="path">My Writing</span> — rename it <span className="path">Google</span>.
                </li>
              </Ol>
              <Links>
                <LinkButton href="https://takeout.google.com" primary>
                  Open Google Takeout
                </LinkButton>
                <LinkButton href="https://support.google.com/accounts/answer/3024190">
                  Google&rsquo;s Takeout help page
                </LinkButton>
              </Links>
              <Callout tone="note" title="Only a handful of Docs?">
                Skip Takeout. Open each Doc, then <span className="ui">File → Download → Microsoft
                Word (.docx)</span> (or <span className="ui">Markdown (.md)</span>, which is even
                better) and drop the files into <span className="path">My Writing → Google</span>.
              </Callout>
            </Step>

            <Step id="s11" number="11" title="Drop the whole folder into the vault’s inbox" time="2 min">
              <p>
                The vault has an &ldquo;in tray&rdquo; folder called <span className="path">To Process</span>.
                Everything Claude works on starts there. It&rsquo;s buried a few folders deep, so
                let Obsidian open it for you instead of hunting for it:
              </p>
              <Ol>
                <li>
                  In Obsidian&rsquo;s left sidebar, expand <span className="path">01_INBOX</span> and{" "}
                  <strong>right-click</strong> the <span className="path">To Process</span> folder.
                </li>
                <li>
                  Choose <span className="ui">Show in system explorer</span>. A Finder window opens
                  with <span className="path">To Process</span> highlighted. (Don&rsquo;t see that
                  menu item? No problem — in Finder go to{" "}
                  <span className="path">Documents → Writing Vault → vault → 01_INBOX → To Process</span>{" "}
                  by hand.)
                </li>
                <li>
                  Double-click <span className="path">To Process</span> so you&rsquo;re inside it (the
                  window will look empty or nearly empty — that&rsquo;s right).
                </li>
                <li>
                  Drag the <span className="path">My Writing</span> folder from your Desktop into
                  that window. It moves off the Desktop and into the vault. Done.
                </li>
                <li>
                  Look at Obsidian: <span className="path">My Writing</span> now shows under{" "}
                  <span className="path">01_INBOX → To Process</span>. The Word files inside
                  won&rsquo;t open in Obsidian yet — it only reads plain text — which is exactly what
                  the next phase fixes.
                </li>
              </Ol>
              <Callout tone="tip" title="Thousands of files? Do it in rounds">
                Everything works with one giant folder, but if you have more than ~500 documents
                you may find it calmer to drag in one chunk at a time — for example{" "}
                <span className="path">Word</span> first, run the prompts in Phase 4, then come back
                and drag in <span className="path">Google</span>. The conversion prompt in step 13
                is safe to run again and again: it only touches what&rsquo;s still in the inbox.
              </Callout>
            </Step>
          </Section>

          {/* ---------- 4 · INGEST ---------- */}
          <Section
            id="ingest"
            eyebrow="Phase 4 · Claude works, you supervise"
            title="Bring the writing into the vault"
            intro={
              <>
                <p>
                  Four prompts, in order. Copy each one into Claude (Code tab, Writing Vault
                  selected), press Enter, and let it run. Read what it reports back before moving
                  to the next. Every one of these has been run end-to-end on a test archive; they
                  work without installing anything.
                </p>
                <p>
                  <strong>One setting first:</strong> next to the send button there&rsquo;s a mode
                  selector (it probably says <span className="ui">Manual</span>). Switch it to{" "}
                  <span className="ui">Accept edits</span> for this phase. Claude will still ask
                  before running commands, but won&rsquo;t stop for every single file it writes —
                  otherwise you&rsquo;d be clicking Allow hundreds of times.
                </p>
              </>
            }
          >
            <Step id="s12" number="12" title="Prompt 0 — check that everything arrived" time="Claude: 1 min">
              <p>
                Before converting anything, have Claude count what&rsquo;s in the inbox and compare
                it to the number you wrote down in step 9. This catches a half-finished copy or a
                folder dropped in the wrong place <em>before</em> an hour of work is built on it.
              </p>
              <Prompt>
                {`Look inside vault/01_INBOX/To Process/My Writing and tell me what's there. I want:
- for the Word folder and the Google folder separately: how many .docx files, how many .doc files, and how many other files (by type)
- the total number of Word documents overall
- the oldest and newest file dates you can see
Don't change, move, or convert anything yet — just report.`}
              </Prompt>
              <p>
                Does the <strong>Word folder</strong> total roughly match your Finder count from
                step 9? A few off is fine (Finder counted the folder itself and any stray files).
                If it&rsquo;s way off, the copy probably didn&rsquo;t finish or the folder went
                somewhere else — tell Claude: <em>&ldquo;I expected about 2,300 Word files. Help me
                figure out where the rest are.&rdquo;</em> If it matches, carry on.
              </p>
            </Step>

            <Step id="s13" number="13" title="Prompt 1 — convert everything to plain text and file it" time="Claude: 10–90 min">
              <p>
                Word and Google files are locked-up formats. This asks Claude to turn each one into
                a plain-text Markdown file (which Obsidian can search) while keeping every original
                untouched — using only what&rsquo;s already on your Mac. It&rsquo;s the longest-running
                step; the batch reports let you watch it move.
              </p>
              <Prompt>
                {`In vault/01_INBOX/To Process/My Writing there are Word documents (.docx, and possibly older .doc files) and a Google Takeout export of my Google Docs (also .docx). This is years of my writing.

Please:
1. Convert every document to a Markdown (.md) file. Use only tools already on this Mac — textutil (built in) converts .doc and .docx, and you can write a small Python script if you need to. Do NOT install Homebrew or anything that would ask me for a password. If you truly can't proceed without installing something, stop and tell me what and why first.
2. Do a dry run first: show me the plan (how many files, where they'll go) and wait for me to say "go" before moving anything.
3. Keep each file's original filename as the title (just change the ending to .md). Keep headings, paragraphs AND line breaks — some of these are poems, and a line break inside a stanza must stay a line break (in Markdown that means two spaces at the end of the line). Test this on a poem before doing the whole batch.
4. At the top of each .md file add frontmatter with: title, date, date_source, word_count, source (word or google), and original_path. For the date: use a "Written ..." line or a clear date near the top of the text if there is one; otherwise the document's own date. In date_source just say in plain words which you used (e.g. "Written line in the text" or "file date").
5. File the .md files in vault/02_SOURCES/Writing/, in subfolders by year. If the only date you can find is a file date from this year (that's just when I copied it), treat it as undated and put it in vault/02_SOURCES/Writing/undated/. If two files would get the same name in the same year, add (2), (3) — never overwrite.
6. Move the untouched originals into vault/02_SOURCES/Writing/_originals/ (keep their folder structure) so nothing is lost. Never modify or delete an original.
7. Anything that isn't my writing (spreadsheets, PDFs, images, web pages) — move it to vault/01_INBOX/To Process/_skipped/ and list it for me.
8. Work in batches of about 25 files and give me a one-line progress report after each batch, like: "Batch 3 done — 75 of 2,314 converted." (If I only have a few dozen files there'll only be a couple of lines — that's fine.)
9. Save the script you write in tools/ so we can run it again later. If I run it again with new files in the inbox, only process what's still in the inbox — never redo files already in 02_SOURCES/Writing/.

When you're done, tell me: how many files you converted, how many you skipped (and list them), any you couldn't read, and confirm the My Writing folder is now empty. Then save an undo point with git.`}
              </Prompt>
              <Callout tone="tip" title="While it runs">
                Claude shows the plan and waits for you to type <em>go</em>. Then leave the app
                open and go do something else. If it stops to ask a question, answer it and it
                continues. If it stops without finishing, type <em>&ldquo;keep going&rdquo;</em>. If
                it says it hit a usage limit, wait for the reset time it gives you, then{" "}
                <em>&ldquo;keep going&rdquo;</em> — it picks up where it left off, because it only
                processes what&rsquo;s still in the inbox.
              </Callout>
              <Callout tone="tip" title="How you know it worked">
                In Obsidian, expand <span className="path">02_SOURCES → Writing</span>. You should
                see year folders, and inside them your pieces as ordinary readable notes. Click one.
                If it opens and reads like your document, you&rsquo;re done. The Word originals are
                safe in <span className="path">02_SOURCES → Writing → _originals</span> — they didn&rsquo;t
                disappear, they moved.
              </Callout>
              <Callout tone="note" title="Poems: check one now">
                Open a poem in Obsidian. Are the lines still separate lines? If two got squashed into
                one, tell Claude: <em>&ldquo;Some poem lines merged. Fix the converter so soft line
                breaks are kept, and redo just the poems.&rdquo;</em> (This happened once in testing;
                Claude fixed it in one go.)
              </Callout>
              <Callout tone="tip" title="Want folders by kind — Poems, Essays, Journal?">
                Now is the moment, before the index. Jump to{" "}
                <a href="#organize">section 7</a> and run the &ldquo;sort by kind&rdquo; prompt, then
                come back to Prompt 2.
              </Callout>
            </Step>

            <Step id="s14" number="14" title="Prompt 2 — build an index of every piece" time="Claude: 10–30 min">
              <p>
                Now you have hundreds of clean files. This creates one page that lists all of them
                with dates, topics, and a one-line summary — the table of contents for your life&rsquo;s
                writing.
              </p>
              <Prompt>
                {`Read every file in vault/02_SOURCES/Writing/ and build a page at vault/00_HOME/Writing Index.md.

Make it a table with one row per piece: title (linked to the file), date, word count, topic tags, and a one-sentence summary of what it's about. Sort newest first.

Also add a "tags:" list to each source file's frontmatter — that's fine, it's metadata at the top of the file, not my text. Use a small, consistent vocabulary of about 15 tags total: each piece gets its main subject plus whatever else genuinely applies (usually 2–5). Reuse the same tag names rather than inventing new ones. When you're done, show me the full list of tags with how many pieces have each one, and save an undo point with git.`}
              </Prompt>
              <p>
                Open <span className="path">00_HOME → Writing Index</span> in Obsidian. This is
                your library catalogue. It&rsquo;s a normal file — you can edit any line.
              </p>
            </Step>

            <Step id="s15" number="15" title="Prompt 3 — let the vault find your themes" time="Claude: 15–45 min">
              <p>
                This is where it stops being a filing cabinet. The kit ships with skills for
                exactly this: <span className="path">diarize</span> builds a page about one subject
                from every source that mentions it; <span className="path">emerge</span> looks for
                patterns nobody named.
              </p>
              <Prompt>
                {`Using the Writing Index and the tags, tell me the 10 subjects I write about most often across all my writing, with a rough count and date range for each. (Subjects — not recurring phrases or people's names, unless a person really is the subject.)

Then, for the top 5, run the diarize routine (vault/.claude/commands/diarize.md) on each one to build a canon page in vault/04_CANON/Practice/Themes/ — the vault's usual place for themes. Skip the web-search step; these are my private essays. Each page should describe the theme, how my thinking about it changed over time, and quote or link the specific pieces where it shows up. Every claim should link back to a source file.

Finally, run the emerge routine (vault/.claude/commands/emerge.md) once and tell me what patterns you found that I might not have noticed. Then save an undo point with git.`}
              </Prompt>
              <Callout tone="why">
                The vault has a rule: <em>sources are never modified; synthesis lives on separate
                pages and always cites its sources.</em> So the theme pages Claude writes are its
                reading of your work, clearly labeled — your original words stay untouched in
                02_SOURCES.
              </Callout>
            </Step>
          </Section>

          {/* ---------- 5 · USE ---------- */}
          <Section
            id="use"
            eyebrow="Phase 5 · everyday use"
            title="Search, sort, and find topics"
            intro={
              <p>
                From here on there are two ways to look through your writing. Use whichever suits
                the moment.
              </p>
            }
          >
            <Step id="s16" number="16" title="Searching in Obsidian (instant, visual)" time="ongoing">
              <Ul>
                <li>
                  <kbd>⌘</kbd>+<kbd>⇧</kbd>+<kbd>F</kbd> — search the words inside every file.
                  Results show the matching lines; click to jump.
                </li>
                <li>
                  <kbd>⌘</kbd>+<kbd>O</kbd> — jump to any file by typing part of its title.
                </li>
                <li>
                  Click a tag (like <span className="path">#grief</span> or{" "}
                  <span className="path">#travel</span>) anywhere and Obsidian lists every file
                  with that tag.
                </li>
                <li>
                  In the file list, right-click the <span className="path">Writing</span> folder →
                  sort by name or by date.
                </li>
                <li>
                  <kbd>⌘</kbd>+<kbd>G</kbd> — the graph view: every file as a dot, every link as a
                  line. Your themes show up as clusters.
                </li>
              </Ul>
              <Links>
                <LinkButton href="https://help.obsidian.md/plugins/search">Obsidian search guide</LinkButton>
                <LinkButton href="https://help.obsidian.md/tags">How tags work</LinkButton>
              </Links>
            </Step>

            <Step id="s17" number="17" title="Asking Claude (when you want thinking, not just matching)" time="ongoing">
              <p>
                Open Claude (Code tab, Writing Vault) and ask in ordinary language. It reads the
                relevant files before answering, and it can make new pages for you. Some starters:
              </p>
              <Prompt label="Examples — pick one, or write your own">
                {`Find everything I've written about my father. Give me the passages, with a link to each file and its date.

Which pieces from 2018–2021 are about work? Sort them by date and give me one line on each.

Show me my ten longest pieces and my ten shortest.

I think I've written about "leaving" a lot. Am I right? Where, and how did the way I wrote about it change?

Make a page that groups all my writing into 8 themes, with the pieces listed under each.

Pull the best three paragraphs I've ever written about New York into one file so I can reread them.

I want to write a new essay about X. What have I already said about it, and what haven't I said yet?`}
              </Prompt>
              <p>Two habits that keep the vault healthy, straight from the kit&rsquo;s authors:</p>
              <p><strong>At the end of a working session:</strong></p>
              <Prompt>{`Write a recap of this session to the log — the recap routine (vault/.claude/commands/recap.md). Then save an undo point with git.`}</Prompt>
              <p>
                Claude writes a dated note of what changed at the top of{" "}
                <span className="path">00_HOME → Log</span>, so next time you can ask &ldquo;where was
                I?&rdquo;
              </p>
              <p><strong>About once a week:</strong></p>
              <Prompt>{`Run the vault health check — the vault-lint routine (vault/.claude/commands/vault-lint.md). Tell me which findings are real problems versus template noise, and fix the 3 real ones. Then save an undo point with git.`}</Prompt>
              <p>
                It checks for broken links, duplicates and stray files. The first run always finds
                a lot; most of it is scaffolding, which is why the prompt asks Claude to sort real
                from noise.
              </p>
              <Callout tone="tip" title="New writing">
                Whenever you finish a new piece, drop the file into{" "}
                <span className="path">01_INBOX/To Process</span> and tell Claude &ldquo;new
                piece in the inbox — convert it, file it, and update the Writing Index.&rdquo;
                The library keeps growing.
              </Callout>
            </Step>
          </Section>

          {/* ---------- 6 · STUCK ---------- */}
          <Section
            id="stuck"
            eyebrow="Phase 6 · read when needed"
            title="When you get stuck"
          >
            <div className="rounded-2xl border border-rule bg-card p-6 sm:p-8">
              <h3 className="font-serif text-xl font-medium text-ink">Rule zero: ask Claude</h3>
              <p className="prose-guide mt-2 text-[15.5px] leading-relaxed text-ink-soft">
                It can see the whole vault, so it&rsquo;s a better troubleshooter than any help
                page. Say exactly where you are, even if that&rsquo;s &ldquo;I don&rsquo;t know
                what to ask.&rdquo;
              </p>
              <Prompt>
                {`I'm stuck and I'm not technical. Explain to me like I'm brand new: what state is my vault in right now, and what should I do next? Give me 2 or 3 options and tell me which one you'd pick.`}
              </Prompt>
              <Prompt>
                {`Something went wrong and I want to undo what just happened. Use git to show me what changed in the last hour, and put it back the way it was if I say so.`}
              </Prompt>

              <div className="mt-8 grid gap-6 sm:grid-cols-2">
                <div>
                  <h4 className="font-semibold text-ink">Common snags</h4>
                  <Ul>
                    <li>
                      <strong>&ldquo;Command not found&rdquo; / git or pandoc missing</strong> — tell
                      Claude: <em>&ldquo;install it for me.&rdquo;</em>
                    </li>
                    <li>
                      <strong>Claude says it can&rsquo;t see the folder</strong> — you&rsquo;re on the
                      wrong tab or the wrong folder. Code tab, Writing Vault.
                    </li>
                    <li>
                      <strong>Word files won&rsquo;t open in Obsidian</strong> — expected. Obsidian
                      reads the .md copies Claude made in 02_SOURCES/Writing.
                    </li>
                    <li>
                      <strong>Claude hits a usage limit mid-ingest</strong> — wait for the reset, or
                      bump the plan for a month. Ingesting a big archive is the most expensive
                      thing you&rsquo;ll ever ask it to do; everyday use is light.
                    </li>
                    <li>
                      <strong>Too much, too fast</strong> — the kit&rsquo;s advice: five documents is
                      enough to try everything. Do a small batch first if the full run feels
                      overwhelming.
                    </li>
                    <li>
                      <strong>&ldquo;Where did my Word files go?&rdquo;</strong> — they moved, they
                      didn&rsquo;t vanish: <span className="path">02_SOURCES → Writing → _originals</span>.
                      Anything Claude decided wasn&rsquo;t writing is in{" "}
                      <span className="path">01_INBOX → To Process → _skipped</span>.
                    </li>
                    <li>
                      <strong>Claude keeps asking me to drop one file</strong> — that&rsquo;s the
                      built-in onboarding. Paste the &ldquo;skip the single-file step&rdquo; line
                      from step 8.
                    </li>
                    <li>
                      <strong>Page links look broken in Obsidian</strong> — you probably opened the
                      outer folder. Close it and open the inner <span className="path">vault</span>{" "}
                      folder instead (step 6).
                    </li>
                  </Ul>
                </div>
                <div>
                  <h4 className="font-semibold text-ink">Privacy, plainly</h4>
                  <p className="prose-guide mt-2 text-[14.5px] leading-relaxed text-ink-soft">
                    The vault is a folder on your laptop; nothing syncs anywhere unless you set that
                    up. When you ask Claude something, it sends the relevant files to Anthropic&rsquo;s
                    servers to think about them and then they&rsquo;re gone — same as pasting text
                    into any AI chat. The kit&rsquo;s own rule of thumb:
                  </p>
                  <Ul>
                    <li><strong>Fine:</strong> essays, drafts, journals, work writing.</li>
                    <li>
                      <strong>Keep out of the vault:</strong> passwords, bank or card details,
                      medical records, other people&rsquo;s private information.
                    </li>
                  </Ul>
                  <p className="prose-guide mt-2 text-[14.5px] leading-relaxed text-ink-soft">
                    Good first-week prompt: <em>&ldquo;Scan my vault for anything that looks like a
                    password, account number or private ID and tell me where it is.&rdquo;</em>
                  </p>
                </div>
              </div>

              <div className="mt-8 border-t border-rule pt-6">
                <h4 className="font-semibold text-ink">Go deeper</h4>
                <p className="prose-guide mt-2 text-[14.5px] leading-relaxed text-ink-soft">
                  In the outer <span className="path">Writing Vault</span> folder are three guides
                  written by the kit&rsquo;s authors — double-click to read, or ask Claude &ldquo;show
                  me RECIPES.md&rdquo;: <span className="path">RECIPES.md</span> (24 things to try, each
                  with input → prompt → result), <span className="path">Standard Operating Procedure.md</span>{" "}
                  (daily and weekly routines), and <span className="path">Data Sources to Gather.md</span>{" "}
                  (what else you could bring in — photos, email, old chats).
                </p>
                <Links>
                  <LinkButton href={`${KIT_REPO}/blob/main/RECIPES.md`}>RECIPES.md</LinkButton>
                  <LinkButton href={`${KIT_REPO}/blob/main/Standard%20Operating%20Procedure.md`}>
                    Standard Operating Procedure
                  </LinkButton>
                  <LinkButton href="https://www.youtube.com/watch?v=zfjjoCla4F8">
                    Watch the 50-min system tour (video)
                  </LinkButton>
                </Links>
              </div>
            </div>
          </Section>


          {/* ---------- 7 · ORGANIZE & SEARCH ---------- */}
          <Section
            id="organize"
            eyebrow="Phase 7 · what it can and can’t do"
            title="Organizing your writing, and searching the deep past"
            intro={
              <p>
                Once the writing is in, this is what to ask for, what to expect back, and where the
                edges are. Everything here was tried on a test archive of essays and poems.
              </p>
            }
          >
            <div className="rounded-2xl border border-rule bg-card p-6 sm:p-8">
              <h3 className="font-serif text-xl font-medium text-ink">Who does what</h3>
              <p className="prose-guide mt-2 text-[15.5px] leading-relaxed text-ink-soft">
                Obsidian doesn&rsquo;t read or sort anything — it&rsquo;s the window and the search box.{" "}
                <strong>Claude does the reading</strong>: it can open every piece, decide what it is
                and what it&rsquo;s about, make folders, add tags, write pages, and answer questions.
                Anything Claude organizes shows up in Obsidian a second later, and you can drag things
                around yourself if you disagree with a call.
              </p>
              <p className="prose-guide mt-3 text-[15.5px] leading-relaxed text-ink-soft">
                The one design idea to hold onto: <strong>folders for <em>kind</em>, tags for{" "}
                <em>theme</em>.</strong> A piece is one thing (a poem) but about many things (your
                mother, Brooklyn, leaving). Folders can only hold a piece in one place; tags can mark
                it with ten. So kinds become folders, and themes become tags plus theme pages.
              </p>
            </div>

            <div className="rounded-2xl border border-rule bg-card p-6 sm:p-8">
              <h3 className="font-serif text-xl font-medium text-ink">Folders by kind — Poems, Essays, Journal, Drafts</h3>
              <p className="prose-guide mt-2 text-[15.5px] leading-relaxed text-ink-soft">
                Best run right after Prompt 1 (before the index), but it works any time — Claude
                updates the links if pages already point at the files. Change the list of kinds to
                whatever fits your writing.
              </p>
              <Prompt>
                {`Sort my writing by kind. Read every file in vault/02_SOURCES/Writing/ (not _originals) and decide what each one is: Poem, Essay, Journal, Draft, or Other. Rules: judge by the writing itself, not just the filename. If a piece is a poem that's also a draft, it goes in Poems (kind: Poem, plus a "status: draft" line) — kind wins over status. Anything you're not sure about, tell me and take your best guess.

Then move each .md into a subfolder by kind — vault/02_SOURCES/Writing/Poems/, Essays/, Journal/, Drafts/, Other/ — keeping the year folder inside (e.g. Poems/2015/Kettle.md). Add a "kind:" line to each file's frontmatter. Leave _originals exactly where it is. If any page in the vault links to a file you moved, update the link.

Also update the import script in tools/ so that next time I bring in new files it sorts them by kind the same way.

When you're done, show me the counts per kind and the list of anything you weren't sure about, then save an undo point with git.`}
              </Prompt>
              <p className="prose-guide mt-2 text-[15.5px] leading-relaxed text-ink-soft">
                In testing, Claude sorted 44 pieces into Essays 34 / Poems 5 / Drafts 5 in one pass,
                explained its reasoning (poems: short, lineated, stanza breaks; essays: prose
                paragraphs), and listed four borderline calls for the writer to decide. That
                &ldquo;not sure&rdquo; list is the part to read.
              </p>
            </div>

            <div className="rounded-2xl border border-rule bg-card p-6 sm:p-8">
              <h3 className="font-serif text-xl font-medium text-ink">Themes — tags and theme pages</h3>
              <p className="prose-guide mt-2 text-[15.5px] leading-relaxed text-ink-soft">
                Prompt 2 already tags every piece and Prompt 3 builds theme pages for the top five.
                From there:
              </p>
              <Ul>
                <li>
                  <strong>See everything on a theme, instantly:</strong> in Obsidian, click any tag
                  (e.g. <span className="path">#grief</span>) — or open the Tags pane on the right —
                  and every piece with that tag lists, across all kinds and years. That&rsquo;s your
                  &ldquo;folder&rdquo; for a theme, without moving anything.
                </li>
                <li>
                  <strong>More theme pages:</strong> <em>&ldquo;Build a theme page for #brooklyn the
                  same way you did the others.&rdquo;</em>
                </li>
                <li>
                  <strong>A theme you name yourself:</strong> <em>&ldquo;I think there&rsquo;s a thread
                  about silence in my work that no tag captures. Read everything, find it, tag it
                  #silence, and write me the page.&rdquo;</em>
                </li>
                <li>
                  <strong>Re-tag with your own vocabulary:</strong> <em>&ldquo;Rename #new-york to
                  #nyc everywhere and merge #brooklyn into it.&rdquo;</em>
                </li>
              </Ul>
            </div>

            <div className="rounded-2xl border border-rule bg-card p-6 sm:p-8">
              <h3 className="font-serif text-xl font-medium text-ink">What you can ask — real examples</h3>
              <p className="prose-guide mt-2 text-[15.5px] leading-relaxed text-ink-soft">
                All of these work today. Claude searches for likely words, reads the candidates,
                and answers with links you can click straight into the file.
              </p>
              <Prompt label="Finding things">
                {`Find everything I've written about my mother. She's "Mom", "Ma", "my mother", and sometimes just "the kitchen". Give me the passages, each with a link to the file and its date, oldest first.

Which pieces from 2012 to 2016 mention the apartment on Graham Avenue?

I wrote a paragraph once about a letter I never sent. Find it — it might be in an essay or a poem.

Show me every poem that mentions light. Which image comes up most often across the poems?`}
              </Prompt>
              <Prompt label="Sorting and comparing">
                {`List my essays longest to shortest with word counts.

Which years was I most productive? Give me a table: year, number of pieces, total words.

I have three versions of "The Pitch". Show me the differences between them and tell me what changed in how I told it.

Group all my journal entries by season and tell me what I tend to write about in winter versus summer.`}
              </Prompt>
              <Prompt label="Seeing patterns">
                {`How did the way I write about leaving change between my twenties and now? Quote the evidence.

Which people appear across the most pieces? Make a page for each of the top five with every place they show up.

Read all my drafts. Which three are closest to finished, and what would each need?

I want to write a new essay about running. What have I already said, and what haven't I said yet?`}
              </Prompt>
              <Prompt label="Making things from it">
                {`Pull my best three paragraphs about New York into one file so I can reread them together.

Make me a chronological reading list of everything about my father — a page with links, one line on each.

Draft a 300-word bio of me as a writer, using only what's actually in the vault. Cite the pieces you drew from.`}
              </Prompt>
            </div>

            <div className="rounded-2xl border border-amber/40 bg-amber-soft p-6 sm:p-8">
              <h3 className="font-serif text-xl font-medium text-ink">The honest limits</h3>
              <Ul>
                <li>
                  <strong>Claude searches by words first, then reads.</strong> It does not have a
                  magic index of every sentence. If you ask about your mother and a piece only ever
                  says &ldquo;the woman who raised me&rdquo;, a quick search will miss it. Two fixes:
                  give Claude the aliases (as in the example above), or ask for an exhaustive pass —{" "}
                  <em>&ldquo;read every piece from 2010 to 2015 in full and…&rdquo;</em> — which is
                  slower and uses more of your plan, but is thorough. For a few hundred pieces this is
                  fine; for thousands, ask a year-range at a time.
                </li>
                <li>
                  <strong>The better the index and tags, the better the deep search.</strong> Claude
                  uses the Writing Index, tags and theme pages as its map. If searches feel thin, ask:{" "}
                  <em>&ldquo;Add a two-sentence summary to the top of every piece&rdquo;</em> or{" "}
                  <em>&ldquo;tag every piece with the places it mentions.&rdquo;</em> Each pass makes
                  the next question sharper.
                </li>
                <li>
                  <strong>Obsidian&rsquo;s own search is exact.</strong> ⌘⇧F finds the word{" "}
                  <em>father</em>, not <em>dad</em>. It&rsquo;s instant and never wrong about what it
                  finds — use it when you know the word. Use Claude when you know the meaning.
                </li>
                <li>
                  <strong>Claude&rsquo;s memory is the vault.</strong> Each session starts fresh; it
                  remembers only what&rsquo;s written in files. &ldquo;The piece I asked about
                  yesterday&rdquo; works only if yesterday&rsquo;s recap is in the log — hence the
                  recap habit. The upside: nothing is locked inside a chat; it&rsquo;s all in plain
                  files you own.
                </li>
                <li>
                  <strong>Repeated refrains count as many hits.</strong> If you reuse a passage across
                  pieces, a &ldquo;find everything about X&rdquo; will surface it each time. Say{" "}
                  <em>&ldquo;show me one instance per piece&rdquo;</em> if that&rsquo;s what you want.
                </li>
                <li>
                  <strong>Versions aren&rsquo;t merged.</strong> The same essay in Word (2016) and
                  Google Docs (2025) becomes two files. That&rsquo;s correct — but ask{" "}
                  <em>&ldquo;mark older versions of the same piece as superseded&rdquo;</em> if you
                  want the noise reduced.
                </li>
                <li>
                  <strong>Old-file quirks.</strong> A very old Word file can carry odd characters
                  (an em-dash that shows as <span className="path">â€”</span>). Claude will flag
                  these; <em>&ldquo;fix the odd characters in that file&rdquo;</em> handles it.
                </li>
                <li>
                  <strong>Cost.</strong> Filing and indexing hundreds of pieces is cheap. Asking Claude
                  to <em>read everything</em> to answer one question is where usage goes. Fine on the
                  Max plan; occasionally limit-hitting on Pro — it tells you when, and{" "}
                  <em>&ldquo;keep going&rdquo;</em> resumes after the reset.
                </li>
              </Ul>
            </div>
          </Section>

          <footer className="border-t border-rule pt-8 text-sm leading-relaxed text-ink-faint">
            <p>
              Assembled from the Creator System kit, its cohort session materials, and Anthropic&rsquo;s
              and Obsidian&rsquo;s own docs. Product screens change; if a button isn&rsquo;t where this
              page says, look for the nearest thing with the same meaning — or ask Claude.
            </p>
          </footer>
        </div>
      </div>
    </main>
  );
}
