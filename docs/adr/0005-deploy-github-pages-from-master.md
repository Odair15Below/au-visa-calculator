# Publish GitHub Pages from master only

The app lives on `master`. `main` is a separate, incomplete history and must not publish the site. A push or merge to `master` builds `react-app` and deploys `react-app/build` to the `gh-pages` branch. Pull requests against `master` run the same build and tests but do not deploy.
