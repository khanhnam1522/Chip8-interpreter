function opcode0xFX1E(register_I,register_V,opcode){
    register_I += register_V[((opcode & 0x0F00) >> 8)];

    return register_I;
}
module.exports = opcode0xFX1E;