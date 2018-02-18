({
    onFormSubmit: function (component, event, helper) {
        var childCmp = component.find("boatSearchResult");
        var boatTypeId = event.getParams().formData;

        console.log('>>> formDAta > ' + boatTypeId);
        // call the aura:method in the child component
        childCmp.set('v.boatTypeId', boatTypeId);
        console.log('>>> childCmp > ' + childCmp.get('v.boatTypeId'));

        childCmp.doSearch();
    }
})