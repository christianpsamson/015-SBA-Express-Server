const artists = [
  {
    id: "fac3011d",
    artist: "The Weeknd",
  },
  {
    id: "0bcea2de",
    artist: "Ed Sheeran",
  },
  {
    id: "43d0bfbe",
    artist: "Lewis Capaldi",
  },
  {
    id: "73c07cc5",
    artist: "Post Malone and Swae Lee",
  },
  {
    id: "f7fd25ad",
    artist: "Tones and I",
  },
  {
    id: "7da8d035",
    artist: "Drake featuring Wizkid and Kyla",
  },
  {
    id: "8fddce8f",
    artist: "The Kid Laroi and Justin Bieber",
  },
  {
    id: "da6d4f8f",
    artist: "Post Malone featuring 21 Savage",
  },
  {
    id: "09a38a13",
    artist: "The Weeknd featuring Daft Punk",
  },
  {
    id: "a79be4c6",
    artist: "Harry Styles",
  },
  {
    id: "435f95ed",
    artist: "Imagine Dragons",
  },
  {
    id: "31997f79",
    artist: "Glass Animals",
  },
  {
    id: "87c96e20",
    artist: "Ed Sheeran",
  },
  {
    id: "6a629b18",
    artist: "The Chainsmokers featuring Halsey",
  },
  {
    id: "93f146a7",
    artist: "Shawn Mendes and Camila Cabello",
  },
  {
    id: "aff9b131",
    artist: "James Arthur",
  },
  {
    id: null,
    artist: "Billie Eilish and Khalid",
  },
  {
    id: "96af0809",
    artist: "The Neighbourhood",
  },
  {
    id: "48aab495",
    artist: "Harry Styles",
  },
  {
    id: "be30985b",
    artist: "Dua Lipa",
  },
  {
    id: "b4671a31",
    artist: "Billie Eilish",
  },
  {
    id: "ac07f5f2",
    artist: "Juice WRLD",
  },
  {
    id: "987372fd",
    artist: "Ed Sheeran",
  },
  {
    id: "d61777f4",
    artist: "Drake",
  },
  {
    id: "e4cebc52",
    artist: "Ed Sheeran",
  },
  {
    id: "83070d4e",
    artist: "The Chainsmokers and Coldplay",
  },
  {
    id: "5b2b4399",
    artist: "Queen",
  },
  {
    id: "b0a475f2",
    artist: "Hozier",
  },
  {
    id: "a21ceff6",
    artist: "Post Malone",
  },
  {
    id: "8041d22e",
    artist: "Lady Gaga and Bradley Cooper",
  },
  {
    id: "f501d5bc",
    artist: "Justin Bieber",
  },
  {
    id: "aa58bde9",
    artist: "John Legend",
  },
  {
    id: "b47866b3",
    artist: "Vance Joy",
  },
  {
    id: "8c676b84",
    artist: "Imagine Dragons",
  },
  {
    id: "3497d3c3",
    artist: "OneRepublic",
  },
  {
    id: 99607221,
    artist: "Travis Scott featuring Kendrick Lamar",
  },
  {
    id: "ec5473bf",
    artist: "Ariana Grande",
  },
  {
    id: "555d40d7",
    artist: "XXXTentacion",
  },
  {
    id: "15c342ae",
    artist: "Macklemore & Ryan Lewis featuring Ray Dalton",
  },
  {
    id: "cbce7069",
    artist: "Twenty One Pilots",
  },
  {
    id: "ae8cd097",
    artist: "Avicii",
  },
  {
    id: "4b6461e7",
    artist: "The Weeknd",
  },
  {
    id: "fc112f72",
    artist: "XXXTentacion",
  },
  {
    id: "879de214",
    artist: "Passenger",
  },
  {
    id: "74c3b637",
    artist: "Tom Odell",
  },
  {
    id: "6491c2bc",
    artist: "Kendrick Lamar",
  },
  {
    id: "815eae80",
    artist: "Calvin Harris and Dua Lipa",
  },
  {
    id: "3163a063",
    artist: "Lil Uzi Vert",
  },
  {
    id: "89fc403f",
    artist: "Olivia Rodrigo",
  },
  {
    id: "f02345e6",
    artist: "Imagine Dragons",
  },
  {
    id: "66232a1c",
    artist: "Olivia Rodrigo",
  },
  {
    id: "31d965dc",
    artist: "Travis Scott featuring Drake",
  },
  {
    id: "90ab2587",
    artist: "Dua Lipa",
  },
  {
    id: "aa7b970e",
    artist: "Camila Cabello featuring Young Thug",
  },
  {
    id: "8a45ff9f",
    artist: "Marshmello and Bastille",
  },
  {
    id: "cdacd152",
    artist: "Shawn Mendes",
  },
  {
    id: "0cb7bf88",
    artist: "Eminem",
  },
  {
    id: "d1ced53b",
    artist: "J. Cole",
  },
  {
    id: 16997078,
    artist: "DJ Snake featuring Justin Bieber",
  },
  {
    id: "663c38fb",
    artist: "Coldplay",
  },
  {
    id: 4.1275e29,
    artist: "Arctic Monkeys",
  },
  {
    id: "32ca0cc4",
    artist: "The Killers",
  },
  {
    id: "2854dd42",
    artist: "Justin Bieber",
  },
  {
    id: "052b4adc",
    artist: "Dua Lipa featuring DaBaby",
  },
  {
    id: "2e6cefba",
    artist: "Sam Smith",
  },
  {
    id: "03bf83c7",
    artist: "Lil Nas X featuring Jack Harlow",
  },
  {
    id: "6128581c",
    artist: "Halsey",
  },
  {
    id: "a7f98209",
    artist: "Sam Smith",
  },
  {
    id: "6396f7ca",
    artist: "Major Lazer and DJ Snake featuring MØ",
  },
  {
    id: "ec21d22f",
    artist: "The Weeknd",
  },
  {
    id: "b7c3802e",
    artist: "Post Malone featuring Quavo",
  },
  {
    id: "7c046719",
    artist: "Post Malone",
  },
  {
    id: "a1d5d546",
    artist: "Maroon 5",
  },
  {
    id: "c557cda8",
    artist: "Bad Bunny and Jhay Cortez",
  },
  {
    id: "c5e9b134",
    artist: "Mark Ronson featuring Bruno Mars",
  },
  {
    id: "1e9fa365",
    artist: "Saint Jhn with Imanbek",
  },
  {
    id: "07145915",
    artist: "Bruno Mars",
  },
  {
    id: "7933442d",
    artist: "Eminem",
  },
  {
    id: "9a6d81c1",
    artist: "Alan Walker",
  },
  {
    id: "002ce3a8",
    artist: "Shawn Mendes",
  },
  {
    id: "919cabf9",
    artist: "Mike Posner and Seeb",
  },
  {
    id: "e19485c0",
    artist: "French Montana featuring Swae Lee",
  },
  {
    id: "c6ad934c",
    artist: "Oasis",
  },
  {
    id: "3c5d8a25",
    artist: "Bruno Mars",
  },
  {
    id: "5403857f",
    artist: "Lil Nas X",
  },
  {
    id: "b404bf85",
    artist: "Nirvana",
  },
  {
    id: "f86cade3",
    artist: "Eminem featuring Nate Dogg",
  },
  {
    id: "950831a6",
    artist: "The Chainsmokers featuring Daya",
  },
  {
    id: "9dd3b294",
    artist: "Bruno Mars",
  },
  {
    id: 53512636,
    artist: "Ariana Grande",
  },
  {
    id: "f21f30b8",
    artist: "Coldplay",
  },
  {
    id: "c03bfee4",
    artist: "BTS",
  },
  {
    id: "b2b3ecfb",
    artist: "24kGoldn and Iann Dior",
  },
  {
    id: "d870f03b",
    artist: "Queen",
  },
  {
    id: "1d07d003",
    artist: "XXXTentacion",
  },
  {
    id: "e57bc4d7",
    artist: "Ed Sheeran and Justin Bieber",
  },
  {
    id: "6700ff2e",
    artist: "Shawn Mendes",
  },
  {
    id: "c3402097",
    artist: "Elton John and Dua Lipa with Pnau",
  },
  {
    id: "41bda425",
    artist: "Linkin Park",
  },
  {
    id: "f94af544",
    artist: "Roddy Ricch",
  },
];

module.exports = artists;
