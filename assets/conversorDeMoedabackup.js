
const buttonconv = document.querySelector('.currencybutton')
const selectcoin = document.querySelector('.selectcoin')
const selectseccoin = document.querySelector('.selectseccoin ')


convertecoin = async () => {
   const coininput = document.querySelector('.currencyconvert').value
   const resTocoin = document.querySelector('.currecytovalue')
   const rescoin = document.querySelector('.currencyvalue')
   
   // const selectcoin = document.querySelector('.selectcoin')

   // const data = await fetch('https://economia.awesomeapi.com.br/json/last/USD-BRL,EUR-BRL,BTC-BRL,GBP-BRL').then(response => response.json())

   const dolartoday = 5.7
   const eurotoday = 5.9
   const libratoday = 7.45
   const bitcoin = 515



   // const dolartoday = data.USDBRL.high
   // const eurotoday = data.EURBRL.high
   // const libratoday = data.GBPBRL.high
   // const bitcoin = data.BTCBRL.high

// real para outras moedas

   if (selectcoin.value == 'dolar1') {
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

   rescoin.innerHTML = new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
   }).format(coininput)

// dolar para outras

// if(selectcoin.value == 'dolar' && selectseccoin 'euro1'){
//    resTocoin.innerHTML = new Intl.NumberFormat('en-US', {
//       style: 'currency',
//       currency: 'USD'
//    }).format(coininput / dolartoday)
//    rescoin.innerHTML

// }

}

changecoin = () => {

   const coin = document.querySelector('.currecytocoin')
   const coinimg = document.querySelector('.currencytoimg')
   const coin2 = document.querySelector('.currecycoin')
   const coinimg2 = document.querySelector('.currencyimg')


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
   convertecoin()

}



selectcoin.addEventListener('change', changecoin)
buttonconv.addEventListener('click', convertecoin)
