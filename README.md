## About Me:
Hi this is just a random blog I'm putting up so I can share some thoughts and just mess around with stuff.

## Well now...about this project:
At first I just wanted to get a blog going, github pages to the rescue! Fast and easy setup.
Now how will I maintain this simple `index.html` as my blog may grow. No problem I'm not going to write a lot. Oh man...I'm writing a lot...ok ok no problem we’ll just add sections and text manually...


![](https://media.giphy.com/media/VMtTNzgBjvlHG/giphy.gif)

Ugghhh I'm so laaazzzyyy.

So I tried a couple of things.
1. Added `parcel` to get a dev environment going (btw first time using `parcel`).
2. Wait...can I do this in `React`?

Now...where here.

![](https://media.giphy.com/media/NGlCb2KWvKe4g/giphy.gif)

## How this project works

1. `parcel` builds the project for `dev` and `"production"` with the entry filed being `src/index.html`
    1. `yarn dev` will build and watch for changes, open [localhost:1234](http://localhost:1234)
2. For `yarn production` I wrote scripts in the `package.json`
    1. first it will clean up `dist/` with `yarn clean_dist`
    2. by default `parcel build src/index.html` will create a `dist` folder and place everything there
        1. I needed to build into root directory, `parcel build --public-url . src/index.html`
        2. The `--public-url` means our `<link href= && <script src=` build to whatever destination you want.
        3. `--public-url .` means current working directory for me it's the `root` where all my files will be
    3. third it will clean up our `root` direction and remove all previously build files
    4. finally it will copy the content of `dist` into the root folder
3. Now all you have to do is push up the changes and github pages will pick up the new index.html
    
That's it. You can develop however you want in the `src/` folder add/remove directories etc

