/* jshint esnext: true */
'use strict';

// External dependencies.
import { parallel, watch, series } from 'gulp';

// Internal dependencies.
import styles, { editor_styles, editor_blocks, customizer_styles, minifyStyles } from './gulp/sass';
import scriptsGlobal, { customizerPreview, customizerControls } from './gulp/scripts';
import compress from './gulp/zip';
import rtl from './gulp/rtl';
import toc from './gulp/toc';
import criticalCSS from './gulp/critical';

export const build = series(
	parallel(
		styles,
		editor_styles,
		editor_blocks,
		customizer_styles,
		scriptsGlobal,
		customizerPreview,
		customizerControls
	),
	parallel(
		minifyStyles,
		rtl,
		toc,
		criticalCSS
	),
	compress
);
export const buildScripts = scriptsGlobal;
export const buildCustomizerPreview = customizerPreview;
export const buildCustomizerControls = customizerControls;
export const buildStyles = series( parallel( styles, editor_styles, editor_blocks, customizer_styles ), rtl, toc );
export const buildZip = compress;
export const buildRTL = rtl;
export const buildTOC = toc;
export const buildCritical = criticalCSS;

export const watchFiles = cb => {
	watch( [ '*.scss', './assets/sass/**/*.scss' ], series( parallel( styles, editor_styles, editor_blocks ), rtl, toc ) );
	watch( './assets/sass/customizer/*.scss', customizer_styles );
	watch( './assets/scripts/src-global/*.js', scriptsGlobal );
	watch( './assets/scripts/src-customizer-preview/*.js', customizerPreview );
	watch( './assets/scripts/src-customizer-controls/*.js', customizerControls );
};

export default watchFiles;
