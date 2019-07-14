Template.sidebar.rendered = function () {

}

Template.sidebar.events ({
    "click .logout": function (event) {
        Meteor.logout(function(err) {
            if (err) {
                Bert.alert (err.reason, "danger", "grow-top-right");
            } else {
                Router.go('/');
                Bert.alert("You are now logged out", "success", "growl-top-right");
            }
        });
    },
});