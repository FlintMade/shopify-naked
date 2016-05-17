# Shopify Naked for Flint

## Project Setup
### To be performed once by the project maintainer
* Repository setup
  * `git clone https://github.com/FlintMade/Timber.git`
  * `rm -rf .git`
  * `git init`
  * `git remote add origin <repository_url>`
  * `git add .`
  * `git commit -m 'Add Flint Shopify boilerplate'`
  * `git push origin master`
  * `npm install -g grunt-cli`
  * `npm install -g gulp`
  * `npm install`
* Shopify setup
  * (optional) Create a new store on Shopify
  * Add the store URL to `config-sample.yml`
* Theme sync tool setup
  * Navigate to https://store_name.myshopify.com/admin/apps/private and click "Create private app"
  * Enter a title and contact email address (optional)
  * Copy the `API Key` and `Password` into `config-sample.yml`
  * `cp config-sample.yml config.yml`
* Theme setup
  * Navigate to https://store_name.myshopify.com/admin/themes
  * Rename the default theme to "Master"
  * `theme upload`
* Proceed to `Developer Setup / Theme sync tool setup`

## Developer Setup
### To be performed each time a new developer joins the project
* Repository setup
  * `git clone <repository_url>`
  * `npm install -g grunt-cli`
  * `npm install -g gulp`
  * `npm install`
  * `cp config-sample.yml config.yml`
* Theme sync tool setup
  * Navigate to https://store_name.myshopify.com/admin/themes
  * Click the menu (`...`) button next to the "Master" theme and select "Duplicate"
  * Click the menu (`...`) button next to the "Copy Of Master" theme and select "Rename"
  * Enter your name (`Nate` or `Jenna`, for instance)
  * Right click on the eye button next to your new theme and select "Copy Link Address"
  * Extract the `preview_theme_id` value (nine digits) and copy into the `theme_id` field in your `config.yml` file

## Usage

### Workflow
* `grunt`
* `theme open` to open your theme in a browser

### Shopify Workflow
* Each developer has a unique `theme_id` in their `config.yml`
* Each developer's `theme_id` corresponds to a unique theme in the Shopify store
* Each developer will work out of their own branch in the repository
* The `master` branch corresponds to the `master` theme on Shopify (this is our `production` instance)
* Merge changes into `master` by submitting a PR or via manual marge (maintainer)

### GIT Workflow
* Switching between branches locally
  * End `grunt`, if running
  * Switch to destination branch
  * Ensure that the `theme_id` in`config.yml` matches the Shopify theme for the current branch (empty for `master`)
  * `grunt`
  * Pull remote branch into current branch
* Merging from Master
  * Ensure that `grunt` is running
  * `git pull origin master`

### SASS
* Make `@font-face` declarations in the `assets/fonts.scss.liquid` folder

# Reference
* Default theme is [Shopify Naked](https://github.com/thisiscapra/shopify-naked)
* [Shopify Theme Development](https://robots.thoughtbot.com/shopify-theme-development)
* [Liquid cheat sheet](http://cheat.markdunkley.com/)