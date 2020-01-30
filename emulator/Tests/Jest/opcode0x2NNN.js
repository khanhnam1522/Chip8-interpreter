function opcode0x2NNN(stack, stack_pointer, program_counter, opcode) {
    stack[stack_pointer] = program_counter;
    stack_pointer += 1;
    program_counter = opcode & 0x0FFF;

    return stack_pointer, program_counter, stack;
}
module.exports = opcode0x2NNN;