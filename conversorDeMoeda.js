
const buttonconv = document.querySelector('.currencybutton')
const selectcoin = document.querySelector('.selectcoin')
const selectseccoin = document.querySelector('.selectseccoin ')





convertecoin = async () => {
   const coininput = document.querySelector('.currencyconvert').value
   const resTocoin = document.querySelector('.currecytovalue')
   const rescoin = document.querySelector('.currencyvalue')
   
   // const selectcoin = document.querySelector('.selectcoin')

   const data = await fetch('https://economia.awesomeapi.com.br/json/last/USD-BRL,EUR-BRL,BTC-BRL,GBP-BRL').then(response => response.json())

   // const dolartoday = 5.7
   // const eurotoday = 5.9
   // const libratoday = 7.45
   // const bitcoin = 515



   const dolartoday = data.USDBRL.high
   const eurotoday = data.EURBRL.high
   const libratoday = data.GBPBRL.high
   const bitcoin = data.BTCBRL.high

// real para outras moedas
if(coininput.length <= 0 ){
   alert('Coloque o valor para continuar!!!')
}else{
   if (selectcoin.value == 'dolar1'&& selectseccoin == 'real') {

      coininput.innerHTML = new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL'
         }).format(rescoin)

      resTocoin.innerHTML = new Intl.NumberFormat('en-US', {
         style: 'currency',
         currency: 'USD'
      }).format(coininput / dolartoday)


   }
   if (selectcoin.value == 'euro1') {
      resTocoin.innerHTML = new Intl.NumberFormat('de-DE', {
         style: 'currency',
         currency: 'EUR'
      }).format(coininput / eurotoday)

   }
   if (selectcoin.value == 'bitcoin1') {
      resTocoin.innerHTML = new Intl.NumberFormat('de-DE', {
         style: 'currency',
         currency: 'BTC'
      }).format(coininput / bitcoin)
   }
   if (selectcoin.value == 'libra1') {
      resTocoin.innerHTML = new Intl.NumberFormat('de-DE', {
         style: 'currency',
         currency: 'GBP'
      }).format(coininput / libratoday)
   }

   // rescoin.innerHTML = new Intl.NumberFormat('pt-BR', {
   //    style: 'currency',
   //    currency: 'BRL'
   // }).format(coininput)

// dolar para outras

if(selectcoin.value == 'dolar' && selectseccoin == 'euro1'){
   
   const valordolar = coininput * dolartoday
    const valoratual = valordolar / eurotoday

    rescoin.innerHTML = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD'
   }).format()
   
   resTocoin.innerHTML = new Intl.NumberFormat('de-DE', {
      style: 'currency',
      currency: 'EUR'
   }).format(valoratual)
   }
}

   

}

changecoin = () => {

   const coin = document.querySelector('.currecytocoin')
   const coinimg = document.querySelector('.currencytoimg')
   


   if (selectcoin.value == 'euro1') {
      coin.innerHTML = 'EURO &euro;'
      coinimg.src = './assets/euro.png'

   }
   if (selectcoin.value == 'dolar1') {
      coin.innerHTML = 'DÓLAR US$'
      coinimg.src = './assets/dolar.png'
   }
   if (selectcoin.value == 'libra1') {
      coin.innerHTML = 'LIBRA &pound;'
      coinimg.src = './assets/libra.png'
   }
   if (selectcoin.value == 'bitcoin1') {
      coin.innerHTML = 'BITCOIN &#8383'
      coinimg.src = './assets/bitcoin.png'
   }
   if (selectcoin.value == 'real1'){
      coin.innerHTML = 'REAL R$'
      coinimg.src ='./assets/real.png'
   }
   convertecoin()
   changecoin2()

}

changecoin2 = () => {
   const coin2 = document.querySelector('.currecycoin')
   const coinimg2 = document.querySelector('.currencyimg')

   if(selectcoin.value == 'euro1' && selectseccoin.value == 'euro' || 
      selectseccoin.value == 'dolar' && selectcoin.value == 'dolar1'||
      selectseccoin.value == 'libra'&& selectcoin.value == 'libra1'||
      selectseccoin.value == 'bitcoin'&& selectcoin.value == 'bitcoin1' ||
      selectcoin.value == 'real1' && selectseccoin.value == 'real' ){
alert('[ERRO] A duas moedas selecinadas são iguais ')
   }else{

      if (selectseccoin.value == 'euro') {
         coin2.innerHTML = 'EURO &euro;'
         coinimg2.src = './assets/euro.png'
   
      }
      if (selectseccoin.value == 'dolar') {
         coin2.innerHTML = 'DÓLAR US$'
         coinimg2.src = './assets/dolar.png'
      }
      if (selectseccoin.value == 'libra') {
         coin2.innerHTML = 'LIBRA &pound;'
         coinimg2.src = './assets/libra.png'
      }
      if (selectseccoin.value == 'bitcoin') {
         coin2.innerHTML = 'BITCOIN &#8383'
         coinimg2.src = './assets/bitcoin.png'
      }
      if (selectseccoin.value == 'real'){
         coin2.innerHTML = 'REAL R$'
         coinimg2.src ='./assets/real.png'
      }
   }


}


selectseccoin.addEventListener('change', changecoin2)
selectcoin.addEventListener('change', changecoin)
buttonconv.addEventListener('click', convertecoin)
