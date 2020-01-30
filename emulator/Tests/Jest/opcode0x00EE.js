function opcode0x00EE(stack_pointer, program_counter, stack) {
    stack_pointer -= 1; // Subtracts 1 from the stack pointer
    program_counter = stack[stack_pointer]; // Program counter to the address at the top of the stack
    return stack_pointer, program_counter;
}
module.exports = opcode0x00EE;