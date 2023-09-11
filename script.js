function setItem() {
    window.localStorage.setItem('user',document.getElementById('uname').value)
    document.getElementById('stat').innerHTML = 'Item Set'
}
function getItem() {
    let info = window.localStorage.getItem('user')
    console.log(info)
    if(info == null){
        info = 'Empty storage'
    }
    document.getElementById('stat').innerHTML = info
}
function removeItem(){
    window.localStorage.removeItem('user')
    document.getElementById('stat').innerHTML = 'Item removed'
}