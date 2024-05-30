# To-Do-List-Component

##Overview
The To Do List web component provides a simple and intuitive interface for users to manage their tasks efficiently.
This guide offers a look at how to implement
a To-Do-List component using HTML, CSS and JavaScript.

##Key Features
- **Add Tasks:** Users can add new tasks by typing them into the input field and hitting the enter key or clicking the "+" button.
- **Task List:** All tasks are displayed in a list format, with options to mark them as completed or delete them.
- **Task Modification:** Users can modify task names by clicking on them. This action transforms the task name into an editable input field. 
Upon editing, users can press enter or click outside the input field to save changes.
- **Task Deletion**: Task is removed from the list.
- **Checkbox:** Tasks can be marked as completed by clicking the checkbox associated
with each task. Completed tasks are visually distinguished by a greyed-out appearance.


##Component Structure
The To Do List component is structured as follows:
- **HTML Template**: Defines the layout, including input fields and the task list.
- **CSS Styling**: Enhances the visual presentation.
- **JavaScript Logic**: Manages functionality like task addition, deletion, and editing.

##Implementation Details
**HTML Layout**:
The To Do List component employs HTML to construct its structure, incorporating elements like input 
fields, task items, and action buttons.

**Styling with CSS**:
Custom CSS styling enriches the visual appeal of the To Do List, creating a visually pleasing user
interface.

**JavaScript Operations**:
JavaScript manages the interactive functionalities of the To Do List, including adding, deleting,
and editing tasks, as well as updating the display dynamically in response to user actions.

##Installation
Ensure your internet connection is active to load the `font-awesome` library from CDN.


##Usage
To utilize the To Do List component:

1. Incorporate the provided JavaScript file into your project by adding the following line to your main HTML page:

      `<script src="./to-do-list.js"></script>`

2. Insert the To Do List component into your HTML code:

    `<my-to-do-list></my-to-do-list>`

4. Users can interact with the component by adding, editing, and deleting tasks. Tasks can 
be marked as completed using checkboxes. The component automatically updates the task list as actions are performed.

##Example

```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8" />
    <title>To Do List</title>
    <meta name="Description" content="Native Web Component To Do List" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css" />

    <script src="./toDoList.js"></script>
</head>

<body>
<div class="container">
    <my-to-do-list></my-to-do-list>
</div>
</body>
</html>
```

