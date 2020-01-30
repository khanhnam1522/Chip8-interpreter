function opcode0x00E0(graphics, draw_flag) {
    for (let i = 0; i < graphics.length; ++i) {
        graphics[i] = 0;
    }
    draw_flag = true;
    return draw_flag, graphics;
}
module.exports = opcode0x00E0;