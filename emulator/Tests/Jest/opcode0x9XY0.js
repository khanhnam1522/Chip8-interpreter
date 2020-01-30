function opcode0x9XY0(register_V,x,y,program_counter){
    if (register_V[x] != register_V[y]){
        program_counter += 2;                  //skipping instruction
    }
    return program_counter;
}
module.exports = opcode0x9XY0;
