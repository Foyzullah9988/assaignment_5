
### 6. Answer the following questions clearly:

1. What is the difference between **getElementById, getElementsByClassName, and querySelector / querySelectorAll**?
2. How do you **create and insert a new element into the DOM**?
3. What is **Event Bubbling** and how does it work?
4. What is **Event Delegation** in JavaScript? Why is it useful?
5. What is the difference between **preventDefault() and stopPropagation()** methods?


**Number - 1**

**getElementById**
getElementById returns only a single element of an id.
**getElementsByClassName**
getElementsByClassName returns multiple elements as an htmlcollection.
**querySelector**
querySelector returns first matching element as an nodelist object of an css selector.
**querySelectorAll**
querySelectorAll returns all matching elements as a nodelist.

**Number - 2**

**create and insert a new element into the DOM**
first i create a element using document.createElement,
then i write a section or whatever i want to append 
and then i insert this new element into DOM with appendChild() / append().

**Number - 3**

**Event Bubbling**
when a event happens with click or something it starts from the target element and bubbles up through their parent elements and ends when it get the document.
**work**
when a event happens by click or something and then it starts bubbling until reach the document
it can be stop by using stopPropagation()/stopImmediatePropagation().

**Number - 4**

**Event Delegation**
Event Delegation uses for event bubbling to handle thier parent element.
**work**
it is useful because it reduce code and mistakes.
we dont't have to write code for a cart or something one by one,
we don't have to start loop which takes time and storage for  lots of cart or somthing.

**Number - 5**

**preventDefault()**
preventDefault() stops the default action of an html tag which tag have an default action.
**stopPropagation()**
stopPropagation() stops the bubbling of an event.
because the bubbling is going through parent elements to the document.
we need them in some range.
so we have to stop with stopPropagation().