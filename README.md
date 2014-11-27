## fonts-helveticas  

Meteorite package for adding fonts in the Helvetica family to Meteor apps.   There are licensing restrictions around Helvetica, so this package relies on many pseudo-helvetica and helvetica-like fonts.  

==================================
#### Installation

First, install the fonts-helveticas package from the command line, like so:

````
meteor add fonts-helveticas
````

==================================
#### Data/Document Model

Then, add the 'helveticas' class to the appropriate HTML tags, like so. 

````html
<div>This is a barcode: <span class="helveticas">*123-45-6789*</span></div>
````


==================================
#### Syntax

fonts-helveticas provides the following CSS classes.  They're also available in camelCase, so feel free to use whichever casing works best in your syntax.

````
helveticas

colaborate-light
colaborate-bold
colaborate-medium
colaborate-regular
colaborate-thin

existence-light
existence-stencil-light
existence-unicase-light

print-clearly
print-clearly-bold
print-clearly-dashed

quicksand-bold
quicksand-bold-oblique
quicksand-book
quicksand-book-oblique
quicksand-dash
quicksand-light
quicksand-light-oblique

````


==================================
#### Note

To be perfectly honest, the pseudo-helvetica fonts in this package are good, but not great.  They're workable substitutes for devices lacking a proper Helvetica Light font, but if anybody wants to swap them out for better selections, I'd be more than happy to accept pull requests.

------------------------
### Licensing

These fonts were downloaded from:  
http://www.fontsquirrel.com/fonts/list/style/Sans%20Serif/50/

They should all be 100% free for commercial use.
