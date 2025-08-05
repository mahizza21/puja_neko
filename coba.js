document.getElementById('btnWaifu').addEventListener('click',coba);

async function coba() {
    let category = document.querySelector('input[name="btnradio"]:checked').value
    try {
        let response = await fetch(`https://api.waifu.pics/sfw/${category}`);
        let data = await response.json();
        console.log(data);
        console.log(category);
        document.getElementById('gambar1').innerHTML=`
        <div class="card mx-auto mx-sm-0" style="width: 18rem">
          <img src="${data.url}" class="card-img-top" alt="..." id="gambar1" />
          <div class="card-body">
            <h5 class="Kesayanganmu">Card title</h5>
            <p class="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card’s content.
            </p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
          </div>
        </div>
            `
    } catch (error) {
        console.log(`ini error = ${error}`);
    }
}
