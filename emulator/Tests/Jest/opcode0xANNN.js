function opcode0xANNN(register_I, opcode){
    register_I = opcode & 0x0FFF;
    return register_I;
}
module.exports = opcode0xANNN;