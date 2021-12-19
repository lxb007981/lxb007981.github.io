module.exports = {
  "title": "LU Xinbo",
  "description": "",
  "head": [
    [
      "link",
      {
        "rel": "icon",
        "href": "/favicon.ico"
      }
    ],
    [
      "meta",
      {
        "name": "viewport",
        "content": "width=device-width,initial-scale=1,user-scalable=no"
      }
    ]
  ],
  "theme": "reco",
  "themeConfig": {
    "nav": [{
      "text": "Home",
      "link": "/",
      "icon": "reco-home"
    },
    {
      "text": "TimeLine",
      "link": "/timeline/",
      "icon": "reco-date"
    },/*
    {
      "text": "Docs",
      "icon": "reco-message",
      "items": [{
        "text": "vuepress-reco",
        "link": "/docs/theme-reco/"
      }]
    },*/
    {
      "text": "Contact",
      "icon": "reco-message",
      "items": [{
        "text": "GitHub",
        "link": "https://github.com/lxb007981",
        "icon": "reco-github"
      },{
        "text":"Email",
        "link":"mailto:lxb007981@hotmail.com",
        "icon": "reco-mail"
      }
    ]
    }
    ],
    "sidebar": {
      "/docs/theme-reco/": [
        "",
        "theme",
        "plugin",
        "api"
      ]
    },
    "type": "blog",
    "blogConfig": {
      "category": {
        "location": 2,
        "text": "Category"
      },
      "tag": {
        "location": 3,
        "text": "Tag"
      }
    },
    "friendLink": [{
      "title": "Weiqi WANG",
      "desc": "Final Year Undergraduate Student in HKUST majoring in Computer Science and Mathematics",
      "email": "1874240442@qq.com",
      "logo": "https://avatars.githubusercontent.com/u/59312702?v=4",
      "link": "https://mighty-weaver.github.io/"
    },{
      "title": "Mingqing CAI",
      "desc": "Final Year Undergraduate Student in HKUST majoring in Mathematics",
      "email": "mcaiab@connect.ust.hk",
      "link": "https://github.com/caimingsunny"
    },
    ],
    "logo": "/logo.png",
    "search": true,
    "searchMaxSuggestions": 10,
    "lastUpdated": "Last Updated",
    "author": "LU Xinbo",
    "authorAvatar": "/avatar.png",
    "startYear": "2021"
  },
  "markdown": {
    "lineNumbers": true
  },
  "noFoundPageByTencent": false
}