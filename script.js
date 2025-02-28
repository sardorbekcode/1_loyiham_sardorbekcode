const insert = document.querySelector('#insert');

window.addEventListener('keydown', (e) => {

    insert.innerHTML = `
    <div class="key">
    ${e.key == ' ' ? 'Space' : e.key}
    <small>event.key</small>
    </div>
    
    <div class="key">
    ${e.keyCode}
    <small>event.keyCode</small>
    </div>

    <div class="key">
    ${e.code}
    <small>event.code</small>
    </div>

    <div class="key">
    ${e.altKey}
    <small>altKey</small>
    </div>

    <div class="key">
    ${e.shiftKey}
    <small>shiftKey</small>
    </div>

    <div class="key">
    ${e.ctrlKey}
    <small>ctrlKey</small>
    </div>
    `
    console.log(e);
    
});