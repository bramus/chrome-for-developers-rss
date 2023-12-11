# RSS Feeds for developer.chrome.com (Cloudflare Worker)

This repo contains a Cloudflare Worker that generates RSS Feeds for the various types of Dynamic Content that [https://developer.chrome.com/](https://developer.chrome.com/) has. The worker parses the [raw data](#raw-data-feeds) and transforms them to [RSS 2.0](https://www.rssboard.org/rss-specification).

## Live Endpoints

- Blog: https://chrome-for-developers-rss.bramus.workers.dev/blog
- Case Studies: https://chrome-for-developers-rss.bramus.workers.dev/case-studies
- All: https://chrome-for-developers-rss.bramus.workers.dev/all

Warning: the “all” feed is a very noisy one as it contains all changes to all pages – you’ll get an RSS entry for each and every change, no matter how big or small it was.

## Dev

- `npm i`
- `npm run dev`
- Now go visit http://localhost:8787/

## Deploy

- `npm run deploy`
- Now go visit https://chrome-for-developers-rss.bramus.workers.dev/

## Raw Data Feeds

### Blog

```bash
curl 'https://developer.chrome.com/_d/dynamic_content' \
  -H 'accept: */*' \
  -H 'accept-language: en-US,en;q=0.9,nl;q=0.8,fr;q=0.7' \
  -H 'content-type: text/plain;charset=UTF-8' \
  --data-raw '[null,null,null,"type:blog",null,null,null,null,10,null,null,null,2]' \
  --compressed
```

### Case Studies

```bash
curl 'https://developer.chrome.com/_d/dynamic_content' \
  -H 'accept: */*' \
  -H 'accept-language: en-US,en;q=0.9,nl;q=0.8,fr;q=0.7' \
  -H 'content-type: text/plain;charset=UTF-8' \
  --data-raw '[null,null,null,"type:case_study",null,null,null,null,10,null,null,null,1]' \
  --compressed
```

### All

```bash
curl 'https://developer.chrome.com/_d/dynamic_content' \
  -H 'accept: */*' \
  -H 'accept-language: en-US,en;q=0.9,nl;q=0.8,fr;q=0.7' \
  -H 'content-type: text/plain;charset=UTF-8' \
  --data-raw '[null, null, null, "tenant:chrome", null, null, null, null, 100, null, null, null, 2, 1]' \
  --compressed
```

## License

This project is released under the MIT public license. See the enclosed `LICENSE` for details.
