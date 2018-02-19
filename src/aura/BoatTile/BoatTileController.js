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

    }
})