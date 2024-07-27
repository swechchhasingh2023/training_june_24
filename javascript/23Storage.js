localStorage
// save with respect to browser 
//need to remove manually.

localStorage.setItem('keycode','1234')
localStorage.getItem('keycode')
'1234'
localStorage.removeItem('keycode')
undefined

// you can go and check in application tab in browser

sessionStorage
// save with respect to website 
//deleted as soon as tab closed.

sessionStorage.setItem('Tekey', '22222')
sessionStorage.getItem('Tekey')
'22222'

cookies
// save with respect to website
// have expiry time

document.cookie = "cityName=Delhi; expires=Sun, 7 July 2024 12:00:00 UTC"
'cityName=Delhi; expires=Sun, 7 July 2024 12:00:00 UTC'


