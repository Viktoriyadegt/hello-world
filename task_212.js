   function titleCase(title, minorWords) {

        if (title) {
            let arr = title.split(' ')
            let k = []
            if (minorWords) {
                let n = minorWords.split(' ').map(m => m.toLowerCase())

                for (let i = 0; i <= arr.length - 1; i++) {
                    if (i && n.includes(arr[i].toLowerCase())) {
                        k.push(arr[i].toLowerCase())
                    } else {
                        k.push(arr[i].split('').map((a, b) => b === 0 ? a.toUpperCase() : a.toLowerCase()).join(''))
                    }
                }
                return k.join(' ')
            } else {
                for (let i = 0; i <= arr.length - 1; i++) {
                    k.push(arr[i].split('').map((a, b) => b === 0 ? a.toUpperCase() : a.toLowerCase()).join(''))
                }
                return k.join(' ')
            }

        } else {
            return title
        }
    }
