# Boards10: Free Class 10 PYQ Downloads (CBSE)

**Live site:** https://boards10.github.io

Boards10 is a free, ad-free website where Class 10 students can download previous year question papers (PYQs) in one click. No login, no sign-up, no payment.

## What you get

| Resource | Subjects | Format |
|---|---|---|
| Previous year question papers (PYQ) | Maths, Science, Social Science, English, Hindi | PDF |
| Marking schemes | Same as above | PDF |
| CBSE sample papers 2026-27 | Same as above | PDF |
| Chapter-wise weightage and focus areas | Maths, Science, Social Science | Web page |

## How to download

1. Open https://boards10.github.io
2. Pick your subject and year.
3. Click the download button. The PDF starts downloading straight away.

You can also open the guide page for study tips: [`blog.html`](blog.html).

## Why this site is free

The site runs on [GitHub Pages](https://pages.github.com/), which hosts static sites from a repository at no cost. There is no server, database or tracking.

## Run it on your own GitHub (free)

1. Create a **public** repository named `<your-username>.github.io`.
2. Upload `index.html`, `blog.html` and a `pyq/` folder with your PDFs.
3. In the repository go to **Settings → Pages**, set the source to the `main` branch, root folder, and save.
4. Your site goes live at `https://<your-username>.github.io` within a few minutes.

## Repository structure

```
boards10.github.io/
├── index.html        # home page with download links
├── blog.html         # Class 10 PYQ guide: topics, weightage, focus areas
├── pyq/              # question paper PDFs (e.g. maths-2025.pdf)
├── sitemap.xml       # helps Google find your pages
├── robots.txt
└── README.md
```

## One-click download links

Use plain links to files in the repo. Add the `download` attribute so the browser saves the file instead of opening it:

```html
<a href="pyq/maths-2025.pdf" download>Class 10 Maths PYQ 2025 (PDF)</a>
```

## Contributing

- Found a broken link or a missing paper? Open an [issue](../../issues).
- Want to add papers? Send a pull request that puts the PDF in `pyq/` and adds a link on the page.
- Only add papers you have the right to share, such as ones published by the board.

## Disclaimer

Boards10 is an independent student resource. It is not affiliated with CBSE or NCERT. Always check the official syllabus and datesheet at [cbse.gov.in](https://www.cbse.gov.in/) and [cbseacademic.nic.in](https://cbseacademic.nic.in/).

## SEO checklist (to rank on Google)

- [ ] Add `sitemap.xml` and `robots.txt`.
- [ ] Verify the site in [Google Search Console](https://search.google.com/search-console) and submit the sitemap.
- [ ] Give every PDF link descriptive text, for example "Class 10 Maths PYQ 2025", not "click here".
- [ ] Link `index.html` and `blog.html` to each other.
- [ ] Keep pages fast and mobile friendly.
- [ ] Update the pages every exam season.
