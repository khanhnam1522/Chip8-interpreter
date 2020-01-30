## CMPT 276 | Team 13 
**<h1><font size = "7">
Product Document: Release 1
</font></h1>**

*<font size = "3">
Group Members: 
Matthew Zegar, Larren Canapi, TJ Le, Mohammad Raad Sarr, Khanh Nam Tang, Varpreet Dhaliwal</font>*
<br>

**<h1>Introduction </h1>**

<font size = "3">
Chip8 is a interpreted low-level programming language which runs programs like video games on 8-bit computers. Our project is to design and create a Chip8 emulator and visualizer that can run and display Chip8 programs on any modern web browser using Javascript. In addition, we need to create a software tool that would be helpful for a Chip8 developer and create at least two video games for our virtual machine. 
</font>

<br>
<br>

<p style="border:1px; border-style:solid; border-color:#FF000; padding: 1.5em; width: 400px; height: 320px;">

<font size = "5"> 
Table of Contents <br> 
</font>


<font size = "3">
  1. <a href = "#Meeting"> Meeting Schedule </a> <br>
  2. <a href = "#Communication"> Communication </a> <br>
  3. <a href = "#Software"> Software Repository </a> <br>
  4. <a href = "#Main"> Main Implementation Language, Libraries, and Tools </a> <br>
  5. <a href = "#Software Methodology"> Software Methodology </a> <br>
  6. <a href = "#Team"> Team Roles </a> <br>
  7. <a href = "#Planned">Planned Use Cases</a><br>
  8. <a href = "#Quality"> Quality Assurance and Testing </a> <br>
  9. <a href = "#Work"> Work Breakdown </a> <br> 
  10. <a href = "#Schedule"> Schedule </a> <br> 
  11. <a href = "#Citations"> Citations and Resources | IEEE </a> <br> 
</font>
</p>
<br>

**<h1>Updates from Previous Version</h1>**
<font size = "3">
<p style="border:1px; border-style:solid; border-color:#FF000; padding: 1.5em; width: 380px; height: 200px;">
Major Changes
<br>
<a href = "#Release 1">
Release 1 Summary</a>
<br>
<a href = "#use case">
Major Use Cases for Release 2</a>
<br>
<a href = "#kanban">
Changing from Trello to Github </a>
<br>
<a href = "#Chip8 Tool">
Chip8 Tool Idea Update </a>
<br>
<a href = "#schedule changes">
Changes to Schedule from Last Release </a>
<br>
<a href = "#testing">
Changes to Testing Techniques </a> 
<br>
<a href = "#How to Run Current Release"> How to Run Current Release </a> <br>
</p>
</font>
<br>

**<h1><a id = "Release 1"></a>Release 1 Summary</h1>**

<font size = "3"> 
For Release 1, the team has been able to create a Chip8 Emulator in Javascript along with a basic visualizer to display graphics. The team was able to create a basic web page using html and css to host the emulator. The emulator has most of the op codes working in addition with the keyboard input being implemented. The emulator has full graphics support and will display the visuals of the program. Roms that work with the emulator are included in the release, and we will implment the full support of all Chip8 programs in later releases. The web page also displays the registers, timers, and program counter to the user.

</a>
<br>

![Term](https://gyazo.com/378d13b3de0b7b6c86bdefe9b9621aa3.jif)

![Term](https://gyazo.com/0c2b0141c8711aa4fa19b6096a541979.jif)
<br>
Examples of Chip8 Programs being run on the emulator
</font> 

<font size = "3">

</font>

<br>

**<h1><a id = "Meeting"></a> Meeting Schedule</h1>**

<font size = "3">
As a group we have decided that we will have weekly team meetings on Mondays at 10:30am, lasting for 1 hour before our CMPT 276 lecture. If need be, we will host extra meetings on Wednesdays and Fridays at the same time. We will be hosting these meetings at the Surrey Campus in a team room or in the Computer Science Instructional Lab. There will also be online Discord meetings if we need to talk about an urgent problem and we cannot meet in person. Our main communication device, Discord, allows members to still attend meetings even if they can’t attend in person.
</font>

<br>
<br>

**<h1><a id = "Communication"></a> Communication</h1>**

<font size = "3">
The primary method of communication that our group will be using is Discord. The application allows us to both share files easily and to communicate through voice and text chat. It also allows us to separate our group conversations into different text channels, so our discussions about the project regarding things like resources or things to do will be organized into sections. For every major meeting, we will be taking meeting minutes so all of the important topics and problems we discuss in meetings are documented and if any member forgets what they are doing for the week, they can refer to their tasks in these documents. These meeting minutes will be stored in Google Drive. Along with this, the group has opted to use Trello as the main way to delegate tasks. With each meeting, we will work closely with Trello to get an update on each task's completion so that each group member is familiar with what each other is doing. As a result, we create a practical way to balance tasks and see the rate of progress between all group members.

<br>
<br>

<a id = "kanban"> </a> 
Update:
 As of Release 1, the team has decided to not use Trello as a kanban board to assign tasks but to instead use Github's built in projects tab which allows us to create a to-do list for the group. As a result, the team doesn't need to spend time learning how to use/navigate Trello, as we all are already familiar with Github.


</font>

<br>
<br>

**<h1><a id = "Software"></a>Software Repository</h1>**

<font size = "3">
We will be using a private Github repository as our version control software. We chose Github because it is a platform that all of our team members are familiar with and the abundant amount of support/tutorials it has online. Furthermore, Github's various tools/commands allows easy management of people's work. Matthew’s role as Github Master ensures that any merging of work on the project will not conflict with the master branch for our project so there are no inconsistencies or problems.  
</font>

<br>
<br>

**<h1><a id = "Main"></a>Main Implementation Language, Libraries, and Tools</h1>**

<font size = "3">
As most members of the group already have a good understanding of Javascript, it will be our programming language of choice for the project. As a result, it allows our group to immediately get started on programming for the assignment while not spending too much time learning syntax. 

Libraries will be determined in future releases of this document as more insight is gained when we start coding. During the time of this current release, the graphics library we will be testing with is p5.js, which is a library that is accessible for newcomers to the language and will be helpful when we eventually code our Chip8 emulator.

Node.js is a cross-platform Javascript runtime environment that we are considering using, so we can compile code outside of a web browser. As suggested in class, we are considering on using Sublime Merge as a way to visualize the changes that are happening to our repository. Finally, Jest is an application that allows us to test Javascript code, similar to the assert command in C++.

Visual Studio Code will be the Integrated Developer Environment (IDE) of choice due to the extensive support and extensions it provides for Javascript programming. Visual Studio Code also provides a built in Source Control with Git and a Debug Menu which will be helpful when coding such a large scale project.
</font>

<br>
<br>

**<h1><a id = "Software Methodology"></a>Software Methodology</h1>**

<font size = "3">
The completion of the project will be structured by the Incremental Method which follows multiple procedures of plan, specify, design, implement, and test in order to create multiple iterations of the project. We decided that each release should go through a mini-waterfall process where we incrementally create and improve our project. In addition, we decided against the Waterfall Method because of our inexperience of planning a project for a semester long scale and doing phases in order does not allow for flexibility in our schedule.

Following the Incremental Method at the start of each new release, we will plan and specify what specific feature we want to implement and design an efficient way for all team members to work on the new features with the requirement specifications. Implementation will have all team members working to create the desired goal of having the current release programmed into a working form. Finally, testing will be done through various unit, validation, and system testing (more details in the testing section).  

We also decided to use “reuse-oriented software engineering” where we use pre-built software to write our code for the project as it requires much less work for implementation and most of our members have experience in our IDE of choice, Visual Studio Code.
</font>

<br>
<br>

**<h1><a id = "Team"></a>Team Roles</h1>**

<font size = "3">
The structure of team roles will follow mostly an interchangeable format where roles will be loosely dictated because of the wide array of skill sets our team members possess. However, we have a few roles defined below that group members will default to for each release. As a result, we decided to work on each section of the project together, instead of assigning specific roles/tasks like emulator programmer or video game programmer to a single person. 
</font>

<br>
<br>
<br>

**<h2>Role Breakdown</h2>**

| **Name** | **Major** | **Role** | **Expertise** |
| :------- | :-------- | :------- | :------------ |
| **Matthew Zegar** | Software Systems | Github Master, Programmer | Javascript experience 
| **Larren Canapi** | Software Systems  | Project Manager, Programmer | Project Management Experience
| **TJ Le** | Computer Science | Programmer, Tester | Assembly Language
| **Raad Sarr** | Computer Science | Programmer | Assembly Language
| **Khanh Nam Tang** | Computer Science | Programmer, Tester | General Programming
| **Varpreet Dhaliwal** | Math/Computer Science | Programmer | Javascript experience 

<br>
<br>

 **<h2>Role Descriptions</h2>**

| **Role** | **Description** |
| :------- | :-------------- |
| Programmer | Responsible for writing code for the project, helps with the general design of the emulator, visualizer, tool, and games |
| Project Manager | Responsible for looking over each team members work, helps to lead team meetings, assigns tasks to members, and helps to resolve general conflicts |
| Tester | Responsible for doing unit, system, and acceptance testing for the project. Reports immediate problems to the entire group and how we should resolve them |
| Github Master | Responsible for overlooking any merge requests the team creates, and accepting them into the master branch, while having a good level of experience with Git and Github|

<br>

**<h1><a id = "Planned"></a>Planned Use Cases</h1>**

<font size = "3">

The primary use case for Release 0, is to have our current product document completed which will be for organizational use for our team. The team will be refering to the product document constantly as it details the specifics of our software methodology and practices we intend to follow. In addition, the product document will be used to see the schedule and work breakdown of our project, so every team member is aware of what general tasks need to be completed. It also provides a documentation to inform Prof. Toby Donaldson and TA Faraz Shamshirdar, how our group is progressing with the project.

There are many use cases for Release 1, because the goal for Release 1 is to create the Chip8 emulator with a prototype visualizer. Firstly, Release 1 provides educational purposes for the team because we will be competent in Javascript and Assembly/Machine language from the experience which will be helpful in coding the future software updates. The use case is that our group members will be able to learn how emulation of hardware works. As a result, all group members will use the knowledge gained in Release 1 to create the later requirements for the project, specifically the visualizer. Secondly, Release 1 will be used by the team and other people interested in Chip8 programming for operational purposes, because the emulator will be able to take in inputs like various programs, and play them on the web page. Our team and other programmers can use the emulator to display output to the screen, therefore it can serve as a simple testing grounds for running Chip8 programs. 

However, for the final release, we have two planned use cases for our final software. One will be for **educational purposes** because a student can use our emulator to learn about how old computers that used Chip8 can function and work. In addition, students can learn how one can use Javascript in order to emulate old computer software onto a modern web browser. The visualizer in our emulator will also be able to teach students how memory and registers are executed in a computer program. 

Secondly, our software is intended to be used by **people who play video games** because the emulator will be able to run classic video games like Pong and Breakout. As a result, gamers can learn how these old video games looked like and how they were played.

<a id = "use case"></a>
Update: The major features for Release 2 are going to be creating the Chip8 Tool and the advanced Visualizer. The group has finally decided that the Chip8 Tool will be a Sprite Editor that allows users to create sprite-based images and export the binary/hexadecimal values of the image to a text file. The tool will be good for design purposes for Chip8 programmers as it allows them to easily create more complex sprites to be printed out to the emulator without having to waste time on binary/hexadecimal conversion. The tool will provide educational value to the team as we learn how to create a conversion tool and will lead to efficient sprite creation.
<br>
<br>
The Visualizer will be updated in Release 2 to show greater details of the memory, registers, and instructions to the user. In addition to allowing for pausing and stepping forward/back for Chip8 programs, the use case for this feature is that it will provide educational purposes for students. Learning emulation can help them understand how registers and instructions are being executed on an old computer program. This provides a deeper understanding of how interpreted programming languages worked in the mid 1970's.
<br>
<br>
In addition, the visualizer will provide debugging purposes for Chip8 developers because they can run their Chip8 programs on our emulator and see how op codes and registers are being inputed into an emulator. From this knowledge, the user can debug their programs because they can see if their code is correctly being implemented into the system. Furthermore, they can see each individual process that their program is doing, leading to efficient testing/debugging.

</font>

<br>

**<h1><a id = "Quality"></a>Quality Assurance and Testing</h1>**

<font size = "3">
As we start designing and implementing the Chip8 project, the group will run into bugs and errors in the assignment. As a result, testing will be done using a variety of different methods discussed in the book and in class in order to fix these issues. The group has decided to use Jest as our testing software for the project, we are looking to do automated testing with this suite to handle specific bugs.

Coding conventions are expected to be followed in order to mitigate the amount of syntax errors that we encounter. Furthermore, coding conventions allow for consistency in our releases because everyone is coding in a similar design pattern. The designated testers can be found in the team roles section. 

<br>

**Unit/Development Testing** <br>
All group members are expected to find and fix bugs as they program during development. Since we are using GitHub, all six members can pull from the master branch and test each component of the project independently and simultaneously. Any major complications found while coding individually is expected to be reported to the entire group. It is expected that all group members will help each other solve bugs/problems they encounter.  

<br>

**System/Release Testing** <br>
After the development and implementation of the current release is finished, we expect all team members to do extensive testing of the merged system before the due date. The group members are expected to write test files using Jest in order to test various new and old features of the project. Group members are expected to look over each others test.
In the example of the emulator, we will be testing previously completed Chip8 programs to ensure there are no new bugs. Github master will be responsible for reviewing and testing all committed instances of the program before updating the master branch.

<br>

**Acceptance/User Testing** <br>
We plan to consult with other CMPT 276 groups to help aid in testing  our finished product. Various methods could include letting users try out our Chip8 games on our emulator, and reporting back to our group on bugs/problems they encounter. The group members are expected to treat each report seriously and resolve all issues other groups discover.  

<a id = "testing"></a>
Update: For automated testing for Release 1, due to time constraints we have decided to load Chip8 roms found on the internet into a testing file. The testing file will then run the rom and at specific intervals will test if the registers values and program counter are at their supposed values. We will be doing more advanced testing in the future. The automated testing also allows the user to track each opcode as it gets to the end of the file and the assumed ending program counter.

</font>

<br>

**<h1><a id = "Work"></a>Work Breakdown</h1>**

<font size = "3">
The following section breaks down each major feature of the project into smaller parts detailing the incremental model of software development that we are following.
</font>

### **Chip8 Emulator** <br>

<font size = "3">

- Plan <br>
  Creating the emulator tool first will be our highest priority, we are estimating it will be done by Release 1 and will take around 3 weeks to finish. The entire team is tasked to work on the emulator. All team members are expected to read documentation and tutorials about Chip8 found online. These resources can be found in the citations and resources section below. Group discussion is highly encouraged during this stage so every group member is educated on the topic.

- Specify <br>
  Specifically, we want to create a virtual machine that can run any Chip8 program that we either create or find online. The virtual machine must be able to take input from the user in the form of a program and must be able to print output to the screen. Since the full visualizer is not implemented yet, we will be using a simple canvas screen to display programs until it can be improved.

- Design <br>
  The team is expected to discuss and draw how the emulator should look like while running on the webpage. In addition, good universal conventions should be discussed and agreed upon by the group to be followed for the rest of the project. As a result, the code will have good organization of features like memory, operation codes and registers for the program.   

- Implementation <br>
  The emulator is expected to be coded in a common machine langauge that can be run in a Javascript file. The Github Repository will constantly be updated so the team doesn't get far behind on the work.  

- Test <br>
  Constant unit and system testing will be done on a day by day basis to ensure that the emulator is consistently running correctly. Refactoring will be a key element after testing to ensure that the project is organized and efficient. Jest will be used for testing as well.

</font>
<br>

### **Chip8 Visualizer** <br>

<font size = "3">

- Plan <br>
  After the emulator is done for Release 1, it is expected that Release 2 will have the visualizer fully implemented which we estimate will take 2 to 3 weeks to finish. All team members are expected to know a decent amount of Javascript knowledge to procede with the project.

- Specify <br>
  The visualizer should display a Chip8 program but have more features than the previous simple visualizer that Release 1 included. Along the bottom and sides of the screen, the visualizer will show the memory, registers and instructions being executed. In addition, a simple keyboard layout will display on the screen showing the input that the user presses in the given moment.

- Design <br>
  In order to design the visualizer, the team will create draft diagrams of what the visualizer will look like to the user. As a result, the team will have a greater understanding of the expectations for this release. However, design for the visualizer is tentative as the group will constantly discuss it's design and identify the constraints we are put under and how to work around them.

- Implementation <br>
  The visualizer will be implemented using Javascript and assembly/machine language. The various menus and displays for the visualizer will need to be put in multiple files so that all the code is organized. Further information will be provided in further documentation.

- Test <br>
  The visualizer will be tested with various unit and system testing. We will be finding video games and running them on the Chip8 Emulator and Visualizor and see if the graphical quality is to a high standard. In addition, constant maintenance will be done to fix bugs in the pause, step-forward, and step-backward features of the program.

</font>
<br>

### **Chip8 Tool** <br>

<font size = "3">

- Plan <br>
  We plan to allocate 2 to 3 weeks to coding our Chip8 tool. The Chip8 tool is the part of the project that the team is the most unsure about with it's design and implementation, however current ideas are specified below. Future product documents will have an update to this section. We plan to have the entire team working on the Chip8 tool during this iteration.

- Specify <br>
  As development for the Chip8 emulator and visualizer is being accomplished, we will continue to think of an idea for our Chip8 tool. Our current idea is to create a graphics editor to create sprites for our Chip8 games. It would be a simple editor that allows the user to connect pixels together to create sprites of their choosing.

- Design <br>
  The team is expected to draw diagrams of how the tool should look and be implemented. We will also be discussing how we would program such a tool during this phase as well.

- Implementation <br>
  We expect to implement the tool by creating a visualizer with a working user interface. Further implementation will be documented at a later date.

- Test <br>
  Constant unit and system testing is necessary when creating the tool of our choice. We will likely do acceptance testing with other groups and use their feedback to improve/fix any bugs in the program.

<a id = "Chip8 Tool"> </a>
Update: As of Release 1, the team has finally decided to fully commit to creating the Chip8 Sprite Editor tool for the project. The team will try to implement the tool in either Python or JavaScript, and have the tool integrated on the emulator web page. The main idea is to have the user be able to design sprite based images and have them be outputted to a text file containing their decimal/hexadecimal value. As a result, there have been updates to the schedule.


</font>
<br>

### **Chip8 Game 1: Pong** <br>

<font size = "3">

- Plan <br>
  We plan on allocating 1 to 2 weeks to coding our Pong game for the project. We want to have all team members working on it, but worse case scenario have at least 2 people working on it. Assigned group members will be asked to review Javascript, Chip8 programming, and basic game programming.  

- Specify <br>
  The game needs to play a two-player version of Pong, it will be using the keyboard to control the paddles and the win condition will be first to five wins. 

- Design <br>
  Assigned group members are expected to design basic diagrams, and research online how to code Pong in a high-level programming language familiar to them. In addition, studying the game mechanics of Pong along with the physics of the ball.   

- Implementation <br>
  Assigned members are expected to start coding in assembly/machine language once the previous stages are finished. They are encouraged to work with each other and create the game in stages. For example, creating a moving ball, adding bounds checking, then finally adding moving paddles.

- Test <br>
  Multiple unit and system testing will take place during development. However, acceptance testing will be heavily used as we will ask other group member/other teams to try out our game.

</font>
<br>

### **Chip8 Game 2: Breakout** <br>

<font size = "3">

- Plan <br>
  We plan on allocating around 1 to 2 weeks to create our second game, Breakout. Breakout is an excellent game to program because the ideas of Pong are further built upon when coding Breakout. At this moment in time, all previous work for the project should be completed and all attention should be put forth to finish the last game. Assigned group members will be asked to review Javascript, Chip8 programming, basic game programming, and look at the source code for game 1.

- Specify <br>
  The game needs to be a single player game of breakout. The paddle is controlled using the keyboard, and the player must break all of the blocks in order to win the game. The player loses if the ball escapes the screen, the player will have 3 attempts at breaking all the parts.

- Design <br>
  The team will be looking into how to design the user interface for the game, and study the game Breakout in a langauge familiar to them. In addition, a study of simple bounds checking and hit detection in games will be necessary.

- Implementation <br>
  Like game 1, the team is expected to start coding in assembly/machine language once the previous stages are finished. We plan to make game 2 the last program for the assignment so it is expected that everyone is working together.

- Test <br>
  Much of testing is similar to game 1, various unit and system testing will be done in the implementation phase, but acceptance testing will be our primary source.

</font>
<br>

**<h1><a id = "Schedule"></a>Schedule</h1>** 
<font size = "3">
The following information details the work schedule that the team will refer to for deadlines for our project. In addition, we have documented smaller deadlines for the group to follow for each release down below. A disclaimer is that these following schedules is tentative, and we will need to adjust the deadlines and work schedules constantly in order to resolve unforeseen conflicts in the future.

Furthermore, the schedule is under the assumption that all team members are going to be putting an equal effort towards the project. Observing every team members class schedule, and each of us having either 3 to 4 courses for the semester. SFU recommends studying 2-3 hours for each credit for the course a week, as a result each team member must commit an average of 6 to 9 hours for the course per week. However, it is expected that time spent on the project is due to fluctuate, with the team working more or less hours on certain weeks.

When calculating risk management, our two main risks come from project and product risks. Project risks can arise because all team members can potentially be busy with other classes and commitments, and thus work for the project can be behind schedule. We plan to solve the issue with good communication and planning for more meetings if we fall behind schedule. Product risks can occur when coding the project as problems such as the program being too inefficient can arise. We will solve the issue by having a high "Bus Factor" taught in class, all team members are expected to be knowledgeable of the information required to complete the project as we take the first two weeks of the project to learn about Chip8 programming.

<a id = "schedule changes"> </a>
Update: The schedule has been updated to accomadate for some changes. The emulator has been given a couple more days because we are behind on some final implementations. Also the group has decided to start working on the Chip8 Tool halfway through Release 2. The team plans to split into two groups, where one will work on the tool, and the other will work on the advanced visualizer. As a result, the schedule has been changed to represent the time blocks for working on the tool/visualizer. In the Release 2 and 3 work breakdowns below, the scheduling has been updated as well.

</font>

<br>

![Term](https://cdn.discordapp.com/attachments/530842314965516308/542827238475825152/updatedGanttChart.PNG) 
The updated schedule
<br>

| **Major Task** | **Start Date** | **End Date** | 
| :------------- | :------------- | :----------- |
| Product Doc/Presentation | January 3rd | January 21st |
| Chip8 Emulator | January 21rd | February 9th |
| Chip8 Visualizer | February 8th | March 1st |
| Chip8 Tool | February 20th | March 13th |
| Game 1 | March 6th |March 15th |
| Game 2 | March 15th | April 1st |
| Testing | January 3rd | April 8th |
| Final Testing | April 1st | April 8th |

<br>

<font size = "3">
Release 1

The first release will have our members focus on creating the Chip8 emulator for the project. With some of our group members being experienced in Javascript and Assembly/Machine language, we expect the work to be done in roughly 16 days. 

| **Major Task** | **Start Date** | **End Date** | 
| :------------- | :------------- | :----------- |
| Planning/Designing Emulator | January 21st | January 22th |
| Writing Operation Codes | January 22st | January 25th |
| Implementing Memory, Registers, CPU | January 25st | January 31st |
| Implementing Emulator | February 1st | February 9th |


<br>

Release 2

For our second release, we want to start work on the Chip8 Visualizer for the project, showing we can have a better visual output for the user. Due to the complex demands in the  visualizer section of the project, we have allocated 21 days to accomplish the task.

Updated Schedule with dates

| **Major Task** | **Start Date** | **End Date** | 
| :------------- | :------------- | :----------- |
| Planning/Designing Visualizer | February 8th | February 10th |
| Memory/Register/Instruction Visualization | February 10th | February 16th |
| Feature to pause Visualizer | February 16th | February 21th |
| Feature to step-forward and step-backward in Visualizer by 1 step | February 21th | March 1st |
| Start designing the Chip8 Tool | February 20th | February 24th |

<br>

Release 3

Our third release will include our Chip8 tool in addition to the start of our game programming for the project. At the start of the release, we expect to have an idea for our tool and as a result, the following schedule is subject to change. For coding our game 1 which is Pong, we will start experimenting with coding the controls and physics in the game.

Updated Schedule with dates

| **Major Task** | **Start Date** | **End Date** | 
| :------------- | :------------- | :----------- |
| Implementing Chip8 Tool | February 24th | March 4th | 
| Testing Chip8 Tool | March 4th | March 12th |
| Design/Plan Game 1 | March 6th | March 8th | 
| Coding Game 1 Physics | March 8th | March 10th | 
| Coding Game 1 Paddles | March 10th | March 12th | 

<br>

Release 4

The final release will encompass the completion of game 1, and the full process of creating game 2 which is Breakout. Team members are expected to complete game 1 first, in order to translate the knowledge learned to creating game 2. We expect to stop programming 1 to 2 weeks before the project is due to allow our team to refactor our project for final submission.

| **Major Task** | **Start Date** | **End Date** | 
| :------------- | :------------- | :----------- |
| Finish Game 1 | March 13th | March 15th | 
| Design/Plan Game 2 | March 15th | March 17th | 
| Implement player controls/physics in Game 2 | March 17th | March 21st | 
| Implement game assets like bricks in Breakout | March 21st | April 1st | 
| Final Refactoring of all code | April 1st | April 7th | 

<br>
</font>

**<h1><a id = "How to Run Current Release"></a>How to Run Current Release </h1>** 
<font size = "3">
In order to run the current release from Team 13, users must enter the folder labelled "Release 1" and locate the html file called "index.html" and run in it Google Chrome. A webpage of the emulator should pop up for the user to see. 

In order to load programs into the Chip8 emulator, the user must first go into the emulator folder provided in the project and open the main.js file.The user can then find the roms located at the top of file, and in the Chip8.loadrom() method, pass in which rom they would like to see as an argument. Once that file is saved, the user can run the index.html file again to see the results.  

In order to do the automated testing for the project, the user must run the testpage.html file that is located in the Tests folder of Release 1. Once that html file is run, the user should see a web page open up where it displays the emulator running 3 roms on the display (one at a time). The web page will then display if it has passed the 3 image based tests. The main idea is to test if the emulator reads the op codes correctly, and if the visualizer displays it properly. If the tests for each ROM are successful, a successful message will appear on the website console.
</font>
<br>

**<h1><a id = "Citations"></a>Citations and Resources | IEEE</h1>** 

Cowgod's Chip-8 Technical Reference. [Online]. Available: http://devernay.free.fr/hacks/chip8/C8TECH10.HTM. [Accessed: 18-Jan-2019].

“Learn X in Y minutes Where X=javascript,” Learn swift in Y Minutes. [Online]. Available: https://learnxinyminutes.com/docs/javascript/. [Accessed: 18-Jan-2019].

Mattmikolay, “mattmikolay/chip-8,” GitHub. [Online]. Available: https://github.com/mattmikolay/chip-8/wiki/CHIP‐8-Technical-Reference. [Accessed: 18-Jan-2019].

M. Cone, “Basic Syntax,” Cheat Sheet | Markdown Guide. [Online]. Available: https://www.markdownguide.org/basic-syntax/. [Accessed: 18-Jan-2019].

“Welcome,” Emulator 101 - Welcome. [Online]. Available: http://www.emulator101.com/welcome.html. [Accessed: 18-Jan-2019].

<br>

<p align="center">
Product document drafted in Google Docs, Markdown coded in Visual Studio Code
<br>
Created with the help of Markdown All in One Extension (Yu Zhang, 2018)
</p>

<br>
<br>