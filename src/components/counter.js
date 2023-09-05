export function Counter() {
  
    return (
        `
            <div class="c">
                <button style="padding:8px;width:150px;border:0;box-shadow:4px 5px 10px rgba(0,0,0,0.5);" click="${somar()}">Counter</button>
                <span style="font-size:18px;margin-left:30px;">${somar()}</span>
            </div>
        
        `
    )
}

function somar() {
    let counter = 0;
    return counter = counter + 1;
}
