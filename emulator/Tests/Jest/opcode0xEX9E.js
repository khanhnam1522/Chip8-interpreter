function opcode0xEX9E (opcode, program_counter, register_V, key){
    let num = register_V[(opcode & 0x0F00) >> 8];
    if (key[num] === 1){
        program_counter += 2;
    }
    return program_counter;
}
module.exports = opcode0xEX9E;