# Welcome! 

We're delighted that you're interested in pitching in to help maintain the [Staunton Makerspace](http://www.stauntonmakerspace.com/) website!

This document is a work in progress -- please help us make it better! Eventually this will give detailed instructions with screenshots on how to get set up, and how to maintain the various sections of the website. For now, here are some brief notes.

# Jekyll

Our website is built with [Jekyll](https://jekyllrb.com/) using the Agency theme based on [Agency bootstrap theme ](http://startbootstrap.com/templates/agency/).

### [Jekyll Pre-Requirements](https://jekyllrb.com/docs/installation/#requirements)
### [Jekyll Quick-start guide](https://jekyllrb.com/docs/quickstart/)

# How to Run Locally:

```jekyll serve```

OR if you run into problems (like I did after not running this for eons)

- ```bundle update```
- ```bundle install```
- ```bundle exec jekyll serve```

# Coverting Video:

Given a proper mp4 file from Ashby or others, run 
```
$ ffmpeg -i woodworking_sms.mp4 -acodec libvorbis -vcodec libtheora woodworking_sms.ogv 
```
This gives you an alternate ogg file that can be read by open source browsers / operating systems.

# Editing Event Info:

The website automatically creates event listings from the information found in the ```_data/events.yml``` file. Here is the format for adding information there:

```
  - name: "Write your class title here in quotes!"
    href: "https://www.this-is-the-event-link.com/keep-this-in-quotes-too"
    pic: mypicture 
    date: 2017-11-11 14:00
    classtime: Saturday, November 11th, 10:00AM-2:00PM
    desc: "This is the class description, in quotes!"
    price: $50
```
Pictures for events should be resized at 200x100 pixels and saved as .jpg in the img/events file. When referencing the picture above, use only the name, not name.jpg

The "date" field is what controls which events will be shown; the site will automatically show only the events with dates in the future, and updates this with every new commit. 

The "classtime" field is the attendee-friendly text that will show up on the event listing.
