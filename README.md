# Handbook

Run:

```
npm install
```

to get the modules to build codemirror 6.

Bundle codemirror using rollup:

```
node_modules/.bin/rollup -c
```

which should produce `editor.bundle.js`.

This is a static site, just use a web server to serve:

```
python3 -m http.server
```

Should be loopback on port 8000 by default. `http://[::]:8000`.

This project will eventually be migrated to `bookbag` to serve as a minimal open-source alternative to `glitch.me`. It'll be hosted at `edit.hb.sbs`, and will allow you to build websites to publish at `<name>.hb.sbs` subdomains.
