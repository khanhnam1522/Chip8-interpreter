function opcode0xEXA1 (opcode, program_counter, register_V, key){
    let num = register_V[(opcode & 0x0F00) >> 8];
    if (key[num] === 0){
        program_counter += 2;
    }
    return program_counter;
}
module.exports = opcode0xEXA1;