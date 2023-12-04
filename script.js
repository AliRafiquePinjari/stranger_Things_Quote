let url = "https://strangerthings-quotes.vercel.app/api/quotes"
let response = fetch(url)
response.then((v) => {
  return v.json()
}).then((qoute) => {
  console.log(qoute)
  ihtml = ""
  for (item in qoute) {
    console.log(qoute[item])
    ihtml += `
                <div class="card  my-0" style="width: 30rem;">
                                <img src="https://occ-0-987-1360.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABS6v2gvwesuRN6c28ZykPq_fpmnQCJwELBU-kAmEcuC9HhWX-DfuDbtA-bfo-IrfgNtxl0qwJJlhI6DENsGFXknKkjhxPGTV-qhp.jpg?r=608" alt="...">
                                <div class="card-body">
                                        <h5 class="card-title">${qoute[item].author}</h5>
                                        <p class="card-text"> ${qoute[item].quote} </p>
                                        <a class="btn btn-primary btn-lg d-flex justify-content-center" href="javascript:location.reload(true)">Next</a>
                                </div>
                        </div>
                `
  }
  cardContainer.innerHTML = ihtml
})