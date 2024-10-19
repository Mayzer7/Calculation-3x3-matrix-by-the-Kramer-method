const refreshButton = document.getElementById("refreshButton");

refreshButton.addEventListener("click", function() {
    location.reload(); 
});


const first_line= document.getElementById('first_line')

const middle_line = document.getElementById('middle_line')

const second_line = document.getElementById('second_line')

const resultButton = document.getElementById("resultButton")

const fl_one = document.getElementById("fl_one")
const fl_two = document.getElementById("fl_two")
const fl_three = document.getElementById("fl_three")
const fl_four = document.getElementById("fl_four")

const ml_one = document.getElementById("ml_one")
const ml_two = document.getElementById("ml_two")
const ml_three = document.getElementById("ml_three")
const ml_four = document.getElementById("ml_four")

const sl_one = document.getElementById("sl_one")
const sl_two = document.getElementById("sl_two")
const sl_three = document.getElementById("sl_three")
const sl_four = document.getElementById("sl_four")

const result_line_one = document.getElementById("result_line_one")

const result_line_two = document.getElementById("result_line_two")

const result_line_three = document.getElementById("result_line_three")



const result_2_line_one = document.getElementById("result_2_line_one")

const result_2_line_two = document.getElementById("result_2_line_two")

const result_2_line_three = document.getElementById("result_2_line_three")



const result_3_line_one = document.getElementById("result_3_line_one")

const result_3_line_two = document.getElementById("result_3_line_two")

const result_3_line_three = document.getElementById("result_3_line_three")



const result_4_line_one = document.getElementById("result_4_line_one")

const result_4_line_two = document.getElementById("result_4_line_two")

const result_4_line_three = document.getElementById("result_4_line_three")

const resultsX = document.getElementById("resultsX")


resultButton.addEventListener("click", function(){
    if (fl_one.value !== "" && fl_two.value !== "" && fl_three.value !== "" && fl_four !== "" && ml_one.value !== "" && ml_two.value !== "" && ml_three.value !== "" && ml_four !== "" && sl_one.value !== "" && sl_two.value !== "" && sl_three.value !== "" && sl_four !== ""){
        
        
        let determinantMatrix = fl_one.value * ml_two.value * sl_three.value + ml_one.value * sl_two.value * fl_three.value + fl_two.value * ml_three.value * sl_one.value - sl_one.value * ml_two.value * fl_three.value - fl_two.value * ml_one.value * sl_three.value - sl_two.value * ml_three.value * fl_one.value

            let determinantMatrixX1 = fl_four.value * ml_two.value * sl_three.value + ml_four.value * sl_two.value * fl_three.value + fl_two.value * ml_three.value * sl_four.value - sl_four.value * ml_two.value * fl_three.value - fl_two.value * ml_four.value * sl_three.value - sl_two.value * ml_three.value * fl_four.value

            let determinantMatrixX2 = fl_one.value * ml_four.value * sl_three.value + ml_one.value * sl_four.value * fl_three.value + fl_four.value * ml_three.value * sl_one.value - sl_one.value * ml_four.value * fl_three.value - fl_four.value * ml_one.value * sl_three.value - sl_four.value * ml_three.value * fl_one.value

            let determinantMatrixX3 = fl_one.value * ml_two.value * sl_four.value + ml_one.value * sl_two.value * fl_four.value + fl_two.value * ml_four.value * sl_one.value - sl_one.value * ml_two.value * fl_four.value - fl_two.value * ml_one.value * sl_four.value - sl_two.value * ml_four.value * fl_one.value

            let x1 = determinantMatrixX1 / determinantMatrix

            let x2 = determinantMatrixX2 / determinantMatrix

            let x3 = determinantMatrixX3 / determinantMatrix

            result_line_one.innerHTML = `
                <div class="rl_number">|${fl_one.value}</div>
    
                <div class="rl_number">${fl_two.value}</div>
    
                <div class="rl_number">${fl_three.value}|</div>
            `;

            result_line_two.innerHTML = `
                <div class="treangle">△</div>

                <div class="equally">=</div>

                <div class="rl_number">|${ml_one.value}</div>
    
                <div class="rl_number">${ml_two.value}</div>
    
                <div class="rl_number">${ml_three.value}|</div>

                <div class="equally">=</div>
        
                <div class="rl_number">${determinantMatrix}</div>
            `;

            result_line_three.innerHTML = `
                <div class="rl_number">|${sl_one.value}</div>
    
                <div class="rl_number">${sl_two.value}</div>
    
                <div class="rl_number">${sl_three.value}|</div>
            `;



            result_2_line_one.innerHTML = `
                <div class="rl_number">|${fl_four.value}</div>
    
                <div class="rl_number">${fl_two.value}</div>
    
                <div class="rl_number">${fl_three.value}|</div>
            `;

            result_2_line_two.innerHTML = `
                <div class="treangle">△x1</div>

                <div class="equally">=</div>

                <div class="rl_number">|${ml_four.value}</div>
    
                <div class="rl_number">${ml_two.value}</div>
    
                <div class="rl_number">${ml_three.value}|</div>

                <div class="equally">=</div>
        
                <div class="rl_number">${determinantMatrixX1}</div>
            `;

            result_2_line_three.innerHTML = `
                <div class="rl_number">|${sl_four.value}</div>
    
                <div class="rl_number">${sl_two.value}</div>
    
                <div class="rl_number">${sl_three.value}|</div>
            `;





            result_3_line_one.innerHTML = `
                <div class="rl_number">|${fl_one.value}</div>
    
                <div class="rl_number">${fl_four.value}</div>
    
                <div class="rl_number">${fl_three.value}|</div>
            `;

            result_3_line_two.innerHTML = `
                <div class="treangle">△x2</div>

                <div class="equally">=</div>

                <div class="rl_number">|${ml_one.value}</div>
    
                <div class="rl_number">${ml_four.value}</div>
    
                <div class="rl_number">${ml_three.value}|</div>

                <div class="equally">=</div>
        
                <div class="rl_number">${determinantMatrixX2}</div>
            `;

            result_3_line_three.innerHTML = `
                <div class="rl_number">|${sl_one.value}</div>
    
                <div class="rl_number">${sl_four.value}</div>
    
                <div class="rl_number">${sl_three.value}|</div>
            `;







            result_4_line_one.innerHTML = `
                <div class="rl_number">|${fl_one.value}</div>
    
                <div class="rl_number">${fl_two.value}</div>
    
                <div class="rl_number">${fl_four.value}|</div>
            `;

            result_4_line_two.innerHTML = `
                <div class="treangle">△x3</div>

                <div class="equally">=</div>

                <div class="rl_number">|${ml_one.value}</div>
    
                <div class="rl_number">${ml_two.value}</div>
    
                <div class="rl_number">${ml_four.value}|</div>

                <div class="equally">=</div>
        
                <div class="rl_number">${determinantMatrixX3}</div>
            `;

            result_4_line_three.innerHTML = `
                <div class="rl_number">|${sl_one.value}</div>
    
                <div class="rl_number">${sl_two.value}</div>
    
                <div class="rl_number">${sl_four.value}|</div>
            `;

            if (determinantMatrix === 0){
                resultsX.innerHTML = `
                    <div class = "stl">
                        <div class = "rl_number">Определитель матрицы равен нулю,<br> следовательно система не может быть решена этим методом <br>(система не имеет решений или имеет множество решений)</div>
                    </div>
                `;
            }
            else{
                resultsX.innerHTML = `
                    <div class = "stl">
                        <div class = "rl_number">x1 = ${x1}</div>
                        <div class = "rl_number">x2 = ${x2}</div>
                        <div class = "rl_number">x3 = ${x3}</div>
                    </div>
                `;
            }
        }
})




