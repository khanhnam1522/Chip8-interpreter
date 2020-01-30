function opcode0x6XKK (register_V, x, opcode) {
    register_V[x] = opcode & 0x00FF;
    return register_V[x];
}
module.exports = opcode0x6XKK;