function opcode0xFX18(opcode, sound_timer, register_V){
    sound_timer = register_V[(opcode & 0x0F00) >> 8];
    return sound_timer;
}
module.exports = opcode0xFX18;