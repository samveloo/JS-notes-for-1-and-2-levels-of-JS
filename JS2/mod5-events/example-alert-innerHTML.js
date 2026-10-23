document
    .querySelectorAll('body')
    .forEach(
        el => el.onclick = function(){ alert(this.innerHTML) }
    )