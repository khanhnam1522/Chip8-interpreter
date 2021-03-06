// Test is starting
console.log("Rom test starting");

testLog = [];
romFinished1 = false;
romFinished2 = false;
romFinished3 = false;

const SCALE = 10;
const CANVAS = document.getElementById("canvas");
const draw2d = CANVAS.getContext("2d");

// ROMs

// IBM
// https://github.com/loktar00/chip8/blob/master/roms/IBM%20Logo.ch8
let IBMROM = [0x00, 0xE0, 0xA2, 0x2A, 0x60, 0x0C , 0x61, 0x08, 0xD0, 0x1F, 0x70, 0x09, 0xA2, 0x39, 0xD0, 0x1F,
    0xA2, 0x48, 0x70, 0x08, 0xD0, 0x1F, 0x70, 0x04, 0xA2, 0x57, 0xD0, 0x1F, 0x70, 0x08, 0xA2, 0x66,
    0xD0, 0x1F, 0x70, 0x08, 0xA2, 0x75, 0xD0, 0x1F, 0x12, 0x28, 0xFF, 0x00, 0xFF, 0x00, 0x3C, 0x00,
    0x3C, 0x00, 0x3C, 0x00, 0x3C, 0x00, 0xFF, 0x00, 0xFF, 0xFF, 0x00, 0xFF, 0x00, 0x38, 0x00, 0x3F,
    0x00, 0x3F, 0x00, 0x38, 0x00, 0xFF, 0x00, 0xFF, 0x80, 0x00, 0xE0, 0x00, 0xE0, 0x00, 0x80, 0x00,
    0x80, 0x00, 0xE0, 0x00, 0xE0, 0x00, 0x80, 0xF8, 0x00, 0xFC, 0x00, 0x3E, 0x00, 0x3F, 0x00, 0x3B,
    0x00, 0x39, 0x00, 0xF8, 0x00, 0xF8, 0x03, 0x00, 0x07, 0x00, 0x0F, 0x00, 0xBF, 0x00, 0xFB, 0x00,
    0xF3, 0x00, 0xE3, 0x00, 0x43, 0xE0, 0x00, 0xE0, 0x00, 0x80, 0x00, 0x80, 0x00, 0x80, 0x00, 0x80,
    0x00, 0xE0, 0x00, 0xE0]

// Chip8_picture
// https://github.com/loktar00/chip8/blob/master/roms/Chip8%20Picture.ch8
let Chip8_pictureROM = [0x00, 0xE0, 0xA2, 0x48, 0x60, 0x00, 0x61, 0x1E, 0x62, 0x00, 0xD2, 0x02,
    0xD2, 0x12, 0x72, 0x08, 0x32, 0x40, 0x12, 0x0A, 0x60, 0x00, 0x61, 0x3E, 0x62, 0x02, 0xA2,
    0x4A, 0xD0, 0x2E, 0xD1, 0x2E, 0x72, 0x0E, 0xD0, 0x2E, 0xD1, 0x2E, 0xA2, 0x58, 0x60, 0x0B,
    0x61, 0x08, 0xD0, 0x1F, 0x70, 0x0A, 0xA2, 0x67, 0xD0, 0x1F, 0x70, 0x0A, 0xA2, 0x76, 0xD0,
    0x1F, 0x70, 0x03, 0xA2, 0x85, 0xD0, 0x1F, 0x70, 0x0A, 0xA2, 0x94, 0xD0, 0x1F, 0x12, 0x46,
    0xFF, 0xFF, 0xC0, 0xC0, 0xC0, 0xC0, 0xC0, 0xC0, 0xC0, 0xC0, 0xC0, 0xC0, 0xC0, 0xC0, 0xC0,
    0xC0, 0xFF, 0x80, 0x80, 0x80, 0x80, 0x80, 0x80, 0x80, 0x80, 0x80, 0x80, 0x80, 0x80, 0x80,
    0xFF, 0x81, 0x81, 0x81, 0x81, 0x81, 0x81, 0x81, 0xFF, 0x81, 0x81, 0x81, 0x81, 0x81, 0x81,
    0x81, 0x80, 0x80, 0x80, 0x80, 0x80, 0x80, 0x80, 0x80, 0x80, 0x80, 0x80, 0x80, 0x80, 0x80,
    0x80, 0xFF, 0x81, 0x81, 0x81, 0x81, 0x81, 0x81, 0xFF, 0x80, 0x80, 0x80, 0x80, 0x80, 0x80,
    0x80, 0xFF, 0x81, 0x81, 0x81, 0x81, 0x81, 0x81, 0xFF, 0x81, 0x81, 0x81, 0x81, 0x81, 0x81, 0xFF, 0xFF]

// Maze
// https://github.com/loktar00/chip8/blob/master/roms/Maze%20%5BDavid%20Winter%2C%20199x%5D.txt
let Maze = ["a2","1e", "c2","01", 32,01, "a2","1a", "d0","14", 70,04, 30,40, 12,00,
    60,00, 71,04, 31,20, 12,00, 12,18, 80,40, 20,10, 20,40,
    80,10];
for (let i = 0;i<Maze.length;i++){
    Maze[i] = "0x" + Maze[i];
    Maze[i].toUpperCase();
}

//Puzzle
//let puzzle = [0x00,0xE0 ,0x6C ,0x00 ,0x4C ,0x00 ,0x6E ,0x0F ,0xA2 ,0x03 ,0x60 ,0x20 ,0xF0 ,0x55 ,0x00 ,0xE0 ,0x22 ,0xBE ,0x22 ,0x76 ,0x22 ,0x8E ,0x22 ,0x5E ,0x22 ,0x46 ,0x12 ,0x10 ,0x61 ,0x00 ,0x62 ,0x17 ,0x63 ,0x04 ,0x41 ,0x10 ,0x00 ,0xEE ,0xA2 ,0xE8 ,0xF1 ,0x1E ,0xF0 ,0x65 ,0x40 ,0x00 ,0x12 ,0x34 ,0xF0 ,0x29 ,0xD2 ,0x35 ,0x71 ,0x01 ,0x72 ,0x05 ,0x64 ,0x03 ,0x84 ,0x12 ,0x34 ,0x00 ,0x12 ,0x22 ,0x62 ,0x17 ,0x73 ,0x06 ,0x12 ,0x22 ,0x64 ,0x03 ,0x84 ,0xE2 ,0x65 ,0x03 ,0x85 ,0xD2 ,0x94 ,0x50 ,0x00 ,0xEE ,0x44 ,0x03 ,0x00 ,0xEE ,0x64 ,0x01 ,0x84 ,0xE4 ,0x22 ,0xA6 ,0x12 ,0x46 ,0x64 ,0x03 ,0x84 ,0xE2 ,0x65 ,0x03 ,0x85 ,0xD2 ,0x94 ,0x50 ,0x00 ,0xEE ,0x44 ,0x00 ,0x00 ,0xEE ,0x64 ,0xFF ,0x84 ,0xE4 ,0x22 ,0xA6 ,0x12 ,0x5E ,0x64 ,0x0C ,0x84 ,0xE2 ,0x65 ,0x0C ,0x85 ,0xD2 ,0x94 ,0x50 ,0x00 ,0xEE ,0x44 ,0x00 ,0x00 ,0xEE ,0x64 ,0xFC ,0x84 ,0xE4 ,0x22 ,0xA6 ,0x12 ,0x76 ,0x64,0x0C ,0x84 ,0xE2 ,0x65 ,0x0C ,0x85 ,0xD2 ,0x94 ,0x50 ,0x00 ,0xEE ,0x44 ,0x0C ,0x00 ,0xEE ,0x64 ,0x04 ,0x84 ,0xE4 ,0x22 ,0xA6 ,0x12 ,0x8E ,0xA2 ,0xE8 ,0xF4 ,0x1E ,0xF0 ,0x65 ,0xA2 ,0xE8 ,0xFE,0x1E ,0xF0 ,0x55 ,0x60 ,0x00,0xA2 ,0xE8 ,0xF4 ,0x1E ,0xF0 ,0x55 ,0x8E ,0x40 ,0x00 ,0xEE ,0x3C ,0x00 ,0x12 ,0xD2 ,0x22 ,0x1C ,0x22 ,0xD8 ,0x22 ,0x1C ,0xA2 ,0xF8 ,0xFD ,0x1E ,0xF0 ,0x65 ,0x8D ,0x00 ,0x00 ,0xEE ,0x7C ,0xFF ,0xCD ,0x0F ,0x00 ,0xEE ,0x7D ,0x01 ,0x60 ,0x0F ,0x8D ,0x02 ,0xED ,0x9E ,0x12 ,0xD8 ,0xED ,0xA1 ,0x12 ,0xE2 ,0x00 ,0xEE ,0x01 ,0x02 ,0x03 ,0x04 ,0x05 ,0x06 ,0x07 ,0x08 ,0x09 ,0x0A ,0x0B ,0x0C ,0x0D ,0x0E ,0x0F ,0x00 ,0x0D ,0x00 ,0x01 ,0x02 ,0x04 ,0x05 ,0x06 ,0x08 ,0x09 ,0x0A ,0x0C ,0x0E ,0x03 ,0x07,0x0B ,0x0F]

//Pong
//let pong = [0x6A, 0x02, 0x6B, 0x0C, 0x6C, 0x3F , 0x6D , 0x0C , 0xA2 , 0xEA , 0xDA , 0xB6 , 0xDC , 0xD6 , 0x6E , 0x00 , 0x22 , 0xD4 , 0x66 , 0x03 , 0x68 , 0x02 , 0x60 , 0x60 , 0xF0 , 0x15 , 0xF0 , 0x07 , 0x30 , 0x00 , 0x12 , 0x1A , 0xC7 , 0x17 , 0x77 , 0x08 , 0x69 , 0xFF , 0xA2 , 0xF0 , 0xD6 , 0x71 , 0xA2 , 0xEA , 0xDA , 0xB6 , 0xDC , 0xD6 , 0x60 , 0x01 , 0xE0 , 0xA1 , 0x7B , 0xFE , 0x60 , 0x04 , 0xE0 , 0xA1 , 0x7B , 0x02 , 0x60 , 0x1F , 0x8B , 0x02 , 0xDA , 0xB6 , 0x8D , 0x70 , 0xC0 , 0x0A , 0x7D , 0xFE , 0x40 , 0x00 , 0x7D , 0x02 , 0x60 , 0x00 , 0x60 , 0x1F , 0x8D , 0x02 , 0xDC , 0xD6 , 0xA2 , 0xF0 , 0xD6 , 0x71 , 0x86 , 0x84 , 0x87 , 0x94 , 0x60 , 0x3F , 0x86 , 0x02 , 0x61 , 0x1F , 0x87 , 0x12 , 0x46 , 0x02 , 0x12 , 0x78 , 0x46 , 0x3F , 0x12 , 0x82 , 0x47 , 0x1F , 0x69 , 0xFF , 0x47 , 0x00 , 0x69 , 0x01 , 0xD6 , 0x71 , 0x12 , 0x2A , 0x68 , 0x02 , 0x63 , 0x01 , 0x80 , 0x70 , 0x80 , 0xB5 , 0x12 , 0x8A , 0x68 , 0xFE , 0x63 , 0x0A , 0x80 , 0x70 , 0x80 , 0xD5 , 0x3F , 0x01 , 0x12 , 0xA2 , 0x61 , 0x02 , 0x80 , 0x15 , 0x3F , 0x01 , 0x12 , 0xBA , 0x80 , 0x15 , 0x3F , 0x01 , 0x12 , 0xC8 , 0x80 , 0x15 , 0x3F , 0x01 , 0x12 , 0xC2 , 0x60 , 0x20 , 0xF0 , 0x18 , 0x22 , 0xD4 , 0x8E , 0x34 , 0x22 , 0xD4 , 0x66 , 0x3E , 0x33 , 0x01 , 0x66 , 0x03 , 0x68 , 0xFE , 0x33 , 0x01 , 0x68 , 0x02 , 0x12 , 0x16 , 0x79 , 0xFF , 0x49 , 0xFE , 0x69 , 0xFF , 0x12 , 0xC8 , 0x79 , 0x01 , 0x49 , 0x02 , 0x69 , 0x01 , 0x60 , 0x04 , 0xF0 , 0x18 , 0x76 , 0x01 , 0x46 , 0x40 , 0x76 , 0xFE , 0x12 , 0x6C , 0xA2 , 0xF2 , 0xFE , 0x33 , 0xF2 , 0x65 , 0xF1 , 0x29 , 0x64 , 0x14 , 0x65 , 0x00 , 0xD4 , 0x55 , 0x74 , 0x15 , 0xF2 , 0x29 , 0xD4 , 0x55 , 0x00 , 0xEE , 0x80 , 0x80 , 0x80 , 0x80 , 0x80 , 0x80 , 0x80 , 0x00 , 0x00 , 0x00 , 0x00 , 0x00]

// Create a new Chip8CPU to test
Chip8Test = new Chip8CPU();

// Reset Chip8 values
Chip8Test.reset();

// Loading up IBMROM
Chip8Test.loadrom(IBMROM);
// Setup IBM Loop
if (romFinished1 == false) {
    let IBMRomLoop = setInterval(IBMTest, 100);

    function IBMTest() {
        // Call the opcodes
        Chip8Test.emulateCycle();
    
        // Needed for drawing (but in this case we don't need to draw anything, just compare values)
        if (Chip8Test.draw_flag == true) {
            // The vertical point at which we will be drawing the square
            vertical = 0;
            // The vertical offset to which we draw the box (0-32)
            vertical_offset = 0;
            // Loop through the entire graphics array
            for (let i = 0; i < Chip8Test.graphics.length; ++i) {
                
                // Horizontal point
                horizontal = (i % 64);
    
                // If we see 1 in the array
                if (Chip8Test.graphics[i] == 1) {
                    // Draw a white square
                    draw2d.fillStyle = "white";
                    draw2d.fillRect(horizontal * SCALE, vertical * SCALE, 10, 10);  
                } else {
                    // Otherwise draw black
                    draw2d.fillStyle = "black";
                    draw2d.fillRect(horizontal * SCALE, vertical * SCALE, 10, 10);  
                }
    
                // Move along vertically
                vertical_offset += 1;
                // Loop back and redraw if it goes outside the canvas
                if (vertical_offset == 64) {
                    vertical += 1;
                    vertical_offset = 0;
                }
            }
            Chip8Test.draw_flag = false;
        }
    
        // After the picture is done drawing, we can compare our emulators values to the expected values
        // These expected values were gathered using another emulator
        if (Chip8Test.program_counter == 0x0228) {
            console.log("IBM Rom finished with expected results");
            testLog.push("IBM Rom finished with expected results");
            document.getElementById("IBM").innerHTML = "Passed";
            romFinished1 = true;
            Chip8Test.reset();
            clearInterval(IBMRomLoop);

            // Reset Chip8 values
            Chip8Test.reset();
            // Loading up Chip8picture
            Chip8Test.loadrom(Chip8_pictureROM);
            // Setup Chip8pic Loop
            if (romFinished1 == true && romFinished2 == false && romFinished3 == false) {
                let Chip8picRomLoop = setInterval(Chip8_pictureTest, 100);

                function Chip8_pictureTest() {
                    // Call the opcodes
                    Chip8Test.emulateCycle();

                    // Needed for drawing (but in this case we don't need to draw anything, just compare values)
                    if (Chip8Test.draw_flag == true) {
                        // The vertical point at which we will be drawing the square
                        vertical = 0;
                        // The vertical offset to which we draw the box (0-32)
                        vertical_offset = 0;
                        // Loop through the entire graphics array
                        for (let i = 0; i < Chip8Test.graphics.length; ++i) {
                            
                            // Horizontal point
                            horizontal = (i % 64);
                
                            // If we see 1 in the array
                            if (Chip8Test.graphics[i] == 1) {
                                // Draw a white square
                                draw2d.fillStyle = "white";
                                draw2d.fillRect(horizontal * SCALE, vertical * SCALE, 10, 10);  
                            } else {
                                // Otherwise draw black
                                draw2d.fillStyle = "black";
                                draw2d.fillRect(horizontal * SCALE, vertical * SCALE, 10, 10);  
                            }
                
                            // Move along vertically
                            vertical_offset += 1;
                            // Loop back and redraw if it goes outside the canvas
                            if (vertical_offset == 64) {
                                vertical += 1;
                                vertical_offset = 0;
                            }
                        }
                        Chip8Test.draw_flag = false;
                    }
                
                    // After the picture is done drawing, we can compare our emulators values to the expected values
                    // These expected values were gathered using another emulator
                    if (Chip8Test.program_counter == 0x0246 && Chip8Test.register_V[0] == 0x2C && Chip8Test.register_I == 0x0294) {
                        console.log("Chip8 Picture Rom finished with expected results");
                        testLog.push("Chip8 Picture Rom finished with expected results");
                        romFinished2 = true;
                        document.getElementById("Chip8pic").innerHTML = "Passed";
                        Chip8Test.reset();
                        clearInterval(Chip8picRomLoop);

                        // Reset Chip8 values
                        Chip8Test.reset();
                        // Loading up Chip8picture
                        Chip8Test.loadrom(Maze);
                        // Setup Chip8pic Loop
                        if (romFinished1 == true && romFinished2 == true && romFinished3 == false) {
                            let Chip8mazeloop = setInterval(MazeTest, 10);

                            function MazeTest() {
                                // Call the opcodes
                                Chip8Test.emulateCycle();

                            // Needed for drawing (but in this case we don't need to draw anything, just compare values)
                            if (Chip8Test.draw_flag == true) {
                                // The vertical point at which we will be drawing the square
                                vertical = 0;
                                // The vertical offset to which we draw the box (0-32)
                                vertical_offset = 0;
                                // Loop through the entire graphics array
                                for (let i = 0; i < Chip8Test.graphics.length; ++i) {
                                    
                                    // Horizontal point
                                    horizontal = (i % 64);
                        
                                    // If we see 1 in the array
                                    if (Chip8Test.graphics[i] == 1) {
                                        // Draw a white square
                                        draw2d.fillStyle = "white";
                                        draw2d.fillRect(horizontal * SCALE, vertical * SCALE, 10, 10);  
                                    } else {
                                        // Otherwise draw black
                                        draw2d.fillStyle = "black";
                                        draw2d.fillRect(horizontal * SCALE, vertical * SCALE, 10, 10);  
                                    }
                        
                                    // Move along vertically
                                    vertical_offset += 1;
                                    // Loop back and redraw if it goes outside the canvas
                                    if (vertical_offset == 64) {
                                        vertical += 1;
                                        vertical_offset = 0;
                                    }
                                }
                                Chip8Test.draw_flag = false;
                            }
                            
                                // After the picture is done drawing, we can compare our emulators values to the expected values
                                // These expected values were gathered using another emulator
                                if (Chip8Test.program_counter == 0x0218 && Chip8Test.register_V[1] == 0x20) {
                                    console.log("Maze Rom finished with expected results");
                                    testLog.push("Maze Rom finished with expected results");
                                    document.getElementById("Maze").innerHTML = "Passed";
                                    romFinished3 = true;
                                    Chip8Test.reset();
                                    clearInterval(Chip8mazeloop);
                                } 
                            }
                        }
                    } 
                }
            }
        } 
    }
}
