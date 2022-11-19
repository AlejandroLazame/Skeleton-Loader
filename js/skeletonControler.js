const html = {
    get(elem){
        let res = document.querySelector(elem)
        return res
    },
    setClass(elem,classe){
        elem.classList.add(classe)
        return true
    },
    removeClass(elem,classe){
        elem.classList.remove(classe)
        return true
    }
}

document.addEventListener('DOMContentLoaded',(event)=>{
    
    fetch('./src/MOCK_DATA.json').then((res)=>{
        return res.json()}).then((response)=>{
             console.log(response)
             response.slice(0,3).map((elem,i)=>{
                let index = i + 1
                let title = html.get(`#title_${index}`)
                let subtitle = html.get(`#subtitle_${index}`)
                let content = html.get(`#content_${index}`)
                let image = html.get(`#img_${index}`)

                html.removeClass(title,'skeleton')
                title.innerHTML = elem.Titulo
                
                html.removeClass(subtitle,'skeleton')
                subtitle.innerHTML = elem.Subtitulo

                html.removeClass(content,'skeleton')
                content.innerHTML = elem.content

                html.removeClass(image, 'skeleton')
                image.src = elem.imagePath
            }) 
        })
        
    })

