let links = ['http://www.mygbu.in', '#', 'http://www.mygbu.in/docs/FINAL_BROCHURE_12.03.2018.pdf', 'http://mygbu.in/GPTRSyllabus', 'http://www.mygbu.in/docs/Importent_Dates_2018.pdf', 'http://mygbu.in/contact.php']
let tabs = document.querySelectorAll('.tab')
let notice = document.querySelector('.notice')
let spin = document.querySelector('.load')
let box =  document.querySelector('.tabbox')

tabs.forEach(tab => {
  tab.onclick = () => {
    // tab.style.background = "#e8eaed"
    // tab.style.color = "black"
    // tab.style.boxShadow = "0 2px 2px 0 rgba(0,0,0,0.16), 0 0 0 1px rgba(0,0,0,0.08)"
    // tab.style.textShadow = "0 2px 2px 0 rgba(0,0,0,0.16), 0 0 0 1px rgba(0,0,0,0.08)"
    if(tab.dataset.download){
      window.location.href = tab.dataset.download
      // console.log(tab.dataset.download)
    }else{
      //for contact
      if(tab.dataset.load == "contact"){
        let r = new XMLHttpRequest()
        r.open('GET', 'contact.json')
        r.onloadstart = () => {
          spin.style.display = "block"
        }
        r.onloadend = () =>{
          spin.style.display = 'none'
          let data = r.responseText
          data = JSON.parse(data)
          let keys = Object.keys(data)
          notice.innerHTML = ""
          for (let i = 0; i < keys.length; i++) {
            notice.innerHTML += `<div class="card"><div class="heading">${keys[i]}</div><div class="body">${data[keys[i]]}</div></div>`
          }
        }
        r.send()
      }else if(tab.dataset.load == "syllabus"){
        //for syllabus
        let r = new XMLHttpRequest()
        r.open('GET', 'syllabus.json')
        r.onloadstart = () => {
          spin.style.display = "block"
        }
        r.onloadend = () =>{
          spin.style.display = 'none'
          let data = r.responseText
          data = JSON.parse(data)
          notice.innerHTML = ""
          let links =  ["http://www.mygbu.in/docs/SOM_PhD_12March2018.pdf","http://www.mygbu.in/docs/Research_Methodology_SOM_12March2018.pdf","http://www.mygbu.in/docs/SOICT_Phd_12March2018.pdf","http://www.mygbu.in/docs/Research_Methodology_ICT_12March2018.pdf","http://www.mygbu.in/docs/SOE_PhD_12March2018.pdf","http://www.mygbu.in/docs/Research_Methodology_Engineering_12March2018.pdf","http://www.mygbu.in/docs/SOVSAS_PhD_12March2018.pdf","http://www.mygbu.in/docs/Research_Methodology_SOVSAS_12March2018.pdf","http://www.mygbu.in/docs/SOHSS_PhD_12March2018.pdf","http://www.mygbu.in/docs/Research_Methodology_SOHSS_12March2018.pdf","http://www.mygbu.in/docs/SOBSC_Phd_12March2018.pdf","http://www.mygbu.in/docs/Research_Methodology_SOBSC_12March2018.pdf","http://www.mygbu.in/docs/SOLJG_PhD_12March2018.pdf","http://www.mygbu.in/docs/Research_Methodology_Law_12March2018.pdf","http://www.mygbu.in/docs/SOBT_PhD_12March2018.pdf","http://www.mygbu.in/docs/Research_Methodology_Biotech_12March2018.pdf"]
          let j = 0
          for(let i=0; i<data.length; i++){
            let e = data[i]
            notice.innerHTML += `<div class="card"><div class="heading">${e.school}</div><a href="${links[j]}">${e.syl[0]}</a><a href="${links[j+1]}">${e.syl[1]}</a></div>`
            j+=2
          }
        }
        r.send()
      }
      //for home

    }
  }
  // tab.onmouseover = ()=>{
  //   let prop = tab.getBoundingClientRect()
  //   box.style.top = `${prop.top+5}px`
  //   box.style.left = `${prop.left+5}px`
  //   box.style.width = `${prop.width-10}px`
  //   box.innerText = tab.innerText
  //
  // }
})
