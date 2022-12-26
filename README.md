# **_<ins>Salesfoce LWC</ins>_**

---

## **_<ins>DevHub vs Scratch org</ins>_**

### **Dev Hub**

    It is main Salesforce org that you will use to create and manage your scratch orgs.

### **Scratch Org**

    It is a source-driven and disposable deployment of Salesforce code and metadata. Scratch Org are driven by source, Sandboxes are copies of production

- Scratch orgs have a maximum 30 days lifespan.
- You can select a duration from 1 through 30 days at the time of creation, with the default set at 7 days.
- After the scratch org has expired, you can’t restore it.

  > **_NOTE:_** Deleting a scratch org doesn’t terminate your scratch org subscription. If your subscription is still active, you can create a new scratch org. Creating a new scratch org counts against your daily and active scratch org limits.

[reference to check active scratch org in Salesforce](https://help.salesforce.com/s/articleView?id=sf.sfdx_dev_scratch_orgs_view_lex.htm&type=5)

---

## **_<ins>LWC Lifecycle<ins>_**

![this LWC lifecycle diagram](./doc/LWC_Lifecycle.png)
So main three lifecycle methods are

1.  **_<ins>constructor()<ins>_**:

    - This is invoked when a component instance is created.
    - have to call **_super()_** first inside this.
    - this flow from **<ins>parent to child<ins>**,
    - Don't add attributes to the host element in constructor.

2.  **_<ins>connectedCallback()<ins>_**:

    - Called when the element is inserted into a dcument.
    - this flow from **<ins>parent to child<ins>**:
    - you can't access child element in the component body as they don't exist yet.
    - we can access the host elemnt with this.template,
    - use is to : Perform intialization task, such as fetch data, set up caches or listen to events.
    - Do not use to : to change the sate of a component such as loading values or setting properties, Use setter & getter instead.

3.  **_<ins>renderCallback()<ins>_**:
    - Fires when a component rendering is done.
    - It can fire more than once.
    - this hook flows from **<ins>child to parent<ins>**.
    - When a component re-renders, all the expression used in the templete are re-evaluated.

> **_NOTE:_** _To change the state or update property of a component_. Don't upadte a wire adapter configuration object property in renderCallback(), as it can result in an infinite loop.

4. **_<ins>disconnectedCallback()<ins>_**:

   It gets invoked automatically when the corresponding web component gets removed from DOM.
   If we need to perform any logic when the component is removed from DOM, that logic can be added in disconnectedCallback().

   - This hook flows from **<ins>Parent to child<ins>**.
   - We use this lifecyle hook to purge caches or removing event listeners that are created on _connectedCallback()_.
