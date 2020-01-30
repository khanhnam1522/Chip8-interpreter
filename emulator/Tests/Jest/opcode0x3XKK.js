function opcode0x3XKK(register_V, opcode, program_counter) {
    if ((register_V[(opcode & 0x0F00) >> 8]) === (opcode & 0x00FF)) {
        program_counter += 2;
        return program_counter;
    }

    return program_counter;
}
module.exports = opcode0x3XKK;