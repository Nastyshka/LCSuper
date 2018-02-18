({
    onSearch: function (component) {

        var boatType = component.get('v.boatTypeId');
        var action = component.get("c.getBoats");

        console.log('>>> boatType > ' + boatType);
        // var boatType = component.get("v.boatTypeId");
        if (boatType) {
            action.setParams({"boatTypeId": boatType});
        }
        action.setCallback(this, function (response) {
            var state = response.getState();
            if (state === "SUCCESS") {
                var boats = response.getReturnValue();
                // var boats = response.getReturnValue();

                component.set("v.boats", boats);
            } else if (state === "ERROR") {
                var errors = response.getError();
                if (errors) {
                    if (errors[0] && errors[0].message) {
                        console.log("Error message: " +
                            errors[0].message);
                    }
                } else {
                    console.log("Unknown error");
                }
            }
        });
        $A.enqueueAction(action);
    }
})