This is a React single spa root App

Setup help(youtube link) - https://www.youtube.com/watch?v=MLVv516-QWA
------------------------------

### Pre-Requisites
```js
node v15.3.0
```
```js
npm v7.0.14
```

Clone below repos, build them to get the build file(app.js) and start the dev server
https://github.com/RachinC/microfrontends-react-nav
https://github.com/RachinC/microfrontends-react-app1
https://github.com/RachinC/microfrontends-react-app2
------------------------------

### Step 1
```js
git clone https://github.com/RachinC/microfrontends-react-app2.git
```

### Step 2
```js
npm install
```

### Step 3
Update the index.ejs(Already updated)
```js
<script type="systemjs-importmap">
  {
    "imports": {
      "single-spa": "https://cdn.jsdelivr.net/npm/single-spa@5.9.0/lib/system/single-spa.min.js",
      "react": "https://cdn.jsdelivr.net/npm/react@16.13.1/umd/react.production.min.js",
      "react-dom": "https://cdn.jsdelivr.net/npm/react-dom@16.13.1/umd/react-dom.production.min.js"
    }
  }
</script>
```
  
```js
<% if (isLocal) { %>
<script type="systemjs-importmap">
  {
    "imports": {
      "@test-sinle-spa/root-config": "//localhost:9000/test-sinle-spa-root-config.js",
      "@react-app/react-test-app": "//localhost:8080/react-app-react-test-app.js",
      "@react-nav/nav-bar": "//localhost:9001/react-nav-nav-bar.js",
      "@react-1/react-app1": "//localhost:9002/react-1-react-app1.js",
      "@react-2/react-app2": "//localhost:9003/react-2-react-app2.js"
    }
  }
</script>
<% } %>
```

### Step 4
Update microfrontend-layout.html(Already updated)
```js
<main>
    <nav>
      <application name="@react-nav/nav-bar"></application>
    </nav>
    <route path="/react1">
      <application name="@react-1/react-app1"></application>
    </route>
    <route path="/react2">
      <application name="@react-2/react-app2"></application>
    </route>
  </main>
```

### Step 6
Start the dev server
```js
npm start
```
