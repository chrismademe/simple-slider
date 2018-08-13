var Slider;

Slider = function( node ) {
    this.node = node;
    this.firstSlide = this.node.querySelector('.slider__slide');
    this.currentSlide = null;
    this.nextSlide = null;
    this.interval = 5000;

    /**
     * Init
     * 
     * Takes care of setting up the slider
     */
    this.init = function() {

        // Setup the first slide
        this.firstSlide.style.opacity = 1;

        // Register it as the current slide
        this.currentSlide = this.firstSlide;

        // Get the next slide
        this.nextSlide = this.firstSlide.nextElementSibling;

    }

    /**
     * Run
     * 
     * Takes care of rotating the slides
     */
    this.run = function() {
        
        // Check we have a next slide
        if ( this.nextSlide === null ) {
            this.nextSlide = this.firstSlide;
        }

        // Hide the current slide
        this.currentSlide.style.opacity = 0;

        // Show the next slide
        this.nextSlide.style.opacity = 1;

        // Set the current slide
        this.currentSlide = this.nextSlide;

        // Get the next slide
        this.nextSlide = this.nextSlide.nextElementSibling;

    }

    // Run Init
    this.init();

    // Run slider
    setInterval( this.run.bind(this), this.interval );
}
