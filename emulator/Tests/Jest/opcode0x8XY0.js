function opcode0x8XY0 (register_V, x, y) {
    register_V[x] = register_V[y];
    return register_V[x];
}
module.exports = opcode0x8XY0;