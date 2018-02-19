public with sharing class BoatReviews {

    @AuraEnabled
    public static List<BoatReview__c> getAll(Id boatId) {
        List<BoatReview__c> allReviews = new List<BoatReview__c>();

        if (!String.isEmpty(boatId)) {
            allReviews = [
                    SELECT Id,
                            Name,
                            Comment__c,
                            Rating__c,
                            LastModifiedDate,
                            CreatedDate,
                            CreatedBy.Name,
                            CreatedBy.SmallPhotoUrl,
                            CreatedBy.CompanyName
                    FROM BoatReview__c
                    WHERE Id = :boatId
            ];
        } else {
            allReviews = new List<BoatReview__c>();
        }

        System.debug('>>> All review ?  ' + allReviews + ' for : ' + boatId);
        return allReviews;
    }
}