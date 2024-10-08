function stringClean(s) {
    return s.split('').filter(f => !+f && f !== '0').join('')
}