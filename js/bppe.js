$(function(){var link=$('[data-bppe-catlog-link]')
link.click(function(event){var secret=prompt("Auth Token:"),secret=secret&&secret.trim().toLowerCase()
if(secret&&633606805===hsh(secret)){link.attr('href',link.attr('href').replace('PW',secret))}else{event.preventDefault()
alert('Incorrect Auth Token')}})
function hsh(s){return s.split("").reduce(function(a,b){a=((a<<5)-a)+b.charCodeAt(0);return a&a},0);}})