export const textCrop = (text) => {
    let arr = []
    let crop = text.split(" ")
    for(let i = 0; i < 30; i++){
        arr.push(crop[i])
    }
    let cropText = [...arr, '...']
    return cropText.join(' ')
}
