<?php
/**
 * Child page grid Template
 *
 * Displays children of the current page as a grid below the page content.
 *
 * Template Name: Child Page Grid
 *
 * @package Jarvis
 * @subpackage PageTemplate
 * @author Ben Gillbanks <ben@prothemedesign.com>
 * @license http://www.gnu.org/licenses/gpl-2.0.html GNU Public License
 */

	get_header();

	get_template_part( 'parts/featured-content' );
?>

	<main id="main" class="content-single">

<?php
	if ( have_posts() ) {

		while ( have_posts() ) {

			the_post();

			get_template_part( 'parts/content-single', get_post_type() );

		}
	}

	// Get a list of the children for the current page.
	$child_pages = jarvis_child_pages();

	// If there are any children then display them below in a grid.
	if ( $child_pages->have_posts() ) {
?>

		<div class="entry-children content-posts">

<?php
		while ( $child_pages->have_posts() ) {

			$child_pages->the_post();

			get_template_part( 'parts/content' );

		}
?>

		</div>

<?php
	}

	wp_reset_postdata();
?>

	</main>

<?php
	get_footer();
