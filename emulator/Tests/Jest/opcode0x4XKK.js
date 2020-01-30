function opcode0x4XKK (register_V, x, opcode, program_counter) {
    if (register_V[x] != (opcode & 0x00FF) ) {
        program_counter += 2;
        return program_counter;
    }
    return program_counter;
}
module.exports = opcode0x4XKK;