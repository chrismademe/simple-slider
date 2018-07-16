# Simple Javascript Slider

It just rotates through some elements in an endless loop. :)

### Usage

Include `slider.js` and `slider.css` on your page, then write the HTML:

```html
<div class="slider">
    <div class="slider__slide"><!-- Your content here --></div>
    <div class="slider__slide"><!-- Your content here --></div>
    <div class="slider__slide"><!-- Your content here --></div>
    <div class="slider__slide"><!-- Your content here --></div>
</div>
```

And finally, initialise a slider:

```javascript
document.addEventListener('DOMContentLoaded', function() {
    new Slider(document.querySelector('.slider'));
});
```