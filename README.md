# Kioku 記憶

*Kioku* is Japanese for "memory". A free, single-page spaced-repetition app. It reads the same `.txt` files Anki imports (the deadeye skill's `<code>-anki_<date>.txt`).

## Put it on GitHub Pages

1. Create a new GitHub repository, e.g. `kioku`. It can be private if your plan allows private Pages; otherwise public.
2. Upload everything in this folder: `index.html`, `manifest.webmanifest`, `sw.js`, `.nojekyll`, and the `icons/` and `decks/` folders. (The `.claude/` folder is only for local previews; you can leave it out.)
3. Go to **Settings → Pages → Build and deployment**. Choose **Deploy from a branch**, branch `main`, folder `/ (root)`, then Save.
4. After a minute, open `https://<your-username>.github.io/kioku/`.
5. On iPad or iPhone, open it in Safari, tap Share → **Add to Home Screen**. It opens full-screen with the Kioku icon, and after the first visit it keeps working offline.

> **iPad note:** the Home Screen app keeps its own progress, separate from Safari tabs. Pick one and study there, or move progress with **Copy progress backup** / **Restore**.

## Studying with a clicker or controller

Open **Controls** under the card for the full list. In short:

| | Keyboard / clicker | Game controller |
|---|---|---|
| Show answer | tap the card, `Space`, `Enter`, `→`, `PgDn` | any button |
| Again | `1`, `←`, `PgUp` | B / ○, d-pad left |
| Hard | `2`, `↓` | X / □, d-pad down |
| Good | `3`, `→`, `PgDn`, `Space`, `Enter` | A / ✕, d-pad right |
| Easy | `4`, `↑` | Y / △, d-pad up |

- **Bluetooth presentation clicker or page turner** (they send PgUp/PgDn or arrow keys): *next* reveals the answer, then marks it Good; *back* marks it Again.
- **Bluetooth game controller** (Xbox, PlayStation, Switch Pro): pair it in iPad Settings → Bluetooth, open Kioku, press any button. A message confirms it's connected.
- **Bluetooth mouse or trackpad:** click the card to reveal, then click a grade button.
- Cheap "selfie shutter" remotes send a volume key, which web pages can't detect, so they won't work.

## Appearance

Pick a colour theme and card text size under **Appearance** in the sidebar: Washi (warm paper), Hōjicha (sepia, least glare), Matcha (sage), Yoru (warm dark), Sumi (dim night), or Auto, which follows your device's light/dark setting. **Focus** hides the sidebar so the card has the whole screen.

## Adding or updating decks

- Tap **?** (top of the sidebar) for step-by-step instructions: what course material to download, and a ready-made prompt to paste into Claude, ChatGPT or Gemini that writes the deck file for you.

- The app starts empty. To have a deck load automatically, copy it into `decks/` and list it in `decks/manifest.json`. For example:
  `{"decks":["decks/sc2005-anki.txt"]}` (an empty list, `{"decks":[]}`, loads nothing)
- Commit. The app re-reads the manifest each time it opens (when online; offline it uses the last copy it saw).
- Cards are matched by their ID, so edited cards update in place and your review history is kept.
- You can also drag a deck file onto the sidebar at any time.
- To remove a deck, select it in the sidebar and tap **Remove “…” deck** under the list. **Settings and backup → Remove all cards and progress** clears everything. Both only affect the device you're on.

## Your progress

- Progress is stored in each browser separately. It does not sync between devices on its own.
- To move it to another device, use **Settings and backup → Copy progress backup** on the old device, then paste it into **Restore** on the new one.
- **Cram all** drills every card in the selected deck or tag, in random order, without touching your schedule. Use it the night before an exam.
- **Copy my misses** copies the cards you marked Again as rows for your `mistakes.md` log.
