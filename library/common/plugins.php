<?php

class PadmaPlugins{

	public static function init() {

		/**
		 *
		 * If option "Do not recommend plugin installation" is on, Padma will not recommended installation of plugins "Updater" and "Services"
		 *
		 */

		if(PadmaOption::get('do-not-recommend-plugin-installation')){
			return;
		}

		// ...existing code...

	}

	// ...existing code...


}



