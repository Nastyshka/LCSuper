({
    jsLoaded: function (component) {
        component.set("v.jsLoaded", true);
    },
    onPlotMapMarker: function (component, event, helper) {
        var lat = event.getParams().lat;
        var long = event.getParams().long;
        var sobjId = event.getParams().sObjectId;

        component.set("v.jsLoaded", true);
    }
});