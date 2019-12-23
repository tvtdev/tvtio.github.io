$('.container').imagesLoaded( function() {
  
	// filter items on button click
	$('.portfolio-btn-group').on( 'click', 'button', function() {
	  var filterValue = $(this).attr('data-filter');
	  $grid.isotope({ filter: filterValue });
	});


	// init Isotope
	var $grid = $('.grid').isotope({
	  layoutMode: 'masonry',
	  itemSelector: '.grid-item',
	  percentPosition: true,
	  masonry: {
	    // use element for option
	    columnWidth: '.grid-item'
	  }
	})
	});
