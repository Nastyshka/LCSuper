({
    init: function (component, event, helper) {
        component.set("v.enableFullDetails", $A.get("e.force:navigateToSObject"));
    },
    onFullDetails: function (component, event, helper) {
        var navEvt = $A.get("e.force:navigateToSObject");
        navEvt.setParams({
            "recordId": component.get("v.boat.Id")
        });
        navEvt.fire();
    },
    onBoatSelected: function (component, event, helper) {
        var boatSelected = event.getParam("boat");
        component.set("v.id", boatSelected.Id);
        var service = component.find("service");
        service.reloadRecord();
    },
    onRecordUpdated: function (component, event, helper) {
    },

    onBoatReviewAdded: function (component, event, helper) {
        console.log("Event received");
        var tabsCmp = component.find("tabs");
        tabsCmp.set("v.selectedTabId", "boatreviewtab");
        component.set("v.selTabId", "boatreviewtab");

        var reviewsTabCmp = component.find("boatReviews");
        reviewsTabCmp.refresh();
    }
});
// ({
//     onBoatSelected : function(component, event, helper){
//         console.log('>>> onBoatSelected > ' + boat);
//         // var boatId =  event.getParams().id;
//         var boat =  event.getParams().boat;
//         component.set("v.id", boat.Id);
//
//         component.find("service").reloadRecord();
//
//         // component.set("v.boat", boat);
//     },
//
//     shouldRender : function (component, event, helper) {
//         var boat = component.get("v.boat");
//         console.log('>>> shouldRender > ' + boat);
//         return !$A.util.isUndefinedOrNull(boat);
//     },
//
//     onRecordUpdated : function (component, event, helper) {
//         console.log('>>> onRecordUpdated');
//     }
// })