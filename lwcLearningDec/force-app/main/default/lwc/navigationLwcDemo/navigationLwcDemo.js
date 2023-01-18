import { LightningElement } from 'lwc';
//Step 1: import NavigationMixin from 'lightning/navigation'
import { NavigationMixin } from 'lightning/navigation';

//import encodeDefaultFielsvalues from 'lightening/pageReferenceUtils'
import { encodeDefaultFieldValues } from "lightning/pageReferenceUtils";

//Step 2: extend the class to NavigationMixin(LightningElement)
export default class NavigationLwcDemo extends NavigationMixin(LightningElement) {


    /* Navigate to Standard page */
    navigateToHome() {
        this[NavigationMixin.Navigate]({
            type: 'standard__namedPage',
            attributes: {
                pageName: 'home'
            }
        });
    }
    /* Navigate to chatter - Standard page */
    navigateToChatterPage() {
        this[NavigationMixin.Navigate]({
            type: 'standard__namedPage',
            attributes: {
                pageName: 'chatter'
            }
        });
    }

    /* Navigate to Standard Object Home Page*/
    navigateToRecordHome() {
        this[NavigationMixin.Navigate]({
            type: 'standard__objectPage',
            attributes: {
                objectApiName: 'Contact',
                actionName: 'home'
            }
        });
    }
    /* Navigate to Standard Object Page*/
    navigateToNewRecord() {
        this[NavigationMixin.Navigate]({
            type: 'standard__objectPage',
            attributes: {
                objectApiName: 'Contact',
                actionName: 'new'
            }
        });
    }

    /* Navigate to Standard Object Page with default values*/
    navigateToNewRecordDefault() {
        /* create default values with encodeDefaultFieldValues */
        const defaultData = encodeDefaultFieldValues({
            FirstName: "Golammber",
            LastName: "Golendra",
            Phone: 9876546728
        });

        this[NavigationMixin.Navigate]({
            type: 'standard__objectPage',
            attributes: {
                objectApiName: 'Contact',
                actionName: 'new'
            },
            state: {
                defaultFieldValues: defaultData
            }
        });

    }

    /* Navigate to list view for Object page */
    navigateToListView() {
        this[NavigationMixin.Navigate]({
            type: 'standard__objectPage',
            attributes: {
                objectApiName: 'Contact',
                actionName: 'list'
            },
            state: {
                filterName: 'Recent'
            }
        })
    }

    /* Navigate to Standard Object Page*/
    navigateToFiles() {
        this[NavigationMixin.Navigate]({
            type: 'standard__objectPage',
            attributes: {
                objectApiName: 'ContentDocument',
                actionName: 'home'
            }
        });
    }

    /* Navigate to Standard Object record in view mode*/
    recordViewMode() {
        this[NavigationMixin.Navigate]({
            type: 'standard__objectPage',
            attributes: {
                recordId: '0030l00000sVmZ0AAK',
                objectApiName: 'ContentDocument',
                actionName: 'home'
            }
        });
    }

    /* Navigate to Standard Object record in edit mode*/
    recordEditMode() {
        this[NavigationMixin.Navigate]({
            type: 'standard__recordPage',
            attributes: {
                recordId: '0030l00000sVmZ0AAK',
                objectApiName: 'Contact',
                actionName: 'edit'
            }
        })
    }

    /* Naviget to tabs */
    navigateToFundamentals() {
        //LWC_Fundamentals
        this[NavigationMixin.Navigate]({
            type: 'standard__navItemPage',
            attributes: {
                apiName: 'LWC_Fundamentals'
            }
        })
    }

    //LWC_Toast_Notifications
    navigateToNotification() {
        this[NavigationMixin.Navigate]({
            type: 'standard__navItemPage',
            attributes: {
                apiName: 'LWC_Toast_Notifications'
            }
        })
    }

    //Lightning_Component_Communication
    navigateToCommunication() {
        this[NavigationMixin.Navigate]({
            type: 'standard__navItemPage',
            attributes: {
                apiName: 'Lightning_Component_Communication'
            }
        })
    }

    //LWC_Resources
    navigateToResurces() {
        this[NavigationMixin.Navigate]({
            type: 'standard__navItemPage',
            attributes: {
                apiName: 'LWC_Resources'
            }
        })
    }

    //Memory_game_in_LWC
    navigateToGame() {
        this[NavigationMixin.Navigate]({
            type: 'standard__navItemPage',
            attributes: {
                apiName: 'Memory_game_in_LWC'
            }
        })
    }

    /**
     * Navigate to Salesforce related records
     * Account is the object record
     * Contacts is the relates record
     */
    navigateToRelatedList() {
        this[NavigationMixin.Navigate]({
            type: 'standard__recordRelationshipPage',
            attributes: {
                recordId: '0010l00001XF2XUAA1',
                objectApiName: 'Account',
                relationshipApiName: 'Contacts',
                actionName: 'view'
            }
        })
    }

    /**
     * Navigate to External Web page
     */
    navigateToWebpage() {
        this[NavigationMixin.Navigate]({
            type: 'standard__webPage',
            attributes: {
                url: 'https://www.salesforcetroop.com/'
            }
        })
    }
}