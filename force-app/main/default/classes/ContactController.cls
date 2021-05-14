public with sharing class ContactController {
    @AuraEnabled(cacheable = true)
    public static List<Contact> getContacts(){
        // throw new AuraHandledException('Forced error');
        List<Contact> contacts = [
            SELECT FirstName, LastName, Email
            FROM Contact
            WITH SECURITY_ENFORCED
            ORDER BY FirstName
        ];
        System.debug(contacts);
        return contacts;
    }

}
