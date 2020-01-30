function opcode0xBNNN(register_V,opcode,program_counter){
    program_counter = ( (opcode & 0x0FFF) + register_V[0] );
    return program_counter;
}
module.exports = opcode0xBNNN;