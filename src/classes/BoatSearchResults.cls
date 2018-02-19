public with sharing class BoatSearchResults {

    @AuraEnabled
    public static List<Boat__c> getBoats(String boatTypeId) {


        if (!String.isEmpty(boatTypeId)) {
            System.debug('>>> Server > ' + boatTypeId);
            return [
                    SELECT id, BoatType__c, picture__c, name, contact__r.Name
                    FROM Boat__c
                    WHERE BoatType__c = :boatTypeId
            ];
        } else {
            System.debug('>>> Server all > ' + boatTypeId);
            return [
                    SELECT id, BoatType__c, picture__c, name, contact__r.Name
                    FROM Boat__c
            ];
        }
    }
}