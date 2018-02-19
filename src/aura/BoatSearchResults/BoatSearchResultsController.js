({
    doSearch: function (component, event, helper) {
        var params = component.get('v.boatTypeId');
        console.log('>> boatSearchForm doSearch' + params);

        helper.onSearch(component, params);
    },

    onBoatSelect: function (component, event, helper) {
        console.log('>>> searchresults onBoatSelect');
        var boatId = event.getParams().boatId;
        component.set("v.selectedBoatId", boatId);
    }
});