[![Telegram](https://img.shields.io/badge/-telegram-blue)](https://t.me/kemonoparty)

[Kemono](https://kemono.party) is an open-source reimplementation of [yiff.party](https://yiff.party/). It archives and dumps data, images, and files from paysites like Patreon.

Kemono's codebase consists of both importers to handle API data and a frontend to share it. While the status of the project is considered stable, there may be bugs and weird quirks here and there. Beware!

![Screenshot](md/screenshot.jpg)

### Supported Sites
- Patreon
- Pixiv Fanbox
- Gumroad
- Discord
- DLsite
- SubscribeStar

### Prerequisites
- Node v8.x
  - Other versions will cause issues.
- Yarn
- MongoDB

### Running
- `git clone https://github.com/OpenYiff/Kemono`
- Configure `docker-compose.yml`
- `docker-compose build`
- `docker-compose up -d`

Your instance should now be running [here](http://localhost:8000).

### FAQ
#### Where did the test scripts go?
The importer test scripts were removed in [v1.2](https://github.com/OpenYiff/Kemono/releases/tag/v1.2).
#### My instance uses too much memory!/My instance is randomly crashing!
Large instances may see memory issues due to the thumbnail generator. Either [set some swap space](https://www.digitalocean.com/community/tutorials/how-to-add-swap-space-on-ubuntu-16-04) or disable the feature in your `.env` file.

---

[Licensed under BSD 3-Clause.](/LICENSE) [tldr.](https://www.tldrlegal.com/l/bsd3)

Kemono itself does not circumvent any technological copyright measures. Content is retrieved legally.
