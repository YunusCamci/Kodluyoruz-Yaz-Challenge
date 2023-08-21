# Dizinin Kaç Tekrar Var Bulma
Bu projemizde Kodluyoruz Yaz Challenge'da 11. challenge'ın hard görevini yerine getirdik.



## Kullanılan Teknolojiler

**İstemci:** Javascript, Bootstrap, HTML/CSS


  
## Kaç Tekrar Olduğunu Bulan Algoritma

```javascript
         //say fonksiyonu gelen dizi ve hedef sayıyı alıp for döngüsünden geçirip eşleşme durumunda count degerini artırıyor
        function say(siraliDizi, hedef) {
            let count = 0;
            for (let i = 0; i < siraliDizi.length; i++) {
                if (siraliDizi[i] === hedef) {
                    count++;
                } else if (siraliDizi[i] > hedef) {
                    break; 
                }
            }
            return count;
        }

        //dizi ve hedef sayı değişkenlerini tanımlıyoruz
        const siraliDizi = [2, 4, 4, 4, 6, 7, 7, 7, 9];
        const hedefSayi = 7;

        //say fonksiyonundan dizi ve hedef sayıyı geçiyoruz
        const tekrar = say(siraliDizi, hedefSayi);

        //UI da gerekli yerlere yazdırma işlemini yapıyoruz
        document.getElementById('hedefSayi').innerHTML = hedefSayi;
        document.getElementById('tekrarSayi').innerHTML = tekrar;

```

