const menuOpenButton = document.querySelector("#menu-open-button");
const menuCloseButton = document.querySelector("#menu-close-button");

menuOpenButton.addEventListener("click", () => {
    // toggle mobile menu visibility
    document.body.classList.toggle("show-mobile-menu");
});

// close menu when close button click
menuCloseButton.addEventListener("click", () => menuOpenButton.click());

// initialize swiper
const swiper = new Swiper('.slider-wrapper', {
    loop: true,
    grabCursor: true,
    spaceBetween: 25,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      dynamicBullets: true,
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },


    // responsive breakspoints
    breakpoints: {
        0: {
            slidesPerView: 1
        },
        768: {
            slidesPerView: 2
        },
        1024: {
            slidesPerView: 3
        }
    }
  });
  
  
//   kamus mini

  const dataKamus = {
    benda: [
      { kata: "Bola", arti: "Golo" },
      { kata: "Meja", arti: "Mejang" },
      { kata: "Kursi", arti: "Kadera" },
      { kata: "Pintu", arti: "Tange" },
      { kata: "Gelas", arti: "Canteng" },
      { kata: "Bantal", arti: "Kanggulung" },
      { kata: "Gelang", arti: "Potto" },
      { kata: "Kalung", arti: "Rante" },
      { kata: "Baju", arti: "Waju" },
      { kata: "Celana", arti: "Sulara" },
      { kata: "Pisau", arti: "Piso" },
      { kata: "Ember", arti: "Katoang" },
      { kata: "Timba", arti: "Sero" },
      { kata: "Panci", arti: "Uring" },
      { kata: "Sisir", arti: "Jakka" },
      { kata: "Tali", arti: "Tulu" },
      { kata: "Piring", arti: "Penne" },
      { kata: "Tas", arti: "Tase`" },
      { kata: "Sendok", arti: "Sinru" },
      { kata: "Sarung", arti: "Lipa" }

    ],
    kegiatan: [
      { kata: "Makan", arti: "Manre" },
      { kata: "Tidur", arti: "Matinro" },
      { kata: "Menulis", arti: "Maruki" },
      { kata: "Membaca", arti: "Mabbaca" },
      { kata: "Berjalan", arti: "Jokka" },
      { kata: "Tengkurap", arti: "Moppang" },
      { kata: "Memasak", arti: "Mannasu" },
      { kata: "Menyapu", arti: "Massering" },
      { kata: "Cuci Piring", arti: "Mabbisa penne" },
      { kata: "Mandi", arti: "Cemme" },
      { kata: "Belajar", arti: "Magguru" },
      { kata: "Bermain", arti: "Maccule" },
      { kata: "Duduk", arti: "Tudang" },
      { kata: "Berdiri", arti: "Tettong" },
      { kata: "Bekerja", arti: "Ma`jama" },
      { kata: "Memancing", arti: "Mammeng" },
      { kata: "Menyanyi", arti: "Makkelong" }
	  
    ],
    hewan: [
      { kata: "Ayam", arti: "Manu" },
      { kata: "Udang", arti: "Doang" },
      { kata: "Kepiting", arti: "Bukkang" },
      { kata: "Kambing", arti: "Bembe" },
      { kata: "Kucing", arti: "Meong" },
      { kata: "Anjing", arti: "Asu" },
      { kata: "Kerbau", arti: "Tedong" },
      { kata: "Kuda", arti: "Nyarang" },
      { kata: "Cicak", arti: "Cicca`" },
      { kata: "Kodok", arti: "Cuppang" },
      { kata: "Belalang", arti: "Katimbang" },
      { kata: "Kelabang", arti: "Balipeng" },
      { kata: "Ular", arti: "Ula`" },
      { kata: "Semut", arti: "Bere-Bere" },
      { kata: "Babi", arti: "Bawi" },
      { kata: "Monyet", arti: "Lanceng" },
      { kata: "Rusa", arti: "Jonga" },
      { kata: "Burung", arti: "Dongi-Dongi" },
      { kata: "Kelelawar", arti: "Panning" },
      { kata: "Ikan", arti: "Bale" },
      { kata: "Bangau", arti: "Kondo" },
      { kata: "Lalat", arti: "Lale`" },
    ],
    angka: [
      { kata: "Satu", arti: "Seddi" },
      { kata: "Dua", arti: "Dua" },
      { kata: "Tiga", arti: "Tellu" },
      { kata: "Empat", arti: "Eppa'" },
      { kata: "Lima", arti: "Lima" },
      { kata: "Enam", arti: "Enneng" },
      { kata: "Tujuh", arti: "Pitu" },
      { kata: "Delapan", arti: "Arua" },
      { kata: "Sembilan", arti: "Asera" },
      { kata: "Sepuluh", arti: "Seppulo" },
      { kata: "Sebelas", arti: "Seppulo Seddi" },
      { kata: "Dua Belas", arti: "Seppulo Dua" },
      { kata: "Tiga Belas", arti: "Seppulo Tellu" },
      { kata: "Empat Belas", arti: "Seppulo Eppa" },
      { kata: "Lima Belas", arti: "Seppulo Lima" },
      { kata: "Enam Belas", arti: "Seppulo Enneng" },
      { kata: "Tujuh Belas", arti: "Seppulo Pitu" },
      { kata: "Delapan Belas", arti: "Seppulo Arua" },
      { kata: "Sembilan Belas", arti: "Seppulo Asera" },
      { kata: "Dua Puluh", arti: "Duappulo" }
    ]
  };

  let currentWords = [];

  function bukaKategori(kategori) {
    console.log("bukaKategori called with", kategori);
    currentWords = dataKamus[kategori];
    tampilkanKata(currentWords);
    const popup = document.getElementById("popup-kamus");
    console.log("popup element:", popup);
    popup.classList.remove("hidden");
    document.body.classList.add("popup-open");
  }

  function tampilkanKata(words) {
    const listKata = document.getElementById("list-kata");
    listKata.innerHTML = "";
    words.forEach(item => {
      const div = document.createElement("div");
      div.className = "kata-item";
      div.innerHTML = `<strong>${item.kata}</strong><span>${item.arti}</span>`;
      listKata.appendChild(div);
    });
  }

  function filterKata() {
    const searchInput = document.getElementById("search-kata").value.toLowerCase();
    const filteredWords = currentWords.filter(item => item.kata.toLowerCase().includes(searchInput));
    tampilkanKata(filteredWords);
  }

  function tutupPopup() {
    console.log("tutupPopup called");
    const popup = document.getElementById("popup-kamus");
    console.log("popup element:", popup);
    popup.classList.add("hidden");
    document.body.classList.remove("popup-open");
  }

  // Close when clicking outside
  window.addEventListener("click", function (e) {
    const popup = document.getElementById("popup-kamus");
    const konten = document.querySelector(".popup-konten");
    if (e.target === popup) {
      tutupPopup();
    }
  });

  // Close button event listener
  window.addEventListener("DOMContentLoaded", () => {
    const popupCloseButton = document.getElementById("popup-close-button");
    if (popupCloseButton) {
      popupCloseButton.addEventListener("click", tutupPopup);
    }
  });

  // script js
  var text = '';
$('#bd').before('<div>' + text + '</div>');

function init_document() {
    var element = document.getElementById("ta");
    var jv = DoTransliterate(element.value);
    var pre_view_element = document.getElementById("prev_label");
    pre_view_element.innerHTML = jv;
}
function DoPreview() {
    var text = $("#inp_txt").val();
    var trans_text = DoTransliterate(text);
    $("#prev_label").text(trans_text);
}
function DoAppendTransliteration() {
    var currentText = $("#ta").val();

    var text = $("#inp_txt").val();
    if (text.toLowerCase() == 'clear') {
        /*typing clear in the inputbox is very tempting.. lets write a hack.*/
        $("#inp_txt").val('');
        $("#ta").val('');
        return;
    }
    var trans_text = DoTransliterate(text);
    var finalText = currentText + ' ' + trans_text;
    $("#ta").val(finalText);
    $("#inp_txt").val('');
}
$(document).ready(function () {
    $('#inp_txt').keydown(function (event) {
        if (event.keyCode == '13') {
            DoAppendTransliteration();
        }
    });

    $('#inp_txt').keyup(function () {
        DoPreview();
    });
    DoPreview();

    // Pop-up functionality
    $('#infoButton').click(function() {
        $('#popup').removeClass('hidden'); 
    });

    $('#closePopup').click(function() {
        $('#popup').addClass('hidden'); 
    });
});


// trans-bugis.js 
/*!
* trans-bugis.js
* https://bennylin.github.com/transliterasi/bugis.html
*
* Copyright 2013, Bennylin @bennylin
* Dual licensed under the MIT or GPL Version 2 licenses.
* Released under the MIT, BSD, and GPL Licenses.
*
* Versions:
* 1 Desember 2019 - v 1.0
*
*
* Derived with permission from Hindi Transliteration by Markandey Singh @markandey
* http://www.purplegene.com/static/HindiTranslitration.html
*/
var vowelPrev = false;
/***************************`
Function SuperTrim, findstr
trim string, menemukan karakter di dalam string
****************************/
function SuperTrim(str) {
	str = str || '';
	return str.replace(/^\s*|\s*$/g,'').replace(/\s+/g,' ');
}
function findstr(str,tofind) {
	for (var i = 0; i < str.length; i++)
	if (str[i] == tofind)
	return true;
	return false;
}
/***************************
Function isDigit, isPunct, isVowel
cek apakah digit, tanda baca, atau huruf vokal (a, e/è/é, i, o, u, ě/ê, ô, ā/ī/ū/ō)
****************************/
function isDigit(a) {
	var str = "0123456789";
	return findstr(str,a);
}
function isPunct(a) {
	var str = ",.><?/+=-_}{[]*&^%$#@!~`\"\\|:;()";
	return findstr(str,a);
}
function isVowel(a) {
	var str = "AaEeÈèÉéIiOoUuÊêĚěXxôāīūō";
	return findstr(str,a);
}
function isLCVowel(a) {
	var str = "aeèéiouêěxāūō";
	return findstr(str,a);
}
function isConsonant(a) {
	var str = "BCDfGHJKLMNPRSTVWYZbcdfghjklmnpqrstvwxyzḌḍṆṇṢṣṬṭŊŋÑñɲ";
	//QXqx are special chars, add engma & enye
	return findstr(str,a);
}
/***************************
Function isSpecial, isHR, isLW
cek apakah karakter spesial (bikonsonan/cakra-pengkal/layar-cecak-wignyan/panjingan)
****************************/
function isSpecial(a) {
	var str = "KkPpGgHhRrYy";
	//untuk bikonsonan nga, nka, mpa, nra, nya, nca
	return findstr(str,a);
}
/***************************
Function GetMatra
apabila huruf vokal, return matra (sandhangan swara)
****************************/
function GetMatra(str) {
	var i = 0;
	if (str.length < 1) {
		return "ᨛ";
	}
	while (str[i] == 'h') {
		i++;
		if (i >= str.length) {
			break;
		}
	}
	if (i < str.length) {
		str = str.substring(i);
	}
	var matramap1= {
		"e":'ᨛ', "è":' ᨙ', "é":' ᨙ', "x":' ᨙ', "i":'ᨗ', "o":'ᨚ', "u":'ᨘ', 
		"A":'ᨕ', "E":'ᨕᨛ', "È":'ᨕᨙ', "É":'ᨕᨙ', "X":'ᨕᨙ', "I":'ᨕᨗ', "O":'ᨕᨚ', "U":'ᨕᨘ'
	}
	var matramap2= {
		"e":'ᨛ', "è":' ᨙ', "é":' ᨙ', "x":' ᨙ', "i":'ᨗ', "o":'ᨚ', "u":'ᨘ', 
		"A":'ᨕ', "E":'ᨕᨛ', "È":'ᨕᨙ', "É":'ᨕᨙ', "X":'ᨕᨙ', "I":'ᨕᨗ', "O":'ᨕᨚ', "U":'ᨕᨘ'
	}
	var matramap, mode;
	var modeTranslit = document.getElementsByName("mode");
	for (var rad in modeTranslit) {
		if(modeTranslit[rad].checked)
		mode = modeTranslit[rad].value;
	}
	if(mode == "kopas")
	matramap = matramap2; else //if(mode == "ketik")
	matramap = matramap1;
	if(matramap[str]!==undefined) {
		return matramap[str];
	}
	return "";
}
/***************************
Function GetShift
apabila huruf bikonsonan, return karakter khusus
****************************/
function GetShift(str) {
	str = str.toLowerCase();
	if (str.indexOf("nk") == 0) {
		//suku kata diawali 'nk'
		return {
			"CoreSound": "ᨃ", "len": 2
		}
		;
	} else if (str.indexOf("k") == 1) {
		return {
			"CoreSound": "" + GetCoreSound(str[0]).CoreSound + "ᨛᨀ", "len": 2
		}
		;
	} else if (str.indexOf("k") > 1) {
		//suku kata memiliki konsonan 'h' yang tidak di awal suku
		var sound = "";
		var len = 0;
		var index = 0;
		for (index = 0; index < str.length; index++) {
			var c = str[index];
			if (!isVowel(c)) {
				sound = sound + ResolveCharacterSound(c);
				len++;
			} else {
				break;
			}
		}
		return {
			"CoreSound": sound, "len": len
		}
		;
	}
	if (str.indexOf("mp") == 0) {
		//suku kata diawali 'mp'
		return {
			"CoreSound": "ᨇ", "len": 2
		}
		;
	} else if (str.indexOf("p") == 1) {
		return {
			"CoreSound": "" + GetCoreSound(str[0]).CoreSound + "ᨛᨄ", "len": 2
		}
		;
	} else if (str.indexOf("p") > 1) {
		//suku kata memiliki konsonan 'p' yang tidak di awal suku
		var sound = "";
		var len = 0;
		var index = 0;
		for (index = 0; index < str.length; index++) {
			var c = str[index];
			if (!isVowel(c)) {
				sound = sound + ResolveCharacterSound(c);
				len++;
			} else {
				break;
			}
		}
		return {
			"CoreSound": sound, "len": len
		}
		;
	}
	//nga
	if (str.indexOf("ng") == 0) {
		//suku kata diawali 'ng'
		return {
			"CoreSound": "ᨂ", "len": 2
		}
		;
	} else if (str.indexOf("g") == 1) {
		//g
		return {
			"CoreSound": "" + GetCoreSound(str[0]).CoreSound + "ᨛᨁ", "len": 2
		}
		;
	} else if (str.indexOf("g") > 1) {
		//suku kata memiliki konsonan 'g' yang tidak di awal suku
		var sound = "";
		var len = 0;
		var index = 0;
		for (index = 0; index < str.length; index++) {
			var c = str[index];
			if (!isVowel(c)) {
				sound = sound + ResolveCharacterSound(c);
				len++;
			} else {
				break;
			}
		}
		return {
			"CoreSound": sound, "len": len
		}
		;
	}
	//nya
	if (str.indexOf("ny") == 0) {
		//suku kata diawali 'ny'
		return {
			"CoreSound": "ᨎ", "len": 2
		}
		;
	} else if (str.indexOf("y") == 1) {
		//pengkal
		return {
			"CoreSound": "" + GetCoreSound(str[0]).CoreSound + "ᨛᨐ", "len": 2
		}
		;
	} else if (str.indexOf("y") > 1) {
		//suku kata memiliki konsonan 'y' yang tidak di awal suku
		var sound = "";
		var len = 0;
		var index = 0;
		for (index = 0; index < str.length; index++) {
			var c = str[index];
			if (!isVowel(c)) {
				sound += ResolveCharacterSound(c);
				len++;
			} else {
				break;
			}
		}
		return {
			"CoreSound": sound, "len": len
		}
		;
	}
	if (str.indexOf("nr") == 0) {
		//hr-
		return {
			"CoreSound": "ᨋ", "len": 2
		}
		;
	} else if (str.indexOf("r") == 1) {
		//cakra
		return {
			"CoreSound": "" + GetCoreSound(str[0]).CoreSound + "ᨛᨑ", "len": 2
		}
		;
	} else if (str.indexOf("r") > 1) {
		//suku kata memiliki konsonan 'r' yang tidak di awal suku
		var sound = "";
		var len = 0;
		var index = 0;
		for (index = 0; index < str.length; index++) {
			var c = str[index];
			if (!isVowel(c)) {
				sound += ResolveCharacterSound(c);
				len++;
			} else {
				break;
			}
		}
		return {
			"CoreSound": sound, "len": len
		}
		;
	}
	if (str.indexOf("nc") == 0) {
		//nc
		return {
			"CoreSound": "ᨏ", "len": 2
		}
		;
	} else if (str.indexOf("c") == 1) {
		//c
		return {
			"CoreSound": "" + GetCoreSound(str[0]).CoreSound + "ᨛᨌ", "len": 2
		}
		;
	} else if (str.indexOf("c") > 1) {
		var sound = "";
		var len = 0;
		var index = 0;
		for (index = 0; index < str.length; index++) {
			var c = str[index];
			if (!isVowel(c)) {
				sound = sound + ResolveCharacterSound(c);
				len++;
			} else {
				break;
			}
		}
		return {
			"CoreSound": sound, "len": len
		}
		;
	}
	return {
		"CoreSound": null, "len": 1
	}
	;
}
/***************************
Function GetCoreSound
return aksara nglegana
****************************/
function GetCoreSound(str) {
	var consonantMap1 = {
		"A":"ᨕ", //A
		"B":"ᨅ", //B
		"C":"ᨌ", //C
		"D":"ᨉ", //D
		"E":"ᨕᨛ", //E
		"F":"ᨄ", //F
		"G":"ᨁ", //G
		"H":"ᨖ", //H
		"I":"ᨕᨗ", //I
		"J":"ᨍ", //J
		"K":"ᨀ", //K
		"L":"ᨒ", //L
		"M":"ᨆ", //M
		"N":"ᨊ", //N
		"O":"ᨕᨚ", //O
		"P":"ᨄ", //P
		"Q":"ᨀ", //Q
		"R":"ᨑ", //R
		"S":"ᨔ", //S
		"T":"ᨈ", //T
		"U":"ᨕᨘ", //U
		"V":"ᨄ", //V
		"W":"ᨓ", //W
		"X":"ᨕᨙ", //X
		"Y":"ᨐ", //Y
		"Z":"ᨍ", //Z
'​':"ᨕ", //zws zero-width space
		"a":"ᨕ", //a
		"b":"ᨅ", //b
		"c":"ᨌ", //c
		"d":"ᨉ", //d
		"e":"ᨕᨛ", //e
		"f":"ᨄ", //f
		"g":"ᨁ", //g
		"h":"ᨖ", //h
		"i":"ᨕᨗ", //i
		"j":"ᨍ", //j
		"k":"ᨀ", //k
		"l":"ᨒ", //l
		"m":"ᨆ", //m
		"n":"ᨊ", //n
		"o":"ᨕᨚ", //o
		"p":"ᨄ", //p
		"q":"ᨀ", //q
		"r":"ᨑ", //r
		"s":"ᨔ", //s
		"t":"ᨈ", //t
		"u":"ᨕᨘ", //u
		"v":"ᨄ", //v
		"w":"ᨓ", //w
		"x":"ᨕᨙ", //x
		"y":"ᨐ", //y
		"z":"ᨍ", //z
		"È":"ᨕᨙ", //È
		"É":"ᨕᨙ", //É
		"è":"ᨕᨙ", //è
		"é":"ᨕᨙ" //é
	}
	var consonantMap2 = {
		"A":"ᨕ", //A
		"B":"ᨅ", //B
		"C":"ᨌ", //C
		"D":"ᨉ", //D
		"E":"ᨕᨛ", //E
		"F":"ᨄ", //F
		"G":"ᨁ", //G
		"H":"ᨖ", //H
		"I":"ᨕᨗ", //I
		"J":"ᨍ", //J
		"K":"ᨀ", //K
		"L":"ᨒ", //L
		"M":"ᨆ", //M
		"N":"ᨊ", //N
		"O":"ᨕᨚ", //O
		"P":"ᨄ", //P
		"Q":"ᨀ", //Q
		"R":"ᨑ", //R
		"S":"ᨔ", //S
		"T":"ᨈ", //T
		"U":"ᨕᨘ", //U
		"V":"ᨄ", //V
		"W":"ᨓ", //W
		"X":"ᨕᨙ", //X
		"Y":"ᨐ", //Y
		"Z":"ᨍ", //Z
'​':"ᨕ", //zws zero-width space
		"a":"ᨕ", //a
		"b":"ᨅ", //b
		"c":"ᨌ", //c
		"d":"ᨉ", //d
		"e":"ᨕᨛ", //e
		"f":"ᨄ", //f
		"g":"ᨁ", //g
		"h":"ᨖ", //h
		"i":"ᨕᨗ", //i
		"j":"ᨍ", //j
		"k":"ᨀ", //k
		"l":"ᨒ", //l
		"m":"ᨆ", //m
		"n":"ᨊ", //n
		"o":"ᨕᨚ", //o
		"p":"ᨄ", //p
		"q":"ᨀ", //q
		"r":"ᨑ", //r
		"s":"ᨔ", //s
		"t":"ᨈ", //t
		"u":"ᨕᨘ", //u
		"v":"ᨄ", //v
		"w":"ᨓ", //w
		"x":"ᨕᨙ", //x
		"y":"ᨐ", //y
		"z":"ᨍ", //z
		"È":"ᨕᨙ", //È
		"É":"ᨕᨙ", //É
		"è":"ᨕᨙ", //è
		"é":"ᨕᨙ" //é
	}
	var consonantMap, murda;
	var modeMurda = document.getElementsByName("murda");
	for (var rad in modeMurda) {
		if(modeMurda[rad].checked)
		murda = modeMurda[rad].value;
	}
	if(murda == "pakai")
	consonantMap = consonantMap2; else //if(murda == "tidak")
	consonantMap = consonantMap1;
	var h_shift = GetShift(str);
	var core = str;
	if (h_shift["CoreSound"] == null) {
		if (consonantMap[str.charAt(0)]) core = consonantMap[str.charAt(0)];
		return {
			"CoreSound": core,
			"len": 1
		}
		;
	} else {
		return h_shift;
	}
}
/***************************
Function ResolveCharacterSound
return tanda baca, digit, vokal, maupun nglegana+pangkon
****************************/
function ResolveCharacterSound(c) {
	var str = "" + c;
	var len = 0;
	if (isDigit(c)) {
		return "" + ('' + (c - '0'));
	} else if (isConsonant(str[0])) {
		return "" + GetCoreSound(str).CoreSound + "ᨛ";
	} else {
		//if (isVowel(str[0])) {
		return "" + GetCoreSound(str).CoreSound;
	}
	/**/
}
/***************************
Function GetSound
fungsi yang mentransliterasi masing-masing suku kata
****************************/
function GetSound(str) {
	var len = 0;
	str = SuperTrim(str);
	if (str == null || str == "") {
		return "";
	}
	if (str.length == 1) {
		return ResolveCharacterSound(str[0]);
	} else {
		var core_sound = GetCoreSound(str);
		//return "1"+core_sound.CoreSound+"2";
		var matra = "";
		var konsonan = "";
		if (core_sound.len >= 1) {
			matra = GetMatra(str.substring(core_sound.len));
			//aeiou (suku, wulu, pepet, taling, taling tarung, dll.)
			/*if () {
} else {
}*/
		} else {
			matra = "";
		}
		if (str.indexOf("nggr") == 0) {
			//nggr-
			if (vowelPrev) konsonan = "ᬂᬕ᭄ᬭ";
			//<vowel>nggr-, e.g. panggrahita else konsonan = "ᬗ᭄ᬕ᭄ᬭ";
			//<nonvowel>nggr-, i.e. nggronjal
		} else if (str.indexOf("ngg") == 0) {
			//ngg-
			if (vowelPrev) konsonan = "ᬂᬕ";
			//<vowel>ngg-, e.g. tunggal else konsonan = "ᬗ᭄ᬕ";
			//<nonvowel>ngg-, i.e. nggambar
		} else if (str.indexOf("njl") == 0) {
			//njl-
			konsonan = "ᬜ᭄ᬚ᭄ᬮ";
		} else if (str.indexOf("njr") == 0) {
			//njr-
			konsonan = "ᬜ᭄ᬚ᭄ᬭ";
		} else if (str.indexOf("ngg") == 0) {
			//njr-
			if (vowelPrev) konsonan = "ᬂᬕ";
			//<vowel>ngg-, e.g. tunggal else konsonan = "ᬗ᭄ᬕ";
			//<nonvowel>ngg-, i.e. nggambar
		} else if (core_sound.CoreSound == "ᬦᬜ᭄ᬘ") {
			// -nc-
			konsonan = "ᬜ᭄ᬘ";
			//-nyc-/*
		} else if (core_sound.CoreSound == "ᬦᬜ᭄ᬚ᭄ᬮ") {
			// -njl-
			konsonan = "ᬜ᭄ᬚ᭄ᬮ";
			//-njl-
		} else if (core_sound.CoreSound == "ᬦᬜ᭄ᬚ") {
			// -njr-
			konsonan = "ᬜ᭄ᬚ᭄ᬭ";
			//-njr-*/
		} else if (core_sound.CoreSound == "ᬦᬜ᭄ᬚ") {
			// -nj-
			konsonan = "ᬜ᭄ᬚ";
			//-nyj-
		} else if (core_sound.CoreSound == "ᬤᬟ᭄ᬯ") {
			// -dhw-
			konsonan = "ᬟ᭄ᬯ";
			//-dhw-
		} else if (core_sound.CoreSound == "ᬤᬟ") {
			// -dhy-
			konsonan = "ᬟ";
			//-dhy-
		} else if (core_sound.CoreSound == "ᬢᬝ᭄ᬯ") {
			// -thw-
			konsonan = "ᬝ᭄ᬯ";
			//-dhw-
		} else if (core_sound.CoreSound == "ᬢᬝ") {
			// -thy-
			konsonan = "ᬝ";
			//-dhy-
		} else if (findstr(core_sound.CoreSound,'') && matra == "᭄") {
			// pengkal
			konsonan = core_sound.CoreSound;
			matra = "";
			//-y-
		} else if (findstr(core_sound.CoreSound,'') && matra == "᭄") {
			// cakra
			konsonan = core_sound.CoreSound;
			matra = "᭄ᬭ";
			//-r-
		} else if (findstr(core_sound.CoreSound,'᭄ᬭ') && matra == "ᭂ") {
			// cakra keret
			if ((str[0] == "n" && str[1] == "y") || ((str[0] == "t" || str[0] == "d") && str[1] == "h")) {
				konsonan = GetCoreSound(str[0]+str[1]).CoreSound + "";
				matra = "";
				//nyrê-, thrê-, dhrê-
			} else if (str[0] == "n" && str[1] == "g") {
				if (str[2] == "g") konsonan = "ᬗ᭄ᬕ"; else konsonan = "ᬗ";
				matra = "";
				//nggrê-/ngrê-
			} else {
				konsonan = GetCoreSound(str[0]).CoreSound + "";
				matra = "";
				//-rê-
			}
		} else if (findstr(core_sound.CoreSound, 'ᬮ') && matra == "ᭂ") {
			// nga lelet
			if ((str[0] == "n" && str[1] == "y") || ((str[0] == "t" || str[0] == "d") && str[1] == "h")) {
				konsonan = GetCoreSound(str[0]+str[1]).CoreSound + "᭄ᬮᭂ";
				matra = "";
				//nylê-, thlê-, dhlê-
			} else if (str[0] == "n" && str[1] == "g") {
				if (str[2] == "g") konsonan = "ᬗ᭄ᬕ᭄ᬮᭂ"; else konsonan = "ᬗ᭄ᬮᭂ";
				matra = "";
				//ngglê-/nglê-
			} else if (str[0] == "l") {
				konsonan = "ᬍ";
				matra = "";
				//-lê-
			} else {
				konsonan = GetCoreSound(str[0]).CoreSound + "᭄ᬮᭂ";
				matra = "";
				//-lê-
			}
		} else if (core_sound.CoreSound == 'ᬝ᭄ᬭ' || core_sound.CoreSound == 'ᬟ᭄ᬭ' || core_sound.CoreSound == 'ᬗ᭄ᬭ' || core_sound.CoreSound == 'ᬜ᭄ᬭ') {
			// i.e. nyruput
			konsonan = core_sound.CoreSound;
			if (matra == "᭄") matra = "";
		} else if (core_sound.CoreSound == "ᬮᬮ᭄ᬮ") {
			// -ll-
			konsonan = "ᬮ᭄ᬮ";
			//double -l-
		} else if (core_sound.CoreSound == "ᬃᬃᬭ") {
			// -rr-
			konsonan = "ᬃᬭ";
			//double -r-
		} else if (core_sound.CoreSound == "ᬃᬃᬳ") {
			// -rh-
			konsonan = "ᬃᬳ";
			//-rh-
		} else if (core_sound.CoreSound == "ᬃᬃᬮ") {
			// -rl-
			konsonan = "ᬃᬮ";
			//-rl-
		} else if (core_sound.CoreSound == "ᬃᬃᬯ") {
			// -rw-
			if (vowelPrev) konsonan = "ᬃᬯ";
			//-rw- -- arwana else konsonan = "ᬭ᭄ᬯ";
			//rw- -- rwa/rwi/rwab
		} else if (core_sound.CoreSound == "ᬃᬃᬘ") {
			// -rc-
			konsonan = "ᬃᬘ";
			//-rc-
		} else if (core_sound.CoreSound == "ᬄᬄᬳ") {
			// -hh-
			konsonan = "ᬄᬳ";
			//double -h-
		} else if (core_sound.CoreSound == "ᬄᬄᬮ") {
			// -hl-
			if (vowelPrev) konsonan = "ᬄᬮ";
			//-hl- else konsonan = "ᬳ᭄ᬮ";
			//hlam
		} else if (core_sound.CoreSound == "ᬄᬄᬯ") {
			// -hw-
			if (vowelPrev) konsonan = "ᬄᬯ";
			//-hw- else konsonan = "ᬳ᭄ᬯ";
			//hwab,hwan
		} else if (core_sound.CoreSound == "ᬄᬳ") {
			// -hy-
			if (vowelPrev) konsonan = "ᬄᬬ";
			//sembahyang else konsonan = "ᬳ";
			//hyang/*
		} else if (core_sound.CoreSound == "ᬄᬄ") {
			// hrx-
			konsonan = "ᬳ᭄ᬭ";
			//hrx-
		} else if (core_sound.CoreSound == "ᬄᬄ᭄ᬭ") {
			// hr-
			if (matra == "ᭂ") konsonan = "ᬳ";
			//hr- else konsonan = "ᬳ᭄ᬭ";
			//hr-
		} else if (core_sound.CoreSound == "ᬄᬳ᭄ᬭ") {
			// hr-
			if (matra == "ᭂ") konsonan = "ᬳ";
			//hr- else konsonan = "ᬳ";
			//hr-
		} else if (core_sound.CoreSound == 'ᬄ' && matra == "᭄") {
			// wignyan - 12 April
			konsonan = "ᬳ";
			//ha
		} else if (core_sound.CoreSound == 'ᬄ' && matra != "᭄") {
			// wignyan
			konsonan = "ᬳ";
			//ha
		} else if (core_sound.CoreSound == 'ᬃ' && matra == "ᭂ") {
			// pa cerek
			konsonan = "ᬋ";
			matra = "";
			//rê
		} else if (core_sound.CoreSound == 'ᬃ' && matra != "᭄") {
			// layar
			konsonan = "ᬭ";
			//ra
		} else if (core_sound.CoreSound == 'ᬂ' && matra != "᭄") {
			// cecak
			konsonan = "ᬗ";
			//nga
		} else if (core_sound.CoreSound == 'ᬂ' && matra == "᭄") {
			// cecak
			konsonan = "ᬂ";
			matra = "";
			//cecak
		} else {
			konsonan = core_sound.CoreSound;
		}
		return "" + konsonan + matra;
	}
}
/***************************
Function DoTransliterate
fungsi utama yang dipanggil (main function)
****************************/
function DoTransliterate(str) {
	var i = 0;
	var ret = "";
	var pi = 0;
	var vowelFlag = false;
	startVowel = false;
	str = SuperTrim(str);
	while (i < str.length) {

        if (i > 0 && isVowel(str[i]) && isVowel(str[i-1])) { //deal with words that start with multiple vocals
               str = str.substring(0, i)+'​'+str.substring(i, str.length);
        }
		if ((isSpecial(str[i])) && !vowelFlag) {
			//i++;
		} else if ((str[i] == 'h' && vowelFlag) || (!isVowel(str[i]) && i > 0) || (str[i] == ' ') || isPunct(str[i]) || isDigit(str[i]) || ((i - pi) > 5)) {
			ret += GetSound(str.substring(pi, i));
            if (str[i] == ' ') { ret += ' '; }
			if (isPunct(str[i])) {
					ret += str[i];
					pi = i + 1;
			} else {
				pi = i;
			}
			vowelFlag = false;
		} else if (isVowel(str[i]) && str[i] != 'h') {
			//ret += GetSound(str.substring(pi, i));
			vowelFlag = true;
		}
		if (pi > 0 && isVowel(str[pi-1])) {
			//<vowel>ngg
			vowelPrev = true;
		} else vowelPrev = false;
		i++;
	}
	//endwhile
	if (pi < i) {
		ret += GetSound(str.substring(pi, i));
	}
	return SuperTrim(ret);
}

// emailjs
(function(){
    emailjs.init("Ah8zZmZDNBrxiDG9R"); 
  })();

  // Form handling
  const contactForm = document.getElementById('contact-form');

  contactForm.addEventListener('submit', function(event) {
    event.preventDefault();

    emailjs.sendForm('service_fvs69fn', 'template_n6sd5gp', this)
      .then(() => {
        alert('Pesanmu berhasil terkirim!');
        contactForm.reset();
      }, (error) => {
        alert('Ups, gagal mengirim pesan. Coba lagi ya.');
        console.error('FAILED...', error);
      });
  });