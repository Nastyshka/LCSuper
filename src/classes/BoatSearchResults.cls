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

//    @AuraEnabled
//    public static String getBoats() {
//        System.debug('>>> Server No params>');
//        Boat__c[] result;
//
//        String soqlCommand =
//                'SELECT Id, Name, BoatType__c, Price__c, Picture__c, Contact__r.Name, Year_Built__c, Geolocation__c FROM Boat__c ';
//
//        System.debug('>>> soqlCommand > ' + soqlCommand);
//        result = (Boat__c[])Database.query(soqlCommand);
//        System.debug('>>> result > ' + result);
//        return JSON.serialize(result);
//    }
//
//    @AuraEnabled
//    public static String getBoats(String boatTypeId) {
//        System.debug('>>> Server >' +  boatTypeId);
//        Boat__c[] result;
//        if (boatTypeId == null){
//            return getBoats();
//        } else {
//            String soqlCommand =
//                    'SELECT Id, Name, BoatType__c, Price__c, Picture__c, Contact__r.Name, Year_Built__c, Geolocation__c FROM Boat__c ';
//            soqlCommand += String.isEmpty(boatTypeId) || boatTypeId.equals('All Types') ? '' :
//                    'WHERE BoatType__c =: boatTypeId';
//            System.debug('>>> soqlCommand > ' + soqlCommand);
//            result = (Boat__c[]) Database.query(soqlCommand);
//            System.debug('>>> result > ' + result);
//            return JSON.serialize(result);
//        }
//    }

}