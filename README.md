# Crystal React Bootstrap Dashboard

![Crystal Dashboard](https://raw.githubusercontent.com/JSLancerTeam/JSLancerTeam.Github.io/master/crystal-dashboard/demo.png)


Crystal React Bootstrap Dashboard is a beautiful, multi-purpose admin dashboard which is with React, Redux & Bootstrap. It contains a lot of simple and easy to use React components. You can use this dashboard to build many kind of dashboard include health, employees, company dashboard.

**[Live preview](https://jslancerteam.github.io/crystal-dashboard/#/)**

This project is based on [light-bootstrap-dashboard](https://github.com/creativetimofficial/light-bootstrap-dashboard)

## Get started
*Development*
```
git clone https://github.com/jslancerteam/crystal-dashboard
npm install
npm start
```

*Build*
```
npm run build
```

## File structure
```
.
├── README.md
├── config
├── package.json
├── public
│   ├── favicon.ico
│   ├── index.html
│   └── manifest.json
├── scripts
│   ├── build.js
│   ├── start.js
│   └── test.js
└── src
    ├── assets
    │   ├── images
    │   └── styles
    ├── components
    │   ├── SideBar.js
    │   └── ThemeOptions.js
    ├── config
    │   └── configureStore.js
    ├── index.js
    ├── pages
    │   ├── Dashboard
    │   │   ├── EmailChart.js
    │   │   ├── SalesChart.js
    │   │   ├── Tasks.js
    │   │   ├── UserBehaviorChart.js
    │   │   └── index.js
    │   ├── Icons
    │   │   └── index.js
    │   ├── Main
    │   │   ├── Footer.js
    │   │   ├── Header.js
    │   │   └── index.js
    │   ├── MapsPage
    │   │   ├── Map.js
    │   │   └── index.js
    │   ├── Notifications
    │   │   └── index.js
    │   ├── TableList
    │   │   └── index.js
    │   ├── Typography
    │   │   └── index.js
    │   └── UserProfile
    │       ├── ProfileForm.js
    │       ├── UserInfo.js
    │       └── index.js
    ├── reducers
    │   ├── ThemeOptions.js
    │   └── index.js
    └── registerServiceWorker.js
```
## Author
David Tran [@davidtranwd](https://twitter.com/davidtranwd)

## License

Licensed under MIT (https://github.com/creativetimofficial/light-bootstrap-dashboard/blob/master/LICENSE.md)