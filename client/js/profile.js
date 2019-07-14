Template.profile.rendered = function() {
    $("#profile-link").addClass('selected');
    $("#jokes-link").removeClass('selected');
    $("#rankings-link").removeClass('selected');
    $("#search-link").removeClass('selected');
    $("#login-link").removeClass('selected');
}

Template.profile.helpers({
	email: function() {
		if(!Meteor.user()) {
			Bert.alert("you are not logged in, permission denied", "danger", "growl-top-right");
			return false;
		} else {
			return Meteor.user().emails[0].address;
		}
	},

	username: function() {
		if(!Meteor.user()) {
			Bert.alert("you are not logged in, permission denied", "danger", "growl-top-right");
			return false;
		} else {
			return Meteor.user().username;
		}
	}
});