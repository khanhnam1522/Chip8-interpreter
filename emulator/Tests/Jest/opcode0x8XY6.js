function opcode0x8XY6 (x, register_V) {
    //use %2
    if (register_V[x] % 2 == 1){
        register_V[0xF] = 1; // carry flag is the 16th register so I used the 15th index
        register_V[x] = register_V[x] / 2; 
        return register_V[x];
    }
    else if (register_V[x] % 2 == 0){
        register_V[0xF] = 0; // carry flag is the 16th register so I used the 15th index
        register_V[x] = register_V[x] / 2; 
        return register_V[x];
    }
}
module.exports = opcode0x8XY6;