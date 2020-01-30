function opcode0xFX15 (opcode, delay_timer, register_V){
    delay_timer = register_V[(opcode & 0x0F00) >> 8];
    return delay_timer;
}
module.exports = opcode0xFX15;