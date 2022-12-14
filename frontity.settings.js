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
              "/category/listings/"
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
          "url": "https://financialplanning-loans-and-insurance.co.za/test100/"
        }
      }
    },
    "@frontity/tiny-router",
    "@frontity/html2react"
  ]
};

export default settings;
