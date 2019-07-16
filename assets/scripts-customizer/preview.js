/**
 * Live updates for the background colour.
 *
 * Technically background colour is already updated in real time. This adds a
 * corresponding class to the html element so that we can have readable text.
 */
; ( function( $ ) {

	wp.customize.bind(
		'preview-ready',
		function() {

			wp.customize(
				'background_color',
				function( value ) {
					value.bind(
						function( to ) {

							var newClass = brightness( to ) ? 'light-mode' : 'dark-mode';
							$( 'body' ).removeClass( 'dark-mode light-mode' ).addClass( newClass );

						}
					);
				}
			);

		}
	);

	/**
	 * Calculate the brightness of the colour, and then decide if the
	 * contrasting colour should be light or dark.
	 */
	function brightness( color ) {

		if ( !color ) {
			return 0;
		}

		var lighter_than = 130;

		color = color.replace( '#', '' );

		// Calculate straight from RGB.
		var r = parseInt( '' + color[ 0 ] + color[ 1 ], 16 );
		var g = parseInt( '' + color[ 2 ] + color[ 3 ], 16 );
		var b = parseInt( '' + color[ 4 ] + color[ 5 ], 16 );

		return ( ( r * 299 + g * 587 + b * 114 ) / 1000 > lighter_than );

	}

} )( jQuery );
/**
 * Live updates for the header text colour.
 */
; ( function( $ ) {

	wp.customize.bind(
		'preview-ready',
		function() {

			// Change header text color.
			wp.customize(
				'header_textcolor',
				function( value ) {

					value.bind(
						function( to ) {

							// Hide title and description.
							if ( 'blank' === to ) {

								$( '.masthead .site-title, .masthead .site-description' ).css(
									{
										'clip': 'rect(1px, 1px, 1px, 1px)',
										'position': 'absolute'
									}
								);

							} else {

								$( '.masthead .site-title, .masthead .site-description' ).css(
									{
										'clip': 'auto',
										'position': 'relative'
									}
								);

								$( '.masthead .site-title, .masthead .site-title a, .masthead .site-title a:hover, .masthead p.site-description' ).css(
									{
										'color': to
									}
								);

							}
						}
					);
				}
			);

		}
	);

} )( jQuery );
/**
 * Live updates for the site description.
 */
; ( function( $ ) {

	wp.customize.bind(
		'preview-ready',
		function() {

			// Edit site description.
			wp.customize(
				'blogdescription',
				function( value ) {
					value.bind(
						function( to ) {
							$( '.site-description' ).text( to );
						}
					);
				}
			);

		}
	);

} )( jQuery );
/**
 * Live updates for the site name.
 */
; ( function( $ ) {

	wp.customize.bind(
		'preview-ready',
		function() {

			// Edit site title.
			wp.customize(
				'blogname',
				function( value ) {
					value.bind(
						function( to ) {
							$( '.site-title' ).text( to );
						}
					);
				}
			);

		}
	);

} )( jQuery );
// Keep this for the gulp task!