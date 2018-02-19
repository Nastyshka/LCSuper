@IsTest
public class GenerateDataTests {

    @IsTest
    static void test() {
        GenerateData.initData();
        List<Boat__c> boats = [SELECT id FROM Boat__c];
        System.assert(boats.size() > 0, 'Boats found');
    }
}