import $ from 'jquery';
import waypoints from '../../../../node_modules/waypoints/lib/noframework.waypoints';

class RevealOnScroll {
	constructor(els, offset) {
		this.itemToReveal = els;
		this.offsetPercentage = offset;
		this.hideInitially();
		this.creatWaypoints();
	}
//hidding elements for scroll animation
	hideInitially() {
		this.itemToReveal.addClass("reveal-item");
	}

	creatWaypoints() {
		var that = this;
		this.itemToReveal.each(function(){
			//"currentItem" var pointing toword .feature-item class 
			var currentItem = this;
			new Waypoint({
				element: currentItem,
				handler: function() {
					$(currentItem).addClass("reveal-item--is-visible");
				},
				offset: that.offsetPercentage
			});
		});
	}
}

export default RevealOnScroll;