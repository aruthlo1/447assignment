# 447assignment
Simple CRUD Webapp with ER Diagram

# Setup: #<br />
*You will need 2 terminals to run the react frontend and flask backend*

## In the first terminal: ##<br />
From the project folder, enter: "venv/Scripts/activate"<br />
Now enter: "python backend.py"<br />
*The flask backend is now running on http://127.0.0.1:5000*

## In the second terminal: ##<br />
Navigate to the *frontend* directory using: "cd frontend"<br />
Now enter: "npm start"<br />
*The React frontend should now be running on http://127.0.0.1:3000 and a window will open*<br />

![image](https://github.com/aruthlo1/447assignment/assets/113939231/b5ac7276-e8c4-4758-b321-a949612b7fe4)

If no values are being displayed. Restart the setup process.


# Usage: #
For each section, all database values are displayed. I hardcoded some test data for your convenience.

**AFTER PERFORMING AN OPERATION, VALUES DO NOT RENDER IMMEDIATELY. REFRESH THE PAGE TO SEE VALUES.**

## Adding ##
To add a new item, simply fill in the required values in the "Add a New ___" section and click "Add ___"

## Updating ##
To update an item, click on the item in the list you would like to update (This is not very intuitive, but I promise it works).<br />
You should now see a new section. Fill in the value(s) you would like to change and click the update button.
![image](https://github.com/aruthlo1/447assignment/assets/113939231/d98c0b93-9bff-429f-a52a-8bce54626b93)


## Deleting ##
To delete an item, simply click the delete button next to the corresponding item you would like to delete

# Entities: #
![image](https://github.com/aruthlo1/447assignment/assets/113939231/aba28406-7de0-48d7-aef3-4004cb86ae4f)

## Student ##
Students contain the following attributes
<ul>
  <li>
    id: int
  </li>
  <li>
    name: string
  </li>
  <li>
    credits_earned: int
  </li>
</ul>

## Course ##
Course contain the following attributes
<ul>
  <li>
    id: int
  </li>
  <li>
    course_title: string
  </li>
  <li>
    instructor: int foreignkey
  </li>
</ul>

## Instructor ##
Instructors contain the following attributes
<ul>
  <li>
    id: int
  </li>
  <li>
    name: string
  </li>
  <li>
    course_department: string
  </li>
</ul>

## Register ##
Registers contain the following attributes
<ul>
  <li>
    id: int
  </li>
  <li>
    student_id: int foreignkey
  </li>
  <li>
    course_id: int foreignkey
  </li>
</ul>
