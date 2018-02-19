({
    handleClick: function (component, event, helper) {
        console.log('click is handled!');
    },

    onBoatClick: function (component, event, helper) {
        console.log('onBoatClick');

        var boat = component.get("v.boat");
        console.log("onBoatClick " + boat.Id);
        var selectBoat = component.getEvent("BoatSelect");
        selectBoat.setParams({"boatId": boat.Id});
        selectBoat.fire();

        var selectedBoat = component.getEvent("BoatSelected");
        selectedBoat.setParams({"id": boat.Id});
        selectedBoat.setParams({"boat": boat});
        selectedBoat.fire();

        var BoatSelectedEvt = $A.get('e.c:BoatSelected');
        BoatSelectedEvt.setParams({
            "boat": boat
        });
        BoatSelectedEvt.fire();

        var mapEvt = $A.get('e.c:PlotMapMarker');
        mapEvt.setParams({
            "long": boat.Geolocation__Longtitude__s,
            "lat": boat.Geolocation__Latitude__s,
            "sObjectOd": boat.Id,
            "label": boat.Name
        });
        mapEvt.fire();
    }
});