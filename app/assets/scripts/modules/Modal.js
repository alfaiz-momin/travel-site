import $ from 'jquery';

class Modal {

	constructor() {
		//target element for opning the modal div
		this.openModalButton = $(".open-modal");
		this.modal = $(".modal");
		//target element for closing the modal div
		this.closeModalButton = $(".modal__close");
		this.events();
	}

	events() {
		//clicking the open modal button
		this.openModalButton.click(this.openModal.bind(this));
		//clicking the X close modal button
		this.closeModalButton.click(this.closeModal.bind(this));
		//clicking the escape key
		$(document).keyup(this.keyPressHandler.bind(this));
	}

	keyPressHandler(e) {
		if(e.keyCode == 27) {
			this.closeModal();
		}
	}

	openModal() {
		this.modal.addClass("modal--is-visible");
		return false;
	}

	closeModal() {
		this.modal.removeClass("modal--is-visible");
	}
}

export default Modal;