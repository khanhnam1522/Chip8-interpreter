function opcode0x1NNN(program_counter, opcode) {
    program_counter = opcode & 0x0FFF;
    return program_counter;
}
module.exports = opcode0x1NNN;