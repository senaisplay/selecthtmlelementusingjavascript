//#region Selection by ID
const userList = document.getElementById('userList')
const clearButton = document.getElementById('clearButton')
clearButton.addEventListener('click', (ev) => {
    userList.innerHTML = ''
})
//#endregion

//#region Selection by class
let users = document.getElementsByClassName('user')
for(let user of users)
    user.addEventListener('click', (ev) => {
        user.style.background = 'red'
    })
//#region 

//#region CSS-like selection
let selectedUsers =
    document.querySelectorAll('.userList li:nth-child(2)')
for(let selectedUser of selectedUsers)
    selectedUser.addEventListener('mouseover', (ev) => {
        selectedUser.style.fontWeight = 900
    })
//#endregion