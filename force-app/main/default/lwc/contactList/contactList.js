import { LightningElement, track, wire } from 'lwc';
import { reduceErrors } from 'c/ldsUtils';
import CONTACT_FIRST_NAME from '@salesforce/schema/Contact.FirstName';
import CONTACT_LAST_NAME from '@salesforce/schema/Contact.LastName';
import CONTACT_EMAIL from '@salesforce/schema/Contact.Email';
import getContacts from '@salesforce/apex/ContactController.getContacts';

const COLUMNS = [
    { label: 'First Name', field: 'FirstName', type: 'text' }
    // { label: 'Last Name', field: CONTACT_LAST_NAME.fieldApiName, type: 'text' },
    // { label: 'Email', field: CONTACT_EMAIL.fieldApiName, type: 'text' }
];

export default class ContactList extends LightningElement {
    columns = COLUMNS;
    // @wire(getContacts)
    // contacts
    @track 
    contacts;

    @wire(getContacts)
    assignContacts({
        data, error
    }) {
        console.log(data);
        console.log(error);
        this.contacts = data;
    }

    // get errors() {
    //     return (this.contacts.error) ?
    //         reduceErrors(this.contacts.error) : [];
    // }
}