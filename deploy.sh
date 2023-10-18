#!/bin/bash
URL="https://mathias-ewald.github.io/cv/"
ng build -c production --base-href $URL
npx angular-cli-ghpages --dir=dist/cv
