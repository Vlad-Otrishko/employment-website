# employment-website
employment website built according to tutorial figma layout.
the layout can be found through this reference: https://www.figma.com/file/UmoZMwOChpBDsydKFVhUPu/Domeo-Master-(Copy)?node-id=4%3A120

According to the mockup, there are only 2 break-points(320px and 1920px).
So, the markup has been developed with consideration of above, and with 'mobile first' approach. Also, for the resolution below 320px I used responsive design,
which allows to see the same 'mobile devices' design' even on small screens(below 200px).
The layout does not contain much explanations about the desired functionality. The interactive sections generally are:
- forms for collecting and sending user data to some aggregator.
- sallary qwiz which ends up with the similar form. 
I used multy-page structure of the site for simplicity purpose.
It is, during sallary quiz, user will move through separate static html pages. 

Technologies mainly used: HTML, Sass/CSS. JS was used in several scripts -  for buttons' naming, and for navigation throught pages during 'Sallary Qwiz".
Web-site has been built with Parcel-bundler, and deployed to gh-pages.

Remark: IMHO, setting the second breakpoint at 1920px was not very good idea, because many users will see mobile view by default even on desktop PC's screens. 
E.g, my 20" monitor allows maximal resolution only of 1680*1050, that's why 'desktop view' in my case could be only emulated through "developer's tools".

