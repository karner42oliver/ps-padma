// Minimalistisches, natives Modal für Bild- und Inline-Content
// Einbindung: <script src="/library/common/js/modal.js"></script>
(function(){
	function openModal(content) {
		let modal = document.createElement('div');
		modal.className = 'ps-modal-overlay';
		modal.innerHTML = '<div class="ps-modal"><button class="ps-modal-close" aria-label="Schließen">×</button><div class="ps-modal-content"></div></div>';
		modal.querySelector('.ps-modal-content').appendChild(content);
		document.body.appendChild(modal);
		modal.querySelector('.ps-modal-close').onclick = function() {
			closeModal();
		};
		modal.onclick = function(e) {
			if(e.target === modal) closeModal();
		};
	}
	function closeModal() {
		let modal = document.querySelector('.ps-modal-overlay');
		if(modal) modal.remove();
	}
	window.PSModal = { open: openModal, close: closeModal };
})();
