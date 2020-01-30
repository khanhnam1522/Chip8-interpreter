function opcode0x7XKK (opcode, register_V, x) {
    let val = (opcode & 0x00FF) + register_V[x];

    // TODO: ASK LAUREN
    if (val > 255) {
        val -= 256;
    }

    register_V[x] = val;
    return register_V[x];
}
module.exports = opcode0x7XKK;