// START OF MATT'S OP CODES
// opcode0x00E0() {
//     for (let i = 0; i < this.graphics.length; ++i) {
//         this.graphics[i] = 0;
//     }
//     this.draw_flag = true;
//     console.log("Opcode " + this.opcode + ": Clear the screen");
// }
// module.exports = opcode0x00E0;

// http://www.multigesture.net/articles/how-to-write-an-emulator-chip-8-interpreter/
// http://devernay.free.fr/hacks/chip8/C8TECH10.HTM
opcode0x00EE(stack_pointer) {
    stack_pointer -= 1; // Subtracts 1 from the stack pointer
    this.program_counter = this.stack[this.stack_pointer]; // Program counter to the address at the top of the stack
    console.log("Opcode 0x" + this.opcode.toString(16).toUpperCase() + ": The interpreter sets the program counter to the address at the top of the stack, then subtracts 1 from the stack pointer.");
    return stack_pointer;
}
module.exports = opcode0x00EE;

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