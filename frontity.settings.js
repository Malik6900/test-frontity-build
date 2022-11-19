const settings = {
  "name": "my-first-app",
  "state": {
    "frontity": {
      "url": "https://financialplanning-loans-and-insurance.co.za/test100/",
      "title": "Test Frontity Blog",
      "description": "WordPress installation for Frontity development"
    }
  },
  "packages": [
    {
      "name": "@frontity/mars-theme",
      "state": {
        "theme": {
          "menu": [
            [
              "Home",
              "/"
            ],
            [
              "Listings",
              "/test100/listings/"
            ],
            [
              "Sample",
              "/test100/premium-tv/"
            ],
            [
              "Japan",
              "/tag/japan/"
            ],
            [
              "About Us",
              "/test100/about-us/"
            ]
          ],
          "featured": {
            "showOnList": true,
            "showOnPost": true,
            "showOnPage": true
          }
        }
      }
    },
    {
      "name": "@frontity/wp-source",
      "state": {
        "source": {
          "url": "https://financialplanning-loans-and-insurance.co.za/test100/",
          "postTypes": [
            {
              type: "listings",
              endpoint: "/test100/listings/",
              archive: "/test100/listings/"
            }
          ]
        }
      }
    },
    "@frontity/tiny-router",
    "@frontity/html2react"
  ]
};

export default settings;
