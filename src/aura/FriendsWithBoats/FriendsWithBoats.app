<aura:application description="FriendsWithBoats" extends="force:slds">
    <html xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" lang="en">
    <h1>APP</h1>
        <lightning:layout horizontalAlign="center" class="slds-m-bottom_xxx-small">
            <lightning:layout verticalAlign="center">
                <lightning:card title="Find a Boat" class="slds-card">
                    <c:BoatSearchForm/>
                </lightning:card>

                <lightning:card title="Matching Boats" class="slds-card">
                    <c:BoatSearchResults/>
                </lightning:card>
            </lightning:layout>
        </lightning:layout>
    </html>
</aura:application>
