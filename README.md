# Weather App
https://dong-yi-xia.github.io/weather-app/

## Resources 
How to get the degree symbol <br>
alt + shift + 8  =  ° <br>

Weather API <br>
https://openweathermap.org/current<br>

Geolocation API<br>
https://developer.mozilla.org/en-US/docs/Web/API/Geolocation_API<br>

Unsplash Images<br>
https://unsplash.com/<br>


### Deploy on GitHub Page with React
npm install gh-pages / npm add gh-pages<br>

In package.json<br>
"homepage": "https://username.github.io/repoName",<br>

Inside the script tag add<br>
"predeploy": "npm run build", or "predeploy": "yarn build",<br>
"deploy": "gh-pages -d build"<br>

In the terminal<br>
npm run deploy / yarn deploy<br>
Git add. Git commit. Git push<br>

In github pages. Select gh-pages branch.<br>