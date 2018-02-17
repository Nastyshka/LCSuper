({
    onFormSubmit: function (component, event, helper) {
        var childCmp = component.find("boatSearchResult");
        var boatTypeId = event.getParams().formData;
        // call the aura:method in the child component
        childCmp.set('v.boatTypeId', boatTypeId);
        var auraMethodResult = childCmp.search();
        console.log("auraMethodResult: " + auraMethodResult);
    }
})