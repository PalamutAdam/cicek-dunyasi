/* ==========================================================================
   ÇİÇEK DÜNYASI - JAVASCRIPT APPLICATION LOGIC WITH CATEGORIES SYSTEM
   ========================================================================== */

// Category Database Array (7 Main Botanical Categories)
const categoriesData = [
  {
    id: 'Güller',
    name: 'Güller',
    icon: '🌹',
    tagline: 'Aşkın, Tutkunun ve Zarafetin Simgesi',
    description: 'Klasik kırmızı güllerden Şanlıurfa Halfeti\'de yetişen gizemli siyah güle, 5 milyon dolarlık lüks Juliet gülünden genetik biyoteknoloji ürünü mavi güle kadar büyüleyici türler.',
    gradient: 'linear-gradient(135deg, rgba(255, 77, 109, 0.25), rgba(200, 16, 46, 0.15))',
    borderColor: 'rgba(255, 77, 109, 0.45)',
    accentColor: '#ff4d6d'
  },
  {
    id: 'Orkideler',
    name: 'Orkideler',
    icon: '🌸',
    tagline: 'Zarafet ve Gizem Dolu Eksotik Çiçekler',
    description: 'Evlerimizi süsleyen zarif beyaz orkideden bataklıklarda süzülen yapraksız hayalet orkideye, kadife siyah orkideden sevimli maymun yüzlü nadir türe kadar büyüleyici orkide ailesi.',
    gradient: 'linear-gradient(135deg, rgba(157, 78, 221, 0.25), rgba(114, 9, 183, 0.15))',
    borderColor: 'rgba(157, 78, 221, 0.45)',
    accentColor: '#9d4edd'
  },
  {
    id: 'Kır Çiçekleri',
    name: 'Kır Çiçekleri',
    icon: '🌼',
    tagline: 'Doğanın Özgür, Neşeli ve Doğal Ruhu',
    description: 'Çayırların masumiyet simgesi papatyası, yüzünü güneşe döndüren dev ayçiçekleri ve etrafa vanilya-çikolata kokusu saçan kadife Çikolata Kozmosu.',
    gradient: 'linear-gradient(135deg, rgba(255, 183, 3, 0.25), rgba(251, 133, 0, 0.15))',
    borderColor: 'rgba(255, 183, 3, 0.45)',
    accentColor: '#ffb703'
  },
  {
    id: 'Bahçe & Balkon Çiçekleri',
    name: 'Bahçe & Balkon Çiçekleri',
    icon: '🪴',
    tagline: 'Evlerimizi ve Bahçelerimizi Renklendiren Canlılar',
    description: 'Balkonların vazgeçilmezi pembe sardunyalardan, fırfırlı kokulu kırmızı karanfile, toprağın pH derecesine göre renk değiştiren mavi ortancaya ve bahar müjdecisi renkli lalelere.',
    gradient: 'linear-gradient(135deg, rgba(46, 204, 113, 0.25), rgba(39, 174, 96, 0.15))',
    borderColor: 'rgba(46, 204, 113, 0.45)',
    accentColor: '#2ecc71'
  },
  {
    id: 'Aromatik & Şifalı Bitkiler',
    name: 'Aromatik & Şifalı Bitkiler',
    icon: '🌿',
    tagline: 'Huzur Veren Kokular ve Büyüleyici Tepkiler',
    description: 'Mor tarlaların rahatlatıcı kokusuna sahip lavanta, yaz akşamları tatlı koku yayan beyaz yasemin ve dokunulduğunda yapraklarını saniyeler içinde kapatan mucizevi Küstüm Çiçeği.',
    gradient: 'linear-gradient(135deg, rgba(16, 185, 129, 0.25), rgba(5, 150, 105, 0.15))',
    borderColor: 'rgba(16, 185, 129, 0.45)',
    accentColor: '#10b981'
  },
  {
    id: 'Kaktüs & Sukulentler',
    name: 'Kaktüs & Sukulentler',
    icon: '🌵',
    tagline: 'Çölün ve Gecenin Dayanıklı Mucizeleri',
    description: 'Dikenlerin üzerinden turuncu alev gibi yükselen Rebutia kaktüsünden, sadece gece yarısı açıp şafakta solan paha biçilemeyen Kadupul (Gecenin Kraliçesi) çiçeğine.',
    gradient: 'linear-gradient(135deg, rgba(245, 158, 11, 0.25), rgba(217, 119, 6, 0.15))',
    borderColor: 'rgba(245, 158, 11, 0.45)',
    accentColor: '#f59e0b'
  },
  {
    id: 'Egzotik & Nadir Türler',
    name: 'Egzotik & Nadir Türler',
    icon: '✨',
    tagline: 'Dünyanın En Şaşırtıcı ve Dev Botanik Harikaları',
    description: '7-10 yılda bir kez açan dev Ceset Çiçeği, 1 metre çapındaki parazit Şeytan Tırnağı (Rafflesia), bir çocuğu taşıyabilen Dev Amazon Nilüferi ve dondurucu dağ zirvelerindeki Kutup Menekşesi.',
    gradient: 'linear-gradient(135deg, rgba(236, 72, 153, 0.25), rgba(168, 85, 247, 0.15))',
    borderColor: 'rgba(236, 72, 153, 0.45)',
    accentColor: '#ec4899'
  }
];

// Flower Database Array (24 Flowers Standardized across 7 Categories)
const flowersData = [
  // --- GÜLLER (4 Çiçek) ---
  {
    id: 'kirmizi-gul',
    name: 'Kırmızı Gül',
    latinName: 'Rosa rubiginosa',
    rarity: 'kolay',
    rarityLabel: 'Kolay Bulunan',
    category: 'Güller',
    subCategory: 'Gül',
    origin: 'Anadolu & Asya',
    careDifficulty: 'Kolay / Orta',
    sunlight: 'Bol Güneş Işığı',
    watering: 'Haftada 2 Kez',
    description: 'Sevginin, tutkunun ve klasik zarafetin evrensel simgesi. Bahçelerde, parklarda ve çiçekçilerde en sık rastlanan ve bakımı zevkli türlerdendir.',
    fullStory: 'Kırmızı gül, yüzyıllardır edebiyata ve şiirlere konu olmuş dünyaca ünlü bir çiçektir. Doğru budama ve düzenli sulama ile bahardan sonbahara kadar kesintisiz çiçek açabilir. Toprağının hava geçiren süzek yapıda olması sağlıklı büyümesini sağlar.',
    image: 'images/red_rose.png',
    isFavorite: false
  },
  {
    id: 'halfeti-siyah-gul',
    name: 'Siyah Gül (Halfeti Gülü)',
    latinName: 'Rosa Halfetiensis',
    rarity: 'zor',
    rarityLabel: 'Zor Bulunan (Nadir)',
    category: 'Güller',
    subCategory: 'Nadir Gül',
    origin: 'Halfeti, Şanlıurfa',
    careDifficulty: 'Çok Zor (Mikroklima Bağımlı)',
    sunlight: 'Özel Yarı Gölge',
    watering: 'Hassas Nem Dengesi',
    description: 'Dünyada sadece Şanlıurfa Halfeti\'nin özel toprak ve mikroklimasında doğal olarak simsiyah açan efsanevi nadide gül.',
    fullStory: 'Halfeti Gülü, baharda tomurcuk halindeyken koyu siyah renktedir. Başka bir bölgeye ekildiğinde kırmızı renge dönüştüğü için dünyada yalnızca Fırat Nehri kıyısındaki Halfeti ilçesinde tam siyahlığını korur. Dünyanın en nadir floristik değerlerinden biridir.',
    image: 'images/black_rose.png',
    isFavorite: false
  },
  {
    id: 'juliet-gulu',
    name: 'Juliet Gülü',
    latinName: 'Juliet Rose (David Austin)',
    rarity: 'zor',
    rarityLabel: 'Zor Bulunan (Nadir)',
    category: 'Güller',
    subCategory: 'Lüks Gül',
    origin: 'İngiltere',
    careDifficulty: 'Uzman Bakımı',
    sunlight: 'Hassas Güneş',
    watering: 'Özel Besinli Sulama',
    description: 'Geliştirilmesi 15 yıl süren, 5 milyon dolarlık gül olarak anılan şeftali tonlu katmerli mükemmel lüks gül.',
    fullStory: 'Ünlü gül yetiştiricisi David Austin tarafında 15 yıllık melezleme çalışmaları sonucu 2006 Chelsea Çiçek Fuarı\'nda sergilenmiştir. Mükemmel dairesel petal dizilimi ve hafif çay kokusuyla dünyanın en pahalı gül çeşididir.',
    image: 'images/juliet_rose.png',
    isFavorite: false
  },
  {
    id: 'mavi-gul',
    name: 'Gizemli Mavi Gül',
    latinName: 'Rosa celeste (Genetik Nadir)',
    rarity: 'zor',
    rarityLabel: 'Zor Bulunan (Nadir)',
    category: 'Güller',
    subCategory: 'Nadir Gül',
    origin: 'Biyoteknoloji Laboratuvarı',
    careDifficulty: 'Aşırı Uzmanlık',
    sunlight: 'Hassas Sıcaklık Kontrolü',
    watering: 'Besleyici Mineral Su',
    description: 'Doğada mavi pigment geni bulunmadığı için genetik mühendisliği ve özel aşılama ile elde edilen ulaşılması güç lüks gül.',
    fullStory: 'Güllerde delphinidin adı verilen mavi renk pigmenti doğal olarak bulunmaz. Yıllar süren moleküler biyoloji çalışmaları sonucunda Avustralya ve Japon araştırmacılar tarafından sınırlı sayıda üretilmiştir. İmkansız aşkın simgesidir.',
    image: 'images/mavi_gul.png',
    isFavorite: false
  },

  // --- ORKİDELER (4 Çiçek) ---
  {
    id: 'ev-orkidesi',
    name: 'Klasik Beyaz Orkide',
    latinName: 'Phalaenopsis orchidaceae',
    rarity: 'kolay',
    rarityLabel: 'Kolay Bulunan',
    category: 'Orkideler',
    subCategory: 'Ev Çiçeği',
    origin: 'Güneydoğu Asya',
    careDifficulty: 'Orta',
    sunlight: 'Aydınlık Süzülen Işık',
    watering: 'Haftada 1 Kez Daldırma',
    description: 'Ev ve ofis dekorasyonunun en zarif, uzun ömürlü ve popüler indoor çiçek türlerinden biri.',
    fullStory: 'Phalaenopsis türü orkideler, şeffaf saksılarda köklerinin ışık almasıyla sağlıklı gelişir. Doğru bakıldığında yılda 2-3 kez çiçek açabilir ve çiçekleri aylarca bozulmadan kalabilir.',
    image: 'images/ev_orkidesi.png',
    isFavorite: false
  },
  {
    id: 'hayalet-orkide',
    name: 'Hayalet Orkide',
    latinName: 'Dendrophylax lindenii',
    rarity: 'zor',
    rarityLabel: 'Zor Bulunan (Nadir)',
    category: 'Orkideler',
    subCategory: 'Eksotik Orkide',
    origin: 'Florida & Küba Bataklıkları',
    careDifficulty: 'Aşırı Zor (Uzman Şartları)',
    sunlight: 'Filtrelenmiş Nemli Işık',
    watering: '%90 Tropikal Nem',
    description: 'Yaprakları olmayan, kökleriyle ağaç gövdesine tutunup yılda sadece 1-2 gün havada süzülüyormuş gibi açan koruma altındaki gizemli tür.',
    fullStory: 'Hayalet Orkide fotosentezi yeşil kökleriyle gerçekleştirir. Çiçek açtığında gövdesi görülmediği için rüzgarda havada asılı duran beyaz bir hayaleti andırır. Tohumlarının çimlenmesi için özel bir mantar türüyle simbiyotik yaşam kurması gerekir, bu yüzden üretilmesi neredeyse imkansızdır.',
    image: 'images/ghost_orchid.png',
    isFavorite: false
  },
  {
    id: 'siyah-orkide',
    name: 'Siyah Orkide (Fredclarkeara)',
    latinName: 'Fredclarkeara After Dark',
    rarity: 'zor',
    rarityLabel: 'Zor Bulunan (Nadir)',
    category: 'Orkideler',
    subCategory: 'Koleksiyon Orkide',
    origin: 'Güney Amerika Hibriti',
    careDifficulty: 'Zor',
    sunlight: 'Dolaylı Yüksek Işık',
    watering: 'Dinlenme Dönemli Sulama',
    description: 'Yoğun kadife dokulu koyu siyah çiçekleri ve tatlı nane-baharat kokusuyla orkide tutkunlarının rüyası.',
    fullStory: 'Bitki dünyasında gerçek siyah pigment çok nadirdir. Fredclarkeara hibriti, koyu bordo ve mor tonlarının üst üste katmanlaşmasıyla gözün tamamen siyah algıladığı büyüleyici bir görsel şölen sunar.',
    image: 'images/siyah_orkide.png',
    isFavorite: false
  },
  {
    id: 'maymun-orkide',
    name: 'Maymun Yüzlü Orkide',
    latinName: 'Dracula simia',
    rarity: 'zor',
    rarityLabel: 'Zor Bulunan (Nadir)',
    category: 'Orkideler',
    subCategory: 'Nadir Orkide',
    origin: 'Ekvador & Peru Bulut Ormanları',
    careDifficulty: 'Çok Zor (Bulut Ormanı Şartı)',
    sunlight: 'Yüksek İrtifa Gölgeliği',
    watering: '%95 Nem & Soğuk Hava',
    description: 'Çiçek merkezindeki taç yaprak dizilimi birebir sevimli bir maymun yüzünü andıran doğanın şaşırtıcı tasarımı.',
    fullStory: '2000 metrenin üzerindeki puslu dağ ormanlarında yetişen Dracula simia, olgunlaşmış portakal kokusu yayar. İklim değişikliklerine aşırı duyarlı olduğu için doğal ortamı dışında yaşatılması neredeyse imkansızdır.',
    image: 'images/maymun_orkide.png',
    isFavorite: false
  },

  // --- KIR ÇİÇEKLERİ (3 Çiçek) ---
  {
    id: 'papatya',
    name: 'Papatya',
    latinName: 'Bellis perennis',
    rarity: 'kolay',
    rarityLabel: 'Kolay Bulunan',
    category: 'Kır Çiçekleri',
    subCategory: 'Kır Çiçeği',
    origin: 'Avrupa & Akdeniz',
    careDifficulty: 'Çok Kolay',
    sunlight: 'Doğrudan Güneş',
    watering: 'Toprak Kurudukça',
    description: 'Masumiyet ve doğallığı temsil eden, kırların ve çayırların neşeli beyaz çiçekli klasiği.',
    fullStory: 'Kır papatyaları dayanıklılığıyla bilinir. Özel bir bakım gerektirmeden güneş gören her türlü toprakta rahatça yetişir. Çay olarak tüketildiğinde sakinleştirici etkisiyle de oldukça meşhurdur.',
    image: 'images/daisy.png',
    isFavorite: false
  },
  {
    id: 'aycicegi',
    name: 'Ayçiçeği',
    latinName: 'Helianthus annuus',
    rarity: 'kolay',
    rarityLabel: 'Kolay Bulunan',
    category: 'Kır Çiçekleri',
    subCategory: 'Kır Çiçeği',
    origin: 'Kuzey Amerika',
    careDifficulty: 'Çok Kolay',
    sunlight: 'Tam Güneş (Güneşe Döner)',
    watering: 'Düzenli Bol Su',
    description: 'Gün boyunca yüzünü güneşe döndüren, altın sarısı yapraklarıyla neşe ve enerji saçan dev bahçe çiçeği.',
    fullStory: 'Ayçiçekleri fototropizma adı verilen mekanizma sayesinde gün boyunca güneşin hareketini takip eder. Hem görsel güzelliği hem de lezzetli çekirdekleriyle doğanın en verimli armağanlarındandır.',
    image: 'images/sunflower.png',
    isFavorite: false
  },
  {
    id: 'cikolata-kozmosu',
    name: 'Çikolata Kozmosu',
    latinName: 'Cosmos atrosanguineus',
    rarity: 'zor',
    rarityLabel: 'Zor Bulunan (Nadir)',
    category: 'Kır Çiçekleri',
    subCategory: 'Nadir Kır Çiçeği',
    origin: 'Meksika',
    careDifficulty: 'Zor (Klonlama İle Çoğalır)',
    sunlight: 'Sıcak Güneşli',
    watering: 'Orta Derece',
    description: 'Koyu vanilya ve gerçek çikolata kokusu salgılayan, kadife koyu kahve-kırmızı yapraklı soyu doğada tükenmiş nadir tür.',
    fullStory: 'Çikolata Kozmosu 100 yılı aşkın sürüdür vahşi doğada tükenmiş durumdadır. Günümüzdeki tüm örnekler 1902 yılında laboratuvarda klonlanan tek bir kökten türetilmiştir. Sıcak günlerde etrafa buram buram çikolata kokusu yayar.',
    image: 'images/cikolata_kozmosu.png',
    isFavorite: false
  },

  // --- BAHÇE & BALKON ÇİÇEKLERİ (4 Çiçek) ---
  {
    id: 'lale',
    name: 'Renkli Lale',
    latinName: 'Tulipa gesneriana',
    rarity: 'kolay',
    rarityLabel: 'Kolay Bulunan',
    category: 'Bahçe & Balkon Çiçekleri',
    subCategory: 'Soğanlı Bitki',
    origin: 'Orta Asya & Türkiye',
    careDifficulty: 'Kolay',
    sunlight: 'Yarı Gölge / Güneş',
    watering: 'Haftada 1 Kez',
    description: 'İlkbaharın gelişini haber veren zarif kadeh biçimli taç yapraklarıyla ünlü soğanlı bahçe çiçeği.',
    fullStory: 'Osmanlı kültüründe özel bir yere sahip olan Lale, bahar aylarında rengarenk açar. Soğanları sonbaharda dikilir ve kış soğuğunu aldıktan sonra ilkbaharda büyüleyici bir görsele dönüşür.',
    image: 'images/tulip.png',
    isFavorite: false
  },
  {
    id: 'karanfil',
    name: 'Kırmızı Karanfil',
    latinName: 'Dianthus caryophyllus',
    rarity: 'kolay',
    rarityLabel: 'Kolay Bulunan',
    category: 'Bahçe & Balkon Çiçekleri',
    subCategory: 'Bahçe Çiçeği',
    origin: 'Akdeniz Bölgesi',
    careDifficulty: 'Kolay',
    sunlight: 'Aydınlık Güneşli',
    watering: 'Haftada 2 Kez',
    description: 'Fırfırlı kenarları ve kendine has tatlı baharatlı kokusuyla buketlerin vazgeçilmez durağan çiçeği.',
    fullStory: 'Karanfil, kesme çiçekçilikte en uzun ömürlü vazoda kalan türlerdendir. Balkon saksılarında çok yıllık olarak kolayca yetiştirilebilir ve soğuk havalara karşı oldukça dirençlidir.',
    image: 'images/karanfil.png',
    isFavorite: false
  },
  {
    id: 'sardunya',
    name: 'Pembe Sardunya',
    latinName: 'Pelargonium hortorum',
    rarity: 'kolay',
    rarityLabel: 'Kolay Bulunan',
    category: 'Bahçe & Balkon Çiçekleri',
    subCategory: 'Balkon Çiçeği',
    origin: 'Güney Afrika',
    careDifficulty: 'Çok Kolay',
    sunlight: 'Bol Güneş',
    watering: 'Kurudukça Sulama',
    description: 'Anadolu evlerinin pencerelerini ve balkonlarını süsleyen, susuzluğa dayanıklı neşeli çiçek topluluğu.',
    fullStory: 'Sardunyalar yapraklarına dokunulduğunda hoş bir aroma yayar. Çelikten yani tek bir dalın toprağa dikilmesiyle bile kolayca çoğaltılabilen mükemmel bir başlangıç bitkisidir.',
    image: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=800&auto=format&fit=crop',
    isFavorite: false
  },
  {
    id: 'ortanca',
    name: 'Mavi Ortanca',
    latinName: 'Hydrangea macrophylla',
    rarity: 'kolay',
    rarityLabel: 'Kolay Bulunan',
    category: 'Bahçe & Balkon Çiçekleri',
    subCategory: 'Bahçe Çiçeği',
    origin: 'Japonya & Doğu Asya',
    careDifficulty: 'Kolay',
    sunlight: 'Yarı Gölge / Sabah Güneşi',
    watering: 'Bol Su İster',
    description: 'Toprağın pH derecesine göre pembeden maviye renk değiştiren muhteşem top top çiçek kurulları.',
    fullStory: 'Ortancalar tam bir nem tutkunudur. Toprak asidik olduğunda (düşük pH) büyüleyici mavi renkte açarken, alkali topraklarda pembe tonlara dönüşür. Yaz boyunca bahçeleri renklendirir.',
    image: 'images/ortanca.png',
    isFavorite: false
  },

  // --- AROMATİK & ŞİFALI BİTKİLER (3 Çiçek) ---
  {
    id: 'kustum-cicegi',
    name: 'Küstüm Çiçeği (Dokunma Bana)',
    latinName: 'Mimosa pudica',
    rarity: 'kolay',
    rarityLabel: 'Kolay Bulunan',
    category: 'Aromatik & Şifalı Bitkiler',
    subCategory: 'Duyarlı Bitki',
    origin: 'Güney & Orta Amerika',
    careDifficulty: 'Kolay',
    sunlight: 'Parlak Dolaylı Işık',
    watering: 'Toprak Nemli Tutulmalı',
    description: 'Yapraklarına dokunulduğunda veya hafifçe dokunulduğunda anında kapanıp sarkan, doğanın mucizevi duyarlı bitkisi.',
    fullStory: 'Küstüm Çiçeği (Mimosa pudica), sismonasti adı verilen özel mekanizma ile dokunmaya karşı tepki verir. Hücre içindeki su basıncının aniden değişmesiyle yapraklarını saniyeler içinde kapatır ve tehlike geçtiğinde tekrar açılır.',
    image: 'images/kustum_cicegi.png',
    isFavorite: false
  },
  {
    id: 'lavanta',
    name: 'Lavanta',
    latinName: 'Lavandula angustifolia',
    rarity: 'kolay',
    rarityLabel: 'Kolay Bulunan',
    category: 'Aromatik & Şifalı Bitkiler',
    subCategory: 'Tıbbi & Kokulu Bitki',
    origin: 'Akdeniz Havzası',
    careDifficulty: 'Çok Kolay',
    sunlight: 'Bol Güneş Işığı',
    watering: 'Az Sulama (Kurudukça)',
    description: 'Mor renkli büyüleyici tarlaları ve huzur veren rahatlatıcı kokusuyla bilinen şifalı aromatik çiçek.',
    fullStory: 'Lavanta, kuraklığa ve sıcağa son derece dayanıklı bir bitkidir. Yağları aromaterapide uyku ve rahatlama için tercih edilir. Balkon ve bahçelerde arıları ve kelebekleri kendine çekerek doğaya hayat katar.',
    image: 'images/lavanta.png',
    isFavorite: false
  },
  {
    id: 'yasemin',
    name: 'Beyaz Yasemin',
    latinName: 'Jasminum officinale',
    rarity: 'kolay',
    rarityLabel: 'Kolay Bulunan',
    category: 'Aromatik & Şifalı Bitkiler',
    subCategory: 'Sarmaşık & Kokulu Bitki',
    origin: 'İran & Himalayalar',
    careDifficulty: 'Kolay',
    sunlight: 'Güneşli & Aydınlık',
    watering: 'Haftada 2 Kez',
    description: 'Yaz akşamları etrafa yaydığı tatlı ve büyüleyici kokusuyla ünlü tırmanıcı yıldız biçimli beyaz çiçek.',
    fullStory: 'Yasemin çiçeği özellikle akşam saatlerinde kokusunu en yüksek seviyede salgılar. Çaylara aroma katmakta ve parfümeri sektöründe değerli özyağlar elde etmekte kullanılır.',
    image: 'images/yasemin.png',
    isFavorite: false
  },

  // --- KAKTÜS & SUKULENTLER (2 Çiçek) ---
  {
    id: 'kaktus-cicegi',
    name: 'Turuncu Kaktüs Çiçeği',
    latinName: 'Rebutia minuscula',
    rarity: 'kolay',
    rarityLabel: 'Kolay Bulunan',
    category: 'Kaktüs & Sukulentler',
    subCategory: 'Sukulent & Kaktüs',
    origin: 'Güney Amerika dağları',
    careDifficulty: 'Çok Kolay',
    sunlight: 'Tam Tamına Bol Güneş',
    watering: '2 Haftada 1 Kez',
    description: 'Dikenli minik gövdesinin üzerinden taç gibi yükselen canlı turuncu ve kırmızı bahar çiçekleri.',
    fullStory: 'Rebutia kaktüsleri kışın soğuk ve kuru bir dinlenme dönemi geçirdikten sonra ilkbaharda muazzam bir çiçek patlaması yaşar. Unutkan bitki severler için idealdir.',
    image: 'images/kaktus_cicegi.png',
    isFavorite: false
  },
  {
    id: 'kadupul-cicegi',
    name: 'Kadupul Çiçeği (Gecenin Kraliçesi)',
    latinName: 'Epiphyllum oxypetalum',
    rarity: 'zor',
    rarityLabel: 'Zor Bulunan (Nadir)',
    category: 'Kaktüs & Sukulentler',
    subCategory: 'Mistik Kaktüs Çiçeği',
    origin: 'Sri Lanka',
    careDifficulty: 'Paha Biçilemez / Özel',
    sunlight: 'Sadece Gece Yarısı Işıksız',
    watering: 'Nemli Tropik',
    description: 'Gece yarısı saatlerinde açıp şafak sökmeden hemen önce solan, dünyada paha biçilemeyen ve ticareti yapılmayan mucizevi çiçek.',
    fullStory: 'Kadupul çiçeği dalından koparıldığı anda birkaç saat içinde ölür. Bu yüzden açık pazarda fiyatı yoktur; paha biçilemez kabul edilir. Çiçek açtığında etrafa büyüleyici sakinleştirici bir koku yayar.',
    image: 'images/kadupul.png',
    isFavorite: false
  },

  // --- EGZOTİK & NADİR TÜRLER (4 Çiçek) ---
  {
    id: 'ceset-cicegi',
    name: 'Ceset Çiçeği (Titan Arum)',
    latinName: 'Amorphophallus titanum',
    rarity: 'zor',
    rarityLabel: 'Zor Bulunan (Nadir)',
    category: 'Egzotik & Nadir Türler',
    subCategory: 'Eksotik Dev Bitki',
    origin: 'Sumatra Yağmur Ormanları',
    careDifficulty: 'Sera / Botanik Bahçesi',
    sunlight: 'Sıcak Tropik Nem',
    watering: 'Sürekli Yüksek Nem',
    description: '7 ile 10 yılda yalnızca bir kez 48 saatliğine açan, 3 metre boya ulaşabilen dünyanın en devasa çiçeği.',
    fullStory: 'Titan Arum açtığında böcekleri çekmek için etrafa keskin bir koku yayar ve gövde sıcaklığını 37°C dereceye kadar yükseltebilir. Çiçeklenme dönemi dünya genelindeki botanik bahçelerinde canlı yayınlanır.',
    image: 'https://images.unsplash.com/photo-1534710961216-75c88202f43e?q=80&w=800&auto=format&fit=crop',
    isFavorite: false
  },
  {
    id: 'seytan-tirnagi',
    name: 'Şeytan Tırnağı (Rafflesia)',
    latinName: 'Rafflesia arnoldii',
    rarity: 'zor',
    rarityLabel: 'Zor Bulunan (Nadir)',
    category: 'Egzotik & Nadir Türler',
    subCategory: 'Parazit Dev Bitki',
    origin: 'Borneo & Sumatra Yağmur Ormanları',
    careDifficulty: 'İmkansız (Kültüre Alınamaz)',
    sunlight: 'Orman Tabanı Zifiri Gölge',
    watering: 'Tropikal Yağış',
    description: 'Yaprağı, kökü ve gövdesi olmayan, 1 metre çapa ve 11 kg ağırlığa ulaşan dünyanın en büyük tekil çiçeği.',
    fullStory: 'Rafflesia tamamen başka asma köklerinde parazit olarak yaşar. Çiçek açması 9 ay sürer ancak sadece 5-7 gün canlı kalır. Soyu tükenme tehlikesi altında olduğundan uluslararası koruma altındadır.',
    image: 'images/seytan_tirnagi.png',
    isFavorite: false
  },
  {
    id: 'victoria-nilufer',
    name: 'Dev Amazon Nilüferi',
    latinName: 'Victoria amazonica',
    rarity: 'zor',
    rarityLabel: 'Zor Bulunan (Nadir)',
    category: 'Egzotik & Nadir Türler',
    subCategory: 'Su Çiçeği',
    origin: 'Amazon Nehir Havzası',
    careDifficulty: 'Özel Havuz / Botanik Bahçesi',
    sunlight: 'Sıcak Nemli Güneş',
    watering: 'Sürekli Derin Su',
    description: '3 metreye ulaşan yaprakları küçük bir çocuğu taşıyabilen, ilk gece beyaz ikinci gece pembe açan dev su çiçeği.',
    fullStory: 'Victoria amazonica çiçeği açtığı ilk gece dişi olarak beyaz renktedir ve ısı yayarak kın kanatlı böcekleri içine hapseder. İkinci gece polenlerle kaplanıp pembe renge dönerek böcekleri serbest bırakır.',
    image: 'images/victoria_nilufer.png',
    isFavorite: false
  },
  {
    id: 'kutup-meneksesi',
    name: 'Kutup / Alp Menekşesi',
    latinName: 'Silene acaulis',
    rarity: 'zor',
    rarityLabel: 'Zor Bulunan (Nadir)',
    category: 'Egzotik & Nadir Türler',
    subCategory: 'Alp Bitkisi',
    origin: 'Arktik & Yüksek Yükselti Alpleri',
    careDifficulty: 'Aşırı Zor (Donma Şartı)',
    sunlight: 'Sert Dağ Güneşi',
    watering: 'Buzlu Erime Suyu',
    description: 'Kutupların ve dondurucu dağ zirvelerinin kayalıklarında yosun gibi yayılarak açan pembe dayanıklı mucize.',
    fullStory: 'Silene acaulis yüzlerce yıl yaşayabilen yavaş büyüyen bir halı bitkisidir. Sert rüzgarlardan ve -40°C soğuktan korunmak için kayalara kenetlenir. Tohumlarının çimlenmesi karlı kış mevsimine bağlıdır.',
    image: 'images/kutup_meneksesi.png',
    isFavorite: false
  }
];

// Application State Variables
let activeRarityFilter = 'all';
let activeCategoryFilter = 'all';
let searchQuery = '';
let activeSort = 'default';

// DOM Element References
const searchInput = document.getElementById('flower-search-input');
const clearSearchBtn = document.getElementById('clear-search-btn');
const flowerGrid = document.getElementById('flower-grid');
const emptyState = document.getElementById('empty-state');
const tabButtons = document.querySelectorAll('.tab-btn');
const sortSelect = document.getElementById('sort-select');
const searchFeedback = document.getElementById('search-feedback');
const searchResultsText = document.getElementById('search-results-text');
const resetAllFiltersBtn = document.getElementById('reset-all-filters');
const detailModal = document.getElementById('detail-modal');
const modalCloseBtn = document.getElementById('modal-close-btn');
const modalBodyContent = document.getElementById('modal-body-content');
const toastEl = document.getElementById('toast');

// Navigation Button Elements
const navBtnCatalog = document.getElementById('nav-btn-catalog');
const navBtnCategories = document.getElementById('nav-btn-categories');
const navBtnFavorites = document.getElementById('nav-btn-favorites');
const navBtnContact = document.getElementById('nav-btn-contact');

// View Containers
const catalogPageView = document.getElementById('catalog-page-view');
const categoriesPageView = document.getElementById('categories-page-view');
const contactPageView = document.getElementById('contact-page-view');

// Badge Count Elements
const countEasyEl = document.getElementById('count-easy');
const countRareEl = document.getElementById('count-rare');
const countAllBadge = document.getElementById('count-all-badge');
const countKolayBadge = document.getElementById('count-kolay-badge');
const countZorBadge = document.getElementById('count-zor-badge');
const countFavoritesBadge = document.getElementById('count-favorites-badge');
const navFavCount = document.getElementById('nav-fav-count');

// Local Storage for Favorites
function loadFavoritesFromStorage() {
  try {
    const saved = localStorage.getItem('cicekDunyasi_favorites');
    if (saved) {
      const favIds = JSON.parse(saved);
      if (Array.isArray(favIds)) {
        flowersData.forEach(flower => {
          flower.isFavorite = favIds.includes(flower.id);
        });
      }
    }
  } catch (e) {
    console.error('Favorites storage read error', e);
  }
}

function saveFavoritesToStorage() {
  try {
    const favIds = flowersData.filter(f => f.isFavorite).map(f => f.id);
    localStorage.setItem('cicekDunyasi_favorites', JSON.stringify(favIds));
  } catch (e) {
    console.error('Favorites storage save error', e);
  }
}

// Theme Toggle Logic
function initTheme() {
  const savedTheme = localStorage.getItem('cicekDunyasi_theme');
  if (savedTheme) {
    applyTheme(savedTheme);
  } else {
    applyTheme('dark');
  }
}

function applyTheme(theme) {
  const themeIcon = document.getElementById('theme-icon');
  const themeText = document.getElementById('theme-text');
  
  if (theme === 'light') {
    document.documentElement.setAttribute('data-theme', 'light');
    if (themeIcon) themeIcon.textContent = '☀️';
    if (themeText) themeText.textContent = 'Açık Tema';
  } else {
    document.documentElement.removeAttribute('data-theme');
    if (themeIcon) themeIcon.textContent = '🌙';
    if (themeText) themeText.textContent = 'Koyu Tema';
  }
  localStorage.setItem('cicekDunyasi_theme', theme);
}

function toggleTheme() {
  const currentTheme = document.documentElement.getAttribute('data-theme') === 'light' ? 'light' : 'dark';
  const newTheme = currentTheme === 'light' ? 'dark' : 'light';
  applyTheme(newTheme);
  showToast(newTheme === 'light' ? '☀️ Açık tema aktif edildi' : '🌙 Koyu tema aktif edildi');
}

// Initialize Application
document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  loadFavoritesFromStorage();
  updateCounts();
  renderFlowers();
  renderCategoriesView();
  setupEventListeners();
});

// Update Badge Counter Numbers
function updateCounts() {
  const easyCount = flowersData.filter(f => f.rarity === 'kolay').length;
  const rareCount = flowersData.filter(f => f.rarity === 'zor').length;
  const favCount = flowersData.filter(f => f.isFavorite).length;

  if (countEasyEl) countEasyEl.textContent = easyCount;
  if (countRareEl) countRareEl.textContent = rareCount;
  if (countAllBadge) countAllBadge.textContent = flowersData.length;
  if (countKolayBadge) countKolayBadge.textContent = easyCount;
  if (countZorBadge) countZorBadge.textContent = rareCount;
  if (countFavoritesBadge) countFavoritesBadge.textContent = favCount;
  if (navFavCount) navFavCount.textContent = favCount;
}

// Render Flower Cards Grid with Rarity, Category and Search Filters
function renderFlowers() {
  let filtered = flowersData.filter(flower => {
    // 1. Rarity Tab / Favorites Filter
    let rarityMatch = true;
    if (activeRarityFilter === 'favorites') rarityMatch = flower.isFavorite;
    else if (activeRarityFilter !== 'all') rarityMatch = flower.rarity === activeRarityFilter;

    // 2. Category Filter
    let categoryMatch = true;
    if (activeCategoryFilter !== 'all') {
      categoryMatch = (flower.category === activeCategoryFilter);
    }

    return rarityMatch && categoryMatch;
  });

  // 3. Filter by Search Query
  if (searchQuery.trim() !== '') {
    const q = searchQuery.toLocaleLowerCase('tr');
    filtered = filtered.filter(flower => {
      return flower.name.toLocaleLowerCase('tr').includes(q) ||
             flower.latinName.toLocaleLowerCase('tr').includes(q) ||
             flower.category.toLocaleLowerCase('tr').includes(q) ||
             (flower.subCategory && flower.subCategory.toLocaleLowerCase('tr').includes(q)) ||
             flower.description.toLocaleLowerCase('tr').includes(q) ||
             flower.rarityLabel.toLocaleLowerCase('tr').includes(q);
    });
  }

  // 4. Sort Logic
  if (activeSort === 'name-asc') {
    filtered.sort((a, b) => a.name.localeCompare(b.name, 'tr'));
  } else if (activeSort === 'rarity-desc') {
    filtered.sort((a, b) => (a.rarity === 'zor' ? -1 : 1));
  } else if (activeSort === 'rarity-asc') {
    filtered.sort((a, b) => (a.rarity === 'kolay' ? -1 : 1));
  }

  // Update Category Active Banner
  updateCategoryBanner();

  // Update UI search feedback text
  if (searchQuery.trim() !== '' || activeRarityFilter !== 'all' || activeCategoryFilter !== 'all') {
    searchFeedback.classList.remove('hidden');
    let filterLabel = activeRarityFilter === 'favorites' ? 'Favorilerim' : (activeRarityFilter === 'kolay' ? 'Kolay Bulunanlar' : (activeRarityFilter === 'zor' ? 'Nadir Türler' : 'Tüm Türler'));
    let msg = `Görüntülenen: <strong>${filtered.length}</strong> çiçek (${filterLabel}`;
    if (activeCategoryFilter !== 'all') {
      msg += ` • Kategori: <em>${escapeHtml(activeCategoryFilter)}</em>`;
    }
    msg += `)`;
    if (searchQuery.trim() !== '') {
      msg += ` ("<em>${escapeHtml(searchQuery)}</em>" araması için)`;
    }
    searchResultsText.innerHTML = msg;
  } else {
    searchFeedback.classList.add('hidden');
  }

  // Toggle Empty State
  if (filtered.length === 0) {
    flowerGrid.classList.add('hidden');
    emptyState.classList.remove('hidden');

    if (activeRarityFilter === 'favorites') {
      emptyState.innerHTML = `
        <div class="empty-icon">❤️</div>
        <h3>Henüz Favori Çiçek Eklenmedi</h3>
        <p>Beğendiğiniz çiçeklerin kartlarındaki veya detay sayfasındaki kalp (❤️) butonuna tıklayarak favorilerinize ekleyebilirsiniz.</p>
        <button class="btn btn-primary" onclick="resetFilters()">Tüm Çiçekleri Göster</button>
      `;
    } else {
      emptyState.innerHTML = `
        <div class="empty-icon">🔍</div>
        <h3>Aradığınız Çiçek Bulunamadı</h3>
        <p>Arama veya kategori kriterlerinize uyan bir çiçek bulunamadı. Lütfen farklı bir kelime yazmayı veya filtreleri sıfırlamayı deneyin.</p>
        <button class="btn btn-primary" onclick="resetFilters()">Tüm Çiçekleri Göster</button>
      `;
    }
  } else {
    flowerGrid.classList.remove('hidden');
    emptyState.classList.add('hidden');
  }

  // Render HTML Cards
  flowerGrid.innerHTML = filtered.map(flower => createFlowerCardHTML(flower)).join('');
}

// Generate Single Flower Card HTML
function createFlowerCardHTML(flower) {
  const isZor = flower.rarity === 'zor';
  const badgeClass = isZor ? 'zor' : 'kolay';
  const badgeIcon = isZor ? '⭐' : '🌱';

  // Highlight matched search text in flower name if query exists
  let displayName = escapeHtml(flower.name);
  if (searchQuery.trim() !== '') {
    const regex = new RegExp(`(${escapeRegExp(searchQuery)})`, 'gi');
    displayName = displayName.replace(regex, '<mark>$1</mark>');
  }

  return `
    <div class="flower-card" data-id="${flower.id}">
      <div class="card-image-wrapper">
        <img src="${flower.image}" alt="${escapeHtml(flower.name)}" class="card-image" loading="lazy" onerror="this.src='images/red_rose.png'"/>
        <button class="card-fav-btn ${flower.isFavorite ? 'active' : ''}" onclick="toggleFavorite('${flower.id}', event)" title="Favorilere Ekle">
          ${flower.isFavorite ? '❤️' : '🤍'}
        </button>
      </div>

      <div class="card-content">
        <div class="card-meta">
          <span class="card-category" onclick="filterByCategory('${escapeHtml(flower.category)}'); event.stopPropagation();" title="Kategoriye Göre Filtrele" style="cursor: pointer;">
            ${escapeHtml(flower.category)}
          </span>
          <span class="card-latin">${escapeHtml(flower.latinName)}</span>
        </div>
        <h2 class="card-title">${displayName}</h2>
        <div class="card-rarity-row">
          <span class="card-badge ${badgeClass}">
            <span>${badgeIcon}</span> ${flower.rarityLabel}
          </span>
        </div>
        <p class="card-desc">${escapeHtml(flower.description)}</p>

        <div class="card-footer">
          <div class="care-difficulty">
            <span class="care-label">Bakım Seviyesi</span>
            <span class="care-value">${escapeHtml(flower.careDifficulty)}</span>
          </div>
          <button class="btn btn-primary" onclick="openFlowerDetail('${flower.id}')">
            <span>🔍</span> İncele
          </button>
        </div>
      </div>
    </div>
  `;
}

// Render Categories Grid on the Categories Page
function renderCategoriesView() {
  const categoriesGrid = document.getElementById('categories-grid');
  if (!categoriesGrid) return;

  categoriesGrid.innerHTML = categoriesData.map(cat => {
    const flowersInCat = flowersData.filter(f => f.category === cat.id);
    const count = flowersInCat.length;
    const sampleNames = flowersInCat.map(f => f.name).join(', ');

    return `
      <div class="category-card" style="--cat-border: ${cat.borderColor};" onclick="filterByCategory('${escapeHtml(cat.id)}')">
        <div class="cat-card-header" style="background: ${cat.gradient}; border-bottom: 1px solid ${cat.borderColor};">
          <div class="cat-header-top">
            <div class="cat-icon-wrapper" style="border-color: ${cat.borderColor};">
              <span class="cat-icon">${cat.icon}</span>
            </div>
            <span class="cat-count-pill" style="background: rgba(0, 0, 0, 0.4); border: 1px solid ${cat.borderColor};">
              <strong>${count}</strong> Tür Çiçek
            </span>
          </div>
          <h2 class="cat-title">${escapeHtml(cat.name)}</h2>
          <span class="cat-tagline">${escapeHtml(cat.tagline)}</span>
        </div>

        <div class="cat-card-body">
          <p class="cat-desc">${escapeHtml(cat.description)}</p>
          
          <div class="cat-samples-box">
            <span class="cat-samples-title">🌸 Bu Kategorideki Çiçekler:</span>
            <div class="cat-samples-tags">
              ${flowersInCat.map(f => `<span class="cat-sample-tag">${escapeHtml(f.name)}</span>`).join('')}
            </div>
          </div>

          <div class="cat-card-footer">
            <button class="btn btn-primary cat-explore-btn" onclick="filterByCategory('${escapeHtml(cat.id)}'); event.stopPropagation();">
              <span>${cat.icon}</span> ${escapeHtml(cat.name)} Çiçeklerini İncele →
            </button>
          </div>
        </div>
      </div>
    `;
  }).join('');
}

// Filter flowers by Category and jump to Catalog View
function filterByCategory(categoryName) {
  activeCategoryFilter = categoryName;
  switchView('catalog');
  renderFlowers();
  showToast(`📁 <strong>${escapeHtml(categoryName)}</strong> kategorisine ait çiçekler listelendi.`);
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Clear Category Filter
function clearCategoryFilter() {
  activeCategoryFilter = 'all';
  renderFlowers();
  showToast(`🌿 Tüm kategoriler gösteriliyor.`);
}

// Update Active Category Banner Component in Catalog View
function updateCategoryBanner() {
  const banner = document.getElementById('category-active-banner');
  const bannerName = document.getElementById('category-banner-name');
  const bannerCount = document.getElementById('category-banner-count');
  const bannerIcon = document.getElementById('category-banner-icon');

  if (!banner) return;

  if (activeCategoryFilter !== 'all') {
    const catObj = categoriesData.find(c => c.id === activeCategoryFilter);
    const count = flowersData.filter(f => f.category === activeCategoryFilter).length;

    if (bannerName) bannerName.textContent = activeCategoryFilter;
    if (bannerCount) bannerCount.textContent = count;
    if (bannerIcon && catObj) bannerIcon.textContent = catObj.icon;

    banner.classList.remove('hidden');
  } else {
    banner.classList.add('hidden');
  }
}

// Centralized View Switching Helper ('catalog' | 'categories' | 'favorites' | 'contact')
function switchView(targetView) {
  // Hide all view containers
  if (catalogPageView) catalogPageView.classList.add('hidden');
  if (categoriesPageView) categoriesPageView.classList.add('hidden');
  if (contactPageView) contactPageView.classList.add('hidden');

  // Deactivate all navbar links
  if (navBtnCatalog) navBtnCatalog.classList.remove('active');
  if (navBtnCategories) navBtnCategories.classList.remove('active');
  if (navBtnFavorites) navBtnFavorites.classList.remove('active');
  if (navBtnContact) navBtnContact.classList.remove('active');

  if (targetView === 'catalog') {
    if (catalogPageView) catalogPageView.classList.remove('hidden');
    if (navBtnCatalog) navBtnCatalog.classList.add('active');
  } else if (targetView === 'categories') {
    if (categoriesPageView) categoriesPageView.classList.remove('hidden');
    if (navBtnCategories) navBtnCategories.classList.add('active');
    renderCategoriesView();
  } else if (targetView === 'favorites') {
    if (catalogPageView) catalogPageView.classList.remove('hidden');
    if (navBtnFavorites) navBtnFavorites.classList.add('active');
  } else if (targetView === 'contact') {
    if (contactPageView) contactPageView.classList.remove('hidden');
    if (navBtnContact) navBtnContact.classList.add('active');
  }
}

// Event Listeners setup
function setupEventListeners() {
  // Live Search input
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      searchQuery = e.target.value;
      if (searchQuery.trim() !== '') {
        clearSearchBtn.classList.remove('hidden');
      } else {
        clearSearchBtn.classList.add('hidden');
      }
      renderFlowers();
    });
  }

  // Clear Search button
  if (clearSearchBtn) {
    clearSearchBtn.addEventListener('click', () => {
      searchInput.value = '';
      searchQuery = '';
      clearSearchBtn.classList.add('hidden');
      searchInput.focus();
      renderFlowers();
    });
  }

  // Rarity Tab Buttons
  tabButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      tabButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      activeRarityFilter = btn.getAttribute('data-rarity');
      renderFlowers();
    });
  });

  // Sort select dropdown
  if (sortSelect) {
    sortSelect.addEventListener('change', (e) => {
      activeSort = e.target.value;
      renderFlowers();
    });
  }

  // Reset all filters button
  if (resetAllFiltersBtn) {
    resetAllFiltersBtn.addEventListener('click', resetFilters);
  }

  // Theme Toggle Button
  const themeToggleBtn = document.getElementById('theme-toggle-btn');
  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', toggleTheme);
  }

  // Quick tag buttons in Hero
  document.querySelectorAll('.quick-tag-btn').forEach(tagBtn => {
    tagBtn.addEventListener('click', () => {
      const searchVal = tagBtn.getAttribute('data-search');
      const filterVal = tagBtn.getAttribute('data-filter');
      const catVal = tagBtn.getAttribute('data-category');

      if (catVal) {
        filterByCategory(catVal);
        return;
      }

      if (searchVal) {
        searchInput.value = searchVal;
        searchQuery = searchVal;
        clearSearchBtn.classList.remove('hidden');
      }

      if (filterVal) {
        activeRarityFilter = filterVal;
        tabButtons.forEach(b => {
          if (b.getAttribute('data-rarity') === filterVal) {
            b.classList.add('active');
          } else {
            b.classList.remove('active');
          }
        });
      }

      renderFlowers();
    });
  });

  // Navbar View Switchers
  if (navBtnCatalog) {
    navBtnCatalog.addEventListener('click', () => {
      activeRarityFilter = 'all';
      activeCategoryFilter = 'all';
      tabButtons.forEach(b => {
        if (b.getAttribute('data-rarity') === 'all') b.classList.add('active');
        else b.classList.remove('active');
      });
      switchView('catalog');
      renderFlowers();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  if (navBtnCategories) {
    navBtnCategories.addEventListener('click', () => {
      switchView('categories');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  if (navBtnFavorites) {
    navBtnFavorites.addEventListener('click', () => {
      activeRarityFilter = 'favorites';
      tabButtons.forEach(b => {
        if (b.getAttribute('data-rarity') === 'favorites') b.classList.add('active');
        else b.classList.remove('active');
      });
      switchView('favorites');
      renderFlowers();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  if (navBtnContact) {
    navBtnContact.addEventListener('click', () => {
      switchView('contact');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // Email badge button click listener
  const emailBtn = document.getElementById('btn-copy-open-email');
  if (emailBtn) {
    emailBtn.addEventListener('click', (e) => {
      e.preventDefault();
      
      const emailStr = 'palamutiletisim@gmail.com';
      const subject = 'Çiçek Dünyası - Hata ve Öneri Bildirimi';

      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(emailStr).catch(() => {});
      }

      const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${emailStr}&su=${encodeURIComponent(subject)}`;
      window.open(gmailUrl, '_blank');

      setTimeout(() => {
        window.location.href = `mailto:${emailStr}?subject=${encodeURIComponent(subject)}`;
      }, 400);

      showToast(`📧 palamutiletisim@gmail.com için e-posta ekranı açılıyor! (Adres kopyalandı ✨)`);
    });
  }

  // Modal close handlers
  if (modalCloseBtn) modalCloseBtn.addEventListener('click', closeModal);
  if (detailModal) {
    detailModal.addEventListener('click', (e) => {
      if (e.target === detailModal) closeModal();
    });
  }
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && detailModal && !detailModal.classList.contains('hidden')) {
      closeModal();
    }
  });
}

// Web3Forms Access Key
const WEB3FORMS_ACCESS_KEY = '949c47a4-2dae-4f20-a64e-983d94653a8b';

// Contact Form Submit Handler
async function handleContactSubmit(event) {
  event.preventDefault();
  const submitBtn = event.target.querySelector('button[type="submit"]');
  const name = document.getElementById('contact-name').value;
  const userEmail = document.getElementById('contact-email').value;
  const subject = document.getElementById('contact-subject').value;
  const message = document.getElementById('contact-message').value;

  if (WEB3FORMS_ACCESS_KEY && WEB3FORMS_ACCESS_KEY.trim() !== '') {
    const originalBtnText = submitBtn.innerHTML;
    submitBtn.disabled = true;
    submitBtn.innerHTML = '⏳ Gönderiliyor...';

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          name: name,
          email: userEmail,
          subject: `[Çiçek Dünyası] ${subject} - ${name}`,
          message: message,
          from_name: 'Çiçek Dünyası İletişim Formu'
        })
      });

      const result = await response.json();
      if (result.success) {
        showToast(`🎉 Mesajınız palamutiletisim@gmail.com adresine başarıyla iletildi!`);
        document.getElementById('contact-feedback-form').reset();
      } else {
        throw new Error(result.message || 'Gönderim başarısız');
      }
    } catch (err) {
      console.warn('Web3Forms gönderim hatası, mailto yöntemi kullanılıyor:', err);
      triggerMailtoFallback(name, userEmail, subject, message);
    } finally {
      submitBtn.disabled = false;
      submitBtn.innerHTML = originalBtnText;
    }
  } else {
    triggerMailtoFallback(name, userEmail, subject, message);
  }
}

// Fallback Mailto Trigger
function triggerMailtoFallback(name, userEmail, subject, message) {
  const mailSubject = encodeURIComponent(`[Çiçek Dünyası] ${subject} - ${name}`);
  const mailBody = encodeURIComponent(`Gönderen: ${name} (${userEmail})\nKonu: ${subject}\n\nMesaj:\n${message}`);
  const mailtoUrl = `mailto:palamutiletisim@gmail.com?subject=${mailSubject}&body=${mailBody}`;

  window.location.href = mailtoUrl;
  showToast(`📧 E-posta uygulamanız açılıyor... Kime: palamutiletisim@gmail.com`);
  document.getElementById('contact-feedback-form').reset();
}

// Reset All Filters
function resetFilters() {
  if (searchInput) searchInput.value = '';
  searchQuery = '';
  if (clearSearchBtn) clearSearchBtn.classList.add('hidden');
  activeRarityFilter = 'all';
  activeCategoryFilter = 'all';
  activeSort = 'default';
  if (sortSelect) sortSelect.value = 'default';

  tabButtons.forEach(b => {
    if (b.getAttribute('data-rarity') === 'all') b.classList.add('active');
    else b.classList.remove('active');
  });

  updateCategoryBanner();
  renderFlowers();
  showToast(`🌿 Tüm filtreler sıfırlandı.`);
}

// Toggle Favorite State
function toggleFavorite(id, event) {
  if (event) event.stopPropagation();
  const flower = flowersData.find(f => f.id === id);
  if (flower) {
    flower.isFavorite = !flower.isFavorite;
    saveFavoritesToStorage();
    updateCounts();
    showToast(flower.isFavorite ? `❤️ ${flower.name} favorilere eklendi` : `💔 ${flower.name} favorilerden çıkarıldı`);
    renderFlowers();
  }
}

// Open Flower Detail Modal
function openFlowerDetail(id) {
  const flower = flowersData.find(f => f.id === id);
  if (!flower) return;

  const isZor = flower.rarity === 'zor';
  const badgeClass = isZor ? 'zor' : 'kolay';

  modalBodyContent.innerHTML = `
    <img src="${flower.image}" alt="${escapeHtml(flower.name)}" class="modal-hero-img" onerror="this.src='images/red_rose.png'"/>
    <div class="modal-content-inner">
      <div class="modal-header-meta">
        <span class="card-badge ${badgeClass}">${flower.rarityLabel}</span>
        <span class="card-category" onclick="closeModal(); filterByCategory('${escapeHtml(flower.category)}');" style="cursor: pointer;" title="Kategori Çiçeklerini Göster">
          📁 ${escapeHtml(flower.category)}
        </span>
      </div>
      <h2 class="modal-flower-title">${escapeHtml(flower.name)}</h2>
      <div class="modal-latin-title">Botanık Adı: ${escapeHtml(flower.latinName)}</div>

      <div class="modal-grid-info">
        <div class="info-block">
          <div class="info-block-icon">☀️</div>
          <div class="info-block-title">Güneş İhtiyacı</div>
          <div class="info-block-desc">${escapeHtml(flower.sunlight)}</div>
        </div>
        <div class="info-block">
          <div class="info-block-icon">💧</div>
          <div class="info-block-title">Sulama</div>
          <div class="info-block-desc">${escapeHtml(flower.watering)}</div>
        </div>
        <div class="info-block">
          <div class="info-block-icon">🌍</div>
          <div class="info-block-title">Kökene Ait Vatan</div>
          <div class="info-block-desc">${escapeHtml(flower.origin)}</div>
        </div>
      </div>

      <h3 class="modal-section-title">🌿 Çiçek Hakkında ve Özellikler</h3>
      <p class="modal-full-desc">${escapeHtml(flower.description)}</p>

      <h3 class="modal-section-title">📖 Botanik Hikayesi & Yetiştirme Rehberi</h3>
      <p class="modal-full-desc">${escapeHtml(flower.fullStory)}</p>

      <div style="margin-top: 2rem; display: flex; gap: 1rem; justify-content: flex-end; flex-wrap: wrap;">
        <button class="btn btn-outline" onclick="toggleFavorite('${flower.id}'); openFlowerDetail('${flower.id}');">
          ${flower.isFavorite ? '❤️ Favorilerde' : '🤍 Favorilere Ekle'}
        </button>
        <button class="btn btn-primary" onclick="closeModal()">Tamam</button>
      </div>
    </div>
  `;

  detailModal.classList.remove('hidden');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  if (detailModal) detailModal.classList.add('hidden');
  document.body.style.overflow = 'auto';
}

// Toast Notification Helper
function showToast(message) {
  if (!toastEl) return;
  toastEl.innerHTML = message;
  toastEl.classList.remove('hidden');
  setTimeout(() => {
    toastEl.classList.add('hidden');
  }, 3000);
}

// Utility Helpers
function escapeHtml(str) {
  if (!str) return '';
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function escapeRegExp(string) {
  return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}
