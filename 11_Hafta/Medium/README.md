# Dizinin Ortalamasını Bulma
Bu projemizde Kodluyoruz Yaz Challenge'da 11. challenge'ın medium görevini yerine getirdik.



## Kullanılan Teknolojiler

**İstemci:** Javascript, Bootstrap, HTML/CSS


  
## Dizi Ortalamasını Bulan Algoritması

```javascript
        // Ortalama bulan fonksiyon ilk önce dizi eleman sayısı bulunur sonra dizideki elemanların toplamı bulunur
        // Toplam sayıyı eleman sayısına böldügümüz de ortlamayı bulumuş oluruz.
        function ortalamaHesapla(dizi) {
            var toplam = dizi.reduce(function (a, b) {
                return a + b;
            }, 0);

            var elemanSayisi = dizi.length;
            var ortalama = toplam / elemanSayisi;

            return ortalama;
        }



        var dizi = [5, 10, 15, 20, 25]; //dizi oluşturduk
        var sonuc = ortalamaHesapla(dizi); // diziyi ortalama fonksiyonundan geçiriyoruz
        

        document.getElementById('dizi').innerHTML = dizi; //dizi de ki elemanları ekrana yazdırdık
        document.getElementById('ortalama').innerHTML = sonuc; // fonksiyondan geçirip ortalamasını buldugumuz sayıyı ekrana yazdırdık.

```

