const cellElements = document.querySelectorAll('.cell');

console.log(cellElements);

for(let cell of cellElements){
    cell.addEventListener('click', handleClick , {once:true})
}

let circle_turn = false;        //x turn

let winning_combination = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]

function handleClick(e){
    // mark the symbol X , O
    let clickedCell = e.target;
    let current_class = circle_turn ? 'circle': 'x';
    clickedCell.classList.add(current_class);

    // check win
    if(checkWin(current_class)){
        document.querySelector('.final-winner').innerHTML = `Winner ${current_class}`;
        document.querySelector('.final-winner').parentElement.classList.add('show');
    }

    // check draw
    if(checkDraw()){
        document.querySelector('.final-winner').innerHTML = `Draw`;
        document.querySelector('.final-winner').parentElement.classList.add('show');
    }

    // switch the symbol
    circle_turn = !circle_turn
}

function checkDraw(){
    return [...cellElements].every((cell)=>{
        return cell.classList.contains('x') || cell.classList.contains('circle')
    })
}

function checkWin(current_class){
    return winning_combination.some((itemRow)=>{
        return itemRow.every((item)=>{
            return cellElements[item].classList.contains(current_class)
        })
    })
}

function restartFn(){
    window.location.reload();
}
document.querySelector('.restart').onclick = restartFn;




//local storage
// window.localStorage('setItem')
// window.localStorage('getItem')