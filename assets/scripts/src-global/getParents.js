/**
 * Get the parents of the specified html element.
 */
; ( function() {

	var getParents = function( elem, selector ) {

		// Set up a parent array
		var parents = [];

		// Push each parent element to the array
		for ( ; elem && elem !== document; elem = elem.parentNode ) {
			if ( selector ) {
				if ( elem.matches( selector ) ) {
					parents.push( elem );
				}
				continue;
			}
			parents.push( elem );
		}

		return parents;

	};

	window.jarvis = window.jarvis || {};

	window.jarvis.getParents = getParents;

} )();
