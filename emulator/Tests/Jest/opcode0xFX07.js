function opcode0xFX07 (opcode, register_V, delay_timer){
    register_V[(opcode & 0x0F00) >> 8] = delay_timer;
    return register_V[(opcode & 0x0F00) >> 8];
}
module.exports = opcode0xFX07;