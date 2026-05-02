# 🚀 Rock Perfect Fisheries ZW — Aggressive SEO Launch Checklist

This is the **action checklist** to dominate Zimbabwean search results. The website is now technically optimised. The remaining work is **distribution + listings + content cadence**. Do every step below.

> Do them in order. Most are free. Most take less than 5 minutes each.

---

## ✅ Phase 0 — Already done in code

- [x] Google Search Console verification file (`/googlecb9e0a28b7d8003e.html`)
- [x] `sitemap.xml` and `robots.txt`
- [x] Canonical URLs all point to `https://www.rockperfectfisheries.co.zw/`
- [x] `hreflang="en-zw"` for Zimbabwe geo-targeting
- [x] Geo meta tags (lat/long Harare, ICBM, geo.region `ZW-HA`)
- [x] Rich JSON-LD: Organization + LocalBusiness + WebSite + BreadcrumbList + FAQPage + AggregateRating + GeoCircle for whole country
- [x] FAQ section with FAQ schema → eligible for Google rich snippets
- [x] Locations section listing 22 Zimbabwean cities/towns
- [x] PWA `manifest.webmanifest`
- [x] IndexNow key file (instant Bing/Yandex indexing)
- [x] Image preloads for LCP, DNS prefetch, robots `max-image-preview:large`
- [x] 1 city = 1 long-tail keyword phrase (`Fish Farming · <City>`)

---

## 🔥 Phase 1 — Submit to search engines (do TODAY)

### 1.1 Google Search Console
1. Go to https://search.google.com/search-console
2. Click **Add property** → **URL prefix** → enter `https://www.rockperfectfisheries.co.zw/`
3. Verify (HTML file method — file already deployed)
4. Submit sitemap: **Sitemaps → New sitemap →** `sitemap.xml`
5. Use **URL Inspection** for the homepage → click **Request Indexing**
6. Repeat URL Inspection / Request Indexing for: `/#services`, `/#packages`, `/#faq`, `/#locations` (each one)

### 1.2 Bing Webmaster Tools
1. Go to https://www.bing.com/webmasters
2. **Import from Google Search Console** (one click — pulls everything)
3. Submit `sitemap.xml` again
4. Bing → **Site Explorer → Submit URLs** → submit homepage + key sections

### 1.3 Yandex Webmaster (covers Russia + 90 countries)
1. https://webmaster.yandex.com → add site → submit `sitemap.xml`

### 1.4 IndexNow (instant indexing for Bing/Yandex/Seznam)
1. The key is already deployed at `/rockperfect-indexnow-2c4f8b91d5a6e3f742b0a98c1d6e8f70.txt`
2. Ping (run this in PowerShell whenever you publish new content):
   ```powershell
   Invoke-RestMethod -Method POST -ContentType 'application/json' -Uri 'https://api.indexnow.org/IndexNow' -Body (@{
     host='www.rockperfectfisheries.co.zw'
     key='rockperfect-indexnow-2c4f8b91d5a6e3f742b0a98c1d6e8f70'
     keyLocation='https://www.rockperfectfisheries.co.zw/rockperfect-indexnow-2c4f8b91d5a6e3f742b0a98c1d6e8f70.txt'
     urlList=@('https://www.rockperfectfisheries.co.zw/','https://www.rockperfectfisheries.co.zw/#services','https://www.rockperfectfisheries.co.zw/#packages','https://www.rockperfectfisheries.co.zw/#faq')
   } | ConvertTo-Json)
   ```

---

## 🇿🇼 Phase 2 — Zimbabwean business directories (HUGE for local SEO)

Submit the business with **identical NAP** (Name, Address, Phone) every single time:

```
Name:    Rock Perfect Fisheries ZW
Address: 3A4 Umwinsdale Highland Glen, Harare, Zimbabwe
Phone:   +263 78 957 9859  |  +263 71 874 0284
Email:   info@rockperfectfisheries.co.zw
Web:     https://www.rockperfectfisheries.co.zw/
```

### Must-do free Zimbabwean / regional listings
- [ ] **Google Business Profile** — https://business.google.com (single biggest local SEO move)
- [ ] **Bing Places for Business** — https://www.bingplaces.com
- [ ] **Apple Business Connect** — https://businessconnect.apple.com
- [ ] **Yellow Pages Zimbabwe** — https://www.yellowpages.co.zw
- [ ] **Zimbabwe Business Directory** — https://www.zimbabwebusinessdirectory.com
- [ ] **Brabys Zimbabwe** — https://www.brabys.com
- [ ] **Africa Business Directory** — https://www.africa-business.com
- [ ] **Zimbabwe Yellow Pages (TelOne)** — list a free entry
- [ ] **Zim Trade Directory** (zimtrade.co.zw) — exporter directory
- [ ] **2 Find Local** Zimbabwe section
- [ ] **Cylex Zimbabwe**
- [ ] **Yelu Zimbabwe**

### Agriculture-specific
- [ ] **AgriTrade Zimbabwe**
- [ ] **Zimbabwe Farmers Union (ZFU)** — get a member listing
- [ ] **Commercial Farmers Union of Zimbabwe**
- [ ] **FAO Zimbabwe** aquaculture stakeholder list
- [ ] **AquaculturePages.com** (global aquaculture directory)
- [ ] **TheFishSite.com** suppliers list

---

## 📱 Phase 3 — Social signals (Google trusts these)

Create and verify profiles on each, **link back to the website** in the bio + post content monthly:

- [ ] Facebook Page (set username `RockPerfectFisheriesZW`) — link from website footer
- [ ] Instagram (`@rockperfectfisheries`) — post pond/harvest photos
- [ ] X / Twitter (`@RockPerfectZW`)
- [ ] LinkedIn Company Page
- [ ] YouTube channel — even 5 short videos (pond construction, stocking, harvest, training) will rank in YouTube + Google
- [ ] TikTok — short pond/harvest clips do extremely well in Zimbabwe
- [ ] Pinterest — pin all gallery images with keyword captions

> When live, paste the social URLs into `index.html` → JSON-LD `Organization.sameAs[]` array. That tells Google these accounts represent your business.

---

## ✍️ Phase 4 — Content cadence (the real long-term winner)

Every blog post or article published with target keywords compounds your search visibility. Suggested first 10 articles:

1. *How to Start a Fish Farming Business in Zimbabwe (Complete 2026 Guide)*
2. *The Real Cost of Building a Fish Pond in Zimbabwe — USD Breakdown*
3. *Tilapia vs Catfish in Zimbabwe — Which Is More Profitable?*
4. *Dam Liner Buying Guide: 300, 500, 750 or 1000 Micron?*
5. *5 Mistakes New Fish Farmers in Zimbabwe Make (and How to Avoid Them)*
6. *Best Locations to Start Fish Farming in Harare*
7. *How Many Fingerlings Should You Stock per Pond?*
8. *Free Fish Farming Training in Zimbabwe — What You'll Actually Learn*
9. *Fish Pond Maintenance Calendar (Month by Month)*
10. *From 1 Pond to a Commercial Tilapia Farm — A Zimbabwean Roadmap*

> Every article = new URL = new keyword to rank for. We can add a `/blog` route when ready.

---

## 🔗 Phase 5 — Backlinks (authority)

The fastest legitimate links for a Zimbabwean agribusiness:

- [ ] **NewsDay**, **The Herald**, **Sunday Mail Farming** — pitch a short story about empowering farmers
- [ ] **Manica Post / Chronicle / NewZimbabwe** — local press release
- [ ] **263Chat / Techzim / Pindula** — get a profile / mention
- [ ] **Zimbabwe Agricultural Society** content partnership
- [ ] University of Zimbabwe / CUT / NUST agriculture departments — guest seminar → link from event page
- [ ] Partner with feed/fingerling buyers — exchange links
- [ ] Sponsor a local agricultural show → backlink from event website
- [ ] Answer Zimbabwean questions on Reddit, Quora, Pindula with a website link

---

## ⚡ Phase 6 — Ongoing: every 7 days

- [ ] Post on Facebook + Instagram + TikTok with link to website
- [ ] Add 1 new client testimonial / project photo to the Gallery
- [ ] Run the IndexNow PowerShell ping (above) after any update
- [ ] Check Search Console → Performance → look for queries to optimise for
- [ ] Reply to every Google Business Profile review

---

## 🧪 Verify everything is working

After deploy, paste each into a browser — must all return success:

| URL | Should be |
|---|---|
| `https://www.rockperfectfisheries.co.zw/sitemap.xml` | XML sitemap |
| `https://www.rockperfectfisheries.co.zw/robots.txt` | text |
| `https://www.rockperfectfisheries.co.zw/manifest.webmanifest` | JSON manifest |
| `https://www.rockperfectfisheries.co.zw/googlecb9e0a28b7d8003e.html` | verification line |
| `https://www.rockperfectfisheries.co.zw/rockperfect-indexnow-2c4f8b91d5a6e3f742b0a98c1d6e8f70.txt` | indexnow key |

Then test rich results:
- https://search.google.com/test/rich-results?url=https%3A%2F%2Fwww.rockperfectfisheries.co.zw%2F
- https://www.bing.com/webmasters/seoreports

Should detect: **Organization, LocalBusiness, FAQ, BreadcrumbList, Sitelinks Search Box.**

---

## 📈 Realistic timeline

| Time | Expectation |
|---|---|
| Week 1 | Site indexed by Google + Bing. "Rock Perfect Fisheries" branded query → #1 |
| Week 2–4 | FAQ rich snippets appearing. Long-tail Zimbabwe queries appear in top 30. |
| Month 2–3 | Local pack appearances for "fish farming Harare" / "dam liner Zimbabwe" if Google Business Profile is verified and you have ≥10 reviews. |
| Month 3–6 | Top 10 for primary keywords. Compounding traffic if blog posts are published weekly. |

> SEO is not a switch — it's a flywheel. Every step above adds another tooth. Skip none.

---

**Maintained by:** Rock Perfect Fisheries ZW · Updated: 2026-05-02
