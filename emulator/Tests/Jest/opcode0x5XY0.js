function opcode0x5XY0 (register_V, x, y, program_counter) {
    if (register_V[x] === register_V[y]) {
        program_counter += 2;
        return program_counter;
    } 
    return program_counter;
}
module.exports = opcode0x5XY0;