const opcode0x00E0 = require('./opcode0x00E0');
const opcode0x00EE = require('./opcode0x00EE');
const opcode0x1NNN = require('./opcode0x1NNN');
const opcode0x2NNN = require('./opcode0x2NNN');
const opcode0x3XKK = require('./opcode0x3XKK');
const opcode0x4XKK = require('./opcode0x4XKK');
const opcode0x5XY0 = require('./opcode0x5XY0');
const opcode0x6XKK = require('./opcode0x6XKK');
const opcode0x7XKK = require('./opcode0x7XKK');
const opcode0x8XY0 = require('./opcode0x8XY0');
const opcode0x8XY1 = require('./opcode0x8XY1');
const opcode0x8XY2 = require('./opcode0x8XY2');
const opcode0x8XY3 = require('./opcode0x8XY3');
const opcode0x8XY4 = require('./opcode0x8XY4');
const opcode0x8XY5 = require('./opcode0x8XY5');
const opcode0x8XY6 = require('./opcode0x8XY6');
const opcode0x8XY7 = require('./opcode0x8XY7');
const opcode0xEX9E = require('./opcode0xEX9E');
const opcode0xEXA1 = require('./opcode0xEXA1');
const opcode0xFX07 = require('./opcode0xFX07');
const opcode0xFX15 = require('./opcode0xFX15');
const opcode0xFX18 = require('./opcode0xFX18');
const opcode0x8XYE = require('./opcode0x8XYE');
const opcode0x9XY0 = require('./opcode0x9XY0');
const opcode0xANNN = require('./opcode0xANNN');
const opcode0xBNNN = require('./opcode0xBNNN');
const opcode0xCXKK = require('./opcode0xCXKK');
const opcode0xFX1E = require('./opcode0xFX1E');
const opcode0xFX29 = require('./opcode0xFX29');
const opcode0xFX33 = require('./opcode0xFX33');
const opcode0xFX55 = require('./opcode0xFX55');
const opcode0xFX65 = require('./opcode0xFX65');
registers = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];

test('Clear the screen', () => {
  expect(opcode0x00E0([5, 4, 2, 3], false)).toEqual([0, 0, 0, 0], true);
});

test('Clear the screen', () => {
  expect(opcode0x00E0([5, 4, 2, 3], false)).toEqual([0, 0, 0, 0], true);
});

test('The interpreter sets the program counter to the address at the top of the stack, then subtracts 1 from the stack pointer', () => {
  expect(opcode0x00EE(1, 0, [0, 1])).toBe(0, 0);
});

test('The interpreter sets the program counter to the address at the top of the stack, then subtracts 1 from the stack pointer', () => {
  expect(opcode0x00EE(1, 0, [0, 1])).toBe(0, 0);
});

test('The interpreter sets the program counter to nnn.', () => {
  for(let i=0; i<0xFFF; i++){
    expect(opcode0x1NNN(0, i|0x1000)).toBe(i & 0x0FFF);
  }
});

test('The interpreter increments the stack pointer, then puts the current PC on the top of the stack. The PC is then set to nnn.', () => {
  expect(opcode0x2NNN([0, 0, 0, 0], 0, 5, 0xFFFF)).toEqual([5, 0, 0, 0], 1, 0x0FFF);
});

registers = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
test('The interpreter compares register Vx to kk, and if they are equal, increments the program counter by 2.', () => {
  for(let x=0; x < 0xF; x++){
    for(let k=0; k < 0xFF; k++){
      if (x == k){
        expect(opcode0x3XKK(registers, 0x3000 | (x << 8) | k , 0)).toBe(2);
      }
      else{
        expect(opcode0x3XKK(registers, 0x3000 | (x << 8) | k , 0)).toBe(0);
      }
    }
  }
});

registers = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
test('Skip next instruction if Vx != kk.', () => {
  for(let x=0; x < 0xF; x++){
    for(let k=0; k < 0xFF; k++){
      if (x == k){
        expect(opcode0x4XKK(registers, x, 0x4000 | (x << 8) | k , 0)).toBe(0);
      }
      else{
        expect(opcode0x4XKK(registers, x, 0x4000 | (x << 8) | k , 0)).toBe(2);
      }
    }
  }
});

registers = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
test('Skip next instruction if Vx == Vy.', () => {
  for(let x=0; x < 0xF; x++){
    for(let y=0; y < 0xF; y++){
      if (x == y){
        expect(opcode0x5XY0(registers, x, y, 0)).toBe(2);
      }
      else{
        expect(opcode0x5XY0(registers, x, y, 0)).toBe(0);
      }
    }
  }
});

registers = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
test('The interpreter puts the value kk into register Vx.', () => {
  for(let x=0; x < 0xF; x++){
    for(let k=0; k < 0xFF; k++){
      expect(opcode0x6XKK(registers, x, 0x6000 | (x << 8) | k)).toBe(k);
      registers = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
    }
  }
});

registers = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
test('Adds the value kk to the value of register Vx, then stores the result in Vx.', () => {
  for(let x=0; x < 0xF; x++){
    for(let k=0; k < 0xFF; k++){
      expect(opcode0x7XKK(0x7000 | (x << 8) | k, registers, x)).toBe((k + x) % 256);
      registers = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
    }
  }
});

registers = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
test('Stores the value of register Vy in register Vx.', () => {
  for(let x=0; x<0xF; x++){
    for(let y=0; y<0xF; y++){
      expect(opcode0x8XY0(registers, x, y)).toBe(y);
      registers = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
    }
  }
});

registers = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
keys = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
test('Skips next instruction if key with value at Vx is pressed', () => {
  for (let x=0; x<0xF; x++){
    for (let k=0; k<0xF; k++){
      keys[k] = 1;
      if (k == x){
        expect(opcode0xEX9E(0xE09E | (x << 8), 0, registers, keys)).toBe(2);
      }
      else{
        expect(opcode0xEX9E(0xE09E | (x << 8), 0, registers, keys)).toBe(0);
      }
      keys = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]; 
    }
  }
});

registers = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
keys = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
test('Skips next instruction if key with value at Vx is not pressed', () => {
  for (let x=0; x<0xF; x++){
    for (let k=0; k<0xF; k++){
      keys[k] = 1;
      if (k != x){
        expect(opcode0xEXA1(0xE0A1 | (x << 8), 0, registers, keys)).toBe(2);
      }
      else{
        expect(opcode0xEXA1(0xE0A1 | (x << 8), 0, registers, keys)).toBe(0);
      }
      keys = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]; 
    }
  }
});

registers = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
test('Sets value at Vx to delay timer', () => {
  for(let x=0; x<0xF; x++){
    registers = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
    expect(opcode0xFX07(0xF007 | (x<<8), registers, x)).toBe(x);
  }
});

registers = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
test('sets delay timer to value at Vx', () => {
  for (let x=0; x<0xF; x++){
    expect(opcode0xFX15(0xF015 | (x<<8), 0, registers)).toBe(x);
  }
});

registers = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
test('set sound timer to value at Vx', () => {
  for (let x=0; x<0xF; x++){
    expect(opcode0xFX18(0xF018 | (x<<8), 0, registers)).toBe(x);
  }
});

registers = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
test('If the most-significant bit of Vx is 1, then VF is set to 1, otherwise to 0. Then Vx is multiplied by 2.', () => {
  for (let x=0; x<0xF; x++){
    expect(opcode0x8XYE(registers, x, 0)).toEqual(0);
    registers = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
  }
});

registers = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
test('The values of Vx and Vy are compared, and if they are not equal, the program counter is increased by 2.', () => {
  for (let x=0; x<0xF; x++){
    for (let y=0; y<0xF; y++){
      if (x == y){
        expect(opcode0x9XY0(registers, x, y, 0)).toEqual(0);
      }
      else{
        expect(opcode0x9XY0(registers, x, y, 0)).toEqual(2);
      }
    }
  }
});

test('The value of register I is set to nnn.', () => {
  for (let n=0; n<0x1000; n++){
    expect(opcode0xANNN(0, 0xA000 | n)).toBe(n);
  }
});

registers = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
test('The program counter is set to nnn plus the value of V0.', () => {
  for (let x=0; x<0x100; x++){
    registers = [x,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
    for (let n=0; n<0x1000; n++){
      expect(opcode0xBNNN(registers, 0xB000 | n, 0)).toBe(x+n);
    }
  }
});

registers = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
test('Set I = I + Vx',() =>{
  for (let x=0; x<0xF; x++){
    for (let i=0; i<0x100; i++){
      registers = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
      expect(opcode0xFX1E(i, registers, 0xF01E| (x<<8))).toBe(x+i);
    }
  }
});

registers = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
test('Set I = location of sprite for digit Vx',() =>{
  for (let x=0; x<0xF; x++){
    registers = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
    for (let n=0; n<0x100; n++){
      registers[x] = n;
      expect(opcode0xFX29(0x100, registers, x)).toBe(n);
    }
  }
});

test('Store BCD representation of Vx in memory locations I, I+1, and I+2',() =>{
  expect(opcode0xFX33([10,15,20,25,30],1,[12,24,36],2)).toEqual([10,0.36,3.6,6,30])
});

test('Store registers V0 through Vx in memory starting at location I.',() =>{
  expect(opcode0xFX55([30,30,50,60,70],1,[5,6,7,8,9],2)).toEqual([30,5,6,7,70])
});

test('reads values from memory starting at location I into registers V0 through Vx.',()=>{
  expect(opcode0xFX65([5,10,15,20,25,30],3,[6,7,8,9,10,12,15,17],3)).toEqual([6,7,8,5,10,15,20,17])
});

registers = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
test('generates a random number b/t 0-255, then bitwise ANDs it with kk, and stores it into Vx.',()=>{
  for (let x=0; x<0xF; x++){
    for (let k=0; k<0x100; k++){
      expect(opcode0xCXKK(x, 0xC000 | (x<<8) | k, registers)).toBe(k);
      registers = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
    }
  }
});

registers = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
test('Performs a bitwise OR on the values of Vx and Vy, then stores the result in Vx. A bitwise OR compares the corrseponding bits from two values, and if either bit is 1, then the same bit in the result is also 1. Otherwise, it is 0.',()=>{
  for (let x=0; x<0xF; x++){
    for (let y=0; y<0xF; y++){
      expect(opcode0x8XY1(x, y, registers)).toBe(x | y);
      registers = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
    }
  }
});

registers = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
test('Performs a bitwise AND on the values of Vx and Vy, then stores the result in Vx. A bitwise AND compares the corrseponding bits from two values, and if both bits are 1, then the same bit in the result is also 1. Otherwise, it is 0.',()=>{
  for (let x=0; x<0xF; x++){
    for (let y=0; y<0xF; y++){
      expect(opcode0x8XY2(x, y, registers)).toBe(x & y);
      registers = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
    }
  }
});

registers = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
test('Performs a bitwise exclusive OR on the values of Vx and Vy, then stores the result in Vx. An exclusive OR compares the corrseponding bits from two values, and if the bits are not both the same, then the corresponding bit in the result is set to 1. Otherwise, it is 0.',()=>{
  for (let x=0; x<0xF; x++){
    for (let y=0; y<0xF; y++){
      expect(opcode0x8XY3(x, y, registers)).toBe(x ^ y);
      registers = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
    }
  }
});

registers = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
test('The values of Vx and Vy are added together. If the result is greater than 8 bits (i.e., > 255,) VF is set to 1, otherwise 0. Only the lowest 8 bits of the result are kept, and stored in Vx.',()=>{
  for (let x=0; x<0xF; x++){
    for (let y=0; y<0xF; y++){
      expect(opcode0x8XY4(x, y, registers)).toBe(x + y);
      registers = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
    }
  }
});

registers = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
test('If Vx > Vy, then VF is set to 1, otherwise 0. Then Vy is subtracted from Vx, and the results stored in Vx.',()=>{
  for (let x=0; x<0xF; x++){
    for(let y=0; y<0xF; y++){
      expect(opcode0x8XY5(x, y, registers)).toBe(x - y);
      registers = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
    }
  }
});

registers = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
test('If the least-significant bit of Vx is 1, then VF is set to 1, otherwise 0. Then Vx is divided by 2.',()=>{
  for (let x=0; x<0xF; x++){
    expect(opcode0x8XY6(x, registers)).toEqual(x/2);
    registers = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
  }  
});

test('If Vy > Vx, then VF is set to 1, otherwise 0. Then Vx is subtracted from Vy, and the results stored in Vx.',()=>{
  for (let x=0; x<0xF; x++){
    for(let y=0; y<0xF; y++){
      expect(opcode0x8XY7(x, y, registers)).toBe(y - x);
      registers = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
    }
  }
});