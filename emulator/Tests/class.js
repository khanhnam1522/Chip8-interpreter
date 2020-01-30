// REFERENCE
//(1) http://www.multigesture.net/articles/how-to-write-an-emulator-chip-8-interpreter/
//(2) http://devernay.free.fr/hacks/chip8/C8TECH10.HTM


// test
class Chip8CPU {
    constructor() {
        // Registers
        this.register_V = new Array(16);     // V0 to VF

        // Used for memory addresses 
        this.register_I = 0;                 // Index register I

        // Memory
        this.memory = new Array(4096);      // 4 kilobytes

        // Timers
        this.delay_timer = 0;               // Delay timer (60 hz)
        this.sound_timer = 0;               // Sound timer (60 hz)

        // Program counter
        this.program_counter = 0;           // 0x000 to 0xFFF

        // Stack
        this.stack = new Array(16);         // Stores the value of the program_counter

        // Stack pointer
        this.stack_pointer = 0;             // Points to topmost level of the stack
        
        // Opcodes
        this.opcodes = 0;

        // Keypad
        this.key = new Array(16);         // HEX based keypad (0x0 to 0xF)

        // Graphics
        this.graphics = new Array(2048);    // 64 x 32 = 2048  
        
        // Draw flag
        this.draw_flag = false;

        // Audio
        // Created using the free program http://www.superflashbros.net/as3sfxr/
        // this.audio = new Audio('chip8sound.wav');

        
        // Rom
        this.rom = "";

        this.hexChars = [
            0xF0, 0x90, 0x90, 0x90, 0xF0, // 0
            0x20, 0x60, 0x20, 0x20, 0x70, // 1
            0xF0, 0x10, 0xF0, 0x80, 0xF0, // 2
            0xF0, 0x10, 0xF0, 0x10, 0xF0, // 3
            0x90, 0x90, 0xF0, 0x10, 0x10, // 4
            0xF0, 0x80, 0xF0, 0x10, 0xF0, // 5
            0xF0, 0x80, 0xF0, 0x90, 0xF0, // 6
            0xF0, 0x10, 0x20, 0x40, 0x40, // 7
            0xF0, 0x90, 0xF0, 0x90, 0xF0, // 8
            0xF0, 0x90, 0xF0, 0x10, 0xF0, // 9
            0xF0, 0x90, 0xF0, 0x90, 0x90, // A
            0xE0, 0x90, 0xE0, 0x90, 0xE0, // B
            0xF0, 0x80, 0x80, 0x80, 0xF0, // C
            0xE0, 0x90, 0x90, 0x90, 0xE0, // D
            0xF0, 0x80, 0xF0, 0x80, 0xF0, // E
            0xF0, 0x80, 0xF0, 0x80, 0x80 // F
        ];
    }

    // Resets Chip8 variables
    reset() {
        // Reset registers
        for (let i = 0; i < this.register_V.length; ++i) {
            this.register_V[i] = 0;
        }
        this.register_I = 0;
        // Reset Memory
        for (let i = 0; i < this.memory.length; ++i) {
            this.memory[i] = 0;
        }
        // Reset Timers
        this.delay_timer = 0;
        this.sound_timer = 0;
        // Reset Program counter (starts at 0x200)
        this.program_counter = 0x200;
        // Reset Stack
        for (let i = 0; i < this.stack.length; ++i) {
            this.stack[i] = 0;
        }
        // Reset Stack pointer
        this.stack_pointer = 0;
        // Reset opcodes
        this.opcode = 0;
        // Reset keypad
        this.key = new Array(16);
        // Graphics
        for (let i = 0; i < 2048; ++i) {
            this.graphics[i] = 0;
        }
    }

    // Keyboard Implementation
    /*
    keys on keyboard : map to these keys
    1 2 3 4 : 1 2 3 C
    q w e r : 4 5 6 D
    a s d f : 7 8 9 E
    z x c v : A 0 B F 
    */
    updateKeys(){
        let temp = new Array(16);

        for (let i = 0; i < 16; i++){
            this.key[i] = 0;
            temp[i] = 0;
        }

        document.addEventListener('keydown', function(event) {
            switch(event.keyCode){
                case 88: // x on keyboard is pressed => 0
                    temp[0] = 1;
                    console.log("x:0");
                    break; 
                case 49: // 1 on keyboard is pressed => 1
                    temp[1] = 1;
                    console.log("1:1");
                    break;
                case 50: // 2 on keyboard is pressed => 2
                    temp[2] = 1;
                    console.log("2:2");
                    break;
                case 51: // 3 on keyboard is pressed => 3
                    temp[3] = 1
                    console.log("3:3");
                    break;
                case 81: // q on keyboard is pressed => 4
                    temp[4] = 1;
                    console.log("q:4");
                    break;
                case 87: // w on keyboard is pressed => 5
                    temp[5] = 1;
                    console.log("w:5");
                    break;
                case 69: // e on keyboard is pressed => 6
                    temp[6] = 1;
                    console.log("e:6");
                    break;
                case 65: // a on keyboard is pressed => 7
                    temp[7] = 1;
                    console.log("a:7");
                    break;
                case 83: // s on keyboard is pressed => 8
                    temp[8] = 1;
                    console.log("s:8");
                    break;
                case 68: // d on keyboard is pressed => 9
                    temp[9] = 1;
                    console.log("d:9");
                    break;
                case 90: // z on keyboard is pressed => A
                    temp[10] = 1;
                    console.log("z:A");
                    break;
                case 67: // c on keybaord is pressed => B
                    temp[11] = 1;
                    console.log("c:B");
                    break;
                case 52: // 4 on keyboard is pressed => C
                    temp[12] = 1;
                    console.log("4:C");
                    break;
                case 82: // r on keyboard is pressed => D
                    temp[13] = 1;
                    console.log("r:D");
                    break;
                case 70: // f on keyboard is pressed => E
                    temp[14] = 1;
                    console.log("f:E");
                    break;
                case 86: // v on keybaord is pressed => F
                    temp[15] = 1;
                    console.log("v:F");
                    break;
            }
        });
        for (let i=0; i < 16; i++){
            this.key[i] = temp[i];
        }
    }

    loadrom(romfile) {  // (1 Reference)
        for (let i = 0; i < romfile.length; ++i) {
            this.memory[i + 512] = romfile[i];
        }

    }

    fetchOpcode() {           // (1 Reference)
        this.opcode = (this.memory[this.program_counter] << 8) | this.memory[this.program_counter + 1];
    }

    // Determine which Opcode is in memory
    decodeOpcode() {
        //reference https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Bitwise_Operators
        let x = (this.opcode & 0x0F00) >> 8; //shifts bits to the right
        let y = (this.opcode & 0x00F0) >> 4; //shifts bits to the right
        
        console.log(this.program_counter);
        this.program_counter += 2;

        switch(this.opcode & 0xF000) {
            case 0x0000:
                switch(this.opcode & 0x000F) {
                    case 0x0000:
                        this.opcode0x00E0();
                        break;

                    case 0x000E:
                        this.opcode0x00EE();
                        break;
                }
            break;

            case 0x1000:
                this.opcode0x1NNN();
                break;

            case 0x2000:
                this.opcode0x2NNN();
                break;

            case 0x3000:
                this.opcode0x3XKK();
                break;

            case 0x4000:
                this.opcode0x4XKK(x);
                break;

            case 0x5000:
                this.opcode0x5XY0(x, y);
                break;
            
            case 0x6000:
                this.opcode0x6XKK(x);
                break;

            case 0x7000:
                this.opcode0x7XKK(x);
                break;

            case 0x8000:
                switch(this.opcode & 0x000F) {
                    case 0x0000:
                        this.opcode0x8XY0 (x, y);
                        break;

                    case 0x0001:
                        this.opcode0x8XY1 (x, y);
                        break;

                    case 0x0002:
                        this.opcode0x8XY2 (x, y);
                        break;

                    case 0x0003:
                        this.opcode0x8XY3 (x, y);
                        break;

                    case 0x0004:
                        this.opcode0x8XY4 (x, y);
                        break;

                    case 0x0005:
                        this.opcode0x8XY5 (x, y);
                        break;

                    case 0x0006:
                        this.opcode0x8XY6 (x);
                        break;

                    case 0x0007:
                        this.opcode0x8XY7 (x, y);
                        break;

                    case 0x000E:
                        this.opcode0x8XYE(x);
                        break;
                }
            break;

            case 0x9000:
                this.opcode0x9XY0();
                break;

            case 0xA000:
                this.opcode0xANNN();
                break;

            case 0xB000:
                this.opcode0xBNNN();
                break;

            case 0xC000:
                this.opcode0xCXKK(x);
                break;

            case 0xD000:
                this.opcode0xDXYN();
                break;

            case 0xE000:
                switch(this.opcode & 0x00F0) {
                    case 0x0090:
                        this.opcode0xEX9E();
                        break;
                    
                    case 0x00A0:
                        this.opcode0xEXA1();
                        break;
                }
            break;

            case 0xF000:
                switch(this.opcode & 0x00F0) {
                    case 0x0000:
                        switch(this.opcode & 0x000F) {
                            case 0x0007:
                                this.opcode0xFX07();
                                break;
                            case 0x000A:
                                this.opcode0xFX0A();
                            break;

                        }
                    break;

                    case 0x0010:
                        switch(this.opcode & 0x000F) {
                            case 0x0005:
                                this.opcode0xFX15();
                                break;
                            
                            case 0x0008:
                                this.opcode0xFX18();
                                break;

                            case 0x000E:
                                this.opcode0xFX1E();
                                break;
                        }
                    break;

                    case 0x0020:
                        this.opcode0xFX29();
                        break;

                    case 0x0030:
                        this.opcode0xFX33();
                        break;

                    case 0x0050:
                        this.opcode0xFX55(x);
                        break;

                    case 0x0060:
                        this.opcode0xFX65(x);
                        break;
                }
                break;
        
            default:
                console.log("Unknown opcode: " + this.opcode);
        }
    }

    updateTimers() {
        // "The delay timer is active whenever the delay_timer register is non-zero.
        // This timer does nothing more than subtract 1 from the value of delay_timer at the rate of 60Hz" (2)
        if (this.delay_timer > 0) {
            this.delay_timer -= 1;
        }

        // "The sound timer is active whenever the sound timer register is non-zero.
        // This timer also decrements at the rate of 60Hz" (2)
        if (this.sound_timer > 0) {
            // "as long as ST's value is greater than zero, the Chip-8 buzzer will sound" (2)
            // SHOULD MAKE A BEEP NOISE
            // this.audio.play();
            this.sound_timer -= 1
        }
    }

    emulateCycle() {

        // Fetch Opcode 
        this.fetchOpcode();
        // Decode Opcode
        this.decodeOpcode();
        // Execute Opcode (Called from decodeOpcode)

        // Update timers
        this.updateTimers();
        // Updates Keys
        this.updateKeys();
    }

    // OPCODE METHODS
    
    // START OF MATT'S OP CODES
    opcode0x00E0() {
        for (let i = 0; i < this.graphics.length; ++i) {
            this.graphics[i] = 0;
        }
        this.draw_flag = true;
        console.log("Opcode " + this.opcode + ": Clear the screen");
    }

    // http://www.multigesture.net/articles/how-to-write-an-emulator-chip-8-interpreter/
    // http://devernay.free.fr/hacks/chip8/C8TECH10.HTM
    opcode0x00EE() {
        this.stack_pointer -= 1; // Subtracts 1 from the stack pointer
        this.program_counter = this.stack[this.stack_pointer]; // Program counter to the address at the top of the stack
        console.log("Opcode 0x" + this.opcode.toString(16).toUpperCase() + ": The interpreter sets the program counter to the address at the top of the stack, then subtracts 1 from the stack pointer.");
    }

    // http://www.multigesture.net/articles/how-to-write-an-emulator-chip-8-interpreter/
    // http://devernay.free.fr/hacks/chip8/C8TECH10.HTM
    opcode0x0NNN() {
        console.log("Opcode 0x" + this.opcode.toString(16).toUpperCase() + ": This instruction is only used on the old computers on which Chip-8 was originally implemented. It is ignored by modern interpreters.");
    }

    // http://www.multigesture.net/articles/how-to-write-an-emulator-chip-8-interpreter/
    // http://devernay.free.fr/hacks/chip8/C8TECH10.HTM
    opcode0x1NNN() {
        this.program_counter = this.opcode & 0x0FFF;
        console.log("Opcode 0x" + this.opcode.toString(16).toUpperCase() + ": The interpreter sets the program counter to nnn.");
    }

    // http://www.multigesture.net/articles/how-to-write-an-emulator-chip-8-interpreter/
    // http://devernay.free.fr/hacks/chip8/C8TECH10.HTM
    opcode0x2NNN() {
        this.stack[this.stack_pointer] = this.program_counter;
        this.stack_pointer += 1;
        this.program_counter = this.opcode & 0x0FFF;

        console.log("Opcode 0x" + this.opcode.toString(16).toUpperCase() + ": The interpreter increments the stack pointer, then puts the current PC on the top of the stack. The PC is then set to nnn.");
    }

    // http://www.multigesture.net/articles/how-to-write-an-emulator-chip-8-interpreter/
    // http://devernay.free.fr/hacks/chip8/C8TECH10.HTM
    opcode0x3XKK() {
        if ((this.register_V[(this.opcode & 0x0F00) >> 8]) === (this.opcode & 0x00FF)) {
            this.program_counter += 2;
        }

        console.log("Opcode 0x" + this.opcode.toString(16).toUpperCase() + ": The interpreter compares register Vx to kk, and if they are equal, increments the program counter by 2.");
    }

    // Graphics OPCODE
    // http://www.multigesture.net/articles/how-to-write-an-emulator-chip-8-interpreter/
    opcode0xDXYN() {
        let x = this.register_V[(this.opcode & 0x0F00) >> 8];
        let y = this.register_V[(this.opcode & 0x00F0) >> 4];
        let height = this.opcode & 0x000F;
        let pixel;

        this.register_V[0xF] = 0;
        for (let yline = 0; yline < height; yline++) {
            pixel = this.memory[this.register_I + yline];
            for (let xline = 0; xline < 8; xline++) {
                if ((pixel & (0x80 >> xline)) != 0) {
                    if (this.graphics[(x + xline + ((y + yline) * 64))] == 1) {
                        this.register_V[0xF] = 1;
                    }
                    this.graphics[x + xline + ((y + yline) * 64)] ^= 1;
                }
            }
        }

        this.draw_flag = true;

        // TODO: MAY BE WRONG
        // this.program_counter += 2;
        console.log("Opcode 0x" + this.opcode.toString(16).toUpperCase() + ": Graphics opcode");
    }
    // END OF MATT'S OP CODES

    //START OF LARREN'S OP CODES
    opcode0x4XKK (x) {
        if (this.register_V[x] != (this.opcode & 0x00FF) ) {
            this.program_counter += 2;
        }
        console.log("Opcode 0x" + this.opcode.toString(16).toUpperCase() + ": Skip next instruction if Vx != kk.");
    }

    opcode0x5XY0 (x, y) {
        if (this.register_V[x] === this.register_V[y]) {
            this.program_counter += 2;
        } 
        console.log("Opcode 0x" + this.opcode.toString(16).toUpperCase() + ": Skip next instruction if Vx = Vy.");
    }

    opcode0x6XKK (x) {
        this.register_V[x] = this.opcode & 0x00FF;
        console.log("Opcode 0x" + this.opcode.toString(16).toUpperCase() + ": The interpreter puts the value kk into register Vx.");
    }

    opcode0x7XKK (x) {
        let val = (this.opcode & 0x00FF) + this.register_V[x];

        // TODO: ASK LAUREN
        if (val > 255) {
            val -= 256;
        }

        this.register_V[x] = val;
        console.log("Opcode 0x" + this.opcode.toString(16).toUpperCase() + ": Adds the value kk to the value of register Vx, then stores the result in Vx.");
    }

    opcode0x8XY0 (x, y) {
        this.register_V[x] = this.register_V[y];
        console.log("Opcode 0x" + this.opcode.toString(16).toUpperCase() + ": Stores the value of register Vy in register Vx.");
    }

    opcode0x8XY1 (x, y) {
        this.register_V[x] |= this.register_V[y];
        // TODO: MIGH BE BETTER
        //this.register_V[x] = this.register_V[x] = this.register_V[y];
        console.log("Opcode 0x" + this.opcode.toString(16).toUpperCase() + ": Performs a bitwise OR on the values of Vx and Vy, then stores the result in Vx. A bitwise OR compares the corrseponding bits from two values, and if either bit is 1, then the same bit in the result is also 1. Otherwise, it is 0. ");
    }
    //END OF LARREN'S OP CODES

    //START OF RAAD'S OPCODES :)
    opcode0x8XY2 (x, y) {
        this.register_V[x] &= this.register_V[y];
        console.log("Opcode 0x" + this.opcode.toString(16).toUpperCase() + ": Performs a bitwise AND on the values of Vx and Vy, then stores the result in Vx. A bitwise AND compares the corrseponding bits from two values, and if both bits are 1, then the same bit in the result is also 1. Otherwise, it is 0. ");
    }

    opcode0x8XY3 (x, y) {
        this.register_V[x] ^= this.register_V[y];
        console.log("Opcode 0x" + this.opcode.toString(16).toUpperCase() + ": Performs a bitwise exclusive OR on the values of Vx and Vy, then stores the result in Vx. An exclusive OR compares the corrseponding bits from two values, and if the bits are not both the same, then the corresponding bit in the result is set to 1. Otherwise, it is 0. ");
    }

    opcode0x8XY4 (x, y) {
        let sum_x_y = this.register_V[x] + this.register_V[y]; 
        if (sum_x_y <= 255)
        {
            this.register_V[x] += this.register_V[y];
            this.register_V[0xF] = 0; // carry flag is the 16th register so I used the 15th index
        }
        else if (sum_x_y > 255)
        {
            this.register_V[x] = (sum_x_y & 0x00FF); // extracts last 8 bits of the sum as it is greater than 255 (9 bits or more)
            this.register_V[0xF] = 1; // carry flag is the 16th register so I used the 15th index
        }
        console.log("Opcode 0x" + this.opcode.toString(16).toUpperCase() + ": The values of Vx and Vy are added together. If the result is greater than 8 bits (i.e., > 255,) VF is set to 1, otherwise 0. Only the lowest 8 bits of the result are kept, and stored in Vx.");
    }

    opcode0x8XY5 (x, y) {
        if (this.register_V[x] > this.register_V[y])
        {
            this.register_V[x] -= this.register_V[y];
            this.register_V[0xF] = 1; // carry flag is the 16th register so I used the 15th index
        }
        else if (this.register_V[x] <= this.register_V[y])
        {
            this.register_V[x] -=  this.register_V[y];
            this.register_V[0xF] = 0; // carry flag is the 16th register so I used the 15th index
        }
        console.log("Opcode 0x" + this.opcode.toString(16).toUpperCase() + ": If Vx > Vy, then VF is set to 1, otherwise 0. Then Vy is subtracted from Vx, and the results stored in Vx.");
    }

    opcode0x8XY6 (x) {
        //use %2
        if (this.register_V[x] % 2 == 1){
            this.register_V[0xF] = 1; // carry flag is the 16th register so I used the 15th index
            this.register_v[x] = this.register_v[x] / 2; 
        }
        else if (this.register_V[x] % 2 == 0){
            this.register_V[0xF] = 0; // carry flag is the 16th register so I used the 15th index
            this.register_v[x] = this.register_v[x] / 2; 
        }
        console.log("Opcode 0x" + this.opcode.toString(16).toUpperCase() + ": If the least-significant bit of Vx is 1, then VF is set to 1, otherwise 0. Then Vx is divided by 2.");
    }

    opcode0x8XY7 (x, y) { 
        if (this.register_V[y] > this.register_V[x])
        {
            this.register_V[x] = this.register_V[y] - this.register_V[x];
            this.register_V[0xF] = 1; // carry flag is the 16th register so I used the 15th index
        }
        else if (this.register_V[y] <= this.register_V[x])
        {
            this.register_V[x] =  this.register_V[y] - this.register_V[x];
            this.register_V[0xF] = 0; // carry flag is the 16th register so I used the 15th index
        }
        console.log("Opcode 0x" + this.opcode.toString(16).toUpperCase() + ": If Vy > Vx, then VF is set to 1, otherwise 0. Then Vx is subtracted from Vy, and the results stored in Vx.");
    }

    //END OF RAAD'S OPCODES :)
    
    //START OF VARPREET'S OP CODES
    // TODO: VALUES OF OPCODES MAY WRONG
    opcode0xEX9E (){
        //NEEDS FIXING
        let num = this.register_V[(this.opcode & 0x0F00) >> 8];
        if (this.key[num] === 1){
            this.program_counter += 2;
            console.log("incremented");
        }

        console.log("Opcode 0x" + this.opcode.toString(16).toUpperCase() + ": Skip next instruction if key with value of Vx is pressed.");
    }
    opcode0xEXA1 (){
        //NEEDS TESTING
        let num = this.register_V[(this.opcode & 0x0F00) >> 8];
        if (this.key[num] === 0){
            this.program_counter += 2;
        }

        console.log("Opcode 0x" + this.opcode.toString(16).toUpperCase() + ": Skip next instruction if key with value of Vx is not pressed.");
    }
    opcode0xFX07 (){
        //NEEDS TESTING
        this.register_V[(this.opcode & 0x0F00) >> 8] = this.delay_timer;

        console.log("Opcode 0x" + this.opcode.toString(16).toUpperCase() + ": Set Vx = delay timer value.");
    }
    opcode0xFX0A (){
        //NEEDS TESTING
        // TODO: WHILE LOOP PROBABLY
        this.register_V[(this.opcode & 0x0F00) >> 8] = (event.which || event.keyCode);
        console.log("Opcode 0x" + this.opcode.toString(16).toUpperCase() + ": Wait for key press, and store value into Vx.");
    }
    opcode0xFX15 (){
        //NEEDS TESTING
        this.delay_timer = this.register_V[(this.opcode & 0x0F00) >> 8];

        console.log("Opcode 0x" + this.opcode.toString(16).toUpperCase() + ": Set delay timer to Vx.");
    }
    opcode0xFX18 (){
        //NEEDS TESTING
        this.sound_timer = this.register_V[(this.opcode & 0x0F00) >> 8];

        console.log("Opcode 0x" + this.opcode.toString(16).toUpperCase() + ": Set sound timer = Vx.");
    }
    //END OF VARPREET'S OP CODES 

    //START OF NAM'S OPCODES
    opcode0xFX1E(){
        //NEEDS TESTING
        this.register_I += this.register_V[(this.opcode & 0x0F00 >> 8)];

        console.log("Opcode 0x" + this.opcode.toString(16).toUpperCase() + ": Set I = I + Vx");
    }
    opcode0xFX29(){
        // TODO: MAY HAVE TO BE LOOKED AT
        this.register_I = this.register_V[(this.opcode & 0x0F00) >> 8];

        console.log("Opcode 0x" + this.opcode.toString(16).toUpperCase() + ": Set I = location of sprite for digit Vx");
    }   
    opcode0xFX33(){
        //NEEDS TESTING
        // TODO: MAY HAVE TO BE LOOKED
        this.memory[this.register_I] = this.register_V[(this.opcode & 0x0F00) >> 8] / 100;
        this.memory[this.register_I + 1] = (this.register_V[(this.opcode & 0x0F00) >> 8] / 10) % 10;
        this.memory[this.register_I + 2] = (this.register_V[(this.opcode & 0x0F00) >> 8] % 100) % 10;

        console.log("Opcode 0x" + this.opcode.toString(16).toUpperCase() + ": Store BCD representation of Vx in memory locations I, I+1, and I+2");
    }
    opcode0xFX55(x){
        //NEEDS TESTING
        // TODO: MAY NEED TESTING
        for (let i = 0; i <= x ; i++){
            this.memory[this.register_I+i] = this.register_V[i];
        }
        // TODO: MAY BE HERE IMPORTANT
        // this.register_I += x + 1;

        console.log("Opcode 0x" + this.opcode.toString(16).toUpperCase() + ": Store registers V0 through Vx in memory starting at location I.");
    }
    opcode0xFX65(x){
        //NEEDS TESTING
        for (let i = 0; i <= x ; i++){
            this.register_V[this.register_I+i] = this.memory[i];
        }
        // TODO: MAY BE HERE IMPORTANT
        // this.register_I += x + 1;

        console.log("Opcode 0x" + this.opcode.toString(16).toUpperCase() + ": reads values from memory starting at location I into registers V0 through Vx.");
    }
    //END OF NAM'S OPCODES
    
    //START OF TJ'S OPCODES
    opcode0x8XYE(x){
        if ( (this.register_V[x] >> 7 & 0x0001) == 1){  //MSB = 1
            this.register_V[15] = 1;                    //this register contains VF
        }
        else{
            this.register_V[15] = 0;
        }
        this.register_V[x] = this.register_V[x] << 1;
        this.register_V[x] *= 2;
        this.program_counter += 2;
        console.log("Opcode 0x" + this.opcode.toString(16).toUpperCase() + ": shifts left the register Vx by 1 bit. If MSB is 1 then set VF to 1, 0 otherwise. Then multiply Vx by 2.");
    }

    opcode0x9XY0(x,y){
        if (this.register_V[x] != this.register_V[y]){
            this.program_counter += 2;                  //skipping instruction
        }
        console.log("Opcode 0x" + this.opcode.toString(16).toUpperCase() + ": skips the next instruction if register Vx is NOT equal with Vy. Increments the program counter by FOUR.");
    }

    opcode0xANNN(){
        this.register_I = this.opcode & 0x0FFF;
        console.log("Opcode 0x" + this.opcode.toString(16).toUpperCase() + ": sets register I to nnn");
    }

    opcode0xBNNN(){
        this.program_counter = ( (this.opcode & 0x0FFF) + this.register_V[0] );
        console.log("Opcode 0x" + this.opcode.toString(16).toUpperCase() + ": sets the value of the PC to nnn + register V0");
    }

    opcode0xCXKK(x){
        let randNumber = (Math.random() * (255+1));
        let kk = this.opcode & 0x00FF;
        this.register_V[x] = randNumber & kk;
        console.log("Opcode 0x" + this.opcode.toString(16).toUpperCase() + ": generates a random number b/t 0-255, then bitwise ANDs it with kk, and stores it into Vx.");
    }
    
    //END OF TJ'S OPCODES
}
