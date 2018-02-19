//push
// git push https://Nastyshka:66236zair@github.com/Nastyshka/LCSuper.git --all
public with sharing class BoatSearchFormController {
    @AuraEnabled
    public static List<BoatType__c> getBoatTypes() {
        return [
                SELECT Id, Name
                FROM BoatType__c
                ORDER BY Name
        ];
    }
}