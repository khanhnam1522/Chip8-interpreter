function opcode0x8XY2 (x, y, register_V) {
    register_V[x] &= register_V[y];
    return register_V[x];
}
module.exports = opcode0x8XY2;