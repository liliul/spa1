export function Counter() {
  
    return (
        `
            <div class="c">
                <button click="${somar()}">Counter</button>
                <span>${somar()}</span>
            </div>
        
        `
    )
}

function somar() {
    let counter = 0;
    return counter = counter + 1;
}
