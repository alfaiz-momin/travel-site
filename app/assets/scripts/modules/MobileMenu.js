import $ from 'jquery';

class MobileMenu {

	constructor() {
		this.siteHeader = $(".site-header");
		this.menuIcon = $(".site-header__menu-icon");
		this.menuContet = $(".site-header__menu-content");
		this.events();
	}

	events() {
		this.menuIcon.click(this.toggleTheMenu.bind(this));
	}

	toggleTheMenu() {
		this.menuContet.toggleClass("site-header__menu-content--is-visible");
		this.siteHeader.toggleClass("site-header__is-expanded");
		this.menuIcon.toggleClass("site-header__menu-icon--close-x");
	}
}

export default MobileMenu;