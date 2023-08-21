# Faktöriyel Bulma
Bu projemizde Kodluyoruz Yaz Challenge'da 11. challenge'ın medium görevini yerine getirdik.



## Kullanılan Teknolojiler

**İstemci:** Javascript, Bootstrap, HTML/CSS


  
## Faktöriyel Bulma Algoritması

```javascript
         //Faktöriyeli bulan fonksiyon
        function faktoriyel(n) {
            if (n === 0 || n === 1) {
                return 1;
            } else {
                return n * faktoriyel(n - 1);
            }
        }

        //Kullanıcıdan gelen sayıyı hesaplatan fonksiyon
        function hesapla() {
            const sayi = document.getElementById('kullaniciSayi').value;
            const cikti = faktoriyel(sayi);

            document.getElementById('sonuc').innerHTML = `Faktöriyel ${sayi}! = ${cikti}`;
        }
```

