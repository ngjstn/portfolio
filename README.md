# ngjstn.com 

This is just a basic website that I made for future projects down the road. It's very much a work in progress, but you can still check it out at [ngjstn.com](http://ngjstn.com) 

The website is made with React frontend and Node express backend, hosted with Heroku cloud service. The frontend was heavily referenced using Takuya Matsuyama's work, which you can find [here](https://github.com/craftzdog/craftzdog-homepage). 

---

### Setup
> Just a few notes to myself when setting up the development environment 

Make sure to have Node.js installed, which can be installed [here](https://nodejs.org/en/download/). To check if you already have it installed, use the commands: 
``` 
node -v 
npm -v
```

Once that's sorted, navigate to the the repository's root directory and install all of the node dependencies: 
```
npm install
```
This should have created a folder called `node_modules` with the dependencies listed in `package.json` 

To run the application locally, go to the root level and enter the following command: 
```
npm run dev 
```
The website should now be accessible at [http://localhost:3000](http://localhost:3000) 

While the process is running, any changes that are made should be updated in real-time whenever the file is saved. 

--- 

### ~~Deploy on Heroku~~ nvm just use Vercel lol 

> *The reason why I switched to Vercel web host is because they have automatic SSL certificate generation (for free >:)) and provide static IPv4 addresses for DNS A record, so we can establish a root domain instead of having to forward to a subdomain. Since I'm using Google as my DNS provider, Heroku isn't able to setup custom root domains because they only provide DNS targets pointing to their own domains (which I think are dynamically assigned). They also require you to pay a monthly subscription fee to use SSL certificates with custom domains >:(* 

You can just navigate to the project dashboard's `Deploy` tab on Heroku and point it to the Github repository's main branch and press the `Deploy Branch` button. 

If you want to be fancy and use [Heroku CLI](https://devcenter.heroku.com/articles/heroku-cli), you need to add the remote to the local repository: 
```
heroku login
heroku git:remote -a example-app

git remote -v   # to check that the remote was setup 
```

Next, add the repo files, stage the commit, and push: 
```
git add .
git commit -m "heroku deploy message" 
git push heroku main 
```


Once it's finished successfully deploying, it should at least be accessible at [https://ngjstn-website.herokuapp.com/](https://ngjstn-website.herokuapp.com/), and if configured, the custom domain that was defined [ngjstn.com](http://ngjstn.com)


--- 

### Manual SSL Certificate Generation with Cerbot

> *Since Vercel automatically generates SSL certificates for you, this isn't needed. What's funny is that Heroku will tell you that if you don't have the paid subscription, you can only upload manually generated certificates, but what they don't tell you is that you still need to pay to upload them (?!?). Just use Vercel smh*

The following steps are detailed [here](https://www.geeksforgeeks.org/using-certbot-manually-for-ssl-certificates/)

Make sure to have Cerbot installed on your machine 

* Windows download [here](https://dl.eff.org/certbot-beta-installer-win32.exe)
* For Ubuntu/Debian, use `sudo apt-get install certbot` 

Next we need to authenticate that the domain is actually own by us using a DNS challenge. Run the following command and follow the instructions given in terminal: 

```
cerbot certonly --manual -d example.com --agree-tos-manual-public-ip-logging-ok-preferred-challenges dns-01 --server https://acme-v02.api.letsencrypt.org/directory --register-unsafely-without-email --rsa-key-size 4096
```

You essentially need to create a `DNS TXT` record under a name that looks something like `_acme-challenge.exampledomain.com`, with the value of the random string that was generated. 

After validating the DNS record with your provider, certbot should have generated a few files, noteably the certificate and private key, which need to be uploaded to your web host provider.


