export function appendSymbol(input,value){
    
    if (value === 'c') // clear
        input.value = ''
    
    else if (value === '←'){ // delete the last dig
        let buff = input.value
        // if it is operaiton, we need to remove 3 characters
        if(buff[buff.length - 1] == ' ') buff = buff.substring(0, buff.length - 3)
        // otherwise remove just the digit
        else buff = buff.substring(0, buff.length - 1)
        input.value = buff;
    }
    else if (value === '=')  // solve the task
        solve(input)
    
    else if (value === '.'){  // decimal point can't be separated by ' '
        let buff = input.value === '' || input.value[input.value.length - 1] === ' ' ?
                                '0.' : '.';
        input.value += buff
    } 

    else if (input.value.match(/\d+ (\+|-|÷|x) \d+/g)) {
        solve(input) // if we have more than one operation, complete the first one
        input.value += ` ${value} ` // and append the new one
    }

    else if (['+', '-', 'x', '÷'].includes(input.value[input.value.length - 2])) { 
        // if there are two operators one after another swap them
        let buff = input.value
        buff = buff.substring(0, buff.length - 3)
        input.value = buff;
        input.value += ` ${value} ` // add the new operator
    }
    else 
        input.value += ` ${value} ` // if no case is met, just append the operator
}
export function appendDigit(input, value){
    input.value += value
    let elements = input.value.split(' ')

    // validation for 0s before the actual digits
    elements[0] = parseFloat(elements[0])

    // validation for the second element
    if (elements[2]) 
        elements[2] = parseFloat(elements[2])

    // save the changes
    input.value = elements.join(' ')
}
function solve(input){
    const elements = input.value.split(' ')
    switch(elements[1]){
        case '+':
            input.value = parseFloat(elements[0]) + parseFloat(elements[2])
            break
        case '-':
            input.value = parseFloat(elements[0]) - parseFloat(elements[2])
            break
        case 'x':
            input.value = parseFloat(elements[0]) * parseFloat(elements[2])
            break
        case '÷':
            if (elements[2] === '0') {
                alert('You can\'t divide by 0!')
                input.value = ''
                break
            }
            input.value = parseFloat(elements[0]) / parseFloat(elements[2])
            break
        default:
            alert('wrong input')
            break
    }
}