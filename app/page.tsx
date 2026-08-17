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
];

const TOTAL_STEPS = 16;

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-6xl px-5 pb-32 pt-10 sm:px-8">
      {/* Hero */}
      <header className="mb-14 max-w-3xl">
        <p className="mb-4 font-mono text-[11px] font-semibold uppercase tracking-[0.2em] text-accent">
          A setup guide · Obsidian + Claude
        </p>
        <h1 className="font-serif text-[2.6rem] font-medium leading-[1.05] text-ink sm:text-[3.4rem]">
          Your writing, <em className="font-light italic">searchable.</em>
        </h1>
        <p className="mt-5 text-lg leading-relaxed text-ink-soft">
          Step by step, from a blank laptop to a private library of every Word and Google Doc
          you&rsquo;ve ever written — one you can search, sort by date or topic, and ask
          questions of in plain English. No coding. About an hour of setup, then Claude does the
          heavy lifting.
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

            <Step id="s4" number="4" title="Python 3 (Mac: already there · Windows: 3 min)" time="0–3 min">
              <p>
                Some of the vault&rsquo;s helper tools are small Python scripts. <strong>On a Mac,
                Python is already installed</strong> — skip this step. On Windows, install it from
                python.org and, on the first screen of the installer, tick{" "}
                <span className="ui">Add python.exe to PATH</span> before clicking Install.
              </p>
              <p>
                If any of that goes wrong, don&rsquo;t fight it. In step 8 you can just tell Claude
                &ldquo;install Python for me&rdquo; and it will.
              </p>
              <Links>
                <LinkButton href="https://www.python.org/downloads/">Python for Windows</LinkButton>
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
                You&rsquo;ll download a ready-made folder, put it somewhere sensible, then open that
                same folder in Obsidian and in Claude.
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
                  Rename it to something that&rsquo;s yours — for example{" "}
                  <span className="path">Writing Vault</span>. (Click the name once, wait, type.)
                </li>
              </Ol>
              <p>
                That folder <em>is</em> your vault. Inside it you&rsquo;ll see a{" "}
                <span className="path">vault</span> subfolder with numbered folders (00_HOME,
                01_INBOX, 02_SOURCES…), a <span className="path">tools</span> folder, and a few
                guide files like <span className="path">RECIPES.md</span>. Leave it all as is.
              </p>
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

            <Step id="s6" number="6" title="Open the folder in Obsidian" time="3 min">
              <Ol>
                <li>Open Obsidian.</li>
                <li>
                  On the welcome screen click <span className="ui">Open folder as vault</span> (or{" "}
                  <span className="ui">Open</span> next to &ldquo;Open folder as vault&rdquo;).
                </li>
                <li>
                  Choose <span className="path">Documents → Writing Vault</span> and click Open.
                </li>
                <li>
                  If Obsidian asks about &ldquo;restricted mode&rdquo; or trusting the author,
                  choose <span className="ui">Trust author and enable plugins</span>. The kit is
                  open source and safe.
                </li>
              </Ol>
              <p>
                You should now see the folder tree down the left side. Click{" "}
                <span className="path">vault → 00_HOME → Start Here</span> to have a look. Don&rsquo;t
                worry about understanding it all yet.
              </p>
              <Callout tone="tip">
                Two Obsidian shortcuts worth learning now: <kbd>⌘</kbd>+<kbd>O</kbd> opens any
                file by name, and <kbd>⌘</kbd>+<kbd>⇧</kbd>+<kbd>F</kbd> searches the text of
                every file in the vault. (Windows: <kbd>Ctrl</kbd> instead of <kbd>⌘</kbd>.)
              </Callout>
            </Step>

            <Step id="s7" number="7" title="Open the same folder in Claude" time="3 min">
              <Ol>
                <li>Open the Claude desktop app and click the <span className="ui">Code</span> tab at the top.</li>
                <li>
                  It will ask which folder to work in (a button like <span className="ui">Open folder</span>{" "}
                  or <span className="ui">Choose project</span>). Pick{" "}
                  <span className="path">Documents → Writing Vault</span> — the very same folder.
                </li>
                <li>
                  You&rsquo;ll see a chat box with your folder name shown somewhere near it. That
                  means Claude is &ldquo;standing inside&rdquo; your vault.
                </li>
              </Ol>
              <Callout tone="note">
                From now on, every time you open Claude to work on your writing, make sure it&rsquo;s
                on the <span className="ui">Code</span> tab with <em>Writing Vault</em> selected.
                Claude only sees the folder it&rsquo;s pointed at.
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
                Claude will walk you through a short conversation: your name, what you do, what
                you want the vault for. Answer in your own words — something like <em>&ldquo;I&rsquo;m a
                writer. This vault is going to hold years of my essays and drafts from Word and
                Google Docs so I can search them and find the themes.&rdquo;</em> It uses this to
                personalize the folder.
              </p>
              <p>
                Along the way Claude will offer to <strong>set up git</strong> — say yes. Git is an
                invisible undo history for the whole folder; it means nothing you do later is
                unrecoverable.
              </p>
              <Callout tone="warn" title="About permission pop-ups">
                Claude asks before it changes anything on your computer — you&rsquo;ll see prompts
                like <em>&ldquo;Allow Claude to create this file?&rdquo;</em> or <em>&ldquo;Allow
                Claude to run this command?&rdquo;</em>. During setup and ingesting, it&rsquo;s fine
                to allow them; that&rsquo;s the work you asked for. If one ever confuses you, just
                type &ldquo;What is that going to do?&rdquo; before you click.
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
            <Step id="s9" number="9" title="Word documents → a folder on your Desktop" time="5 min">
              <Ol>
                <li>On your Desktop, make a new folder called <span className="path">My Writing</span>, and inside it a folder called <span className="path">Word</span>.</li>
                <li>
                  Find your Word files (<span className="path">.docx</span> and older{" "}
                  <span className="path">.doc</span>) — in Documents, on an external drive, in
                  email attachments, in OneDrive or iCloud — and <strong>copy</strong> them into{" "}
                  <span className="path">My Writing → Word</span>. Copy, don&rsquo;t move, so your
                  originals stay where they were.
                </li>
                <li>Subfolders and messy names are fine. Duplicates are fine.</li>
              </Ol>
              <Callout tone="tip">
                Not sure where they all are? On a Mac, open Finder, press <kbd>⌘</kbd>+<kbd>F</kbd>,
                set the search to <em>Kind is Document → Word</em> and it lists every Word file on
                the machine. Select all, copy, paste into the folder.
              </Callout>
            </Step>

            <Step id="s10" number="10" title="Google Docs → download them all with Google Takeout" time="10 min + waiting">
              <p>
                Google Takeout packages up your whole Google Drive as a zip. It&rsquo;s the reliable
                way to get years of Docs out at once.
              </p>
              <Ol>
                <li>Go to Google Takeout and sign in to the Google account that has your Docs.</li>
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
                  Optional: click <span className="ui">All Drive data included</span> to pick only
                  the folders that hold your writing. If your writing is everywhere, leave it.
                </li>
                <li>Scroll to the bottom, click <span className="ui">Next step</span>.</li>
                <li>
                  Leave &ldquo;Send download link via email&rdquo; and &ldquo;Export once&rdquo;.
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

            <Step id="s11" number="11" title="Drop the whole folder into the vault’s inbox" time="1 min">
              <p>
                In Finder, open <span className="path">Documents → Writing Vault → vault → 01_INBOX → To Process</span>.
                Drag your Desktop <span className="path">My Writing</span> folder into it. That&rsquo;s
                the vault&rsquo;s &ldquo;in tray&rdquo; — everything Claude processes starts here.
              </p>
              <p>
                Flip over to Obsidian: you&rsquo;ll see <span className="path">My Writing</span> now
                appears under 01_INBOX. Word files won&rsquo;t open in Obsidian yet (it reads plain
                text). That&rsquo;s the next step.
              </p>
            </Step>
          </Section>

          {/* ---------- 4 · INGEST ---------- */}
          <Section
            id="ingest"
            eyebrow="Phase 4 · Claude works, you supervise"
            title="Bring the writing into the vault"
            intro={
              <p>
                Three prompts. Copy each one into Claude (the Code tab, Writing Vault selected),
                press Enter, and let it run. Read what it reports back before moving to the next.
              </p>
            }
          >
            <Step id="s12" number="12" title="Prompt 1 — convert everything to plain text and file it" time="Claude: 10–60 min">
              <p>
                Word and Google files are locked-up formats. This asks Claude to turn each one into
                a plain-text Markdown file (which Obsidian can search) while keeping every original
                untouched.
              </p>
              <Prompt>
                {`In vault/01_INBOX/To Process/My Writing there are Word documents (.docx and .doc) and a Google Takeout export of my Google Docs (also .docx). This is years of my writing.

Please:
1. Convert every document to a Markdown (.md) file. If you need a tool like pandoc to do that well, tell me what you're installing and why, then install it.
2. Keep each file's original title as its filename.
3. At the top of each .md file add frontmatter with: title, date (best guess from the file's dates or the text itself), word_count, source (word or google), and original_path.
4. File the .md files in vault/02_SOURCES/Writing/, in subfolders by year (put anything undated in vault/02_SOURCES/Writing/undated/).
5. Move the untouched originals into vault/02_SOURCES/Writing/_originals/ so nothing is lost. Do not modify or delete any original.
6. Skip anything that isn't my writing (spreadsheets, PDFs, images) — just list what you skipped.
7. Work in batches of about 25 files and give me a one-line progress report after each batch.

When you're done, tell me: how many files you converted, how many you skipped, and any you couldn't read.`}
              </Prompt>
              <Callout tone="tip">
                This can take a while with hundreds of files. You can leave the app open and go
                do something else. If Claude stops and asks a question, answer it and it continues.
                If it stops without finishing, type <em>&ldquo;keep going&rdquo;</em>.
              </Callout>
            </Step>

            <Step id="s13" number="13" title="Prompt 2 — build an index of every piece" time="Claude: 10–30 min">
              <p>
                Now you have hundreds of clean files. This creates one page that lists all of them
                with dates, topics, and a one-line summary — the table of contents for your life&rsquo;s
                writing.
              </p>
              <Prompt>
                {`Read every file in vault/02_SOURCES/Writing/ and build a page at vault/00_HOME/Writing Index.md.

Make it a table with one row per piece: title (linked to the file), date, word count, 3–5 topic tags, and a one-sentence summary of what it's about. Sort newest first.

Also add tags to each source file's frontmatter (a "tags:" list) using a consistent, short vocabulary — reuse the same tag names across files rather than inventing new ones each time. When you're done, show me the full list of tags you used and how many pieces have each one.`}
              </Prompt>
              <p>
                Open <span className="path">00_HOME → Writing Index</span> in Obsidian. This is
                your library catalogue. It&rsquo;s a normal file — you can edit any line.
              </p>
            </Step>

            <Step id="s14" number="14" title="Prompt 3 — let the vault find your themes" time="Claude: 15–45 min">
              <p>
                This is where it stops being a filing cabinet. The kit ships with skills for
                exactly this: <span className="path">/diarize</span> builds a page about one subject
                from every source that mentions it; <span className="path">/emerge</span> looks for
                patterns nobody named.
              </p>
              <Prompt>
                {`Using the Writing Index and the tags, tell me the 10 subjects or themes I return to most often across all my writing, with a rough count and date range for each.

Then, for the top 5, run /diarize on each one to build a canon page in vault/04_CANON/Themes/. Each page should describe the theme, how my thinking about it changed over time, and quote or link the specific pieces where it shows up. Every claim should link back to a source file.

Finally, run /emerge once and tell me what patterns you found that I might not have noticed.`}
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
            <Step id="s15" number="15" title="Searching in Obsidian (instant, visual)" time="ongoing">
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

            <Step id="s16" number="16" title="Asking Claude (when you want thinking, not just matching)" time="ongoing">
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
              <Ul>
                <li>
                  At the end of a working session, type <span className="path">/recap</span>. Claude
                  writes a dated note of what changed, so next time you can ask &ldquo;where was
                  I?&rdquo;
                </li>
                <li>
                  About once a week, type <span className="path">/vault-lint</span>. It checks for
                  broken links, duplicates and stray files, and offers to fix them.
                </li>
              </Ul>
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
                  Inside your vault folder are three guides written by the kit&rsquo;s authors — open
                  them in Obsidian: <span className="path">RECIPES.md</span> (24 things to try, each
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
