
Pre-Requirements:
=====================
You will need to have Ruby installed.  Then you should follow these magical steps:

1. gem install jekyll
2. gem install bundler
3.  bundle install --path vendor/bundle

And then deal with all the ensuing hate and anger that comes with 
software systems that promise simplicity, then deliver complex pain and confusion.


How to Run Locally:
======================
```bash
bundle exec jekyll serve
```

OR if you run into problems (like I did after not running this for eons)

bundle update
bundle install
bundle exec jekyll serve


Coverting Video:
======================
Given a proper mp4 file from Ashby or others, run 
```
$ ffmpeg -i woodworking_sms.mp4 -acodec libvorbis -vcodec libtheora woodworking_sms.ogv 
```
This gives you an alternate ogg file that can be read by open source browsers / operating systems.




These are notes from the original theme we repurposed for the Staunton Makerspace Website.

Agency Jekyll theme
====================

Agency theme based on [Agency bootstrap theme ](http://startbootstrap.com/templates/agency/)

# How to use

###Portfolio 

Portfolio projects are in '/_posts'

Images are in '/img/portfolio'

###About

Images are in '/img/about/'

###Team

Team members and info are in '_config.yml'

Images are in '/img/team/'


# Demo

View this jekyll theme in action [here](https://y7kim.github.io/agency-jekyll-theme)

=========
For more details, read [documentation](http://jekyllrb.com/)


