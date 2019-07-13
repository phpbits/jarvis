/**
 * Focus a html element based upon a link.
 */
var focusElement = function( e ) {

	if ( !e.target.hash ) {
		return;
	}

	var id = e.target.hash;

	var element = document.getElementById( id.replace( '#', '' ) );

	if ( element ) {

		if ( !( /^(?:a|select|input|button|textarea)$/i.test( element.tagName ) ) ) {
			element.tabIndex = -1;
		}

		element.focus();

	}

};