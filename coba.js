// Close Button Modal
function closeModal() {
  const modal = bootstrap.Modal.getInstance(document.getElementById("staticBackdrop"));
  modal.hide();
  document.querySelector("#btnradiosfw1").checked = true;
}
document.getElementById("btnCloseModal").addEventListener("click", closeModal);

//radioCategory SFW
let radioCategory= document.querySelector('#radioCategory');
let awal= radioCategory.innerHTML
document.getElementById("btnradiosfw1").addEventListener("click", ()=>{
    radioCategory.innerHTML = awal
});

// verif nsfw
let nfswVerif = false;
document.querySelector("#verif").addEventListener("submit", (e) => {
  e.preventDefault();
  const pass = document.querySelector("#password1").value;
  const correctPass = "astaghfirullah";

  if (pass == correctPass) {
    nfswVerif = true;
    // Tutup modal (dengan Bootstrap JS)
    alert("Password benar. Silakan klik tombol 'Tampilkan Gambar' lagi.");
    document.querySelector("#btnradiosfw1").checked = false;
    const modal = bootstrap.Modal.getInstance(
      document.getElementById("staticBackdrop")
    );
    modal.hide();
    document.querySelector('#radioCategory').innerHTML=`
            <div id="radioCategory" class="btn-group" role="group" aria-label="Basic radio toggle button group">
            <input type="radio" class="btn-check" name="btnradio" id="btnradio1" value="waifu" autocomplete="off"  checked>
            <label class="btn btn-outline-danger" for="btnradio1" >Waifu</label>

            <input type="radio" class="btn-check" name="btnradio" id="btnradio2" value="neko" autocomplete="off">
            <label class="btn btn-outline-danger" for="btnradio2" >Neko</label>

            <input type="radio" class="btn-check" name="btnradio" id="btnradio3" value="trap" autocomplete="off">
            <label class="btn btn-outline-danger" for="btnradio3" >Trap</label>          

        </div>
    `
  } else {
    alert("Password salah!");
    nsfwVerified = false;
    document.querySelector("#btnradiosfw1").checked = true;
  }
});

//fetch API
document.getElementById("btnWaifu").addEventListener("click", coba);
async function coba() {
  let type= document.querySelector('input[name="btnradiow"]:checked').value;
  let category = document.querySelector('input[name="btnradio"]:checked').value;
  try {
    let response = await fetch(`https://api.waifu.pics/${type}/${category}`);
    let data = await response.json();
    document.getElementById("gambar1").innerHTML = `
        <div class="card mx-auto mx-sm-0" style="width: 18rem">
          <img src="${data.url}" class="card-img-top" alt="..." id="gambar1" />
          <div class="card-body">
            <h5 class="card-title">Kesayanganmu</h5>
            <p class="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card’s content.
            </p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
          </div>
        </div>
            `;
  } catch (error) {
    console.log(`ini error = ${error}`);
  }
}
