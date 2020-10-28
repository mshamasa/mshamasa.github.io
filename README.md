## About Me:
Hi this is just a random blog I'm putting up so I can share some thoughts and just mess around with stuff.

## Well now...about this project:
At first I just wanted to get a blog going,github pages to the rescue! Fast and easy setup.
Now how will I maintain this simple `index.html` as my blog may grow. No problem I'm not going to write a lot. Oh man...I'm writing a lot...ok ok no problem we’ll just add sections and text manually...


![](https://media.giphy.com/media/VMtTNzgBjvlHG/giphy.gif)

Ugghhh I'm so laaazzzyyy.

So I tried a couple of things.
1. Added `parcel` to get a dev enviornment going (btw first time using `parcel`).
2. Wait...can I do this in `React`?

Now...where here.

![](https://media.giphy.com/media/NGlCb2KWvKe4g/giphy.gif)

## How this project works

1. `parcel` builds the project for `dev` and `"production"`
    1. `yarn dev` will do the normal and you can open localhost:1234
2. For `yarn production` I wrote scripts in the `package.json`
    1. first it will clean up `dist/` with `yarn clean_dist`
    2. second it will build with `--public-url .` to make sure the src and links for files is set correctly in `index.html`
    3. third it will clean up our `root` direction and remove all previously build files
    4. finally it will copy the content of `dist` into the root folder
    
That's it. You can develop however you want in the `src/` folder add/remove directories etc

## TODO:
 - [ ] write a blog post about this.
