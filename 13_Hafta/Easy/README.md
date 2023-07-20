# Asal Sayı Dizi Oluşturma ve Kullanıcıdan Gelen Sayının Kontrolü
Bu projemizde Kodluyoruz Yaz Challenge'da 13. challenge'ın easy görevini yerine getirdik.



## Kullanılan Teknolojiler

**İstemci:** Javascript, Bootstrap, HTML/CSS


  
## Asal Sayı Dizisi Oluşturma ve Kontrol Algoritması

```javascript
        // Asal Sayı Dizisi Oluşturma Algoritması
        function asalSayi(number) {
            if (number < 2) {
                return false;
            }

            if (number <= 3) {
                return true;
            }

            const sqrtNumber = Math.sqrt(number);
            for (let i = 2; i <= sqrtNumber; i++) {
                if (number % i === 0) {
                    return false;
                }
            }

            return true;
        }
```


## Asal Dizi Algoritmasından Gelen Verinin Kontrolleri ve Ekrana Yazdırımı

```javascript
        // Asal Dizi Algoritmasından Gelen Verinin Kontrolleri
        function hesapla() {
            sayi = document.getElementById('kullaniciSayi').value;

            if (asalSayi(sayi)) {
                text = (`${sayi}, bir asal sayıdır.`);
            } else {
                text = (`${sayi}, bir asal sayı değildir.`);
            }
            document.getElementById('sonuc').innerHTML = text;
        }
```
