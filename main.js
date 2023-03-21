const ekleBtn = document.querySelector('#ekle-btn');
const harcamaInput = document.querySelector('#harcama');
const fiyatInput = document.querySelector('#fiyat');
const durumInput = document.querySelector('#durum');
const list = document.querySelector('.list');
const toplamSpan=document.querySelector("#toplam");

//butonu izler
ekleBtn.addEventListener('click', addExpense);
//listeyi izler>tiklama
list.addEventListener("click",handleClick);

// toplam degerini tanimlama
let toplam =0;

//  listeye ekleme
function addExpense(event) {
    event.preventDefault();
  
    //   inpuların içininin boş olmadığını kontrol etme
    if (!fiyatInput.value || !harcamaInput.value) {
      alert('Kutuları Doldurun');
      return;
    }
    // elemanı oluştur
    const listItem = document.createElement('div');
  
    //   class ekleme
    listItem.classList.add('list-item');
  
    if (durumInput.checked) {
      listItem.classList.add('odendi');
    }
  
    // içeriği değiştirme
    listItem.innerHTML = `
            <h1>${harcamaInput.value}</h1>
            <h2> <span> ${fiyatInput.value} </span> &#8378; </h2>
            <div class="buttons">
              <img id="delete" src="images/delete.png" />
              <img id="payment" src="images/payment.png" />
            </div>  
    `;
    //   htmle gönderme
    list.appendChild(listItem);
  //toplami guncelleme
toplam += parseInt(fiyatInput.value)
//js deki toplam degerini ekrana basma
toplamSpan.innerText=toplam;
//inputlari sifirlama
fiyatInput.value="";
harcamaInput.value="";

}
// silme ve edit islemi
function handleClick(e){
const eleman= e.target;
if(eleman.id == "delete"){
    alert("silindi");
    //tiklanan butonun kapsayicisini alma 
    const harcamaDiv=eleman.parentElement.parentElement;
    
  //  console.log(harcamaDiv.querySelector("span").innerText);
  //tiklanan elemanin fiyatini alma
  const silinenFiyat=harcamaDiv.querySelector("span").innerText;
//js deki toplam degerini guncelleme
  toplam -= parseInt(silinenFiyat);
  // yeni degeri html e gondericez
  toplamSpan.innerText = toplam;

  //animasyon ekleme
  harcamaDiv.classList.add("fall");

  harcamaDiv.addEventListener("transitionend",()=>{
    //html den kaldirma
    harcamaDiv.remove()

  })
}
}