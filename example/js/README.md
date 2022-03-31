# Usage example

1. Install browserify
```bash
npm install -g browserify
```

2. Install deps
```bash
npm install
```

3. generate `bundle.js`:
```bash
browserify app.ts -p tsify -o bundle.js
```

4. plugins doesn't work with `file://`, so it's accessed like this for now:
```bash
python3 -m http.server
# Access http://localhost:8000 from the browser
```