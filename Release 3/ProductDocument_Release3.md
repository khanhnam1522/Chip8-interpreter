
## CMPT 276 | Team 13 
**<h1><font size = "7">
Product Document: Release 3
</font></h1>**

*<font size = "3">
Group Members: 
Matthew Zegar, Larren Canapi, TJ Le, Mohammad Raad Sarar, Khanh Nam Tang, Varpreet Dhaliwal</font>*
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

**<h1>Updates from Previous Version, Release 2</h1>**
<font size = "3">
<p style="border:1px; border-style:solid; border-color:#FF000; padding: 1.5em; width: 380px; height: 180px;">
Major Changes
<br>
<a href = "#Release 3">
Release 3 Summary</a>
<br>
<a href = "#Octo">
Software Tools Update</a>
<br>
<a href = "#use case">
Major Use Cases for Release 4</a>
<br>
<a href = "#game">
Changes to Chip8 Game 2</a>
<br>
<a href = "#schedule changes">
Changes to Schedule from Last Release</a>
<br>
<a href = "#How to Run Current Release"> How to Run Current Release</a> <br>
</p>
</font>
<br>

**<h1><a id = "Release 3"></a>Release 3 Summary</h1>**
<font size = "3"> 
For Release 3, the team was able to create the Chip8 tool for the project requirements which is a sprite editor. The tool can be found on the emulator page by pressing the Tool tab on the top left of the website. The tool can create 8x15 sized sprites and is done by pressing which pixels the user wants to fill in. There is an option to clear the tool workspace completely so the user can create another sprite, or the user can click on an already pressed pixel to remove it. The tool in real time will display the corresponding hexadecimal values to the user from which they can copy and paste it into their Chip8 programs that they are coding.

We have made some slight changes to the emulator by adding a feature to change the speed at which the emulator runs which ranges from 1 millisecond to INT_MAX, however we recommend that users run the emulator from a 1 to 30 millisecond range. We have also did some debugging of the operation codes and the Chip8 font set so that it works properly now with all programs. In addition, the Jest automated testing has been updated to test for a majority of the Chip8 operation codes while including other test cases as well.

Finally, we have created our first game for the project which is Pong. The game rom is included in this and future releases. The rom replicates the old video game it is taking inspiration from by having the players try to rally a ball with each other and if they miss the ball, it costs them a point. The game supports a title/win screen and a scoreboard that appears after a player scores a point. The game plays under a first to five win condition, and can be played again by pressing the restart button on the emulator. More information can be found in the "How to Run Current Release" section of the product document and logically, all past features are included in the current release.
<br>
<br>
[![Image from Gyazo](https://i.gyazo.com/e75ea692ef2309098b828caed7e441b0.gif)](https://gyazo.com/e75ea692ef2309098b828caed7e441b0)
<br>
An example of our Pong game being ran in our emulator.
<br>
<br>
[![Image from Gyazo](https://i.gyazo.com/5e3aeb765007ae2091b84f1b43cdf3b6.gif)](https://gyazo.com/5e3aeb765007ae2091b84f1b43cdf3b6)
</font>
<br>
<font size = "3"> 
An example of our Chip8 sprite editor in use to create an "X" shape sprite for future use.
</font>
<br>
<br>

**<h1>Release Summary 2</h1>**
<font size = "3"> 
For Release 2, the team has been able to update the Visualizer for the Chip8 emulator so that it meets the advanced features that are a requirement for the project. The team was able to add a pause functionality to the emulator for the programs. In addition, the step-forward/backwards features have been implemented, accessible when the user pauses the program first. Then the user can press either button to step-forward/backward in a Chip8 program one instruction at a time, and they should be able to see the changes to the registers and memory in the table down below. More features include the option for the user to restart Chip8 programs at any moment in time. Finally, we got rom loading/importing completed so users can select Chip8 programs they have found on the internet to use in our emulator. We have a sample of Chip8 programs in this release for users to try out and import into our project and proper citation is provided in the Citations and Resources section. 
</font>
<br>
<br>

![Term](https://gyazo.com/bd3c94e743ec180bf9369f2d3a7e1899.jif)
<br>
An example of using our emulator to restart and pause a Chip8 program.

<br>

![Term](https://gyazo.com/75371931234ac3388f567519ce6d0f2a.jif)
<br>
An example of the step-forward and step-backward feature of our Chip8 emulator with a working program. 

<br>

**<h1>Release 1 Summary</h1>**

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

Release 1 Update:
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

Release 2 Update: The team has decided to use both Lodash and Jest for the project from Professor Toby Donaldson's suggestion. Lodash was used as its utility library had functions/methods that was helpful in implementing the step-backward feature for the visualizer. Also, we have decided on using Jest as it allows us to do automated testing using the terminal/command line and because of its simplicity.

<a id = "Octo"> </a>
Release 3 Update: The team has decided to use the Octo Chip8 Integrated Development Environment (IDE) which allows users to code Chip8 programs in a high-level assembler for the Chip8 virtual machine. The team has decided to use Octo because it allows us to code the Chip8 games in a high level langauge as opposed to low-level assembly language. As a result, we have been efficient in programming our Pong game for Release 3 because we didn't have to spend time learning assembly language which the majority of our teammates lack experience in. The Octo IDE website is referenced in the citations and resources section of the product document.

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

Release 1 Update: The major features for Release 2 are going to be creating the Chip8 Tool and the advanced Visualizer. The group has finally decided that the Chip8 Tool will be a Sprite Editor that allows users to create sprite-based images and export the binary/hexadecimal values of the image to a text file. The tool will be good for design purposes for Chip8 programmers as it allows them to easily create more complex sprites to be printed out to the emulator without having to waste time on binary/hexadecimal conversion. The tool will provide educational value to the team as we learn how to create a conversion tool and will lead to efficient sprite creation.
<br>
<br>
The Visualizer will be updated in Release 2 to show greater details of the memory, registers, and instructions to the user. In addition to allowing for pausing and stepping forward/back for Chip8 programs, the use case for this feature is that it will provide educational purposes for students. Learning emulation can help them understand how registers and instructions are being executed on an old computer program. This provides a deeper understanding of how interpreted programming languages worked in the mid 1970's.
<br>
<br>
In addition, the visualizer will provide debugging purposes for Chip8 developers because they can run their Chip8 programs on our emulator and see how op codes and registers are being inputed into an emulator. From this knowledge, the user can debug their programs because they can see if their code is correctly being implemented into the system. Furthermore, they can see each individual process that their program is doing, leading to efficient testing/debugging.

Release 2 Update: The major features for Release 3 is creating the Chip8 sprite editor tool and creating our first Chip8 game which is Pong. The tool will allow users to create sprites for Chip8 programs from which they can import into their code. The use case for the feature is that it provides development purposes for Chip8 developers. It is difficult to create sprites by trying to visualize the binary values in an order that models a sprite, our tool solves this issue for programmers. The use case also provides efficient and conveniant design purposes for Chip8 developers because they can create a sprite in our tool, implement it in their source code, and import their program into our project webpage without too much hassle from using multiple tabs/windows.   

Our second major feature is re-creating the famous arcade game, Pong into our Chip8 emulator. We want the game to be a part of the project webpage, perhaps as a drop down menu in the site. The main goal is to get a working version of the basic game for the next release, but we might look into making variations like single-player or double paddles. The use case for the feature is that it will provide entertainment purposes for people who like to play old video games. Both new and old video game players can appreciate and enjoy the simple yet fun gameplay in our Pong clone. The Pong game will also allow up to 2 people to play the game so it serves the purpose for entertaining/engaging multiple people. It can also provide educational purposes because it can provide a visual insight of how old computer systems like Chip8 can run video games with it's limited resources which can be seen thanks to the advanced visualizer showing the memory and register locations. In addition, at this point of the project, the team can start coding our own Chip8 programs into our emulator where it's internal use case is acting as a learning experience for the group while also providing a way to test more programs into our emulator/visualizer.

<a id = "use case">
</a>

Release 3 Update:
For the final release, Release 4. The major features we have planned is to code our second game and refactor our code so that the emulator is complete while adding more programs/features if time permits. Since, we are coding another video game, logically one of our major use cases is to allow people to play Chip8 games on our emulator. It can provide both entertainment and educational value because users can enjoy themselves by playing fun, interactive video games, alone or with mutiple people. In addition it can provide a learning experience because users can see what old video games can look like despite the limitation of the hardware of its time. Likewise, our Chip8 game can provide a perspective of what a modern game could look/play like in a Chip8 environment. Futhermore, it provides an educational experience since it can provide a use case of showing programmers how old video games were designed/created on limited hardware. As a result, these programmers can use our games to learn how to code their own Chip8 games in the future.

As stated earlier, we don't have any other major features planned for Release 4 due to the group's decision to refactor/debug our code for final release. We will update our automated testing to test for more cases/features, and these Jest files can be used by other Chip8 developers who are working on their emulators and roms. As a result, it will provide efficient, reliable testing for developers who want to make sure that their Chip8 programs work correctly. At the end of Release 4, it is expected that we have finished all features for the project which includes the emulator/visualizer, tool, and the games. The major use case for the project in this perspective is that it can be used for educational purposes because people can learn emulation processes like operation codes and registers. Likewise, developers can learn first hand how old computer systems display graphics and how they can be manipulated thanks to our advanced visualizer. Finally, the tool is useful for Chip8 developers who want to create sprites for their games. The whole project in general is useful for people who are interested in Chip8 development whether the field would be in either emulation or game design. 

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


Release 1 Update: For automated testing for Release 1, due to time constraints we have decided to load Chip8 roms found on the internet into a testing file. The testing file will then run the rom and at specific intervals will test if the registers values and program counter are at their supposed values. We will be doing more advanced testing in the future. The automated testing also allows the user to track each opcode as it gets to the end of the file and the assumed ending program counter.

<a id = "testing"></a>
Release 2 Update: For testing for Release 2, the team has decided to use Jest in order to create test files that can be run in a terminal to test if the emulator/visualizer is working correctly after every new implementation that the team makes. We have automated testing Jest files so it does unit testing for our op-codes in our project to check if they are working correctly, throwing an error report if it doesn't. More instructions about running the automated testing is in the "How to run Current Release" section in the product document.

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

Release 1 Update: As of Release 1, the team has finally decided to fully commit to creating the Chip8 Sprite Editor tool for the project. The team will try to implement the tool in either Python or JavaScript, and have the tool integrated on the emulator web page. The main idea is to have the user be able to design sprite based images and have them be outputted to a text file containing their decimal/hexadecimal value. As a result, there have been updates to the schedule.

Release 2 Update: As of Release 2, the team has pushed the Sprite Editor tool implementation to next release as all team members were busy with midterms/other classes. The schedule has been updated as a result. The team has decided to implement the tool in Javascript and we hope that the tool can be a part of the emulator web page as a seperate tab. As a result, both the emulator and tool can be used at the same time and not seperate programs.


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

<font size = "3">
<a id = "game"></a>
Release 3 Update: For Release 4, the team has decided against creating Breakout because of the limitation of coding on Chip8 computer systems learned from coding Pong. The team has decided to do another game either being Snake, a shooter, or a running game. The following section on "Chip8 Game 2" has been changed accordingly to adjust to the change.
</font>

### **Chip8 Game 2** <br>

<font size = "3">

- Plan <br>
  We plan on allocating around 1 to 2 weeks to create our second game. The team will decide which game we would want to create from the main suggestions of Snake, a shooter, or a running game. At this moment in time, all previous work for the project should be completed and all attention should be put forth to finish the last game. Assigned group members will be asked to review Javascript, Chip8 programming, basic game programming, and look at the source code for game 1.

- Specify <br>
  The game needs to be a single player game or a multiplayer game. The game is played/controlled using the keyboard. There must be a viable and achievable win or lose condition so that the player can try again.

- Design <br>
  The team will be looking into how to design the user interface for the game, and study game design topics like hit detection and game control/design.

- Implementation <br>
  Like game 1, the team is expected to start coding in the Octo IDE once the previous stages are finished. We plan to make game 2 the last program for the assignment so it is expected that everyone is working together.

- Test <br>
  Much of testing is similar to game 1, various unit and system testing will be done in the implementation phase, but acceptance testing will be our primary source.

</font>
<br>

**<h1><a id = "Schedule"></a>Schedule</h1>** 
<font size = "3">
The following information details the work schedule that the team will refer to for deadlines for our project. In addition, we have documented smaller deadlines for the group to follow for each release down below. A disclaimer is that these following schedules is tentative, and we will need to adjust the deadlines and work schedules constantly in order to resolve unforeseen conflicts in the future.

Furthermore, the schedule is under the assumption that all team members are going to be putting an equal effort towards the project. Observing every team members class schedule, and each of us having either 3 to 4 courses for the semester. SFU recommends studying 2-3 hours for each credit for the course a week, as a result each team member must commit an average of 6 to 9 hours for the course per week. However, it is expected that time spent on the project is due to fluctuate, with the team working more or less hours on certain weeks.

When calculating risk management, our two main risks come from project and product risks. Project risks can arise because all team members can potentially be busy with other classes and commitments, and thus work for the project can be behind schedule. We plan to solve the issue with good communication and planning for more meetings if we fall behind schedule. Product risks can occur when coding the project as problems such as the program being too inefficient can arise. We will solve the issue by having a high "Bus Factor" taught in class, all team members are expected to be knowledgeable of the information required to complete the project as we take the first two weeks of the project to learn about Chip8 programming.

Release 1 Update: The schedule has been updated to accomadate for some changes. The emulator has been given a couple more days because we are behind on some final implementations. Also the group has decided to start working on the Chip8 Tool halfway through Release 2. The team plans to split into two groups, where one will work on the tool, and the other will work on the advanced visualizer. As a result, the schedule has been changed to represent the time blocks for working on the tool/visualizer. In the Release 2 and 3 work breakdowns below, the scheduling has been updated as well.

Release 2 Update: Due to all group members being busy with midterms/other classes, the team wasn't able to do too much work on the Chip8 tool so the schedule has been updated. The team still plans to split up into two groups to finish both the Chip8 tool and the Pong game while keeping in good contact with each other. The schedule image below still remains consistent and viable. But in the Release 3 and 4 work breakdowns below, the scheduling has been updated slightly to reflect these changes.

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

| **Major Task** | **Start Date** | **End Date** | 
| :------------- | :------------- | :----------- |
| Planning/Designing Visualizer | February 8th | February 10th |
| Memory/Register/Instruction Visualization | February 10th | February 16th |
| Feature to pause Visualizer | February 16th | February 21th |
| Feature to step-forward and step-backward in Visualizer by 1 step | February 21th | March 1st |
| Start designing the Chip8 Tool | February 20th | February 24th |

<br>

Release 3

Our third release will include our Chip8 tool in addition to the start of our game programming for the project. The team hopes to create the Chip8 tool and test it during the time interval between Release 2 and 3. For coding our game 1 which is Pong, we will start experimenting with coding the controls and physics in the game. The full implementation is hopefully going to be done before Release 3.

Updated Schedule with dates

| **Major Task** | **Start Date** | **End Date** | 
| :------------- | :------------- | :----------- |
| Implementing Chip8 Tool | February 28th | March 7th | 
| Testing Chip8 Tool | March 7th | March 12th |
| Design/Plan Game 1 | March 1th | March 3th | 
| Coding Game 1 Physics | March 3th | March 7th | 
| Coding Game 1 Paddles | March 7th | March 10th | 
| Testing Game 1 | March 10th | March 12th | 

<br>

<a id = "schedule changes"> </a>
Release 3 Update: As mentioned in the work breakdown section, the team has decided to not create Breakout for our second game for the project due to the difficulty of coding such a game. Since, we have decided to code either Snake, a shooter game, or a runner game, the Release 4 schedule breakdown below has been changed to reflect these changes. A disclaimer is that the team hasn't fully decided on what game we want to create so the information provided below is a general overview of our work flow for the next few weeks. However, the gantt chart shown above has not changed because the team still wants to only dedicate 1 - 2 weeks to coding the game so we have time to refactor the project and create the in-class presentation.

Release 4

The final release will encompass the full process of creating game 2 which is either Snake, a shooter, or a runner. Team members are expected to study the code in game 1 first, in order to translate the knowledge learned to creating game 2. We expect to stop programming 1 to 2 weeks before the project is due to allow our team to refactor our project for final submission.

Updated Schedule with dates

| **Major Task** | **Start Date** | **End Date** | 
| :------------- | :------------- | :----------- |
| Design/Plan Game 2 | March 15th | March 17th | 
| Implement game assets | March 17th | March 19th |
| Implement game logic/controls in Game 2 | March 20th | March 26th | 
| Prepare Final Presentation | March 24 | March 31st | 
| Final Refactoring of all code/Preperation for Final Release | April 1st | April 7th | 

<br>
</font>

**<h1><a id = "How to Run Current Release"></a>How to Run Current Release </h1>** 
<font size = "3">
In order to run the current release from Team 13, users must enter the folder labelled "Release 3" and locate the html file called "index.html" and run it in Google Chrome. A webpage of the emulator should pop up for the user to see with a Chip8 image program displaying our IBM inspired Team 13 logo. 

In order to load programs into the Chip8 emulator, the user must run the "index.html" file, and locate the load rom button near the visualizer. After clicking the button, a pop up of the user's file directory will display, where the user can pick a Chip8 program to play. Team 13 has included a folder labled "Online Roms" in the release which have Chip8 programs that can be run on our emulator for testing. The roms in the folder have been properly cited in the Citations and Resources section of the Product Document. If the user want's to run our Pong game, they need to enter the games folder, under the game 1 folder and play the Pong.ch8 rom into the emulator. Users can see the Octo program file for Pong as well in the games 1 folder if they wish.

The keyboard has been implemented in the emulator so the user can use the keyboard for input for some Chip8 programs. The buttons under the visualizer do the actions they are labelled as. However, to use the step-foward/backward functionality, the user must first pause the program before they start pressing the buttons for it to work. The keypad on an original Chip8 system has been replaced with the following keyboard formation as seen in the image below. When loading new roms into the visualizer, if the program doesn't show up immediately, try hitting the restart button for a reset.
<br>

![Term](https://cdn.discordapp.com/attachments/531238124827705367/555607291357954069/Capture.PNG)

<br>
If the user has entered the Pong.ch8 rom into the emulator, the rom will display a Pong game title screen to the user for a few seconds before transitioning into the main gameplay. Player 1 is on the left and is controlled by using the "q" and "a" keys to move up and down respectively. Player 2 is on the right and is controlled by using the "e" and "d" keys to move up and down respectively. The game plays the original Pong game, the objective of the game is to strike the ball past your opponents paddle. The ball will bounce back of the top and bottom of the screen and off the players paddles. When a player scores, a scoreboard will display to the user and the game will end when 1 player reaches 5 points. The game will then cut to a win screen for that certain player. The users can restart the game if they desire by pressing the restart button under the emulator.

In order to use the Chip8 sprite editor, the user must be running the "index.html" file and click on the tool tab at the top left of the page. The user will be taken to the tool page, where they are presented to a 8x15 grid where they can click which pixels they want drawn in to create a sprite of their choosing. They can reset a pixel by clicking in that same position again, or by clicking the clear button below. The following numbers printed at the bottom of the page represents the sprite in hexadecimal and can be copy and pasted to whatever Chip8 assembler/editor the user is programming in for their own use.

In order to do the automated unit testing for the project, the user must go to emulator/Tests/Jest folder, and then run in the command line "npm run test", assuming that both npm and Jest has been installed on the users computer. Most of the opcodes have been handled in our automated testing.

To install Jest, run the command "npm install --save-dev jest".
</font>
<br>

**<h1><a id = "Citations"></a>Citations and Resources | IEEE</h1>** 

JohnEarnest, “JohnEarnest/Octo,” GitHub, 27-Jan-2019. [Online]. Available: https://github.com/JohnEarnest/Octo. [Accessed: 13-Mar-2019].

Dillonb, “Dillonb/chip8 roms,” GitHub, 25-Sep-2016. [Online]. Available: https://github.com/Dillonb/chip8. [Accessed: 28-Feb-2019].

Cowgod's Chip-8 Technical Reference. [Online]. Available: http://devernay.free.fr/hacks/chip8/C8TECH10.HTM. [Accessed: 18-Jan-2019].

“Learn X in Y minutes Where X=javascript,” Learn swift in Y Minutes. [Online]. Available: https://learnxinyminutes.com/docs/javascript/. [Accessed: 18-Jan-2019].

Mattmikolay, “mattmikolay/chip-8,” GitHub. [Online]. Available: https://github.com/mattmikolay/chip-8/wiki/CHIP‐8-Technical-Reference. [Accessed: 18-Jan-2019].

“Multigesture.net,” Multigesturenet. [Online]. Available: http://www.multigesture.net/articles/how-to-write-an-emulator-chip-8-interpreter/. [Accessed: 13-Mar-2019].

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