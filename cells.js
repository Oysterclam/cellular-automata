world_width = 200;
world_height = 200;
cell_size = 5;
ruleset = [0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1, 1, 1, 0, 0, 0, 1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
rulestring = "00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001010111110110011000111010101001000111111110111110101101110110110110001010111111111111111111111111111101011110010011011011110000101001101110110111101110000000111111011111001101101110011010110101111110000111110101101110001011111111110111111111110011111011101111111111110001011111010110001100111101111001111110001111101111110111111111110010101111111111001111011111111111"
ruleset = stringToRuleset(rulestring);

interval = 1;

cellArray = new Array(world_width);
for (i = 0; i < world_width; i++) {
    cellArray[i] = new Array(world_height);
}
class Cell {
    constructor(x, y, state) {
        this.x = x;
        this.y = y;
        this.state = state;
        this.nextState = state;
    }
    update(cnn, cne, cee, cse, css, csw, cww, cnw, ruleset) {
        var stateCode = 256 * cnn.state +
            128 * cne.state +
            64 * cee.state +
            32 * cse.state +
            16 * css.state +
            8 * csw.state +
            4 * cww.state +
            2 * cnw.state +
            this.state;
        this.nextState = ruleset[stateCode];
    }
}

function stringToRuleset(rulestring) {
    ruleArray = new Array(512);
    for (i = 0; i < 512; i++) {
        if (parseInt(rulestring.charAt(i))) {
            ruleArray[i] = 1;
        } else {
            ruleArray[i] = 0;
        }
    }
    return ruleArray;
}

function draw() {
    var canvas = document.getElementById('canvas');
    if (canvas.getContext) {
        var context = canvas.getContext('2d');
        for (i = 0; i < world_width; i++) {
            for (j = 0; j < world_height; j++) {
                cellArray[i][j] = new Cell(i, j, Math.floor(Math.random() * 2));
            }
        }
        updateStep();
        drawRulesetPicker();
    }
}

function startCellUpdate() {
    // creates a new interval object every time? So clear it before starting. This creates new ID every time though
    clearInterval(interval);
    interval = setInterval(updateStep, 50);
}

function stopCellUpdate() {
    clearInterval(interval);
}

function resetCells() {
    clearInterval(interval);
    for (i = 0; i < world_width; i++) {
        for (j = 0; j < world_height; j++) {
            cellArray[i][j].state = Math.floor(Math.random() * 2);
        }
    }
    interval = setInterval(updateStep, 50);
}

function newCode() {
    ruleset = stringToRuleset(document.getElementById("newCodeInput").value);
}

function randomCode() {
    for (i = 0; i < 512; i++) {
        ruleset[i] = Math.floor(Math.random() * 2);
    }
}

function updateStep() {
    var canvas = document.getElementById('canvas');
    if (canvas.getContext) {
        var context = canvas.getContext('2d');
        for (i = 0; i < world_width; i++) {
            for (j = 0; j < world_height; j++) {
                current_cell = cellArray[i][j];
                current_cell.update(cellArray[i][(j + 1) % world_height], cellArray[(i + 1) % world_width][(j + 1) % world_height], cellArray[(i + 1) % world_width][j], cellArray[(i + 1) % world_width][(j + world_height - 1) % world_height], cellArray[i][(j + world_height - 1) % world_height], cellArray[(i + world_width - 1) % world_width][(j + world_height - 1) % world_height], cellArray[(i + world_width - 1) % world_width][j], cellArray[(i + world_width - 1) % world_width][(j + 1) % world_height], ruleset);
            }
        }
        for (i = 0; i < world_width; i++) {
            for (j = 0; j < world_height; j++) {
                current_cell = cellArray[i][j];
                if (current_cell.state == 1) {
                    context.fillStyle = '#000000';
                } else {
                    context.fillStyle = '#FFFFFF';
                }
                context.fillRect(cell_size * i, cell_size * j, cell_size, cell_size);
                current_cell.state = current_cell.nextState;
            }
        }
    }
}

function drawRulesetPicker() { 
    rule_cell_size = 10;
    row_length = 32;
    var canvas = document.getElementById('rulesetCanvas');
    if (canvas.getContext) {
        var context = canvas.getContext('2d');
        current_ruleset_cell = 0;
        y_offset = 10;

        while(current_ruleset_cell < 512){
            for(x=0;x<row_length;x++){
                x_offset = 4 * rule_cell_size * x + rule_cell_size * x;
                context.fillStyle = '#000000';
                for(i=0;i<3;i++){
                    for(j=0;j<3;j++){
                        context.fillRect(x_offset + rule_cell_size * i, y_offset + rule_cell_size * j, rule_cell_size, rule_cell_size);
                        context.clearRect(x_offset + rule_cell_size * i + 1, y_offset + rule_cell_size * j + 1, rule_cell_size - 2, rule_cell_size - 2);
                    }
                }
                context.fillText("1", x_offset + rule_cell_size + 2 , y_offset + 4*rule_cell_size);
                current_ruleset_cell+=1;
                console.log(x_offset,y_offset);
            }   
            y_offset += 5 * rule_cell_size;

        }
        

    }
}













